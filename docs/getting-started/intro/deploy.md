---
title: "Deploy Pipeline"
---

# Deploying DataSQRL Pipelines

You've gone through the [introductory tutorial](../overview) and seen how DataSQRL compiles SQRL scripts and API specifications into end-to-end streaming data pipelines that ingest, process, and serve data through an API.

Now we are going to take a closer look at how DataSQRL compiles those pipelines in order to deploy them.

So far, we have used the DataSQRL `run` command to run our SQRL scripts. The `run` command is great for developing and testing our SQRL scripts because it compiles, builds, and deploys data pipelines in a single process. To deploy SQRL scripts into production, we want more control over how the pipeline gets deployed. And if you are using DataSQRL for the first time, you probably want to know exactly how the sausage gets made.

Let's dive right in and peak behind the curtain of DataSQRL's compilation process.


## How the Compiler Works

:::info

We are using the [Quickstart example](../../quickstart) to illustrate how the compiler works. Make sure you have the `seedshop.sqrl` script in your local directory.

:::

<img src="/img/reference/compilation_simplified.svg" alt="DataSQRL Compilation >" width="40%"/>

DataSQRL compiles your SQRL script, API sepcification, and package configuration into a data pipeline. The package configuration configures the pipeline, dependencies, and compiler. It's the central configuration file that configures the entire build process.

The package configuration is optional and DataSQRL will generate one for you if it cannot find a `package.json` in the folder or specify it via the `-c` option of the compiler command.



You run the DataSQRL compiler with the command:


The compiler parses the script, resolves data and function imports, validates the statements, and transpiles SQRL table definitions into a variant of relational algebra that we extended to support data streams.

Likewise, the compiler parses the API specification, maps it onto the table definitions from the SQRL script, and determines the relational queries that connect the two.

The DataSQRL optimizer takes SQRL table definitions and queries from the API specification and links them into a DAG (directed acyclic graph).

:::warning
This page is work in progress
:::