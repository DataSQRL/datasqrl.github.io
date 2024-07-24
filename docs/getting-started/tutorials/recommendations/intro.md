[//]: # (---)

[//]: # (title: "Recommendations")

[//]: # (---)

[//]: # ()
[//]: # (# Content Recommendation through Clickstream Analysis)

[//]: # ()
[//]: # (<img src="/img/generic/undraw_recommendation.svg" alt="Content Recommendation >" width="40%"/>)

[//]: # ()
[//]: # (We are going to build a content recommendation engine for a fictitious literature website. The site has amazing content like "The Heart is Deceitful Above All Things" - fake data generators sometimes come up with profound insights.)

[//]: # ()
[//]: # (Our recommendation engine uses the website logs to extract the clickstream of the pages that a user visits. We recommend other content based on what pages users visit next. And, of course, we want all of this to work in real-time so our users don't miss out on the latest trends in literature.)

[//]: # ()
[//]: # ()
[//]: # (## Run SQRL Script {#run})

[//]: # ()
[//]: # (In the terminal or command line, create an empty folder for the SQRL script:)

[//]: # ()
[//]: # (```bash)

[//]: # (> mkdir clickstream; cd clickstream)

[//]: # (```)

[//]: # ()
[//]: # (Create a new file in that folder called `clickstream.sqrl` and paste the following content into the file &#40;we'll explain it line-by-line [below]&#40;#sqrl&#41;&#41;:)

[//]: # ()
[//]: # (```sql)

[//]: # (IMPORT datasqrl.tutorials.clickstream.Click;   -- Import data)

[//]: # (/* Most visited pages in the last day */)

[//]: # (Trending := SELECT url, count&#40;1&#41; AS total)

[//]: # (    FROM Click WHERE timestamp > now&#40;&#41; - INTERVAL 1 DAY)

[//]: # (    GROUP BY url ORDER BY total DESC;)

[//]: # (/* Find next page visits within 10 minutes */)

[//]: # (VisitAfter := SELECT b.url AS beforeURL, a.url AS afterURL,)

[//]: # (    a.timestamp AS timestamp)

[//]: # (    FROM Click b JOIN Click a ON b.userid=a.userid AND)

[//]: # (        b.timestamp <= a.timestamp AND)

[//]: # (        b.timestamp >= a.timestamp - INTERVAL 10 MINUTE;)

[//]: # (/* Recommend pages that are visited shortly after */)

[//]: # (Recommendation := SELECT beforeURL AS url, afterURL AS rec,)

[//]: # (    count&#40;1&#41; AS frequency FROM VisitAfter)

[//]: # (    GROUP BY url, rec ORDER BY url ASC, frequency DESC;)

[//]: # (```)

[//]: # ()
[//]: # (Now run the DataSQRL compiler to build a recommendation engine from the data transformations and aggregations defined in the script:)

[//]: # ()
[//]: # (```bash)

[//]: # (docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl)

[//]: # (```)

[//]: # ()
[//]: # (To run the recommendation engine, execute:)

[//]: # ()
[//]: # (```bash)

[//]: # (&#40;cd build/deploy; docker compose up&#41;)

[//]: # (```)

[//]: # ()
[//]: # (## Query Data API {#query})

[//]: # ()
[//]: # (The running data pipeline compiled by DataSQRL exposes a GraphQL data API which you can access by opening [`http://localhost:8888/graphiql/`]&#40;http://localhost:8888/graphiql/&#41; in your browser. Write GraphQL queries in the left-hand panel. For example, copy the following query:)

[//]: # ()
[//]: # (```graphql)

[//]: # ({)

[//]: # (	Recommendation&#40;url: "mascot_books/a_time_of_gifts"&#41; {)

[//]: # (    rec)

[//]: # (    frequency)

[//]: # (  })

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (When you hit the "run" button you get the recommendations for the given page URL ordered by the frequency of correlated visit. )

[//]: # (You now have a working recommendation engine you can integrate into your application.)

[//]: # ()
[//]: # (## Description of SQRL Script {#sqrl})

[//]: # ()
[//]: # (Let's have a closer look at the SQRL script for our content recommendation engine and dissect what it does.)

[//]: # ()
[//]: # (:::info)

[//]: # ()
[//]: # (SQRL is an extension of SQL, and we are going to use some basic SQL syntax. If you are unfamiliar with SQL, we recommend you read our [SQL Primer]&#40;/docs/reference/sqrl/sql-primer&#41; first.)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (```sql)

[//]: # (IMPORT datasqrl.example.clickstream.Click;)

[//]: # (```)

[//]: # ()
[//]: # (This import statement imports the `Click` table from the package [datasqrl.example.clickstream]&#40;https://dev.datasqrl.com/package/datasqrl.example.clickstream/&#41;. The `Click` table contains records of user clicks on the content URLs, including the user ID, URL, and the timestamp of the visit.)

[//]: # ()
[//]: # (```sql)

[//]: # (Trending := SELECT url, count&#40;1&#41; AS total)

[//]: # (    FROM Click WHERE timestamp > now&#40;&#41; - INTERVAL 1 DAY)

[//]: # (    GROUP BY url ORDER BY total DESC;)

[//]: # (```)

[//]: # ()
[//]: # (This statement defines the `Trending` table, which shows the most visited pages in the last day. It selects the url and the count of clicks on each URL &#40;as total&#41; from the `Click` table, filtering records with a timestamp within the last day. The resulting table is grouped by the url and ordered by the total number of clicks in descending order.)

[//]: # ()
[//]: # (```sql)

[//]: # (VisitAfter := SELECT b.url AS beforeURL, a.url AS afterURL,)

[//]: # (    a.timestamp AS timestamp)

[//]: # (    FROM Click b JOIN Click a ON b.userid=a.userid AND)

[//]: # (        b.timestamp <= a.timestamp AND)

[//]: # (        b.timestamp >= a.timestamp - INTERVAL 10 MINUTE;)

[//]: # (```)

[//]: # ()
[//]: # (The `VisitAfter` table identifies pairs of URLs that were visited by the same user within a 10-minute interval. It selects the url from the `Click` table &#40;aliased as b&#41; as beforeURL, the url from the `Click` table &#40;aliased as a&#41; as afterURL, and the timestamp of the afterURL click as timestamp. The JOIN condition ensures that the click records have the same userid, and the timestamp of the beforeURL click is within 10 minutes of the afterURL click.)

[//]: # ()
[//]: # (```sql)

[//]: # (Recommendation := SELECT beforeURL AS url, afterURL AS rec,)

[//]: # (    count&#40;1&#41; AS frequency FROM VisitAfter)

[//]: # (    GROUP BY url, rec ORDER BY url ASC, frequency DESC;)

[//]: # (```)

[//]: # ()
[//]: # (The `Recommendation` table generates recommendations for pages that are frequently visited shortly after visiting another page. It selects the beforeURL as url, the afterURL as rec, and the count of occurrences of each pair as frequency from the `VisitAfter` table. The resulting table is grouped by url and rec, and ordered by url in ascending order and frequency in descending order. This provides a list of recommended pages for each URL based on the frequency of co-visits within a 10-minute interval.)

[//]: # ()
[//]: # (And that's all you need to build a basic recommendation engine that recommends trending pages and related pages based on co-visits by users. )

[//]: # ()
[//]: # (## Next Steps {#next})

[//]: # ()
[//]: # (Read the [DataSQRL introduction]&#40;../../../intro/overview&#41; which is an in-depth tutorial of DataSQRL and gives you all the information you need to extend this recommendation engine and suit it to your needs.)
