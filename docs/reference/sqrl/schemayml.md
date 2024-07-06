# *.schema.yml

### Schemas

The DataSQRL schema is a flexible schema format for data sources and sinks. DataSQRL schema is simple, accommodates semi-structured data, supports schema evolution, and provides testing capabilities.

DataSQRL schema is the default schema used for schema-less sources.

DataSQRL can automatically discover the schema of data sources via the [discover](../discovery) command.

DataSQRL table schemas are stored in files ending in `.schema.yml`. There is one schema file per table of the same name.


#### Example DataSQRL Schema

This is the DataSQRL schema of the `orders` table from the [DataSQRL tutorial](/docs/getting-started/intro/overview):

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

### Data Constraints

The `test` attribute specifies data constraints for columns, whether scalar field or nested table. These constraints are validated when data is ingested to filter out invalid or unneeded data. The constraints are also used to validate statements in SQRL scripts. In addition, the DataSQRL [optimizer](../../operations/optimizer) analyzes the constraints to build more efficient data pipelines.

DataSQRL schema supports the following test constraints:

* **not_null**: the column can not be missing or have a null value.
* **unique**: the column values are unique across all records in this table.
* **cardinality**: constrains the cardinality of a nested table or array. Has parameters `min` and `max` for the minimum and maximum cardinality.
