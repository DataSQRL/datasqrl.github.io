---
title: "Docker"
---

# Deploying with Docker

Use [this docker compose](https://github.com/DataSQRL/sqrl/blob/main/docker-compose.yml) template to run all the engines in a data service and deploy the engine executables.

Copy the template into the `build/deploy/` directory created by the DataSQRL compiler, modify it to suit your needs and run it with:

```bash
docker-compose up
```

This docker compose template starts Postgres and a Flink cluster (i.e. the job manager and one task manager). It initializes the database with the schema produced by the compiler, executes the server, and submits the Flink jar for execution.

:::info
This page is just a stub and work in progress
:::