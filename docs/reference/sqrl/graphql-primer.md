

##### Full Example GraphQL Schema

The following is the final customized GraphQL schema for our [DataSQRL tutorial example](../../../../getting-started/intro/overview).

```graphqls
type Query {
  Orders(time: String, limit: Int!, offset: Int = 0): [Orders!]
  Users(id: Int!): Users
}

type Users {
  id: Int!
  purchases(limit: Int!, offset: Int): [Orders!]
  spending(week: String, limit: Int = 20): [spending!]
}

type spending {
  week: String!
  spend: Float!
  saved: Float!
}

type Orders {
  id: Int!
  customerid: Int!
  time: String!
  items: [items!]
  totals: totals
}

type items {
  productid: Int!
  quantity: Int!
  unit_price: Float!
  discount: Float
  total: Float!
}

type totals {
  price: Float!
  saving: Float!
}
```

#### Mutations

To supporting adding data through the API you add a mutation to the GraphQL schema. The mutation should have a single argument with the input type of the data to be added. The return type of the mutation can contain all or some of the fields of the input type in addition to the special field `_source_time` which contains the timestamp when the data was added.

For example, in the [DataSQRL tutorial](/docs/getting-started/intro/api) we added the following mutation to capture product page visits:

```graphql
type Mutation {
  ProductVisit(event: VisitEvent!): CreatedProductVisit
}

input VisitEvent {
  userid: Int!
  productid: Int!
}

type CreatedProductVisit {
  _source_time: String!
  productid: Int!
  userid: Int!
}
```

This defines a single mutation called `ProductVisit` which accepts input data of the type `VisitEvent`.

The added data can then be [imported](/docs/reference/sqrl/import) into a SQRL script by using the GraphQL schema file name as the package name and the name of the mutation as the table name.

For example, if the GraphQL schema filename is `seedshop.graphqls` then we can import the product page visit data via

```sql
IMPORT seedshop.ProductVisit;
```

#### Pagination

Our current API always returns all filtered results for queries or when navigating relationships. In some cases, those result sets can be very large, and we don't want to transfer huge result sets through the API. Instead, we want to allow consumers of our API to page through the results.

We are going to add limit+offset based pagination to our API. It only requires adding the `limit: Int, offset: Int` arguments to queries and relationship fields.

```graphql
type Products {
  id: Int!
  name: String!
  sizing: String!
  category: String!
  volume_10day(country: String, limit: Int = 20, offset: Int = 0): [volume_10day!]
}

type Query {
  Products(id: Int, name: String, category: String, limit: Int!, offset: Int = 0): [Products!]
  Users(id: Int!): Users
}

type Users {
  id: Int!
  first_name: String!
  last_name: String!
  country: String
  purchases(limit: Int = 20, offset: Int = 0): [orders!]
  spending: [spending!]
  past_purchases(productid: Int): [past_purchases!]
}
.... [truncated]
```

The `limit` argument limits the size of the returned result set to the given number. The `offset` argument moves to the given position in the result set before starting to retrieve records.
Both arguments can be made required and given a default value as shown in the example above.

Update the `seedshop.graphqls` schema with limit+offset pagination as shown above, save the file, and re-run the script. You can now execute the following query.

```graphql
{
Products (category: "acorns", limit: 2, offset: 2) {
  name
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

##### Mutations and Inserting Data

Next, we are going to collect product visits through the API in order to improve our recommendation engine with recent user behavior. We are going to capture when a user visits a product page and aggregate those product visits to determine which products a user is interested in.

First, we are going to add a mutation to our GraphQL API schema to capture the product visit event. Add the following to the end of the `seedshop.graphqls` file:

```graphql
type Mutation {
  ProductVisit(event: VisitEvent!): CreatedProductVisit
}

input VisitEvent {
  userid: Int!
  productid: Int!
}

type CreatedProductVisit {
  _source_time: String!
  productid: Int!
  userid: Int!
}
```

We created a mutation (i.e. an API endpoint that accepts data) called `ProductVisit` that accepts an input of type `VisitEvent` and returns the type `CreatedProductVisit`.

When you create mutations, the input type can have arbitrary fields to represent the data you want to capture. The fields of the mutation return type must be a subset of those fields plus the special field `_source_time` which returns the time when the event was created on the server.

The use the product visits in our SQRL script, we import it like the other data before. Add the following line to the imports in the `seedshop.sqrl`.

```sql
IMPORT seedshop.ProductVisit;
```

To import the data from a mutation, you use the name of the GraphQL schema file as the package name (i.e. `seedshop`) and the mutation name as the table name (i.e. `ProductVisit`).

Now, we can aggregate the product visits over the last 90 days for each user to determine what products they might like:

```sql
Users.product_visits := SELECT productid, count(1) as visits
      FROM @ JOIN ProductVisit v ON @.id = v.userid
      WHERE v._source_time > now() - INTERVAL 90 DAY
      GROUP BY productid ORDER BY visits DESC;
```

Add the table definition after `Users.past_purchases` and save the SQRL script.

To retrieve `product_visits` through the API, we add the corresponding type and relationship to the GraphQL schema:

```graphql

type User {
  [existing fields...]
  product_visits: [product_visits!]
}

type product_visits {
  productid: Int!
  visits: Int!
}
```

And there we have our custom, polished data API in GraphQL that allows us to query and add data. Check out the [final GraphQL schema](https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-mutation.graphqls) and [corresponding SQRL script](https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-mutation.sqrl).

A server engine efficiently processes data API requests, fetches the result set, and returns it.

DataSQRL currently supports the following server engines:

* [Vertx](../vertx): Vertx is concurrent and asynchronous server engine for Java.
#### Graphql Integration
<!-- -->
Sqrl and graphql are mapped to each other
BYO graphql schema is supported with some extra rules


Another neat benefit of customizing and trimming down the API specification is that it allows DataSQRL to generate more efficient data pipelines. DataSQRL automatically removes computations that aren't visible in the API and selects optimal index structures for the database based on the filters that are available in the API.


GraphQL is a query language for APIs. DataSQRL exposes GraphQL APIs that can be queried from any programming language or application. This page provides examples for querying GraphQL APIs in various languages to help you get started. It is neither complete nor comprehensive. For a complete resource on GraphQL visit [graphql.org](https://graphql.org). This page is only meant to get you started.

If you are unfamiliar with GraphQL, we recommend that you [learn about GraphQL](https://graphql.org/learn/) before proceeding.

For the example code snippets below, we are following the [DataSQRL tutorial](/docs/getting-started/intro/overview) and assume you are [running](/docs/getting-started/intro/overview#run) the Quickstart SQRL script on your local machine. To connect to a different server or use a different example, you need to change the server URI and query examples.

##### GraphQL Playground

DataSQRL includes [GraphiQL](https://github.com/graphql/graphiql) which allows you to create, execute, and profile queries as well as inspect the GraphQL API directly in your browser.

After you [run](../../../operations/command#run) your SQRL script on your machine, open the URL [`http://localhost:8888//graphiql/`](http://localhost:8888//graphiql/) in a browser to access GraphiQL.

Now, you can paste GraphQL queries into the left-hand panel and hit the play button `▸` in the middle to see the result in the right-hand panel.

GraphiQL shows you the GraphQL schema of the API by opening the "Documentation" tab. You can inspect the schema to validate that DataSQRL generated your data API correctly.

GraphiQL also allows you to specify arguments for variables in your queries and set headers. It's a user-friendly IDE for designing GraphQL queries.


<img src="/img/generic/undraw_specs.svg" alt="Designing the API >" width="50%"/>

When we [run](../overview#run) our `seedshop.sqrl` [script](https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-sqrl.sqrl), DataSQRL compiles a data pipeline that exposes an API to access the resulting data. We [queried](../../quickstart#query) the API via GraphiQL in the browser by opening `http://localhost:8888//graphiql/`. Let's look at those queries in more detail.

:::info

We will be accessing the generated GraphQL API. If you are new to the GraphQL API standard, take a quick look at the documentation for [querying GraphQL](/docs/reference/api/graphql/query). We are working on REST support.

:::

**Querying the API**

In the [first chapter](../overview) we retrieved the purchase history and spending analysis of the user with `id=10` by running the following query.

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


Tables are mapped to types in the GraphQL schema and table columns map to fields of that type. The field data type is the same as the column data type from the table. If the type isn't available in GraphQL, it is serialized into a generic type like `string`.

Relationship columns of a table map to fields of the type associated with the table. The type of that field is the type associated with the table that the relationship links to.

The mapping between tables and types and (relationship) columns and fields is established by case-insensitive name. That means, to expose the table `Orders` in the API we have to create a type `Orders` or `orders` in the GraphQL schema.

For example, the `Orders` table we imported in the [DataSQRL tutorial](../../../../getting-started/intro/overview) maps onto the following type in GraphQL
```graphql
type Orders {
  id: Int!
  customerid: Int!
  time: String!
  items(productid: Int, quantity: Int, unit_price: Float, discount: Float, total: Float): [items!]
  totals: totals
}
```
The type has one field for each column in the table with the same name as the column. The data type of the field is determined by the data type of the column. The exclamation mark `!` indicates that a field is non-null, which is also inferred from the data type of the column.

The type has a relationship field `items` that links to the nested `Orders.items` table which is mapped to the type `items` in the GraphQL schema. For nested tables, the type name is equal to the name of the table and not the full table path.

The field `totals` is a relationship field to the nested `Orders.totals` table that aggregates the total price and savings for each order. The compiler infers whether a relationship has a to-one or to-many multiplicity. The `totals` relationship returns a single object of type `totals` whereas the `items` relationship returns an array of `[items!]`. For to-one relationships, no optional argument filters are generated.

The relationship field accepts optional arguments for each field of the related type to filter on. That means, if we traverse the `items` relationship and provide an argument for product id `productid: 10`, then the relationship field only returns those items where the product id is equal to `10`.

The nested table `Users.spending` is mapped to the following type in GraphQL
```graphql
type spending {
  week: String!
  spend: Float!
  saved: Float!
  parent: Users!
}
```
The type has a field for each column in the table. In addition, it has the relationship field `parent` that relates a nested table record to its parent record from the `Users` table.

Non-nested tables in the script  map onto query entry-points of the same name as the table which can be used to query the table. In the [DataSQRL tutorial](../../../../getting-started/intro/overview), we have the root (i.e. non-nested) tables `Orders` and `Users` which are exposed through the following query endpoints:
```graphl
type Query {
  Orders(id: Int, customerid: Int, time: String): [orders!]
  Users(id: Int): [Users!]
}
```

Like relationship fields, query fields have optional arguments for each field of the returned type to filter on. For example, `Users(id: 5)` returns the user with id equal to `5`.


## Trimming

In our [DataSQRL tutorial](../../../../getting-started/intro/overview) we don't need any filters for the items in each order, so we remove all the arguments from that field.
```graphql
type Orders {
  id: Int!
  customerid: Int!
  time: String!
  items: [items!]
  totals: totals
}
```
We also don't need to navigate from the nested `Users.spending` back to `Users` so we remove the `parent` relationship field.
```graphql
type spending {
  week: String!
  spend: Float!
  saved: Float!
}
```
For the query endpoints, we only want to filter `Orders` by `time` and return a single user by id, with the `id` being a required argument:
```graphql
type Query {
  Orders(time: String): [Orders!]
  Users(id: Int!): Users
}
```