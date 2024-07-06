---
title: "Tutorial"
---

# DataSQRL Quickstart in 10 Minutes

<img src="/img/getting-started/squirrel_computer.jpeg" alt="Metrics Monitoring Quickstart >|" width="35%"/>

We are going to build a data product that analyzes sensor metrics in 10 minutes. Tik tok, let's go!

## Create Script

First, we are going to define the metrics processing for our data product using SQL.

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

DataSQRL's flavor of SQL is called "SQRL", which defines tables using the `:=` assignment operator and supports explicit data and function imports.

In the script, we import the sensor data we are processing and a time function we use for aggregation.

We define the `SecReading` table that aggregates all sensor metrics within one second to smooth our temperature readings.
We define another table `SensorMaxTemp` which computes the maximum temperature in the last minute for each sensor.

## Compile the Script {#run}

DataSQRL compiles our SQRL script into an integrated data pipeline with the following command:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl compile metrics.sqrl
```
</TabItem>
<TabItem value="Docker">

```bash
docker run -it -v $PWD:/build datasqrl/cmd compile metrics.sqrl
```
:::note

To run this command you need to have [Docker](https://docs.docker.com/get-docker/) installed on your machine and running. The first time you run this command takes an eternity to download. Make sure you are using docker compose V2.

:::

:::note

If you are using Powershell on Windows, you need to replace `$PWD` with `${PWD}` to reference your local directory in the docker command.

:::

</TabItem>
</Tabs>

## Run the Script {#run}
```bash
(cd build/deploy; docker compose up --build -d)
```

Once the pipeline is running, it will ingest, process, store, and serve the data through an API.

:::note

We'll start up postgres, flink, kafka, and a graphql server. You may have other services running which could cause port conflicts.

:::

## Query API {#query}

Open your favorite browser and navigate to [`http://localhost:8888/graphiql/`](http://localhost:8888//graphiql/) to access GraphiQL - a popular GraphQL IDE. Write GraphQL queries in the left-hand panel. For example, copy the following query:

```graphql
{
  SensorMaxTemp(sensorid: 1) {
    maxTemp
  }
}
```

When you hit the "run" button you get the maximum temperature for the sensor with id `1` in the last minute.

And there you have it: a running data pipeline that ingests metrics, aggregates them, and exposes the results through a GraphQL API which you can call in your applications.

To stop the pipeline, interrupt it with `CTRL-C` and run `(cd build/deploy; docker compose down -v)`.

## Customize API

Got a little more time? Let's customize the GraphQL API and add a metrics ingestion endpoint.

By default, DataSQRL generates a GraphQL schema for us based on the tables we define in the SQRL script. That's great for rapid prototyping, but eventually we want to customize the API and limit data access.

To save us time, we are going to start with the GraphQL API that DataSQRL generates for us by running this command:

<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl compile metrics.sqrl --api graphql
```
</TabItem>
<TabItem value="Docker">

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl --api graphql
```
</TabItem>
</Tabs>

There is now a file called `schema.graphqls` in the same folder as our script. Open it and take a look.
Notice, how each table defined in our SQRL script maps to a query endpoint in the API and an associated result type. The query endpoints accept arguments for each column of the table to filter the results by column values.

We are going to remove most of those arguments to only support querying by `sensorid`. We will also remove the `SensorReading` query endpoint and result type to only expose the smoothed-out sensor readings from the `SecReading` table.

In the `schema.graphqls` file, remove the `SensorReading` type and replace the query definition with the following:

```graphql  title=metricsapi.graphqls
type Query {
  SecReading(sensorid: Int!): [SecReading!]
  SensorMaxTemp(sensorid: Int): [SensorMaxTemp!]
}
```

Note, that we made `sensorid` a required argument for the `SecReading` query endpoint.

Now, invoke the compiler with the GraphQL schema we just created and launch the updated pipeline:

<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl compile metrics.sqrl schema.graphqls
```
</TabItem>
<TabItem value="Docker">

```bash
docker run -it -v $PWD:/build datasqrl/cmd compile metrics.sqrl schema.graphqls
```
</TabItem>
</Tabs>

Followed By:
```bash
(cd build/deploy; docker compose up --build -d)
```

When you refresh GraphiQL in the browser, you see that the API is simpler and only exposes the data for our use case.

## Ingest Metrics with Mutations

So far, we have ingested metrics data from an external source imported from the [DataSQRL repository](http://dev.datasqrl.com). The data source is static which is convenient for whipping up an example data product, but we want our data pipeline to provide a metrics ingestion endpoint.

No problem, let's add it to our GraphQL schema by appending the following mutation to the `schema.graphqls` file we created above

```graphql title=schema.graphqls
type Mutation {
  AddReading(metric: SensorReadingInput!): CreatedReading
}

input SensorReadingInput {
  sensorid: Int!
  temperature: Float!
}

type CreatedReading {
  event_time: String!
  sensorid: Int!
}
```

To use the data created by this mutation in our SQRL script, we have to import it. Replace the first three lines of the `metrics.sqrl` script with:

```sql title=metrics.sqrl
IMPORT schema.AddReading AS SensorReading;
IMPORT time.endOfSecond;
SecReading := SELECT sensorid, endOfSecond(event_time) as timeSec,
                     avg(temperature) as temp 
              FROM SensorReading GROUP BY sensorid, timeSec;
```

We are now using data ingested through the API mutation endpoint instead of the static example data. And for the timestamp on the metrics, we are using the special column `_source_time` which captures the time data was ingested through the API.

Terminate the running service, run the compiler again, and re-launch the pipeline.
```bash
(cd build/deploy; docker compose down -v)
```
<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl compile metrics.sqrl schema.graphqls
```
</TabItem>
<TabItem value="Docker">

```bash
docker run -it -v $PWD:/build datasqrl/cmd compile metrics.sqrl schema.graphqls
```
</TabItem>
</Tabs>

```bash
(cd build/deploy; docker compose up --build -d)
```

In GraphiQL, run the following mutation to add a temperature reading:
```graphql
mutation {
  AddReading(metric: {
    sensorid: 1,
    temperature: 37.2
  }) {
    sensorid
    event_time
  }
}
```

Hit the run button a few times and change the temperature and/or sensor id to insert multiple readings.

To query the maximum temperatures, run the following query:

```graphql
{
  SensorMaxTemp {
    sensorid
    maxTemp
  }
}
```

## Realtime Updates with Subscriptions {#subscription}

DataSQRL supports GraphQL subscription, so we can push processed data to the user in realtime instead of the user having to query for it. This is useful when we want to update dashboards with new metrics automatically and in realtime.

Let's add an alert when the temperature of a sensor exceeds 50°. First, we add the `HighTempAlert` table to our script:
```sql title=metrics.sqrl
HighTempAlert := SELECT * FROM SecReading WHERE temp > 50;
```

Open the `schema.graphqls` file and add the following subscription and type:

```graphql title=schema.graphqls
type Subscription {
    HighTempAlert(sensorid: Int): HighTempAlert
}

type HighTempAlert {
    sensorid: Int!
    timeSec: String!
    temp: Float!
}
```

Terminate and rerun the pipeline:
```bash
(cd build/deploy; docker compose down -v)
```
<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl compile metrics.sqrl schema.graphqls
```
</TabItem>
<TabItem value="Docker">

```bash
docker run -it -v $PWD:/build datasqrl/cmd compile metrics.sqrl schema.graphqls
```
</TabItem>
</Tabs>

```bash
(cd build/deploy; docker compose up --build -d)
```

This allows users of our API to subscribe to the `HighTempAlert` table with an optional `sensorid` argument to only receive alerts for a particular sensor. Whenever a sensor reading exceeds 50°, the user will be immediately notified.

Open two browser windows and navigate to [`http://localhost:8888/graphiql/`](http://localhost:8888//graphiql/) so you can see them both.

On one, start the graphql subscription:
```graphql
subscription {
  HighTempAlert(sensorid: 2) {
    sensorid
    temp
    timeSec
  }
}
```

On the other, fire off a mutation:
```graphql
mutation {
  AddReading(metric: {
    sensorid: 2,
    temperature: 90.5
  }) {
    sensorid
    event_time
  }
}
```

Wait a second and fire off a second one:
```graphql
mutation {
  AddReading(metric: {
    sensorid: 2,
    temperature: 95.5
  }) {
    sensorid
    event_time
  }
}
```

Voila, we just built a fully-functioning monitoring service that ingests, aggregates, and serves metrics data in realtime with push-based alerts. And the best part? The DataSQRL compiler ensures that it is efficient, fast, robust, and scalable.

## Next Steps {#next}

DataSQRL provides a number of features that make it easy, fast, and efficient to build data pipelines and event-driven microservices. Read the [DataSQRL tutorial](../intro/overview) to learn about all the features while building a Customer 360° application and recommendation engine. It'll be fun!