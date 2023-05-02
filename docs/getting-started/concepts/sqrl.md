---
title: "What is SQRL?"
---

# What is SQRL?

DataSQRL uses a declarative language called SQRL to express the logic and structure of a data service. You implement a data service in SQRL scripts by defining how to combine, transform, and analyze the input data through a sequence of SQL(ish) statements. DataSQRL compiles SQRL scripts into fully-integrated data pipelines and an API layer that serves the result.

SQRL is based on SQL. If you know how to read a `SELECT ... FROM ... WHERE` query in SQL then you'll be able to read SQRL scripts with a few additional pointers. If you are unfamiliar with SQL, it's a good time to brush up on some SQL basics with our [SQL primer](/docs/reference/sqrl/sql-primer).

SQRL stands for "Structured Query and Reaction Language" and is designed specifically for developers who are building streaming data services. It has a low learning curve because it is essentially "just" SQL but adds important features that SQL lacks and provides a convenient syntax to make it feel like a productive programming language and address the needs of streaming data services.

Check out the [quickstart tutorial](../quickstart) to get a feel for SQRL and how it enables building data services.


## SQRL Features

SQRL is a loosely-typed language which infers data types from the input data. You can explicitly define data types and schemas if you want to, but in most cases you let DataSQRL handle all the type and schema management for you and save a lot of time.

SQRL adds a few features to SQL to make building data services a lot easier, like explicit support for nested data, streaming data, and relationships. The tables and relationships defined in the SQRL script map directly to the schema of the exposed data API which can be customized in the API specification. 

SQRL provides some syntactic sugar on top of SQL to make it feel more like a development language and less like a game of Russian dolls with sub-queries.

Here is a brief overview of the features SQRL provides:

### Import Management

SQRL supports `IMPORT` statements to declare the data dependencies of your SQRL script like you would software dependencies in a programming language.

```sqrl
IMPORT datasqrl.seedshop.Orders;`
```
This statement imports the `Orders` table from the dataset `datasqrl.seedshop` and makes it available in the script.

Explicit imports allow us to treat external datasets as dependencies and manage them like we would other software dependencies that evolve over time.

### Nested Tables

A lot of data these days has a nested data structure. JSON is a prime example. SQRL supports nested data natively by mapping it onto nested tables with parent-child relationships between them. This allows you to treat nested data just like normal tables.

For example, our imported `Orders` table comes from a connected stream of JSON order records that contain a nested array of `items`. Those items are mapped to the nested `Orders.items` table and link from an `Orders` record through the `items` relationship.

Representing nested data as tables means that we don't need special data types or special access methods for nested data in SQRL. The DataSQRL compiler can figure out how to most efficiently represent such data.

We can also create nested tables in SQRL:
```sqrl
Orders.totals := SELECT sum(total) as price, sum(discount) as savings FROM @.items;
```
`totals` is defined as a nested table under `Orders` to aggregate the price and discount of all the items in each order. The special table handle `@` refers to each row in the parent `Orders` table and is used to define *locally scoped queries*. That means, `totals` aggregates the price and discount of all the items of a *single* parent `Orders` record. We can think of the query definition as being applied to *each row* of the parent table. In contrast, `FROM Orders.items` would have aggregated over all items for *all* orders.

Using nested tables and locally scoped queries makes it easy to define aggregations over subsets or partitions of data.

### Incremental Table Definition

SQRL scripts are essentially a sequence of table and column definitions that allow you to incrementally build up the logic of your data service.

You can add columns to existing tables, like this `total` column on our previously imported `Orders.items` table which computes the total price for each item in the order:

```sqrl
Orders.items.total := quantity * unit_price - discount?0.0;
```

Or we can define a new `Customers` table based on the rows in the `Orders` table:

```sqrl
Customers := SELECT DISTINCT customerid AS id FROM Orders;
```

SQRL uses the shorthand assignment operator `:=` to define the tables and column on the left-hand side of the assignment by the SQL statement on the right. This saves you from typing the more verbose `CREATE TABLE xyz AS ...`. SQRL contains a few of those syntactic sugars to make development just a little bit more enjoyable. 

By defining tables and columns incrementally, you can write shorter, more comprehensible SQL statements that build on each other. This makes development with SQRL more like programming and SQRL scripts easy to read.

### Relationships

SQRL adds relationships to SQL, so you can link tables to each other and explicitly label their relationship.
Relationships are pre-defined `JOIN` clauses that you can reuse across your script.

```sqrl
Customers.purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time DESC;
```

We define the column `purchases` on the table `Customers` to be a relationship to the `Orders` table as defined by the `JOIN` clause on the right. The `purchases` relationship column links a record in the `Customers` table to all the records in the `Orders` table that have a matching `customerid`. Note, the use of the special table handle `@` to refer to the parent `Customers` table on the left-hand side.

Defining relationships makes SQRL scripts easier to read because the structure of the data is explicitly labeled. We can reference previously defined relationships in `FROM` and `JOIN` clauses as well as expressions.

```sqrl
Customers.spending :=
         SELECT round_to_month(p.timestamp) AS month,
                sum(t.price) AS spend, sum(t.savings) AS saved
         FROM @.purchases p JOIN p.totals t
         GROUP BY month ORDER BY month DESC
```

Here, we define a nested table `spending` to aggregate the spending for each customer by month. We use `FROM @.purchases p` to select all the orders for each customer based on the previously defined `purchases` relationship and then join with the nested `totals` table in `Orders`. SQRL automatically expands relationship references to their full `JOIN` definition.

Relationships get exposed in the API as well which allows users of the API to flexibly access the result data of your data service.

### Data Streams

SQRL natively supports data streams and reacting to changes in data. That's what makes SQRL *reactive*. SQRL distinguishes between *streaming* and *state* tables. State tables are the classic relational tables where records are identified by key and update over time. Streaming tables are an append-only log of records that are ordered in time.

SQRL provides features to convert between streaming and state tables as well as react to changes in state tables.

For example, to convert a change-log of product updates to a products table that contains the most recent version of each product, we define:
```sqrl
IMPORT datasqrl.seedshop.Products AS ProductsChangeLog;

Products := DISTINCT ProductsChangeLog ON productid ORDER BY updated DESC;
```

This defines a `Products` state table keyed by `productid` which contains the most recent update.

Sometimes, the conversion from stream to state is implicit such as for certain aggregates:
```sqrl
Customers.order_stats := SELECT sum(p.total.price) as total_spend, count(1) as num_orders FROM @.purchases p;
```
We are aggregating the orders stream for each customer to compute a total of the number of orders and total amount of money spent by customer. That aggregate is a state since it changes over time. SQRL is reactive in that it updates such aggregates immediately with each incoming order and the updated results are available through the API.

To convert from state to stream table, SQRL provides the `STREAM` constructor which allows us to react to changes in the data:

```sqrl
NewCustomerPromotion := STREAM ON ADD AS
SELECT c.customerid, o.total_spend, o.num_orders FROM Customer c JOIN c.order_stats o
WHERE o.total_spend >= 100 OR o.num_orders >=3;
```

This creates a `NewCustomerPromotion` data stream to which SQRL appends a record whenever the `order_stats` aggregated state we just defined exceeds $100 spent or more than 3 orders placed by a given customer. 

Data streams can be exported to other downstream systems or to trigger external actions. For example:
```sqrl
EXPORT NewCustomerPromotion TO email.NewCustomerPromotion;
```
This connects the data stream to an external data sink that sends an email to the customer offering a promotion coupon. Data sinks, like data sources, are treated as external dependencies by SQRL.

Timestamps on data streams are important to synchronize records in time across systems and process them efficiently. SQRL provides automatic timestamp discovery, or you can define the timestamp column explicitly:
```sqrl
IMPORT datasqrl.seedshop.Orders TIMESTAMP time;`
```

## Learn More

* Take a look at the [quickstart tutorial](../quickstart) to build a data service with SQRL in a few minutes.
* For a comprehensive and in-depth description of SQRL, check out the [reference documentation](/docs/reference/sqrl/overview).


<!--
## Why SQRL?

Do we really need another language to build data services? We asked ourselves that question a lot. That's why we designed SQRL to be an upgrade to SQL rather than a new language. 

We think SQL is great. It is expressive and concise. It focuses on *what* you need to do with the data and doesn't slow you down with the *how* it should get done. And if you are working with data, you likely know SQL already or will have to learn it eventually.

But for software development, SQL is just a bit awkward. It was designed for expressing one-off queries, doesn't have a lot of constructs to build incrementally, and complex queries often end up looking pretty harrowing. Plus, it's a bit outdated and doesn't support popular concepts like relationships.

SQRL fixes that. It takes the good of SQL and adds some features that are missing or useful for developers implementing data services. But the extensions that SQRL adds are fully backwards compatible. In fact, you can take an SQRL script and compile it into vanilla SQL. That's essentially what the DataSQRL compiler does (plus some extra optimization). The result won't look pretty but it goes to show that there is nothing "magical" about SQRL. It's a developer-focused upgrade to SQL.

-->