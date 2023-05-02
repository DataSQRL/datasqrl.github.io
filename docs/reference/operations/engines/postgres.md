---
title: "Postgres"
---

# Postgres Database Engine

[Postgres](https://www.postgresql.org/) is an open-source relational database management system (RDBMS) that emphasizes extensibility and compliance with SQL standards. Postgres offers a powerful set of data manipulation and analysis tools, including advanced indexing options, query optimization, and support for full-text search. In addition, it provides a robust security model with built-in authentication, authorization, and auditing capabilities. Postgres is widely used in enterprise and web-based applications, as well as in academic and scientific environments, and has a large and active user community that contributes to its ongoing development and improvement.

## Configure

The Postgres database engine is configured as an engine in the [package configuration](../package-config#engine) with the following configuration options.

| Field Name | Description                                   | Required? |
|------------|-----------------------------------------------|-----------|
| name       | `jdbc` string literal                         | Yes       |
| url        | The JDBC URL for connecting to the database.  | Yes       |
| driver     | Use the string `org.postgresql.Driver`.       | Yes       |
| dialect    | Use the string `postgres`.                    | Yes       |
| database   | Name of the database to use for storing data. | Yes       |
| user       | User name for authentication.                 | No        |
| password   | Password for authentication.                  | No        |


## Deploy

Coming soon