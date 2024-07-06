---
title: "Time Functions"
---

# Time Functions

The time function package contains functions to convert, aggregate, and manipulate timestamps and DateTime scalars. The time function package is part of the standard SQRL function library.

```sql
IMPORT time.*; -- imports all time functions
IMPORT time.dayOfWeek; -- imports single time function
```

## Reference

The following table lists all the functions in the time package with a short description. The table also specifies whether a function is a [time-window](../../stream##aggregation) function.

| Function Name         | Description   | Time Window? |
|-----------------------|---------------|--------------|
| atZone | Returns the timestamp at the given timezone. | no | 
| dayOfMonth | This SQL function returns  the day of the month for a given date. For example, dayOfMonth('2020-07-15') would return 15. | no | 
| dayOfWeek | This SQL function returns  an integer representing the day of the week for a given date. For example, dayOfWeek('2020-07-01') returns 3, indicating that July 1, 2020 is a Wednesday. | no | 
| dayOfYear | This SQL function returns  the day of the year for a given date. For example, dayOfYear('2020-02-14') returns 45. | no | 
| endOfDay | Time window function that returns the end of day for the timestamp argument.<br />E.g. `endOfDay(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T23:59:59.999999999Z` | yes | 
| endOfHour | Time window function that returns the end of hour for the timestamp argument.<br />E.g. `endOfHour(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T18:59:59.999999999Z` | yes | 
| endOfMinute | Time window function that returns the end of minute for the timestamp argument.<br />E.g. `endOfMinute(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T18:23:59.999999999Z` | yes | 
| endOfMonth | Time window function that returns the end of month for the timestamp argument.<br />E.g. `endOfMonth(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-31T23:59:59.999999999Z` | yes | 
| endOfSecond | Time window function that returns the end of second for the timestamp argument.<br />E.g. `endOfSecond(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T18:23:34.999999999Z` | yes | 
| endOfWeek | Time window function that returns the end of week for the timestamp argument.<br />E.g. `endOfWeek(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-03-12T23:59:59.999999999Z` | yes | 
| endOfYear | Time window function that returns the end of year for the timestamp argument.<br />E.g. `endOfYear(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the timestamp `2023-12-31T23:59:59.999999999Z` | yes | 
| epochMilliToTimestamp | Converts the epoch timestamp in milliseconds to the corresponding timestamp.<br />E.g. `epochMilliToTimestamp(1678645414000)` returns the timestamp `2023-03-12T18:23:34Z` | no | 
| epochToTimestamp | Converts the epoch timestamp in seconds to the corresponding timestamp.<br />E.g. `epochToTimestamp(1678645414)` returns the timestamp `2023-03-12T18:23:34Z` | no | 
| hour | This SQL function returns  the hour of a given time value. For example, hour('12:30:15') returns 12. | no | 
| minute | This SQL function returns  the minute of a given time value. For example, minute('12:45:30') returns 45. | no | 
| month | This SQL function returns  the month of a given date. For example, month('2020-07-01') returns 7. | no | 
| parseTimestamp | Parses a timestamp from an ISO timestamp string. | no | 
| quarter | This SQL function returns  an integer value representing the quarter of the year for a given date. For example, quarter('2020-07-15') returns 3, representing the third quarter of the year. | no | 
| second | This SQL function returns  the second item in a list of items. For example, second('apple', 'banana', 'cherry') would return 'banana'. | no | 
| timestampToEpoch | Returns the seconds since epoch for the given timestamp.<br />E.g. `timestampToEpoch(parseTimestamp(2023-03-12T18:23:34.083Z))` returns the number `1678645414` | no | 
| timestampToString | Converts the timestamp to an ISO timestamp string | no | 
| week | This SQL function returns  the week number of the year for a given date. For example, week('2020-02-14') returns 7, as February 14th is the 7th week of the year 2020. | no | 
| year | This SQL function returns  the year from a given date. For example, year('2020-01-01') would return 2020. | no | 

| Function Name                                   | Description                                                                                                                | 
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `EndOfHour(timestamp, multiple, offset)`        | Computes the end of the hour for a given timestamp, adjusted by a multiple of hours and an hour offset. For example, `EndOfHour(NOW(), 1, 0)` computes the end of the current hour, while `EndOfHour(NOW(), 2, 0)` computes the end of the next hour.  |
| `EpochMilliToTimestamp(epochMillis)`            | Converts milliseconds since the Unix epoch (January 1, 1970, 00:00:00 GMT) to a TIMESTAMP. For example, `EpochMilliToTimestamp(1609459200000L)` converts the given epoch milliseconds to a timestamp. |
| `EndOfYear(timestamp, multiple, offset)`        | Calculates the last moment of the year for a given timestamp, adjusting by multiples of years and a day offset. For example, `EndOfYear(NOW(), 1, 0)` finds the end of the current year. |
| `EndOfMinute(timestamp, multiple, offset)`      | Computes the end of the minute for the provided timestamp, optionally adjusted by multiples of minutes and a minute offset. For example, `EndOfMinute(NOW(), 1, 0)` will return the end of the current minute. |
| `ParseTimestamp(s, format)`                     | Parses a timestamp from a given string using the specified format. For example, `ParseTimestamp('2021-01-01T12:00:00Z', 'yyyy-MM-dd\'T\'HH:mm:ssX')` returns the corresponding timestamp. |
| `TimestampToEpoch(timestamp)`                   | Converts a TIMESTAMP to epoch seconds. For example, `TimestampToEpoch(TO_TIMESTAMP('1970-01-01 00:00:00'))` returns 0. |
| `TimestampToEpochMilli(timestamp)`              | Converts a TIMESTAMP to epoch milliseconds. For example, `TimestampToEpochMilli(TO_TIMESTAMP('1970-01-01 00:00:00'))` returns 0. |
| `EndOfDay(timestamp, multiple, offset)`         | Determines the end of the day for a given timestamp, with adjustments possible through multiples of days and an offset in days. For example, `EndOfDay(NOW(), 1, 0)` will return the very end of the current day. |
| `EndOfSecond(timestamp, multiple, offset)`      | Calculates the end of the second for a given timestamp, adjusted by multiples of seconds and a second offset. For example, `EndOfSecond(NOW(), 1, 0)` returns the end of the current second. |
| `EndOfMonth(timestamp, multiple, offset)`       | Finds the last moment of the month for a given timestamp, adjustable by multiples of months and a day offset. For example, `EndOfMonth(NOW(), 1, 0)` finds the end of the current month. |
| `EndOfWeek(timestamp, multiple, offset)`        | Computes the end of the week for a given timestamp, taking into account week multiples and a day offset. For example, `EndOfWeek(NOW(), 1, 0)` will return the end of the current week. |
| `AtZone(timestamp, zone)`                       | Converts a timestamp to a different time zone specified by `zone`. For example, `AtZone(NOW(), 'America/New_York')` converts the current timestamp to Eastern Standard Time. |
