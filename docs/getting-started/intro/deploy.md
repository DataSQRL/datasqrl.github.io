---
title: "Deploy Data Layer"
---

# Deploying the Data Layer

You've gone through the [introductory tutorial](../overview) and seen DataSQRL compile SQRL scripts and API specifications into integrated data layers that ingest, process, and serve data through an API.

Now we are going to take a closer look at **how** DataSQRL builds those data layers in order to deploy them.

So far, we have used the DataSQRL `run` command to run our SQRL scripts. The `run` command is great for developing and testing our SQRL scripts because it compiles, builds, and deploys data layers in a single process. To deploy SQRL scripts into production, we want more control over how the data layer gets deployed. And if you are using DataSQRL for the first time, you probably want to know exactly how the sausage gets made.

Let's dive right in and peak behind the curtain of DataSQRL's compilation process.

<img src="/img/reference/compilation_simplified.svg" alt="DataSQRL Compilation >" width="40%"/>

## How the Compiler Works

The DataSQRL compiler is configured through the `package.json` configuration file placed in the same directory as your SQRL script. If no configuration file is provided, DataSQRL will generate a default one for you.

Since we want to control exactly how our data layer gets deployed, we are going to create a custom compiler configuration for the [Quickstart example](../../quickstart). Create a file called `package.json` in the same folder as the `seedshop.sqrl` script with the following content:

```json
{
  "engines" : {
    "streams" : {
      "name" : "flink"
    },
    "database" : {
      "name" : "jdbc",
      "user" : "postgres",
      "password" : "postgres",
      "database" : "datasqrl",
      "dialect" : "postgres",
      "driver" : "org.postgresql.Driver",
      "url" : "jdbc:postgresql://database:5432/datasqrl"
    },
    "server" : {
      "name" : "vertx"
    }
  }
}
```

This configures the engines we want in our data layer: [Apache Flink](https://flink.apache.org/) (a distributed stream processor) as the stream processing engine, [Postgres](https://www.postgresql.org/) (a relational database) as the database engine, and [Vertx](https://vertx.io/) (a reactive JVM server) as the server engine.

DataSQRL defines a data layer as a stack of engines. Each engine processes data and passes it to the next engine in the stack. DataSQRL compiles your SQRL script into executables that run on each engine. 

Specifically, DataSQRL takes the table computations you define in your SQRL scripts and the query endpoints defined in the API specification and compiles them into one comprehensive data flow graph. The data flow graph abstractly represents how the data flows from the sources you import into your SQRL script to the query endpoints exposed by your API and all the processing that has to happen in between.

The "magic" of DataSQRL is the optimizer which maps the processing steps from the data flow graph to the engines in the data layer. The optimizer determines which computation should happen in which engine to produce the most efficient data layer. It then generates deployment artifacts that execute those computations in the respective engines and makes sure that the data flows smoothly into and between the engines.

Invoke DataSQRL to compile the `seedshop.sqrl` script into a data layer that consists of the engines we just configured:

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile seedshop.sqrl
```

The compiler populates the `build/` directory with all the build artifacts needed to compile the data layer. Inside the build directory is the `deploy/` directory that contains all the deployment artifacts for the individual engines we configured above.

## Build Executables

Finally, we are going to turn our deployment artifacts into executables that we can run on the configured engines. We build executables in a separate step to generate the most efficient executables for the targeted infrastructure.

To create a Flink executable for the stream processing, we run the following docker command in the directory of the `seedshop.sqrl` script:
```bash
docker run -it --rm -v $PWD/build:/build datasqrl/engine-flink
```

Similarly, this command creates a Vertx executable for the server:
```bash
docker run -it --rm -v $PWD/build:/build datasqrl/engine-vertx
```

Now, we can deploy our executables against the engines we configured for our data layer. For this tutorial, we are going to stand up the engines and deploy the executables with docker compose:

```yaml title:docker-compose.yml
version: "3.8"
services:
  database:
    image: postgres:14.6-alpine
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=datasqrl
    ports:
      - '5432:5432'
    volumes:
      - ./database-schema.sql:/docker-entrypoint-initdb.d/init-schema.sql

  flink-jobmanager:
    image: flink:1.16.1-scala_2.12-java11
    ports:
      - "8081:8081"
    command: jobmanager
    environment:
      - |
        FLINK_PROPERTIES=
        jobmanager.rpc.address: flink-jobmanager

  flink-taskmanager:
    image: flink:1.16.1-scala_2.12-java11
    depends_on:
      - flink-jobmanager
    command: taskmanager
    environment:
      - |
        FLINK_PROPERTIES=
        jobmanager.rpc.address: flink-jobmanager
        taskmanager.numberOfTaskSlots: 1

  servlet:
    image: eclipse-temurin:11
    command: java -jar vertx-server.jar
    depends_on:
      - database
    ports:
      - "8888:8888"
    volumes:
      - ./server-model.json:/model.json
      - ./server-config.json:/config.json
      - ./vertx-server.jar:/vertx-server.jar

  flink-job-submitter:
    image: curlimages/curl:7.80.0
    depends_on:
      - flink-jobmanager
      - database
    volumes:
      - ./flink-job.jar:/flink-job.jar
    entrypoint: /bin/sh -c
    command: >
      "while ! curl -s http://flink-jobmanager:8081/overview | grep -q '\"taskmanagers\":1'; do
        echo 'Waiting for Flink JobManager REST API...';
        sleep 5;
      done;
      echo 'Submitting Flink job...';
      curl -X POST -H 'Content-Type: application/x-java-archive' --data-binary '@/flink-job.jar' http://flink-jobmanager:8081/jars/upload;
      echo 'Job submitted.'"

volumes:
  database:
    driver: local
```

This docker compose template starts Postgres and a Flink cluster (i.e. the job manager and one task manager). It initializes the database with the schema produced by the compiler, executes the server, and submits the Flink jar for execution.

Save this file in the `build/deploy/` directory and execute the following command to run it all:

```bash
docker-compose up
```

This launches all the engines and deploys our executables. You are running a custom data layer compiled by DataSQRL. Adjust it for your own infrastructure, run it on Kubernetes, or use managed cloud services if you want to outsource operations. Take a look at the [deployment documentation](/docs/reference/operations/deploy/overview) for more information.

Enjoy building with data(sqrl)!

## Next Steps

* For more information, refer to the reference documentation for [building](/docs/reference/operations/build) and [deploying](/docs/reference/operations/deploy/overview) with DataSQRL as well as the [DataSQRL command documentation](/docs/reference/operations/command) for all the command line options.
* Check out all the options in the [package configuration](/docs/reference/operations/package-config).
* Take a look at [all the engines](/docs/reference/operations/engines/overview) that DataSQRL supports.
* The [DataSQRL optimizer](/docs/reference/operations/optimizer) uses a cost model to generate the most efficient data layer. You can use [provide hints](/docs/reference/operations/optimizer#hints) when the optimizer makes the wrong choice.