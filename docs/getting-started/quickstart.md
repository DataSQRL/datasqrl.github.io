---
title: "Quickstart Tutorial"
---

# DataSQRL Quickstart in 5 Minutes

<img src="/img/getting-started/squirrel_computer.jpeg" alt="Metrics Monitoring Quickstart >|" width="35%"/>

We are going to build a metrics monitoring service with DataSQRL in 5 minutes. Tik tok, let's go!

## Create Script

First, we are going to define the data processing for our monitoring service using SQL.

:::info

If you are unfamiliar with SQL, we recommend you read our [SQL Primer](/docs/reference/sqrl/sql-primer) first.

:::

In the terminal or command line, create an empty folder for the SQL script:

```bash
> mkdir metrics; cd metrics
```

Then create a new file called `metrics.sqrl` and copy-paste the following SQL code:

```sql title=metrics.sqrl
IMPORT datasqrl.example.sensors.SensorReading; -- Import metrics
IMPORT time.endOfSecond;  -- Import time function
/* Aggregate sensor readings to second */
SecReading := SELECT sensorid, endOfSecond(time) as timeSec,
                     avg(temperature) as temp 
              FROM SensorReading GROUP BY sensorid, timeSec;
/* Get max temperature in last minute per sensor */
SensorMaxTemp := SELECT sensorid, max(temp) as maxTemp
                 FROM SecReading
                 WHERE timeSec >= now() - INTERVAL 1 MINUTE
                 GROUP BY sensorid;
```

DataSQRL's flavor of SQL is called "SQRL", has a more concise syntax, and allows explicit data and function imports.

In the script, we import the sensor data we are monitoring and a time function we use for aggregation.

We define the `SecReading` table that aggregates all sensor metrics within one second to smooth our temperature readings. 
We define another table `SensorMaxTemp` which computes the maximum temperature in the last minute for each sensor.

## Run Script {#run}

DataSQRL compiles our SQRL script into an integrated microservice with the following command:


```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl
```

:::note

To run this command you need to have [Docker](https://docs.docker.com/get-docker/) installed on your machine and running. The first time you run this command takes an eternity to download. Make sure you are using docker-compose V2.

:::

To run the microservice, execute:

```bash
(cd build/deploy; docker compose up)
```

This will launch all components of the microservice to ingest, process, store, and serve the data through an API.

## Query API {#query}

Open your favorite browser and navigate to [`http://localhost:8888//graphiql/`](http://localhost:8888//graphiql/) to access GraphiQL - a popular GraphQL IDE. Write GraphQL queries in the left-hand panel. For example, copy the following query:

```graphql
{
SensorMaxTemp (sensorid: 1) {
    maxTemp
}
}
```

When you hit the "run" button you get the maximum temperature for the sensor with id `1` in the last minute.

And there you have it: a running data microservice that ingests metrics, aggregates them, and exposes the results through a GraphQL API which you can call in your applications.

## Customize API

Got a little more time? Let's customize the GraphQL API and add a metrics ingestion endpoint.

By default, DataSQRL generates a GraphQL schema for us based on the tables we define in the SQRL script. That's great for rapid prototyping, but eventually we want to customize the API and limit data access.

To save us time, we are going to start with the GraphQL API that DataSQRL generates for us by running this command (to terminate the running DataSQRL microservice, hit `CTRL-C`):

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl -a graphql
```

There is now a file called `schema.graphqls` in the same folder as our script. Rename it to `metricsapi.graphqls` and take a look.
Notice, how each table defined in our SQRL script maps to a query endpoint in the API and an associated result type. The query endpoints accept arguments for each column of the table to filter the results by column values.

We are going to remove most of those arguments to only support querying by `sensorid`. We will also remove the `SensorReading` query endpoint and result type to only expose the smoothed-out sensor readings from the `SecReading` table.

In the `metricsapi.graphqls` file, remove the `SensorReading` type and replace the query definition with the following:

```graphql
type Query {
  SecReading(sensorid: Int!): [SecReading!]
  SensorMaxTemp(sensorid: Int): [SensorMaxTemp!]
}
```

Note, that we made `sensorid` a required argument for the `SecReading` query endpoint.

Now, run the compiler with the GraphQL schema we just created and then launch the updated microservice:

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl metricsapi.graphqls;
(cd build/deploy; docker compose up)
```

When you refresh GraphiQL in the browser, you see that the API is simpler and only exposes the data for our use case.

## Ingest Metrics

So far, we have ingested metrics data from an external source imported from the [DataSQRL repository](http://dev.datasqrl.com). The data source is static which is convenient for whipping up an example data service, but we want our microservice to provide a metrics ingestion endpoint.

No problem, let's add it to our GraphQL schema by appending the following mutation to the `metricsapi.graphqls` file we created above

```graphql title=metricsapi.graphqls
type Mutation {
  AddReading(metric: SensorReading!): CreatedReading
}

input SensorReading {
  sensorid: Int!
  temperature: Float!
}

type CreatedReading {
  _source_time: String!
  sensorid: Int!
}
```

To use the data created by this mutation in our SQRL script, we have to import it. Replace the first two line of the `metrics.sqrl` script with:

```sql
IMPORT metricsapi.AddReading AS SensorReading;
IMPORT time.endOfSecond;
SensorReading.time := _source_time;
```

We are now using data ingested through the API mutation endpoint instead of the static example data. And for the timestamp on the metrics, we are using the special column `_source_time` which captures the time data was ingested through the API.

Terminate the running service, run the compiler again, and re-launch the microservice. In GraphiQL, run the following mutation to add a temperature reading:

```graphql
[TODO: add!]
```

and query it using the following query:

```graphql
[TODO: add!]
```

Voila, we just built a fully-functioning monitoring service that ingests, aggregates, and services metrics data. And the best part? The DataSQRL compiler ensures that it is efficient, fast, robust, and scalable.

## Next Steps {#next}

DataSQRL provides a number of features that make it easy, fast, and efficient to build event-driven microservices and streaming applications. Read the [DataSQRL tutorial](../intro/overview) to learn about all the features while building a Customer 360° application and recommendation engine. It'll be fun!