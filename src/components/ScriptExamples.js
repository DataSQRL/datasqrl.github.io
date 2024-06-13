import React from "react";

export const scriptExamples = [
  {
    name: "Clickstream",
    usecase: "Recommendations",
    description:
      (
        <>
          Develop a recommendation engine for your customers based on visits to your website.
          <br /><br />
          DataSQRL builds on the SQL you already know for a low learning curve.
        </>
      ),
    script:
      `IMPORT datasqrl.tutorials.clickstream.Click;  -- Import data
/* Find next page visits within 10 minutes */
VisitAfter := SELECT b.url AS beforeURL, a.url AS afterURL,
    a.timestamp AS timestamp
    FROM Click b JOIN Click a ON b.userid=a.userid AND
        b.timestamp < a.timestamp AND
        b.timestamp >= a.timestamp - INTERVAL 10 MINUTE;
/* Recommend pages that are frequently co-visited */
Recommendation := SELECT beforeURL AS url, afterURL AS rec,
    count(1) AS frequency FROM VisitAfter
    GROUP BY url, rec ORDER BY url ASC, frequency DESC;`,
    graphql:
    `type Query {
  Recommendation(url: String!): [Recommendation!]
}

type Recommendation {
  url: String!
  rec: String!
  frequency: Int!
}`,
    queryURL: "?query=query%20ContentRecommendation(%24pageURL%3A%20String!)%20%7B%0A%09Recommendation(url%3A%20%24pageURL)%20%7B%0A%20%20%20%20rec%0A%20%20%20%20frequency%0A%20%20%7D%0A%7D&operationName=ContentRecommendation&variables=%7B%0A%20%20\"pageURL\"%3A%20\"mascot_books%2Fa_time_of_gifts\"%0A%7D",
    link: "/docs/getting-started/tutorials/recommendations/intro",
  },
  {
    name: "Sensors",
    usecase: "Metrics & Monitoring",
    description:
      (
        <>
          Ingest sensor data, aggregate readings, and monitor maximum temperature in the last minute.
          <br /><br />
          DataSQRL makes time-window aggregations easy.
        </>
      ),

    script:
      `IMPORT datasqrl.tutorials.sensors.*; -- Import sensor data
IMPORT time.endOfSecond;  -- Import time function
/* Aggregate sensor readings to second */
SecReading := SELECT sensorid, endOfSecond(time) as timeSec,
        avg(temperature) as temp FROM SensorReading
    GROUP BY sensorid, timeSec;
/* Get max temperature in last minute */
SensorMaxTemp := SELECT sensorid, max(temp) as maxTemp
    FROM SecReading
    WHERE timeSec >= now() - INTERVAL 1 MINUTE
    GROUP BY sensorid;`,
    graphql:
      `type Query {
  SecReading(sensorid: Int!): [SecReading!]
  SensorMaxTemp(sensorid: Int): [SensorMaxTemp!]
}

type SecReading {
  sensorid: Int!
  timeSec: String!
  temp: Float!
}

type SensorMaxTemp {
  sensorid: Int!
  maxTemp: Float!
}`,
    queryURL: "?query=query%20MachineTemperature(%24machine%3A%20Int!)%20%7B%0A%09Machine(machineid%3A%20%24machine)%20%7B%0A%20%20%20%20maxTemp%0A%20%20%20%20avgTemp%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20\"machine\"%3A%202%0A%7D",
    link: "/docs/getting-started/tutorials/iot/intro",
  },
  {
    name: "Seedshop",
    usecase: "Customer 360°",
    description:
      (
        <>
          Integrate customer data from multiple sources and integrate it into a customer 360.
          <br /><br />
          DataSQRL supports relationships and nested tables to structure data.
        </>
      ),
    script:
      `IMPORT datasqrl.tutorials.seedshop.Orders;  -- Import orders stream
IMPORT time.endOfWeek;            -- Import time function
/* Create new table of unique customers */
Users := SELECT DISTINCT customerid AS id FROM Orders;
/* Create relationship between customers and orders */
Users.purchases := JOIN Orders ON Orders.customerid = @.id;
/* Aggregate the purchase history for each user by week */
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(i.quantity * i.unit_price) AS spend
      FROM @.purchases p JOIN p.items i
      GROUP BY week ORDER BY week DESC;`,
    graphql:
      `type Query {
  Users(id: Int!): Users
}

type Users {
  id: Int!
  purchases(limit: Int!, offset: Int): [Orders!]
  spending(week: String, limit: Int = 20): [spending!]
}

type spending {
  week: String!
  spend: Float!
  saved: Float!
}

type Orders {
  id: Int!
  time: String!
  items: [items!]
}

type items {
  productid: Int!
  quantity: Int!
  unit_price: Float!
  discount: Float
}
`,
    queryURL: "?query=query%20UserSpending(%24userid%3A%20Int!)%20%7B%0A%09Users(id%3A%20%24userid)%20%7B%0A%20%20%20%20spending%20%7B%0A%20%20%20%20%20%20week%0A%20%20%20%20%20%20spend%0A%20%20%20%20%20%20saved%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=UserSpending&variables=%7B%0A%20%20\"userid\"%3A%202%0A%7D",
    link: "/docs/getting-started/quickstart",
  },
];