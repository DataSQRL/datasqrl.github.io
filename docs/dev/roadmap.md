---
title: "Roadmap"
---

# DataSQRL Roadmap

DataSQRL is currently in developer preview. That means, there is enough
meat on the bone for you to play with DataSQRL and give us feedback 
but more work needs to be
done before it is ready for prime-time and production use.

<img src="/img/generic/undraw_roadmap.svg" alt="Roadmap >" width="40%"/>

This page is an overview of what lays ahead for DataSQRL and what
features and functionality we are currently missing. To join the roadmap discussion or suggest a feature, join the [Discord channel](https://discord.gg/vYyREMNRmh).

DataSQRL is open source. If you need one of the roadmap items below,
you can always get your hands dirty and [implement it yourself](contribute). 
Not only is your brain going to grow by 3.57% as a result of efforts, but you will also earn our eternal gratitude.

## Data Sources and Sinks

Support for the following data sources:

* Postgres
* MySQL
* MongoDB
* AWS Kinesis

Support for the following data formats:

* Parquet

## SQRL

### SQL Parity {#sql-parity}

SQRL does not yet support all of SQL for defining tables via `SELECT` queries.
Specifically, SQRL is currently missing support for:

* **Sub-queries**: SQL allows sub-queries within WHERE or SELECT clauses
 which SQRL does not yet support.
* **INTERSECT, EXCEPT**: SQRL currently only supports UNION.
* **OUTER JOINS**: SQRL currently only supports inner joins.

We are going to work towards features parity based on user needs, so
let us know what SQL features you are missing in SQRL.

Note, that there are some features of SQL we won't be implementing 1-to-1 in
SQRL because there are other - and more suitable - ways of representing
those in SQRL:

* **PARTITION OVER**: Use nested tables instead where the parent table
 defines the partition and the nested table defines the query over the
 partition scope.
* **WINDOWS**: In the context of partitions, this is better handled
 through nested tables as explained above. For time windows, you can
 use the special function `now()` in SQRL to define a sliding time window
 and then add hints to explicitly control the windowing strategy used to
 execute the query.
* **OFFSET**: DataSQRL generates an API that provides pagination so you
 can page through the results in a sane and efficient way. 
 BTW: [OFFSET is evil](https://use-the-index-luke.com/no-offset).

### Importing Scripts

To facilitate reuse of table definitions, we want to be able to import
other scripts like we are importing datasets from data sources.

Each script defines its own dataset. We want to allow dependencies
between scripts for more complex data services.

### Recursive Definitions

SQRL does not yet support recursive queries which are useful to express
complex computations on data like value propagations.

### Clustering

There are a number of use cases where we want to define a table that
represents clusters of rows in another table.

### Functions {#functions}

## API

### REST and gRPC {#rest}

DataSQRL can generate REST and gRPC APIs similarly to how we currently
generate GraphQL APIs.

### GraphQL Subscriptions {#graphqlsubs}

Expose defined subscriptions tables as subscriptions in the generated
GraphQL API.