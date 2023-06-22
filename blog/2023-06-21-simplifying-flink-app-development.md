---
slug: simplifying-flink-app-development
title: "Simplifying Apache Flink Application Development with DataSQRL"
authors: [matthias]
tags: [DataSQRL, Flink]
---

# Simplifying Apache Flink Application Development with DataSQRL

Apache Flink is an incredibly powerful stream processor. But to build a complete application with Flink you need to integrate multiple complex technologies which requires a significant amount of custom code.
DataSQRL is an open-source tool that simplifies this process by compiling SQL into a microservice that integrates Flink, Kafka, Postgres, and API layer. DataSQRL allows you to focus on your application logic without getting bogged down in the details of how to execute your data transformations efficiently across multiple technologies.

## The Challenge of Building Applications with Flink

We have built several applications in Flink: recommendation engines, data mesh endpoints, monitoring dashboards, Customer 360 APIs, smart IoT apps, and more. Across those use cases, Flink proved to be versatile and powerful in its ability to instantly analyze and aggregate data from multiple sources. But we found it quite difficult and time-consuming to build applications with Flink.

<img src="/img/reference/compiledMicroservice.svg" alt="DataSQRL compiled microservice >" width="50%"/>

To start, you need to learn Flink: the table and datastream API, watermarking, windowing, and all the other stream processing concepts. Flink alone gets our heads spinning. And Flink is just one component of the application.

To build a complete application or microservice, you need Kafka to hold your streaming data and a database like Postgres to query the processed data. On top, you need an API layer that captures input data and provides access to the processed data. Your team must learn, implement, and integrate multiple complex technologies. It takes a village to build a Flink app.

## Introducing DataSQRL: A Solution for Streamlined Flink Development

<img src="/img/full_squirrel.svg" alt="DataSQRL >" width="20%"/>

That’s why we built [DataSQRL](/). DataSQRL compiles the SQL that defines your data processing into an integrated microservice that orchestrates Flink, Kafka, Postgres, and API - saving us a ton of time and headache in the process. Why not let the computer do all the hard work?

Let me show you how DataSQRL works by building an IoT monitoring service.

<!--truncate-->

First, we implement the data processing for our monitoring service in SQL.

```sql title=metrics.sqrl
IMPORT datasqrl.example.sensors.SensorReading; -- Import sensor data
IMPORT time.endOfSecond;  -- Import time function
/* Aggregate sensor readings to second */
SecReading := SELECT sensorid, endOfSecond(time) as timeSec,
                     avg(temperature) as temp FROM SensorReading
              GROUP BY sensorid, timeSec;
/* Get max temperature in last minute */
SensorMaxTemp := SELECT sensorid, max(temp) as maxTemp
                 FROM SecReading
                 WHERE timeSec >= now() - INTERVAL 1 MINUTE
                 GROUP BY sensorid;
```

This script imports the metrics stream which are temperature readings collected by sensors. DataSQRL treats external data sources like software dependencies that you import, allowing the compiler to handle configuration management, data mapping, and schema evolution for us. We also import a time function we’ll use for aggregation.

Then we define two tables: The first table smoothes out the readings by taking the average temperature each second. The SensorMaxTemp table computes the maximum temperature for each sensor over the last minute.

Next, we are going to define the API for our monitoring service.  That’s how users of our service query the data.
The API is defined by a GraphQL schema. It specifies the query endpoints and result types.

```graphql title=metricsapi.graphqls
type Query {
    SecReading(sensorid: Int!): [SecReading!]
    SensorMaxTemp(sensorid: Int): [SensorMaxTemp!]
}


type SecReading {
    sensorid: Int!
    timeSec: String!
    temp: Float!
}


type SensorMaxTemp {
    sensorid: Int!
    maxTemp: Float!
}
```

Note, how the tables map to query endpoints and types. That’s how it all fits together.

And don’t worry, you don’t have to write this schema - DataSQRL can generate it for you from the SQL script.

DataSQRL compiles the script and GraphQL schema into an integrated microservice with the following command:

```bash
docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl metricsapi.graphqls
```

It also generates a docker-compose template to stand up the entire service.

```bash
(cd build/deploy; docker compose up)
```

We can now interact with the API and try it out by opening [http://localhost:8888/graphiql/](http://localhost:8888/graphiql/).

## DataSQRL Does the Work for You

Pretty simple, right? And the best part is that DataSQRL compiles deployment artifacts for each component that you can inspect and deploy anywhere. There is no magic or black box.
For example, DataSQRL compiles a Flink jar you can execute on an existing Flink cluster or Flink managed service.

Most importantly, consider all the work we didn’t have to do. No data source configuration, watermark setting, Kafka integration, database schema definition, index structure selection, API implementation, and so on. DataSQRL compiles all that for you.

DataSQRL also supports inserts to ingest events, subscriptions to push data updates in real-time to the client, and exporting data to Kafka topics or downstream systems. Take a look at the [Quickstart tutorial](/docs/getting-started/quickstart) which shows you how to do that - it only takes a few minutes.

DataSQRL is an [open-source project](https://github.com/DataSQRL/sqrl). If you like the idea of DataSQRL, have questions, or need help building your streaming application, [don’t hesitate to reach out](/community).

To sum up, DataSQRL is a tool for simplifying the development of Apache Flink applications by automating the integration of various technologies and allowing developers to focus on their application logic. It makes Flink accessible to lazy developers like us.

Have fun building applications with Flink!
