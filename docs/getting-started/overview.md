# Getting Started with DataSQRL

DataSQRL makes it easy to implement data products as data pipelines or event-driven microservices. You'll be building powerful data APIs with DataSQRL in no time. How you get started is up to you. We recommend the "Learning by Doing" route, but you can choose your own adventure.

## Learning By Doing

If you're looking to learn DataSQRL, the best way is to build something with it:

<img src="/img/getting-started/tutorial/nutshop.jpg" alt="Nut Shop Tutorial >|" width="40%"/>

**STEP 1:** Read the [Quickstart](../quickstart) to build a metrics monitoring data product in 5 minutes.

**STEP 2:** Dive into the [DataSQRL tutorial](../intro/overview) to get a deeper understanding of DataSQRL and learn everything you need to build your own data product with DataSQRL.

**STEP 3:** Build your own data product with DataSQRL. Take a problem from work or grab some data you've been interested in and give it a go. 

Need more information? Take a look at the [reference documentation](/docs/reference/overview) for everything you'd ever wanted to know about DataSQRL and then some. <br />
Still stuck? No worries, the [DataSQRL community](/community) is here to help. Seriously, reach out - we don't bite!

## Understanding the Big Picture

There are a million technologies out there so why should you spend your time on DataSQRL? If you want to understand how DataSQRL fits into the bigger picture and whether it's worth your time, here are some resources to get you started.

<img src="/img/index/undraw_questions_sqrl.svg" alt="DataSQRL allows you to build with data >" width="40%"/>

DataSQRL is a compiler, optimizer, and build tool for data pipelines and event-driven microservices. To implement a data product in DataSQRL, you implement the data processing in SQL and (optionally) define the API of your data product in GraphQL schema. DataSQRL compiles those two artifacts into an optimized data pipeline that ingests, processes, stores, queries, and serves data through a responsive API in realtime. 

DataSQRL solves the [data plumbing](../concepts/why-datasqrl#dataplumbing) issue that plagues most data product implementations. It eliminates integration code, schema mappings, physical data modeling, data flow orchestration, and other low-level implementation details that take a lot of time and effort. DataSQRL enables you to implement the entire data pipeline in one piece of code and compiles all the executables you need to deploy the pipeline. In other words, DataSQRL saves you a ton of time, money, and headache. 

DataSQRL supports various pipeline topologies and has a pluggable engine architecture that allows DataSQRL to compile to proven technologies like Apache Kafka, Apache Flink, and Postgres. That means you are not relying on DataSQRL in production but can use the technologies and cloud services you already trust. DataSQRL compiles data pipelines that are resilient, fast, and scalable by using an optimizer that determines the most efficient data pipeline for a configured architecture.

* [**What is DataSQRL?**](../concepts/datasqrl): DataSQRL compiles optimized data pipelines. Learn more about DataSQRL and how it works.
* [**Why Use DataSQRL?**](../concepts/why-datasqrl): DataSQRL eliminates data plumbing enabling you to ship data products quickly for less money. Learn more about the benefits of DataSQRL.
* [**When Should I Use DataSQRL?**](../concepts/when-datasqrl): DataSQRL empowers your team to build efficient data products successfully. Find out when and when not to use DataSQRL.

What to know more? Start with the [reference documentation](/docs/reference/overview) to learn everything there is to know about DataSQRL. <br />
What to go even deeper? The [developer documentation](/docs/dev/overview) details the internals of DataSQRL and takes you deep into the guts of the system.

