---
title: "Table"
---

# SQRL Table

The "table" is the central concept of SQRL. A table defines a set or stream of data. Every data record in SQRL is a row in a table. A table is defined by a list of columns which have unique column names.

A SQRL script defines a set of tables.

## Table Definitions {#definition}

A table is defined via [import](import) statement at the beginning of a SQRL script or via a SQL query.

:::info
This documentation assumes that you are familiar with SQL and know how to write a `SELECT .. FROM .. WHERE .. GROUP BY` query. If you want to refresh your SQL knowledge, take a look at the [SQL primer](sql-primer).
:::

Use the assignment operator `:=` to define the table on the left-hand of the assignment by the SQL query on the right-hand side. 

```sql
Users := SELECT DISTINCT customerid AS id FROM Orders;
```

This statement defines the table `Users` by the SQL query that selects all distinct `customerid` from the `Orders` table.
SQRL tables are usually defined by SQL queries over previously defined tables as in this example. You can use standard SQL syntax for the table queries. 

For the SQL nerds: SQRL tables are just view definitions with a more developer-friendly syntax.

Tables can also be defined incrementally by adding column definitions to existing tables:
```sql
Products.weight_in_oz := weight_in_gram / 28.35;
```
This statement adds a new column `weight_in_oz` to the existing `Products` table which converts the product weight to ounces.

## Nested Tables {#nested}

SQRL supports nested tables through table paths to represent nested or hierarchical data. The `Orders` data stream from the [Quickstart Seedshop example](../../getting-started/quickstart) has nested `items` for each item in an order. Such nested data maps onto nested tables in SQRL. `Orders.items` is the table path that accesses the nested `items` data for the `Orders` example.

We can use and query nested tables like any other table in SQRL.
```sql
Orders.items.total := quantity * unit_price - discount?0.0;
```
This statement adds a new `total` column to the `Orders.items` table that computes the total price for each item.

Nested tables are special in that each row in a nested table is associated with exactly one *parent* row in the parent table. The parent row can be accessed through the `parent` [relationship column](relationship) that is implicitly defined for all nested tables. Likewise, all child rows of a parent row can be accessed through a relationship column on the parent row of the same name as the nested table.

### Localized Queries {#localized}

When querying nested tables we need to be mindful to query the nested table at the right scope. We can query a nested table globally, i.e. over all rows in the table, or locally, i.e. only the rows associated with a given parent row.

```sql
Order_totals := SELECT sum(total) as price, 
    sum(discount?0.0) as saving FROM Orders.items;
```
The `Orders_totals` table contains a single aggregate that sums up the total and discout over **all** items in **all** orders. The result is one global aggregation over all order items.

```sql
Orders.totals := SELECT sum(total) as price, 
    sum(discount?0.0) as saving FROM @.items;
```
This statement, on the other hand, aggregates **all** items **for each** order. The result is one local aggregate for each row in the `Orders` table.

The difference between the two statements is in the `FROM` clause. The first statement references the `Orders.items` table globally. The second statement references the `Orders.items` table locally by accessing the `items` relationship column on `Orders`.

The second statement is a **localized query** because it defines a new nested table `totals` under the `Orders` table on the left-hand side of the statement. That means the query on the right-hand side of the statement is interpreted in the context of *each* row in the parent table. The at-sign `@` is used to refer to the parent row in a localized query. Hence, `@.items` means "all items that are associated with the current order record through the `items` relationship".

Nested table definitions can query arbitrary tables. The only difference to non-nested tables is that the query is interpreted in the local context of the parent table.
```sql
Users.order_stats := SELECT max(o.time) as most_recent, count(1) as num
      FROM @ JOIN Orders o ON o.customerid = @.id;
```
This statement defines the nested table `order_stats` underneath `Users` as an aggregation for a users most recent and total number of orders. In this example, we are explicitly selecting from `@` to reference the parent row in this localized query. `FROM @ JOIN Orders o ON o.customerid = @.id` means "select the current parent row and join with all orders where the `customerid` is equal to the `id` of the parent row".

For the SQL nerds: Nested table definitions are a convenient way to express `GROUP BY` and `WINDOW` queries by grouping on the rows in the parent table.

## State vs Stream Tables {#stateVsStream}

SQRL distinguishes between *state* and *stream* tables. State tables hold records that change over time as records are modified. Stream tables hold immutable records that have a timestamp and are naturally ordered in time.

State tables have the standard set semantics of SQL. A row in a state table is uniquely identified by a key (i.e. one or multiple key columns) and the column values of that row can change over time as the record is modified. Rows in state tables represent entities, objects, or anything that can be identified independent of time. You define and treat state tables as "normal" SQL tables.

Stream tables contain immutable rows of data that map onto a timeline. Rows in stream tables represent events or things that occur at a point in time. A row in a stream table has an explicit or implicit timestamp that anchors the record at a certain point in time. The notion of time, how timestamps are attached to stream records, and how time is handled is important to stream tables. SQRL uses slightly different semantics when querying stream tables to account for time. You can read more about [stream tables](stream) and how SQRL handles [time](time).

State and stream tables are like two sides of the same coin by giving you different views of your data. A state table represents the data as it currently is whereas a stream table represents data over time. Each state table has an underlying change stream and stream tables can be transformed to state through aggregation or deduplication. Those transformations are covered in the [stream tables](stream) documentation.

## SQL Compatibility

SQRL tables are defined as SQL queries over previously defined or imported tables.

SQRL supports the standardized syntax and semantics of SQL and adds some convenience features like [relationships](relationship) and [nested tables](#nested).

SQRL differs from SQL in the following ways:
* Aggregations, default joins, and unions have a different semantics for [stream tables](stream).
* SQRL does not use LEFT joins. Use [relationship expressions](relationship#expressions) instead.
* SQRL does not use WINDOWs. Use [nested tables](#nested) instead.
* UNION between state tables require that the tables have the same key columns. UNION between different types of tables is not supported.
* SQRL has restricted support for sub-queries and encourages developers to use [relationship expressions](relationship#expressions) or break sub-queries out into separate intermediate tables instead. 
* SQRL does not support OUTER, ANTI, or SEMI joins.

Most of the differences to SQL serve the purpose to make SQRL easier to use and understand. In addition, there are some temporary limitations of SQL syntax that SQRL does not yet support. See the [roadmap](../../dev/roadmap) to learn more.

## Visibility

### Overwriting

You can overwrite existing tables and columns in SQRL with newer definitions. 

```sql
Products := DISTINCT Products ON id ORDER BY updated DESC;
```

This statement redefines the `Products` table by de-duplicating the imported `Products` changelog stream on the `id` column. The original `Products` stream table still exists but is no longer referencable in the SQRL script. All references to `Products` are now resolved to the de-duplicated state table.

Similarly, we can overwrite columns on tables:
```sql
Users.country := country?'none';
```
This statement cleans up `Users` data by replacing the `country` column with a new column definition that replaces `null` values with string literal `none`.

### Hiding

When the name of a table or column starts with the underscore character  `_` the table or column is hidden. Hidden tables and columns are not exposed in the API or imported by other scripts. 

Hidden tables and columns are used to define intermediate state that is local to the current script and not accessible from outside of that script.
