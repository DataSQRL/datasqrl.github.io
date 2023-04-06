---
title: "Quickstart Tutorial"
---

# DataSQRL Quickstart in 5 Minutes

<img src="/img/getting-started/squirrel_seedshop.png" alt="Nut Shop Tutorial >|" width="40%"/>

Because we have the humor of middle schoolers on Adderall, this quickstart tutorial
implements data-driven features for our online DataSQRL seed shop. Seeds and squirrels - how funny are we?

We want to build a data service that exposes a Customer's purchase history and provides a spending analysis. Let's create an SQRL script for this purpose.

## Run SQRL Script {#run}

In the terminal or command line, create an empty folder for the SQRL script:

```bash
> mkdir seedshop; cd seedshop
```

Create a new file in that folder called `seedshop.sqrl` and paste the following content into the file:

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

Now run the DataSQRL compiler to build a data service from the data transformations and aggregations defined in the script:

```bash
docker run -it -p 8888:8888 -v $PWD:/build datasqrl/datasqrl-cmd run seedshop.sqrl
```

:::note

To run this command you need to have [Docker](https://docs.docker.com/get-docker/) installed on your machine and running. The first time you run this command takes an eternity to download the compiler.

:::

## Query Data API {#query}

The running data pipeline compiled by DataSQRL exposes a GraphQL data API which you can access by opening `http://localhost:8888/graphiql/` in your browser. Write GraphQL queries in the left-hand panel. For example, copy the following query:

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

When you hit the "run" button you get the purchase history and spending analysis for the customer with `id=10` in the right-hand panel. You now have a working data API you can integrate into your application. That took less time than installing a software update.

## Quick Tour of SQRL

The magic of our little seed-shop data service happens in the SQRL script we created above. The SQRL script imports data tables and defines new tables based on that data. Those tables are exposed in the API. If you have another few minutes to spare, let's look at how that works.

:::info

SQRL is an extension of SQL, and we are going to use some basic SQL syntax. If you are unfamiliar with SQL, we recommend you read our [SQL Primer](/docs/reference/sqrl/sql-primer) first.

:::


```sql 
IMPORT datasqrl.seedshop.Orders;  
```

The `import` statement imports the `Orders` table from the package [datasqrl.seedshop](https://dev.datasqrl.com/package/datasqrl.seedshop). SQRL treats data like software dependencies which makes it easier to depend on external data sources and allows the compiler to manage all the data plumbing for you.

The `Orders` table has a nested `items` table to represent the nested items records for each order. SQRL supports nested tables to represent hierarchical data natively.

```sql
Orders.items.total := quantity * unit_price - discount?0.0;
```

In SQRL we can add columns to existing tables via simple column expressions. Here, we are adding the `total` column to the nested `Orders.items` table to compute the total price for each item in an order.

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

There you have it: a whole data service packed into a little script. And DataSQRL takes care of all the laborious scaffolding and pipeline construction to make it work. What are you going to build next?

## Next Steps {#next}

Read the [DataSQRL introduction](intro/overview) which extends our seed shop example and explains all the concepts we touched up here in more detail.

If you found this short tutorial too dense or missing information, the [DataSQRL introduction](intro/overview) will fill in the gaps and teach you everything you need to know to build your own data services in DataSQRL.