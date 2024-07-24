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

The following table lists all the functions in the time package with a short description. The table also specifies whether a function is a time-window function.

| Function Name                                   | Description                                                                                                                | 
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `EndOfSecond(timestamp, multiple, offset)`      | Calculates the end of the second for a given timestamp, adjusted by multiples of seconds and a second offset. For example, `EndOfSecond(NOW(), 1, 0)` returns the end of the current second. |
| `EndOfMinute(timestamp, multiple, offset)`      | Computes the end of the minute for the provided timestamp, optionally adjusted by multiples of minutes and a minute offset. For example, `EndOfMinute(NOW(), 1, 0)` will return the end of the current minute. |
| `EndOfHour(timestamp, multiple, offset)`        | Computes the end of the hour for a given timestamp, adjusted by a multiple of hours and an hour offset. For example, `EndOfHour(NOW(), 1, 0)` computes the end of the current hour, while `EndOfHour(NOW(), 2, 0)` computes the end of the next hour.  |
| `EndOfWeek(timestamp, multiple, offset)`        | Computes the end of the week for a given timestamp, taking into account week multiples and a day offset. For example, `EndOfWeek(NOW(), 1, 0)` will return the end of the current week. |
| `EndOfMonth(timestamp, multiple, offset)`       | Finds the last moment of the month for a given timestamp, adjustable by multiples of months and a day offset. For example, `EndOfMonth(NOW(), 1, 0)` finds the end of the current month. |
| `EndOfYear(timestamp, multiple, offset)`        | Calculates the last moment of the year for a given timestamp, adjusting by multiples of years and a day offset. For example, `EndOfYear(NOW(), 1, 0)` finds the end of the current year. |
| `EpochMilliToTimestamp(epochMillis)`            | Converts milliseconds since the Unix epoch (January 1, 1970, 00:00:00 GMT) to a TIMESTAMP. For example, `EpochMilliToTimestamp(1609459200000L)` converts the given epoch milliseconds to a timestamp. |
| `ParseTimestamp(s, format)`                     | Parses a timestamp from a given string using the specified format. For example, `ParseTimestamp('2021-01-01T12:00:00Z', 'yyyy-MM-dd\'T\'HH:mm:ssX')` returns the corresponding timestamp. |
| `TimestampToEpoch(timestamp)`                   | Converts a TIMESTAMP to epoch seconds. For example, `TimestampToEpoch(TO_TIMESTAMP('1970-01-01 00:00:00'))` returns 0. |
| `TimestampToEpochMilli(timestamp)`              | Converts a TIMESTAMP to epoch milliseconds. For example, `TimestampToEpochMilli(TO_TIMESTAMP('1970-01-01 00:00:00'))` returns 0. |
| `EndOfDay(timestamp, multiple, offset)`         | Determines the end of the day for a given timestamp, with adjustments possible through multiples of days and an offset in days. For example, `EndOfDay(NOW(), 1, 0)` will return the very end of the current day. |
| `AtZone(timestamp, zone)`                       | Converts a timestamp to a different time zone specified by `zone`. For example, `AtZone(NOW(), 'America/New_York')` converts the current timestamp to Eastern Standard Time. |
