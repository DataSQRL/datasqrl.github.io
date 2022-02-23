

# How does DataSQRL compare to other Data Technologies?

But how do you know if DataSQRL is the right choice for you? While it depends a lot on the specifics of your situation, the following heuristics are generally useful:

1. If your data needs are so simple that they are mostly satisfied by mapping database records onto objects, then use an ORM (object-relational mapper) library, make sure you have the right indexes installed in the database, and add the odd custom SQL query where needed.
2. If your data needs are so complex that they require a team of data scientists, data engineers, ML specialist, MLOps to be satisfied, then you likely need a custom data pipeline that glues together multiple data systems.
3. For anything in between, try DataSQRL.

Be careful with heuristic 2: We frequently see organizations that think they need to bring in the whole caboodle of data scientists, data engineers, MLOps, etc to build some simple data analytics into their product. Don't call the Navy to shoot a sparrow.

Essentially, this boils down to: If you need more than a CRUD app but are not trying to compete with Google's algorithms, then DataSQRL is a pragmatic choice that gets you good results quickly with little effort.