import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started

DataSQRL makes it easy to implement data products as data pipelines or event-driven microservices. You'll be building powerful data products with DataSQRL in no time.

## Installation
Install DataSQRL:

<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
brew tap datasqrl/sqrl
brew install sqrl-cli
```
</TabItem>
<TabItem value="Docker">

```bash
docker pull datasqrl/cmd:latest
```
</TabItem>
</Tabs>

## Learn By Doing

If you're looking to learn DataSQRL, the best way is to build something with it. Let's run through a simple metrics aggregation example.

1. Create a new folder for our sqrl script to live in.

```bash
mkdir metrics; cd metrics
```

2. Then create a new file called metrics.sqrl and copy-paste the following SQL code:

```sql title=metrics.sqrl
IMPORT datasqrl.example.sensors.SensorReading; -- Import metrics
IMPORT time.endOfSecond;  -- Import time function

/* Aggregate sensor readings to second */
SecReading := SELECT sensorid, endOfSecond(time) as timeSec,
                     avg(temperature) as temp 
              FROM SensorReading GROUP BY sensorid, timeSec;

/* Get max temperature in last minute per sensor */
SensorMaxTemp := SELECT sensorid, max(temp) as maxTemp
                 FROM SecReading
                 WHERE timeSec >= now() - INTERVAL 1 MINUTE
                 GROUP BY sensorid;
```

3. Compile the script

<Tabs groupId="cli">
<TabItem value="Mac" default>

```bash
sqrl compile metrics.sqrl
```
</TabItem>
<TabItem value="Docker">

```bash
docker run -it -p 8888:8888 -v $PWD:/build datasqrl/cmd compile metrics.sqrl
```
</TabItem>
</Tabs>

4. Start the docker compose pipeline:

```bash
(cd build/deploy; docker compose up --build)
```

5. Check out your new GraphQL API: [http://localhost:8888/graphiql/](http://localhost:8888/graphiql/)

Run the query to see the results:
```graphql
{
  SensorMaxTemp (sensorid: 1) {
    maxTemp
  }
}
```

Congrats! You've built a robust and scalable data pipeline with just a few queries! Check out more of what DataSQRL has to offer, you might be surprised how this simple abstraction can unlock advanced features and functionality.

For a continuation of the features of DataSQRL, check out the [Tutorial](../getting-started/quickstart/).

