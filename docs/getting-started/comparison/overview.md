---
title: "When to use DataSQRL"
---

# When should you use DataSQRL for your ?

<img src="/img/reference/datasqrl_decision_tree.svg" alt="When to use DataSQRL >" width="40%"/>

## TL;DR

If you are building a CRUD app or need ACID transactions, use a database. If you don't need an API or react to data in real-time, use a data warehouse or data lake. <br />
Otherwise, start with DataSQRL.

## Full Version

You get that [DataSQRL](../concepts/datasqrl) is a compiler for building [data services](/docs/reference/concepts/data-service.md) from streaming data sources, but you are wondering if it's the right tool for your project. And how does it compare to other options you are considering to get the work done?

While it depends a lot on the specifics of your project, the decision tree shown in the figure on the left is a good heuristic:

1. If you are building a [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) application or need [ACID](https://en.wikipedia.org/wiki/ACID) transaction, then use a database with an ORM library.
2. If you don't need to expose the result data through an API or trigger actions in real-time based on incoming data, then use a data warehouse or data lake.
3. Otherwise, start building a prototype of your data API in DataSQRL. With DataSQRL you can build streaming data APIs in a fraction of the time and iterate much quicker than building custom data pipelines. If you find DataSQRL lacking of features you need, you can still build a custom pipeline once you have narrowed down your requirements.
4. If DataSQRL is good enough for your use case, you can take your project to production without much extra work.

As with any heuristic, this decision tree simplifies the decision process and it doesn't account for specifics of your project. You can find more details for each of the decision points below.

## Database

Here is the deal: For simple data storage and retrieval, a database is good enough. Databases have been around for decades, are very robust, and widely available. If your data is already in a database (or it's trivial to get it there), then the database should be your first choice.

If you cannot directly access the database or are concerned about adding another workload to it, then DataSQRL makes it easy to set up your data service on separate infrastructure with that database as the source.

If your data needs are complex enough that a database will be taxed significantly or find yourself deep in the database weeds (e.g. you are implementing stored procedures, hand tuning queries, denormalizing data, etc), then give DataSQRL a try. DataSQRL is specifically designed to build efficient data services with little effort and can save you a lot of time and headache.

You also want to start with DataSQRL if you need to integrate data from multiple sources. Doing so in a database is a lot of pain. DataSQRL's data connectors, import manager, automatic data type discovery, and schema management will save you a lot of time and manual effort.

## Data Warehouse / Lake

Before you chose DataSQRL, check whether your data warehouse (or data lake or analytics engine) already has all the data you need integrated and processed. Many organizations have a central data warehouse/lake. If your data service does not need to be responsive to data changes (i.e. serving stale data is ok), then you can avoid the complexity of streaming data and do a regularly scheduled export from the data warehouse into a database and put an ORM on top to serve the API. Such batch processing into a serving layer is a common choice for data services that don't need to respond to data changes in realtime. If you already have all that infrastructure and data integration inside your organization, that might be the quickest way to a data service implementation.

Unlike a data warehouse, DataSQRL immediately processes incoming data streams so that the results are directly available through the API. And DataSQRL removes the need for a serving layer that provides the low-latency and high-throughput access to data that you need for serving concurrent API requests. That makes DataSQRL a better choice for responsive data services or situations where going through the data warehouse takes too much time (in terms of data latency, implementation effort, or political wrangling).

Going through a data warehouse can also be a pain if the data isn't already processed for your needs. Before you start hacking together a bunch of SQL queries, give DataSQRL a try because the convenience of [SQRL](../concepts/sqrl) and the fully automated data management could save you a lot of time. DataSQRL can use the same data pipelines that your data warehouse uses as a data source.

## Custom Data Pipeline

On the other end of the spectrum, your data needs may be so complex that they require a team of data scientists, data engineers, ML specialist, and MLOps to be satisfied. In that case, you likely need a custom data pipeline that glues together multiple data systems and are looking at a pretty big project. 

However, give DataSQRL a quick try and see if it can get the job done. That can save you a lot of trouble. We frequently see organizations that think they need to bring in the whole caboodle of data scientists, data engineers, MLOps, etc to build some simple data analytics into their product. Don't call the Navy to shoot a sparrow.

:::tip

DataSQRL is still young and may be missing a feature that you need for your data service. If that's the case, [place a feature request](/) and we'll get on it.

:::

## Conclusion

If you are building a data API that doesn't need ACID transactions, give DataSQRL a try. It's a pragmatic choice that gets you good results quickly with little effort.

## Wait, but what about X New Technology?

There are a lot of new technologies coming to market that promise to make building data services easier. We are excited about the increased innovation in this space because it is desperately needed.

As you evaluate new technologies that promise to be a one-stop-shop for building data services or APIs, keep the following in mind: Any such system needs to have a streaming component (for realtime data ingest and computation), a data storage component (for serving data), and an API layer (for serving API requests).

* What are they using for each of those components? Are those proven technologies that have stood the test of time? Data technologies are notoriously hard to mature because there are so many failure conditions to address. It usually takes many years of intense development effort to mature a data technology to production quality.
* Can those components be independently operated and scaled? Does your team already have operational expertise to manage those components or is it possible to outsource such management?
* How are these components evolving over time? Are these independent projects that are widely used or is it one team that develops all of them?

Instead of building a new data system, we believe that the compiler approach to building data services is more promising because:

* It relies on existing, proven data technologies and benefits from continuous innovation that's happening in that space.
* It doesn't burden your team with yet another data technology to learn, understand, and operate. Your data infrastructure is already complex enough.
* More fundamentally, we don't need another data technology, we need an abstraction layer that makes existing technologies easier to use.