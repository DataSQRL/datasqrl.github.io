---
title: "Data Product"
---

# What is a Data Product?

A data product is a piece of software that processes data to deliver actionable, valuable insights or results.
Data products take raw data as input, apply a series of transformations, algorithmic processes, or analytics, and produces information that is useful to customers, decision makers, or business operations.
Data products can range in complexity from simple analytics dashboards to personalized recommendation engines utilizing machine learning models and generative AI.

## What does a Data Product Consist Of? {#components}

A data product implementation consists of multiple stages to go from raw data to valuable result.

Most data products consist of the following stages:

1. **Data Ingestion**: A data product ingests or accesses one or multiple sources of data from other data systems like databases, file systems, object storage, queues, logs, data warehouses, data lakes, etc.
2. **Data Preparation**: A data product prepares the input data for processing. Data preparation may require schema mapping, data normalization and augmentation, data cleansing, etc. Since a data product doesn't control the sources of data, there can be quite a bit of work in making the data readily usable.
3. **Data Integration**: A data product transforms and links the input data into one coherent dataset for analysis. A data product transforms the input data to map it onto the *right* structure and establishes links or relationships between data records to enrich the combined dataset.
4. **Data Analysis**: A data product analyzes the prepared data to derive valuable information in the form of a new dataset or enriching the prepared dataset. The analysis is defined by the logic of the data product and is often considered the *core component* of a data product. Data analysis may range in complexity from simple aggregations to the application of machine learning models and generative AI.
5. **Data Presentation**: A data product produces results that are aligned with how the customer of the data product expects to consume the data.

## Types of Data Products {#types}

We can classify data products by the results they produce and how they react to changes in data. Let's look at each of those dimensions.

### Data Product Results

There are three different types of results that a data product can produce:

1. **Raw Data**: When a data product produces raw data as a result, it is expected that the customer of the data product does further processing of the data. Outputting raw data gives the customer the greatest degree of flexibility in how they use the data but requires that they have data processing expertise.
2. **Interactive**: When a data product serves the results through a database or data warehouse, the customer queries the data interactively through SQL or BI tools. That gives the customer a medium degree of flexibility and requires some data skills.
3. **API**: An API is the easiest way to consume the result data by a wide variety of customers through code, low-code, or no-code tools but provides the least amount of flexibility.

<!-- Additional considerations: modularity/coupling/agility, flexibility, customer expertise, efficiency [high, medium, low] -->

### Data Changeability

In addition, data products can either dynamically update with changes in the input data or be static.

1. **Dynamic**: Dynamic data products update their results in realtime as new source data arrives or as data changes. 
2. **Static**: Static data products compute the results from a snapshot of data at a certain point in time and don't update until the result set if recomputed (which happens periodically or manually).

Combining those two dimensions, we get 6 different types of data products.

### Stream Processing = Dynamic + Raw 

The data product processes raw streams of data to produce another raw stream of data for further processing by the customer.

<img src="/img/reference/dpTypes1.svg" alt="Streaming Processing Architecture" width="100%"/> 

### Streaming Database = Dynamic + Interactive 

The data product processes raw stream of data and stores the results in a database or data warehouse for interactive querying by the customer. 

<img src="/img/reference/dpTypes2.svg" alt="Streaming Database Architecture" width="100%"/> 

### Streaming API = Dynamic + API 

The data product processes raw stream of data, stores the results in a database, and serves the data through an API for access by the customer.

<img src="/img/reference/dpTypes3.svg" alt="Streaming API  Architecture" width="100%"/> 

### Batch Processing = Static + Raw

The data product processes raw data to produce files for further processing by the customer.

<img src="/img/reference/dpTypes4.svg" alt="Batch Processing Architecture" width="100%"/> 

### Snapshot Database = Static + Interactive

The data product processes raw data and stores the results in a database or data warehouse as a static snapshot for interactive querying by the customer.

<img src="/img/reference/dpTypes5.svg" alt="Snapshot Database Architecture" width="100%"/> 

### Static API = Static + API

The data product processes raw data, stores the resulting snapshot in a database, and serves the data through an API for access by the customer.

<img src="/img/reference/dpTypes6.svg" alt="Static API Architecture" width="100%"/> 







## Use DataSQRL to Build Data Products

DataSQRL makes it easy to build efficient data products by eliminating the data plumbing that is required to implement the various types of data products. That means you can build data products in days instead of months at a fraction of the cost.

See for yourself, and [build a data product in DataSQRL](/docs/getting-started/quickstart) in 10 minutes. Want to learn more? Find out [how DataSQRL works](/how) and [why you should use DataSQRL](/docs/getting-started/concepts/why-datasqrl) to implement your data products.
