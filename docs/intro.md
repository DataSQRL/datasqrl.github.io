import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# What is DataSQRL?

<img src="/img/generic/undraw_documentation.svg" alt="DataSQRL Documentation >" width="40%"/>

DataSQRL is an open-source data development framework for building data pipelines, event-driven microservices, and AI data products. It provides the basic structure, common patterns, and a set of tools for streamlining the development of data solutions.

DataSQRL is an open-source framework that you can use to build and deploy data pipelines. Get started with:


<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
brew tap datasqrl/sqrl
brew install sqrl-cli
```

:::note
Check that you're on the current version of DataSQRL by running `sqrl --version`
To update an existing installation:

```bash
brew upgrade sqrl-cli
```
:::

</TabItem>
<TabItem value="Docker">
Always pull the latest Docker image to ensure you have the most recent updates:

```bash
docker pull datasqrl/cmd:latest
```

</TabItem>
</Tabs>

With DataSQRL, there's no need for complex backend setups or managing multiple services. Just add DataSQRL in your development process, define your data processing in SQL, and let DataSQRL compile everything into an optimized, scalable data pipeline. DataSQRL handles everything from data ingestion from various sources like databases, streams, and APIs to processing and exposing the data via APIs or directly to databases.

Here are a few example pipelines:

<Tabs>
<TabItem value="Data Mesh" default>

```sql
IMPORT datasqrl.tutorials.seedshop.Orders;  -- Import orders stream
IMPORT time.endOfWeek;            -- Import time function

/* Create new table of unique customers */
Users := SELECT DISTINCT customerid AS id FROM Orders;

/* Create relationship between customers and orders */
Users.purchases := JOIN Orders ON Orders.customerid = @.id;

/* Aggregate the purchase history for each user by week */
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(i.quantity * i.unit_price) AS spend
      FROM @.purchases p JOIN p.items i
      GROUP BY week ORDER BY week DESC;
```
</TabItem>
<TabItem value="AI">

```sql
IMPORT datasqrl.tutorials.clickstream.Click;  -- Import data

/* Find next page visits within 10 minutes */
VisitAfter := SELECT b.url AS beforeURL, a.url AS afterURL,
    a.timestamp AS timestamp
    FROM Click b JOIN Click a ON b.userid=a.userid AND
        b.timestamp < a.timestamp AND
        b.timestamp >= a.timestamp - INTERVAL 10 MINUTE;

/* Recommend pages that are frequently co-visited */
Recommendation := SELECT beforeURL AS url, afterURL AS rec,
    count(1) AS frequency FROM VisitAfter
    GROUP BY url, rec ORDER BY url ASC, frequency DESC;
```
</TabItem>
<TabItem value="Observability and Automation">

```sql
IMPORT datasqrl.tutorials.sensors.*; -- Import sensor data
IMPORT time.endOfSecond;  -- Import time function

/* Aggregate sensor readings to second */
SecReading := SELECT sensorid, endOfSecond(time) as timeSec,
        avg(temperature) as temp FROM SensorReading
    GROUP BY sensorid, timeSec;

/* Get max temperature in last minute */
SensorMaxTemp := SELECT sensorid, max(temp) as maxTemp
    FROM SecReading
    WHERE timeSec >= now() - INTERVAL 1 MINUTE
    GROUP BY sensorid;
```
</TabItem>
</Tabs>

## Why use DataSQRL?
- Simplified Data Engineering: Automate the integration of multiple data technologies and eliminate the "data plumbing" needed to build data pipelines.
- Runs Everywhere: DataSQRL runs in cloud environments, local servers, and even on large-scale data infrastructure.
- User-Friendly SQL Interface: Focus on what your data should do, not how it's processed. DataSQRL's SQL-based interface is accessible to beginners and powerful for experts.

You can also learn more about [DataSQRL](../getting-started/concepts/datasqrl), [its benefits](../getting-started/concepts/why-datasqrl), and [whether to use DataSQRL](../getting-started/concepts/when-datasqrl) for your data product.

## Getting Started with DataSQRL

- Jump into our [Getting Started Guide](../getting-started)  for a quick introduction to the basics of DataSQRL.
- Explore the Interactive Tutorial and [Quickstart](../getting-started/quickstart)  to see DataSQRL in action.
- Check out the [reference documentation](/docs/sqrl/datasqrl-spec) covers all aspects of DataSQRL in detail. If you want more information on how to use DataSQRL or are looking for comprehensive documentation, this is your place to go.
- Learn more about advanced features and customization in our How-to Guides.

## Join the DataSQRL community
DataSQRL is an open-source project. If you want to learn more about the internals or contribute to the project:
- Star us on [GitHub](https://github.com/DataSQRL/sqrl) and contribute to the project.
- Discuss, ask questions, and share your DataSQRL projects on Slack.
- Report issues or suggest features directly on our [GitHub Issues](https://github.com/DataSQRL/sqrl/issues) page.

## Getting Information
Technology is only one piece to a successful data product. Learn more about the [DataSQRL process](../process/intro) for building [data products](../reference/concepts/data-product) that deliver value and keep your team sane.

## Getting Help
Couldn't find what you were looking for? Need help or want to talk to somebody about your problem? No worries, the [DataSQRL community](/community) is here to help.