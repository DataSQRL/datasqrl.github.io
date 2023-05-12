---
slug: types-of-data-problems-transactional-reactive
title: "The Two Core Data Problems for Developers: Transactional & Reactive"
authors: [matthias]
tags: [data]
---

# The Two Core Data Problems for Developers: Transactional & Reactive

## Introduction
Every developer, whether you build applications or backend services, encounters two distinct types of data problems: transactional and reactive. The need to store and retrieve application state is a quintessential example of a transactional data problem. Conversely, when you're processing events or consuming data from external sources, you're confronted with a reactive data problem. 

Knowing which problem you're up against is crucial to selecting the right tools from your developer's kit. It’s important to determine what type of data problem you are dealing with to choose the right tools and approaches for implementing a solution. After all, using a hammer for a screw job can leave you with more than a few cracks to mend.

In this post, we'll guide you on how to differentiate between transactional and reactive data problems and pick the right tools and strategies to solve each of them.

<!--truncate-->

Table of Contents:
* [The Pitfall of Misinterpreting Reactive Problems as Transactional](#pitfall)
* [What are Transactional Data Problems?](#what-tx)
* [Solving Transactional Data Problems](#solve-tx)
* [What are Reactive Data Problems?](#what-rx)
* [Solving Reactive Data Problems](#solve-rx)
* [Conclusion](#conclusion)

## The Pitfall of Misinterpreting Reactive Problems as Transactional {#pitfall}

<img src="/img/blog/arrived_logo.png" alt="Arrived Logo >" width="30%"/>

Let's kick things off with an anecdote from my career. An episode where I mistakenly treated a reactive data problem as a transactional one, resulting in a full-blown application meltdown. Definitely not a shining moment of my career.

Flashback to 2011, I was the backend developer for a sprouting startup named "Arrived". Our vision was to connect people in the real world by using their phone’s location data. That was the time when smartphones started to support geo-fencing and folks thought Foursquare was going to become the next Facebook. Fun times.

We built an iPhone app that allowed users to establish geo-fences and automatically check-in, alerting their connections upon entry. For a brief overview of the app, check out [this brutally hilarious review](https://techcrunch.com/2011/11/10/i-am-a-passenger-and-i-arrive-and-arrived/) from our TechCrunch Disrupt final presentation. While it was soul-crushing at the time, it's quite a fun read in retrospect.

I implemented the backend of the application as a Java web service, complete with a REST API for user creation, user connection management, and alert dispatch. The API primarily dealt with storing and retrieving user states, connections, geo-fences, and more. These are typical transactional data problems: how to maintain your application state in a durable, reliable, and consistent way. To tackle this, I used MySQL as the database and an object-relational mapping library to translate my Java objects to database rows.

All was sailing smoothly until we decided to implement a social feature to enhance the onboarding experience and boost the app's "virality". This feature uploaded a user’s phone contacts to check if any of their contacts were already using Arrived, suggesting them as potential connections.

<img src="/img/blog/arrived_app.png" alt="Arrived Mobile App Screenshot >|" width="30%"/>

That looked like another transactional data problem to me. Or rather, I was oblivious to the existence of other types of data problems and defaulted to it being transactional.

Thus, I embarked on a path that would eventually lead to disaster. The "upload contacts" API call I set up did the following: 
* stored all contact entries in the database, 
* ran a for-loop to match any entry hashes already in the database, 
* added a "potential connection" record to another table in case of a match.

To my credit, the feature worked as intended. I even had a passing test case. But once we launched the feature in production, our database froze.

As it turned out, some users had an expansive social circle with over a thousand contacts. Running a transaction that writes thousands of records and fires off as many read queries on your primary operational database, which also services all your API requests, is a recipe for disaster. Needless to say, the database was not a fan of this idea and promptly crashed.

But my mistake was not a coding error. The code worked fine. The mistake was failing to realize that the “contacts matching feature” was a reactive data problem, not a transactional one. We were ingesting data from an external source - a user’s contact list - and reacting to it by comparing matches against our existing user base.

In the upcoming sections, we'll delve deeper into the differences between transactional and reactive data problems and how to solve them. We'll also revisit my reactive data problem and explore how a more informed approach could have saved me from a full-blown, hair-on-fire database crisis.

We will discuss how I could have solved my reactive data problem better and avoided a hair-on-fire database resurrection after we explore transactional and reactive data problems in more detail and how to distinguish between them.

As for "Arrived", we learned that our most active users were over-vigilant parents monitoring their children, which was not our target audience. Consequently, we had to close shop in less than two years.

## What are Transactional Data Problems? {#what-tx}

Transactional data problems arise when you need to store and retrieve data concurrently while maintaining consistency. Here, "concurrently" refers to the simultaneous reading and writing of data by multiple threads or users. The trick is to ensure that data remains consistent throughout this flurry of updates.

There are two forms of inconsistencies we need to avoid. The first relates to upholding application constraints. For instance, if a username is required to be unique, we cannot allow two user records with identical usernames. This would be inconsistent with our application's unique username constraint. We may have several such constraints, like "account balances can't be negative," or "each product id in the orders table must correspond to an existing row in the product table."

The second inconsistency type relates to multiple updates triggered by a single request. We want to dodge situations where only some updates are stored. It's an all-or-nothing game - we either want all updates to be stored or none at all. For example, a request to transfer $100 from account A to account B requires updating both account balances. If only account A's balance is updated while account B's update fails, we've got a magical disappearing act of money.

Ensuring data consistency while managing concurrent user updates can be quite a challenge. You might encounter scenarios where two users try to register with the same username simultaneously or two users attempt to withdraw from the same account, causing the balance to plummet below zero. Situations like these are why data storage and retrieval often turn into a "problem" for developers.

Transactional data problems typically surface when storing state for applications that multiple users can access concurrently, or when building CRUD APIs.

## Solving Transactional Data Problems {#solve-tx}

The panacea for transactional data problems? Databases. Developers harness the power of databases to efficiently handle the concurrency and consistency issues associated with transactional data problems.

However, databases aren't one-size-fits-all. They differ in the types of consistency and concurrency guarantees they offer. If you're using any of the popular relational databases (like Postgres, MySQL, SqlServer, Oracle, and Aurora), breathe easy. They're likely equipped with all the support you need. For other databases, it's worth checking what exactly they support to avoid surprises down the line.

Alongside the choice of database, you'll also want to equip yourself with a tool that simplifies interactions with the database from your programming language. Wrestling with databases directly can be cumbersome, requiring the use of drivers, query string writing, and data mapping. If you're working in an object-oriented programming language, an object-relational mapping layer (or ORM for short) can be your best friend, translating seamlessly between your application and the database. If not, seek out an SDK or database abstraction layer that's compatible with your chosen database.

## What are Reactive Data Problems? {#what-rx}

You have a Reactive data problem when your data source is outside your application or service's control, and you're required to respond to the data quickly. Let’s break this down.

### Unconstrained Data

When the data originates from an external source or isn't subject to any application constraints, your application does not control the data source. External data sources could include other systems like logs, message queues, files, external databases, or applications. Here, the data pre-exists independently of your control. For instance, a user's contact list is an external data source.

Moreover, data could be uncontrolled even within your application, provided it's free of any constraints. This includes events that occur organically within your application, such as a user clicking a button or visiting a webpage. These events aren't within your direct control - they just happen.

This is a stark contrast to transactional data problems, where the key challenge lies in maintaining data consistency amidst concurrent updates.

### The Need for Speed

Another characteristic of reactive data problems is the necessity for swift data processing and result generation. This quick reaction is twofold: it must occur shortly after receiving the data, and it involves computational processing of that data.

Take the contacts matching feature in Arrived, for instance. The goal was to encourage users to establish connections during the signup process. Consequently, we had to compute the matches within a few seconds - before the user completed the signup and exited the app.

How swift does this reaction need to be to qualify as "quick"? It varies according to your use case. Customer-facing use cases typically demand reactions within seconds to minutes, tops. For use cases like fraud detection, system automation, or financial transactions, you may need to respond within milliseconds. If the results can wait for hours or even days, it wouldn't qualify as quick.

The "reaction" element primarily involves generating a response to incoming data, which could either serve back to the user or trigger an action. This could mean processing a user's shopping cart to suggest other products they might like, analyzing system metrics to detect potential overload, feeding user activity into a machine learning model for a personalized journey, or evaluating if a transaction request is fraudulent. In each instance, we take a piece of data, evaluate it within the application context, and produce a useful response.

In essence, reactive data problems call for quick, efficient responses to one or multiple data sources. The challenges arise from the need to carry out data-intensive computations rapidly, efficiently, and robustly.

Reactive data problems commonly crop up in use cases such as:
* Personalization or recommendation engines
* User experience features
* Metrics or time-series analysis
* Machine learning features
* Fraud detection
* Cybersecurity and intrusion detection

## How do you solve Reactive Data Problems? {#solve-rx}

Let's circle back to the reactive data problem of the contacts matching feature. My initial solution involved splitting the transaction into several parts, moving some computation to a background thread, fine-tuning the database schema, and writing a hefty amount of SQL. This strategy was time-consuming, fragile, and a nightmare to maintain. A colleague shrugged it off with “I’ve no idea what’s happening here, but I guess it works…”

The problem? When all you have is a hammer, everything looks like a nail. So, I tried hammering that screw into the wall. As expected, it was neither pretty nor productive.

<img src="/img/blog/reactive_data_layer_arrived.svg" alt="A Reactive Data Layer Architecture >" width="40%"/>

To solve reactive data problems more effectively, we need to reimagine our data layer architecture. Let’s give our database some company by introducing additional components that make it easier to process data reactively:
* **Queue**: Introducing a persisted message queue (or log) into our architecture can ease asynchronous data processing. This robust, scalable tool allows you to write incoming data to the queue and process it when resources are available, significantly simplifying multi-step data processing.
* **Stream Processor**: This is a framework dedicated to managing consecutive data processing steps, from data ingestion (reading data off the queue or from external systems) to data transformation, to writing the results to the database. This framework handles all task scheduling and execution, allowing you to focus on the actual processing logic.
* **Server**: This component accepts incoming data, writes it to the queue, and serves the processed data from the database. Acting as the entry and exit point for the reactive data layer, the server brings everything together. You can integrate this functionality into an existing API server implementation or create a standalone server to isolate the reactive data use case into its own backend service.

To improve the contact matching feature, we finally adopted a reactive data architecture as illustrated in the diagram above. Here's how the data flowed:

1. The server received the submitted contacts and wrote the entire data blob to a persisted messaging queue.
2. Three asynchronous tasks ran in the processing framework:
    1. *Splitter*: This task read an entire contacts list from the queue, divided it into chunks of a maximum of 50 contacts, and wrote the resulting chunks back to the queue under a different topic.
    2. *Storer*: This task read contact chunks from the queue and wrote the contact entries as individual records to the database.
    3. *Matcher*: This task read contact chunks, matched the contact entries against the user table, and wrote the found matches to the database.
3. The database stored contact entries and contact matches in a separate logical database, isolated from the main operational database serving the CRUD API of the Arrived app.
4. The server responded to "recommended contacts" requests during the signup process by running a query against the database that combined all pre-computed matches for the user with matches from checking the user's phone number against previously stored contact entries.

This solution was not only efficient and robust but also easier to maintain. Above all, it allowed us to concentrate on enhancing the feature instead of hacking around the database.

So, here's the key takeaway: instead of grappling with reactive data problems using a database alone, build a reactive data layer. It will save you considerable time and frustration.

If building a custom data layer seems intimidating, consider checking out DataSQRL. It's a tool that constructs reactive data layers for you. We've been developing DataSQRL to assist developers in resolving reactive data problems quickly and efficiently. We would love to hear your feedback!

## Conclusion

| Type of Data Problem      | Transactional                 | Reactive                                  |
|---------------------------|-------------------------------|-------------------------------------------|
| Response time expectation | Milliseconds                  | Milliseconds to minutes                   |
| Main challenge            | Consistency under concurrency | Quick Reactions                           |
| Source of Data            | Maintained by application     | External or events                        |
| Consistency Requirements  | Data constraints & atomicity  | Synchronization in time                   |
| **Data Layer Solution**   | **Database + ORM**            | **Queue + Processor + Database + Server** |

Transactional data problems arise when your application requires concurrent storage and retrieval of consistent data. On the other hand, reactive data problems occur when your application needs to quickly respond to data from external sources or events. Recognizing the distinction between these two types of data issues is crucial to implementing the most effective solution.

For transactional data problems, a data layer comprising a database and an Object-Relational Mapping (ORM) tool is often the best solution. On the contrary, reactive data problems are more efficiently addressed with a data layer that includes a queue, stream processor, database, and server. Understanding these distinctions and applying the appropriate solutions can significantly improve the efficiency and robustness of your data layer.
