---
title: "Relationship"
---

# Relationships in SQRL

SQRL supports relationship columns which relate a row in one table to rows in another table.

```sql
Users.purchases := JOIN Orders ON Orders.customerid = @.id;
```

This statement defines a relationship column `purchases` on the `Users` table that relates each user record to rows in the `Orders` table where the `customerid` is equal to the user `id`. In other words, `purchases` relates users to their orders.

A relationship is defined via a `JOIN` expression in standard SQL syntax. Relationships are defined as [localized queries](../table#localized) which means the `JOIN` expression on the right-hand side of the statement is interpreted for each row of the table on which the relationship is defined and the at-sign `@` is used to refer to each row.

Relationship columns are a convenient way to make relationships in the data explicit, simplify joins, and allow consumers of the data API to navigate through the data.

## JOINs

Relationships can be used in `FROM` and `JOIN` clauses of queries which makes complex join-queries easier to read. 

```sql
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(t.price) AS spend, sum(t.saving) AS saved
      FROM @.purchases p JOIN p.totals t
      GROUP BY week ORDER BY week DESC;
```

This statement defines a nested table `spending` underneath `Users` which aggregates over the nested order `totals` for all purchases of each user. Relationships used in `FROM` and `JOIN` are expanded to their original definition. That means, `FROM @.purchases` gets expanded to `FROM @ JOIN Orders p ON p.customerid = @.id`.

Relationships are particularly useful in the context of nested tables because they make it easy to navigate between parent and child. In the [Quickstart tutorial](../../../getting-started/quickstart) we define the nested `Orders.totals` table as an aggregation over all items.

When defining a nested table, each child row has a relationship column `parent` to relates the child row to its parent row. Likewise, the parent table has a relationship column with the name of the nested table that provides access to all child rows of the parent.

Hence, we are able to use `JOIN p.totals` to join the totals for each order by following the `totals` relationship on the order row.

## Relationship Expressions {#expressions}

Relationships can be used inside expressions in a query.

```sql
UsersWithSpending := SELECT id, email, order_stats.spend AS spend 
                     FROM Users;
```
This statement defines a new table `UsersWithSpending` that combines user information with their total spending from the nested `order_stats` table we defined in the [intro tutorial](../../../getting-started/intro/advanced).

Using relationships in expressions simplifies the query by eliminating a join. 

Moreover, a relationship expression can be used to pull in optional data. `UsersWithSpending` contains one row per user and `order_stats.spend` evaluates to `null` if a user does not have any orders.

Contrast this with the following table definition that references the spending through an explicit join on the relationship:
```sql
UsersWithSpending := SELECT u.id, u.email, s.spend 
                     FROM Users u JOIN u.order_stats s;
```
This table contains only rows for users who placed an order since the `JOIN` on `u.order_stats` makes it required.

For SQL nerds: Relationships expressions are expanded to left-joins.

Relationship expression can also be used in WHERE clauses to filter out data.

```sql
HighSpendingUsers := SELECT id, email FROM Users 
                     WHERE order_stats.spend > 1000;
```
This table contains user information for those users who have spent more than a thousand dollars in total.

## API Access

The relationships defined in a SQRL script can be exposed in the resulting data API to give consumers of the API the ability to navigate through the data and retrieve related records. Relationships make it possible to represent complex data efficiently through the API.

To learn more about how to expose and navigate relationships in the data API, refer to the [API documentation](../../api/overview).

## Multiplicity

Relationships are defined as SQL `JOIN` clauses with the at-sign `@` used to refer to the table on which the relationship is defined.

In addition, we can add an `ORDER BY` and `LIMIT` clause to the relationship.

```sql
Users.recent_purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time LIMIT 10;
```

This statement defines the relationship column `recent_purchases` similar to the `purchases` relationship above but orders the related `Orders` row by `time` and restricts the number of related rows to 10.

The `ORDER BY` clause is used to make the order in which the related rows are returned in the API explicit.

The `LIMIT` clause is used to restrict the multiplicity of the relationship.
```sql
Users.last_purchase := JOIN Orders ON Orders.customerid = @.id LIMIT 1;
```
This statement defines a relationship with `0..1` multiplicity.