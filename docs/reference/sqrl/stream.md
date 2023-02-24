---
title: "Stream Table"
---

# Stream Table

Stream tables contain immutable rows of data that have a timestamp. All tables [imported](import) from [data sources](../sources/overview) are stream tables and stream tables can be [exported](export) to [data sinks]((../sources/overview).

This documentation covers how to convert between stream and [state tables](table#stateVsStream) and documents the differences in query semantics for certain queries over stream tables.

## Convert Stream to State

Stream tables can be converted to state tables by deduplication or aggregation.

### Deduplication

If a stream table represents a change stream of a state table, the state table can be defined with the `DISTINCT` query.

```sql
Products := DISTINCT Products ON id ORDER BY updated DESC;
```
The `DISTINCT` query picks the most recent version - as defined by the `ORDER BY` clause - from the stream for each unique key - as defined by the `ON` clause.
In this example, we are defining the `Products` state table based on the imported `Products` change stream by selecting the most recent stream record based on the `updated` timestamp for each product `id`.

Another way to deduplicate a stream table is to select a list of distinct columns.
```sql
Users := SELECT DISTINCT customerid AS id FROM Orders;
```
This statement defines the `Users` state table as the set of all unique customer ids from the `Orders` stream table.

### Aggregation

Aggregating over a stream table produces a state table.

```sql
Users.total_spend := SELECT sum(i.total) AS spend,
            sum(i.discount) AS saved
      FROM @ JOIN Orders o ON o.customerid = @.id JOIN o.items i;
```
This statement defines the nested `total_spend` state table that aggregates the total spending and saving for each user across all their orders from the `Orders` state table.

An exception to this are [time-window aggregations](#aggregation) which preserve time and produce a stream table. 

## Convert State to Stream

`STREAM` statements convert state tables to stream tables.

```sql
UserPromotion := STREAM ON ADD AS
  SELECT u.id, u.first_name, u.last_name, u.email, s.first_order, s.spend
  FROM Users u JOIN u.order_stats s WHERE s.spend >= 100;
```
This statement defines a new `UserPromotion` stream table that contain a stream record for every record that gets added to state table defined by the `SELECT` query. The query asks for all users who have spent more than $100 in aggregate. Whenever a user meets this threshold and gets added to the table, a stream record is produced in the `UserPromotion` stream table.

* `STREAM ON ADD`: produces a stream record for every record that gets added to the state table defined by the `SELECT` query.
* `STREAM ON UPDATE`: produces a stream record every time a record in the state table defined by the `SELECT` query is updated. This produces a change stream of the state table.
* `STREAM ON DELETE`: produces a stream record for every record that gets deleted from the state table defined by the `SELECT` query.


## Queries

Queries over stream tables differ in semantics from standard SQL queries over state tables in the following cases:

### Time Window Aggregation {#aggregation} 

SQRL provides a number of time-preserving functions which aggregate timestamps into time windows. Time windows are a means to divide the [timeline](time) into discrete buckets and aggregate all stream records within each bucket to produce a new stream table that contains one row for each aggregate.

```sql
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(t.price) AS spend, sum(t.saving) AS saved
      FROM @.purchases p JOIN p.totals t
      GROUP BY week ORDER BY week DESC;
```
This statement defines the nested `spending` table that aggregates money spent and saved for all the orders that a user placed per week. `endOfWeek` is a time window function that groups timestamps by week and returns the end of the week. The time window functions are contained in the [time package](functions/time).

`Users.spending` is a stream table that contains one record per user per week for their spending totals.

Time window aggregations can be used to compute arbitrary roll-ups of stream data.

Learn more about how SQRL executes time windows on the [timeline](time). 

### Recency Filters

Stream tables can be filtered on recency which is useful when aggregating over a recent period of time.

```sql
RecentTotal := SELECT sum(i.total) AS total, count(1) AS num
      FROM Orders o JOIN o.items i
      WHERE time > now() - INTERVAL 7 DAY;
```
This statement defines the `RecentTotal` state table an aggregation over all orders that were placed in the last 7 days. Recency filters use the special function `now()` to restrict the timestamp of stream records to a period specified by an interval.

Learn more about `now()` and how SQRL processes [time](time).

### Temporal Join

SQRL supports temporal joins between stream and state tables when joining on the state table's key.
A temporal join joins rows from the stream table with the version of the row in the state table at the time of the stream row. Temporal joins use the row from the state table at the timestamp of the stream row. This allows to join stream data with state data at the time when the stream record "happened". A temporal join produces a stream table.

```sql
OrderCountry := SELECT o.time, u.country
    FROM Orders o TEMPORAL JOIN Users u ON o.customerid = u.id;
```
The `OrderCountry` stream is defined as a temporal join between the `Orders` stream and the `Users` state table. It joins each order with the user who placed the record at the `time` of the order to retrieve the `country` that the user was in at the time that the order was placed.

This is different from an inner join which joins each order record with the most current user record.
```sql
OrderCountryInner := SELECT o.time, u.country
     FROM Orders o INNER JOIN Users u ON o.customerid = u.id;
```
This statement produces a state table that changes whenever users change country because each order is joined with the current version of its user row.

In most cases you want to use a temporal join when joining stream and state tables. SQRL uses temporal joins for all default joins between a stream and a state table on the state table's key.

### Interval Join

SQRL supports interval joins when joining two stream tables and restricting the stream tables' timestamps with upper and lower bounds. Interval joins are joins that happen during an interval of time.





