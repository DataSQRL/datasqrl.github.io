---
title: "DataSQRL Comparison"
---

# How does DataSQRL compare to other Data Technologies?

<img src="/img/index/undraw_decide_sqrl.svg" alt="When to use DataSQRL >" width="300"/>

You get that [DataSQRL](../concepts/datasqrl) is a tool for building [data services](../concepts/data-service) from streaming data sources, but you are wondering if it's the right tool for your project. And how does it compare to other data technologies you are considering to get the work done?

While it depends a lot on the specifics of your project, the following heuristics are generally useful:

1. If your data needs are mostly met by mapping database records onto objects, then use a database with an ORM.
2. If all the data you need is in a single database, try to build a data service directly on top of that database and evaluate if the performance is good enough.
3. If all the data is already prepared for you in a data warehouse and you don't need to be responsive to data changes, then regularly export the data from the warehouse to a database and use an ORM.
4. For anything else, try DataSQRL.

Now, those are pretty conservative heuristics for projects where your career is on the line. If you are working on an exploratory project, you should definitely play around with DataSQRL. If you need to build a data service on a tight timeline with little margin for error, you should follow those heuristics.

Here is the deal: For simple data services, a database is often good enough. Databases have been around for decades, are very robust, and widely available. If your data is already in a database (or it's trivial to get it there), then the database should be your first choice.

If your data needs are complex enough that a database will be taxed significantly or using a database becomes too unproductive (e.g. you are implementing stored procedures, hand tuning queries, denormalizing data, etc), then give DataSQRL a try. DataSQRL is specifically designed to build efficient data services with little effort and can save you a lot of time and headache.

You also want to start with DataSQRL if you need to integrate data from multiple sources. Doing so in a database is a lot of pain. DataSQRL's data connectors, import manager, automatic data type discovery, and schema management will save you a lot of time and a lot of manual effort.

But before you chose DataSQRL, check whether your data warehouse (or data lake or analytics engine) already has all the data you need integrated and processed. Many organizations have a central data warehouse/lake. If your data service does not need to be responsive to data changes (i.e. serving stale data is ok), then you can avoid the complexity of streaming data and do a regularly scheduled export from the data warehouse into a database and put an ORM on top to serve the API. Such batch processing into a serving layer is a common choice for data services that don't need to respond to data changes in realtime. If you already have all that infrastructure and data integration inside your organization, that might be the quickest way to a data service implementation.

Unlike a data warehouse, DataSQRL immediately processes incoming data streams so that the results are directly available through the API. And DataSQRL removes the need for a serving layer that provides the low-latency and high-throughput access to data that you need for serving concurrent API requests. That makes DataSQRL a better choice for responsive data services or situations where going through the data warehouse takes too much time (in terms of data latency, implementation effort, or political wrangling).

On the other end of the spectrum, your data needs may be so complex that they require a team of data scientists, data engineers, ML specialist, MLOps to be satisfied. In that case, you likely need a custom data pipeline that glues together multiple data systems and are looking at a pretty big project. <br />
However, give DataSQRL a quick try and see if it can get the job done. That can save you a lot of trouble. We frequently see organizations that think they need to bring in the whole caboodle of data scientists, data engineers, MLOps, etc to build some simple data analytics into their product. Don't call the Navy to shoot a sparrow.

:::tip

DataSQRL is still young and may be missing a feature that you need for your data service. If that's the case, [place a feature request](/) and we'll get on it.

:::

The TL;DR of all this: If you need more than a CRUD app, don't have a database or data warehouse that's ready to go, and are not trying to compete with Google's algorithms, then DataSQRL is a pragmatic choice that gets you good results quickly with little effort.