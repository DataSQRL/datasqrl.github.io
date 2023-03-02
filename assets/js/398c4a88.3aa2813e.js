"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7625],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Add Source/Sink"},i="Adding a Data Source or Sink",s={unversionedId:"reference/sources/discovery",id:"reference/sources/discovery",title:"Add Source/Sink",description:"Data discovery is the easiest way to connect a data source or sink to DataSQRL and add a data source/sink package.",source:"@site/docs/reference/sources/discovery.md",sourceDirName:"reference/sources",slug:"/reference/sources/discovery",permalink:"/docs/reference/sources/discovery",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/sources/discovery.md",tags:[],version:"current",frontMatter:{title:"Add Source/Sink"},sidebar:"docs",previous:{title:"Data Sources and Sinks",permalink:"/docs/reference/sources/overview"},next:{title:"Data System",permalink:"/docs/category/data-system"}},l={},c=[{value:"1. Configure Data System",id:"datasystem",level:2},{value:"Connection Configuration",id:"connector",level:3},{value:"Data Format",id:"format",level:3},{value:"Schema",id:"schema",level:3},{value:"2. Run Data Discovery",id:"2-run-data-discovery",level:2},{value:"Data Analysis",id:"data-analysis",level:3},{value:"3. Adjust Schema (optional)",id:"3-adjust-schema-optional",level:2},{value:"Manual Data Source/Sink Definition",id:"manual",level:2},{value:"Data Source Definition",id:"data-source-definition",level:3},{value:"Data Sink Definition",id:"data-sink-definition",level:3}],d={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-a-data-source-or-sink"},"Adding a Data Source or Sink"),(0,r.kt)("p",null,"Data discovery is the easiest way to connect a data source or sink to DataSQRL and add a ",(0,r.kt)("a",{parentName:"p",href:"overview"},"data source/sink package"),"."),(0,r.kt)("p",null,"Data discovery inspects a data system to discover available data sources and sinks and generates the configuration files for the data source/sink package that allows DataSQRL to ingest data from and export data to the system."),(0,r.kt)("p",null,"Data discovery is done in 2 steps:"),(0,r.kt)("h2",{id:"datasystem"},"1. Configure Data System"),(0,r.kt)("p",null,"First, create a configuration file with the connection details for the data system you want to use as a source or sink. In an empty directory, create a configuration file with the file name ",(0,r.kt)("inlineCode",{parentName:"p"},"datasystem.json"),"."),(0,r.kt)("p",null,"The following is an example data system configuration file for a data source that reads data from the local file system. Copy the content into the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasystem.json")," file to use as a starting point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="datasystem.json"',title:'"datasystem.json"'},'{\n  "type": "source",\n  "name": "ecommerce-data",\n  "charset": "UTF-8",\n  "connector": {\n    "systemType": "file",\n    "directoryURI": "~/datasqrl/datasets/mydata"\n  },\n  "format": {\n    "formatType": "json"\n  }\n}\n')),(0,r.kt)("p",null,"Change the value of the fields to configure your own data source or sink. The following table explains each of the fields."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"One of ",(0,r.kt)("inlineCode",{parentName:"td"},"source"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sink"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"source_and_sink")," to specify whether this data system is a source, sink, or both. ",(0,r.kt)("br",null)," DataSQRL imports data from sources and exports data to sinks."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the data system. Used in debugging output to identify a source/sink."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"charset"),(0,r.kt)("td",{parentName:"tr",align:null},"The charset encoding to use if imported or exported data is text. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"UTF-8"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection configuration for the data system. ",(0,r.kt)("a",{parentName:"td",href:"#connector"},"See below")," for more details."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},"Data format configuration that specifies how to read and write data. ",(0,r.kt)("a",{parentName:"td",href:"#format"},"See below")," for more details."),(0,r.kt)("td",{parentName:"tr",align:null},"Depends on connector")))),(0,r.kt)("h3",{id:"connector"},"Connection Configuration"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connector")," field contains the configuration for connecting to a particular data system. The connector configuration depends on the type of data system you want to connect to. The ",(0,r.kt)("inlineCode",{parentName:"p"},"systemType")," field in the connector configuration determines which data system is configured."),(0,r.kt)("p",null,"DataSQRL currently supports the following types of data systems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"system/file"},(0,r.kt)("strong",{parentName:"a"},"File System"))," ",(0,r.kt)("em",{parentName:"li"},"(source and sink, dynamic table sinks)"),": Local file system, cloud storage, HDFS and other file based storage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"system/kafka"},(0,r.kt)("strong",{parentName:"a"},"Apache Kafka"))," ",(0,r.kt)("em",{parentName:"li"},"(source and sink)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"system/print"},(0,r.kt)("strong",{parentName:"a"},"Print"))," ",(0,r.kt)("em",{parentName:"li"},"(sink only, dynamic table sinks)"))),(0,r.kt)("p",null,"Click on the data system type to learn how to configure the connection and additional information about using a particular data system."),(0,r.kt)("h3",{id:"format"},"Data Format"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," field specifies the data format to use for reading and writing data. The ",(0,r.kt)("inlineCode",{parentName:"p"},"formatType")," field in the format configuration determines which data format is configured."),(0,r.kt)("p",null,"DataSQRL currently supports the following data formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"format/json"},(0,r.kt)("strong",{parentName:"a"},"JSON"))," ",(0,r.kt)("em",{parentName:"li"},"(discovers schema)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"format/csv"},(0,r.kt)("strong",{parentName:"a"},"CSV"))," ",(0,r.kt)("em",{parentName:"li"},"(discovers schema)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"format/avro"},(0,r.kt)("strong",{parentName:"a"},"Avro"))," ",(0,r.kt)("em",{parentName:"li"},"(requires schema)"))),(0,r.kt)("p",null,"Click on a data format to learn how to configure it and what configuration options are available."),(0,r.kt)("p",null,"The data format configuration is required unless data discovery can infer the data format automatically from available metadata. Review the documentation for the ",(0,r.kt)("a",{parentName:"p",href:"#connector"},"data connector")," you are using to determine whether it supports automatic format discovery."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Are you missing a data system connector or data format? You can ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/contribute"},"contribute")," one to the open-source project or reach out to the ",(0,r.kt)("a",{parentName:"p",href:"/community"},"community")," to request it.")),(0,r.kt)("h3",{id:"schema"},"Schema"),(0,r.kt)("p",null,"DataSQRL has a pluggable and flexible schema manager for structuring and validating data. Each table in a data source package must have a flexible or strict schema."),(0,r.kt)("p",null,"DataSQRL supports automatic schema discovery for data formats that have a flexible schema, such as ",(0,r.kt)("a",{parentName:"p",href:"format/json"},"JSON")," and ",(0,r.kt)("a",{parentName:"p",href:"format/csv"},"CSV"),". In those cases, DataSQRL inspects the data to discover the data structure and configures a flexible schema for each table using the DataSQRL-specific ",(0,r.kt)("a",{parentName:"p",href:"schema"},"schema format"),"."),(0,r.kt)("p",null,"Some formats, such as ",(0,r.kt)("a",{parentName:"p",href:"format/avro"},"Avro"),", require a user-provided schema to read and write data in that format. Check the ",(0,r.kt)("a",{parentName:"p",href:"#format"},"data format")," to see if it requires a user-provided schema. "),(0,r.kt)("p",null,"If you have schema definitions for the tables in your data source or sink, you can provide it to data discovery in order to use your schema definitions for the data source configuration and disable automatic schema discovery. The benefit of using an existing schema is that DataSQRL can use it for data validation and optimization of the data pipeline."),(0,r.kt)("p",null,"DataSQRL supports the following types of schema:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"schema"},(0,r.kt)("strong",{parentName:"a"},"DataSQRL Schema")),": Flexible schema for ",(0,r.kt)("a",{parentName:"li",href:"format/csv"},"CSV")," and ",(0,r.kt)("a",{parentName:"li",href:"format/json"},"JSON"),". Extension ",(0,r.kt)("inlineCode",{parentName:"li"},".schema.yml"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"format/json#schema"},(0,r.kt)("strong",{parentName:"a"},"JSON Schema")),": Standard schema for ",(0,r.kt)("a",{parentName:"li",href:"format/json"},"JSON"),". Extension ",(0,r.kt)("inlineCode",{parentName:"li"},".schema.json"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"format/avro#schema"},(0,r.kt)("strong",{parentName:"a"},"Avro Schema")),": Standard schema for ",(0,r.kt)("a",{parentName:"li",href:"format/avro"},"Avro"),". Extension ",(0,r.kt)("inlineCode",{parentName:"li"},".schema.avsc"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Providing schemas is optional, and you can skip the next step, unless the ",(0,r.kt)("a",{parentName:"p",href:"#format"},"data format")," requires a schema.")),(0,r.kt)("p",null,"If you want to or have to provide a schema for the tables in your data source or sink, place a schema file for each table in the data source/sink in the same directory as the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasystem.json")," file. The file name of the schema file is the name of the table (in lowercase) with the extension of the schema type."),(0,r.kt)("p",null,"For example, the file name of the DataSQRL schema for the table ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"orders.schema.yml"),". "),(0,r.kt)("p",null,"Refer to the documentation pages of each schema type for their extension and more information."),(0,r.kt)("h2",{id:"2-run-data-discovery"},"2. Run Data Discovery"),(0,r.kt)("p",null,"Invoke the DataSQRL discovery command to run data discovery for the data source or sink configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasystem.json")," file. Run the command in the same directory as the configuration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v $PWD:/build datasqrl/datasqrl-cmd discover datasystem.json\n")),(0,r.kt)("p",null,"This command inspects the configured data system and discovers all available tables and their schema. It requires that the machine on which you execute the command can connect to the data system with the provided configuration. "),(0,r.kt)("p",null,"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"discover")," command and its options, refer to the ",(0,r.kt)("a",{parentName:"p",href:"../operations/command#discover"},"command-line documentation"),". If your data system configuration uses secrets, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/operations/deploy/secrets"},"secrets handling"),"."),(0,r.kt)("h3",{id:"data-analysis"},"Data Analysis"),(0,r.kt)("p",null,"If data discovery is set up to discover the schema ",", the ",(0,r.kt)("inlineCode",{parentName:"p"},"discover")," command will run data analysis. Data Analysis ingests (a subset of) the data from the configured data source and computes a profile of the data. Data discovery then generates a ",(0,r.kt)("a",{parentName:"p",href:"schema"},"flexible schema")," "," for each discovered table from the data profile.  "),(0,r.kt)("p",null,"Data analysis runs a full data pipeline as part of data discovery. The data pipeline is generated by DataSQRL and executed on the local machine where the command is executed. The data pipeline can be configured like any other pipeline through the ",(0,r.kt)("a",{parentName:"p",href:"../operations/package-config"},"DataSQRL configuration"),"."),(0,r.kt)("p",null,"If the data source contains a lot of data or is unbounded (e.g. a Kafka stream), then data analysis can take a long time to analyze the data. By default, data analysis runs for an hour before it terminates. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-l")," to specify the runtime for data analysis in seconds."),(0,r.kt)("h2",{id:"3-adjust-schema-optional"},"3. Adjust Schema (optional)"),(0,r.kt)("p",null,"When data discovery generates the table schemas, we recommend that you review the schema files to verify that they correctly represent the data. If data analysis terminated before analyzing all data, the schema may not be accurate.  And in some cases, you may want to make the schema more or less restrictive."),(0,r.kt)("p",null,"The table schemas are stored in files that end in ",(0,r.kt)("inlineCode",{parentName:"p"},".schema.yml"),". For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table the schema is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"orders.schema.yml"),"."),(0,r.kt)("p",null,"Review the ",(0,r.kt)("a",{parentName:"p",href:"schema"},"DataSQRl schema")," for more information on the schema format and how to modify it."),(0,r.kt)("h2",{id:"manual"},"Manual Data Source/Sink Definition"),(0,r.kt)("p",null,"Data discovery makes it easy to configure a data source or sink package for DataSQRL, because it generates the configuration and schema files for you. It also validates that the data system configuration is correct by connecting to and inspecting the data system. We recommend that you use data discovery to add a new data source or sink."),(0,r.kt)("p",null,"You can manually define a data source/sink package, if it is not possible to run data discovery, or you want to update an existing package.  "),(0,r.kt)("h3",{id:"data-source-definition"},"Data Source Definition"),(0,r.kt)("p",null,"A data source is a set of tables. Each table is defined by a table configuration and schema file. To define a data source, we create a configuration and schema file for each table. The files have the name of the table (in lowercase) and end in ",(0,r.kt)("inlineCode",{parentName:"p"},".table.json")," for the configuration file and the schema type extension for the schema file (refer to the ",(0,r.kt)("a",{parentName:"p",href:"#schema"},"schema type")," for the extension)."),(0,r.kt)("p",null,"For example, to define the source for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table with a ",(0,r.kt)("a",{parentName:"p",href:"schema"},"DataSQRL schema"),", we create the ",(0,r.kt)("inlineCode",{parentName:"p"},"orders.table.json")," configuration file and ",(0,r.kt)("inlineCode",{parentName:"p"},"orders.schema.yml")," schema file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="orders.table.json"',title:'"orders.table.json"'},'{\n  "type": "source",\n  "name": "orders",\n  "identifier": "orders",\n  "charset": "UTF-8",\n  "connector": {\n    "directoryURI": "~/datasqrl/datasets/mydata",\n    "systemType": "file"\n  },\n  "format": {\n    "formatType": "json"\n  }\n}\n')),(0,r.kt)("p",null,"The table configuration is almost identical to the ",(0,r.kt)("a",{parentName:"p",href:"#datasystem"},"data system configuration")," above. The only difference is the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," field which specifies how to identify the table data inside the data system. In the example above, we are using the file system connector and the identifier ",(0,r.kt)("inlineCode",{parentName:"p"},"orders")," represents the name of the file that contains the data for the ",(0,r.kt)("inlineCode",{parentName:"p"},"orders")," table. The name in the table configuration file is the name of the table."),(0,r.kt)("p",null,"The connector configuration for a table may also have additional configuration options. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#connector"},"data system connector")," documentation for more information."),(0,r.kt)("p",null,"The contents of the schema file for a table depend on the type of schema you are using. Refer to the documentation for each supported ",(0,r.kt)("a",{parentName:"p",href:"#schema"},"schema type")," for more information."),(0,r.kt)("h3",{id:"data-sink-definition"},"Data Sink Definition"),(0,r.kt)("p",null,"Defining a data sink is analogous to defining a data source. "),(0,r.kt)("p",null,"However, table schemas are optional when defining a data sink. If a table schema is provided, DataSQRL validates that the exported data is compatible with the schema of the table sink at compile time. If no schema is provided, DataSQRL assumes that the sink can consume the exported data which may lead to runtime issues."),(0,r.kt)("p",null,"Some data systems, such as ",(0,r.kt)("a",{parentName:"p",href:"system/file"},"file system")," and ",(0,r.kt)("a",{parentName:"p",href:"system/print"},"print"),", can dynamically generate table sinks at compile time, which means defining a data sink only requires the data system configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"datasystem.json")," and no table configurations. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#connector"},"data system")," documentation for data systems that support dynamic sink table generation."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"TODO:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rename datadiscovery to connector"),(0,r.kt)("li",{parentName:"ul"},'rename "dir" to "file"'),(0,r.kt)("li",{parentName:"ul"},"always have one schema file per table"),(0,r.kt)("li",{parentName:"ul"},"Some sinks don't require data discovery (file, print). Make that clear on the respective documentation pages.")))}p.isMDXComponent=!0}}]);