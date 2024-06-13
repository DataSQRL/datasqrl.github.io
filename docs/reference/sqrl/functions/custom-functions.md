
# Implement Custom Functions

A custom function package contains function definitions and implementations that the DataSQRL compiler can import into a script.

:::info
Before implementing a custom function package, check if the function you need is part of the [system function library](/docs/category/functions) or can be found in the [repository](https://dev.datasqrl.com).
:::

To create a new function package, first create a sub-folder `myFunctionPackage` in the directory of the script where you want to import the functions. 

Then follow the instructions below for implementing a function package in the language of your choice.

Note, that function packages can be [published to the repository](../../../operations/repository#publish), so you can reuse your functions across scripts.

## Functions in Java
SQRL supports any Flink user-defined function that extends the ScalarFunction or AggregateFunction class. DataSQRL discovers these functions by inspecting any jar file that exist in any sub-folder. The sub-folder will translate to the import path for your function.

Note, DataSQRL require [ServiceLoader](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html) entries for either ScalarFunction or AggregateFunction classes. Google's [AutoService](https://chromium.googlesource.com/external/github.com/google/auto/+/auto-value-1.5.3/service/README.md) package can also be used to help automate this process.

A full example can be found in the [UDF DataSQRL examples directory](https://github.com/DataSQRL/sqrl/tree/main/sqrl-examples/udf).

## Functions in JavaScript

coming soon

## Functions in Python

coming soon
