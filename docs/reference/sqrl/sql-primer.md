---
title: "SQL Primer"
---

# The DataSQRL SQL Primer

[SQL](https://en.wikipedia.org/wiki/SQL) (Structured Query Language) is the standard query language used by relational database systems.

[SQRL](../../overview) is based on SQL and this documentation assumes basic familiarity with SQL for writing queries.

## SQL Tutorials {#tutorials}

If you haven't used SQL before, we recommend that you follow ones of these tutorials until you feel comfortable writing `SELECT .. FROM .. WHERE .. GROUP BY` queries. The investment to learn SQL is going to pay off whether or not you are going to use DataSQRL.

* [SQLBolt](https://sqlbolt.com/): SQLBolt provides an interactive tutorial for SQL beginners. The tutorial is divided into several lessons that cover different SQL concepts. Each lesson includes a set of interactive exercises that allow users to practice SQL queries.

* [Khan Academy SQL Course](https://www.khanacademy.org/computing/computer-programming/sql): Khan Academy offers a free, self-paced SQL course that covers the basics of SQL syntax and querying data. The course includes interactive exercises to help reinforce the concepts learned.

* [W3Schools SQL Tutorial](https://www.w3schools.com/sql/): W3Schools is a popular web development tutorial website that provides a comprehensive SQL tutorial. The tutorial includes explanations, examples, and exercises that cover basic and advanced SQL concepts.

We listed a number of tutorials we like. Pick one of those or choose your own. There are lots of great resources on SQL out there.

## SQL Refresher {#refresher}

SQRL uses SQL `SELECT` queries to define [tables](../table). A `SELECT` query has the structure:

```sql
SELECT columns FROM table JOIN otherTable ON joinCondition 
    WHERE filterCondition 
    GROUP BY groupingColumns
    ORDER BY orderColumn [ASC|DESC]
    LIMIT number;
```

In addition, the `UNION ALL` operator is used to combine data from multiple queries. 

The column expression after `SELECT` and the conditions can include function calls to manipulate data and predicates in filters. Common SQL functions and predicates include:

* Aggregation Functions: `min`, `max`, `avg`, `count`, and `count distinct`
* Conditional Functions: `case when`, `coalesce`
* Predicates: `in`, `between`

Time intervals are specified with the `INTERVAL` syntax, such as `INTERVAL 5 DAY`.

If all of the above looks familiar to you, you know enough SQL to learn SQRL quickly. Otherwise, we recommend you do a quick google search to refresh your memory or follow one of the [tutorials](#tutorials) above.


