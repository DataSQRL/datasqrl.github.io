---
title: "Add Source/Sink"
---

# Adding a Data Source or Sink

Data discovery is the easiest way to connect a data source or sink to DataSQRL and add a [data source/sink package](../overview).

Data discovery inspects a data system to discover available data sources and sinks and generates the configuration files for the data source/sink package that allows DataSQRL to ingest data from and export data to the system.

Data discovery is done in 2 steps:

## 1. Configure Data System {#datasystem}

First, create a configuration file with the connection details for the data system you want to use as a source or sink. In an empty directory, create a configuration file with the file name `system.discovery.table.json`.

The following is an example data system configuration file for a data source that reads data from the local file system. Copy the content into the `system.discovery.table.json` file to use as a starting point.

```json title="system.discovery.table.json"
{
  "type": "source",
  "connector": {
    "name": "file",
    "directoryURI": "~/datasqrl/datasets/mydata"
  },
  "format": {
    "charset": "UTF-8",
    "name": "json"
  }
}
```

Change the value of the fields to configure your own data source or sink. The following table explains each of the fields.

| Field Name      | Description                                                                                                  | Required?                    |
|-----------|--------------------------------------------------------------------------------------------------------------|------------------------------|
| type      | One of `source`, `sink`, or `source_and_sink` to specify whether this data system is a source, sink, or both. <br /> DataSQRL imports data from sources and exports data to sinks. | Yes                          |
| name      | Name of the data system. Used in debugging output to identify a source/sink.                                                                                       | No                           |
| connector | Connection configuration for the data system. [See below](#connector) for more details. | Yes                          |
| format    | Data format configuration that specifies how to read and write data. [See below](#format) for more details.                              | Depends on connector |

### Connection Configuration {#connector}

The `connector` field contains the configuration for connecting to a particular data system. The connector configuration depends on the type of data system you want to connect to. The `name` field in the connector configuration determines which data system is configured.

DataSQRL currently supports the following types of data systems:

* [**File System**](../system/file) *(source and sink, dynamic table sinks)*: Local file system, cloud storage, HDFS and other file based storage
* [**Apache Kafka**](../system/kafka) *(source and sink)*
* [**Print**](../system/print) *(sink only, dynamic table sinks)*

<!-- (add once databases are supported)
* [**AWS Kinesis**](../system/kinesis) (source and sink)
* [**Postgres**](../system/database#postgres) (source and sink)
* [**MySQL**](../system/database#mysql) (source and sink)
* [**MongoDB**](../system/mongodb) (source and sink)
* [**Oracle**](../system/database#oracle) (source and sink)
* [**SQLServer**](../system/database#sqlserver) (source and sink)
-->

Click on the data system type to learn how to configure the connection and additional information about using a particular data system.

### Data Format {#format}

The `format` field specifies the data format to use for reading and writing data. The `name` field in the format configuration determines which data format is configured.

DataSQRL currently supports the following data formats:

* [**JSON**](../format/json) *(discovers schema)*
* [**CSV**](../format/csv) *(discovers schema)*
* [**Avro**](../format/avro) *(requires schema)*

<!-- (add once databases are supported)
* [**SQL**](../format/sql): extracts schema
-->

Click on a data format to learn how to configure it and what configuration options are available.

The data format configuration is required unless data discovery can infer the data format automatically from available metadata. Review the documentation for the [data connector](#connector) you are using to determine whether it supports automatic format discovery.

:::info

Are you missing a data system connector or data format? You can [contribute](/docs/dev/contribute) one to the open-source project or reach out to the [community](/community) to request it.

:::

### Schema {#schema}

DataSQRL has a pluggable and flexible schema manager for structuring and validating data. Each table in a data source package must have a flexible or strict schema.

DataSQRL supports automatic schema discovery for data formats that have a flexible schema, such as [JSON](../format/json) and [CSV](../format/csv). In those cases, DataSQRL inspects the data to discover the data structure and configures a flexible schema for each table using the DataSQRL-specific [schema format](../schema).

<!-- (add once databases are supported)
When schema information is stored inside the data system, DataSQRL extracts the schema and configures it for each table. For example, DataSQRL retrieves the [SQL DDL](../format/sql#schema) for each table in a relational database and uses it as the schema.
-->

Some formats, such as [Avro](../format/avro), require a user-provided schema to read and write data in that format. Check the [data format](#format) to see if it requires a user-provided schema. 

If you have schema definitions for the tables in your data source or sink, you can provide it to data discovery in order to use your schema definitions for the data source configuration and disable automatic schema discovery. The benefit of using an existing schema is that DataSQRL can use it for data validation and optimization of the data pipeline.

DataSQRL supports the following types of schema:

* [**DataSQRL Schema**](../schema): Flexible schema for [CSV](../format/csv) and [JSON](../format/json). Extension `.schema.yml`.

<!--
* [**JSON Schema**](../format/json#schema): Standard schema for [JSON](../format/json). Extension `.schema.json`.
* [**Avro Schema**](../format/avro#schema): Standard schema for [Avro](../format/avro). Extension `.schema.avsc`.
-->

<!-- (add when database supported)
* [**SQL DDL**](../format/sql#schema): Standard schema for [SQL](../format/sql). Extension `.schema.sql`.
-->

:::note
Providing schemas is optional, and you can skip the next step, unless the [data format](#format) requires a schema.
:::

If you want to or have to provide a schema for the tables in your data source or sink, place a schema file for each table in the data source/sink in the same directory as the `system.discovery.table.json` file. The file name of the schema file is the name of the table (in lowercase) with the extension of the schema type.

For example, the file name of the DataSQRL schema for the table `Orders` is `orders.schema.yml`. 

Refer to the documentation pages of each schema type for their extension and more information.

## 2. Run Data Discovery

Invoke the DataSQRL discovery command to run data discovery for the data source or sink configured in the `system.discovery.table.json` file. Run the command in the same directory as the configuration file.

```bash
docker run -v $PWD:/build datasqrl/datasqrl-cmd discover system.discovery.table.json
```

This command inspects the configured data system and discovers all available tables and their schema. It requires that the machine on which you execute the command can connect to the data system with the provided configuration. 

For more information about the `discover` command and its options, refer to the [command-line documentation](../../operations/command#discover). If your data system configuration uses secrets, check out [secrets handling](../../operations/deploy/secrets).

<!--
### Generate Statistics

Data discovery can analyze the data of source tables to produce statistical information that the [DataSQRL optimizer](../../operations/optimizer) uses to produce more efficient data pipelines.

To produce statistics for your data source package, run the data discovery command with the `-s` flag.

-->

### Data Analysis

If data discovery is set up to discover the schema <!-- or generate table statistics -->, the `discover` command will run data analysis. Data Analysis ingests (a subset of) the data from the configured data source and computes a profile of the data. Data discovery then generates a [flexible schema](../schema) <!-- and table statistics--> for each discovered table from the data profile.  

Data analysis runs a full data pipeline as part of data discovery. The data pipeline is generated by DataSQRL and executed on the local machine where the command is executed. The data pipeline can be configured like any other pipeline through the [DataSQRL configuration](../../operations/package-config).

If the data source contains a lot of data or is unbounded (e.g. a Kafka stream), then data analysis can take a long time to analyze the data. By default, data analysis runs for an hour before it terminates. Use the `-l` to specify the runtime for data analysis in seconds.


## 3. Adjust Schema (optional)

When data discovery generates the table schemas, we recommend that you review the schema files to verify that they correctly represent the data. If data analysis terminated before analyzing all data, the schema may not be accurate.  And in some cases, you may want to make the schema more or less restrictive.

The table schemas are stored in files that end in `.schema.yml`. For the `Orders` table the schema is stored in `orders.schema.yml`.

Review the [DataSQRl schema](../schema) for more information on the schema format and how to modify it.

## Manual Data Source/Sink Definition {#manual}

Data discovery makes it easy to configure a data source or sink package for DataSQRL, because it generates the configuration and schema files for you. It also validates that the data system configuration is correct by connecting to and inspecting the data system. We recommend that you use data discovery to add a new data source or sink.

You can manually define a data source/sink package, if it is not possible to run data discovery, or you want to update an existing package.  

### Data Source Definition

A data source is a set of tables. Each table is defined by a table configuration and schema file. To define a data source, we create a configuration and schema file for each table. The files have the name of the table (in lowercase) and end in `.table.json` for the configuration file and the schema type extension for the schema file (refer to the [schema type](#schema) for the extension).

For example, to define the source for the `Orders` table with a [DataSQRL schema](../schema), we create the `orders.table.json` configuration file and `orders.schema.yml` schema file.

```json title="orders.table.json"
{
  "type": "source",
  "name": "orders",
  "identifier": "orders",
  "connector": {
    "directoryURI": "~/datasqrl/datasets/mydata",
    "name": "file"
  },
  "format": {
    "charset": "UTF-8",
    "name": "json"
  }
}
```

The table configuration is almost identical to the [data system configuration](#datasystem) above. The only difference is the `identifier` field which specifies how to identify the table data inside the data system. In the example above, we are using the file system connector and the identifier `orders` represents the name of the file that contains the data for the `orders` table. The name in the table configuration file is the name of the table.

The connector configuration for a table may also have additional configuration options. Refer to the [data system connector](#connector) documentation for more information.

The contents of the schema file for a table depend on the type of schema you are using. Refer to the documentation for each supported [schema type](#schema) for more information.

### Data Sink Definition

Defining a data sink is analogous to defining a data source. 

However, table schemas are optional when defining a data sink. If a table schema is provided, DataSQRL validates that the exported data is compatible with the schema of the table sink at compile time. If no schema is provided, DataSQRL assumes that the sink can consume the exported data which may lead to runtime issues.

Some data systems, such as [file system](../system/file) and [print](../system/print), can dynamically generate table sinks at compile time, which means defining a data sink only requires the data system configuration `system.discovery.table.json` and no table configurations. Refer to the [data system](#connector) documentation for data systems that support dynamic sink table generation.


<!--
### Table Statistics

The table statistics are stored in a file that has the same name as the table (in lowercase) and ends in `.stats.json`.

The table statistics contain aggregate statistics for each column and nested table in a table.

Example

-->

----

TODO:
- rename datadiscovery to connector
- rename "dir" to "file"
- always have one schema file per table
- Some sinks don't require data discovery (file, print). Make that clear on the respective documentation pages.

