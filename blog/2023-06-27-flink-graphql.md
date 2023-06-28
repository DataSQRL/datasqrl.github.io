---
slug: flink-graphql-peanut-butter-jelly
title: "Why Apache Flink and GraphQL Are like Peanut Butter and Jelly"
authors: [matthias]
tags: [GraphQL, Flink, DataSQRL]
---

# Why Apache Flink and GraphQL Are like Peanut Butter and Jelly

In the world of data-driven applications, Apache Flink is a powerful tool that transforms streams of raw data into valuable results. But how do you make these results accessible to users, customers, or consumers of your application? Most often, we found the answer to that question was: GraphQL. GraphQL gives users a flexible way to query for data, makes it easy to ingest events, and supports pushing data updates to the user in real-time.

<img src="/img/blog/flink_graphql.svg" alt="Flink hearts GraphQL >" width="40%"/>

In this blog post, we’ll discuss what GraphQL is and why it is a good fit for Flink applications. Like peanut butter and jelly, Flink and GraphQL don’t seem related but the combination is surprisingly good.

Table of Contents:
 * [How To Access Flink Results?](#access)
 * [What is GraphQL?](#graphql)
 * [Benefit #1: Flexible Access for Data APIs](#benefit1)
 * [Benefit #2: Realtime Data Updates with GraphQL Subscriptions](#benefit2)
 * [Benefit #3: Simplify Event Ingestion with GraphQL Mutations](#benefit3)
 * [Downsides of using GraphQL in Flink Applications](#downsides)
 * [How to Build GraphQL APIs with Flink](#howto)


## How To Access Flink Results? {#access}

Quick background before we dive into the details. [Apache Flink](https://flink.apache.org/) is a scalable stream processor that can ingest data from multiple sources, integrate, transform, and analyze the data, and produce results in real time. Apache Flink is the brain of your data processing operations.

<img src="/img/external/flink_logo.svg" alt="Flink Logo >" width="30%"/>

But Apache Flink cannot make the processed results accessible to users of your application. Flink has an API, but that API is only for administering and monitoring Flink jobs. It doesn’t give outside users access to the result data. In other words, Flink is a brain without a mouth to communicate results externally.

To make results accessible, you have to write them somewhere and expose them through an interface. But how? We have built a number of Flink applications and in most cases, the answer was: write the results to a database or Kafka and expose them through an API. Over the years, our default choice for the API has become GraphQL. Here’s why.

<!--truncate-->

## What is GraphQL? {#graphql}

First, let's talk about [GraphQL](https://graphql.org/), the data query and manipulation language that's been shaking up the API world.

<img src="/img/external/graphql_logo.svg" alt="GraphQL Logo >" width="30%"/>

GraphQL is a robust alternative to REST for building APIs. It provides a complete and understandable description of your data in the API and gives clients the power to ask for exactly what they need. This means no more over-fetching of data or making multiple requests, which can be an issue with REST.

In contrast to REST, which uses a separate URL for each resource, GraphQL operates over a single endpoint using HTTP. This simplifies the process of making API calls, as you don't have to construct multiple URLs. Furthermore, GraphQL uses a type system to describe data, which can make your API calls more predictable and easier to debug.

Like REST, GraphQL is mature and well-established with lots of tooling and client libraries for pretty much all programming languages under the sun.

Okay, so GraphQL allows you to build APIs that are easy to use. But what makes it such a good match for Apache Flink applications? GraphQL has three key features that unlock the power of Flink’s data processing: flexible queries, subscriptions, and mutations. Let’s look at those in more detail.

## 1. Flexible Access for Data APIs {#benefit1}

Imagine you're at an all-you-can-eat buffet, but instead of food, it's data. You can pick and choose exactly what you want and how much of it you need. That's what GraphQL does for you when it comes to exposing data APIs. Developers can query the processed streaming data however they need it, without being constrained by predefined endpoints.

Other API standards like REST or gRPC are like ordering dishes from a menu. You can only access the endpoints that are defined in the API. That’s fine for many applications, but for data APIs, there are many possible combinations of data records users want to query. So, you either define a lot of endpoints or shift the burden onto the user to stitch their desired result sets together. In the end, it’s more work and a lot of food gets wasted.

But wait, there's more! GraphQL not only allows you to select the data you need, but it also simplifies the process of combining data from multiple sources. This means you can easily merge data from various microservices and databases, creating a seamless and unified experience for developers.

In a nutshell, GraphQL empowers developers by providing a flexible, powerful, and efficient way to access the data they need.

## 2. Realtime Data Updates with GraphQL Subscriptions {#benefit2}

Remember those walkie-talkies you used to play with as a kid? You'd press the button, and your voice would be magically transmitted to your friend's walkie-talkie in real-time. Well, GraphQL subscriptions are kind of like that, but for data.

Subscriptions allow Flink developers to push real-time data updates to consumers of the API, ensuring that everyone is always up-to-date with the latest information. It's like having a walkie-talkie channel dedicated to data updates, so you never miss a beat.

But that's not all! GraphQL subscriptions also enable developers to filter and control the data they receive. This means that each consumer can specify exactly what data they want to be updated on, reducing the amount of unnecessary information being transmitted.

In essence, GraphQL subscriptions provide a powerful and efficient way to keep everyone in the loop with real-time data updates. It's like having a personal news ticker, tailored specifically to your needs.

## 3. Simplify Event Ingestion with GraphQL Mutations  {#benefit3}

Mutations make it simple to ingest events into your system, streamlining the process and keeping everything running smoothly. GraphQL mutations support complex event payloads that are defined as input types directly in the API specification, making it easy for users of your API to submit data.

GraphQL was developed with mobile applications in mind, where the connection between phone and server can be spotty. GraphQL mutations follow an event-centric model to separate the state of the mobile device from the state on the server and ensure continued operations when the connection between the two gets interrupted. That’s a perfect match for event-driven microservices and streaming applications which follow the same model for decoupling.

And unlike REST, you don’t have to worry about HTTP methods and state management which add a level of complexity you don’t need for event-driven applications.

In summary, GraphQL mutations structure data ingestion and updates as events - just like Flink.

## Downsides of using GraphQL in Flink Applications {#downsides}

Despite the many advantages of using GraphQL with Apache Flink, it's important to note that there are some potential downsides to this approach. Like any technology, GraphQL is not a silver bullet and there are certain challenges that developers may encounter when implementing it in their Flink applications.

Firstly, the very flexibility that makes GraphQL so appealing can also present challenges. The ability to request exactly the data you need means that your backend has to be prepared to handle a potentially wide variety of query structures. This can be difficult to implement, and it requires careful consideration of how your database is structured and indexed. We’ve seen a single missing index bring down an entire application because the database became overloaded. Not a fun day.

Secondly, while GraphQL's subscription model is a powerful tool for delivering real-time updates, it can also be difficult to implement with low latency. Especially in high-volume data environments like those typically handled by Flink. Ensuring that updates are delivered to clients as quickly as possible, without overwhelming the server or the network, can be a complex task that requires careful planning and optimization.

However, these challenges are not insurmountable. With the right tooling and a thoughtful approach to implementation, it's possible to take full advantage of the power and flexibility that GraphQL offers without optimizing the implementation by hand. DataSQRL is a tool that optimizes your Flink jobs as well as generates the database schema and index structures for your GraphQL API, compiling an entire event-driven microservice and saving you a ton of work. More on DataSQRL below.

## How to Build GraphQL APIs with Flink {#howto}

To sum up, the combination of Apache Flink and GraphQL provides a potent solution for data-driven applications. Like peanut butter and jelly, these two distinct technologies complement each other and create a powerful synergy. Flink processes the data, and GraphQL exposes it in a flexible, efficient, and real-time manner. GraphQL’s ability to provide flexible access to data APIs, push real-time data updates through subscriptions, and simplify event ingestion with mutations, makes it an ideal interface for Flink's data processing capabilities. Together, they enable developers to build robust, efficient, and user-friendly data applications. So, whether you're building a real-time analytics platform, a complex event-driven application, or a data-intensive microservice, consider the Flink-GraphQL combo.

<img src="/img/full_squirrel.svg" alt="DataSQRL >" width="30%"/>

By now you are probably hungry to learn more. It may just be all the food analogies, but if you want to learn how to build GraphQL APIs with Flink then read on.

You can build Flink+GraphQL microservices by hand, but like many things in software, it gets a lot easier with the appropriate tooling. We recommend using [DataSQRL](/) for building GraphQL APIs on top of Flink. DataSQRL compiles the SQL that defines your data processing in Flink and your GraphQL API into a complete microservice that integrates these components efficiently.

Of course, we are biased.  But, who knows, DataSQRL might save you a ton of work, time, and frustration.

Check out the [Quickstart tutorial](/docs/getting-started/quickstart) for a quick overview of how to consume and ingest data, process it with Flink, and expose the results through a GraphQL API.
Looking for a step-by-step guide to building your own GraphQL APIs with Flink? Check out the [introductory tutorial](/docs/getting-started/intro/overview) for a detailed explanation of all the steps.

And if you run into any issues or have questions, don’t hesitate to [reach out](/community).

Happy coding, and may the match of GraphQL and Apache Flink turn your application into a delicious experience for your users!
