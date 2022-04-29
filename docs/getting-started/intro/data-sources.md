---
title: "Connect Data Source"
---

# Connecting Data Sources

<img src="/img/index/undraw_connection_sqrl.svg" alt="Nut Shop Tutorial >" width="300"/>

Before we can use data in our scripts, we have to connect the data source with DataSQRL server so the server knows how to access the data.

## What is a Data Source?

A data source is a system that holds data and allows access to the data. DataSQRL supports many types of data sources: filesystems, cloud storage, database systems, queues, logs, and more. Check out the [full list of supported data sources](/docs/guides/sources/overview) which links to detailed information on how to connect them to DataSQRL.

A data source is connected to the DataSQRL server via the [command line utility](/docs/reference/cmd#sources) or through the [data source API](/docs/reference/sources/api). Connecting a data source tells the DataSQRL server where it can find data and how to access it. That's why connecting a data source is the first step for building data services with DataSQRL: without data sources there is no data to build with.

## Data Source Basics {#basics}

In our [introductory tutorial](../nutshop-tutorial#adding-data) we connected a folder as a data source to DataSQRL with the following command:
```bash
datasqrl source folder nutshop-data
```

This adds the dataset `nutshop-data` to the server and a table for each file contained within the folder: the `products` table for data in `products.csv` and the `orders` table for records in `orders_1.json`.

DataSQRL structures data into tables with fields (or columns). A data record is represented as a table row. Tables can be nested to represent hierarchical data. <br />
For example, the json file `orders_1.json` is made available in DataSQRL as the table `orders` with fields like `time` and `customerid` and each order record is a row in the table. The `orders` table has a nested `items` table for each order item in the hierarchical json source data.

Tables are grouped into datasets. A dataset usually consists of tables that are related or logically belong together like the `orders` and `products` tables in our tutorial.

A data source provides access to one or multiple datasets. A folder data source adds a single dataset to the DataSQRL server which has the same name as the folder by default. Some data sources add multiple datasets. Datasets must be unique on a single server instance, i.e. if two data sources try to add datasets with the same name, you'll get an error and have to [specify a different](/docs/reference/cmd#sources) name for the duplicate dataset. <br />
Likewise, tables within a dataset must have unique names. 

To use tables within your SQRL script, you import them through an import statement:
```sqrl
IMPORT nutshop-data.*;
```

This imports all tables from the `nutshop-data` dataset. You can also import tables individually:

```sqrl
IMPORT nutshop-data.Products;
IMPORT nutshop-data.Orders;
```

When the DataSQRL server executes this script, it looks up the `products` and `orders`
tables in the `nutshop-data` dataset and makes that data available for processing within
the script. \
Note, that dataset and table names are NOT case-sensitive. 
`orders` and `Orders` are treated as the same name unless the name is explicitly delimited.

That's a lot of concepts and explanation. To summarize:

* A **table** contains of data structured by fields with each record as a row.
* A **dataset** is a group of related tables.
* A **data source** is a configuration that tells DataSQRL where and how to access datasets.
* `IMPORT` statements make tables available within a SQRL script for processing.

## Developing with Data Sources

During development, we prefer to work with static files because it
is predictable and easy to debug. That's why we are using only file-based data sources
for our getting started tutorials. It allows us to quickly iterate on our SQRL script
without having to worry about changing data.

However, DataSQRL is built specifically for realtime and streaming
data and supports data sources like [queues, logs, and databases](/docs/guides/sources/overview)
which store streaming or changing data. In DataSQRL every source table is a (potentially
endless) stream of rows.

### Streaming Data

To test this streaming feature of DataSQRL during development with static files, we
can add additional data to the data source folder while our script is running. Here is how:

First, make sure you followed the [nut shop tutorial](../nutshop-tutorial) and are still 
running the `customer360` SQRL script in development mode via the
`datasqrl watch customer360.sqrl` command.

Run the following query in GraphiQL and notice the result.

```graphql
{
    Customers(id: "50")
    {
        purchases(limit:10)
        {
            id
            time
            total
            savings
        }
    } 
}
```

Now, add the [orders_2.json](/) file into the nutshop-folder to add some additional orders.
DataSQRL treats files which have a name (ignoring the extension) that ends in `_[number]`
as part files, i.e. parts of one large file. DataSQRL considers `orders_1.json` and 
`orders_2.json` to be two parts of the same `orders.json` file. 
This explains why DataSQRL used `orders` as the table name for the `orders_1.json` file.

DataSQRL monitors folder data sources for additional files and when a new part file
shows up, it ingests those new records and treats them as additional rows in the `orders`
table.

You can verify this by running the above query again. You should see a different set of 
orders returned because newer orders have been added through `orders_2.json`.

## Cloud Storage Data Source

Another popular data source for development is cloud storage because it is easier
to share and centrally control the data files used for development.

In fact, we got some USDA food and nutritional information about the nuts that we sell
sitting in an S3 bucket. Let's add it as a data source so we can use the nut information
in our product recommendation.

```bash
datasqrl source cloud arn:aws:s3:::usda-data 
```
(is this what it should look like?)

Adding a cloud bucket is very similar to adding a folder: DataSQRL adds a dataset for the
bucket and a table for each file contained therein. However, instead of accessing the data
locally, we are now ingesting data from a cloud bucket.

## Next Steps

You've learned more than enough to get you started with data sources. Next, we are going
[learn more about writing SQRL scripts](sqrl), so you can build powerful data services.

---

If you want to learn more about data sources in DataSQRL, here are a couple of topics to
dive deeper:

* **Other Types of Data Sources**: DataSQRL supports a range of [different data sources](/docs/guides/sources/overview)
 for many popular data systems. You can also [implement a data source connector](/docs/dev/architecture/data-source)
 to connect data sources that aren't supported yet.
* **Data Source Customization**: The [data source API](/docs/reference/sources/api) and
 the [command line utility](/docs/reference/cmd#sources) have a number of configuration options
 to customize how data sources are connected. You can change the default dataset name,
 the pattern DataSQRL uses to recognize part files, refresh intervals, and much, much more.
 Check out the respective reference pages to learn more.
* **Schema Discovery**: DataSQRL automatically analyzes the data in data sources to 
 discover the schema. DataSQRL supports flexible schemas and heterogeneous data types,
 which means you don't have to worry about schema in most cases. Learn more about
 [schema management](/docs/reference/sources/schema-management) in DataSQRL and how you can 
 [overwrite the schema](/docs/guides/sources/manual-schema) when you are dealing with complex or messy data.
