---
title: "Vertx"
---

# Vertx Server Engine

[Vert.x](https://vertx.io/) is a lightweight and flexible open-source framework for building reactive, event-driven applications in Java and other JVM languages. It provides a comprehensive toolkit for developing scalable and high-performance networked applications that can handle a large number of concurrent connections. The framework's key features include a non-blocking API that allows for efficient use of resources, a modular architecture that enables easy integration with other libraries, and a distributed event bus for communication between components.

Vert.x currently supports [GraphQL APIs](../../../api/graphql/query).

## Configure

The Vertx server engine is configured as an engine in the [package configuration](../../package-config#engine) with the following configuration options.

| Field Name | Description                                                                                                                                                     | Required? |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| name       | `vertx` or `aws-lambda-native` string literal                                                                                                                   | Yes       |
| port       | Port where the server listens for API requests. `8888` by default. This setting is ignored when running in a docker container - use docker port mapping instead | No        |

When using the name `vertx`, DataSQRL compiles a standalone server instance. When using the name `aws-lambda-native`, DataSQRL compiles a native executable to run serverless on AWS lambda.

When running DataSQRL in standalone mode, the two options are equivalent. The difference is only meaningful when you deploy the engines separately.

## Deploy

### Deployment Artifacts

The DataSQRL compiler generates a Vertx server model that maps the API endpoints onto execution plans for fetching and assembling the requested data. The server model is generated in the file `build/deploy/server-model.json`. In addition, DataSQRL generates a server configuration file for connecting to the database.

### Build Executable

To build an optimized executable for the server, invoke the docker image that matches the name of the configured server in the engine configuration.

```bash
docker run -it --rm -v $PWD/build:/build datasqrl/engine-vertx
```

To build a standalone server executable. This generates a `vertex-server.jar` executable jar in the `build/deploy/` directory.

```bash
docker run -it --rm -v $PWD/build:/build datasqrl/aws-lambda-native
```

To build a native jar for the server that runs on AWS lambda.

### Deploy Executable

You can run the standalone Vertx executable jar with the associated model and configuration files on any machine, cloud instance, or suitable docker image.

Take a look at the [docker documentation](../../deploy/docker) for using docker to automate the setup of the Vertx server with the standalone executable jar.

You can upload the native AWS lambda jar to AWS lambda for serverless execution.