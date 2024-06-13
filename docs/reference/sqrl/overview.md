
# SQRL Documentation

SQRL is an extension of SQL that adds support for data streaming to the standard database query language. SQRL stands for *"**S**tructured **Q**uery and **R**eaction **L**anguage"* because it extends SQL with support for streaming data and the ability to react to data in realtime. In addition, SQRL adds a number of convenience features that make it development-friendly.

This documentation explains the features of SQRL and everything you need to know to build data products with SQRL. It assumes basic familiarity with SQL. If you haven't used SQL before, or it's been a while, we recommend that you read the [SQL primer](../sql-primer) first.

## SQRL Overview

A SQRL script looks like this:

```sql
IMPORT mysource.MyTable;
       
DerivedTable := SELECT ... FROM MyTable WHERE ...;
```

SQRL scripts import and define tables using SQL queries. Tables can be [exposed in the API](../../api/overview#design), [imported](../import) by other SQRL scripts, or [exported](../export) to other data systems and action triggers.

SQRL tables are [defined](../table) as [imports](../import) or as `SELECT` queries from previously defined tables. Tables can also be [defined incrementally](../table) by adding a column or relationship to an existing table. [Learn more](../table) about defining tables in SQRL.

SQRL allows users to define [relationships](../relationship) between tables to relate records from one table to associated records from another table. Relationships allow SQRL to support [nested tables](../table#nested) which are a convenient way to represent nested or hierarchical data.

SQRL distinguishes between *state* and *stream* tables. State tables hold records that change over time as records are modified. Stream tables hold immutable records that have a timestamp and are naturally ordered in time.

[Stream tables](../stream) represent streams of data like events, IoT metrics, web logs, or change streams. SQRL provides native support for stream tables and methods for converting between stream and state tables. [Time](../time) plays an important role in stream tables because they are naturally ordered in time and SQRL provides a few features to make timestamp handling easy. <br />
Stream tables can be [exported](../export) to react to certain conditions or changes in the data.

State tables represent entities which can change or evolve over time. State tables are *normal* tables and have the same semantics and treatment as they do in [SQL](../sql-primer).

## SQRL Functions

Functions are used in queries and expressions to manipulate or aggregate data. SQRL supports most of the standard SQL functions out-of-the box.

You can [import](../import#function) additional functions from the SQRL [standard function library](docs/category/functions/) or implement and import your own functions as a [custom function package](../functions/custom-functions).

<!--

## SQL Compatibility

mention FlinkSQL
similar to https://beam.apache.org/documentation/dsls/sql/calcite/overview/

## SQRL Features

briefly list additional features that SQRL provides on top of SQL

-->







