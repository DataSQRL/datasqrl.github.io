---
title: "DataSQRL Tutorial"
---

# DataSQRL Tutorial

The DataSQRL tutorial introduces you to everything you need to know about DataSQRL while building a Customer 360° application and recommendation engine. The tutorial is broken into individual chapters that focus on a particular aspect of DataSQRL.

<img src="/img/getting-started/squirrel_seedshop.png" alt="Nut Shop Tutorial >|" width="40%"/>

Because we have the humor of middle schoolers, we are going to build customer experience features for our ficticious online DataSQRL seed shop. Seeds and squirrels - how funny are we?

Specifically, we will build a data product to integrate customer data from various sources, process it, and provide features like spending analysis, recommendations, and personalized offers through an API to enhance our seed shop customer experience.

That sounds like a lot, but DataSQRL makes it easy. Plus, we'll break it up into chapters to introduce core DataSQRL concepts one at a time.

## Setup

Before we get started, let's get some setup tasks out of the way:

1. Make sure you have [Docker installed](https://docs.docker.com/get-docker/) and running on your machine. Run `docker compose version` in the terminal and check that the version starts with `v2`.
2. Create a directory for our project files. Type the following into your terminal or command line:

```bash
> mkdir seedshop; cd seedshop
```

## Create SQL Script {#sqrl}

Create a new file called `seedshop.sqrl` and paste the following content into the file:

```sql
IMPORT datasqrl.seedshop.Orders;  
IMPORT time.endOfWeek;            

Orders.items.total := quantity * unit_price - discount?0.0;
Orders.totals := SELECT sum(total) as price,
                  sum(discount?0.0) as saving FROM @.items;

Users := SELECT DISTINCT customerid AS id FROM Orders;

Users.purchases := JOIN Orders ON Orders.customerid = @.id;

Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(t.price) AS spend, sum(t.saving) AS saved
      FROM @.purchases p JOIN p.totals t
      GROUP BY week ORDER BY week DESC;
```

:::info

This tutorial assumes some basic familiarity with SQL. If you are unfamiliar with SQL, we recommend you read our [SQL Primer](/docs/reference/sqrl/sql-primer) first.

:::

We express the data transformations and processing of our service in SQL by incrementally defining tables and columns. DataSQRL's flavor of SQL is called **SQRL** because DataSQRL supports relationships and reactions to changes in data (hence the extra "**R**").

Let's break down this SQRL script line-by-line:

```sql 
IMPORT datasqrl.seedshop.Orders;  
```

The `import` statement imports the `Orders` table from the package [datasqrl.seedshop](https://dev.datasqrl.com/package/datasqrl.seedshop). SQRL treats data like software dependencies which makes it easier to depend on external data sources and allows the compiler to manage all the data plumbing for you. This data source is imported from the [DataSQRL repository](https://dev.datasqrl.com). We'll discuss how to create your own data sources in a [future chapter](../data-sources).

The `Orders` table has a nested `items` table to represent the nested item records for each order. SQRL supports nested tables to represent hierarchical data natively via the `.` dot notation.

```sql
Orders.items.total := quantity * unit_price - discount?0.0;
```

We are adding the `total` column to the nested `Orders.items` table to compute the total price for each item in an order.

```sql 
Orders.totals := SELECT sum(total) as price,
                  sum(discount?0.0) as saving FROM @.items;
```

We are defining `totals` as a nested table underneath `Orders` to compute the total price and savings for each order by aggregating over all items in the order. Note the use of `@` in the `FROM` clause. `@` refers to each row in the parent `Orders` table and is used when defining localized queries. A localized query allows us to refer to the items for *each* order instead of aggregating across items for *all* orders.

`Orders.items` is a nested table that is accessible via the relationship column `items` from each row in the `Orders` table to retrieve the items of that order.

SQRL supports relationships as first-class citizens of the language, so we can express relationships in the data explicitly.

```sql
Users.purchases := JOIN Orders ON Orders.customerid = @.id;
```
This statement defines the relationship column `purchases` on the `Users` table which links a user to the orders they placed. The `@` refers to the parent `Users` table on the left-hand side.

And, for the grand finale, we have the spending analysis that aggregates a user's total spending by week:

```sql
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(t.price) AS spend, sum(t.saving) AS saved
      FROM @.purchases p JOIN p.totals t
      GROUP BY week ORDER BY week DESC;
```
`spending` is defined as a nested table underneath `Users` and uses the imported time-window function `endOfWeek` to aggregate the totals for all orders that fall within a given week.

Note, that we can use previously defined relationships in `FROM` clauses and `JOIN` to simplify the query.

We are going to cover SQRL in more detail in the [next chapter](../sqrl), but the bottom line is this: SQRL is just SQL with some syntactic sugar that makes it easier to represent nested data and relationships, so you can structure your data how you want to expose it.

## Run Script {#run}

Invoke the DataSQRL compiler to build an integrated pipeline from the data transformations and aggregations defined in the script:

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile seedshop.sqrl
```

Launch the pipeline with:
```bash
(cd build/deploy; docker compose up)
```

:::note

If you run into an 'java.lang.OutOfMemoryError: Could not allocate enough memory segments for NetworkBufferPool' error, increase the memory resources in the docker settings to at least 6gb.

:::


## Query Data API {#query}

The running pipeline compiled by DataSQRL exposes a GraphQL data API which you can access by opening [`http://localhost:8888//graphiql/`](http://localhost:8888//graphiql/) in your browser. Write GraphQL queries in the left-hand panel. For example, copy the following query:

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
When you hit the "run" button you get the purchase history and spending analysis for the customer with `id=10` in the right-hand panel.

Feel free to adjust the query and play around with the API. Note, how DataSQRL maps every table to an API endpoint and exposes the data with the structure and relationships we defined in the script.

In this example, DataSQRL is generating the API for us which is convenient when you are starting out. In a [future chapter](../api) we are going to customize the API to our needs.

:::info
To stop the pipeline, interrupt it with `CTRL-C` and shut it down with:
```bash
(cd build/deploy; docker compose down -v)
```
It's important to remove the containers and volumes with this command before launching another pipeline to get updated containers. 
:::

## Next Steps {#next}

And that's how you build data pipelines with DataSQRL: write a SQRL script, run the DataSQRL command to compile and run a pipeline, and inspect the API to verify that it meets your expectations.

In the following chapters, we will cover each of these steps in more detail. First up: [writing the SQRL script](../sqrl).
