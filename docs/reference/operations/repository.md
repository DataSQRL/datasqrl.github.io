---
title: "Repository"
---

# DataSQRL Repository

A repository contains DataSQRL packages. When compiling an SQRL script, the DataSQRL compiler retrieves dependencies declared in the [package configuration](../package-config#dependency) and unpacks them in the build directory. 

The remote DataSQRL directory is hosted at [https://dev.datasqrl.com](https://dev.datasqrl.com). Packages in the remote repository can be retrieved from any machine running the DataSQRL compiler with access to the internet.


DataSQRL keeps a local repository in the hidden `~/.datasqrl/` directory in the user's home directory. The local repository is only accessible from the local machine. It caches packages downloaded from the remote repository and contains packages that are only published locally.

## Publish Package to Repository {#publish}

When you publish a package to the repository, you can declare it as a dependency in any of your SQRL projects and reuse it. 

To publish a package, follow these steps:

### Prepare Package Configuration

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


### Publish to Local Repository {#publish-local}

Run the `publish` command in the root directory of your package to publish the package to the local repository:

```bash
docker run --rm -v $PWD:/build datasqrl/cmd publish --local
```

### Publish to Remote Repository {#publish-remote}

To make the package available anywhere, you can publish it to the remote DataSQRL repository.

:::info
Publishing to the remote DataSQRL repository is not yet supported. [Stay tuned](/community) while we implement this feature. 
:::

