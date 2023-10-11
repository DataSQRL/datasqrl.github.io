---
slug: sqrl-high-level-data-language-sql
title: "SQRL: Enhancing SQL to a High-Level Data Language"
authors: [matthias]
tags: [SQRL, community]
---

# SQRL: Enhancing SQL to a High-Level Data Language

When creating data-intensive applications or services, your data logic (i.e. the code that defines how to process the data) gets fragmented across multiple data systems, languages, and mental models. This makes data-driven applications difficult to implement and hard to maintain.

SQRL is a high-level data programming language that compiles into executables for all your data systems, so you can implement your data logic in one place. SQRL adds support for data streams and relationships to SQL while maintaining its familiar syntax and semantics.

## Why Do We Need SQRL?

<img src="/img/reference/reactive_data_layer.svg" alt="Data Layer of data-driven application >" width="30%"/>

The data layer of a data-driven application comprises multiple components: There’s the good ol’ database for data storage and queries, a server for handling incoming data and translating API requests into database queries, a queue/log for asynchronous data processing, and a stream processor for pre-processing and writing new data to the database. Consequently, your data processing code becomes fragmented across various systems, technologies, and languages.

<!--truncate-->

For example, consider a project I was once working on. We were building a data product integrating customer data from various silos into a data API for a mobile app. The objective was to provide customers with an integrated view of their service and billing history, support requests, profile information, etc. This is a typical "Customer 360°" challenge many large organizations face when customer data is spread across numerous operational systems.

The data layer of that service consisted of a bunch of scripts ingesting customer data from CDC (change-data-capture) streams, a SQL database for data persistence, and a Java-based API server.

The data logic of this application was trivial: some translation of billing codes and aggregation of service items, but mostly it was straight-forward mapping of data. Yet, it took the team multiple months to build a prototype because of all the code fragmentation and glue code we had to write to stitch the components together. Integration testing was a big pain. And a simple sprint ticket to add a customer field took a week to implement and test.

<img src="/img/blog/tower-of-babel.jpg" alt="The Tower of Babel >|" width="35%"/>

The worst part was all the miscommunication. See, each component of the data layer has a different mental model.
For the data ingestion and pre-processing, the developers thought in terms of events and streams. For the database modeling and querying, the developers thought in terms of rows and tables. And for the API implementation, the developers thought in terms of objects and classes.

It felt like we were building the Tower of Babel. Everybody was speaking a different language and we couldn’t understand each other. But with a twist: We thought we understood each other until it was time to integrate the components and we discovered a mismatch in how we represented the data. That’s a type of punishment not even a jealous God will dish out.

To save ourselves from this tedious work and mental gymnastics, we built SQRL as a high-level data programming language for implementing the data logic of your application in one place.

## Introducing SQRL

SQRL enhances SQL. If you’ve used SQL before, we hope that you find it easy to pick up SQRL. And if not, there is always ChatGPT 😜.

Let’s take a look at a SQRL script implementing a Customer 360° API that integrates and aggregates customer and order data:

```sql
IMPORT datasqrl.seedshop.Orders;
IMPORT datasqrl.seedshop.Customers;
IMPORT time.*;

/* Clean orders data and compute subtotals */
Orders.items.discount := discount?0.0;
Orders.items.total    := quantity * unit_price - discount;
Orders.totals         := SELECT sum(total) as price,
                         sum(discount) as saving FROM @.items;
/* Deduplicate customer CDC stream */
Customers := DISTINCT Customers ON id ORDER BY timestamp DESC;
/* Create relationship between Customers and Orders */
Customers.purchases := JOIN Orders ON Orders.customerid = @.id;
/* Aggregate customer spending by state */
Customers.spending := SELECT state, sum(t.price) AS spend,
                             sum(t.saving) AS saved
                      FROM @.purchases.totals t GROUP BY state;
```

This script imports customer data and order streams. It processes data in multiple steps, culminating in an aggregated spending analysis by state.

And that’s all you have to implement to get a functioning customer 360° API. DataSQRL compiles this script into executables for all your data systems and handles data mapping and schema synchronization between them.

## SQRL Features Overview

### Simple Syntax

The first thing you notice is the syntactic sugar that SQRL adds to SQL.

It allows you to define the data sources that you are importing into your script so that a package manager can handle data access configuration and schema management.

It uses the `:=` assignment operator to define new tables and allows incremental column definitions.

The goal is to make SQRL feel a little more like a development language where you build your data logic as a sequence of small, incremental steps instead of writing one massive query.

### Nested Data

Nested data, like JSON documents, is ubiquitous in data-driven applications. It’s how we exchange data. It’s how we expose data in APIs.

SQRL provides native support for nested data by representing it as child tables, accessed through the familiar "." dot notation.

In the example, we sum up the price and saving for all items in an order:
```sql
Orders.totals := SELECT sum(total) as price, sum(discount) as saving FROM @.items;
```

There are a couple of things happening here:

- We define a new nested table in `Orders` called `totals` that contains the aggregates
- The `FROM` clause `@.items` selects the items from **each** order. The special table handle `@` refers to the parent table in the local context, i.e. `Orders` in this example.

Being able to write queries within a nested context makes it possible to process tree-structured data within SQL.

For example, when we define the `totals` column for each item in an order, we can refer to the other columns of `items` within the local context:

```sql
Orders.items.total := quantity * unit_price - discount;
```

Nested data support simplifies data consumption from external sources and result data mapping to API calls, eliminating a significant amount of mapping and data transformation code.

### Relationships

SQRL adds relationships to SQL. You can define relationship columns on tables that relate to rows in other tables using the familiar JOIN syntax.

```sql
Customers.purchases := JOIN Orders ON Orders.customerid = @.id;
```

Making relationships explicit in SQL simplifies joins and adds structure to the data that is exposed in the API without separate mapping logic.

For example, the `FROM` clause of the spending analysis query uses the relationship expression `@.purchases.totals` to select from the nested `totals` table of the purchase orders for each customer. It eliminates a double-join and makes the query easier to read.

Support for relationships and nested data makes it convenient to handle inter-related data and bridges the gap between the relational data model and the tree or object-relationship structure we use in our APIs and applications.

### Stream Processing

<img src="/img/blog/data_stream.jpg" alt="Matrix Data Stream >|" width="40%"/>

SQRL introduces support for stream tables to ingest external data streams and react to data changes. Data streams are an important part of data-driven applications. It’s how we consume data from other systems or applications and communicate changes in data to subscribers.

Unlike normal SQL tables where records can change over time, a stream table has immutable records that are fixed in time. As we saw with the orders stream in our example, SQRL makes it easy to process stream data in steps.

SQRL has operators to convert between stream tables and state tables. Our customer 360° script uses the `DISTINCT` operator to convert a CDC stream into a state table. The `STREAM` operator creates a change stream from a state table, so you can react to changes in state.

In addition, SQRL overloads the `JOIN` operator to support time-consistent joins between state and stream tables. For example, consider the join between the `Customers` and `Orders` tables in the spending analysis query. We want to join the `Orders` stream with the state of the `Customers` table **at the time** of a particular order, so that we aggregate by the state that the customer lived in when the order was placed. If we had used an `INNER JOIN`, the state would update every time the customer moved and the query would aggregate all orders under the state the customer currently lives in.

Making stream tables a first-class citizen in SQL allows us to process stream data, react to changes in data, and bridge the mental model between the set semantics of the relational world and the event orientation of streams.

Take a look at the [documentation](/docs/getting-started/intro/sqrl) for a more detailed rundown of all the features SQRL adds to SQL.

## Help Us Design SQRL

To take SQRL for a spin and learn how to build data-driven applications, we recommend you start with the [Quickstart tutorial](/docs/getting-started/quickstart). If you have questions, we are happy to answer them on [our Discord](https://discord.gg/49AnhVY2w9).

SQRL is still young, and we would love to hear [your feedback](https://discord.gg/49AnhVY2w9) on the language to shape its future.
