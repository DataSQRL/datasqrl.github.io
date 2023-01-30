---
title: "Focus on the Customer"
---

# Principle #1: Focus on the Customer


> **Focus on customer satisfaction through early and continuous delivery of valuable data services.**

The goal of any data service project is to deliver customer value. A data service, feature, or product is successful if the utility it provides to the customer exceeds its cost.

That's the Economics 101 insight from Captain Obvious. Yet, we have seen many data service projects that fail to keep this in mind because the focus shifts away from customer needs. 

## Why Data Services Fail to Deliver Customer Value

A data service project that kicks off with the goal of helping customers find products they like in an e-commerce store can quickly pivot via "how do we build a recommendation engine?", and "how do we predict customer orders based on purchase history?", to "how do we tune the hyperparameters of our random forest?". After a couple of iterations of those "problem refinements" one ends up pretty far removed from customer needs.

More generally, the focus of the data service development team often shifts from the needs of the customer to the needs of the data. What data do we have access to? How do we move the data from X to Y? What statistical properties does the data have? What features can we build with the data we have? What model best fits our data? And on and on it goes.

Obviously, the data is important. The point of a data service is to distill value out of the data. But the data is always a means to an end and not the end itself. You can have a model with an F1 score of 100 (i.e. a superbly excellent model) and still fail to deliver customer value.

## How to Deliver Customer Value

To avoid the gravitational pull that data problems frequently exert on data service projects, we found it useful to think of the data service development process as a shortest-path finding exercise between high-value customer needs and available data sources.

Put your customer needs on the right-hand side and your organization's sources of data on the left side. What is the quickest path to connect the two? Not the "best", or "most accurate" but the fastest in terms implementation time. The goal is to develop a working data service that meets customer needs in the shortest period of time.

Then we put that service in front of the customer to evaluate it. In the process, we learn about our customers' needs and about our data. We use those learnings to refine our understanding of the problem space. And then we repeat the process.

The key point is to learn quickly and to learn on both sides: we gain a better understanding of our customers' problem and how to solve it, while becoming more knowledgeable about our data and how to extract value from it. And you only truly learn about either side when you connect the two. It doesn't work to just analyze the data or just deep-dive on your customer problems. If you focus on one side without connecting it to the other, you are on a fishing expedition.

Finding the shortest path between your data and your customers' needs has a number of benefits:

* It expedites the learning cycle, so you don't waste time on implementations that don't deliver value by misunderstanding the problem space.
* It keeps the costs in balance with the value that is being generated. You want a positive ROI, and it is best to assess that early.
* It allows you to deliver value early and often to keep the team focused and demonstrate progress.

