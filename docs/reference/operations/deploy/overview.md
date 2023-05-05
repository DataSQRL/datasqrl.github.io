---
title: "Deploy"
---

# Deploying SQRL Projects

You can either deploy DataSQRL scripts in standalone mode or deploy each engine separately. Standalone mode is the easiest deployment option. Deploying each engine separately gives you greater control over the deployment, allows you to scale each engine independently with workload requirements, and is robust to failure. You also want to deploy each engine separate if you want to deploy on existing infrastructure or use managed cloud services.

## Standalone

To deploy a SQRL script and API specification in standalone mode, execute the `run` command:

```bash
docker run --rm -p 8888:8888 -v $PWD:/build datasqrl/cmd run  myscript.sqrl myapischema.graphqls
```

We recommend standalone deployment mode for development, testing, and simple production use cases that don't require scaling or robustness to failure.

See the [command documentation](../../command#run) for more information.


## Separate Engines

Deploying each component of the data pipeline independently gives you complete control over how and where your data pipeline is deployed.

In this deployment mode, DataSQRL compiles deployment artifacts for each pipeline stage configured in `engines` section of the [package configuration](../../package-config) which you can then deploy in a way that works for your infrastructure and deployment requirements.

Deploying the entire data pipeline takes 3 steps:
1. Compile script
2. Generate executables for each engine
3. Deploy executables to each engine

### Compile Script

First, execute the `compile` command for the SQRL script and optional API specification:

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls
```

The compiler populates the `build/` directory with all the build artifacts needed to compile the data pipeline. Inside the build directory is the `deploy/` directory that contains all the deployment artifacts for the individual engines configured in the [package configuration](../../package-config).

### Build Executables

Second, we build optimized executables for each engine. This build step takes the deployment artifacts compiled by DataSQRL and optimizes them for the configured execution engine to ensure that the executable is lightweight and free of DataSQRL dependencies.

For this reason, the executables are build in separate docker containers via commands like:

```bash
docker run -it --rm -v $PWD/build:/build datasqrl/engine-{ENGINE_NAME}
```

where `{ENGINE_NAME}` is the name of the engines in your pipeline. Refer to the [documentation for each engine](../../engines/overview) to learn how to build optimized executables for a particular engine.

### Deploy Executables

Finally, deploy the executables for each engine. This step depends on the infrastructure you are deploying to:

* [**Docker**](../docker): Use docker to deploy the data pipeline.
* **Managed Services**: coming soon
* **Existing infrastructure**: Check the [engine documentation](../../engines/overview) on how to deploy the executables on existing data infrastructure (an existing Flink cluster, database cluster, etc).

Take a look at the [documentation for each engine](../../engines/overview) to learn more about deploying the engine executable.