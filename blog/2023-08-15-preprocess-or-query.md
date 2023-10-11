---
slug: preprocess-or-query
title: "To Preprocess or to Query, that’s the Question!"
authors: [matthias]
tags: [Kafka, Flink, Postgres, data pipeline, DataSQRL]
---

<head>
  <meta property="og:image" content="/img/blog/preprocessOrQuery.png" />
  <meta name="twitter:image" content="/img/blog/preprocessOrQuery.png" />
</head>

When developing streaming applications or event-driven microservices, you face the decision of whether to preprocess data transformations in the stream engine or execute them as queries against the database at request time. The choice impacts your application’s performance, behavior, and cost. An incorrect decision results in unnecessary work and potential application failure.

<img src="/img/blog/preprocessOrQuery.png" alt="To preprocess or to query? >|" width="50%"/>

In this article, we’ll delve into the tradeoff between preprocessing and querying, guiding you to make the right decision. We’ll also introduce tools to simplify this process. Plus, you’ll learn how building streaming applications is related to fine cuisine. It’ll be a fun journey through the land of stream processing and database querying. Let’s go!

## Recap: Anatomy of a Streaming Application

If you're in the process of building an event-driven microservice or streaming application, let's recap what that entails. An event-driven microservice consumes data from one or multiple data streams, processes the data, writes the results to a data store, and exposes the final data through an API for external users to access.

The figure below visualizes the high-level architecture of a streaming application and its components: data streams (e.g. Kafka), stream processor (e.g. Flink), database (e.g. Postgres), and API server (e.g. GraphQL server).

<img src="/img/blog/dataflow-stages.svg" alt="Streaming Application Architecture" width="100%"/>


An actual event-driven microservice might have a more intricate architecture, but it will always include these four elements: a system for managing data streams, an engine for processing streaming data, a place to store the results, and a server to expose the service endpoint.

This means an event-driven architecture has two stages: the preprocess stage, which processes data as it streams in, and the query stage which processes user requests against the API. Each stage handles data, but they differ in what triggers the processing: incoming data triggers the preprocess stage, while user requests trigger the query stage. The preprocess stage handles data before the user needs it, and the query stage handles data when the user explicitly requests it.

Understanding these two stages is vital for the successful implementation of event-driven microservices. Unlike most web services with only a query stage or data pipelines with only a preprocess stage, event-driven microservices require a combination of both stages.

This leads to the question: Where should data transformations be processed? In the preprocessing stage or the query stage? And what’s the difference, anyways? That’s what we will be investigating in this article.

<!--truncate-->

## The Balancing Act: Preprocess vs. Query

Picture yourself as the chef of a renowned Italian restaurant famous for its pasta dishes. You must decide what food to prepare during the day and what to cook when the order comes in. Cooking everything from scratch upon receiving an order would lead to long waiting times and require more kitchen staff. However, preparing all dishes ahead of time would result in overwork, significant food waste, and stale food. The solution lies somewhere in between. So you marinate the chicken and harvest the basil in the morning but cook the pasta on order.

Building streaming applications is a lot like being a chef. You must determine what data to preprocess for immediate availability and what data to compute fresh upon user request. If all your data processing happens in the database or server at request time, you'll face high request latencies and need to store a significant amount of data, increasing your costs. However, preprocessing everything might also be too expensive, result in unnecessary computations, and yield stale results.

Therefore, the optimal solution for data processing in streaming applications, like in a kitchen, often involves a balance between preprocessing and querying

## Striking a Balance: Preprocess or Query?

How do you find the right balance to determine whether a particular data transformation should be preprocessed or queried?

The answer lies in the following 4 requirements of your streaming application:
* Latency: What is the maximum request latency for the API endpoint?
* Cost: What’s the operational budget for your application?
* Freshness: How quickly should incoming data points be reflected in request responses?
* Consistency: What API results need to be consistent with each other?

Let’s look at each of these factors in detail to learn how they influence the decision on where the data should be processed.

### Latency

Quantifying the latency requirements of your microservice API is typically straightforward.  For customer-facing microservices, it’s common to expect a p99.9 latency of a few hundred milliseconds, meaning 99.9% of all user requests complete within this time frame. If unsure, your product manager probably has an opinion on the target request latency 😉.

The maximum request latency sets a limit on the amount of data processing you can perform in the query stage. More data processing in the query stage results in longer request latency. This is largely influenced by the number of records you need to process and the complexity of the data processing required.

For instance, if a running deep-learning inference model at request time consumes 700 of your 1000 ms p99.9 latency, you must do most of the data processing (i.e., feature computation) in the preprocessing stage.

Likewise, pulling a million records from the database for aggregation is likely going to eat up your entire request latency budget. In particular, watch out for data transformations on data with highly skewed distributions. This occurs when the average number of records processed per request is small, but occasionally you have to process a lot of records which impacts your p99.9 latency.

**The general rule of thumb is: The lower the request latency, the more preprocessing you want to do.**

### Cost

The cost of running your microservice is another factor you have to keep within a certain budget. Let's explore how to optimize the cost of our streaming application, considering both the query and preprocessing stages.

#### Query Cost

A big factor in our database cost is how much data we need to store. Naturally, that determines the storage cost for the database but it also increases the cost of all database operations. The more data a database must manage, the more computing resources it must utilize to retrieve data, maintain index structures, manage buffers, etc.
Therefore, the simplest way to decrease our database expense is by reducing the volume of data we store in it. One effective method to achieve this is by aggregating data in the preprocessing stage.

For example, imagine we are building an IoT microservice that gathers temperature readings from a million sensors that operate at 10Hz (i.e. they take 10 readings every second). This amounts to a quarter gigabyte per second or over 20 TB per day. If we stored all this data in a database, we’d face a pretty hefty bill. However, if we only require min, max, avg, and median readings for each minute, we can aggregate the data during preprocessing and significantly reduce the volume of data written to the database (approximately 500 times less), thereby reducing our database expenses.

The other factor that drives our query stage cost is the amount of data processing. Many applications are read-heavy, meaning the same processed data is accessed multiple times in different requests. By preprocessing that data and storing the result in the database, we can reduce our cost because we only have to run the computation once. This approach is somewhat akin to caching but with the assurance that the results are instantly updated as new data is received by the preprocessing stage.


#### Preprocessing Cost

Now, let’s look at the preprocessing stage. Similar to the query stage, the cost is driven primarily by the amount of computation and the volume of data that needs to be stored. Stream engines are highly efficient at executing time-bound operations, such as time-window aggregations and temporal joins, because those limit the amount of state - and therefore storage - that the stream engine has to maintain over time.

On the other hand, data transformations that aren’t bound in time can accumulate state indefinitely which is costly, hurts performance, and can crash the entire application due to memory exhaustion. A common culprit for high preprocessing cost is the inner join. Computing inner joins on changing streams requires that the stream engine hold the entire dataset for both sides of the stream in memory AND issue updates for all previously joined records whenever a record on either side of the join changes. That’s why joins are typically much cheaper to execute in the database at request time.

**The general rule of thumb is: Reduce the cost of the query stage by preprocessing data but be mindful of costly streaming operations like joins.**

### Data Freshness

Much like chicken cooked the previous day, some data preprocessing leads to stale results that aren’t acceptable to the user of your API.

For example, let’s go back to our IoT microservice that collects temperature data. The sensors are producing 10 readings every second that we are aggregating into 1 second time-windows. In other words, we are effectively downsampling our readings from 10 to 1 per second. For applications where users expect to see the most up-to-date temperature that may not be acceptable.

The impact of data freshness on your application is harder to quantify than latency or cost, because it depends a lot on your customer’s expectations and what they are doing with the data you produce. But like the kitchen, you get the freshest results when you prepare everything from scratch when the request comes in.

**The general rule of thumb is: The fresher you want your aggregations to be, the more you have to compute at query time.**

### Consistency

Data transformations often utilize a single record of incoming data in multiple ways. Take for example a banking application that presents a list of transactions, categorized by type, and also offers a monthly spending analysis, broken down by type. If a user modifies the type of a transaction, the spending analysis should automatically update. This is what we mean by data consistency: any changes in the input data should be reflected in all the results computed from that data.

When we preprocess data, such changes are often not immediately reflected or we cannot guarantee that they are reflected in all preprocessed results at the same time. That can lead to inconsistencies in the data returned by the API. A user may update the transaction type but the spending analysis won’t update until a moment later when the preprocessing stage catches up and adjusts the aggregates.

Like data freshness, the impact of data inconsistency on your application can be harder to quantify. It typically needs to be evaluated in the context of the entire application, not just the event-driven microservice. For instance, if the front-end application that allows the user to modify the transaction type automatically updates the affected aggregates, the temporary inconsistency of data in the API response may not be problematic.

Maintaining data consistency is easier when data computations are executed as queries against the database because we compute the results from the original records.

**The general rule of thumb is: The more consistent you want computed results to be across changes in input data, the more computation has to be done in the query stage.**

## Practical Advice for Balancing Preprocessing and Querying

Choosing between preprocessing and querying isn't a straightforward decision. Rather, it's like a tug-of-war between your application's various requirements that will dictate whether a particular data transformation should be preprocessed or executed at query time. Low latency and cost-effectiveness tend to favor preprocessing, while data freshness and consistency often lean towards querying.

**What makes this decision so challenging is that preprocessing data and querying data are implemented very differently.** Preprocessing data with tools like Kafka and Flink requires a different approach, language, and implementation compared to executing the exact same data transformation with Postgres and an API server at query time. It's common to have different team members handling preprocessing and query stage implementations. Therefore, moving a single transformation from the query to the preprocess stage (or vice versa) is expensive because it requires reimplementing the transformation, coordination within the team, and refactoring the interface between the components of the microservice.

Because it is so expensive to change what stage we execute our data transformations in, we try to get it right during the planning phase. But we often won’t know what the right balance is until we try it. And, application requirements change over time, of course. That makes event-driven microservice implementations time-consuming and costly.

But what if we could implement all of our data transformations in one script and have a compiler translate them to preprocess stage or query stage implementations based on application requirements? That would eliminate the problem because we can easily change where data transformations get executed. We could try out different allocations and iterate quickly as requirements change.

## Meet DataSQRL: The Compiler for Event-Driven Microservices

That’s exactly what [DataSQRL](https://www.datasqrl.com/) does. With DataSQRL, you can write your streaming application's data transformations in SQL. The compiler then translates your SQL into preprocess and query implementations. Specifically, DataSQRL translates SQL into a combination of FlinkSQL and the datastream API for preprocessing, and PostgreSQL statements for querying.

Let's see how this works using our IoT microservice example:

```sql
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

First, we import the sensor reading data stream from Kafka. We define a new table `SecReading` that aggregates the readings per second. Finally, we create `SensorMaxTemp`, a table that calculates the maximum temperature for each sensor over the last minute.

DataSQRL's intelligent optimizer automatically determines where to execute the data transformations defined in your SQL script, based on your microservice's API.
For our example, we expose the following GraphQL API that allows users to query the `SecReading` and `SensorMaxTemp` tables by `sensorid`:

```graphql
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

Based on the API definition, DataSQRL's optimizer finds the best allocation of data transformations to stages by minimizing the request latency and cost. In our example, this means that the `SecReading` table is preprocessed as a tumbling time-window, and `SensorMaxTemp` is preprocessed as a sliding time-window. Both tables are aggregated in Flink during preprocessing, with the results written to Postgres for querying on request.

But what if data freshness of the `SensorMaxTemp` table is more important for our application than low latency? No problem, simply tell the optimizer to execute this data transformation in the database:

```sql
/*+ EXEC(database) */
SensorMaxTemp := SELECT sensorid, max(temp) as maxTemp
                 FROM SecReading
                 WHERE timeSec >= now() - INTERVAL 1 MINUTE
                 GROUP BY sensorid;
```

With a simple hint above the table definition, you can direct the optimizer where to process the table, and it compiles the microservice accordingly. What would have required a significant refactor of your entire microservice is now a simple code change.

<img src="/img/full_squirrel.svg" alt="DataSQRL >" width="30%"/>

DataSQRL also handles all the data plumbing needed to integrate your event-driven microservice components. There's no need to connect Flink to Kafka, define the Flink table schema, define the Postgres table schema, or map API requests to prepared SQL statements. The DataSQRL compiler does it all for you. You get the same microservice architecture and technologies but with significantly less work.

Now, that takes the edge off making the right decision on where to compute your data transformations and turns the balancing act into a straightforward process: You can let the DataSQRL optimizer handle it for you, experiment with different allocations, and iterate quickly as your application evolves. DataSQRL makes the implementation of your event-driven microservices and streaming applications faster, easier, and more cost-effective.

Take a look at the [DataSQRL tutorial](https://www.datasqrl.com/docs/getting-started/quickstart/) to learn more about DataSQRL and [join us on Discord](https://discord.gg/49AnhVY2w9) if you need any help. If you're looking to empower your team to build event-driven microservices like the pros, [we're here to help](https://www.datasqrl.com/services/) you hit the ground running.
