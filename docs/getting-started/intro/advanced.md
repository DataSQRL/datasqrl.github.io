---
title: "Advanced Concepts"
---

# Advanced Concepts in DataSQRL

You have made it through the entire introduction tutorial and want to keep learning about DataSQLR? Kudos to you! This page highlights some advanced aspects of DataSQRL with pointers to more information, so you can continue your journey to ninja SQRL status 🥇.

## Subscriptions

In a [previous chapter](data-sources) we talked a great deal about importing data sources as stream tables. You can also export stream tables to external data sinks.

The last feature we want to implement in our customer 360 is a trigger or
notification when a customer has more than $100 in purchases so that we can
email them with a special coupon to reward their loyalty.

SQRL supports subscriptions which observe an underlying table and trigger
events.

```sqrl
NewCustomerPromotion := SUBSCRIPTION ON ADD AS
      SELECT customerid, total_orders 
      FROM Customers WHERE total_orders >= 100;
```

We define the subscription `NewCustomerPromotion` which observes the table
defined by the `SELECT` query for all customers with more than $100 in total
purchases. The `ON ADD` qualifier for this subscription means that an event
is triggered whenever a new row is added to that table.

A subscription defines an event table that contains a row for every
event that is triggered by the underlying table. We can treat it like any other
table, for example, by defining a relationship to `Customers`:

```sqrl
NewCustomerPromotion.customer := JOIN Customers ON Customers.id = @.customerid;
```

However, subscriptions are special in that they are exposed as WebSockets in the
API that proactively sent out events when they occur to subscribing users. In
addition, we can register queues with DataSQRL server where subscription events
get posted to notify downstream systems. We are going to look into
both of those subscription access methods in more detail in the [next section](api).

Subscriptions are a powerful feature to *react* to changes in the data and
notify downstream systems or consumers of the API immediately.

## SQRL Functions

we are going to start with good-ol' boring functions. Functions are incredibly useful, can make your script more concise, and your life a lot easier.

We used the function `function.time.fromEpochMillis` in the [nut shop tutorial](../quickstart) and referenced the function by its fully qualified name. If you use a function repeatedly, you can import it to save you from typing the full name.

```sqrl
IMPORT nutshop-data.Products;
IMPORT nutshop-data.Orders;

IMPORT function.time.fromEpochMillis;

Orders.date := fromEpochMillis(time);
```

You can also import all functions in a particular package:

```sqrl
IMPORT function.time.*;
```

Note, that the imported functions are placed in the same namespace as the imported tables and datasets, so you have to be careful that those names do not overlap. If they do, you can rename functions or tables on import.

```sqrl
IMPORT function.time.fromEpochMillis AS epoch2Millis;

Orders.date := epoch2Millis(time);
```

As a side note, `function` is a reserved keyword in SQRL and you cannot name your datasets or tables `function` to avoid confusion.

SQRL includes a lot of useful functions. You can view the [complete listing of function packages](/docs/category/functions). Here are some highlights:

* **iff** is an inline if-then-else function that evaluates the boolean expression given as the first argument and returns the second argument if it is true, otherwise it returns the third argument. Great for small conditionals where *case-when* statements are overkill.
* **coalesce** returns the second argument if the first argument is null. Great for normalizing messy data.
* If you are doing string transformations, take a look at the [string function package](/docs/reference/sqrl/functions/string).
* Working with timestamps, dates, and all matters of time gets a lot easier with the [time function package](/docs/reference/sqrl/functions/time).
* geo, statistics


## Relationship Expressions

We can also access relationships when we define tables or columns in our
SQRL script:

```sqrl
Customer.total_orders := SUM(purchases.total);
```

In this incremental column definition from the nut shop tutorial, we are summing
the total value of all orders related to a particular customer record by the
`purchases` relationship.

This expression is much easier to read and write than the equivalent
definition:

```sqrl
Customers.total_orders := SELECT SUM(o.total) FROM Orders o WHERE o.customerid = @.id;
```

And we can reuse relationships across definitions. For instance, we can rewrite
the definition of the `since` column on `Customers` as:

```sqrl
Customers.since := MIN(purchases.date);
```

## Table Schema

If you peak into the `mySourcePackage` folder you'll see two files in there for the `Customers` table: `customers.table.json` and `customers.schema.yml`. The former file is the data source configuration DataSQRL uses to connect to the data. The latter specifies the schema of the data.

Luckily, DataSQRL's `discover` command generates both files for us. You don't

The data type of columns is inferred from the input data or definition of the table.
In our example, the `time` column on the `Orders` table is of type `Number` which
DataSQRL inferred from the records in the orders data. The data type of the `date` column
defined above is `DateTime` which is inferred from the result type of the `fromEpochMillis`
function.

In most cases, type inference is obvious and you can let DataSQRL handle data types and schema for you.
One less thing to worry about. \
Read more about [schema management](/docs/reference/sources/schema)
and how to [manually define data types](/docs/reference/sources/schema) for
datasets with heterogeneous or very messy data where it isn't obvious.



## Hidden Fields and Utility Functions

DataSQRL automatically adds a few hidden columns to all records from imported data source tables:

* **_uuid**: A unique identifier for the record assigned by the DataSQRL server on ingest.
* **_ingest_time**: A timestamp that marks the time when the record was ingested by DataSQRL server.
* **_source_time**: The timestamp attached to the record by the data source. This timestamp is only available if the data source supports it and null otherwise.

The unique identifier is useful to distinguish records and track data lineage.

The timestamps are often used when we transform a change-record event table into an entity table as discussed in [the previous section](sqrl#event-entity}) on entity and event tables. For example, we used `_ingest_time` in the entity table definition of the `Products` table:

```sqrl
Products := DISTINCT Products ON id ORDER BY _ingest_time DESC;
```

This statement defines `Products` entity records as the last change event for each product id ordered by the time the events were ingested. We can also define *last* in terms of the source time of an event record:

```sqrl
Products := DISTINCT Products ON id ORDER BY _source_time DESC;
```

In practice, the definitions lead to the same result unless records from the data source may arrive out of order when they are ingested by DataSQRL. In that case, it is better to use `_source_time` if the data source supports it.

To assign unique ids and timestamps to the event tables we define via subscriptions, we can use the utility functions `uuid()` and `now()` in the `SELECT` clause of the subscription:

```sqrl
NewCustomerPromotion := SUBSCRIPTION ON ADD AS
SELECT uuid() AS event_id, now() AS event_time, customerid, total_orders
FROM Customers WHERE total_orders >= 100;
```


## Hints and Optimization {#hints}

You can control how DataSQRL executes your scripts by providing annotation hints.

Before we talk about those hints, let's take a short detour to discuss how DataSQRL executes SQRL scripts. DataSQRL is a combination of a stream processing engine and a database. The stream processing engine ingests data from the connected sources, validates it, and updates the tables defined in the SQRL script that are affected by the new data record. Table records are eventually written to the database where they can be queried by the API to answer API requests.

*(insert schematic diagram visualizing it)*

When DataSQRL converts an SQRL script to an execution plan, the optimizer determines which tables and columns should be incrementally computed by the stream processing engine when new data arrives or computed upon request inside the database for each API query. This decision has important implications for the performance and cost of the data service.

For example, the column `Customers._recent_avg_protein` from our `customer360.sqrl` script would be very expensive to compute at query time when we request product recommendations from the API because it requires a multi-way `JOIN` starting from all orders that a customer placed in the last 6 month. If we computed this at query time, the database would have to fetch a lot of data which takes time and is costly. It is much cheaper to incrementally update this column value whenever the customer places a new order and store the result in the database so it is instantly available at query time. \
On the other hand, incrementally computing the `Customers.products_by_protein` table when data changes would be very expensive since the ordering changes anytime the `Customers._recent_avg_protein` changes with a new order for that customer. Since we only have a couple hundred product records that don't change very often, it is much more efficient to compute `Customers.products_by_protein` at query time.

DataSQRL collects statistics on the source data and analyzes your script to make the optimal decision on whether to incrementally compute a particular table and column or compute it at query time. However, sometimes the optimizer gets it wrong. When that happens, you can provide a hint to DataSQRL to dictate that decision to the optimizer.

:::caution

Please send us example SQRL scripts where the optimizer makes the wrong decision and produces suboptimal results. We are actively working on improving the optimizer and your input is super valuable to us.

:::

```sqrl
-- @optimizer(materialize=true)
Customers._recent_avg_protein :=
        SELECT SUM(e.quantity * p.weight_in_gram * n.protein)/SUM(e.quantity * p.weight_in_gram)
        FROM @.purchases.items e JOIN e.product p JOIN p.nutrition n
        WHERE e.parent.date > now() - INTERVAL 6 MONTH;

-- @api(paginate=true)
-- @optimizer(materialize=false)
Customers.products_by_protein :=
        SELECT p.id AS productid, ABS(p.nutrition.protein - @._recent_avg_protein) AS protein_difference FROM Products p
        ORDER BY protein_difference ASC LIMIT 20;
Customers.products_by_protein.product := JOIN Products ON Products.id = _productid LIMIT 1;
```

With the `@optimizer` annotation we can pass hints to the optimizer. The boolean flag `materialize` tells the optimizer whether to incrementally update a table with changing data - i.e. to materialize a table as database folks would say - or to compute the table results at query time with each API request.

Learn more about the [DataSQRL optimizer](/docs/reference/operations/optimizer) and how to provide hints to control the execution plan that it generates for your SQRL script. You can also learn more about the [architecture of DataSQRL](/docs/dev/architecture) to dive deep into the internals of the system.

## Next Steps

Congratulations, you not only finished the introduction tutorial but also completed the extra credit. What a champ! You are definitely ready to get started with DataSQRL.

For additional information, you can consult the [reference documentation](/docs/reference/overview) which covers all the details and then some. \

Want to learn more about the internals of DataSQRL or contribute to the codebase? The [developer documentation](/docs/dev/overview) provides a detailed breakdown of the DataSQRL architecture and everything you need to know to extend DataSQRL yourself.






