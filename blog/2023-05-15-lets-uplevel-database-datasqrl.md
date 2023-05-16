---
slug: lets-uplevel-database-datasqrl
title: "Let's Uplevel Our Database Game: Meet DataSQRL"
authors: [matthias]
tags: [DataSQRL, community]
---

# Let’s Uplevel Our Database Game: Meet DataSQRL!

**We need to make it easier to build data-driven applications.** Databases are great if all your application needs is storing and retrieving data. But if you want to build anything more interesting with data - like serving users recommendations based on the pages they are visiting, detecting fraudulent transactions on your site, or computing real-time features for your machine learning model - you end up building a ton of custom code and infrastructure around the database.

<a href="https://www.youtube.com/watch?v=m5uYtBFSmUs&ab_channel=DataSQRL" target="_blank">
<img src="/img/blog/uplevel_play_image.jpg" alt="Watch the video version >|" width="50%"/>
</a>

You need a queue like Kafka to hold your events, a stream processor like Flink to process data, a database like Postgres to store and query the result data, and an API layer to tie it all together.

And that’s just the price of admission. To get a functioning data layer, you need to make sure that all these components talk to each other and that data flows smoothly between them. Schema synchronization, data model tuning, index selection, query batching … all that fun stuff.

The point is, you need to do a ton of data plumbing if you want to build a data-driven application. All that data plumbing code is time-consuming to develop, hard to maintain, and expensive to operate.

We need to make building with data easier. That’s why we are sending out this call to action to uplevel our database game. **Join us in figuring out how to simplify the data layer.**

We have an idea to get us started: Meet DataSQRL.

<!--truncate-->

<img src="/img/full_squirrel.svg" alt="DataSQRL >" width="30%"/>


## Introducing DataSQRL

DataSQRL is a build tool that compiles your application’s data layer from a high-level data development language, dubbed SQRL.

Our goal is to create a new abstraction layer above the low-level languages often used in data layers, allowing a compiler to handle the tedious tasks of data plumbing, infrastructure assembly, and configuration management.

Much like how you use high-level languages such as Javascript, Python, or Java instead of Assembly for software development, we believe a similar approach should be used for data. 

SQRL is designed to be a developer-friendly version of SQL, maintaining familiar syntax while adding features necessary for building data-driven applications, like support for nested data and data streams.

Check out this simple SQRL script to build a recommendation engine from clickstream data.

```sql
IMPORT datasqrl.example.clickstream.Click;  -- Import data
/* Find next page visits within 10 minutes */
VisitAfter := SELECT b.url AS beforeURL, a.url AS afterURL,
                     a.timestamp AS timestamp
        FROM Click b JOIN Click a ON b.userid=a.userid AND
                b.timestamp <= a.timestamp AND
                b.timestamp >= a.timestamp - INTERVAL 10 MINUTE;
/* Recommend pages that are visited shortly after */
Recommendation := SELECT beforeURL AS url, afterURL AS rec,
                         count(1) AS frequency FROM VisitAfter
        GROUP BY url, rec ORDER BY url ASC, frequency DESC;
```

This little SQRL script imports clickstream data, identifies pairs of URLs visited within a 10-minute interval, and compiles these pairs into a set of recommendations, ordered by the frequency of co-visits.

<img src="/img/reference/reactive_data_layer.svg" alt="Reactive Data Layer Compiled by DataSQRL >" width="30%"/>

DataSQRL then takes this script and compiles it into an integrated data layer, complete with all necessary data plumbing pre-installed. It configures access to the clickstream. It generates an executable for the stream processor that ingests, validates, joins, and aggregates the clickstream data. It creates the data model and writes the aggregated data to the database. It synchronizes timestamps and schemas between all the components. And it compiles a server executable that queries the database and exposes the computed recommendations through a GraphQL API.

**The bottom line: These 9 lines of SQRL code can replace hundreds of lines of complex data plumbing code and save hours of infrastructure setup.**

We believe that all this low-level data plumbing work should be done by a compiler since it is tedious, time-consuming, and error-prone. Let’s uplevel our data game, so we can focus on **what** we are trying to build with data and less on the **how**.

## Join Us on this Journey

<img src="/img/blog/undraw_collaboration.svg" alt="Join DataSQRL Community >" width="50%"/>


We have the ambitious goal of designing a higher level of abstraction for data to enable millions of developers to build data-driven applications.

We [just released](https://github.com/DataSQRL/sqrl/releases/tag/v0.1.0) the first version of DataSQRL, and we recognize that we are at the beginning of a long, long road. We need your help. If you are a data nerd, like building with data, or wish it was easier, please [join us on this journey](/community). DataSQRL is an open-source project, and all development activity is transparent.

Here are some ideas for how you can contribute:

* Share your thoughts: Do you have ideas on how we can improve the SQRL language or the DataSQRL compiler? Jump into [our discord](https://discord.gg/49AnhVY2w9) and let us know!
* Test the waters: Do you like playing with new technologies? Try out [DataSQRL](/docs/getting-started/quickstart) and let us know if you find any bugs or missing features.
* Spread the word: Think DataSQRL has potential? Share this blog post and [star](https://github.com/DataSQRL/sqrl) DataSQRL on [Github](https://github.com/DataSQRL/sqrl). Your support can help us reach more like-minded individuals.
* Code with us: Do you enjoy contributing to open-source projects? Dive into [the code](https://github.com/DataSQRL/sqrl) with us and pick up a [ticket](https://github.com/DataSQRL/sqrl/issues).

Let’s uplevel our database game. With your help, we can make building with data fun and productive.

## More Information

You probably have a ton of questions now. How do I import my own data? How do I customize the API? How do I deploy SQRL scripts to production? How do I import functions from my favorite programming language?

Those are all great questions. Check out [datasqrl.com](/) for answers, [join the community](/community) to ask us, or wait for a future blog post where we dive into all of those topics.
