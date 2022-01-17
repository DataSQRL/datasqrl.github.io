---
title: "Data Service"
---

# What is a Data Service?

A data service processes, transforms, or analyzes data from one or multiple sources and
exposes the result through an API.

A data service is a type of backend service focused on adding value to data by combining,
enriching, and analyzing the raw source data for consumers of the service. A data service is
used by frontend applications to provide the value to an end-users or by business services
that further process the value-added data.

In modern software architectures data services are distinct from other backend services to
separate concerns, provide agility for changes to the data logic, increase robustness,
and decrease costs.
In other words, encapsulating all your data logic in a service makes your life a lot easier
and ensures that your data spaghetti and your application or business spaghetti doesn't get
mixed up in one giant bowl of impenetrable code spaghetti. You hungry yet?

## What does a Data Service Do?

A data service provides a standard interface to data entities for users. It's a
convenience store for data: you grab the data you need from a neatly arranged shelf and get out.

A data service usually consists of the following components:

1. **Source Data**: A data service ingests or accesses one or multiple sources of data from other
  data systems like databases, file systems, queues, logs, data warehouses, data lakes, etc.
2. **Data Preparation**: A data service prepares the input data for processing. 
  Data preparation may require schema mapping, data normalization and augmentation, data cleansing, etc.
  Since a data service doesn't control the sources of data, there can be quite a bit of work in
  making the data readily usable.
3. **Data Integration**: A data service transforms and links the input data into one coherent
  dataset for analysis. A data service transforms the input data to map it onto the *right*
  structure and establishes links or relationships between data records to enrich the combined
  dataset.
4. **Data Analysis**: A data service analyzes the prepared data to derive valuable information
  in the form of a new dataset or enriching the prepared dataset. The analysis is defined by
  the logic of the data service and is often considered the *core component* of a data service.
5. **Data Presentation**: A data service maps the resulting dataset onto an entity-relationship
  structure that aligns with how the users of the service think about the data to make it
  intuitive to consume the service.

The benefit of a data service is providing all of this value behind a well-defined API that
users across the organization can consume as needed for additional processing or serving of
the data.

## What distinguishes a Data Service from a Backend Service?

A data service is a special type of backend service focused on data processing to provide
additional value from source data.
A data service is a backend service that's all about data.

## Do we need to Break Out our Data Services?

tbw


## Where to Go from Here?

- Learn how to [build a data service in DataSQRL](/docs/getting-started/tutorials/nutshop-tutorial) in 10 minutes.
- Find out [why you should use DataSQRL](/docs/getting-started/why-datasqrl) to implement your data services.
- Read more about [data services](https://www.infoq.com/articles/narayanan-soa-data-services/) on InfoQ.
- Learn more about [Microservice Architectures](https://martinfowler.com/articles/microservices.html) in general of which data services are a part.
