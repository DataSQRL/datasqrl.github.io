# File System

The file data system reads and writes data from a file system. That can be a local or attached file system, a cloud file system like AWS S3, HDFS, or URLs.

## File System Connector

```json title="system.discovery.table.json"
{
  "type": "source",
  "connector": {
    "name": "file",
    "directoryURI": "~/datasqrl/datasets/mydata",
    "fileURIs": [],
    "filenamePattern": "^([^\\.]+?)(?:_part.*)?$",
  }
}
```

The file connector has the following configuration options:

| Field Name   | Description   | Required?     |
|--------------|---------------|---------------|
| directoryURI | URI that identifies the directory of the data. | Yes, unless `fileURIs` is not empty  |
| fileURIs | List of URIs that identify the files of data. Can only be used as data source. | Yes, unless `directoryURI` is not empty  |
| filenamePattern | Regular expression pattern to identify multiple partitions of a file | No  |

When `directoryURI` is specified, data discovery locates all files in that directory. In addition, data is loaded incrementally as new files are added to the directory when DataSQRL is running.

`fileURIs` is an explicit list of files to use as table sources. Use `fileURIs` when reading the directory is not possible, or you want to control exactly which files in a directory are loaded. `fileURIs` can only be used as a data source.

The file connector expects either `directoryURI` or `fileURIs` to be configured, but not both.

When a dataset is partitioned into multiple files, configure the `filenamePattern` so that DataSQRL can identify all the files that belong to a single table. The default pattern groups assigns files with a `_part` suffix to one table. For example, the files `orders_part1.json`, `orders_part2.json`, and `orders_partSomething.json` are all source files for the `Orders` table. Note, that the filename pattern is applied to the name of the file without data format or compression extension.

`filenamePattern` is often used in combination with `directoryURI` to load in new data into a streaming table as files matching the pattern are added to the directory.

### Supported File Systems

DataSQRL supports both local and remote file systems for reading and writing data. The "scheme" of the `directoryURI` (i.e. the first part of the URI) determines what file system is used.

* **Local File System**: URIs that start with `file:` or a simple path on the local file system.
* **S3**: URIs that start with `s3:`.
* **HDFS**: URIS that start with `hdfs:`.
* **URL**: URIs that start with `http:` or `https`. Can only be used as a source.

### Data Format {#format}

The file system connector supports all [data formats](/docs/category/data-format).

The file system connector supports automatic data format discovery based on the file name extension. For example, a file that ends in `.json` is assumed to have the [JSON data format](../../format/json). That means, it is not necessary to configure a data format in the data system configuration.

If a data format is configured, automatic data format discovery is disabled and the format is applied to all files in the directory.

### Compression

The file system connector supports data compression and determines how to decompress files based on the extension. For example, a file that ends in `.json.gz` is decompressed with gzip.

The following compression algorithms are supported:

* **Gzip**: Extension `.gz`, `.gzip`
* **Deflate**: Extension `.deflate`
* **Bzip2**: Extension `.bz2`
* **XZ**: Extension `.xz`

DataSQRL expects the compression extension to come after the data format extension for automatic data format discovery.

## Data Discovery

Data discovery locates all files in the configured directory (or list of files). It extracts the extensions to determine the [compression algorithm](#compression) (if any) and [data format](#format) of the file. If a data format is configured, the format extension is ignored.

The `filenamePattern` regular expression is applied to the filename without extensions and the match for the first [capturing group](https://regexone.com/lesson/capturing_groups) is used as the table name.

Data discovery reads the data files to determine the schema if a schema is not specified.

Data discovery provides an easy shortcut for adding a data source from a directory with having to create a connector configuration: 

```bash
docker run --rm -v $PWD:/build datasqrl/cmd discover ~/datasqrl/datasets/mydata
```

Pass the path to a local directory or the URI for a remote directory as the first argument to the `discover` command, and it generates the data system configuration with default options before running data discovery.

## Data Sink

File system can be configured as a data sink by setting the `type` to `sink` or `source_and_sink`. `directoryURI` and `format` are required fields when using the file system as a sink. The exported stream table is written in batches to partitioned files inside the configured directory using the table name as sub-directory.

File system supports dynamic table sinks which means you only need to configure the `system.discovery.table.json` file and DataSQRL creates table sinks at compile time. You don't need to run data discovery or configure individual table sinks when using file system as a dynamic sink.