---
title: "Command Reference"
---

# DataSQRL Command Reference

You interact with DataSQRL through the DataSQRl command on your command line. The DataSQRL command compiles and runs SQRL scripts, discovers data sources and sinks, and publishes packages to the repository.

:::info
We recommend that you run the DataSQRL command through docker and the following example commands use docker. This requires that you have [docker installed](https://docs.docker.com/get-docker/) and running on your local machine.
:::

## Common Options {#common}

All following commands accept these options: 

| Option/Flag Name   | Description   |
|--------------|---------------|
| `-c` or `--config` | Path to one or more [package configuration](../package-config) files. If multiple files are provided, the contents are merged into a single configuration file in the order listed. If this option is omitted, the `package.json` file in the current directory is used. If no such file exists, DataSQRL generates a default package configuration. |

The package configuration configures the compiler, data service architecture, [engines](../engines/overview), and dependencies among other aspects. Review the [package configuration documentation](../package-config) for more information.

## Compile

The `compile` command compiles an SQRL script and optional API specification to a data service. The deployment artifacts for the data service are written to the target directory.

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls
```

The `compile` command takes the path to the SQRL script and API specification as first and second argument, respectively. The API specification is optional. If none is provided, DataSQRL generates it from the script. 

The `compile` command accepts these options:

| Option/Flag Name   | Description                                                                                                                                                                                                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `-a` or `--api`    | Generates API specification for the compiled script. <ul><li>Use option argument `graphql` to generate a GraphQL schema in the file `schema.graphqls`</li></ul> The API specification file is written into the current directory and overwrites any existing file with that name. |
| `-t` or `--target` | Writes the deployment artifiacts of the compiled data service into the target directory. `deploy/` by default.                                                                                                                                                                   |
| `--nolookup`       | Disables lookup of packages in the repository that cannot be resolved locally or as dependencies.                                                                                                                                                                                 |


## Run

The `run` command compiles an SQRL script and optional API specification to a data service and then executes the layer locally. That means, the `run` command starts all engines in the data service and deploys the compiled artifacts on them. In particular, it starts the API server which can be accessed and queried on localhost with the configured port.

```bash
docker run --rm -p 8888:8888 -v $PWD:/build datasqrl/cmd run  myscript.sqrl myapischema.graphqls
```

The `run` command takes the same arguments and options as the `compile` command. It also accepts these additional options:

| Option/Flag Name   | Description   |
|--------------|---------------|
| `-p` or `--port` | Generates API specification for the compiled script. <ul><li>Use option argument `graphql` to generate a GraphQL schema in the file `schema.graphqls`</li></ul> The API specification file is written into the current directory and overwrites any existing file with that name. |
| `-d` or `--debug`| Writes the deployment artifiacts of the compiled data service into the target directory. `deploy/` by default. |

## Discover

The `discover` command creates new data source and sink packages by inspecting a configured data system.

```bash
docker run --rm -v $PWD:/build datasqrl/cmd discover system.discovery.table.json
```

The `discover` command takes the [data system configuration file](../../sources/discovery#datasystem) as an argument and supports the following options:

| Option/Flag Name   | Description   |
|--------------|---------------|
| `-o` or `--output` | Data discovery writes the package configuration files to this directory. Defaults to the current directory.  |
| `-l` or `--limit`| The maximum time (in seconds) for data analysis. Data discovery terminates data analysis after this amount of time. Defaults to 3600 seconds (1 hour).  |

Read the [data discovery documentation](../../sources/discovery) to learn more about adding data sources and sinks for DataSQRL.

## Publish

The `publish` command publishes a local package to the repository so that it can be used as a [dependency](../package-config#dependency) in other SQRL scripts and projects.

The `publish` command is executed in the root directory of the package to be published. It archives all files in the package and submits the archive to the repository under the name, version, and variant of the package as configured in the package configuration. The command publishes to the local repository by default.

The `publish` command does not auto-generate a package configuration and expects the [package configuration](../package-config) in the local file `package.json` or configured via [option](#common). The package configuration must include the package information which specifies the name, version, and variant of the package. 

```bash
docker run --rm -v $PWD:/build datasqrl/cmd publish
```

The `publish` command supports the following options:

| Option/Flag Name   | Description   |
|--------------|---------------|
| `--remote` | Publishes the package to the remote repository in addition to the local one. Publishing to the remote repository requires user credentials for authentication. Read more about [publishing to remote repository](../repository#publish-remote). |

Read the [repository documentation](../repository#publish) to learn more about publishing packages to the repository.

<!--
## Serve

## Populate

-->