---
title: "Command Reference"
---

# DataSQRL Command Reference

You interact with DataSQRL through the DataSQRl command on your command line. The DataSQRL command compiles SQRL scripts, discovers data sources and sinks, and publishes packages to the repository.

:::info
We recommend that you run the DataSQRL command through docker and the following example commands use docker. This requires that you have [docker installed](https://docs.docker.com/get-docker/) and running on your local machine.
:::

## Common Options {#common}

All following commands accept these options: 

| Option/Flag Name   | Description   |
|--------------|---------------|
| `-c` or `--config` | Path to one or more [package configuration](../package-config) files. If multiple files are provided, the contents are merged into a single configuration file in the order listed. If this option is omitted, the `package.json` file in the current directory is used. If no such file exists, DataSQRL generates a default package configuration. |

The package configuration configures the compiler, data pipeline architecture, [engines](../engines/overview), and dependencies among other aspects. Review the [package configuration documentation](../package-config) for more information.

## Compile

The `compile` command compiles an SQRL script and optional API specification to a data pipeline. The deployment artifacts for the data pipeline are written to the target directory.

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls
```

The `compile` command takes the path to the SQRL script and API specification as first and second argument, respectively. The API specification is optional. If none is provided, DataSQRL generates it from the script. 

The `compile` command accepts these options:

| Option/Flag Name   | Description                                                                                                                                                                                                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `-a` or `--api`    | Generates API specification for the compiled script. <ul><li>Use option argument `graphql` to generate a GraphQL schema in the file `schema.graphqls`</li></ul> The API specification file is written into the current directory and overwrites any existing file with that name. |
| `-t` or `--target` | Writes the deployment artifiacts of the compiled data pipeline into the target directory. `deploy/` by default.                                                                                                                                                                    |

## Publish

The `publish` command publishes a local package to the repository so that it can be used as a [dependency](../package-config#dependency) in other SQRL scripts and projects.

The `publish` command is executed in the root directory of the package to be published. It archives all files in the package and submits the archive to the repository under the name, version, and variant of the package as configured in the package configuration. The command publishes to the local repository by default.

The `publish` command does not auto-generate a package configuration and expects the [package configuration](../package-config) in the local file `package.json` or configured via [option](#common). The package configuration must include the package information which specifies the name, version, and variant of the package. 

```bash
docker run --rm -v $PWD:/build datasqrl/cmd publish
```

The `publish` command supports the following options:

| Option/Flag Name | Description                                                                                                                                                                                                                                  |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--local`        | Publishes the package to the local repository. Publishing to the remote repository requires user credentials for authentication. Read more about [publishing to remote repository](../repository#publish-remote). |

Read the [repository documentation](../repository#publish) to learn more about publishing packages to the repository.
