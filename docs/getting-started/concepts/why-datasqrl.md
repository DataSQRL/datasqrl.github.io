---
title: "Why Use DataSQRL?"
---

# Why Use DataSQRL?

We love building with data, but we got frustrated by how complicated it is to build data APIs. Why can you build a production-grade web service in a few days, but it takes months to build a mediocre data service that looks like Frankenstein on a bad hair day. We built [DataSQRL](../datasqrl) to change that.   


<img src="/img/index/undraw_questions_sqrl.svg" alt="DataSQRL allows you to build with data >" width="40%"/>


We are developing DataSQRL as a tool for developers to build data services. You write an SQRL script that implements the logic of your data service, customize your API, and DataSQRL compiles a fully-integrated and efficient data pipeline for you. It's as easy as 1-2-3. We cut out all the stuff developers don't need and focused on building a tool that integrates with your workflow.

## Benefits of DataSQLR

If you are building a data service, data API, or a data-driven feature for an application, DataSQRL can save you a lot of time, make your life easier, and produce better implementations.

Sounds a little *marketing-y*? Let's break it down:

### Saves You Time {#save-time}

To build a data service, you need an API layer that exposes and services the data service API, a database to serve the data returned by the API, and an ingest layer that collects all the data for your data service from various sources and stores it in the database. <br />
And that's just the price of admission. If you want to do anything of value with your data beyond just compiling and serving it, you also need an analytics layer to transform and enrich the data as well as a data pipeline to glue all these pieces together. If you want to respond to data in realtime, you need a streaming architecture and low latency updates. And we haven't addressed scalability or robustness yet.

<img src="/img/index/undraw_time_management_sqrl.svg" alt="DataSQRL saves you time >" width="40%"/>

The point is: There are a lot of pieces to a data service architecture and assembling all these moving pieces yourself takes a ton of time, effort, and expertise.

DataSQRL compiles fully integrated data pipelines based on proven data technologies like [Apache Flink](https://flink.apache.org/), [Postgres](https://www.postgresql.org/), and [Vertx](https://vertx.io/) [[1]](#footnotes). That means you get a fast, robust data service without the laborious work of implementing each of the components and plugging them together. DataSQRL synchronizes schemas and data management, orchestrates data flows, manages failures, provides visibility into and across components, and [so much more](../datasqrl#what-datasqrl-does).

In other words: DataSQRL handles all the time-consuming details for you. You implement the logic of your data service in [SQRL](/docs/getting-started/concepts/sqrl), a simple language based on SQL to define data transformations and analytics, and DataSQRL compiles that logic into a fully orchestrated data pipeline for data ingest, transformation, analytics, and database storage as well as an API serving layer.

DataSQRL gives you a higher level of abstraction, so you don't get bogged down implementing, integrating, and optimizing low level data abstractions. <br />
You don't write your software in low-level languages like [Assembly](https://en.wikipedia.org/wiki/Assembly_language). You use a higher level language like Javascript, Python, Java, etc that compile into machine code to make you more productive. SQRL is a higher-level language for data services and DataSQRL the compiler.

### Easy to Use {#easy-to-use}

<img src="/img/index/undraw_programming_sqrl.svg" alt="DataSQRL is easy to use >" width="40%"/>

DataSQRL provides a higher-level of abstraction for implementing data services. That makes things easier in two ways:

First, DataSQRL handles a lot of things for you that you don't have to worry about at all. Schema management, data flows, data type conversions, stream orchestration, data synchronization - all of those things are handled by the DataSQRL compiler. When you implement a data service in DataSQRL you have to learn fewer concepts to be successful. DataSQRL doesn't hide any of these elements from you. You get full visibility and can control those elements if you like. But you don't have to and in most cases you never have to worry about it.

You can focus entirely on the logic of your data service by defining data transformations and analytics. DataSQRL uses those definitions to figure out what the schema should look like, how the data should flow, and how to retrieve it for API requests. This simplifies implementing a data service and saves you a ton of "glue code" that holds a data service architecture together.

Secondly, DataSQRL consolidates all elements of building a data service in one higher-level language called SQRL. That means you only have to learn one thing: [SQRL](/docs/getting-started/concepts/sqrl). SQRL is based on SQL, so if you know how to read a `SELECT ... FROM ... WHERE` clause you will pick up SQRL very quickly. SQRL extends SQL with a few constructs that make it easier to develop complex sequences of data transformations, data structures, and handle data streams. Take a look at our [quickstart tutorial](/docs/getting-started/quickstart) to get a feel for the language.

You implement your entire data service in SQRL [[2]](#footnotes) and DataSQRL compiles that code to the respective data systems in the pipeline. That means you don't have to learn the ins-and-outs of multiple data technologies and their respective languages and configurations.

Like SQL, SQRL is a declarative language. Implementing a data service in SQRL means defining data transformations and analytics to apply to your input data to produce the desired result. You don't have to implement *how* to execute those transformations or when. You focus entirely on the *what* and DataSQRL figures out the *how*. This saves you time from implementing data operations manually and the effort to learn how to optimize them.

The DataSQRL compiler not only determines how to implement data operations but also *when*. A common tradeoff data service implementations face is executing data operations at ingest time (i.e. when a new data record is ingested) versus at query time (i.e. when a user of the API issues a request). For example, suppose we are providing an API that shows customers the total amount of money they have spent at our e-commerce store. We can compute this value by summing over all the orders at query time or incrementally updating a sum at ingest time when a new order is placed. The result is the same but has different operational characteristics and can make the difference between things humming along and your database being brought to its knees. <br />
If you are thinking "why are you boring me with these data service implementation trivia", that's exactly the point: With DataSQRL you don't have to think about this. It abstracts those tradeoffs away. If you are going the low-level route and assemble a data service architecture yourself, you'll have to worry about these and other tradeoffs as you design the system.


### Fast & Efficient {#performance}

Building a data service prototype is one thing, but getting a data service to production successfully is a whole different ballgame. With DataSQRL you can rest assured that the data service you are building is robust, fast, low-cost, and scalable.

<img src="/img/index/undraw_fast_loading_sqrl.svg" alt="DataSQRL is fast & efficient >" width="40%"/>

If you are dealing with a substantial amount of data, you need to handle the data efficiently. Otherwise, your data service is going to be costly, slow, and unstable. Even a trivial omission like a missing index structure can bring down an otherwise soundly engineered data service once you reach a few gigabytes of data with a handful of concurrent users. To make matters worse, you often don't find out about these issues until late in the game or after you've shipped to production, which ruins game night with tacos.

DataSQRL has an [optimizer](/docs/reference/operations/optimizer) that picks optimal data structures, chooses the least expensive execution path, installs index structures, pushes down predicates, batches requests, and pools resources. All those things you really don't want to think about when you are building a data service on a timeline but can potentially come back to bite you. DataSQRL takes care of them for you.

DataSQRL compiles to proven streaming technologies like [Apache Flink](https://flink.apache.org/) for processing realtime data flows and mature databases like [Postgres](https://www.postgresql.org/) to serve API requests. This means your data service runs on a robust, fast, and efficient architecture that is optimized by DataSQRL. The resulting data pipeline runs on technologies that have been battle-tested for decades, so you can sleep peacefully at night.

If your data service becomes successful (fingers crossed 🤞) or the amount of data keeps growing, you'll need to scale. Building scale into a system after the fact is very expensive. With DataSQRL you are building on a scalable foundation and when it comes time to scale you know that you can add resources and the system will be able to manage more data and more traffic. Each component of the compiled data pipeline can be scaled independently, or you can rely on managed offerings that auto-scale. 
However, DataSQRL doesn't slow you down initially with scalability concerns and you can run the entire service on a single instance or your laptop.

## Learn more

* To get a feel for DataSQRL and how easy it is to build data services, check out the [quickstart tutorial](/docs/getting-started/quickstart).
* If you are trying to figure out if DataSQLR is the right choice for you, take a look at the [comparison to other data systems](/docs/getting-started/comparison/overview) to find out how DataSQRL compares.
* To dive deeper into DataSQRL, explore the [SQRL language](/docs/getting-started/concepts/sqrl), how the [optimizer](/docs/reference/operations/optimizer) compiles SQRL scripts into efficient data architectures, or read the [documentation](/docs/intro) for all the things.

## Footnotes

[1] DataSQRL has a pluggable engine architecture. Check out [all the engines](/docs/reference/operations/engines/overview) that DataSQRL supports.

[2] You can also import functions implemented in other languages if you prefer.

<!--
There are a gazillion CRUD frameworks and ORM libraries for mapping database rows onto objects, but if you want to do anything more interesting with your data, you are on your own. Want to do complex data transformations? Say hello to obscure stored procedures, brittle data pipelines, and a scattershot of python scripts. Want to do data analytics? Good luck wading through the jungle of data warehouse fiefdoms, big data overkill, and mountains of SQL.

Playing with data used to be the realm of business intelligence and data analysts. When folks discovered that data-driven features in software are extremely valuable, they took their tools, methods, and approaches for compiling reports and dashboards and bolted software engineering on top. The result is like putting cheesecake into a Ramen soup - both make sense individually but thrown together it's a gross mess. 



Thought you could quickly add a simple recommendation engine to the site but ended up in a 6 months-long game of telephone with the PM, data engineers, and data scientists all the while waging a political battle with the data analytics team? Yes, we have been there too. This should be simpler.
-->