---
title: "Time"
---

# Time in SQRL

Time is an important concept in SQRL because it determines how data streams are processed.

For stream processing, it is useful to think of time as a timeline that stretches from the past through the present and into the future. The blue line in the picture below visualizes a timeline.

<img src="/img/reference/timeline.svg" alt="SQRL Timeline" width="100%" />

The blue vertical bar on the timeline represents the present. The present moment continuously advances on the timeline.

Each stream record processed by the system (shown as grey circles) is associated with a point on the timeline before the present. We call this point in time the **timestamp** of a stream record. The timestamp can be the time when an event occurred, a metric was observed, or a change happened.

## Now {#now}

SQRL uses the term **now** to designate the point in time to which the data pipeline has caught up in processing stream records. Now is the present moment from the perspective of the data pipeline. Now is marked as the orange vertical bar on the timeline.

Now is always behind the present. Now monotonically advances like the present, but it may not advance smoothly. If the data pipeline is operating with low latency, now can be just a few milliseconds behind the present. If stream records arrive with delay or the data pipeline is under a lot of load, now can be multiple seconds behind the present. And if the data pipeline crashes and restarts, now may fall minutes or hours behind the present and then catches back up as stream records are processed.

Now determines how time-based computations are executed. For example, when aggregating stream tables by time window, now determines when the time window closes.
```sql
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(t.price) AS spend, sum(t.saving) AS saved
      FROM @.purchases p JOIN p.totals t
      GROUP BY week ORDER BY week DESC;
```
The nested `spending` table aggregates users' orders by week and produces a stream table that contains one record per user per week with the weekly aggregates. That record is produced at the end of the week. The end of the week is determined by now and not the present time.

SQRL provides the function `now()` to refer to now in SQRL scripts.
```sql
Users.spending_last_week := SELECT sum(i.total) AS spend, 
            sum(i.discount) AS saved
      FROM @.purchases p JOIN p.items i
      WHERE p.time > now() - INTERVAL 7 DAY;
```
The nested `spending_last_week` table aggregates users' orders for the last week. It produces a state table since the aggregate changes as now advances, i.e. as older orders drop out of the aggregate and newer orders are added.

:::info
To summarize, use `now()` for recency comparisons and to refer to the present time in the data pipeline. 
:::

Note, that `now()` is different from the standard SQL function `CURRENT_TIMESTAMP` or database specific current-time functions like `now()` in MySQL. These SQL function return the current system time of the system that is executing the function. `now()` in SQRL returns the time to which the data pipeline has caught up in processing stream records. 

## Determining Timestamps

The timestamp of a stream table determines how stream records are associated with a point on the timeline and how now advances in the data pipeline.

In many cases, the DataSQRL compiler automatically determines the timestamp column based on the query or how the table is used.

For stream tables that are imported from a data source, the timestamp can be configured explicitly in the [import statement](../import#timestamp).

Stream tables that are imported from a data source have a hidden column `_ingest_time` which captures the system time when a given record was ingested by the system. In addition, the table has a hidden `_source_time` column if the system from which the record was ingested produces a timestamp for each record.

## Time Synchronization

The DataSQRL compiler synchronizes time between the components and systems of the data pipeline to ensure that all systems agree on now. However, millisecond imprecisions can arise at system boundaries due to communication overhead. 

:::note
Time synchronization between the stream engine and database engine is not yet implemented. Database engines
use the system time to represent now which can lead to inaccuracies if now has fallen far behind the present moment or the system time is configured incorrectly.
:::