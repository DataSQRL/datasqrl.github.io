---
title: "Internet of Things"
---

# Aggregating Sensor Data

<img src="/img/generic/undraw_factory.svg" alt="Machine Sensor Data >" width="40%"/>

The goods we sell in our [seed shop](../../../quickstart) are produced in the seed factory. There are lots of big machines in our factory washing, shelling, and roasting seeds for our hungry squirrels. Each machine is equipped with multiple sensors that report temperature and humidity measurements in real-time.

We are building an IoT application that aggregates all this sensor data and gives us an overview of how our machines are doing.

## Run SQRL Script {#run}

In the terminal or command line, create an empty folder for the SQRL script:

```bash
> mkdir sensors; cd sensors
```

Create a new file in that folder called `sensors.sqrl` and paste the following content into the file (we'll explain the script line-by-line [below](#sqrl)):

```sql
IMPORT datasqrl.example.sensors.*;     -- Import all data
IMPORT time.*;                -- Import all time functions
/* Aggregate sensor readings to minute */
MinReadings := SELECT sensorid, endOfMinute(time) as timeMin,
        avg(temperature) as temp FROM SensorReading
    GROUP BY sensorid, timeMin;
/* Create table of sensors and relate to readings */
Sensors := DISTINCT Sensors ON id  ORDER BY placed DESC;
Sensors.readings := JOIN MinReadings r ON r.sensorid = @.id;
/* Create table of machines with recent temperature */
Machine := SELECT s.machineid, max(temp) as maxTemp,
    avg(temp) as avgTemp
    FROM Sensors s JOIN s.readings
    WHERE timeMin >= now() - INTERVAL 1 HOUR
    GROUP BY s.machineid;
```

Now run the DataSQRL compiler to build an IoT data service from the data transformations and aggregations defined in the script:

```bash
docker run --rm -it -p 8888:8888 -v $PWD:/build datasqrl/cmd run sensors.sqrl
```

## Query Data API {#query}

The running data pipeline compiled by DataSQRL exposes a GraphQL data API which you can access by opening `http://localhost:8888/graphiql/` in your browser. Write GraphQL queries in the left-hand panel. For example, copy the following query:

```graphql
{
  Machine(machineid: 2) {
    maxTemp
    avgTemp
  }
}
```

When you hit the "run" button you get the average and maximum temperature for the given machine in the last hour.
You now have a working IoT application.

## Description of SQRL Script {#sqrl}

Let's have a closer look at the SQRL script for our IoT application and describe what it does.

:::info

SQRL is an extension of SQL, and we are going to use some basic SQL syntax. If you are unfamiliar with SQL, we recommend you read our [SQL Primer](/docs/reference/sqrl/sql-primer) first.

:::

```sql
IMPORT datasqrl.example.sensors.*;
```

This import statement imports all tables from the package [datasqrl.example.sensors](https://dev.datasqrl.com/package/datasqrl.example.sensors). In this case, the `SensorReading` and `Sensors` tables are relevant. The SensorReading table contains records of sensor readings, including the sensor ID, timestamp, and temperature. The Sensors table contains information about the sensors, such as the sensor ID, the machine ID the sensor is placed on, and when the sensor was placed.

```sql
MinReadings := SELECT sensorid, endOfMinute(time) as timeMin,
        avg(temperature) as temp FROM SensorReading
    GROUP BY sensorid, timeMin;
```

The `MinReadings` table aggregates sensor readings to a minute-by-minute basis. It selects the sensorid, the end of the minute for each time (as timeMin), and the average temperature (as temp) from the SensorReading table. The resulting table is grouped by sensorid and timeMin.

```sql
Sensors := DISTINCT Sensors ON id  ORDER BY placed DESC;
```

This statement redefines the `Sensors` table to include only distinct sensor records based on the id column by picking the most recent version based on the `placed` timestamp.

```sql
Sensors.readings := JOIN MinReadings r ON r.sensorid = @.id;
```

This statement defines the relationship column `readings` on the `Sensors` table, which links a sensor to its aggregated readings in the `MinReadings` table. The @ refers to the parent `Sensors` table on the left-hand side.

```sql
Machine := SELECT s.machineid, max(temp) as maxTemp,
    avg(temp) as avgTemp
    FROM Sensors s JOIN s.readings
    WHERE timeMin >= now() - INTERVAL 1 HOUR
    GROUP BY s.machineid;
```

The `Machine` table calculates recent temperature information for each machine. It selects the machineid, the maximum temperature (as maxTemp), and the average temperature (as avgTemp) from the `Sensors` table (aliased as s) joined with `MinReadings` table through the `readings` relationship. The records are filtered to include only those with a timeMin within the last hour. The resulting table is grouped by machineid.

Now, we have full oversight over our seed factory. This is a good starting point for analyzing our factory sensor data to make sure everything is running well.

## Next Steps {#next}

Read the [DataSQRL introduction](../../../intro/overview) which is an in-depth tutorial of DataSQRL and gives you all the information you need to extend this IoT application to monitor and automate your business.

