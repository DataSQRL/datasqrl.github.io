# package.json
https://docs.npmjs.com/cli/v10/configuring-npm/package-json

# Package Configuration

## enabled engines

## ...

The package configuration is the central configuration file used by the [DataSQRL command](../command). The package configuration declares dependencies, configures the engines in the data pipeline, sets compiler options, and provides package information.

```json title="package.json"
{
  "dependencies" : {
    "datasqrl.seedshop" : {
      "version" : "0.1.0",
      "variant" : "dev"
    }
  },
  "engines" : {
    "streams" : {
      "name" : "flink"
    }, 
    "database" : {
      "name" : "jdbc",
      "url" : "postgresql://localhost:5432/datasqrl",
      "driver" : "org.postgresql.Driver",
      "dialect" : "postgres",
      "database" : "datasqrl"
    } 
  },
  "compiler" : {
    "errorSink" : "print.errors",
    "debugSink" : "print"
  },
  "package": {
    "name": "datasqrl.tutorials.Quickstart",
    "version": "0.1.0",
    "variant": "dev",
    "description": "Quickstart tutorial for datasqrl.com"
  }
}
```

This is an example package configuration for our [Quickstart tutorial](../../../getting-started/quickstart). Each section of the configuration file is described in more detail below.

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

Learn more about the [repository](../repository) and how dependencies are retrieved.

## Engines {#engine}

`engines` is a map of engine configurations by engine name that the compiler uses to instantiate the engines in the data pipeline. The DataSQRL compiler produces an integrated data pipeline against those engines. DataSQRL expects that a stream and database engine is configured as shown in the example above.

When you use the [DataSQRL command](../command) without specifying an engine, DataSQRL will instantiate default engines for you. Learn more about the [build process](../build).

The engine configuration depends on each engine. [Look up the engine](../engines/overview) for more information.

## Compiler {#compiler}

The `compiler` configuration contains options to control the behavior of the compiler.

| Field Name  | Description                                                                                                                                                   | Required? |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| errorSink   | Errors in the ingested input data are produced to the table sink defined by this export path. Defaults to `print.errors`                                      | No        |
| debugSink   | When debugging is enabled, change streams of all tables defined in the SQRL script are exported to the sink defined by this export path. Defaults to `print`. | No        |
| debugTables | Limits the exported change streams during debugging to the tables in this list, if the list is non-empty.                                                     | No        |


## Package Information {#information}

The `package` section of the configuration provides information about the package or script. The whole section can be omitted when compiling or running a script. It is required when [publishing](../command#publish) a package to the repository.

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
| latest        | If this is the latest version of this package. DataSQRL uses the latest version when looking up [missing packages on import](../../sqrl/import#dependency). Defaults to `false`. | No        |
| description   | A description of the package.                                                                                                                                                 | No        |
| license       | The license used by this package.                                                                                                                                             | No        |
| documentation | Link that points to documentation for this package                                                                                                                            | No        |
| homepage      | Link that points to the homepage for this package                                                                                                                             | No        |


### Add Package as Dependency {#remote}

Package dependencies can also be explicitly defined in the [package configuration](../../operations/package-config) for your SQRL script. Explicit package dependencies are encouraged as projects head to production or for projects with many team members, since they make it obvious how packages are resolved at compile time.

To add a data source or sink from a repository, you declare the package as a dependency in the . The DataSQRl package manager fetches all dependencies from the [repository](../../operations/repository) and places them in the build directory at compile time.

To declare a dependency, create or open the `package.json` configuration file in the root of your SQRL project.
Add a dependency to the list of dependencies:
```json
{
  "dependencies":
  {
    "datasqrl.tutorials.seedshop": { "version":  "1.0.0", "variant":  "dev" }
  }
}
```

A dependency is defined by the package name as the key, the version of the dependency, and an optional variant. This dependency makes it explicit that we are importing version `1.0.0` of the `dev` variant of the `datasqrl.tutorials.seedshop` package.

A data source/sink package can have multiple variants for a given version. A variant might be a subset, static snapshot, or point to an alternate data system for development and testing.

We can also rename dependencies which makes it easy to dynamically swap out dependencies for different environments and testing.
```json
{
  "dependencies":
  {
    "datasqrl.tutorials.seedshop": { "name": "local-seedshop", "version":  "1.0.0", "variant":  "dev" }
  }
}
```
The package path `datasqrl.tutorials.seedshop` is now pointing to the local directory `local-seedshop` and source and sink configuration files will be loaded from there at compile time.

We recommend adding data sources and sinks as dependencies whenever the source/sink is independent of the SQRL script. Dependencies make it easier to manage sources and sinks as they or the SQRL script evolve over time.



<!-- ## Publish Package to Repository {#publish}-->

When you publish a package to the repository, you can declare it as a dependency in any of your SQRL projects and reuse it.

To publish a package, follow these steps:

<!-- ### Prepare Package Configuration -->

Create the [package configuration](../package-config) file `package.json` in the root directory of the package if it does not already exist.

The configuration file specifies the package information and should contain at least the following information:

```json title="package.json"
{
  "package":
  {
    "name": "yourOrganization.yourPackage",
    "version": "1.0.0",
    "variant": "dev"
  },
  ... other package content, if any
}
```

The `name` of the package is the full path that identifies the package. We recommend that you use a personal or organization name as the first component of the package name path to make it easy to identify who authored the package.

:::info
To publish a package to the remote repository, the first component of the package name path has to match your DataSQRL account name or the name of an organization you are part of.
:::

The `version` of a package can be any string. We recommend that you use [semantic versioning](https://semver.org/) for the version string, i.e. the pattern `majorVersion.minorVersion.pathVersion`.

DataSQRL supports multiple variants of the same package and version by modifying the `variant` name. If the `variant` is omitted or empty, it defaults to `default`. Specifying a variant is optional.

If you have multiple variants of the same package, we recommend that you use the following naming convention:

* `dev` for packages that are used for development or testing only.
* `test` for packages that are used for testing only.
* `prod` for packages that are used for production deployments.

The `publish` command does not auto-generate a package configuration and expects the [package configuration](../package-config) in the local file `package.json` or configured via [option](#common). The package configuration must include the package information which specifies the name, version, and variant of the package.