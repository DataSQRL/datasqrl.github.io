"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"datasqrl-01-release","metadata":{"permalink":"/blog/datasqrl-01-release","editUrl":"https://github.com/DataSQRL/datasqrl.github.io/edit/main/blog/2023-05-11-datasqrl-v0.1.md","source":"@site/blog/2023-05-11-datasqrl-v0.1.md","title":"DataSQRL 0.1: A SQRL is born","description":"\\" width=\\"40%\\"/>","date":"2023-05-11T00:00:00.000Z","formattedDate":"May 11, 2023","tags":[{"label":"DataSQRL","permalink":"/blog/tags/data-sqrl"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":1.63,"hasTruncateMarker":true,"authors":[{"name":"Daniel Henneberger","title":"Founder of DataSQRL","url":"https://github.com/henneberger","imageURL":"/img/headshots/daniel1.png","key":"daniel"}],"frontMatter":{"slug":"datasqrl-01-release","title":"DataSQRL 0.1: A SQRL is born","authors":["daniel"],"tags":["DataSQRL","release"]},"nextItem":{"title":"The Two Core Data Problems for Developers: Transactional & Reactive","permalink":"/blog/types-of-data-problems-transactional-reactive"}},"content":"<img src=\\"/img/blog/datasqrlv0.1.jpeg\\" alt=\\"DataSQRL v0.1 release: A SQRL is Born >\\" width=\\"40%\\"/>\\n\\nAfter two long years of research, development, and teamwork, we\'re excited to announce DataSQRL 0.1! [DataSQRL](/) is a tool for building APIs from your data streams and datasets by defining your use case in a [SQL dialect](/docs/getting-started/concepts/sqrl).\\n\\nThis is our first \u201cofficial\u201d release of DataSQRL after many months of testing and bug-fixing. <br />\\nCheck out the [release notes](https://github.com/DataSQRL/sqrl/releases/tag/v0.1.0) on GitHub for a rundown of all the features.\\n\\n\x3c!--truncate--\x3e\\n\\n## Our Vision\\n\\nEvery time we wanted to build a new use case for our application and expose a data API, we found ourselves getting distracted. Distracted by all the orchestration, the technology choices, all the micro-decisions, and the \'plumbing\' that goes into the modern data layer. So we up-leveled the abstraction and kept it simple. We [designed DataSQRL](/docs/getting-started/concepts/why-datasqrl) to handle those nitty-gritty details, so you could stay focused on what truly mattered - building cool things.\\n\\n## Simplicity Through SQL\\n\\nWe\'ve kept [DataSQRL true to SQL](/docs/getting-started/concepts/sqrl), so it feels familiar and easy to use. We enhanced and modernized the language while maintaining the simplicity of SQL queries. No more wrestling with subqueries, window functions, or repetitive joins - just straightforward SQL.\\n\\n## Flexible APIs\\n\\nOne size doesn\'t fit all when it comes to APIs. We made DataSQRL non-opinionated, giving you the freedom to use your [preferred GraphQL schema](/docs/reference/api/graphql/design) and customize your query patterns with SQRL scripts.\\n\\n## Our Road Ahead\\n\\nWe\'re seeking [your feedback](/community) to help shape the future of DataSQRL. Our current architecture supports a range of platforms, and we\'re working on making it more extensible and useful. Your input is invaluable as we continue to refine and expand DataSQRL\'s capabilities.\\n\\n## Conclusion\\n\\nThe only danger now is that your boss might think he can start coding again. [Join us](/community) as we explore the story behind DataSQRL, its impact on the world of data processing, and the exciting possibilities it holds for the future."},{"id":"types-of-data-problems-transactional-reactive","metadata":{"permalink":"/blog/types-of-data-problems-transactional-reactive","editUrl":"https://github.com/DataSQRL/datasqrl.github.io/edit/main/blog/2023-05-01-two-types-of-data-problems-transactional-reactive.md","source":"@site/blog/2023-05-01-two-types-of-data-problems-transactional-reactive.md","title":"The Two Core Data Problems for Developers: Transactional & Reactive","description":"Introduction","date":"2023-05-01T00:00:00.000Z","formattedDate":"May 1, 2023","tags":[{"label":"data","permalink":"/blog/tags/data"}],"readingTime":12.825,"hasTruncateMarker":true,"authors":[{"name":"Matthias Broecheler","title":"Founder of DataSQRL","url":"https://github.com/mbroecheler","imageURL":"/img/headshots/matthias1.png","key":"matthias"}],"frontMatter":{"slug":"types-of-data-problems-transactional-reactive","title":"The Two Core Data Problems for Developers: Transactional & Reactive","authors":["matthias"],"tags":["data"]},"prevItem":{"title":"DataSQRL 0.1: A SQRL is born","permalink":"/blog/datasqrl-01-release"},"nextItem":{"title":"Hello, World!","permalink":"/blog/welcome"}},"content":"## Introduction\\nEvery developer, whether you build applications or backend services, encounters two distinct types of data problems: transactional and reactive. The need to store and retrieve application state is a quintessential example of a transactional data problem. Conversely, when you\'re processing events or consuming data from external sources, you\'re confronted with a reactive data problem. \\n\\nKnowing which problem you\'re up against is crucial to selecting the right tools from your developer\'s kit. It\u2019s important to determine what type of data problem you are dealing with to choose the right tools and approaches for implementing a solution. After all, using a hammer for a screw job can leave you with more than a few cracks to mend.\\n\\nIn this post, we\'ll guide you on how to differentiate between transactional and reactive data problems and pick the right tools and strategies to solve each of them.\\n\\n\x3c!--truncate--\x3e\\n\\nTable of Contents:\\n* [The Pitfall of Misinterpreting Reactive Problems as Transactional](#pitfall)\\n* [What are Transactional Data Problems?](#what-tx)\\n* [Solving Transactional Data Problems](#solve-tx)\\n* [What are Reactive Data Problems?](#what-rx)\\n* [Solving Reactive Data Problems](#solve-rx)\\n* [Conclusion](#conclusion)\\n\\n## The Pitfall of Misinterpreting Reactive Problems as Transactional {#pitfall}\\n\\n<img src=\\"/img/blog/arrived_logo.png\\" alt=\\"Arrived Logo >\\" width=\\"30%\\"/>\\n\\nLet\'s kick things off with an anecdote from my career. An episode where I mistakenly treated a reactive data problem as a transactional one, resulting in a full-blown application meltdown. Definitely not a shining moment of my career.\\n\\nFlashback to 2011, I was the backend developer for a sprouting startup named \\"Arrived\\". Our vision was to connect people in the real world by using their phone\u2019s location data. That was the time when smartphones started to support geo-fencing and folks thought Foursquare was going to become the next Facebook. Fun times.\\n\\nWe built an iPhone app that allowed users to establish geo-fences and automatically check-in, alerting their connections upon entry. For a brief overview of the app, check out [this brutally hilarious review](https://techcrunch.com/2011/11/10/i-am-a-passenger-and-i-arrive-and-arrived/) from our TechCrunch Disrupt final presentation. While it was soul-crushing at the time, it\'s quite a fun read in retrospect.\\n\\nI implemented the backend of the application as a Java web service, complete with a REST API for user creation, user connection management, and alert dispatch. The API primarily dealt with storing and retrieving user states, connections, geo-fences, and more. These are typical transactional data problems: how to maintain your application state in a durable, reliable, and consistent way. To tackle this, I used MySQL as the database and an object-relational mapping library to translate my Java objects to database rows.\\n\\nAll was sailing smoothly until we decided to implement a social feature to enhance the onboarding experience and boost the app\'s \\"virality\\". This feature uploaded a user\u2019s phone contacts to check if any of their contacts were already using Arrived, suggesting them as potential connections.\\n\\n<img src=\\"/img/blog/arrived_app.png\\" alt=\\"Arrived Mobile App Screenshot >|\\" width=\\"30%\\"/>\\n\\nThat looked like another transactional data problem to me. Or rather, I was oblivious to the existence of other types of data problems and defaulted to it being transactional.\\n\\nThus, I embarked on a path that would eventually lead to disaster. The \\"upload contacts\\" API call I set up did the following: \\n* stored all contact entries in the database, \\n* ran a for-loop to match any entry hashes already in the database, \\n* added a \\"potential connection\\" record to another table in case of a match.\\n\\nTo my credit, the feature worked as intended. I even had a passing test case. But once we launched the feature in production, our database froze.\\n\\nAs it turned out, some users had an expansive social circle with over a thousand contacts. Running a transaction that writes thousands of records and fires off as many read queries on your primary operational database, which also services all your API requests, is a recipe for disaster. Needless to say, the database was not a fan of this idea and promptly crashed.\\n\\nBut my mistake was not a coding error. The code worked fine. The mistake was failing to realize that the \u201ccontacts matching feature\u201d was a reactive data problem, not a transactional one. We were ingesting data from an external source - a user\u2019s contact list - and reacting to it by comparing matches against our existing user base.\\n\\nIn the upcoming sections, we\'ll delve deeper into the differences between transactional and reactive data problems and how to solve them. We\'ll also revisit my reactive data problem and explore how a more informed approach could have saved me from a full-blown, hair-on-fire database crisis.\\n\\nWe will discuss how I could have solved my reactive data problem better and avoided a hair-on-fire database resurrection after we explore transactional and reactive data problems in more detail and how to distinguish between them.\\n\\nAs for \\"Arrived\\", we learned that our most active users were over-vigilant parents monitoring their children, which was not our target audience. Consequently, we had to close shop in less than two years.\\n\\n## What are Transactional Data Problems? {#what-tx}\\n\\nTransactional data problems arise when you need to store and retrieve data concurrently while maintaining consistency. Here, \\"concurrently\\" refers to the simultaneous reading and writing of data by multiple threads or users. The trick is to ensure that data remains consistent throughout this flurry of updates.\\n\\nThere are two forms of inconsistencies we need to avoid. The first relates to upholding application constraints. For instance, if a username is required to be unique, we cannot allow two user records with identical usernames. This would be inconsistent with our application\'s unique username constraint. We may have several such constraints, like \\"account balances can\'t be negative,\\" or \\"each product id in the orders table must correspond to an existing row in the product table.\\"\\n\\nThe second inconsistency type relates to multiple updates triggered by a single request. We want to dodge situations where only some updates are stored. It\'s an all-or-nothing game - we either want all updates to be stored or none at all. For example, a request to transfer $100 from account A to account B requires updating both account balances. If only account A\'s balance is updated while account B\'s update fails, we\'ve got a magical disappearing act of money.\\n\\nEnsuring data consistency while managing concurrent user updates can be quite a challenge. You might encounter scenarios where two users try to register with the same username simultaneously or two users attempt to withdraw from the same account, causing the balance to plummet below zero. Situations like these are why data storage and retrieval often turn into a \\"problem\\" for developers.\\n\\nTransactional data problems typically surface when storing state for applications that multiple users can access concurrently, or when building CRUD APIs.\\n\\n## Solving Transactional Data Problems {#solve-tx}\\n\\nThe panacea for transactional data problems? Databases. Developers harness the power of databases to efficiently handle the concurrency and consistency issues associated with transactional data problems.\\n\\nHowever, databases aren\'t one-size-fits-all. They differ in the types of consistency and concurrency guarantees they offer. If you\'re using any of the popular relational databases (like Postgres, MySQL, SqlServer, Oracle, and Aurora), breathe easy. They\'re likely equipped with all the support you need. For other databases, it\'s worth checking what exactly they support to avoid surprises down the line.\\n\\nAlongside the choice of database, you\'ll also want to equip yourself with a tool that simplifies interactions with the database from your programming language. Wrestling with databases directly can be cumbersome, requiring the use of drivers, query string writing, and data mapping. If you\'re working in an object-oriented programming language, an object-relational mapping layer (or ORM for short) can be your best friend, translating seamlessly between your application and the database. If not, seek out an SDK or database abstraction layer that\'s compatible with your chosen database.\\n\\n## What are Reactive Data Problems? {#what-rx}\\n\\nYou have a Reactive data problem when your data source is outside your application or service\'s control, and you\'re required to respond to the data quickly. Let\u2019s break this down.\\n\\n### Unconstrained Data\\n\\nWhen the data originates from an external source or isn\'t subject to any application constraints, your application does not control the data source. External data sources could include other systems like logs, message queues, files, external databases, or applications. Here, the data pre-exists independently of your control. For instance, a user\'s contact list is an external data source.\\n\\nMoreover, data could be uncontrolled even within your application, provided it\'s free of any constraints. This includes events that occur organically within your application, such as a user clicking a button or visiting a webpage. These events aren\'t within your direct control - they just happen.\\n\\nThis is a stark contrast to transactional data problems, where the key challenge lies in maintaining data consistency amidst concurrent updates.\\n\\n### The Need for Speed\\n\\nAnother characteristic of reactive data problems is the necessity for swift data processing and result generation. This quick reaction is twofold: it must occur shortly after receiving the data, and it involves computational processing of that data.\\n\\nTake the contacts matching feature in Arrived, for instance. The goal was to encourage users to establish connections during the signup process. Consequently, we had to compute the matches within a few seconds - before the user completed the signup and exited the app.\\n\\nHow swift does this reaction need to be to qualify as \\"quick\\"? It varies according to your use case. Customer-facing use cases typically demand reactions within seconds to minutes, tops. For use cases like fraud detection, system automation, or financial transactions, you may need to respond within milliseconds. If the results can wait for hours or even days, it wouldn\'t qualify as quick.\\n\\nThe \\"reaction\\" element primarily involves generating a response to incoming data, which could either serve back to the user or trigger an action. This could mean processing a user\'s shopping cart to suggest other products they might like, analyzing system metrics to detect potential overload, feeding user activity into a machine learning model for a personalized journey, or evaluating if a transaction request is fraudulent. In each instance, we take a piece of data, evaluate it within the application context, and produce a useful response.\\n\\nIn essence, reactive data problems call for quick, efficient responses to one or multiple data sources. The challenges arise from the need to carry out data-intensive computations rapidly, efficiently, and robustly.\\n\\nReactive data problems commonly crop up in use cases such as:\\n* Personalization or recommendation engines\\n* User experience features\\n* Metrics or time-series analysis\\n* Machine learning features\\n* Fraud detection\\n* Cybersecurity and intrusion detection\\n\\n## How do you solve Reactive Data Problems? {#solve-rx}\\n\\nLet\'s circle back to the reactive data problem of the contacts matching feature. My initial solution involved splitting the transaction into several parts, moving some computation to a background thread, fine-tuning the database schema, and writing a hefty amount of SQL. This strategy was time-consuming, fragile, and a nightmare to maintain. A colleague shrugged it off with \u201cI\u2019ve no idea what\u2019s happening here, but I guess it works\u2026\u201d\\n\\nThe problem? When all you have is a hammer, everything looks like a nail. So, I tried hammering that screw into the wall. As expected, it was neither pretty nor productive.\\n\\n<img src=\\"/img/blog/reactive_data_layer_arrived.svg\\" alt=\\"A Reactive Data Layer Architecture >\\" width=\\"40%\\"/>\\n\\nTo solve reactive data problems more effectively, we need to reimagine our data layer architecture. Let\u2019s give our database some company by introducing additional components that make it easier to process data reactively:\\n* **Queue**: Introducing a persisted message queue (or log) into our architecture can ease asynchronous data processing. This robust, scalable tool allows you to write incoming data to the queue and process it when resources are available, significantly simplifying multi-step data processing.\\n* **Stream Processor**: This is a framework dedicated to managing consecutive data processing steps, from data ingestion (reading data off the queue or from external systems) to data transformation, to writing the results to the database. This framework handles all task scheduling and execution, allowing you to focus on the actual processing logic.\\n* **Server**: This component accepts incoming data, writes it to the queue, and serves the processed data from the database. Acting as the entry and exit point for the reactive data layer, the server brings everything together. You can integrate this functionality into an existing API server implementation or create a standalone server to isolate the reactive data use case into its own backend service.\\n\\nTo improve the contact matching feature, we finally adopted a reactive data architecture as illustrated in the diagram above. Here\'s how the data flowed:\\n\\n1. The server received the submitted contacts and wrote the entire data blob to a persisted messaging queue.\\n2. Three asynchronous tasks ran in the processing framework:\\n    1. *Splitter*: This task read an entire contacts list from the queue, divided it into chunks of a maximum of 50 contacts, and wrote the resulting chunks back to the queue under a different topic.\\n    2. *Storer*: This task read contact chunks from the queue and wrote the contact entries as individual records to the database.\\n    3. *Matcher*: This task read contact chunks, matched the contact entries against the user table, and wrote the found matches to the database.\\n3. The database stored contact entries and contact matches in a separate logical database, isolated from the main operational database serving the CRUD API of the Arrived app.\\n4. The server responded to \\"recommended contacts\\" requests during the signup process by running a query against the database that combined all pre-computed matches for the user with matches from checking the user\'s phone number against previously stored contact entries.\\n\\nThis solution was not only efficient and robust but also easier to maintain. Above all, it allowed us to concentrate on enhancing the feature instead of hacking around the database.\\n\\nSo, here\'s the key takeaway: instead of grappling with reactive data problems using a database alone, build a reactive data layer. It will save you considerable time and frustration.\\n\\nIf building a custom data layer seems intimidating, consider checking out DataSQRL. It\'s a tool that constructs reactive data layers for you. We\'ve been developing DataSQRL to assist developers in resolving reactive data problems quickly and efficiently. We would love to hear your feedback!\\n\\n## Conclusion\\n\\n| Type of Data Problem      | Transactional                 | Reactive                                  |\\n|---------------------------|-------------------------------|-------------------------------------------|\\n| Response time expectation | Milliseconds                  | Milliseconds to minutes                   |\\n| Main challenge            | Consistency under concurrency | Quick Reactions                           |\\n| Source of Data            | Maintained by application     | External or events                        |\\n| Consistency Requirements  | Data constraints & atomicity  | Synchronization in time                   |\\n| **Data Layer Solution**   | **Database + ORM**            | **Queue + Processor + Database + Server** |\\n\\nTransactional data problems arise when your application requires concurrent storage and retrieval of consistent data. On the other hand, reactive data problems occur when your application needs to quickly respond to data from external sources or events. Recognizing the distinction between these two types of data issues is crucial to implementing the most effective solution.\\n\\nFor transactional data problems, a data layer comprising a database and an Object-Relational Mapping (ORM) tool is often the best solution. On the contrary, reactive data problems are more efficiently addressed with a data layer that includes a queue, stream processor, database, and server. Understanding these distinctions and applying the appropriate solutions can significantly improve the efficiency and robustness of your data layer."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/DataSQRL/datasqrl.github.io/edit/main/blog/2023-01-26-welcome.md","source":"@site/blog/2023-01-26-welcome.md","title":"Hello, World!","description":"\\" width=\\"40%\\"/>","date":"2023-01-26T00:00:00.000Z","formattedDate":"January 26, 2023","tags":[{"label":"DataSQRL","permalink":"/blog/tags/data-sqrl"}],"readingTime":1.78,"hasTruncateMarker":true,"authors":[{"name":"Matthias Broecheler","title":"Founder of DataSQRL","url":"https://github.com/mbroecheler","imageURL":"/img/headshots/matthias1.png","key":"matthias"}],"frontMatter":{"slug":"welcome","title":"Hello, World!","authors":["matthias"],"tags":["DataSQRL"]},"prevItem":{"title":"The Two Core Data Problems for Developers: Transactional & Reactive","permalink":"/blog/types-of-data-problems-transactional-reactive"}},"content":"<img src=\\"/img/generic/undraw_launch.svg\\" alt=\\"Launching DataSQRL >\\" width=\\"40%\\"/>\\n\\nWe are excited to launch [DataSQRL](/about) with the mission to help developers and organizations build with data.\\n\\nCollectively, we have spent decades building or helping others build data services. We have seen many struggles, failures, and piles of money being thrown out the window and figured that there must be a better way. We started DataSQRL to find it.\\n\\nWe believe that the technologies used to build data services are too complex and that the engineering processes used to build them are broken. Here is how we plan to fix these issues.\\n\\n\x3c!--truncate--\x3e\\n\\nWe developed [DataSQRL](/) which  compiles a developer-friendly version of SQL - called [SQRL](/docs/getting-started/concepts/sqrl) - into a fully integrated and optimized data pipeline and API server. It takes care of all the laborious plumbing, data massaging, and stitching together of technologies that makes building data services so harrowing. Check out [this short tutorial](/docs/getting-started/quickstart) to see how it works - it only takes a few minutes to build an end-to-end data service.\\n\\nIn addition, we are refining a value-focused process for implementing data services that we have developed over the years while working with development teams and organizations. The basic idea is to apply the same software engineering principles that have proven to be successful to implementing data services. That means you don\'t need a dedicated team of specialists to implement data services and can keep your customers and stakeholders in the feedback loop. [Click here](/docs/process/intro) to learn more about our process.\\n\\nThat\'s our starting point for enabling developers to build successful data services quickly and efficiently. We think we got some good ideas, but have been building data technologies long enough to realize that there is a fine line between innovation and wishful thinking.<br />\\nWe hope that you will join the [DataSQRL community](/community) to share your experience, insights, and opinions to help set us straight.\\n\\nIf you are trying to enable your organization to turn data into valuable data services, consider [working with us](/services) and [get in touch](/contact).\\n\\nWe are excited to be on this journey and hope you will join us. Let\'s build with data together."}]}')}}]);