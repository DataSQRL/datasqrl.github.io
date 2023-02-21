# Package

A package is a grouping of files that the [DataSQRL compiler](/docs/getting-started/concepts/datasqrl) can load at compile time to resolve external dependencies of an [SQRL](/docs/getting-started/concepts/sqrl) script. A package is represented by a directory on the local filesystem. DataSQRL locates the package directory relative to the [build path](../operations/build).

For example, the [import](../sqrl/import) statement `IMPORT datasqrl.seedshop.Orders` is resolved by loading the `Orders` source table from the package `datasqrl.seedshop`. DataSQRL locates the package `datasqrl.seedshop` as the sub-directory `datasqrl/seedshop/` in the build directory.

Similarly, `IMPORT time.startOfMonth` is resolved by loading the function `startOfMonth` from the package `time`. 

DataSQRL uses a configurable and extensible set of loaders to dynamically resolve packages at compile time.

## Local Package

A local package is a directory on the path where the DataSQRL compiler is invoked. The directory in which the DataSQRL compiler is executed is the root directory which represents the **root package**. All local packages are resolved relative to the root directory.

## Remote Package

A remote package is a dependency defined in the package manifest that is downloaded by the package manager from a repository and unpacked in the build directory.

## Internal Package

An internal package is pre-loaded by the DataSQRL compiler and always available. It does not map to a directory in the local filesystem.

For example, all [standard library functions](/docs/category/functions) are contained in internal packages. For example, `time` is an internal package that contains the [standard time functions](../sqrl/functions/time) DataSQRL supports.