import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# CLI Reference
<!-- -->
DataSQRL is managed through the `datasqrl` command line interface. This tool enables you to compile SQRL scripts, manage data sources and sinks, and handle package publications.


<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
brew tap datasqrl/sqrl
brew install sqrl-cli
```

:::note
Check that you're on the current version of DataSQRL by running `sqrl --version`
To update an existing installation:

```bash
brew upgrade sqrl-cli
```
:::

</TabItem>
<TabItem value="Docker">
Always pull the latest Docker image to ensure you have the most recent updates:

```bash
docker pull datasqrl/cmd:latest
```

</TabItem>
</Tabs>

#### Global Options
All commands support the following global options:

|Option/Flag Name	|Description|
|--------------|---------------|
|-c or --config|	Specifies the path to one or more package configuration files. Contents of multiple files are merged in the specified order. Defaults to package.json in the current directory, generating a default configuration if none exists.|

#### Compile Command
The compile command processes an SQRL script and, optionally, an API specification, into a deployable data pipeline. The outputs are saved in the specified target directory.


<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl compile myscript.sqrl myapischema.graphqls
```

</TabItem>
<TabItem value="Docker">

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls
```
</TabItem>
</Tabs>
1. sqrl compile
2. docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls

|Option/Flag Name|	Description|
|--------------|---------------|
|-a or --api	|Generates an API specification (GraphQL schema) in the file schema.graphqls. Overwrites any existing file with the same name.|
|-t or --target	|Directory to write deployment artifacts, defaults to build/deploy.|
|--profile|	Selects a specific set of configuration values that override the default package settings.|


The command compiles the script and API specification into an integrated data product. The command creates a `build` with all the build artifacts that are used during the compilation and build process (e.g. dependencies). The command writes the deployment artifacts for the compiled data product into the `build/deploy` directory. Read more about deployment artifacts in the deployment documentation.

#### Publish Command
Publishes a local package to the repository. It is executed from the root directory of the package, archiving all contents and submitting them under the specified package configuration.


<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl publish --local
```

</TabItem>
<TabItem value="Docker">

```bash
docker run --rm -v $PWD:/build datasqrl/cmd publish --local
```
</TabItem>
</Tabs>

|Option/Flag Name|	Description|
|--------------|---------------|
|--local	|Publishes the package to the local repository only.|

##### How repository resolution works

A repository contains DataSQRL packages. When compiling an SQRL script, the DataSQRL compiler retrieves dependencies declared in the [package configuration](/docs/reference/sqrl/datasqrl-spec) and unpacks them in the build directory.

The remote DataSQRL directory is hosted at [https://dev.datasqrl.com](https://dev.datasqrl.com). Packages in the remote repository can be retrieved from any machine running the DataSQRL compiler with access to the internet.

DataSQRL keeps a local repository in the hidden `~/.datasqrl/` directory in the user's home directory. The local repository is only accessible from the local machine. It caches packages downloaded from the remote repository and contains packages that are only published locally.

#### Test Command
The test command will run queries annotationed with the 'test' hint.

<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl test
```

</TabItem>
<TabItem value="Docker">

```bash
docker run --rm -v $PWD:/build datasqrl/cmd test
```
</TabItem>
</Tabs>

Options for the Test Command:

|Option/Flag Name|	Description|
|--------------|---------------|
|-s or --snapshot|	Path to the snapshot files.|
|--tests|	Path to test query files.|

More information on specific test configurations and command examples will be provided here.

#### Login Command

Authenticates a user against the repository.

<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl login
```

</TabItem>
<TabItem value="Docker">

```bash
docker run --rm -v $PWD:/build datasqrl/cmd login
```
</TabItem>
</Tabs>
