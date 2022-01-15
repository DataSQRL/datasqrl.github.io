---
sidebar_position: 1
---

# Customer 360 Tutorial

Because we have the humor of a middle schooler on Adderall, this introductory tutorial
will implement data-driven features for our online DataSQRL nut shop.

The DataSQRL nut shop is a pretty basic online shop that processes and keeps track of orders 
placed by customers. We want to add Customer 360 functionality to the shop, which means given 
customers insights into their past orders and recommending products to purchase. In short, we
want to use the data we have about our customers to sell them nuts with a personalized touch.

![DataSQRL Nut Shop](/img/getting-started/tutorial/nutshop.jpg)

## Setup {#setup}

Before the fun begins, we need to do a little bit of prep work.

First, we want to make sure you have DataSQRL installed on your machine so you can follow the
steps in this tutorial and run the examples. Follow the [Download & Install](/docs/category/download--install)
instruction. It'll be quick. We will wait right here.

Sweet, now that you got DataSQRL installed, we just need the data files for this tutorial so you
can build an actual data service for the nut shop. [Click here](https://someurl.com) to download
them and unzip that archive into a development folder of your choice.

Finally, let's fire up DataSQRL:

```bash
datasqrl run
```

## Adding Data Source {#adding-data}

