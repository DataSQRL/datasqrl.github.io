---
title: "Data Sources and Sinks"
---

# Data Sources and Sinks

Data sources and sinks are defined in configuration files that are contained in [packages](../../concepts/package). The configuration specifies how to connect to and read from (or write to) the source (or sink).

DataSQRL supports a lot of different data systems as sources and sinks, including Kafka, file system, object storage, Iceberg, Postgres, etc. Check out the [connectors](docs/category/connectors/) for all the data systems that DataSQRL can connect to.

## Import from Data Source

Data sources are imported into a SQRL script.

When [importing a table](../../sqrl/import), the last element of the import path specifies the name of the source (or `*` for all sources) and the prior path identifies the package which defines contains the source configuration.

```sqrl
IMPORT datasqrl.tutorials.seedshop.Orders;
```
* `datasqrl.tutorials.seedshop` identifies the package which contains the source configuration.
* `Orders` is the name of the source we are importing from in that package. The name which identifies the source configuration file.

By default, the name of the source is also the name of the table in the SQRL script which contains the source data. To give it a different name, you can use the `AS` keyword:

```sql
IMPORT datasqrl.tutorials.seedshop.Orders AS MyOrders;
```

To configure your own data sources, [learn how to add a data source](../add-source).

## Export to Data Sinks

Exporting data to a data sink feeds the processed data to an external data system.

The [export path](../../sqrl/export) is resolved exactly the same way as the import path. For example:
```sqrl
EXPORT NewCustomerPromotion TO sendmail.Promotion; 
```
* `sendmail`  identifies the package which contains the sink configuration.
* `Promotion` is the name of the sink we are exporting to in that package. The name identifies the sink configuration file.

To configure your own data sinks, [learn how to add a data sink](../add-sink).

## Packages

Source and sink configurations are grouped in [packages](../../concepts/package). A package is identified by a package path, like `datasqrl.tutorials.seedshop`.

A package path must resolve against a local directory (relative to where the compiler is invoked) or against the [repository](../../operations/repository).

The compiler loads packages at compile time to read the configuration files for the sources and sinks referenced in `IMPORT` and `EXPORT` statements.

### Add Package as Dependency {#remote}

Package dependencies can also be explicitly defined in the [package configuration](../../operations/package-config) for your SQRL script. Explicit package dependencies are encouraged as projects head to production or for projects with many team members, since they make it obvious how packages are resolved at compile time.

To add a data source or sink from a repository, you declare the package as a dependency in the . The DataSQRl package manager fetches all dependencies from the [repository](../../operations/repository) and places them in the build directory at compile time.

To declare a dependency, create or open the `package.json` configuration file in the root of your SQRL project.
Add a dependency to the list of dependencies:
```json
{
  "dependencies":
  {
    "datasqrl.tutorials.seedshop": { "version":  "1.0.0", "variant":  "dev" }
  }
}
```

A dependency is defined by the package name as the key, the version of the dependency, and an optional variant. This dependency makes it explicit that we are importing version `1.0.0` of the `dev` variant of the `datasqrl.tutorials.seedshop` package.

A data source/sink package can have multiple variants for a given version. A variant might be a subset, static snapshot, or point to an alternate data system for development and testing.

We can also rename dependencies which makes it easy to dynamically swap out dependencies for different environments and testing.
```json
{
  "dependencies":
  {
    "datasqrl.tutorials.seedshop": { "name": "local-seedshop", "version":  "1.0.0", "variant":  "dev" }
  }
}
```
The package path `datasqrl.tutorials.seedshop` is now pointing to the local directory `local-seedshop` and source and sink configuration files will be loaded from there at compile time.

We recommend adding data sources and sinks as dependencies whenever the source/sink is independent of the SQRL script. Dependencies make it easier to manage sources and sinks as they or the SQRL script evolve over time.