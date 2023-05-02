---
title: "Connect Data Source"
---

# Connecting Data Sources

<img src="/img/index/undraw_connection_sqrl.svg" alt="Connecting Data Sources >" width="40%"/>

SQRL scripts import data from external data sources into tables. [In the last chapter](../sqrl) we imported `Orders` and `Products` data.

In this chapter, we'll take a closer look at importing data and creating a custom data package for importing our own data.

## What is a Data Source?

A data source is a system that holds data and allows access to the data. DataSQRL supports many types of data systems as data sources: filesystems, cloud storage, database systems, queues, logs, and more. Check out the [full list of supported data systems](/docs/category/data-system) which links to detailed information on how to connect them to DataSQRL.

## What is a Data Package?

A data package contains configuration files that specify the location and structure of one or multiple tables in a data source.

DataSQRL loads the data package for each `IMPORT` statement at compile time to identify and locate the imported table. A data package is a DataSQRL specific artifact used to define an external data stream which is ingested by the data pipeline that the DataSQRL compiler generates.

That's a lot of concepts to throw around. Let's summarize:

* A **data system** is a computer system or piece of infrastructure that holds data.
* A **data source** specifies how to access a dataset on a data system.
* A **data package** contains the configuration DataSQRL needs to read table data from a data source.
* An `IMPORT` statement make table data from a data package available for querying and transformation in an SQRL script. 

## Resolving Imports

In the [Quickstart tutorial](../../quickstart) we imported the `Orders` table.

```sqrl
IMPORT datasqrl.seedshop.Orders;
```

The last element of the import path specifies the table `Orders` we are importing and the rest defines the data package `datasqrl.seedshop` we are importing from. We can use the asterisk character `*` instead of a table name to import all tables from a package.

DataSQRL first attempts to resolve a package as a folder path relative to where the DataSQRL compiler is invoked. In our example, DataSQRL looks for the folder `datasqrl/seedshop` (on Unix based systems) relative to where you placed the `seedshop.sqrl` script.

When a local folder for the package does not exist, DataSQRL looks up the package in the [repository](https://dev.datasqrl.com) and downloads it if it exists. That's what happens in our example.

DataSQRL uses the latest version of the package in the [repository](https://dev.datasqrl.com). You can also [declare package dependencies](/docs/reference/sources/overview#remote) explicitly with version.

## Creating a Data Package

If the [repository](https://dev.datasqrl.com) does not contain the data you need, or you want to import data from your own data source, you create a new data package.

For example, we want to add user data from our customer database to our seed shop data API.
First, download the customer data and place it into a sub-folder.
```bash
mkdir mydata; cd mydata; 
wget https://github.com/DataSQRL/sqrl/raw/main/sqrl-examples/quickstart/data/customers.json.gz;
cd ..
```

We are going to use DataSQRL's data discovery command to create a data package for us.
```bash
docker run -v $PWD:/build datasqrl/datasqrl-cmd discover mydata -o mysourcepackage
```
The `discover` command takes the directory in which we placed the data as an argument. It inspects the files in the directory and creates table configurations for them. Those configurations are written to the output directory `mysourcepackage` specified via the `-o` option.

## Table Timestamps

We can now import the `Customer` table from our custom package into our script:
```sqrl
IMPORT mysourcepackage.Customers AS Users TIMESTAMP epochMilliToTimestamp(changed_on) AS timestamp;
```
The package name is `mysourcepackage` which maps onto the folder we just created that contains the data package configuration files.

We are renaming the table as `Users` in our script to match the previously defined `Users` table.

We are also adding an explicit timestamp column to our table. As we discussed in the [previous chapter](../sqrl), all tables imported from data sources are stream tables. Each row of a stream table must have a timestamp that places the row on the timeline. This is important because DataSQRL needs to know when the row "happened" for realtime processing.

In many cases, the DataSQRL compiler can automatically figure out what the timestamp column of a table is. For `Orders` and `Products` DataSQRL correctly inferred the timestamp column based on how we used the tables in the scripts.

The `Customers` table, however, does not have a timestamp column. It has the column `changed_on` which contains a number that represents the timestamp as milliseconds since epoch. We use the `epochMilliToTimestamp` function to convert it to a timestamp as store the result in the added `timestamp` column on the `Users` table we are importing.

## Importing Functions

We import functions similarly to tables. We imported the `endOfWeek` time-window function from the `time` package.

```sqrl
IMPORT time.endOfWeek;
```
`time` is a system library package that is part of DataSQRL.

In addition, we need the `epochMilliToTimestamp` for the timestamp conversion. Rather than add another import, we are just going to import all time functions. We need to be careful to import the functions before we use them. That means, our imports should look like this:

```sqrl
IMPORT datasqrl.seedshop.Orders;
IMPORT datasqrl.seedshop.Products;
IMPORT time.*;
IMPORT mysourcepackage.Customers AS Users TIMESTAMP epochMilliToTimestamp(changed_on) AS timestamp;
```

## Updating the SQRL Script

Now, that we have imported our user data, let's update the `Users` table definition to de-duplicate the change stream of customer data:
```sqrl
Users := DISTINCT Users ON id ORDER BY timestamp DESC;
```
This statement re-defines the `Users` table as the most-recent version of each user as identified by `id`.

In addition, we are going to do a little bit of data cleaning and add a relationship from `Orders` to `Users`:

```sqrl
Users.country := country?'none';
Orders.user := JOIN Users ON @.customerid = Users.id;
```

This preparation work allows us to refine the product analysis we added at the end of the last chapter.

```sqrl
Products.volume_10day := SELECT u.country, sum(i.quantity) as quantity,
         sum(i.total) as spend, sum(i.quantity * @.weight_in_gram) as weight
      FROM @.ordered_items i JOIN i.parent o  JOIN o.user u
      WHERE o.time > now() - INTERVAL 10 DAY GROUP BY u.country;
```

We are updating the query for the nested `volume_10day` query to group by the country of the user. That gives us a more detailed view of recent product volume by country.

### Temporal Join

It also gives us an opportunity to introduce another important concept in SQRL: temporal joins.

When joining stream with state tables, you often want to join the stream with the state as it was at the time that a particular row in the stream occurred, i.e. the timestamp of the row. 
However, an inner join - which is the default join in SQL - joins a stream row with the most current version of the state table. That means the result of the join can change as the state table changes.

That's usually not what we want. In our example query, we want the country that the user was in when the order was placed and not the country that the user is in currently. For example, if a user placed an order while living in Germany 5 days ago and then moves to France, we don't want the order to get re-assigned to France in our product volume aggregation.

To join stream with state tables at the timestamp of the stream, SQRL supports temporal joins. And SQRL makes temporal joins the default join type when joining on a state tables key columns as we do in the example above. That means, we don't have to write out the temporal join explicitly, but we can do that for additional clarity:

```sqrl
Products.volume_10day := SELECT u.country, sum(i.quantity) as quantity,
         sum(i.total) as spend, sum(i.quantity * @.weight_in_gram) as weight
      FROM @.ordered_items i JOIN i.parent o TEMPORAL JOIN o.user u
      WHERE o.time > now() - INTERVAL 10 DAY GROUP BY u.country;
```

## Developing with Data Sources {#variant}

During development, we prefer to work with static files because it is predictable and easy to debug. That's why we are using only file-based data sources for our getting started tutorials. It allows us to quickly iterate on our SQRL script without having to worry about changing data and complex infrastructure setup to connect to data systems.

However, a downside of static data is that it doesn't evolve over time which makes it hard to develop recency queries like `Products.volume_10day` query. If you tried to access that table in the API you found that it was empty. That's because the static `Orders` data we are using for the seed shop example is more than 10 days old, which means there is no recent data to aggregate.

One easy way to fix this is to time-travel static data during development. In our example, we do this by moving the timestamps of the `Orders` data forward in time. 
```sqrl
IMPORT datasqrl.seedshop.Orders TIMESTAMP time + INTERVAL 8 DAY AS time; -- Adjust the number of days!!
```
The last order from that dataset is placed on 2023-02-21. We are writing this tutorial on March 1st, 2023 which is 8 days later. Hence, we are adding 8 days. You will have to add a larger number of days depending on how long ago 2023-02-21 is for you.

DataSQRL is built specifically for realtime and streaming data and supports data sources like [queues, logs, and databases](/docs/reference/sources/overview) which store streaming or changing data. In DataSQRL every source table is a (potentially endless) stream of rows. But during development it is nice to work with static data until we have iterated our data API to the point we are ready to go to production.


## Next Steps

Our seed shop data service now includes user data and improved business intelligence. Nicely done. Take a look at the resulting [seedshop.sqrl](https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-user.sqrl) script.

You've already learned about SQRL and how to create custom data packages. [**In the next chapter**](../api) we are going to complete the trifecta and design the API for our data service.

If you want to learn more about data sources in more detail, check out the [data sources documentation](/docs/reference/sources/overview). In this introduction, we only covered file system sources. Check out the other [data systems](/docs/category/data-system) that DataSQRL supports and how to use data discovery to create data packages from them.

:::info
If DataSQRL does not yet support a data system you want to use as a data source, [let us know](/community).
:::