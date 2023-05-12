---
title: "Data Layer"
---

# What is a Data Layer?

A data layer is an abstraction within a software application that manages data storage, retrieval, and manipulation. It separates these concerns from the application's core logic for modularity and maintainability.

For managing application state, you use a transactional data layer with a database and an object-relational mapper (ORM) or database abstraction library.

For [data services](../data-service) that require executing data-intensive computations quickly in response to events or external data, you use a reactive data layer. 

This page outlines the architecture and implementations steps for building a reactive data layer.

## How to Design a Reactive Data Layer

To efficiently and quickly execute data-intensive computations, a data layer consists of the following components:

<img src="/img/reference/reactive_data_layer.svg" alt="Data Layer Architecture >" width="30%"/>

* **Stream Processor**: A framework for running the consecutive data processing steps from data ingestion (i.e. reading data off the queue or from external data systems), via data transformation, to writing the results to the database. A processing framework handles all the scheduling and execution of tasks.
* **Database**: Stores the pre-processed data and computes results to queries on demand.
* **Server**: Exposes the results through an API and writes incoming data to the queue.
* **Queue**: A persisted message queue (or log) is a robust and scalable piece of data infrastructure to temporarily store data and process it asynchronously.


The diagram shows how the components combine into the architecture of a data layer. The data flows through the architecture as follows: 
* The server writes incoming data to the queue. 
* The stream processor picks data off the queue, processes the data, writes intermediate computations back to the queue, and the pre-processed result into the database. 
* The server queries the database for the final result which is served back to the user or external consumer.

## How to Implement a Reactive Data Layer

The exact implementation steps for building a data layer depend on the chosen technologies for each of the four components of the data layer.

Below, we outline a high-level blueprint for the implementation steps you take to implement a data layer.

<img src="/img/index/withoutDataSQRL.svg" alt="Steps for Building a Data layer" width="100%"/>

### Stream Processor: Ingestion and Processing

The following steps need to be implemented for retrieving and preprocessing the data:

1. Implement or configure access to data sources: Connect to the queue or log carrying the input data. In addition, identify and access additional data sources like databases, APIs, or files, needed for data processing. Configure connection settings, authentication, and authorization as required.

2. Implement data synchronization: Develop mechanisms to retrieve data in real-time, determine timestamps and order, and handle data delays and retrieval failures to ensure data consistency and reliability.

3. Validate and clean input data: Inspect incoming data for correctness and consistency, handle errors for malformed data, and apply data cleansing techniques to ensure data quality.

4. Preprocess data: Transform and structure input data to meet use case requirements by performing tasks like filtering, normalizing, data extraction, or data flattening.

5. Write data to the database: Efficiently store the processed data in the database, handle failures and database overload, and ensure data durability and availability.

### Database

The database component stores the pre-processed data and makes it available for querying by the server. These are the steps to set up and configure the database:

6. Design database schema: Create an organized and optimized structure to store data, considering factors like normalization, data types, and relationships among entities.

7. Implement queries: Develop queries to retrieve, analyze, and manipulate data based on use case requirements, using appropriate query languages and techniques.

8. Determine index structures: Design and implement indexing strategies to optimize query performance and reduce database response time.

9. Materialize slow queries: Identify slow and costly queries, and partially materialize result sets to improve performance by caching and reusing query results.

### Server

Finally, to serve the processed data to users or consuming systems requires the following:

10. Design API specification: Define a clear and comprehensive API specification based on use case requirements, including endpoints, request/response formats, and authentication methods.

11. Map API to database queries: Create a mapping between API endpoints and corresponding database queries to efficiently retrieve and serve data to clients.

12. Implement API: Develop the API server to handle incoming requests, batch database queries, assemble result sets, and efficiently manage I/O operations.

13. Develop API test suite: Create a comprehensive suite of tests to validate the functionality, performance, and correctness of the data layer, ensuring that it meets use case requirements and conforms to the API specification.

## Deploying a Data layer

There is more work we need to do to get our data layer ready for production:

14. Queue Optimization: To ensure smooth operations in production configure the queue for the expected workload. If high performance is required, use a schema (e.g. Avro) to encode the messages in the queue for faster serialization and smaller message size.

14. Scale Testing and optimization: Conduct performance tests simulating real-world conditions, including varying levels of data volume, velocity, and complexity, to ensure the data layer can handle expected workloads. Identify and address potential bottlenecks, optimize processing and storage operations, and fine-tune configuration settings to achieve optimal performance and resource utilization. Perform load and stress tests to assess the layer's resilience under high loads and determine its breaking points.

15. Implementing observability across the entire layer: Integrate monitoring, logging, and tracing capabilities throughout the layer to provide visibility into its performance, health, and behavior. Set up appropriate metrics, log levels, and trace spans to gather data on system performance, error rates, and resource usage. Configure alerting mechanisms to notify relevant stakeholders of potential issues or anomalies in the layer. Observability allows for proactive issue detection, faster troubleshooting, and improved overall reliability.

16. Building deployment artifacts: Package the data layer components, including code, configurations, and dependencies, into deployable artifacts such as Docker containers, serverless function packages, or platform-specific bundles. Ensure that the artifacts are versioned and built in a consistent and reproducible manner using tools like continuous integration and build automation systems. Building deployment artifacts simplifies deployment, rollback, and dependency management in the target environment.

17. Automating the deployment process: Establish a streamlined and automated deployment process using continuous integration and continuous deployment (CI/CD) tools and practices. Configure automated tests, builds, and deployments triggered by code changes or other events. Implement infrastructure as code (IaC) principles to manage and provision infrastructure resources, ensuring a consistent and repeatable environment setup. Automating the deployment process minimizes human error, accelerates development cycles, and enables rapid iteration and updates to the data layer.

## Faster Way to Build Data layers

Sometimes you need to build custom data layers and have to shoulder all the work outlined above.

We believe - and of course we are highly biased - that DataSQRL is good enough for most data layers and can save you a ton of work. DataSQRL is a compiler and build tool for data layers that generates the artifacts that comprise a data layer.

If you want to learn more about building data layers with DataSQRL we recommend you start with the [Quickstart tutorial](/docs/getting-started/quickstart).

No matter which route you choose, we wish you best of luck and would love to welcome you in [our community](/community) of data builders.