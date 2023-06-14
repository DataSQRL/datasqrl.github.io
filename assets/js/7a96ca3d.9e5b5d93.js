"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8835],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3337:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={},i="Getting Started with DataSQRL",s={unversionedId:"getting-started/overview",id:"getting-started/overview",title:"Getting Started with DataSQRL",description:'DataSQRL makes it easy to build event-driven microservices, streaming applications, and data services. You\'ll be building powerful data APIs with DataSQRL in no time. How you get started is up to you. We recommend the "Learning by Doing" route, but you can choose your own adventure.',source:"@site/docs/getting-started/overview.md",sourceDirName:"getting-started",slug:"/getting-started/overview",permalink:"/docs/getting-started/overview",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/intro"},next:{title:"Quickstart Tutorial",permalink:"/docs/getting-started/quickstart"}},l={},u=[{value:"Learning By Doing",id:"learning-by-doing",level:2},{value:"Understanding the Big Picture",id:"understanding-the-big-picture",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-datasqrl"},"Getting Started with DataSQRL"),(0,n.kt)("p",null,'DataSQRL makes it easy to build event-driven microservices, streaming applications, and data services. You\'ll be building powerful data APIs with DataSQRL in no time. How you get started is up to you. We recommend the "Learning by Doing" route, but you can choose your own adventure.'),(0,n.kt)("h2",{id:"learning-by-doing"},"Learning By Doing"),(0,n.kt)("p",null,"If you're looking to learn DataSQRL, the best way is to build something with it:"),(0,n.kt)("img",{src:"/img/getting-started/tutorial/nutshop.jpg",alt:"Nut Shop Tutorial >|",width:"40%"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 1:")," Read the ",(0,n.kt)("a",{parentName:"p",href:"../quickstart"},"Quickstart")," to build a metrics ingestion and monitoring services in 5 minutes."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 2:")," Dive into the ",(0,n.kt)("a",{parentName:"p",href:"../intro/overview"},"DataSQRL tutorial")," to get a deeper understanding of DataSQRL and learn everything you need to build your own applications or services with DataSQRL."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 3:")," Build your own data service with DataSQRL. Take a problem from work or grab some data you've been interested in and give it a go. "),(0,n.kt)("p",null,"Need more information? Take a look at the ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/overview"},"reference documentation")," for everything you'd ever wanted to know about DataSQRL and then some. ",(0,n.kt)("br",null),"\nStill stuck? No worries, the ",(0,n.kt)("a",{parentName:"p",href:"/community"},"DataSQRL community")," is here to help. Seriously, reach out - we don't bite!"),(0,n.kt)("h2",{id:"understanding-the-big-picture"},"Understanding the Big Picture"),(0,n.kt)("p",null,"There are a million technologies out there so why should you spend your time on DataSQRL? If you want to understand how DataSQRL fits into the bigger picture and whether it's worth your time, here are some resources to get you started."),(0,n.kt)("img",{src:"/img/index/undraw_questions_sqrl.svg",alt:"DataSQRL allows you to build with data >",width:"40%"}),(0,n.kt)("p",null,'DataSQRL is a compiler, optimizer, and build tool for event-driven microservices, streaming applications, and data services. DataSQRL saves you a ton of time and efficiently handles all the low-level "data-plumbing" for you.'),(0,n.kt)("p",null,"To implement a data service in DataSQRL, you define the API of your application or service and implement the data transformations and processing in SQL. DataSQRL compiles those two artifacts into an integrated microservice that ingests, processes, and serves data through a responsive API in realtime. DataSQRL compiles to proven technologies like Apache Kafka, Apache Flink, and Postgres, and produces microservices that are resilient, fast, and scalable. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../concepts/datasqrl"},(0,n.kt)("strong",{parentName:"a"},"What is DataSQRL?")),": Explains what DataSQRL is and how it works."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../concepts/why-datasqrl"},(0,n.kt)("strong",{parentName:"a"},"Why Use DataSQRL?")),": DataSQRL saves you time, is easy to use, and builds efficient data services. Learn more about the benefits of DataSQRL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../concepts/when-datasqrl"},(0,n.kt)("strong",{parentName:"a"},"When Should I Use DataSQRL?")),": Contains a decision tree to determine whether your application would benefit from DataSQRL.")),(0,n.kt)("p",null,"What to know more? Start with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/overview"},"reference documentation")," to learn everything there is to know about DataSQRL. ",(0,n.kt)("br",null),"\nWhat to go even deeper? The ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/overview"},"developer documentation")," details the internals of DataSQRL and takes you deep into the guts of the system."))}p.isMDXComponent=!0}}]);