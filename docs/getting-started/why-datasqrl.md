---
title: "Why DataSQRL?"
---

# Why does DataSQRL exist?

We love building with data, but we got frustrated by how complicated it is to build data-driven features. That's why we build DataSQRL.

There are a gazillion CRUD frameworks and ORM libraries for mapping database rows onto objects, but if you want to do anything more interesting with your data, you are on your own. Want to do complex data transformations? Say hello to obscure stored procedures, brittle data pipelines, and a scattershot of python scripts. Want to do data analytics? Good luck wading through the jungle of data warehouse fiefdoms, big data overkill, and mountains of SQL.

Thought you could quickly add a simple recommendation engine to the site but ended up in a 6 months-long game of telephone with the PM, data engineers, and data scientists all the while waging a political battle with the data analytics team? Yes, we have been there too. This should be simpler.

Why can you build a production-grade web service in a few days, but it takes months to build a mediocre data service that looks like Frankenstein after a colonoscopy?

We believe that a lack of developer tools for building with data has a lot to do with it. Playing with data used to be the realm of business intelligence and data analysts. When we discovered that data-driven features in software are extremely valuable, we took their tools, methods, and approaches for compiling reports and dashboards and bolted software engineering on top. The result is like putting cheesecake into a Ramen soup - both make sense individually but thrown together it's a gross mess. 

We are developing DataSQRL as a tool for developers to build data services. You connect your data sources to DataSQRL, implement the logic and structure of your data service in a scripting language that looks and feels like SQL, and DataSQRL generates a scalable and cost-efficient API that exposes your data service. It's as easy as 1-2-3. We cut out all the stuff developers don't need and focused on building a tool that integrates with your workflow.

## Why Should You Use DataSQLR?

If you are building a data service or a data-driven feature for an application, DataSQRL can save you a lot of time, make your life easier, and produce better implementations.

If you are or planning to build a data service or data-driven feature, how do you know if DataSQRL is the right choice for you?

While it depends a lot on the specifics of your situation, the following heuristics are generally useful:

1. If your data needs are so simple that they are mostly satisfied by mapping database records onto objects, then use an ORM (object-relational mapper) library, make sure you have the right indexes installed in the database, and add the odd custom SQL query where needed.
2. If your data needs are so complex that they require a team of data scientists, data engineers, ML specialist, MLOps to be satisfied, then you likely need a custom data pipeline that glues together multiple data systems.
3. For anything in between, try DataSQRL.

Be careful with heuristic 2: We frequently see organizations that think they need to bring in the whole caboodle of data scientists, data engineers, MLOps, etc to build some simple data analytics into their product. Don't call the Navy to shoot a sparrow.

Essentially, this boils down to: If you need more than a CRUD app but are not trying to compete with Google's algorithms, then DataSQRL is a pragmatic choice that gets you good results quickly with little effort.

Let's look in more detail at how DataSQRL saves you time, makes your life easier, and produces good implementations with little effort.

### Saves You Time {#save-time}

### Easy to Use {#easy-to-use}

### Fast & Efficient {#performance}


## Learn more

You can learn more about [DataSQRL](/docs/reference/concepts/datasqrl) or dive right into the [introductory tutorial](/docs/getting-started/nutshop-tutorial) to see how it works in practice.

Comparison to database, warehouse, etc