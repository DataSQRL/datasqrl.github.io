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

## What does a Data Service Do? {#components}

A data service provides a standard interface to data entities for users. It's a
convenience store for data: you grab the data you need from a neatly arranged 
shelf and get out. 

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

## What distinguishes a Data Service from a Backend Service? {#difference}

A data service is a special type of backend service focused on data transformation and analytics
to provide additional value from raw data.
A data service is a backend service that's all about data.

It's useful to distinguish between data and other type of backend services because
data services have [specific concerns](#components) that are easier to address, change, and manage
when they are contained in their own service. Chickens are a lot easier to handle
when you don't have a bunch of ferrets mixed into the population. So is your data
service when you don't mix it with application or business service concerns like
transaction handling, verification, page rendering, or business process execution.

The other benefit of building separate data services as part of your backend
architecture is that you can use dedicated tools that make building data services
more productive. [DataSQRL](/) makes it easy and efficient to build data services
and allows the developer to focus on their data logic by providing specific support
for the [components that a data service needs](#components).

If you are building a backend service that needs to do a non-trivial amount of 
data wrangling, data transformation, data analysis, or data integration it is
best to put that data logic in a separate data service and use dedicated tools
for building data services like [DataSQRL](/). You'll save a lot of time, cost,
and sanity.

## Do You need to Break Out Your Data Services? {#breakout}

You have build or about to build a backend service that contains some data logic.
Do you need to break that logic out into its own data service?

Here is the answer you love so much: It depends.

First: If it ain't broke, don't fix it. If you have a working backend service which
mixes application-level concerns with data logic, but it's working and nobody is
hurting, then leave it alone.

It's perfectly normal for backend services to contain some data logic and not all
data logic needs to live in its own service. Don't make your life harder 
unnecessarily by throwing another service into the mix.

As a general rule of thumb: Consider building a separate data service if your
data logic is complex or an important part of your value proposition, i.e. the
reason why your service exists in the first place. Let's look at those two reasons
in more detail.

### Reason 1: Complex Data or Data Logic

If you are dealing with complex data or complex data logic there are a lot of advantages
to encapsulating those aspects in a dedicated data service. A dedicated data service
achieves [separation of concerns](#difference) and allows you to better address the 
[unique aspects](#components) of a data service using appropriate tools like [DataSQRL](/).

Even though it seems that having another service in your architecture is more work, you will
actually save time by having simpler services that can be changed more quickly and 
maintained with less headache.

How do you know if you are dealing with complex data or complex data logic? Like the hipness
of stickers on a laptop cover, it's a somewhat subjective assessment but here are some 
rough guidelines.

#### Complex Data

The data itself can be complex to handle and require specialized tools, data structures, or
other types of infrastructure and optimization that warrant a dedicated data service.

Data is considered complex for one or multiple of the following reasons:

- *High Volume*: You are dealing with a lot of data. So much data that you cannot simply
 throw it all in a hashmap or other simple data structure to process further. With a high
 volume of data, you need to be smart about how you store and access the data to avoid
 wasting time and space when processing the data.
- *High Velocity*: The data is coming at you at a high rate and you want to process the data
 quickly to respond. Similar to a high volume, this requires smart handling of data.
- *Heterogeneous Data*: The structure of the data is complex, or you are dealing with multiple
 different sources of data that all have different structures. In those cases having support
 for data normalization and integration can save a lot of time.

#### Complex Data Logic

The other source of complexity is in the logic you are applying to your data to produce
additional value. If you are doing multiple levels of data transformation, linking records,
eliciting relationships, or computing analytics - those are all sources of data logic
complexity.

When is the complexity high enough to warrant a dedicated data service? When does your
Twitter feed becomes so boring that you go back to work? It depends on your preferences.
If you find that you are writing a lot of code to handle data or are considering
"optimizations" to increase efficiency, you should explore the option of moving the data
logic into a dedicated data service. The goal is to focus your efforts on adding value to
the data - not writing a bunch of code and infrastructure to wrangle the data.

### Reason 2: Data Value Add Essential to Service

When you are starting a greenfield data project you may not (yet) be dealing with complex data
and your prototype implementation seems simple enough to implement the whole thing as a
simple web service. However, if deriving value from data is a core motivation for the project
you can benefit a lot from building a dedicated data service because it provides a greater
degree of agility and saves you lot of time as the project progresses.

For example, suppose you are adding a product recommendation feature to an existing online
store. The motivation for this initiative is to use the data on customers shopping history
to provide valuable recommendations and improve sales. A classic example of "deriving value
from data". For the prototype, you are pulling a customer's most recent purchases from a 
flat csv file that is exported from the purchase-order database. Simple enough to code
something up in Node, Rails, Spring, or (insert your favorite framework), right? Sure, but
as the project progresses (realtime data ingest from database, normalizing input data,
handling schema evolution in the source data, adding error handling, etc) and your 
recommendations become "smarter" (time-weighted repeat purchases, grouping by product
category, seeding for new customers, etc) you will be writing a lot of data handling and
*plumbing* code that distracts from the actual value you are trying to deliver.

It's equally easy to start such a project with a dedicated framework for building data
services like [DataSQRL](/) to build the prototype and a lot easier to improve the 
recommendation service as the requirements mature.

If you are working on a data project where data value-add is a primary motivation, you will
save yourself a lot of hassle and time if you architect your system with a dedicated
data service and use the right tool for the job.

### Reasons Not to Build a Data Service

If you are building a backend service that executes CRUD 
(i.e. Create, Read, Update, Delete) operations or transactional operations against a 
database, you are better off using one of the gazillion ORM framework to interface
with the database instead of a dedicated data service.

Likewise, if you have simple data logic sprinkled across your backend service
don't pull it out into a data service until you expect significant benefits from that
modularity.



## Where to Go from Here?

- Learn how to [build a data service in DataSQRL](/docs/getting-started/nutshop-tutorial) in 10 minutes.
- Find out [why you should use DataSQRL](/docs/getting-started/why-datasqrl) to implement your data services.
- Read more about [data services](https://www.infoq.com/articles/narayanan-soa-data-services/) on InfoQ.
- Learn more about [Microservice Architectures](https://martinfowler.com/articles/microservices.html) in general of which data services are a part.
