"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Deploy Data Layer"},i="Deploying the Data Layer",s={unversionedId:"getting-started/intro/deploy",id:"getting-started/intro/deploy",title:"Deploy Data Layer",description:"You've gone through the introductory tutorial and seen DataSQRL compile SQRL scripts and API specifications into integrated data layers that ingest, process, and serve data through an API.",source:"@site/docs/getting-started/intro/deploy.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/deploy",permalink:"/docs/getting-started/intro/deploy",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/intro/deploy.md",tags:[],version:"current",frontMatter:{title:"Deploy Data Layer"},sidebar:"docs",previous:{title:"Advanced Concepts",permalink:"/docs/getting-started/intro/advanced"},next:{title:"What is DataSQRL?",permalink:"/docs/getting-started/concepts/datasqrl"}},l={},p=[{value:"How the Compiler Works",id:"how-the-compiler-works",level:2},{value:"Build Executables",id:"build-executables",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-the-data-layer"},"Deploying the Data Layer"),(0,r.kt)("p",null,"You've gone through the ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"introductory tutorial")," and seen DataSQRL compile SQRL scripts and API specifications into integrated data layers that ingest, process, and serve data through an API."),(0,r.kt)("p",null,"Now we are going to take a closer look at ",(0,r.kt)("strong",{parentName:"p"},"how")," DataSQRL builds those data layers in order to deploy them."),(0,r.kt)("p",null,"So far, we have used the DataSQRL ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command to run our SQRL scripts. The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command is great for developing and testing our SQRL scripts because it compiles, builds, and deploys data layers in a single process. To deploy SQRL scripts into production, we want more control over how the data layer gets deployed. And if you are using DataSQRL for the first time, you probably want to know exactly how the sausage gets made."),(0,r.kt)("p",null,"Let's dive right in and peak behind the curtain of DataSQRL's compilation process."),(0,r.kt)("img",{src:"/img/reference/compilation_simplified.svg",alt:"DataSQRL Compilation >",width:"40%"}),(0,r.kt)("h2",{id:"how-the-compiler-works"},"How the Compiler Works"),(0,r.kt)("p",null,"The DataSQRL compiler is configured through the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," configuration file placed in the same directory as your SQRL script. If no configuration file is provided, DataSQRL will generate a default one for you."),(0,r.kt)("p",null,"Since we want to control exactly how our data layer gets deployed, we are going to create a custom compiler configuration for the ",(0,r.kt)("a",{parentName:"p",href:"../../quickstart"},"Quickstart example"),". Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," in the same folder as the ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.sqrl")," script with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "engines" : {\n    "streams" : {\n      "name" : "flink"\n    },\n    "database" : {\n      "name" : "jdbc",\n      "user" : "postgres",\n      "password" : "postgres",\n      "database" : "datasqrl",\n      "dialect" : "postgres",\n      "driver" : "org.postgresql.Driver",\n      "url" : "jdbc:postgresql://database:5432/datasqrl"\n    },\n    "server" : {\n      "name" : "vertx"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This configures the engines we want in our data layer: ",(0,r.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," (a distributed stream processor) as the stream processing engine, ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres")," (a relational database) as the database engine, and ",(0,r.kt)("a",{parentName:"p",href:"https://vertx.io/"},"Vertx")," (a reactive JVM server) as the server engine."),(0,r.kt)("p",null,"DataSQRL defines a data layer as a stack of engines. Each engine processes data and passes it to the next engine in the stack. DataSQRL compiles your SQRL script into executables that run on each engine. "),(0,r.kt)("p",null,"Specifically, DataSQRL takes the table computations you define in your SQRL scripts and the query endpoints defined in the API specification and compiles them into one comprehensive data flow graph. The data flow graph abstractly represents how the data flows from the sources you import into your SQRL script to the query endpoints exposed by your API and all the processing that has to happen in between."),(0,r.kt)("p",null,'The "magic" of DataSQRL is the optimizer which maps the processing steps from the data flow graph to the engines in the data layer. The optimizer determines which computation should happen in which engine to produce the most efficient data layer. It then generates deployment artifacts that execute those computations in the respective engines and makes sure that the data flows smoothly into and between the engines.'),(0,r.kt)("p",null,"Invoke DataSQRL to compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.sqrl")," script into a data layer that consists of the engines we just configured:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd compile seedshop.sqrl\n")),(0,r.kt)("p",null,"The compiler populates the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/")," directory with all the build artifacts needed to compile the data layer. Inside the build directory is the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy/")," directory that contains all the deployment artifacts for the individual engines we configured above."),(0,r.kt)("h2",{id:"build-executables"},"Build Executables"),(0,r.kt)("p",null,"Finally, we are going to turn our deployment artifacts into executables that we can run on the configured engines. We build executables in a separate step to generate the most efficient executables for the targeted infrastructure."),(0,r.kt)("p",null,"To create a Flink executable for the stream processing, we run the following docker command in the directory of the ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.sqrl")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -v $PWD/build:/build datasqrl/engine-flink\n")),(0,r.kt)("p",null,"Similarly, this command creates a Vertx executable for the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -v $PWD/build:/build datasqrl/engine-vertx\n")),(0,r.kt)("p",null,"Now, we can deploy our executables against the engines we configured for our data layer. For this tutorial, we are going to stand up the engines and deploy the executables with docker compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title:docker-compose.yml","title:docker-compose.yml":!0},"version: \"3.8\"\nservices:\n  database:\n    image: postgres:14.6-alpine\n    restart: always\n    environment:\n      - POSTGRES_USER=postgres\n      - POSTGRES_PASSWORD=postgres\n      - POSTGRES_DB=datasqrl\n    ports:\n      - '5432:5432'\n    volumes:\n      - ./database-schema.sql:/docker-entrypoint-initdb.d/init-schema.sql\n\n  flink-jobmanager:\n    image: flink:1.16.1-scala_2.12-java11\n    ports:\n      - \"8081:8081\"\n    command: jobmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: flink-jobmanager\n\n  flink-taskmanager:\n    image: flink:1.16.1-scala_2.12-java11\n    depends_on:\n      - flink-jobmanager\n    command: taskmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: flink-jobmanager\n        taskmanager.numberOfTaskSlots: 1\n\n  servlet:\n    image: eclipse-temurin:11\n    command: java -jar vertx-server.jar\n    depends_on:\n      - database\n    ports:\n      - \"8888:8888\"\n    volumes:\n      - ./server-model.json:/model.json\n      - ./server-config.json:/config.json\n      - ./vertx-server.jar:/vertx-server.jar\n\n  flink-job-submitter:\n    image: curlimages/curl:7.80.0\n    depends_on:\n      - flink-jobmanager\n      - database\n    volumes:\n      - ./flink-job.jar:/flink-job.jar\n    entrypoint: /bin/sh -c\n    command: >\n      \"while ! curl -s http://flink-jobmanager:8081/overview | grep -q '\\\"taskmanagers\\\":1'; do\n        echo 'Waiting for Flink JobManager REST API...';\n        sleep 5;\n      done;\n      echo 'Submitting Flink job...';\n      curl -X POST -H 'Content-Type: application/x-java-archive' --data-binary '@/flink-job.jar' http://flink-jobmanager:8081/jars/upload;\n      echo 'Job submitted.'\"\n\nvolumes:\n  database:\n    driver: local\n")),(0,r.kt)("p",null,"This docker compose template starts Postgres and a Flink cluster (i.e. the job manager and one task manager). It initializes the database with the schema produced by the compiler, executes the server, and submits the Flink jar for execution."),(0,r.kt)("p",null,"Save this file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/deploy/")," directory and execute the following command to run it all:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("p",null,"This launches all the engines and deploys our executables. You are running a custom data layer compiled by DataSQRL. Adjust it for your own infrastructure, run it on Kubernetes, or use managed cloud services if you want to outsource operations. Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/operations/deploy/overview"},"deployment documentation")," for more information."),(0,r.kt)("p",null,"Enjoy building with data(sqrl)!"),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For more information, refer to the reference documentation for ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/build"},"building")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/deploy/overview"},"deploying")," with DataSQRL as well as the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/command"},"DataSQRL command documentation")," for all the command line options."),(0,r.kt)("li",{parentName:"ul"},"Check out all the options in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/package-config"},"package configuration"),"."),(0,r.kt)("li",{parentName:"ul"},"Take a look at ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/engines/overview"},"all the engines")," that DataSQRL supports."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/optimizer"},"DataSQRL optimizer")," uses a cost model to generate the most efficient data layer. You can use ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/optimizer#hints"},"provide hints")," when the optimizer makes the wrong choice.")))}u.isMDXComponent=!0}}]);