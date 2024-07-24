[//]: # (---)

[//]: # (title: "Internet of Things")

[//]: # (---)

[//]: # ()
[//]: # (# Aggregating Sensor Data)

[//]: # ()
[//]: # (<img src="/img/generic/undraw_factory.svg" alt="Machine Sensor Data >" width="40%"/>)

[//]: # ()
[//]: # (The goods we sell in our [seed shop]&#40;../../../intro/overview&#41; are produced in the seed factory. There are lots of big machines in our factory washing, shelling, and roasting seeds for our hungry squirrels. Each machine is equipped with multiple sensors that report temperature and humidity measurements in real-time.)

[//]: # ()
[//]: # (We are building an IoT data product that aggregates all this sensor data and gives us an overview of how our machines are doing.)

[//]: # ()
[//]: # (## Run SQRL Script {#run})

[//]: # ()
[//]: # (In the terminal or command line, create an empty folder for the SQRL script:)

[//]: # ()
[//]: # (```bash)

[//]: # (> mkdir sensors; cd sensors)

[//]: # (```)

[//]: # ()
[//]: # (Create a new file in that folder called `sensors.sqrl` and paste the following content into the file &#40;we'll explain the script line-by-line [below]&#40;#sqrl&#41;&#41;:)

[//]: # ()
[//]: # (```sql)

[//]: # (IMPORT datasqrl.tutorials.sensors.*;     -- Import all data)

[//]: # (IMPORT time.*;                -- Import all time functions)

[//]: # (/* Aggregate sensor readings to minute */)

[//]: # (MinReadings := SELECT sensorid, endOfMinute&#40;time&#41; as timeMin,)

[//]: # (        avg&#40;temperature&#41; as temp FROM SensorReading)

[//]: # (    GROUP BY sensorid, timeMin;)

[//]: # (/* Create table of sensors and relate to readings */)

[//]: # (Sensors := DISTINCT Sensors ON id  ORDER BY placed DESC;)

[//]: # (Sensors.readings := JOIN MinReadings r ON r.sensorid = @.id;)

[//]: # (/* Create table of machines with recent temperature */)

[//]: # (Machine := SELECT s.machineid, max&#40;temp&#41; as maxTemp,)

[//]: # (    avg&#40;temp&#41; as avgTemp)

[//]: # (    FROM Sensors s JOIN s.readings)

[//]: # (    WHERE timeMin >= now&#40;&#41; - INTERVAL 1 HOUR)

[//]: # (    GROUP BY s.machineid;)

[//]: # (```)

[//]: # ()
[//]: # (Now run the DataSQRL compiler to build an IoT data product from the data transformations and aggregations defined in the script:)

[//]: # ()
[//]: # (```bash)

[//]: # (docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl)

[//]: # (```)

[//]: # ()
[//]: # (To run the data pipeline, execute:)

[//]: # ()
[//]: # (```bash)

[//]: # (&#40;cd build/deploy; docker compose up&#41;)

[//]: # (```)

[//]: # ()
[//]: # (## Query Data API {#query})

[//]: # ()
[//]: # (The running data pipeline compiled by DataSQRL exposes a GraphQL data API which you can access by opening [`http://localhost:8888//graphiql/`]&#40;http://localhost:8888//graphiql/&#41; in your browser. Write GraphQL queries in the left-hand panel. For example, copy the following query:)

[//]: # ()
[//]: # (```graphql)

[//]: # ({)

[//]: # (  Machine&#40;machineid: 2&#41; {)

[//]: # (    maxTemp)

[//]: # (    avgTemp)

[//]: # (  })

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (When you hit the "run" button you get the average and maximum temperature for the given machine in the last hour.)

[//]: # (You now have a working IoT data product.)

[//]: # ()
[//]: # (## Description of SQRL Script {#sqrl})

[//]: # ()
[//]: # (Let's have a closer look at the SQRL script for our IoT data product and describe what it does.)

[//]: # ()
[//]: # (:::info)

[//]: # ()
[//]: # (SQRL is an extension of SQL, and we are going to use some basic SQL syntax. If you are unfamiliar with SQL, we recommend you read our [SQL Primer]&#40;/docs/reference/sqrl/sql-primer&#41; first.)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (```sql)

[//]: # (IMPORT datasqrl.example.sensors.*;)

[//]: # (```)

[//]: # ()
[//]: # (This import statement imports all tables from the package [datasqrl.example.sensors]&#40;https://dev.datasqrl.com/package/datasqrl.example.sensors&#41;. In this case, the `SensorReading` and `Sensors` tables are relevant. The SensorReading table contains records of sensor readings, including the sensor ID, timestamp, and temperature. The Sensors table contains information about the sensors, such as the sensor ID, the machine ID the sensor is placed on, and when the sensor was placed.)

[//]: # ()
[//]: # (```sql)

[//]: # (MinReadings := SELECT sensorid, endOfMinute&#40;time&#41; as timeMin,)

[//]: # (        avg&#40;temperature&#41; as temp FROM SensorReading)

[//]: # (    GROUP BY sensorid, timeMin;)

[//]: # (```)

[//]: # ()
[//]: # (The `MinReadings` table aggregates sensor readings to a minute-by-minute basis. It selects the sensorid, the end of the minute for each time &#40;as timeMin&#41;, and the average temperature &#40;as temp&#41; from the SensorReading table. The resulting table is grouped by sensorid and timeMin.)

[//]: # ()
[//]: # (```sql)

[//]: # (Sensors := DISTINCT Sensors ON id  ORDER BY placed DESC;)

[//]: # (```)

[//]: # ()
[//]: # (This statement redefines the `Sensors` table to include only distinct sensor records based on the id column by picking the most recent version based on the `placed` timestamp.)

[//]: # ()
[//]: # (```sql)

[//]: # (Sensors.readings := JOIN MinReadings r ON r.sensorid = @.id;)

[//]: # (```)

[//]: # ()
[//]: # (This statement defines the relationship column `readings` on the `Sensors` table, which links a sensor to its aggregated readings in the `MinReadings` table. The @ refers to the parent `Sensors` table on the left-hand side.)

[//]: # ()
[//]: # (```sql)

[//]: # (Machine := SELECT s.machineid, max&#40;temp&#41; as maxTemp,)

[//]: # (    avg&#40;temp&#41; as avgTemp)

[//]: # (    FROM Sensors s JOIN s.readings)

[//]: # (    WHERE timeMin >= now&#40;&#41; - INTERVAL 1 HOUR)

[//]: # (    GROUP BY s.machineid;)

[//]: # (```)

[//]: # ()
[//]: # (The `Machine` table calculates recent temperature information for each machine. It selects the machineid, the maximum temperature &#40;as maxTemp&#41;, and the average temperature &#40;as avgTemp&#41; from the `Sensors` table &#40;aliased as s&#41; joined with `MinReadings` table through the `readings` relationship. The records are filtered to include only those with a timeMin within the last hour. The resulting table is grouped by machineid.)

[//]: # ()
[//]: # (Now, we have full oversight over our seed factory. This is a good starting point for analyzing our factory sensor data to make sure everything is running well.)

[//]: # ()
[//]: # (## Next Steps {#next})

[//]: # ()
[//]: # (Read the [DataSQRL introduction]&#40;../../../intro/overview&#41; which is an in-depth tutorial of DataSQRL and gives you all the information you need to extend this IoT data product to monitor and automate your business.)

[//]: # ()
