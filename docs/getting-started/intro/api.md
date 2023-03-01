---
title: "Design the API"
---

# Querying and Designing the API

<img src="/img/generic/undraw_specs.svg" alt="Designing the API >" width="50%"/>

When we [run](../quickstart#run) our `seedshop.sqrl` script, DataSQRL compiles and executes a data pipeline that exposes an API to access the resulting data. We [queried](../quickstart#query) the API via GraphiQL in the browser by opening `http://localhost:8888/graphiql/`. Let's look at those queries in more detail.

:::info

We will be accessing the generated GraphQL API. If you are new to the GraphQL API standard, take a quick look at the documentation for [querying GraphQL](/docs/reference/api/graphql/query). We [are working](/docs/dev/roadmap#rest) on REST support.

:::

## Querying the API

In the [Quickstart tutorial](../quickstart#query) we retrieved the purchase history and spending analysis of the user with `id=10` by running the following query.

```graphql
{
Users (id: 10) {
    purchases {
        id
        totals {
            price
            saving
        }
    }    
    spending {
        week
        spend
        saved
    }
}}
```

At the root of this query, we are querying the `Users` table for rows that match the given id. We then navigate along the `purchases` and `spending` relationships to query for the related rows from the `Orders` and nested `Users.spending` tables, respectively.

Defining relationships explicitly in SQRL allows us to query related data easily in the API. We can also use filters in relationships to select the related rows we want to retrieve.

```graphql
{
Products (category: "acorns") {
  name
  weight_in_gram
  category
  volume_10day(country: "US") {
    quantity
    spend
    weight
  }
}}
```

This query retrieves all products from the "acorns" category. Acorns are a favorite among squirrels. We then navigate to the nested `volume_10day` relationship to the nested table that aggregates orders of that product over the last 10 days and groups them by country. We filter those rows to only retrieve the aggregates for the US.

Relationships allow us to construct complex queries which return all the data we need in a single request. We don't have to stitch our desired result set together by querying multiple tables. That saves you a ton of time and is also a lot faster.

## Customizing the API Specification

By default, DataSQRL generates an API specification that exposes query endpoints for all tables defined in the SQRL script and makes all fields in those tables accessible, including relationships to navigate to related tables. In addition, DataSQRL generates field filters for all queries and relationships that give the user of the API the option to filter out rows.

DataSQRL writes the default API specification to the file `schema.graphqls` in the current directory when you invoke the compiler with the `-a graphql` option:

```bash
docker run -v $PWD:/build datasqrl/datasqrl-cmd compile seedshop.sqrl -a graphql
```

The default API specification is a great starting point for designing a custom data API because it exposes *all* the data. However, we'd almost never use the default API spec, because it is too general and cluttered. Let's customize it to fit our needs.


First, let's take a look at the API specification that DataSQRL generated for us as a GraphQL schema `schema.graphqls`.

```graphql
type NumOrders {
  count: Int!
}

type Products {
  id: Int!
  name: String!
  sizing: String!
  weight_in_gram: Int!
  type: String!
  category: String!
  usda_id: Int!
  updated: String!
  ordered_items(productid: Int, quantity: Int, unit_price: Float, discount: Float, total: Float): [items!]
  volume_10day(country: String, quantity: Int, spend: Float, weight: Int): [volume_10day!]
}

type Query {
  NumOrders(count: Int): [NumOrders!]
  Orders(id: Int, customerid: Int, time: String): [orders!]
  Products(id: Int, name: String, sizing: String, weight_in_gram: Int, type: String, category: String, usda_id: Int, updated: String): [Products!]
  Users(id: Int, first_name: String, last_name: String, email: String, ip_address: String, country: String, changed_on: Int, timestamp: String): [Users!]
}

type Users {
  id: Int!
  first_name: String!
  last_name: String!
  email: String!
  ip_address: String
  country: String
  changed_on: Int!
  timestamp: String!
  purchases(id: Int, customerid: Int, time: String): [orders!]
  spending(week: String, spend: Float, saved: Float): [spending!]
  past_purchases(productid: Int, num_orders: Int, total_quantity: Int): [past_purchases!]
}

.... [truncated]
```

The GraphQL schema has one type for each table we defined in the SQRL script. The types have a field for each column in the associated table, including relationship columns. Tables map to types and columns map to fields based on name.

The `Query` type contains one query endpoint for each (non-nested) table. The queries and relationships have one argument for each field in the queried or related table. When those arguments are provided by a user querying the API, they translate to a filter on the returned rows from the underlying table. In our query examples above, we filtered `Users` by id, `Products` by category, and the `volume_10day` relationship traversal by country.

If we specify multiple arguments, only those rows are returned that match all filter conditions.

However, most of the filters we don't need in the API, so we are going to remove them and trim down the API. We are also going to limit the query endpoints and remove some fields we don't want to expose in the API.

Rename the `schema.graphqls` file to `seedshop.graphqls` and change it to the following.

```graphql
type Products {
  id: Int!
  name: String!
  sizing: String!
  category: String!
  volume_10day(country: String): [volume_10day!]
}

type Query {
  Products(id: Int, name: String, category: String): [Products!]
  Users(id: Int!): Users
}

type Users {
  id: Int!
  first_name: String!
  last_name: String!
  country: String
  purchases: [orders!]
  spending: [spending!]
  past_purchases(productid: Int): [past_purchases!]
}

type items {
  quantity: Int!
  unit_price: Float!
  discount: Float!
  total: Float!
  product: Products!
}

type orders {
  id: Int!
  time: String!
  items: [items!]
  totals: totals
}

type past_purchases {
  productid: Int!
  num_orders: Int!
  total_quantity: Int!
}

type spending {
  week: String!
  spend: Float!
  saved: Float!
}

type totals {
  price: Float!
  saving: Float!
}

type volume_10day {
  country: String
  quantity: Int!
  spend: Float!
  weight: Int!
}
```

Note, that we removed the entire `NumOrders` table because we don't need it for now.
We changed the `Users` table query endpoint to `Users(id: Int!): Users` to make a user id required and return only a single user (which may be `null` if it doesn't exist) instead of a list of users `[Users!]`.

To instruct the DataSQRL compiler to use our custom API specification, we add it as a second argument to the command.

```bash
docker run -it -p 8888:8888 -v $PWD:/build datasqrl/datasqrl-cmd run seedshop.sqrl seedshop.graphqls
```

If refresh GraphiQL in the browser, you will see your custom API.

Another neat benefit of customizing and trimming down the API specification is that it allows DataSQRL to generate more efficient data pipelines. DataSQRL automatically removes computations that aren't visible in the API and selects optimal index structures for the database based on the filters that are available in the API.

### Pagination

Our current API always returns all filtered results for queries or when navigating relationships. In some cases, those result sets can be very large, and we don't want to transfer huge result sets through the API. Instead, we want to allow consumers of our API to page through the results.

We are going to add limit+offset based pagination to our API. It only requires adding the `limit: Int, offset: Int` arguments to queries and relationship fields.

```graphql
type Products {
  id: Int!
  name: String!
  sizing: String!
  weight_in_gram: Int!
  type: String!
  category: String!
  volume_10day(country: String, limit: Int, offset: Int): [volume_10day!]
}

type Query {
  Products(id: Int, name: String, category: String, limit: Int, offset: Int): [Products!]
  Users(id: Int!): Users
}

type Users {
  id: Int!
  first_name: String!
  last_name: String!
  email: String!
  country: String
  purchases(limit: Int, offset: Int): [orders!]
  spending: [spending!]
  past_purchases(productid: Int): [past_purchases!]
}
```

Update the `seedshop.graphqls` schema with limit+offset pagination as shown above, save the file, and re-run the script. You can now execute the following query.

```graphql
{
Products (category: "acorns", limit: 2, offset: 2) {
  name
  weight_in_gram
  category
  volume_10day(limit: 2) {
    quantity
    spend
    weight
  }
}}
```

This query limits the number of returned products to 5 starting after position 2 in the complete result set. When you navigate through a relationship, you can filter records and use `limit` and `offset` in the same way you would when querying a table at the top level to specify which related records you want to be returned, in what order, and how many of them.

Note, that these arguments are applied locally for each record that is returned. In the query above, `volume_10day(limit: 2) ` means that we are asking for up to 2 results *for each* product and not 2 total for the entire request. <br />
As we navigate through relationships, we need to keep in mind that result set cardinalities multiply and choose small enough page sizes to avoid huge responses from the server.

## Next Steps

And there we have our custom, polished data API in GraphQL. You can see the final GraphQL schema [here](https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-user.graphqls).

Wonderful, you have completed the 3 essential steps of building a data service with DataSQRL:
* Writing SQRL scripts
* Connecting data sources
* Designing and querying the data API

Now you can go off, build amazing data services, and [tell us](/community) about it.

If you are eager to continue learning, [**the next chapter**](advanced) is going to cover some advanced topics and talk about how to take your data API to production. 

If you want to learn more about querying the data API from your application or favorite programming language, the [reference documentation](/docs/reference/api/graphql/query) has an overview. It also [covers API design](/docs/reference/api/graphql/design) in more detail.
