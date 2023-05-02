"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7009],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={title:"Data Pipeline"},o="What is a Data Pipeline?",s={unversionedId:"reference/concepts/data-pipeline",id:"reference/concepts/data-pipeline",title:"Data Pipeline",description:"A data pipeline is an automated, scalable system that facilitates the efficient flow, processing, and transformation of data from various sources to designated destinations like API endpoints or other data systems.",source:"@site/docs/reference/concepts/data-pipeline.md",sourceDirName:"reference/concepts",slug:"/reference/concepts/data-pipeline",permalink:"/docs/reference/concepts/data-pipeline",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/concepts/data-pipeline.md",tags:[],version:"current",frontMatter:{title:"Data Pipeline"},sidebar:"docs",previous:{title:"Data Service",permalink:"/docs/reference/concepts/data-service"},next:{title:"Deep-Dive & Developer Documentation",permalink:"/docs/dev/overview"}},l={},p=[{value:"How to Build a Data Pipeline",id:"how-to-build-a-data-pipeline",level:2},{value:"Ingestion and Processing",id:"ingestion-and-processing",level:3},{value:"Database",id:"database",level:3},{value:"Server",id:"server",level:3},{value:"Deploying a Data Pipeline",id:"deploying-a-data-pipeline",level:2},{value:"Faster Way to Build Data Pipelines",id:"faster-way-to-build-data-pipelines",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-a-data-pipeline"},"What is a Data Pipeline?"),(0,i.kt)("p",null,"A data pipeline is an automated, scalable system that facilitates the efficient flow, processing, and transformation of data from various sources to designated destinations like API endpoints or other data systems."),(0,i.kt)("p",null,"Many ",(0,i.kt)("a",{parentName:"p",href:"data-service"},"data services")," and streaming data APIs are implemented as data pipelines."),(0,i.kt)("h2",{id:"how-to-build-a-data-pipeline"},"How to Build a Data Pipeline"),(0,i.kt)("p",null,"The exact implementation steps for building a data pipeline depend on the chosen technologies that form the building blocks of the data pipeline like stream processors, databases, and API servers."),(0,i.kt)("p",null,"A high-level blueprint for implementing data pipelines consists of three consecutive stages:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ingestion and Processing"),": Retrieving or consuming data from external sources and preprocessing the data to fit use case requirements."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Database"),": Storing, analyzing, and querying the data."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Server"),": Serving the data through an API.")),(0,i.kt)("p",null,"Each stage may be implemented with one or multiple technologies, languages, frameworks, and tools."),(0,i.kt)("p",null,"Let's break down in more detail what needs to be done at each stage of a data pipeline."),(0,i.kt)("img",{src:"/img/index/withoutDataSQRL.svg",alt:"Steps for Building a Data Pipeline",width:"100%"}),(0,i.kt)("h3",{id:"ingestion-and-processing"},"Ingestion and Processing"),(0,i.kt)("p",null,"In the first stage, the following steps need to be implemented for retrieving and preprocessing the data:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement or configure access to data sources: Identify and access various data sources like databases, APIs, or files, and configure connection settings, authentication, and authorization as required.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement data synchronization: Develop mechanisms to retrieve data in real-time, determine timestamps and order, and handle data delays and retrieval failures to ensure data consistency and reliability.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Validate and clean input data: Inspect incoming data for correctness and consistency, handle errors for malformed data, and apply data cleansing techniques to ensure data quality.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Preprocess data: Transform and structure input data to meet use case requirements by performing tasks like filtering, normalizing, data extraction, or data flattening.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Write data to the database: Efficiently store the processed data in the database, handle failures and database overload, and ensure data durability and availability."))),(0,i.kt)("h3",{id:"database"},"Database"),(0,i.kt)("p",null,'To implement the "Database" stage of a data pipeline, one has to:'),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Design database schema: Create an organized and optimized structure to store data, considering factors like normalization, data types, and relationships among entities.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement queries: Develop queries to retrieve, analyze, and manipulate data based on use case requirements, using appropriate query languages and techniques.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Determine index structures: Design and implement indexing strategies to optimize query performance and reduce database response time.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Materialize slow queries: Identify slow and costly queries, and partially materialize result sets to improve performance by caching and reusing query results."))),(0,i.kt)("h3",{id:"server"},"Server"),(0,i.kt)("p",null,"Finally, to serve the processed data to users or downstream systems requires the following:"),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Design API specification: Define a clear and comprehensive API specification based on use case requirements, including endpoints, request/response formats, and authentication methods.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Map API to database queries: Create a mapping between API endpoints and corresponding database queries to efficiently retrieve and serve data to clients.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement API: Develop the API server to handle incoming requests, batch database queries, assemble result sets, and efficiently manage I/O operations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Develop API test suite: Create a comprehensive suite of tests to validate the functionality, performance, and correctness of the data pipeline, ensuring that it meets use case requirements and conforms to the API specification."))),(0,i.kt)("h2",{id:"deploying-a-data-pipeline"},"Deploying a Data Pipeline"),(0,i.kt)("p",null,"There is more work we need to do to get our data pipeline ready for production:"),(0,i.kt)("ol",{start:14},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scale Testing and optimization: Conduct performance tests simulating real-world conditions, including varying levels of data volume, velocity, and complexity, to ensure the data pipeline can handle expected workloads. Identify and address potential bottlenecks, optimize processing and storage operations, and fine-tune configuration settings to achieve optimal performance and resource utilization. Perform load and stress tests to assess the pipeline's resilience under high loads and determine its breaking points.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implementing observability across the entire pipeline: Integrate monitoring, logging, and tracing capabilities throughout the pipeline to provide visibility into its performance, health, and behavior. Set up appropriate metrics, log levels, and trace spans to gather data on system performance, error rates, and resource usage. Configure alerting mechanisms to notify relevant stakeholders of potential issues or anomalies in the pipeline. Observability allows for proactive issue detection, faster troubleshooting, and improved overall reliability.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Building deployment artifacts: Package the data pipeline components, including code, configurations, and dependencies, into deployable artifacts such as Docker containers, serverless function packages, or platform-specific bundles. Ensure that the artifacts are versioned and built in a consistent and reproducible manner using tools like continuous integration and build automation systems. Building deployment artifacts simplifies deployment, rollback, and dependency management in the target environment.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Automating the deployment process: Establish a streamlined and automated deployment process using continuous integration and continuous deployment (CI/CD) tools and practices. Configure automated tests, builds, and deployments triggered by code changes or other events. Implement infrastructure as code (IaC) principles to manage and provision infrastructure resources, ensuring a consistent and repeatable environment setup. Automating the deployment process minimizes human error, accelerates development cycles, and enables rapid iteration and updates to the data pipeline."))),(0,i.kt)("h2",{id:"faster-way-to-build-data-pipelines"},"Faster Way to Build Data Pipelines"),(0,i.kt)("p",null,"Sometimes you need to build custom data pipelines and have to shoulder all the work outlined above."),(0,i.kt)("p",null,"We believe - and of course we are highly biased - that DataSQRL is good enough for most data pipelines and can save you a ton of work. DataSQRL is a compiler and build tool for streaming data pipelines that generates a lot of the artifacts that comprise a data pipeline."),(0,i.kt)("p",null,"If you want to learn more about building data pipelines with DataSQRL we recommend you start with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/quickstart"},"Quickstart tutorial"),"."),(0,i.kt)("p",null,"No matter which route you choose, we wish you best of luck and would love to welcome you in ",(0,i.kt)("a",{parentName:"p",href:"/community"},"our community")," of data builders."))}u.isMDXComponent=!0}}]);