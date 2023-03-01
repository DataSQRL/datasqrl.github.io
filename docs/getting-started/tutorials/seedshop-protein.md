# Protein Analysis for Happy Squirrels

For our seed shop, we want to add
another recommendation service that recommends products our customers are likely
to buy but might not have bought yet. \
Our nut shop customers closely watch their protein intake.
After all, if you are climbing trees all day you
need to feed your muscles. That's why we want to recommend products that
have a similar protein content to the average amount of protein a customer
has recently consumed.

First, let's compute the average recent protein intake based on a customer's
past purchases.

```sqrl
Customers.recent_avg_protein :=
      SELECT SUM(e.quantity * p.weight_in_gram * n.protein)/SUM(e.quantity * p.weight_in_gram)
      FROM @.purchases.items e JOIN e.product p JOIN p.nutrition n
      WHERE e.parent.date > now() - INTERVAL 6 MONTH;
```

In the `FROM` clause of this query, we are joining the order items a customer has
bought with the product information and the nutritional information so we can compute
the average protein content. Note, how we are using the previously defined relationships
instead of table names in the JOIN expressions to chain the relationships together.
In the `WHERE` clause we are filtering out any order that is older than 6 months by using
the special `now()` function which is used to define recent time slices.

`now()` stands for the current system time which means the result of this query will
change as time progresses.

We will use the value `recent_avg_protein` defined above to define another
nested table that ranks all the nut products we offer in the store by similarity
of protein content.

```sqrl
Customers.products_by_protein :=
SELECT p.id AS productid, 
       ABS(p.nutrition.protein - @.recent_avg_protein) AS protein_difference 
FROM Products p ORDER BY protein_difference ASC LIMIT 20;
```

Finally, we add a relationship to this nested table to relate those records back
to our `Products` table:

```sqrl
Customers.products_by_protein.product := JOIN Products ON Products.id = _productid LIMIT 1;
```