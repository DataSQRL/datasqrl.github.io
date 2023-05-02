
# Import

The `IMPORT` statements imports tables and functions into an SQRL script. Tables can either be imported from an external data source or another SQRL script.

Tables and functions are imported from [packages](../../concepts/package). The import path is the name of the package followed by the name of a specific table or function to import or the asterisk character `*` to import all tables and functions from the package. Import paths use the dot character `.` to separate path components.

```sql
IMPORT datasqrl.seedshop.Orders;
IMPORT time.*;
```

The first statement imports a table named `Orders` from the package `datasqrl.seedshop`. The second imports all functions from the `time` package.

## Package Resolution

Packages are either part of the standard SQRL library, declared as a dependency, or stored in a local directory.

### Locally

Packages are looked up locally first. The package name path is converted to a directory path relative to the directory in which the DataSQRL [command](../../operations/command) is invoked.

A package with the name `my.data` is translated to the relative directory path `my/data` (on Unix based systems) or `my\data` (on Windows).

If this directory exists, imported tables and functions are located inside that directory.

### Dependency

Dependencies are declared in the [package configuration](../../operations/package-config#dependency) and downloaded from a [repository](../../operations/repository) at compile time.

By default, DataSQRL looks up any missing packages in the [repository](https://dev.datasqrl.com). A package is missing if it is not declared as dependencies and cannot be resolved locally. If the missing package can be located in the repository, a dependency on the most recent version of that package is added to the package configuration.

Take a look at the DataSQRL [repository](https://dev.datasqrl.com) to find public packages you can import into your script. (coming soon)

You can [publish](../../operations/repository) your own packages to the repository, so they can be used as dependencies in your SQRL scripts.

### Standard Library

The SQRL standard library contains function packages that can be imported without any configuration. For example, `time` is a standard library function package that contains functions for manipulating timestamps. See the [list of function packages](/docs/category/functions) for more information.


## Changing Names

To import a table or function under a different name, use `AS` directly after the import path:

```sql
IMPORT datasqrl.seedshop.Orders AS MyOrders;
IMPORT time.epochMilliToTimestamp AS epoch2TS; 
```

This statement imports the same `Orders` table from the `datasqrl.seedshop` but makes it available under the name `MyOrders` in the script. Likewise, the `epochMilliToTimestamp` is imported under the name `epoch2TS`.

You can change the name of imported tables and functions to resolve naming conflicts or choose names that are a better fit for your script.

## Setting Timestamps {#timestamp}

Timestamps are important for [stream tables](../stream). In many cases, the DataSQRL compiler can determine the timestamp of a stream table. In other cases, you can declare the timestamp of a data source table explicitly:

```sql
IMPORT datasqrl.seedshop.Orders TIMESTAMP timestamp;
```

This statement declares that the `timestamp` column on the `Orders` table must be used as the timestamp.

The timestamp declaration can also be an expression to process the input data to produce a valid timestamp.

```sql
IMPORT time.epochMilliToTimestamp;
IMPORT datasqrl.seedshop.Customers TIMESTAMP epochMilliToTimestamp(changed_on) AS timestamp;
```

In this import statement we convert the integer `changed_on` column to a timestamp via the `epochMilliToTimestamp` function. When an expression is used to declare a timestamp it is added as a column to the table and must be given a name after the `AS` keyword.

:::info
Declaring a timestamp is only possible for tables that are imported directly from a data source.
:::

## Creating A Package

To create a new package to import your own tables or functions into a SQRL script, read the following documentation:

* [**Data Source Package**](../../sources/overview): to create a package that contains tables from an external data source
* [**Function Package**](../functions/custom-functions): to create a package that contains custom function implementations
* **SQRL Script** (coming soon): to import tables defined in another SQRL script
