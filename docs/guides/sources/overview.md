# How to Connect Data Sources & Sinks to DataSQRL

## Data Sources

DataSQRL supports the following types of data sources to consume data from:

* **[Filesystem](files)**: Connect data stored in files on a local or mounted filesystem to DataSQRL.
* **[Kafka](kafka)**: Connect Kafka to DataSQLR to consume data from the log.

:::note

Is your data source missing from the list? You can add a data source connector
to DataSQRL to support your data source. That's the power of open source! 
[Learn how.](/docs/dev/architecture/data-source)

:::


## Data Sinks

DataSQRL supports the following types of data sinks to push subscription
events to:

* **[Filesystem](files)**: Connect data stored in files on a local or mounted filesystem to DataSQRL.
* **[Kafka](kafka)**: Connect Kafka to DataSQLR to consume data from the log.