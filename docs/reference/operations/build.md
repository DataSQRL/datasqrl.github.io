---
title: "Build"
---

# Building DataSQRL Projects

This page provides an overview of how to compile, run, and debug SQRL scripts and projects using the DataSQRL command. <br />
The [command documentation](../command) has a complete reference of the DataSQRL command and all options.

## Compile

To compile an SQRL script, you invoke the DataSQRL `compile` command:

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls
```

The `compile` command takes the SQRL script to compile as the first argument and an API specification as an optional second argument. If no API specification is provided, DataSQRL generates one. See [API Design](../../api/overview#design) for more details.

The command compiles the script and API specification into an integrated data product. The command creates a `build` with all the build artifacts that are used during the compilation and build process (e.g. dependencies). The command writes the deployment artifacts for the compiled data product into the `build/deploy` directory. Read more about deployment artifacts in the [deployment documentation](../deploy/overview).

DataSQRL supports [multiple engines](../engines/overview) and data pipeline architectures. That means, you can configure the architecture of the targeted data pipeline and what systems will execute individual components of the compiled data pipeline.

<img src="/img/reference/reactive_microservice.svg" alt="DataSQRL data pipeline architecture >" width="50%"/>

The figure shows a data pipeline architecture that consists of a Apache Kafka, Apache Flink, a database engine, and API server. Kafka holds the input and streaming data. Flink ingests the data, processes it, and writes the results to the database. The API server translates incoming requests into database queries and assembles the response from the returned query results.

The data pipeline architecture and engines are configured in the [package configuration](../package-config). The DataSQRL command looks for a `package.json` configuration file in the directory where it is executed. Alternatively, the package configuration file can be provided as an argument via the `-c` option. Check out the [command line reference](../command) for all command line options.

If no package configuration file is provided or found, DataSQRL generates a default package configuration with the example data pipeline architecture shown above and the following engines:

* [Apache Flink](../engines/flink) as the stream engine
* [Postgres](../engines/postgres) as the database engine
* [Vertx](../engines/vertx) as the API server

The package configuration contains additional compiler options and declares the dependencies of a script. Read more about [the package configuration](../package-config) to learn how to configure your build.

## Run

To run the pipeline that DataSQRL compiles from your SQRL script and API specification, execute:

```bash
(cd build/deploy; docker compose up)
```

This command executes docker-compose with the template generated by the DataSQRL compiler in the `build/deploy` directory. It starts all the engines and deploys the produced deployments artifacts of the compiled data pipeline to the engines to run the entire data pipeline.

The API server which is exposed at `localhost:8888/`. <br />
You can now access the API and execute queries against it to test your script and the compiled data pipeline. See the [API access documentation](../../api/overview#query) for more details.

Use the keystroke `CTRL-C` to stop the running data pipeline. This will stop all engines gracefully.

## Debug

To debug a SQRL script, compile it with the `-d` flag:

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile -d myscript.sqrl myapischema.graphqls
```

and then run it with:
```bash
(cd build/deploy; docker compose up)
```

In debug mode, the stream engine exports a change log of each computed table to the configured [debug sink](../package-config#debug) which is the [print sink](../../sources/system/print) by default. This allows you to see what is being computed at each step in your script.

## Deploy

When you finished development and are ready to deploy your SQRL script, check out the [deployment options](../deploy/overview).

<!--
## Publish

To reuse your SQRL script in other projects, you can publish it to the [repository](../respository).

-->

