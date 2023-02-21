---
title: "Deploy"
---

# Deploying SQRL Projects

You can either deploy DataSQRL scripts in standalone mode or deploy each engine separately. Standalone mode is the easiest deployment option. Deploying each engine separately gives you greater control over the deployment, allows you to scale each engine independently with workload requirements, and is robust to failure.

## Standalone

To deploy a SQRL script and API specification in standalone mode, execute the `run` command:

```bash
docker run -p 8888:8888 -v $PWD:/build datasqrl/datasqrl-cmd run  myscript.sqrl myapischema.graphqls
```

See the [command documentation](../command#run) for more information.


## Separate Engines

To deploy each engine separately, execute the `compile` command for the SQRL script and optional API specification:

```bash
docker run -v $PWD:/build datasqrl/datasqrl-cmd compile myscript.sqrl myapischema.graphqls
```

The command writes the deployment artifacts into the `deploy/` directory. See the `compile` [command documentation](../command#compile) for more information.

Second, deploy the artifacts for each engine starting with the database engine. How to deploy the artifacts depends on each engine in your compiled data pipeline. Take a look at engine-specific deployment steps in the [engine documentation](../engines/overview).