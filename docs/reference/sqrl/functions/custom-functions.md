
# Implement Custom Functions

A custom function package contains function definitions and implementations that the DataSQRL compiler can import into a script.

:::info
Before implementing a custom function package, check if the function you need is part of the [system function library](/docs/category/sqrl-functions) or can be found in the [repository](https://dev.datasqrl.com).
:::

To create a new function package, first create a sub-folder `myFunctionPackage` in the directory of the script where you want to import the functions. 

Then follow the instructions below for implementing a function package in the language of your choice.

## Functions in Java

See the java user defined function example in our [examples](https://github.com/DataSQRL/datasqrl-examples/tree/main/user-defined-function).

## Upload User-Defined Functions to the Repository

If you want to upload your custom UDF to the Datasqrl repository, you need to take some extra steps.

In the same folder where the JAR file resides (e.g., `myudf-0.1.0-SNAPSHOT.jar`), create the following files.

### Create `package.json`

The `package.json` file defines the package metadata, such as name, version, etc. A minimal `package.json` looks like this:

```
{
  "version": "1",
  "package": {
    "name": "datasqrl.examples.udf",
    "version": "0.5.5",
    "latest": true
  }
}
```

### Create Function Descriptors

For each UDF in the JAR, create a `<functionname>.function.json` descriptor. For example:

`myscalarfunction.function.json`:

```
{"language":"java","functionClass":"com.myudf.MyScalarFunction","jarPath":"datasqrl/examples/udf/myudf-0.1.0-SNAPSHOT.jar"}
```

### Publish the Package

Once you are done, log in to your repository account with `sqrl login`, and issue `sqrl publish` from the folder where `package.json` resides.

### Test Your UDF

To test your UDF, change the import path in the example as follows:

```
IMPORT myudf.Entry;
IMPORT datasqrl.examples.udf.MyScalarFunction;

MyTable := SELECT val, MyScalarFunction(val, val) AS myFnc
           FROM Entry;
```
