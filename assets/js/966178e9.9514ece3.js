"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},s="Deploy on AWS",i={unversionedId:"reference/operations/deploy/aws",id:"reference/operations/deploy/aws",title:"Deploy on AWS",description:"This documentation walks you through the steps of deploying a data service compiled by DataSQLR on AWS managed services. Using managed services eliminates most of the operational burden of running a data service, auto-scales each engine based on the amount of incoming data and API workload, and gets you up and running with a production-grade data service in an under an hour.",source:"@site/docs/reference/operations/deploy/aws.md",sourceDirName:"reference/operations/deploy",slug:"/reference/operations/deploy/aws",permalink:"/docs/reference/operations/deploy/aws",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/operations/deploy/aws.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Step 1: Set up Aurora Serverless",id:"step-1-set-up-aurora-serverless",level:2},{value:"1.1: Start Aurora Serverless",id:"11-start-aurora-serverless",level:3},{value:"1.2: Configure Database in Package Configuration",id:"12-configure-database-in-package-configuration",level:3},{value:"1.3: Deploy Database Schema",id:"13-deploy-database-schema",level:3},{value:"Step 2: Deploy on Kinesis Data Analytics",id:"step-2-deploy-on-kinesis-data-analytics",level:2},{value:"Step 3: Deploy API server on Fargate",id:"step-3-deploy-api-server-on-fargate",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-on-aws"},"Deploy on AWS"),(0,r.kt)("p",null,"This documentation walks you through the steps of deploying a data service compiled by DataSQLR on AWS managed services. Using managed services eliminates most of the operational burden of running a data service, auto-scales each engine based on the amount of incoming data and API workload, and gets you up and running with a production-grade data service in an under an hour."),(0,r.kt)("p",null,"To set up a DataSQRL data service on AWS managed services, follow these 3 steps."),(0,r.kt)("p",null,":::warn\nThis documentation is work in progress. Please check back soon.\n:::"),(0,r.kt)("h2",{id:"step-1-set-up-aurora-serverless"},"Step 1: Set up Aurora Serverless"),(0,r.kt)("h3",{id:"11-start-aurora-serverless"},"1.1: Start Aurora Serverless"),(0,r.kt)("p",null,"Start an Aurora Serverless Postgres-compatible database."),(0,r.kt)("h3",{id:"12-configure-database-in-package-configuration"},"1.2: Configure Database in Package Configuration"),(0,r.kt)("p",null,"Enter database URL and credentials in the database engine configuration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("p",null,"Run compiler."),(0,r.kt)("h3",{id:"13-deploy-database-schema"},"1.3: Deploy Database Schema"),(0,r.kt)("p",null,"Install the DataSQRL SQL database schema and index structures in the database."),(0,r.kt)("h2",{id:"step-2-deploy-on-kinesis-data-analytics"},"Step 2: Deploy on Kinesis Data Analytics"),(0,r.kt)("p",null,"Deploy the compiled Flink jar on Kinesis Data Analytics"),(0,r.kt)("h2",{id:"step-3-deploy-api-server-on-fargate"},"Step 3: Deploy API server on Fargate"))}d.isMDXComponent=!0}}]);