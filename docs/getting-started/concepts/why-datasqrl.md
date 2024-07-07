---
title: "Why Use DataSQRL?"
---

# Why Use DataSQRL?

When you build data products, you end up wasting most of your time and effort on data plumbing. In fact, 80% ([source](#footnotes)) of data products fail to deliver value because of data plumbing issues.
We developed the open-source DataSQRL compiler to eliminate data plumbing so you can build efficient data products in days instead of months.

<img src="/img/index/undraw_questions_sqrl.svg" alt="DataSQRL allows you to build with data >" width="40%"/>

Isn't it curious that a single developer can build a production-grade web service in a few days, but it takes a team of technology experts months to build a mediocre data product that looks like Frankenstein on a bad hair day? Data plumbing is to blame for that.

Have you noticed that even the data products that do actually make it to production don't deliver a lot of value? Yep, it's because of data plumbing.

[DataSQRL](../datasqrl) allows you to build efficient data products that deliver real value to customers without getting bogged down by data plumbing concerns.

<!--
We are developing DataSQRL as a tool for developers to build data pipelines and event-driven microservices. You write a SQL script that implements your data processing, customize the API, and DataSQRL compiles an integrated and efficient data pipeline for you. We cut out all the stuff developers don't need and focused on building a tool that integrates with your workflow.
-->

## What is Data Plumbing? {#dataplumbing}

What's data plumbing? It's all that extra engineering you need to turn a data transformation into a deployable data pipeline. Specifically, there are 4 types of data plumbing that waste the most time, money, and effort.

### Code Fragmentation

<img src="/img/reference/dpTypes3.svg" alt="Data Pipeline Architecture" width="100%"/>

A data pipeline consists of multiple technologies that work in concert to transform the raw input data into a valuable result. Data stream like Apache Kafka, stream processors like Apache Flink, databases like Postgres, and API servers like GraphQL.

To implement a coherent data pipeline, you need to split the logic of your data product across the various technologies that make up your data pipeline which leads to code fragmentation. And each technology uses a different language, dialect, and conceptual model which means you need to become an expert in each of the technologies or assemble a team of experts to implement a single data pipeline.

That introduces a lot of coordination overhead, makes it hard to implement all the pipeline stages coherently, and very expensive to refactor a data product.

### Data Flow Orchestration

To make the data flow smoothly through the data pipeline, you have to implement the integration points between the various technologies in your data pipeline. That requires a lot of "glue code" that is hard to debug and maintain. In addition, you have to be very careful that data flows are synchronized in time to avoid inconsistencies.

Furthermore, you end up writing a lot of configuration code to define how data is ingested and moved through the system. All of this code is specific to a particular data pipeline and needs to be maintained over time.

### Data Mapping

Each technology in the data pipeline has its own data and schema representation which means you have to write a lot of custom code to map data between systems and make sure schemas are aligned. This may require additional data transformations and careful consideration to avoid introducing inefficiencies.

### System Optimization

Each technology in the data pipeline has a different physical model and operational characteristics which makes it difficult to optimize data pipelines for efficient operation. To optimize a data pipeline you need deep expertise in each of the technologies and understand how their divergent operational behaviors play off each other to introduce inefficiencies.

## Benefits of DataSQLR

If you are building a data product, DataSQRL can save you a lot of time, make your life easier, and produce better implementations by eliminating data plumbing.

Let's break that down:

### DataSQRL Saves You Time {#save-time}

<img src="/img/index/undraw_time_management_sqrl.svg" alt="DataSQRL saves you time >" width="40%"/>

DataSQRL's intelligent compiler eliminates data plumbing and saves you the time and effort required to tackle the four types of data plumbing outlined above. DataSQRL handles all the time-consuming details of data pipeline implementation for you. You implement the logic of your data product in SQL, and DataSQRL compiles that logic into an optimized data pipeline.

DataSQRL gives you a higher level of abstraction, so you don't get bogged down implementing, integrating, and optimizing low level data abstractions. <br />
You don't write your software in low-level languages like [Assembly](https://en.wikipedia.org/wiki/Assembly_language). You use a higher level language like Javascript, Python, Java, etc that compile into machine code to make you more productive. DataSQRL is a compiler for your data pipeline to make you more productive.

### DataSQRL is Easy to Use {#easy-to-use}


DataSQRL gives you a higher-level of abstraction for implementing data products. That makes things easier in two ways:

First, DataSQRL handles a lot of things for you that you don't have to worry about at all like all the data plumbing issues outlined above. When you implement a data product in DataSQRL you have to learn fewer concepts to be successful. DataSQRL doesn't hide any of these elements from you. You get full visibility and can control those elements if you like. But you don't have to and in most cases you never have to worry about it.

You can focus entirely on the logic of your data product by defining data transformations and analytics. DataSQRL uses those definitions to figure out what the schema should look like, how the data should flow, and how to retrieve it for API requests. This simplifies implementing a data product and saves you a ton of data plumbing code that holds a data pipeline together.

<img src="/img/index/undraw_programming_sqrl.svg" alt="DataSQRL is easy to use >" width="40%"/>

Second, the DataSQRL compiler not only determines how to implement data operations but also *when*. A common tradeoff data pipeline implementations face is processing data at ingest time (i.e. when a new data record is ingested) versus at query time (i.e. when a user of the API issues a request). For example, suppose we are providing an API that shows customers the total amount of money they have spent at our e-commerce store. We can compute this value by summing over all the orders at query time or incrementally updating a sum at ingest time when a new order is placed. The result is the same but has different operational characteristics and can make the difference between things humming along and your database being brought to its knees. <br />
If you are thinking "why are you boring me with these data pipeline implementation trivia", that's exactly the point: With DataSQRL you don't have to think about this. It abstracts those tradeoffs away. If you are going the low-level route and assemble a data pipeline architecture yourself, you'll have to worry about these and other tradeoffs as you design the system. And that makes it very expensive to evolve your pipeline over time.


### DataSQRL Compiles Fast & Efficient Pipelines {#performance}

Building a data product prototype is one thing, but getting a data product to production successfully is a whole different ballgame. With DataSQRL you can rest assured that the data product you are building is robust, fast, efficient, and scalable.

<img src="/img/index/undraw_fast_loading_sqrl.svg" alt="DataSQRL is fast & efficient >" width="40%"/>

If you are dealing with a substantial amount of data, you need to handle the data efficiently. Otherwise, your data product is going to be costly, slow, and unstable. Even a trivial omission like a missing index structure can bring down an otherwise soundly engineered data pipeline once you reach a few gigabytes of data with a handful of concurrent users. To make matters worse, you often don't find out about these issues until late in the game, or after you've shipped to production, which ruins game night with tacos.

DataSQRL has an [optimizer](/docs/reference/sqrl/learn) that picks optimal data structures, chooses the least expensive execution path, installs index structures, pushes down predicates, batches requests, and pools resources. All those things you really don't want to think about when you are building data pipelines on a timeline but can potentially come back to bite you. DataSQRL takes care of them for you.

DataSQRL compiles to proven streaming technologies like [Apache Kafka](https://kafka.apache.org/) for ingest and [Apache Flink](https://flink.apache.org/) for processing realtime data flows as well as mature databases like [Postgres](https://www.postgresql.org/) to serve API requests. This means your data pipelines runs on a robust, fast, and efficient architecture that is optimized by DataSQRL. The resulting data product runs on technologies that have been battle-tested for decades, so you can sleep peacefully at night.

If your data product becomes successful (fingers crossed 🤞) or the amount of data keeps growing, you'll need to scale. Building scale into a system after the fact is very expensive. With DataSQRL you are building on a scalable foundation and when it comes time to scale you know that you can add resources and the system will be able to manage more data and more traffic. Each component of the compiled data product can be scaled independently, or you can rely on managed offerings that auto-scale. 
However, DataSQRL doesn't slow you down initially with scalability concerns, and you can run the entire pipeline on a single instance or your laptop.

## Learn more

* To get a feel for DataSQRL and how easy it is to build data products, check out the [quickstart tutorial](/docs/getting-started/quickstart).
* If you are trying to figure out if DataSQLR is the right choice for you, take a look at the [comparison to other data systems](/docs/getting-started/concepts/when-datasqrl) to find out how DataSQRL compares.
* To dive deeper into DataSQRL, explore how the [optimizer](/docs/reference/sqrl/learn) compiles SQL scripts into efficient data architectures.

## Footnotes {#footnotes}

[1] Estimates for data product failures rates due to data plumbing issues vary, but are generally 80% or higher. See this [aggregate analysis](https://designingforanalytics.com/resources/failure-rates-for-analytics-bi-iot-and-big-data-projects-85-yikes/), [article by VentureBeat](https://venturebeat.com/ai/why-do-87-of-data-science-projects-never-make-it-into-production/), or [Gartner analysis](https://web.archive.org/web/20200819210339/https://blogs.gartner.com/andrew_white/2019/01/03/our-top-data-and-analytics-predicts-for-2019/). 