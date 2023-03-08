---
title: "Time Functions"
---

# Time Functions

The time function package contains functions to convert, aggregate, and manipulate timestamps and DateTime scalars. The time function package is part of the standard SQRL function library.

```sql
IMPORT time.*; -- imports all time functions
IMPORT time.x; -- imports single time function
```

## Reference


| Function Name         | Description   | Time Window? |
|-----------------------|---------------|--------------|
|atZone|Returns the timestamp at the given timezone.|no|
|dayOfMonth|This SQL function returns  the day of the month for a given date. For example, DAYOFMONTH('2020-07-15') would return 15.|no|
|dayOfWeek|This SQL function returns  an integer representing the day of the week for a given date. For example, DAYOFWEEK('2020-07-01') returns 3, indicating that July 1, 2020 is a Wednesday.|no|
|dayOfYear|This SQL function returns  the day of the year for a given date. For example, DAYOFYEAR('2020-02-14') returns 45.|no|
|endOfDay|Time window function that returns the end of day for the timestamp argument.<br />E.g. `endOfDay(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T23:59:59.999999999Z`|yes|
|endOfHour|Time window function that returns the end of hour for the timestamp argument.<br />E.g. `endOfHour(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T18:59:59.999999999Z`|yes|
|endOfMinute|Time window function that returns the end of minute for the timestamp argument.<br />E.g. `endOfMinute(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T18:23:59.999999999Z`|yes|
|endOfMonth|Time window function that returns the end of month for the timestamp argument.<br />E.g. `endOfMonth(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-31T23:59:59.999999999Z`|yes|
|endOfSecond|Time window function that returns the end of second for the timestamp argument.<br />E.g. `endOfSecond(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T18:23:34.999999999Z`|yes|
|endOfWeek|Time window function that returns the end of week for the timestamp argument.<br />E.g. `endOfWeek(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T23:59:59.999999999Z`|yes|
|endOfYear|Time window function that returns the end of year for the timestamp argument.<br />E.g. `endOfYear(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-12-31T23:59:59.999999999Z`|yes|
|epochMilliToTimestamp|Converts the epoch timestamp in milliseconds to the corresponding timestamp.<br />E.g. `epochMilliToTimestamp(1678645414000)` returns the timestamp `2023-03-12T18:23:34Z`|no|
|epochToTimestamp|Converts the epoch timestamp in seconds to the corresponding timestamp.<br />E.g. `epochToTimestamp(1678645414)` returns the timestamp `2023-03-12T18:23:34Z`|no|
|hour|This SQL function returns  the hour of a given time value. For example, HOUR('12:30:15') returns 12.|no|
|minute|This SQL function returns  the minute of a given time value. For example, MINUTE('12:45:30') returns 45.|no|
|month|This SQL function returns  the month of a given date. For example, MONTH('2020-07-01') returns 7.|no|
|parseTimestamp|Parses a timestamp from an ISO timestamp string.|no|
|quarter|This SQL function returns  an integer value representing the quarter of the year for a given date. For example, QUARTER('2020-07-15') returns 3, representing the third quarter of the year.|no|
|second|This SQL function returns  the second item in a list of items. For example, SECOND('apple', 'banana', 'cherry') would return 'banana'.|no|
|timestampToEpoch|Returns the seconds since epoch for the given timestamp.<br />E.g. `timestampToEpoch(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the number `1678645414`|no|
|timestampToString|Converts the timestamp to an ISO timestamp string|no|
|week|This SQL function returns  the week number of the year for a given date. For example, WEEK('2020-02-14') returns 7, as February 14th is the 7th week of the year 2020.|no|
|year|This SQL function returns  the year from a given date. For example, YEAR('2020-01-01') would return 2020.|no|