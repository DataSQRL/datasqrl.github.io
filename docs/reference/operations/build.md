---
title: "Build"
---

# Building SQRL Projects

This page provides an overview of how to compile, run, and debug SQRL scripts and projects using the DataSQRL command. <br />
The [command documentation](../command) has a complete reference of the DataSQRL command and all options.

## Compile

To compile an SQRL script, you invoke the DataSQRL `compile` command:

```bash
docker run -v $PWD:/build datasqrl/datasqrl-cmd compile myscript.sqrl myapischema.graphqls
```

The `compile` command takes the SQRL script to compile as the first argument and an API specification as an optional second argument. If no API specification is provided, DataSQRL generates one. See [API Design](../../api/overview#design) for more details.

The command compiles the script and API specification into an integrated data pipeline and produces the deployment artifacts for the compiled pipeline in the `deploy/` directory. 

DataSQRL supports [multiple engines](../engines/overview) and pipeline topologies. That means, you can configure the structure of the resulting data pipeline and what systems you want to execute individual components of the pipeline.

<img src="/img/dev/simple-pipeline.svg" alt="Simple DataSQRL pipeline topology" width="500"/>

The figure above shows an example pipeline topology that consists of a stream engine, database engine, and API server. The stream engine ingests the imported data, processes it, and writes the results to the database. The API server translates incoming requests into database queries and assembles the response from the returned query results.

The pipeline topology and engines are configured in the [package configuration](../package-config). The DataSQRL command looks for a `package.json` configuration file in the directory where it is executed. Alternatively, the package configuration file can be provided as an argument via the `-c` option. Check out the [command line reference](../command) for all command line options.

If no package configuration file is provided or found, DataSQRL generates a default package configuration with the example pipeline topology shown above and the following engines:

* [Apache Flink](../engines/flink) as the stream engine
* [Postgres](../engines/postgres) as the database engine
* [Vertx](../engines/vertx) as the API server

The package configuration contains additional compiler options and declares the dependencies of a script. Read more about [the package configuration](../package-config) to learn how to configure your build.

## Run

To run a SQRL script locally, execute the command:

```bash
docker run -p 8888:8888 -v $PWD:/build datasqrl/datasqrl-cmd run  myscript.sqrl myapischema.graphqls
```

This command compiles the SQRL script, starts the configured engines, and deploys the produced deployments artifacts of the compiled data pipeline on the engines to run the entire pipeline locally.

The `run` command accepts the same arguments and options as the `compile` command discussed above. In particular, it configures the engines based on the [package configuration](../package-config). Review the [command-line documentation] for additional options of the `run` command.

The run command starts the API server which listens on port `8888`. The `-p` option of the docker command maps the port. <br />
You can now access the API and execute queries against it to test your script and the compiled data pipeline. See the [API access documentation](../../api/overview#query) for more details.

Use the keystroke `CTRL-C` to stop the running pipeline. This will stop all engines.

## Debug

To debug a SQRL script, run it with the `-d` flag:

```bash
docker run -p 8888:8888 -v $PWD:/build datasqrl/datasqrl-cmd run -d  myscript.sqrl myapischema.graphqls
```

In debug mode, the stream engine exports a change log of each computed table to the configured [debug sink](../package-config#debug) which is the [print sink](../../sources/system/print) by default.

## Deploy

When you finished development and are ready to deploy your SQRL script, check out the [deployment options](../deploy/overview).

<!--
## Publish

To reuse your SQRL script in other projects, you can publish it to the [repository](../respository).

-->

