"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Deployment"},i="Deploying the Data Microservice",l={unversionedId:"getting-started/intro/deploy",id:"getting-started/intro/deploy",title:"Deployment",description:'" width="40%"/>',source:"@site/docs/getting-started/intro/deploy.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/deploy",permalink:"/docs/getting-started/intro/deploy",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/intro/deploy.md",tags:[],version:"current",frontMatter:{title:"Deployment"},sidebar:"docs",previous:{title:"Advanced Topics",permalink:"/docs/getting-started/intro/advanced"},next:{title:"What is DataSQRL?",permalink:"/docs/getting-started/concepts/datasqrl"}},s={},p=[{value:"Run the Compiler",id:"run-the-compiler",level:2},{value:"Deploy Executables",id:"deploy-executables",level:2},{value:"Customize Deployment",id:"customize-deployment",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-the-data-microservice"},"Deploying the Data Microservice"),(0,r.kt)("img",{src:"/img/generic/undraw_launch.svg",alt:"DataSQRL Deployment >",width:"40%"}),(0,r.kt)("p",null,"We have built a customer 360 application and recommendation engine, now it's time to take it to production."),(0,r.kt)("h2",{id:"run-the-compiler"},"Run the Compiler"),(0,r.kt)("p",null,"Execute the following command to compile our seedshop script and API specification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd compile seedshop.sqrl seedshop.graphqls\n")),(0,r.kt)("img",{src:"/img/reference/compilation_simplified.svg",alt:"DataSQRL Compilation >",width:"50%"}),(0,r.kt)("p",null,"The compiler takes a SQRL script, API specification, and optional package configuration as arguments and produces an executable for each component of our data microservice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"topics and schemas for Kafka"),(0,r.kt)("li",{parentName:"ul"},"a Flink jar with all dependencies"),(0,r.kt)("li",{parentName:"ul"},"a physical data model and index definitions for the database"),(0,r.kt)("li",{parentName:"ul"},"an API model that maps API endpoints to database queries and Kafka topics")),(0,r.kt)("h2",{id:"deploy-executables"},"Deploy Executables"),(0,r.kt)("p",null,"You can find all the executables in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/deploy")," folder. It also contains a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose")," template ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," for starting all the components of the data service and running the executables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> cd build/deploy\n> docker compose up\n")),(0,r.kt)("p",null,"The docker-compose template starts a Kafka cluster, Flink cluster, and Postgres database. It initializes the database with the compiled database schema and index structures. It installs the topics in the Kafka cluster. It submits the Flink jar to the Flink cluster. Finally, it launches a server instance with the API model."),(0,r.kt)("p",null,"To verify that everything is working correctly, you can execute GraphQL queries against the API through GraphiQL running at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8888//graphiql/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8888//graphiql/")),"."),(0,r.kt)("h2",{id:"customize-deployment"},"Customize Deployment"),(0,r.kt)("p",null,"You can use the provided docker-compose template for your deployments and customize it to suit your needs."),(0,r.kt)("p",null,"You can deploy the deployment artifacts in any way you'd like. Because DataSQRL compiles to existing data technologies, the only limit is what those underlying technologies support."),(0,r.kt)("p",null,"For example, you can run the API server in Kubernetes, use a managed database service for the database, or submit the Flink jar to an existing Flink cluster."),(0,r.kt)("p",null,"You tell DataSQRL where and how you want to deploy the compiled data microservice by configuring the individual components in the package configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file should be in the same directory as your SQRL script."),(0,r.kt)("p",null,'The package configuration specifies what engines DataSQRL compiles to. DataSQRL calls the data technologies that execute the components of a data service "',(0,r.kt)("strong",{parentName:"p"},"engines"),'". For example, DataSQRL supports ',(0,r.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," as a stream engine, ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka")," as a log engine, ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres")," as a database engine, and ",(0,r.kt)("a",{parentName:"p",href:"https://vertx.io/"},"Vert.x")," as a server engine."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/operations/engines/overview"},"all the engines")," that DataSQRL supports and how to configure them in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/operations/package-config"},"package configuration"),". "),(0,r.kt)("p",null,"That concludes our introductory tutorial! Great job and enjoy building with data(sqrl)!"),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For more information, refer to the reference documentation for ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/build"},"building")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/deploy/overview"},"deploying")," with DataSQRL as well as the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/command"},"DataSQRL command documentation")," for all the command line options."),(0,r.kt)("li",{parentName:"ul"},"Wanna know how DataSQRL compiles efficient data services? The ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/optimizer"},"DataSQRL optimizer")," uses a cost model to divide up data processing among the components and generate the most efficient executables. You can ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/optimizer#hints"},"provide hints")," when the optimizer makes the wrong choice.")))}u.isMDXComponent=!0}}]);