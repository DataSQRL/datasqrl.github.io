---
title: "SQRL"
---

# What is SQRL?

DataSQRL uses a declarative language called SQRL to express the logic and structure of a data service. You implement a data service in SQRL by defining how to combine, transform, and analyze the input data through a sequence of SQL(ish) statements. DataSQRL compiles SQRL scripts into fully-integrated data pipelines and an API layer that serves the result.

SQRL is based on SQL. If you know how to read a `SELECT ... FROM ... WHERE` query in SQL then you'll be able to read SQRL scripts with a few additional pointers. If you are unfamiliar with SQL, it's a good time to brush up on some SQL basics with our [SQL primer](/docs/reference/sqrl/sql-primer).

You express the logic of your data service in SQRL through a sequence SQL statements that define how to transform and analyze the input data to produce the result data that you want to expose as an API. The tables and relationships you create along the way define the structure of the resulting API which allows DataSQRL to generate the API and API schema for you and keep everything in sync. Tables are exposed as API endpoints with filters and orders and relationships can be traversed through the API by selecting related records.

SQRL is a loosely-typed language which infers data types from the input data. You can explicitly define data types and schemas if you want to, but in most cases you let DataSQRL handle all the type and schema management for you and save a lot of time.

SQRL stands for "Structured Query and Reaction Language" is designed specifically for developers who are building responsive data services. It has a low learning curve because it is essentially "just" SQL but adds enough convenience features to SQL to make it feel like a productive programming language. Check out the [introductory tutorial](../nutshop-tutorial) to get a feel for the language and see how SQRL allows you to build data services in a few minutes.

## SQRL Features

SQRL adds a few constructs and some syntactic sugar on top of SQL to make it feel more like a development language and less like a game of Russian dolls with sub-queries. <br />
Here is a brief overview of how SQRL extends SQL:

### Import Management

SQRL supports `IMPORT` statements to declare the data dependencies of your SQRL script like you would software dependencies in a programming language.

```sqrl
IMPORT nutshop-data.Orders;`
```
This statement imports the `Orders` table from the connected dataset `nutshop-data` and makes it available in the script.

### Incremental Table Definition

SQRL scripts are essentially a sequence of table and column definitions that allow you to incrementally build up the logic of your data service.

You can add columns to existing tables, like this `date` column on our previously imported `Orders` table which transforms a timestamp column to a `DateTime` column:

```sqrl
Orders.date := function.time.fromEpochMillis(time);
```

Or we can define a new `Customers` table based on the rows in the `Orders` table:

```sqrl
Customers := SELECT DISTINCT customerid AS id FROM Orders;
```

SQRL uses the shorthand assignment operator `:=` to define the tables and column on the left-hand side of the assignment by the SQL statement on the right. This saves you from typing the more verbose `CREATE TABLE xyz AS ...`. SQRL contains a few of those syntactic sugars to make development just a little bit more enjoyable. 

By defining tables and columns incrementally, you can write shorter, more comprehensible SQL statements that build on each other. This makes development with SQRL more like programming and SQRL scripts easy to read.

### Relationships

SQRL adds relationships to SQL so you can link tables to each other and explicitly label their relationship.
Relationships are pre-defined `JOIN` clauses that you can reuse across your script.

```sqrl
Customers.purchases := JOIN Orders ON Orders.customerid = _.id ORDER BY Orders.time DESC;
```

We define the column `purchases` on the table `Customers` to be a relationship to the `Orders` table as defined by the `JOIN` clause on the right. The `purchases` relationship column links a record in the `Customers` table to all the records in the `Orders` table that have a matching `customerid`.

Defining relationships makes SQRL scripts easier to read because the structure of the data is explicitly labeled. We can reference previously defined relationships in `FROM` and `JOIN` clauses as well as expressions.  

```sqrl
Customers.total_orders := SUM(purchases.total);
```

Here, we define a new column `total_orders` on the `Customers` table as the sum over the total values of all the orders a customer has placed. SQRL automatically expands relationship references to their full `JOIN`. In this example, we are summing over `Orders.total` for all orders that match the `customerid` of the `Customers` record. Note, that when you define new columns in this way, their definition is local to the parent table like a nested query in `SELECT` clause.

Relationships get exposed in the API as well which allows users of the API to flexibly query the result data of your data service.

### Nested Tables

A lot of data these days is hierarchical which means it has a nested data structure. JSON is a prime example. SQRL adds support for hierarchical data by mapping it onto nested tables with parent-child relationships between them. This allows you to treat nested data just like normal tables.

For example, our imported `Orders` table comes from a connected stream of JSON order records that contain a nested array of items. Those items are mapped to the nested `Orders.items` table and link from an `Orders` record through the `items` relationship.

We can treat the `Orders.items` table like any other and add a column to it that computes the total for each item:
```sqrl
Orders.items.total := quantity * unit_price - discount;
```
We can then reference that newly defined column as we compute the total for an order:
```sqrl
Orders.total := sum(items.total);
```

Treated hierarchical data as nested tables means that we don't need special data types or special access methods for nested data in SQRL. The DataSQRL compiler can figure out how to most efficiently represent such data. In our SQRL scripts we can focus on the logical representation and not worry about these optimization details.

In addition to supporting hierarchical input data, nested tables also allow us to define locally scoped tables:

```sqrl
Customers.past_purchases :=
         SELECT i.productid, count(i.*) as num_orders, sum(i.quantity) as total_quantity
         FROM _.purchases.items i
         GROUP BY i.productid
         ORDER BY num_orders DESC, total_quantity DESC;
```

The table `past_purchases` is defined as a nested table within `Customers`. The SQL query on the right-hand side is a *localized query* which means it is evaluated in the context of the `Customers` table. We can think of the query definition as being applied to *each row* of the parent table.

SQRL introduces the special table handle `_` to refer to each row in the parent `Customers` table. The `FROM` clause `_.purchases.items` chains together the `purchases` relationship on `Customers` with the `items` relationship on `Orders` to retrieve all item records for all order records associated with a single customer record. Chaining together relationships allows us to avoid the complexity of multiple JOIN expressions in this query.

### Subscription

What makes DataSQRL "reactive" is that partially maintains the tables defined in SQRL and immediately updates partial results when new data comes in. That makes the API not only responsive to incoming requests but also to changes in the data.

To respond more directly to changes in the data, SQRL introduces the concept of a **subscription**. A subscription observes a table and creates an event record for certain changes.

NewCustomerPromotion := SUBSCRIPTION ON ADD AS
SELECT customerid, total_orders
FROM Customers WHERE total_orders >= 100;

This subscription observes a table that contains all the customer ids for customers who have spent more than a hundred dollars at our shop. The subscription triggers whenever a new record is added to the table (as defined by the `ON ADD`) and produces an event record that is stored in the table `NewCustomerPromotion`.

You can build on subscription tables like other tables. You can only connect subscriptions to sinks which means that triggered event records get pushed to downstream consumers like queues or event buses that can process the event further or kick off a workflow.

In addition to the responsive API, subscriptions are the other element that makes SQRL "reactive" and allows you to build complex data services with little effort.

### Learn More

Take a look at the [introductory tutorial](../nutshop-tutorial) and the [DataSQRL training](../intro/overview) to see how these features work in practice while implementing a data service. <br />
For a comprehensive and in-depth description of SQRL, check out the [reference documentation](/docs/reference/sqrl/overview).

## Why SQRL?

Do we really need another language to build data services? We asked ourselves that question a lot. That's why we designed SQRL to be an upgrade to SQL rather than a new language. 

We think SQL is great. It is expressive and concise. It focuses on *what* you need to do with the data and doesn't slow you down with the *how* it should get done. And if you are working with data, you likely know SQL already or will have to learn it eventually.

But for software development, SQL is just a bit awkward. It was designed for expressing one-off queries, doesn't have a lot of constructs to build incrementally, and complex queries often end up looking pretty harrowing. Plus, it's a bit outdated and doesn't support popular concepts like relationships.

SQRL fixes that. It takes the good of SQL and adds some features that are missing or useful for developers implementing data services. But the extensions that SQRL adds are fully backwards compatible. In fact, you can take an SQRL script and compile it into vanilla SQL. That's essentially what the DataSQRL compiler does (plus some extra optimization). The result won't look pretty but it goes to show that there is nothing "magical" about SQRL. It's just a developer-focused upgrade to SQL. 