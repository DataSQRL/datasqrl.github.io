---
title: "Query"
---

# Query GraphQL APIs

:::danger
This page is work-in-progress as we add additional languages. 
:::

GraphQL is a query language for APIs. DataSQRL exposes GraphQL APIs that can be queried from any programming language or application. This page provides examples for querying GraphQL APIs in various languages to help you get started. It is neither complete nor comprehensive. For a complete resource on GraphQL visit [graphql.org](https://graphql.org). This page is only meant to get you started.

If you are unfamiliar with GraphQL, we recommend that you [learn about GraphQL](https://graphql.org/learn/) before proceeding.

For the example code snippets below, we are following the [Quickstart tutorial](/docs/getting-started/quickstart) and assume you are [running](/docs/getting-started/quickstart#run) the Quickstart SQRL script on your local machine. To connect to a different server or use a different example, you need to change the server URI and query examples.

## GraphQL Playground

DataSQRL includes [GraphiQL](https://github.com/graphql/graphiql) which allows you to create, execute, and profile queries as well as inspect the GraphQL API directly in your browser.

After you [run](../../operations/command#run) your SQRL script on your machine, open the URL `http://localhost:8888/graphiql/` in a browser to access GraphiQL.

Now, you can paste GraphQL queries into the left-hand panel and hit the play button `▸` in the middle to see the result in the right-hand panel.

GraphiQL shows you the GraphQL schema of the API by opening the "Documentation" tab. You can inspect the schema to validate that DataSQRL generated your data API correctly.

GraphiQL also allows you to specify arguments for variables in your queries and set headers. It's a user-friendly IDE for designing GraphQL queries.

## JavaScript

### Apollo Client

Import and configure the [Apollo GraphQL client](https://www.apollographql.com/docs/react/) as follows.
If you don't have the client installed, run `npm install @apollo/client graphql` first.

```js title="index.js"
import { ApolloClient, gql} from "@apollo/client";

const client = new ApolloClient({ 
  uri: 'http://localhost:8888/graphql/'
});
```

Now, you can execute GraphQL queries as follows:

```js
const CUSTOMER_SPENDING = gql`
  query CustomerSpending($customerid: Int!) {
    Customers(id: $customerid) {  
        spending {
            month
            spend
            saved
        }
    }
  }
`;

const customerid = 10;

client
  .query({
    query: CUSTOMER_SPENDING,
    variables: { customerid },
  })
  .then(result => console.log(result));
```

### Apollo Client React

additional clients coming soon

## Java

### Spring Boot

https://stackoverflow.com/questions/70519410/how-to-invoke-graphql-api-from-a-java-spring-boot-application-is-there-any-anno