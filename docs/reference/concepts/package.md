[//]: # (# Package)

[//]: # ()
[//]: # (A package is a grouping of files that the [DataSQRL compiler]&#40;/docs/getting-started/concepts/datasqrl&#41; can load at compile time to resolve external dependencies of an SQRL script. A package is represented by a directory on the local filesystem or a repository entry. DataSQRL locates the package directory relative to the [build path]&#40;../../operations/build&#41; for local directories. DataSQRL uses the full package name to locate packages in the repository.)

[//]: # ()
[//]: # (For example, the [import]&#40;../../sqrl/import&#41; statement `IMPORT datasqrl.seedshop.Orders` is resolved by loading the `Orders` source table from the package `datasqrl.seedshop`. DataSQRL locates the package `datasqrl.seedshop` as the sub-directory `datasqrl/seedshop/` in the build directory or as via the identifier `datasqrl.seedshop` in the repository.)

[//]: # ()
[//]: # (DataSQRL tries loading packages from the local filesystem before resolving them against the repository.)

[//]: # ()
[//]: # (Similarly, `IMPORT time.startOfMonth` is resolved by loading the function `startOfMonth` from the package `time`. )

[//]: # ()
[//]: # (You can define packages as dependencies in the [configuration]&#40;../../operations/package-config&#41; of your SQRL project. This allows you to specify a specific version and variant for a package. It also allows you to rename the package for import.)

[//]: # ()
[//]: # (DataSQRL uses a configurable and extensible set of loaders to dynamically resolve packages at compile time.)

[//]: # ()
[//]: # (## Local Package)

[//]: # ()
[//]: # (A local package is a directory on the path where the DataSQRL compiler is invoked. The directory in which the DataSQRL compiler is executed is the root directory which represents the **root package**. All local packages are resolved relative to the root directory.)

[//]: # ()
[//]: # (## Remote Package)

[//]: # ()
[//]: # (A remote package is a dependency defined in the package manifest that is downloaded by the package manager from a repository and unpacked in the build directory.)

[//]: # ()
[//]: # (## Internal Package)

[//]: # ()
[//]: # (An internal package is pre-loaded by the DataSQRL compiler and always available. It does not map to a directory in the local filesystem.)

[//]: # ()
[//]: # (For example, all [standard library functions]&#40;/docs/category/functions&#41; are contained in internal packages. `time` is an internal package that contains the [standard time functions]&#40;../../sqrl/functions/time&#41; DataSQRL supports.)