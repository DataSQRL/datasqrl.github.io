"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Vertx"},i="Vertx Server Engine",l={unversionedId:"reference/operations/engines/vertx",id:"reference/operations/engines/vertx",title:"Vertx",description:"Vert.x is a lightweight and flexible open-source framework for building reactive, event-driven applications in Java and other JVM languages. It provides a comprehensive toolkit for developing scalable and high-performance networked applications that can handle a large number of concurrent connections. The framework's key features include a non-blocking API that allows for efficient use of resources, a modular architecture that enables easy integration with other libraries, and a distributed event bus for communication between components.",source:"@site/docs/reference/operations/engines/vertx.md",sourceDirName:"reference/operations/engines",slug:"/reference/operations/engines/vertx",permalink:"/docs/reference/operations/engines/vertx",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/operations/engines/vertx.md",tags:[],version:"current",frontMatter:{title:"Vertx"},sidebar:"docs",previous:{title:"Postgres",permalink:"/docs/reference/operations/engines/postgres"},next:{title:"Key Concepts",permalink:"/docs/category/key-concepts"}},c={},s=[{value:"Configure",id:"configure",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Deployment Artifacts",id:"deployment-artifacts",level:3},{value:"Build Executable",id:"build-executable",level:3},{value:"Deploy Executable",id:"deploy-executable",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vertx-server-engine"},"Vertx Server Engine"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://vertx.io/"},"Vert.x")," is a lightweight and flexible open-source framework for building reactive, event-driven applications in Java and other JVM languages. It provides a comprehensive toolkit for developing scalable and high-performance networked applications that can handle a large number of concurrent connections. The framework's key features include a non-blocking API that allows for efficient use of resources, a modular architecture that enables easy integration with other libraries, and a distributed event bus for communication between components."),(0,a.kt)("p",null,"Vert.x currently supports ",(0,a.kt)("a",{parentName:"p",href:"../../../api/graphql/query"},"GraphQL APIs"),"."),(0,a.kt)("h2",{id:"configure"},"Configure"),(0,a.kt)("p",null,"The Vertx server engine is configured as an engine in the ",(0,a.kt)("a",{parentName:"p",href:"../../package-config#engine"},"package configuration")," with the following configuration options."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vertx")," string literal"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"port"),(0,a.kt)("td",{parentName:"tr",align:null},"Port where the server listens for API requests. ",(0,a.kt)("inlineCode",{parentName:"td"},"8888")," by default. This setting is ignored when running in a docker container - use docker port mapping instead"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("h3",{id:"deployment-artifacts"},"Deployment Artifacts"),(0,a.kt)("p",null,"The DataSQRL compiler generates a Vertx server model that maps the API endpoints onto execution plans for fetching and assembling the requested data. The server model is generated in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"build/deploy/server-model.json"),". In addition, DataSQRL generates a server configuration file for connecting to the database."),(0,a.kt)("h3",{id:"build-executable"},"Build Executable"),(0,a.kt)("p",null,"To build an optimized executable for the server, run the following docker command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -v $PWD/build:/build datasqrl/engine-vertx\n")),(0,a.kt)("p",null,"This builds a standalone server executable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"vertex-server.jar")," executable jar (inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"build/deploy/")," directory)."),(0,a.kt)("h3",{id:"deploy-executable"},"Deploy Executable"),(0,a.kt)("p",null,"You can run the standalone Vertx executable jar with the associated model and configuration files on any machine, cloud instance, or suitable docker image."),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("a",{parentName:"p",href:"../../deploy/overview#docker"},"docker documentation")," for using docker to automate the setup of the Vertx server with the standalone executable jar."))}d.isMDXComponent=!0}}]);