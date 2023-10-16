---
title: "When to use DataSQRL"
---

# When Should I Use DataSQRL?

DataSQRL is an intelligent compiler for data pipelines that eliminates data plumbing so you
can build efficient data products faster, cheaper, and better.

But exactly what kinds of data products is DataSQRL good for? And when should you not use DataSQRL?

The following tables summarizes all the data products you can build with DataSQRL with the color indicating how much time, effort, and money DataSQRL will save you: green saves you a lot, orange a medium amount, and red means you won't save much.

Take a look at the different [types of data products](/docs/reference/concepts/data-product#types) that DataSQRL can build to learn what each cell in the table represents.

<table>
    <tr>
        <td>Data Product Result</td>
        <td><strong>Dynamic</strong> (updates with changes in data)</td>
        <td><strong>Static</strong> (does not update)</td>
    </tr>
    <tr>
        <td><strong>Raw Data</strong></td>
        <td className="bg_warning text--center" ><strong>Stream Processing</strong><br />
            <img src="/img/reference/dpTypes1.svg" alt="Streaming Processing Architecture" width="500"/></td>
        <td className="bg_alert  text--center"><strong>Batch Processing</strong><br />
        <img src="/img/reference/dpTypes4.svg" alt="Batch Processing Architecture" width="500"/> </td>
    </tr>
    <tr>
        <td><strong>Interactive Querying</strong></td>
        <td className="bg_success text--center"><strong>Streaming Database</strong><br />
            <img src="/img/reference/dpTypes2.svg" alt="Streaming Database Architecture" width="500"/></td>
        <td className="bg_warning text--center"><strong>Snapshot Database</strong><br />
            <img src="/img/reference/dpTypes5.svg" alt="Snapshot Database Architecture" width="500"/></td>
    </tr>
    <tr>
        <td><strong>API</strong></td>
        <td className="bg_success text--center"><strong>Streaming API</strong><br />
            <img src="/img/reference/dpTypes3.svg" alt="Streaming API Architecture" width="500"/></td>
        <td className="bg_success text--center"><strong>Static API</strong><br />
            <img src="/img/reference/dpTypes6.svg" alt="Static API Architecture" width="500"/></td>
    </tr>
</table>

## TL;DR

So, when should you use DataSQRL? If the types of data products you are building are green, then DataSQRL will save you enough to warrant the adoption of a new technology. <br />
If they are orange, DataSQRL is only worth it if you are building multiple data products of this type. Otherwise, you are probably better off building the data pipeline by hand and not worry about a new technology.  <br />
If they are red, DataSQRL isn't worth it. If you are adopting DataSQRL for other types of data products, you can use it for these data products as well and amortize the cost of adoption. Otherwise, don't bother.

## Long Version

DataSQRL makes it easier and faster to build data products by eliminating the [data plumbing](../why-datasqrl#dataplumbing) that makes data pipeline implementations expensive. But the saving you get from DataSQRL have to be larger than the cost of adopting a new technology in your organization.

As with any new technology, there is a cost of adoption. The cost of adoption for DataSQRL is fairly low because:

1. DataSQRL compiles data pipelines but the resulting executables are independent of DataSQRL and run on the technologies and cloud services you already trust like Apache Kafka, Flink, Postgres, and so on. That means, there is no operational cost to using DataSQRL.
2. The learning curve for DataSQRL is low since it uses the SQL knowledge your team already has.

To make DataSQRL worth your while, the savings you get from using DataSQRL to compile your data pipelines need to significantly outweigh the cost of adoption. And that's what the table above visualizes: green means the benefits far outweigh the costs, orange means it's on the fence, and red means that they do not.

That said, if you have multiple orange data products, DataSQRL is still worth it because the savings add up but the adoption costs do not. And if you decide to adopt DataSQRL it will also save you on red data products - just not very much.

### Pluggable Engine Architecture

DataSQRL is a compiler that generates data pipelines using proven data technologies like Apache Flink, Kafka, or Postgres. DataSQRL has a pluggable engine architecture that supports various types of databases, stream processors, and API servers. Hence, the other thing to consider is whether DataSQRL supports the data technologies you are already using or plan to use in your data pipelines.

Take a look at the [engines documentation](/docs/reference/operations/engines/overview) to see whether your favorite data technologies are supported. And if not, [reach out to us](/contact) to see if and when DataSQRL will support the data technology of your choice. DataSQRL is still young and we are continuously expanding support.

### Expressivity

DataSQRL uses SQL to implement the logic of your data product. But sometimes SQL is not expressive enough or too cumbersome for complex data transformations like applying machine learning models. To support all use cases, DataSQRL can be extended by custom functions, data types, transformations which are implemented in Java.

In other words, if you need more than SQL to implement your data product, DataSQRL currently only supports Java for additional expressivity. We plan to support Python and JavaScript in the future, [let us know if you need those](/contact).