# CLI Reference
<!-- -->
DataSQRL is managed through the `datasqrl` command line interface. This tool enables you to compile SQRL scripts, manage data sources and sinks, and handle package publications.

1. use the datasqrl brew
2. Use docker
   :::info
   We recommend that you run the DataSQRL command through docker and the following example commands use docker. This requires that you have [docker installed](https://docs.docker.com/get-docker/) and running on your local machine.
   :::

#### Global Options
All commands support the following global options:

|Option/Flag Name	|Description|
|--------------|---------------|
|-c or --config|	Specifies the path to one or more package configuration files. Contents of multiple files are merged in the specified order. Defaults to package.json in the current directory, generating a default configuration if none exists.|

#### Compile Command
The compile command processes an SQRL script and, optionally, an API specification, into a deployable data pipeline. The outputs are saved in the specified target directory.

1. sqrl compile
2. docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls

|Option/Flag Name|	Description|
|--------------|---------------|
|-a or --api	|Generates an API specification (GraphQL schema) in the file schema.graphqls. Overwrites any existing file with the same name.|
|-t or --target	|Directory to write deployment artifacts, defaults to build/deploy.|
|--profile|	Selects a specific set of configuration values that override the default package settings.|


The command compiles the script and API specification into an integrated data product. The command creates a `build` with all the build artifacts that are used during the compilation and build process (e.g. dependencies). The command writes the deployment artifacts for the compiled data product into the `build/deploy` directory. Read more about deployment artifacts in the [deployment documentation](../deploy/overview).

#### Publish Command
Publishes a local package to the repository. It is executed from the root directory of the package, archiving all contents and submitting them under the specified package configuration.


|Option/Flag Name|	Description|
|--------------|---------------|
|--local	|Publishes the package to the local repository only.|

#### Test Command
Details about how testing integrates all engines will be added here. The sqrl test command's functionality is discussed under this section.

1. sqrl test myscript.sqrl
2. docker run --rm datasqrl/cmd test myscript.sqrl

Options for the Test Command:

|Option/Flag Name|	Description|
|--------------|---------------|
|-s or --snapshot|	Path to the snapshot files.|
|--tests|	Path to test query files.|

More information on specific test configurations and command examples will be provided here.

#### Login Command

Authenticates a user against the repository.

1. sqrl login
2. docker run --rm datasqrl/cmd login

This command logs the user into the repository, facilitating operations that require authentication.

#### Publish

The `publish` command publishes a local package to the repository so that it can be used as a [dependency](../package-config#dependency) in other SQRL scripts and projects.

The `publish` command is executed in the root directory of the package to be published. It archives all files in the package and submits the archive to the repository under the name, version, and variant of the package as configured in the package configuration. The command publishes to the local repository by default.

```bash
docker run --rm -v $PWD:/build datasqrl/cmd publish
```

The `publish` command supports the following options:

| Option/Flag Name   | Description   |
|--------------|---------------|
| `--remote` | Publishes the package to the remote repository in addition to the local one. Publishing to the remote repository requires user credentials for authentication. Read more about [publishing to remote repository](../repository#publish-remote). |

Read the [repository documentation](../repository#publish) to learn more about publishing packages to the repository.

##### How repository resolution works

A repository contains DataSQRL packages. When compiling an SQRL script, the DataSQRL compiler retrieves dependencies declared in the [package configuration](../package-config#dependency) and unpacks them in the build directory.

The remote DataSQRL directory is hosted at [https://dev.datasqrl.com](https://dev.datasqrl.com). Packages in the remote repository can be retrieved from any machine running the DataSQRL compiler with access to the internet.

DataSQRL keeps a local repository in the hidden `~/.datasqrl/` directory in the user's home directory. The local repository is only accessible from the local machine. It caches packages downloaded from the remote repository and contains packages that are only published locally.

#### Profiles


#### Test
<!-- -->
Why testing includes all engines.
An overview of how `sqrl test` works.
