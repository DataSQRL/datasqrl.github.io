---
title: "DataSQRL Compiler"
---

# How DataSQRL Compiles Data Pipelines

You've gone through the [introductory tutorial](overview) and seen how DataSQRL compiles SQRL scripts and API specifications into end-to-end streaming data pipelines that ingest data, process it, and serve the results through an API.

But how exactly does DataSQRL do this? What does it mean to "compile" streaming data pipelines? Let's dig into the internals and see how the sausage is made.

## Running the Compiler

:::info

We are using the [Quickstart example](../quickstart) to illustrate how the compiler works. Make sure you have the `seedshop.sqrl` script in your local directory.

:::

You run the DataSQRL compiler with the command:

```bash

```

The compiler parses the script, resolves data and function imports, validates the statements, and transpiles SQRL table definitions into a variant of relational algebra that we extended to support data streams.

Likewise, the compiler parses the API specification, maps it onto the table definitions from the SQRL script, and determines the relational queries that connect the two.

The DataSQRL optimizer takes SQRL table definitions and queries from the API specification and links them into a DAG (directed acyclic graph).

:::warning
This page is work in progress
:::