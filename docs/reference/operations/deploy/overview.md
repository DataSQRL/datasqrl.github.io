---
title: "Deploy"
---

# Deploying DataSQRL Projects

To deploy your DataSQRL project, the first step is to compile the deployment artifacts:

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls
```

The compiler populates the `build/` directory with all the build artifacts needed to compile the data service. Inside the build directory is the `deploy/` directory that contains all the deployment artifacts for the individual engines configured in the [package configuration](../../package-config). If no package configuration is provided, DataSQRL uses the default engines.

You can either deploy DataSQRL projects with docker or deploy each engine separately. 
Using docker is the easiest deployment option.
Deploying each engine separately gives you more flexibility and allows you to deploy on existing infrastructure or use managed cloud services.

## Docker {#docker}

To deploy a SQRL script and API specification with docker, run `docker-compose up` in the `build/deploy` folder:

```bash
(cd build/deploy; docker compose up)
```

Docker-compose uses the `docker-compose.yml` template in the `deploy` folder which you can modify to your needs.


## Individually

Deploying each component of the data service independently gives you complete control over how and where your data service is deployed.

In this deployment mode, DataSQRL compiles deployment artifacts for each engine configured in `engines` section of the [package configuration](../../package-config) which you can then deploy in a way that works for your infrastructure and deployment requirements.

<!--

### Build Executables

Second, we build optimized executables for each engine. This build step takes the deployment artifacts compiled by DataSQRL and optimizes them for the configured execution engine to ensure that the executable is lightweight and free of DataSQRL dependencies.

For this reason, the executables are build in separate docker containers via commands like:

```bash
docker run -it --rm -v $PWD/build:/build datasqrl/engine-{ENGINE_NAME}
```

where `{ENGINE_NAME}` is the name of the engines in your data service. Refer to the [documentation for each engine](../../engines/overview) to learn how to build optimized executables for a particular engine.

### Deploy Executables
-->

The deployment artifacts can be found in the `build/deploy` folder. How to deploy them individually depends on the engines that you are using for your data service.

Check the [engine documentation](../../engines/overview) for a particular engine for more information on how to deploy the executables on existing data infrastructure (an existing Flink cluster, database cluster, etc) or managed service.