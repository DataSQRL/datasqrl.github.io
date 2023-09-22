---
title: "Advanced Topics"
---

# Advanced Topics in DataSQRL

You have made it through the entire introduction tutorial and want to keep learning about DataSQLR? Kudos to you! This page highlights some additional aspects of DataSQRL with pointers to more information, so you can continue your journey to ninja squirrel status 🐿🥇. 

## Advanced Relationships

In the [chapter on SQRL](../sqrl) we introduced relationship columns and showed how they make relationships explicit, add structure to your data, and simplify joins. 

In addition, we are going to show how relationships allow us to structure our tables and data intuitively, which improves
readability.

First, we are going to create a nested table that aggregates order statistics for each user.

```sqrl
Users.order_stats := SELECT min(o.time) as first_order,
         sum(t.price) as spend, sum(t.saving) as saved, count(1) as num_orders
      FROM @.purchases o JOIN o.totals t;
```

We have seen such nested table aggregations before. We are aggregating over all orders for each user and are joining in the order totals via the `totals` relationship. We are adding this example to showcase how reusing the relationships `purchases` and `totals` makes this query concise and easy to read. Plus, we can readily refer to nested tables in filters and other types of queries.

```sqrl
HighSpendingUsers := SELECT id, email FROM Users u JOIN u.order_stats s WHERE s.spend > 1000;
```

Here, we are defining the `HighSpendingUsers` table to keep track of our most valuable customers. Note, how we are using the `order_stats` relationship to the previously defined nested table to access the `spend` aggregate in the filter of our `WHERE` clause.

Take a look at the [relationship documentation](/docs/reference/sqrl/relationship) to learn more.

## Creating Stream Tables

Recall that SQRL distinguishes between [stream and state tables](../sqrl#stream-state) to represent event and entity data, respectively. In our example, we showed how to use `SELECT DISTINCT ... ` and `DISTINCT ... ON` queries to convert stream to state tables through deduplication. Likewise, we create state tables when we aggregate streams without time window.

To go the other way and create a stream from a state table, we use define a `STREAM` query.

```sqrl
UserPromotion := STREAM ON ADD AS
  SELECT u.id, u.first_name, u.last_name, u.email, s.spend
  FROM Users u JOIN u.order_stats s WHERE s.spend >= 100;
```

This statement defines a new stream table `UserPromotion` as a stream of rows every time a row is added to the underlying state table defined by the `SELECT` query following `ON ADD AS`. In this example, the `UserPromotion` stream contains a row with user id, name, email, first order date, and total spending whenever a user has spent more than $100 in our seed shop.

Defining stream allows us to react to changes in the data, implement triggers, and derive change-streams. Read more about stream tables in the [stream table documentation](/docs/reference/sqrl/stream).

### Export Streams to Data Sinks

One of the great things about stream tables is that we can synchronize stream tables with data sinks and external data systems.

A data sink is the opposite of a data source: we import data from a source and export data to a sink.
```sqrl
EXPORT UserPromotion TO print.promotion;
```

This statement exports our `UserPromotion` stream table to a print data sink called `promotion`. The `print` data sink is a system library sink that prints all records to the command line. It's a great sink to use for debugging or analyzing your script.

In our example we want to trigger an external action, so we can send the users who have spent more than $100 dollars a promotional offer. To do so, we are going to define our own data sink.

Data sinks are defined like data sources as packages. To create a local package, we are going to create a folder called `mySinkPackage`: `mkdir mySinkPackage`. Inside that folder, create the file `system.discovery.table.json` with the following configuration:

```json
{
  "type": "sink",
  "format": {
    "name": "json"
  },
  "connector": {
    "directoryURI": "./mysink-output/",
    "filenamePattern": "^([^\\.]+?)(?:_part.*)?$",
    "name": "file"
  }
}
```

This configuration defines a file system sink that writes all records to the folder specified by the directoryURI in Json format. Next, we need to make sure that the folder that we want our sink to write to actually exists. Go back to the folder containing the `seedshop.sqrl` script and create the sink folder `mkdir mysink-output`.

Finally, add the following statement to export to our file system sink.

```sqrl
EXPORT UserPromotion TO mySinkPackage.promotion;
```

When you [run](../overview#run) the script, a folder with the name `promotion` (the name of our sink table we defined in the `EXPORT` statement) will appear inside the `mysink-output` folder that contains partitioned files with the `UserPromotion` records in them in Json format.

Streams are a powerful feature to *react* to changes in the data and notify downstream systems immediately. DataSQRL supports various types of data sinks including logs. Check out the [data sources and sinks documentation](/docs/reference/sources/overview) for more information.

## SQRL Functions

Let's talk about good-ol' boring functions. Functions are incredibly useful, can make your script more concise, and your life a lot easier.

We used functions from the built-in `time` function package in this introductory tutorial. 
SQRL includes a lot of useful functions. You can view the [complete listing of function packages](/docs/category/functions). 

If a function you need is missing, you can implement a [custom function package](/docs/reference/sqrl/functions/custom-functions).

## Table Schema

If you peak into the `mysourcepackage` folder you'll see two files in there for the `Customers` table: `customers.table.json` and `customers.schema.yml`. The former file is the data source configuration DataSQRL uses to connect to the data. The latter specifies the schema of the data.

Luckily, DataSQRL's `discover` command generates both files for us by inferring the data source configuration and schema from the data. You may not ever have to care about those files or what they contain.

If you are dealing with very messy input data or data discovery isn't working for you, it may be worth checking out how to define data source and sink packages manually. Take a look at the [data discovery documentation](/docs/reference/sources/discovery). To learn more about DataSQRL's flexible schema and how it represents semi-structured and messy data, we have [another documentation page](/docs/reference/sources/schema) for you.

## Hidden Fields and Utility Functions

DataSQRL automatically adds a few hidden columns to all stream table rows from imported data sources:

* **_uuid**: A unique identifier for the record assigned by the DataSQRL server on ingest.
* **_ingest_time**: A timestamp that marks the time when the record was ingested by DataSQRL server.
* **_source_time**: The timestamp attached to the record by the data source. This timestamp is only available if the data source supports it and null otherwise.

The unique identifier is useful to distinguish records and track data lineage.

The timestamps that DataSQRL adds can be used as the stream timestamps when the data doesn't have a natural timestamp. However, be careful with `_ingest_time` since it changes every time you run the system and can therefore be unpredictable.

Read more about [import timestamps](/docs/reference/sqrl/import#timestamp), [stream tables](/docs/reference/sqrl/stream), and how DataSQRL treats [time](/docs/reference/sqrl/time).

## Next Steps

Congratulations, you not only finished the introduction tutorial but also completed the extra credit. What a champ! You are definitely ready to get started with DataSQRL. Now go off and build data APIs.

If you wanna keep reading, we have [one more chapter](../deploy) for you on deployment and taking your data API to production.

For any topics we haven't covered thus far, you can consult the [reference documentation](/docs/reference/overview) which covers all the details and then some.

Want to learn more about the internals of DataSQRL or contribute to the codebase? The [developer documentation](/docs/dev/overview) provides a detailed breakdown of the DataSQRL architecture and everything you need to know to extend DataSQRL yourself.






