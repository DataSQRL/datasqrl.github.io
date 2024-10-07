import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started

Let's build a data pipeline with DataSQRL in just a few simple steps.



## Implement SQL Script

We are going to build a data pipeline that aggregates sensor metrics. With DataSQRL, you can implement the entire data pipeline in a single SQL script. 

1. Create a new folder for the data pipeline:

```bash
mkdir metrics; cd metrics
```

2. Then create a new file called metrics.sqrl and copy-paste the following SQL code:

```sql title=metrics.sqrl
IMPORT datasqrl.example.sensors.SensorReading; -- Import metrics
IMPORT time.endOfSecond;  -- Import time function

/* Compute the average temperature per second for each sensor */
SecReading := SELECT sensorid, endOfSecond(time) as timeSec,
                     avg(temperature) as temp 
              FROM SensorReading GROUP BY sensorid, timeSec;

/* Get max temperature in last minute per sensor */
SensorMaxTemp := SELECT sensorid, max(temp) as maxTemp
                 FROM SecReading
                 WHERE timeSec >= now() - INTERVAL 1 MINUTE
                 GROUP BY sensorid;
```

3. Compile the SQL script to an integrated data pipeline:

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

4. By default, DataSQRL uses docker to run data pipelines locally. Start the pipeline with docker compose:

```bash
(cd build/deploy; docker compose up --build)
```

5. The pipeline exposes the data through a GraphQL API. You can query it here: [http://localhost:8888/graphiql/](http://localhost:8888/graphiql/)

Run the query to see the results:
```graphql
{
  SensorMaxTemp (sensorid: 1) {
    maxTemp
  }
}
```

Congrats! You've built a robust and scalable data pipeline with just a few queries! Check out more of what DataSQRL has to offer, you might be surprised how this simple abstraction can unlock advanced features and functionality.

For a continuation of the features of DataSQRL, check out the [Sensor Data Tutorial](../getting-started/quickstart/).

