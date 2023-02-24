
# Package Configuration

The package configuration is the central configuration file used by the [DataSQRL command](command). The package configuration declares dependencies, configures the engines in the data pipeline, sets compiler options, and provides package information.

```json
{
  "dependencies" : {
    "datasqrl.seedshop" : {
      "version" : "0.1.0",
      "variant" : "dev"
    }
  },
  "engines" : [
    {
    "savepoint" : false,
    "engineName" : "flink"
    }, 
    {
    "dbURL" : "postgresql://localhost:5432/datasqrl",
    "driverName" : "org.postgresql.Driver",
    "dialect" : "postgres",
    "database" : "datasqrl",
    "systemType" : "jdbc",
    "engineName" : "jdbc"
    } ],
  "compiler" : {
    "errorSink" : "print.errors",
    "debug" : {
      "debugSink" : "print"
    }
  },
  "package": {
    "name": "datasqrl.tutorials.Quickstart",
    "version": "0.1.0",
    "variant": "dev",
    "description": "Quickstart tutorial for datasqrl.com"
  }
}
```

This is an example package configuration for our [Quickstart tutorial](../../getting-started/quickstart). Each section of the configuration file is described in more detail below.

## Dependencies {#dependency}

`dependencies` is a map of all packages that a script depends on. The name of the dependency is the key in the map and the associated value defines the dependency by `version` and `variant`.

```json
{
  "dependencies": {
    "datasqrl.seedshop": {
      "version": "0.1.0",
      "variant": "dev"
    }
  },
  ...
}
```

This example declares a single dependency `datasqrl.seedshop`. The DataSQRL packager retrieves the `datasqrl.seedshop` package from the repository for the given version "0.1.0" and "dev" variant and makes it available for the compiler. The `variant` is optional and defaults to `default`.

Learn more about the [repository](repository) and how dependencies are retrieved.

## Engines {#engine}

`engines` is a list of engine configurations that the compiler uses to instantiate the engines in the data pipeline. The DataSQRL compiler produces an integrated data pipeline against those engines. DataSQRL expects that a stream and database engine is configured as shown in the example above.

When you use the [DataSQRL command](command) without specifying an engine, DataSQRL will instantiate default engines for you. Learn more about the [build process](build).

The engine configuration depends on each engine. [Look up the engine](engines/overview) for more information.

## Compiler {#compiler}

The `compiler` configuration contains options to control the behavior of the compiler.

| Field Name      | Description                                                                                                                                                   | Required? |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| errorSink       | Errors in the ingested input data are produced to the table sink defined by this export path. Defaults to `print.errors`                                      | No        |
| debug.debugSink | When debugging is enabled, change streams of all tables defined in the SQRL script are exported to the sink defined by this export path. Defaults to `print`. | No        |
| debug.tables    | Limits the exported change streams during debugging to the tables in this list, if the list is non-empty.                                                     | No        |


## Package Information {#information}

The `package` section of the configuration provides information about the package or script. The whole section can be omitted when compiling or running a script. It is required when [publishing](command#publish) a package to the repository.

```json
{
  "package": {
    "name": "datasqrl.tutorials.Quickstart",
    "version": "0.1.0",
    "variant": "dev",
    "description": "Quickstart tutorial for datasqrl.com",
    "homepage": "https://www.datasqrl.com/docs/getting-started/quickstart"
  }
}
```

| Field Name    | Description                                                                                                                                                                   | Required? |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| name          | Name of the package. The package name should start with the name of the individual or organization that provides the package.                                                 | Yes       |
| version       | The version of the package. We recommend to use [semantic versioning](https://semver.org/).                                                                                   | Yes       |
| variant       | The variant of the package if multiple variants are available. Defaults to `default`.                                                                                         | No        |
| latest        | If this is the latest version of this package. DataSQRL uses the latest version when looking up [missing packages on import](../sqrl/import#dependency). Defaults to `false`. | No        |
| description   | A description of the package.                                                                                                                                                 | No        |
| license       | The license used by this package.                                                                                                                                             | No        |
| documentation | Link that points to documentation for this package                                                                                                                            | No        |
| homepage      | Link that points to the homepage for this package                                                                                                                             | No        |