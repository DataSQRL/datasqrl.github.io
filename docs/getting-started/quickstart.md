---
title: "Metrics Processing"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# DataSQRL Quickstart in 10 Minutes

<img src="/img/getting-started/squirrel_computer.jpeg" alt="Metrics Monitoring Quickstart >|" width="35%"/>

We are going to build a data pipeline that analyzes sensor metrics in 10 minutes. Tik tok, let's go!

Update quickstart to start with CREATE TABLE, then add data for sensor assignments to aggregate by machine.

## Installation

Install DataSQRL as a command on your machine by selecting the operating system below, or use Docker version of DataSQRL on any machine.

<!--
:::note
The command version of DataSQRL includes a development and testing runtime. The Docker version only includes compilation and production runtime which takes a long time to start up.
:::
-->

<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
brew tap datasqrl/sqrl
brew install sqrl-cli
```

</TabItem>
<TabItem value="Docker">

Pull the latest Docker image to ensure you have the most recent version of DataSQRL:

```bash
docker pull datasqrl/cmd:latest
```

</TabItem>
</Tabs>


## Create Script

First, we are going to define the metrics processing for our data product using SQL.



In the terminal or command line, create an empty folder for the SQL script:

```bash
> mkdir metrics; cd metrics
```

Then create a new file called `metrics.sqrl` and copy-paste the following SQL code:

```sql title=metrics.sqrl
CREATE TABLE AddSensorReading (
     sensorid INT NOT NULL,
     temperature DOUBLE NOT NULL
);
/* convert temperature to Fahrenheit */
SensorReading := SELECT *, temperature*1.8+32 AS temperatureF
              FROM AddSensorReading ORDER BY event_time DESC;
/* Compute avg and max temp per minute time window */
SensorMinuteTemp := SELECT sensorid, endOfMinute(event_time) as timeMin,
                     avg(temperature) as avgTemp, max(temperature) as maxTemp
              FROM AddSensorReading GROUP BY sensorid, timeMin;
```

DataSQRL's flavor of SQL is called "SQRL", which extends ANSI SQL with some convenient syntax like the `:=` assignment operator to define derived tables.

In this script, we create the `AddSensorReading` table to collect sensor metrics.
We define the `SensorReading` table augments the collected sensor metrics with the temperature in Fahrenheit.
We define another table `SensorMinuteTemp` which computes the average and maximum temperature for every minute time window per sensor.

## Run the Script {#run}

DataSQRL compiles our SQRL script into an integrated data microservice that orchestrates Apache Kafka, Flink, Postgres, and GraphQL server. Run it with the following command:

<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl run metrics.sqrl
```
</TabItem>
<TabItem value="Docker">

```bash
docker run -it -v $PWD:/build datasqrl/cmd compile metrics.sqrl
(cd build/deploy; docker compose up --build -d)
```
:::note

To run this command you need to have [Docker](https://docs.docker.com/get-docker/) installed on your machine and running. The first time you run this command takes an eternity to download. Make sure you are using docker compose V2.

:::

:::note

If you are using Powershell on Windows, you need to replace `$PWD` with `${PWD}` to reference your local directory in the docker command.

:::

</TabItem>
</Tabs>

Once the pipeline is running, it will ingest, process, store, and serve the data through an API.

:::note

We'll start up postgres, flink, kafka, and a graphql server. You may have other services running which could cause port conflicts.

:::

## Access the API {#query}

Open your browser and navigate to [`http://localhost:8888/graphiql/`](http://localhost:8888//graphiql/) to access GraphiQL - a popular GraphQL IDE - through which you can access the GraphQL API. Write GraphQL queries in the left-hand panel. 

### Insert Data with Mutations

To record sensor metrics, copy the following query:

```graphql
mutation {
  AddReading(metric: {
    sensorid: 1,
    temperature: 37.2
  }) {
    event_time
  }
}
```

Hit the "run" button to execute the mutation. 

### Query Data

Now we can query the data with:

```graphql
{
  SensorReading(sensorid: 1) {
    temperature
    temperatureF
    event_time
  }
}
```

### Realtime Subscriptions

DataSQRL supports GraphQL subscription, so we can push processed data to the user in realtime instead of the user having to query for it. This is useful when we want to update dashboards with new metrics automatically and in realtime.

We are going to subscribe to the `SensorReading` table and trigger a new metric through the mutation. To see this happening in realtime, open two browser windows and navigate to [`http://localhost:8888/graphiql/`](http://localhost:8888//graphiql/) so you can see them both side-by-side.

On one, start the graphql subscription:
```graphql
subscription {
  SensorReading(sensorid: 2) {
    temperature
    temperatureF
    event_time
  }
}
```

On the other, fire off a mutation:
```graphql
mutation {
  AddReading(metric: {
    sensorid: 2,
    temperature: 52.8
  }) {
    event_time
  }
}
```

The data shows up almost immediately in the query as the data is pushed through the subscription.

### Consistent Data Processing

Let's try querying the minute temperature aggregates:

```graphql
{
  SensorMinuteTemp(sensorid: 1) {
    timeMin
    avgTemp
    maxTemp
  }
}
```

You get an empty result, even if you wait a minute for the time window to close. DataSQRL guarantees that the compiled data pipeline is consistent by default, which means that time windows don't close until additional data comes in to guarantee all data has been received. This gives us consistency guarantees in case of delayed data or system outages.

After waiting a minute, try adding more sensor metrics with the mutation above. If you run the `SensorMinuteTemp` query again, you'll see the result.

And there you have it: a running data pipeline that ingests metrics, aggregates them, and exposes the results through a GraphQL API which you can call in your applications.


<Tabs groupId="cli">
<TabItem value="Mac" default>
To stop the pipeline, interrupt it with `CTRL-C`.
</TabItem>
<TabItem value="Docker">
To stop the pipeline, interrupt it with `CTRL-C` and then take down the pipeline with:

```bash
(cd build/deploy; docker compose down -v)
```

</TabItem>
</Tabs>

## Connecting Data Sources {#source}

In addition to ingesting and querying data through the API, DataSQRL also supports importing and exporting data from/to external data sources like Kafka topics, files, database, Iceberg tables, etc.

Suppose our sensors are attached to machines and that assignment information is stored in a database. We can connect to and import that source of data with the following statement added to the top of our script:

```sql
IMPORT datasqrl.example.sensors.SensorAssignment;
```

We are resolving this import against the DataSQRL Repository where the connector configuration is stored for easy access. You can also configure connectors locally.

The import defines a table `SensorAssignment` which contains a CDC stream of updates to the database table.

```sql
SensorAssignment := DISTINCT SensorAssignment ON sensorid ORDER BY updated DESC;
MachineMinuteTemp := SELECT machineid, endOfMinute(event_time) as timeMin,
                           avg(temperature) as avgTemp, max(temperature) as maxTemp
                    FROM SensorReading r
                    TEMPORAL JOIN SensorAssignment a ON r.sensorid = a.sensorid
                    GROUP BY machineid, timeMin;
```

The first statement deduplicates the update stream so that we get the most current assignment for each sensor. That table is then temporally joined to the `SensorReading` stream to identify the machine a sensor was assigned to at the time of the reading. The temporal join ensures that the join is consistent in time. We then aggregate the data for each machine by minute time window.


## Customize API {#api}

By default, DataSQRL generates a GraphQL schema for us based on the tables we define in the SQRL script. That's great for rapid prototyping, but eventually we want to customize the API or limit data access.

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

Let's rename the GraphQL schema file to `metrics.graphqls` and change it to fit our API requirements. For example, we are going to remove all but the `sensorid` argument from the `SensorReading` query and make that argument required:

```graphql  title=metricsapi.graphqls
type Query {
  SensorReading(sensorid: Int!): [SensorReading!]
  ...
}
```

When we supply the modified GraphQL schema as an argument to DataSQRL, it will compile a data pipeline that exposes exactly that API:

<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl run metrics.sqrl schema.graphqls
```
</TabItem>
<TabItem value="Docker">

```bash
docker run -it -v $PWD:/build datasqrl/cmd compile metrics.sqrl schema.graphqls;
(cd build/deploy; docker compose up --build -d)
```
</TabItem>
</Tabs>

When you refresh GraphiQL in the browser, you see the updated API.

## Conclusion

Voila, we just built a fully-functioning monitoring service that ingests, aggregates, and serves metrics data in realtime with push-based notifications. And the best part? The DataSQRL compiler ensures that it is efficient, fast, consistent, robust, and scalable.
