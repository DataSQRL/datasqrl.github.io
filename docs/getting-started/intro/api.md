---
title: "Using the API"
---

# Accessing the API

DataSQRL generates an API for the data service you define in the SQRL script. Let's play with those APIs to see how you can access the data from your application.

:::info

We will be accessing the generated GraphQL API. If you are new to the GraphQL API standard, take a quick look at the [GraphQL Primer](/docs/reference/api/graphql-primer) 
We [are working](/docs/dev/roadmap#rest) on REST support.

:::


## Retrieving Table Records

DataSQRL generates an API endpoint for each table defined in the SQRL script that has the same name as the table.
That'll be our starting point for any API request.

We have seen this `Products` query a few times already:
```graphql
{
    products(filter: [{ id: {eq: "1"}}]) {
        items {
            name
            sizing
            weight_in_grams
        }
    } 
}
```

It asks for all products that match the filter condition `id=1` (`eq` stands for "equals") and returns the product's `name`, `sizing`, and `weight_in_grams`.

The easiest way to test GraphQL queries is through the GraphiQL IDE in your browser. Open the URL `localhost:7050/graphiql/`, enter queries you want to run on the left side, hit the run button, and observe the result on the right.

GraphiQL is also useful for developing your own API queries. It provides auto-completion, syntax highlighting, and a schema browser that allows you to explore the API.

### Filters

All query endpoints support the optional `filter` argument to select a subset of the rows from the table. You can provide multiple filters to query for rows that match all the filters. For example, we can query for all products of type "Nuts" that weight more than 1000 grams:

```graphql
{
    products(filter: [{ type: {eq: "Nuts"}}, {weight_in_gram: {gt: 1000}}]) {
        items {
            name
            weight_in_gram
        }
    } 
}
```

The predicate `gt` stands for "greater than". You can also use `lt` for "less than", `gteq` for "greater than or equal", etc.

### Pagination

To query for all products, you remove the filter argument. That's a lot of results, however. The API supports pagination by default, so we can page through the results rather than getting them all at once. This is important when you are dealing with large datasets.

```graphql
{
    products(pageSize: 20, pageState: "") {
        items {
            name
        }
        pageInfo {
            hasNextPage
            nextPageState
        }
    } 
}
```

We added the `pageSize` argument to tell the API that we wish to page through the data with 20 rows per page. The empty `pageState` argument tells the API to return the first page. You can also omit that argument to retrieve the first page. \
However, to access subsequent pages, we pass the `nextPageState` value that was returned on the previous request. The `hasNextPage` field is `true` if there is a subsequent page.

### Ordering

We can also control the order in which results are returned. To have the results of our previous "give me all nuts that are heavier than 1000 grams" query returned in the order of increasing weight, we add the `order` argument:

```graphql
{
    products(filter: [{ type: {eq: "Nuts"}}, {weight_in_gram: {gt: 1000}}],
             order: [{weight_in_gram: ASC}]) {
        items {
            name
            weight_in_gram
        }
    } 
}
```

## Navigating Relationships

One of the benefits of defining relationships in SQRL is that we can navigate those relationships in the API and retrieve related records of data. 

```graphql
{
    customers(filter: [{ id: {eq: "50"}}]) {
        items {
            purchases(filter: [{time: {gt: "2022-02-01"}}], 
                      order: [{time: DESC}], pageSize:100 ) {
                id
                time
                entries(pageSize: 50) {
                    quantity
                    product {
                        name
                        weight_in_grams
                    }
                }
            }
        }
    } 
}
```

This queries navigates multiple relationships to fetch all the data we need to show a customer's purchase history of the last month. Let's dissect it. \
At the top level, we are using the `customers` endpoint to query for the customer with `id=50`. We then navigate through the `purchases` relationship and filter out all orders that were placed before February (i.e. last month). In addition, we want those purchases ordered by time decreasing and only fetch up to 100 of them. For each purchase order, we navigate through the `entries` relationship to fetch up to 50 nested order entries. And for each order entry, we navigate through the `product` relationship to get the product information for the ordered product.

Relationships allow us to construct complex queries which return all the data we need in a single request. We don't have to stitch our desired result set together by querying multiple tables. That saves you a ton of time and is also a lot faster.

When you navigate through a relationship, you can use the `filter`, `order`, `pageSize` argument in the same way you would when querying a table at the top level to specify which related records you want to be returned, in what order, and how many of them.

Note, that these arguments are applied locally for each record that is returned. In the query above, `entries(pageSize: 50)` means that we are asking for up to 50 order entries *for each* purchase order and not 50 total for the entire request. Since this query can return up to 100 purchase orders, the result of this request could potentially return 5000 order entries total in the worst case. \
As we navigate through relationships, we need to keep in mind that result set cardinalities multiply and choose small enough page sizes to avoid huge responses from the server.

## Application Development

Once we designed the queries we need, it's time to call them from our application.

### Creating Query Templates

The first step is to take our queries and convert them to generic query templates. For instance, we take the query for a customer's recent purchase history, give it a name, and introduce variables for those query conditions we want to set in our application.

```graphql
query GetRecentPurchases($customerid: Int!, $after: DateTime!) {
    customers(filter: [{ id: {eq: $customerid}}]) {
        items {
            purchases(filter: [{time: {gt: $after}}], 
                      order: [{time: DESC}], pageSize:100 ) {
                id
                time
                entries(pageSize: 50) {
                    quantity
                    product {
                        name
                        weight_in_grams
                    }
                }
            }
        }
    } 
}
```

This is the exact same query we build above with two differences:
1. We gave it the name `GetRecentPurchases` so we can reference it from our application.
2. We introduced the variables `$customerid` for the customer id and `$after`for the date we are filtering customer purchases on. We will set those variables in the application code.

Create a sub-folder `queries` in the folder where you created the customer 360 SQRL script and save the query template above in a file called `queries/GetRecentPurchases.graphql`. We store each of the query patterns we want to invoke from our application in a separate file that has the name of the query. That makes it obvious where things are and easy to develop.

### Invoking Queries in Application

You can now use the query templates to retrieve data from the API in the programming language of your choice. \
We are going to build a little react app in Javascript, but take a look at [Querying in JVM/Android](/docs/guides/api/graphql-jvm) or [Querying in iOS](/docs/guides/api/graphql-ios)
to see how to query the API from a JVM based language (e.g. Android or Kotlin) or an iOS application. You can invoke the DataSQRL generated GraphQL API from any programming language with a GraphQL client.

If you don't have the [Apollo GraphQL client](https://www.apollographql.com/docs/react/) and GraphQL support installed yet, let's get that out of the way first:

```bash
npm install @apollo/client graphql
```

Create the Javascript file `index.js` in the same folder as the customer360.sqrl script and add the following code:
```js
import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import recentPurchasesQuery from 'queries/GetRecentPurchases.graphql';

const client = new ApolloClient({
  uri: 'http://localhost:7050/graphql/customer360',
  cache: new InMemoryCache()
});
```

We import React, the Apollo GraphQL client, and our query. Then we connect the client to the DataSQRL GraphQL API. Importing GraphQL query templates requires a Webpack loader. Add the following rule to your webpack config file:

```js
module: {
  rules: [
    {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    },
  ],
},
```

With all this setup out of the way, let's build a React component that displays the purchase history for a customer.

```js
function Purchase({id, time, entries}) {
    return (
        <div>
        <h2>Order No. {id}</h2>
        <p>Order placed on {time}</p>
        <h3>Order Entries</h3>
        {entries.map((props, idx) => (
            <Entry key={idx} {...props} />
        ))}
        </div>
    );
}

function Entry({quantity, product}) {
    return (
        <div>
        <p>{quantity} {product.name}</p>
        </div>
    );
}

function PurchaseHistory({customerid}) {
  const dayInMillis = 24*60*60*1000;
  const after = new Date(new Date().getTime() - 31*dayInMillis).toLocaleDateString()
  const { loading, error, data } = useQuery(recentPurchasesQuery, {
    variables : { customerid, after }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.items.map((props, idx) => (
     <Purchase key={idx} {...props} />
  ));
}

```

We defined 3 React components: `Purchase`, `Entry`, and `PurchaseHistory`. The first two components wrap each order record and each entry record into HTML. The real action is in `PurchaseHistory` where we invoke the method `useQuery` to submit the imported `recentPurchasesQuery` against the API via the configured client. We submit the variables `customerid` and `after` with the query. We compute `after` as the date that's 31 days prior to now whereas `customerid` is an attribute of the component.

To wrap up our simple React application, we are going to define a React component that represents the entire webpage and contains the `PurchaseHistory` component.


```js
function Customer360() {
  return (
    <div>
      <h2>Customer 360</h2>
      <ExchangeRates customerid=50 />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <Customer360 />
  </ApolloProvider>,
  document.getElementById('root'),
);
```

The render method connects the GraphQL client to React and renders all the components.

*How do you run this?*

## Subscriptions

In the [last section](sqrl), we defined the subscription event table `NewCustomerPromotion` to trigger an event whenever a customer spent more than $100 dollars with our nut shop.

Subscriptions allow us to pass such events to other systems that need to be notified. We use the generated API to *pull* data out of DataSQRL and subscriptions to *push* data out to other systems.

Before we can push data somewhere, we need to define a *data sink* to push data into. Data sinks are similar to data sources, but instead of being a system where we read data from it is a system we write data to. DataSQRL provides support for different types of sinks: queues, database, filesystem, and cloud storage.

We are going to connect a filesystem sink to our DataSQRL server which writes subscription events to a file on disk inside the `output` folder in the current directory.

```bash
datasqrl sink folder output
```

You'll see the following response to confirm a successful connection.

```bash
Connected sink "output" to DataSQRL server "localhost:7050"
```

To link the  `NewCustomerPromotion` subscription in our Customer 360 script to `output` sink we just connected, we create a small configuration file called `subscriptions.json` in the same folder as our script with the following content:

```json
[
  {
    "subscription": "NewCustomerPromotion",
    "sinks" : [{ "name" :  "output" }]
  }
]
```

If you are running the `customer360.sqrl` script in development mode, interrupt the process by pressing `CTRL-C`. Then restart it with the subscription configuration as an argument:

```bash
datasqrl dev customer360.sqrl -s subscriptions.json
```

This runs our script in development with the subscription linked to the file sink. If you wait a few seconds for the server to process the script, you will see the file `newcustomerpromotion.json` appear in the `output` folder with json records for each customer that has spent more than $100 with us.

:::info

Subscriptions in the GraphQL API are currently [on the roadmap](/docs/dev/roadmap#graphqlsubs).

:::


## API Customization

DataSQRL automatically generates the GraphQL API using the names of the tables, columns, and relationships you define the SQRL script. Often, that's good enough. Sometimes you want to overwrite those defaults to customize the API. Let's talk about the most common customizations.

### Hide Elements

Tables, columns, and relationships with names that start with an underscore `_` are not visible in the API. This allows you to define elements that are only accessible inside your script.

For our recommendation engine, we defined the column `recent_avg_protein` on `Customers` so we could sort products by their similarity in protein content. We use that column only for our internal computation and don't want to expose it through the API. Hence, we should rename it to `_recent_avg_protein` (remember to also rename it inside the `products_by_protein` nested table definition). When you save the script, the field will disappear from the API.

### Renaming

When you define a table, column, or relationship you can add an `@api` annotation to specify the name that appears in the generated API for that element. Annotations are added above the statement they apply to as an SQL comment.

```sqrl
-- @api(name="Product", query="getproducts")
Products := DISTINCT Products ON id ORDER BY _ingest_time DESC;
```

This annotation changes the name of the `Products` type in the GraphQL API to `Product` (singluar). For tables, we can also specify the name of the query endpoint used to query the table.

```sqrl
-- @api(name="Product", query="getproducts")
Products := DISTINCT Products ON id ORDER BY _ingest_time DESC;
```

Save the script and you'll see both the query and type name change in the generated GraphQL API.



### Nested Pagination

The generated API does not provide nested pagination by default. That makes it simpler to query the API. But sometimes there are too many items returned when you navigate a relationship or query a nested table. In those cases, you can explicity enable pagination with the `@api` annotation.

```sqrl
-- @api(paginate=true)
Customers.products_by_protein :=
        SELECT p.id AS productid, ABS(p.nutrition.protein-_._recent_avg_protein) AS protein_difference FROM Products p
        ORDER BY protein_difference ASC LIMIT 20;
```

This annotation enables pagination for the nested `products_by_protein` table. When you refresh the API you can see that the `products_by_protein` field on `Customers` returns a page with `items` and `pageInfo` fields. 

## Next Steps



---

* Other sink types
