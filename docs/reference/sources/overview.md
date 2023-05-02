---
title: "Data Sources and Sinks"
---

# Data Sources and Sinks

Data sources and sinks are [packages](../../concepts/package) that contain configuration files for reading data from or writing data to external data systems. A data source/sink package is a set of tables. Each table represents a stream or static set of data in another system, such as a Kafka topic, a collection of files, a CDC stream of a database table, etc. 

When [importing a table](../../sqrl/import), the last element of the import path specifies the name of the table in the data source (or `*` for all table) and the prior path identifies the package which defines the data source that contains the table. For example:

```sqrl
IMPORT datasqrl.seedshop.Orders;
```
* `datasqrl.seedshop` identifies the package which defines the data source
* `Orders` is the name of the table we are importing from that data source

The [export path](../../sqrl/export) is resolved exactly the same way. For example:
```sqrl
EXPORT NewCustomerPromotion TO sendmail.Promotion; 
```
* `sendmail` identifies the package which defines the data sink
* `Promotion` is the name of the table from that data sink we are exporting data to

DataSQRL loads data sources and sinks at compile time to build connectors for data ingestion or data egress as well as schema mappers to validate and synchronize data structures with external systems.

DataSQRL loads data sources and sinks from either [local](../../concepts/package#local-package) or [remote](../../concepts/package#remote-package) packages.

## Create New Data Source/Sink Package {#create}

To connect to a data system of your choice, create a new data source or sink package using DataSQRL's [data discovery](../discovery). Data discovery inspects the data system, discovers available tables, and generates the configuration and schema files that define a data source or sink package.

:::info
Before creating a new data source or sink package, check the [DataSQRL repository](../../operations/repository) to see if the sink or source already exists and [add it as a dependency](#remote) if it does.
:::

## Add Data Source/Sink as Local Package {#local}

To add a data source or sink as a local package, copy the directory containing the data source/sink configuration files as a sub-directory into the root directory of your SQRL project. The relative path to that sub-directory is the package path for the data source/sink.

For example, assuming you ran [data discovery](../discovery) which generated a data source package in the folder `~/datasqrl/datasets/mysource` and the root directory of your SQRL project is `~/datasqrl/project/myproject`, use the following command to copy your data source package into your project:
```bash
> mkdir -p ~/datasqrl/project/myproject/mysource && cp -r ~/datasqrl/datasets/mysource $_
```

Now, you can import tables from that data source via the import statement `IMPORT mysource.MyTable` which resolves the `mysource` package against the `mysource` folder in the project root and locates the `MyTable` table inside it. Copying data sinks as local packages works the same way.

We recommend using local packages when the data source/sink is specific to the SQRL script you are implementing.

## Add Data Source/Sink as Dependency {#remote}

To add a data source or sink from a repository, you declare the package as a dependency in the [package configuration](../../operations/package-config). The DataSQRl package manager fetches all dependencies from the [repository](../../operations/repository) and places them in the build directory at compile time.

To declare a dependency, create or open the `package.json` configuration file in the root of your SQRL project.
Add a dependency to the list of dependencies:
```json
{
  "dependencies":
  {
    "datasqrl.seedshop": { "version":  "1.0.0", "variant":  "dev" }
  }
}
```

A dependency is defined by the package name as the key, the version of the dependency, and an optional variant.

A data source/sink package can have multiple variants for a given version. A variant might be a subset, static snapshot, or point to an alternate data system for development and testing.

This dependency declaration allows us to import a table from the data source via `IMPORT datasqrl.seedshop.Orders;`.

When replacing another dependency or for convenience, we can rename the package in the dependency declaration:
```json
{
  "dependencies":
  {
    "renamed.source": { "name": "datasqrl.seedshop", "version":  "1.0.0", "variant":  "dev" }
  }
}
```
This dependency declaration references the same package, version, and variant as the one above but renames the package to `renamed.source` which means the import statement changes to `IMPORT renamed.source.Orders;`.

We recommend adding data sources and sinks as dependencies whenever the source/sink is independent of the SQRL script. Dependencies make it easier to manage sources and sinks as they or the SQRL script evolve over time.

## Add Data Source/Sink to Repository

To add a data source or sink package to the repository so that it can be declared as a dependency, follow these steps:

1. Create a new data source or sink package locally using [data discovery](../discovery) in an empty directory.
2. [Publish](../../operations/repository#publish) the source or sink package to the repository.


