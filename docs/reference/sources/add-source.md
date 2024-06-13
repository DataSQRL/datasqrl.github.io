---
title: "Add Data Source"
---

# How to Add a Data Source

## Getting Started

When you are first getting started on a new project with DataSQRL, the easiest way to add a data source is to export your data (or a subset) to a [JSON Lines](https://jsonlines.org/) (i.e. line delimited json) or CSV files.

1. Place those files in a sub-folder at the root of your project. Let's say the folder is called `mySources`.
2. Import the data into your script via `IMPORT mySources.myDataFile;`

DataSQRL can automatically derive the configuration file and schema from static JSONL or CSV files. This makes it really easy to get started writing SQRL scripts without having to configure data connectors and figuring out how to access the source data systems.

Once you are ready to move to "real" data source connectors the files you used in the beginning remain useful for test cases.

## Defining A Source Configuration

