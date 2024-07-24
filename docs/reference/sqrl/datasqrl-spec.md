# DataSQRL Reference

DataSQRL adds engines, optimizer, and tooling on top of the SQRL specification.

## Package.json
The package configuration is the central configuration file used by DataSQRL. The package configuration declares dependencies, configures the engines in the data pipeline, sets compiler options, and provides package information.

Multiple package json documents can be specified and will be merged. Arrays are replaced and objects are merged.

DataSQRL allows environment variables: `${VAR}`.

A minimal package json contains the following:
```json
{
  "version": "1"
} 
```

## Engines
`engines` is a map of engine configurations by engine name that the compiler uses to instantiate the engines in the data pipeline. The DataSQRL compiler produces an integrated data pipeline against those engines. DataSQRL expects that a stream engine is configured.


Engines can be enabled with the enabled-engines property. The default set of engines are listed below:
```json
{
  "enabled-engines": ["vertx", "postgres", "kafka", "flink"]
}
```

### Flink
Default stream engine.

#### Connectors

Connectors that link flink to other engines and external systems can be configured in the `connectors` property. Connectors use the [flink configuration](https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/overview/) and are directly passed through to flink without modification.

Environment variables that start with the `sqrl` prefix are templated variables that SQRL profiles. For example: `${sqrl:table}` provides the table name for the generated table.

```json
{
  "engines" : {
    "flink" : {
      "connectors": {
        "postgres": {
          "connector": "jdbc",
          "password": "${JDBC_PASSWORD}",
          "driver": "org.postgresql.Driver",
          "username": "${JDBC_USERNAME}",
          "url": "${JDBC_URL}",
          "table-name": "${sqrl:table}"
        },
        "kafka": {
          "connector" : "kafka",
          "format" : "flexible-json",
          "properties.bootstrap.servers": "${PROPERTIES_BOOTSTRAP_SERVERS}",
          "properties.group.id": "${PROPERTIES_GROUP_ID}",
          "scan.startup.mode" : "group-offsets",
          "properties.auto.offset.reset" : "earliest",
          "topic" : "${sqrl:topic}"
        },
        "iceberg" : {
          "warehouse":"s3://daniel-iceberg-table-test",
          "catalog-impl":"org.apache.iceberg.aws.glue.GlueCatalog",
          "io-impl":"org.apache.iceberg.aws.s3.S3FileIO",
          "catalog-name": "mydatabase"
        }
      }
    }
  }
}
```

### Postgres
Default `database` engine.

### Vertx
The default `server` engine. A high performance graphql server implemented in [Vertx](https://vertx.io/). This engine allows bringing graphql schemas. Graphql schemas can be trimmed depending on the use case. Type names are user definable and follow [graphql inference rules](https://github.com/DataSQRL/sqrl/issues/55).

<!--
**SQRL Integration**

(in development) Graphql mutations and subscriptions automatically create log sources and sinks in SQRL. In addition, a special variable is given to SQRL called `@JWT` which can access jwt token information.
```sql
MyUser(@JWT.user: String) := SELECT * FROM Users WHERE id = @JWT.user;
```
-->

### Kafka
The default `log` engine. 

### Iceberg
A `database` engine. The iceberg engine requires a `query` engine, such as snowflake.

### Snowflake
A `query` engine. 

The snowflake connector assumes aws glue.
```json
{
  "snowflake" : {
    "catalog-name": "MyCatalog",
    "external-volume": "iceberg_storage_vol"
  }
}
```

## Compiler
```json
{
  "compiler" : {
    "addArguments": true,
    "explain": true,
    "snapshotPath": "/mypath"
  }
}
```


## Profiles
```json
{
  "profiles": ["myprofile"]
}
```

Profiles are advanced features for building deployment assets. 

DataSQRL ships with a profile that is suited for docker compose but any profile can be specified. It also includes a package.json for defining the docker compose variables.

The package.json in the profile will be merged with the user provided package.json.

**File Structure**
Includes a package.json.
Profiles can ship with many engines. Only the enabled engines will be included, skipping all disabled engines. All other files are copied over.

**Templating**
After compilation, a freemarker template engine is run on eligible files that end in `.ftl`. Each engine will be given its own plan.

Each physical plan that is generated is available to the templating engine. The plans can be seen in `plans` directory in the `build` directory. The templating engine also provides these variables:
- **config**: the full package.json file
- **environment**: The current system environment.

## Values
The package.json allows a section to allow arbitrary values. This can be useful when writing profiles that need additional information to operate.

The default template exposes a flink-config section to allow injecting additional flink configuration.
```json
{
 "values" : {
    "flink-config" : {
      "taskmanager.memory.network.max": "800m",
      "execution.checkpointing.mode" : "EXACTLY_ONCE",
      "execution.checkpointing.interval" : "1000ms"
    }
   }
}
```

## Dependencies
`dependencies` is a map of all packages that a script depends on. The name of the dependency is the key in the map and the associated value defines the dependency by `version` and `variant`.

While explicit package dependencies are encouraged, DataSQRL will automatically look up packages in the SQRL script in the [repository](https://dev.datasqrl.com).

```json
{
  "dependencies" : {
    "datasqrl.seedshop" : {
      "name": "datasqrl.seedshop",
      "version" : "0.1.0",
      "variant" : "dev"
    }
  }
}
```

This example declares a single dependency `datasqrl.seedshop`. The DataSQRL packager retrieves the `datasqrl.seedshop` package from the repository for the given version "0.1.0" and "dev" variant and makes it available for the compiler. The `variant` is optional and defaults to `default`.

**Variants**
Package can have multiple variants for a given version. A variant might be a subset, static snapshot, or point to an alternate data system for development and testing. 

**Dependency Aliasing**:

We can also rename dependencies which makes it easy to dynamically swap out dependencies for different environments and testing.
```json
{
  "dependencies":
  {
    "datasqrl.tutorials.seedshop": { 
      "name": "local-seedshop", 
      "version":  "1.0.0", 
      "variant":  "dev" }
  }
}
```
In the above example, the `local-seedshop` directory will be looked up and renamed to `datasqrl.tutorials.seedshop`.

## Repository
The `package` section of the configuration provides information about the package or script. The whole section can be omitted when compiling or running a script. It is required when publishing a package to the repository.

:::info
To publish a package to the remote repository, the first component of the package name path has to match your DataSQRL account name or the name of an organization you are part of.
:::

Learn more about publishing in the CLI documentation.

```json
{
  "package": {
    "name": "datasqrl.tutorials.Quickstart",
    "version": "0.0.1",
    "variant": "dev",
    "description": "A docker compose datasqrl profile",
    "homepage": "https://www.datasqrl.com/docs/getting-started/quickstart",
    "documentation": "Quickstart tutorial for datasqrl.com",
    "topics": "tutorial"
  }
}
```

| Field Name    | Description                                                                                                                                                                   | Required? |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| name          | Name of the package. The package name should start with the name of the individual or organization that provides the package.                                                 | Yes       |
| version       | The version of the package. We recommend to use [semantic versioning](https://semver.org/).                                                                                   | Yes       |
| variant       | The variant of the package if multiple variants are available. Defaults to `default`.                                                                                         | No        |
| latest        | If this is the latest version of this package. DataSQRL uses the latest version when looking up missing packages on import. Defaults to `false`. | No        |
| description   | A description of the package.                                                                                                                                                 | No        |
| license       | The license used by this package.                                                                                                                                             | No        |
| documentation | Link that points to documentation for this package                                                                                                                            | No        |
| homepage      | Link that points to the homepage for this package                                                                                                                             | No        |


## Test
```json
{
  "test-runner": {
    "delay-sec": 30
  }
}
```

## Profiles
Additional profiles can be specified.

```json
{
  "profiles" : ["datasqrl.profile.default"]
}
```

## *.table.json
Bring native connectors are possible with a table.json file. 

The flink section is a connector passthrough for generating the flink connector. Use the flink documentation to learn how to configure connectors: https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/overview/

The table defines the type: source / sink / source_sink
The primary key.
The timestamp column. This can be derived from metadata columns.
Watermark-millis. Could be 0 or a higher watermark. See the flink docs to learn more about watermarks and what works well for your use case.
Metadata columns can either be metadata columns as described by flink, or a computed column.

```json
{
  "version": 1,
  "flink" : {
    "format" : "avro",
    "bootstrap.servers": "${BOOTSTRAP_SERVERS}",
    "group.id": "datasqrl-orders",
    "connector" : "kafka"
  },
  "table" : {
    "type" : "source",
    "primary-key" : ["id", "time"],
    "timestamp" : "_source_time",
    "watermark-millis" : "0"
  },
  "metadata" : {
    "_source_time" : {
      "attribute" : "timestamp",
      "type": "TIMESTAMP_WITH_LOCAL_TIME_ZONE(3)"
    },
    "_uuid" : {
      "attribute" : "secure.uuid()"
    }
  }
}
```

For example, the above would generate a flink connector like:
```
CREATE TABLE orders (
    id STRING,
    time TIMESTAMP(3),
    ...
    _source_time TIMESTAMP_WITH_LOCAL_TIME_ZONE(3) METADATA FROM 'timestamp' VIRTUAL,
    _uuid STRING METADATA FROM 'uuid()',
    WATERMARK FOR time AS time - INTERVAL '0' SECOND,
    PRIMARY KEY (id, time) NOT ENFORCED
) WITH (
    'connector' = 'kafka',
    'topic' = '<topic_name>',
    'properties.bootstrap.servers' = '${BOOTSTRAP_SERVERS}',
    'properties.group.id' = 'datasqrl-orders',
    'format' = 'avro',
    'scan.startup.mode' = 'latest-offset'
)
```

### schema.yml

The DataSQRL schema is a flexible schema format for data sources and sinks. DataSQRL schema is simple, accommodates semi-structured data, supports schema evolution, and provides testing capabilities.

DataSQRL schema is the default schema used for schema-less sources.

DataSQRL can automatically discover the schema of data sources via the [discover](../cli) command.

DataSQRL table schemas are stored in files ending in `.schema.yml`. There is one schema file per table of the same name.


#### Example DataSQRL Schema

```yml
name: "orders"
schema_version: "1"
partial_schema: false
columns:
- name: "id"
  type: "INTEGER"
  tests:
  - "not_null"
- name: "customerid"
  type: "INTEGER"
  tests:
  - "not_null"
- name: "time"
  type: "DATETIME"
  tests:
  - "not_null"
- name: "items"
  cardinality:
    min: 1
    max: 1000
  columns:
  - name: "productid"
    type: "INTEGER"
    tests:
    - "not_null"
  - name: "quantity"
    type: "INTEGER"
    tests:
    - "not_null"
  - name: "unit_price"
    type: "FLOAT"
    tests:
    - "not_null"
  - name: "discount"
    type: "FLOAT"
  tests:
  - "not_null"
```

#### Schema Definition

DataSQRL schema supports the following attributes to define a table:

| Field Name     | Description                                                                                                                   | Required? |
|----------------|-------------------------------------------------------------------------------------------------------------------------------|-----------|
| name           | Name of the table that this schema applies to                                                                                 | Yes       |
| schema_version | Version of DataSQRL schema for this schema file                                                                               | Yes       |
| description    | Description of the table                                                                                                      | No        |
| partial_schema | When true, DataSQRL will attempt to discover the rest of the schema in discovery. If false, it considers the schema complete. | No        |

A table is defined by a list of columns. A column has a `name`. A column is either a scalar field or a nested table.

A column is defined by the following attributes:

| Field Name    | Description                                                        | Required?                           |
|---------------|--------------------------------------------------------------------|-------------------------------------|
| name          | Name of the column. Must be unique per table at any nesting level. | Yes                                 |
| description   | Description of the column                                          | No                                  |
| default_value | Value to use when column is missing in input data.                 | No                                  |
| type          | Type for a scalar field                                            | One of `type`, `columns` or `mixed` |
| columns       | Columns for a nested table                                         | One of `type`, `columns` or `mixed` |
| mixed         | A mix of scalar fields and nested tables for unstructured data     | One of `type`, `columns` or `mixed` |
| tests         | A set of constraints that the column satisfies                     | No                                  |

A column must either have a type (for scalar field) or a list of columns (for nested table). For unstructured data (i.e. data that does not conform to a schema), there is a third option to define a *mixed column* which can be a combination of multiple scalar fields or nested tables.

A mixed column is defined by the attribute `mixed` which is a map of multiple column definitions that are identified by a unique name.

```yml
- name: "time"
  mixed: 
    - "epoch":
        type: INTEGER
    - "timestamp":
        type: DATETIME
```

This defines the column `time` to be a mixed column that is either a scalar field called `epoch` with an `INTEGER` type or a scalar field called `timestap` with a `DATETIME` type. We would use such a mixed column definition for data where `time` is either represented as seconds since epoch or a timestamp.

Each individual column of a mixed column definition gets mapped onto a separate column in the resulting SQRL table with the column name being a combination of the mixed column name and the map key. For our example above, the SQRL `orders` table would contain a column `time_epoch` and `time_timestamp` for each of the respective scalar fields.

#### Scalar Types

DataSQRL schema supports these scalar types:

* **INTEGER**: for whole numbers
* **FLOAT**: for floating point numbers
* **BOOLEAN**: true or false
* **DATETIME**: point in time
* **STRING**: character sequence
* **UUID**: unique identifier
* **INTERVAL**: for periods of time

To define arrays of scalar types, wrap the type in square brackets. For instance, an integer array is defined as `[INTEGER]`.

#### Data Constraints

The `test` attribute specifies data constraints for columns, whether scalar field or nested table. These constraints are validated when data is ingested to filter out invalid or unneeded data. The constraints are also used to validate statements in SQRL scripts. In addition, the DataSQRL [optimizer](/docs/reference/sqrl/learn#datasqrl-optimizer) analyzes the constraints to build more efficient data pipelines.

DataSQRL schema supports the following test constraints:

* **not_null**: the column can not be missing or have a null value.
* **unique**: the column values are unique across all records in this table.

