"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Package Configuration",l={unversionedId:"reference/operations/package-config",id:"reference/operations/package-config",title:"Package Configuration",description:"The package configuration is the central configuration file used by the DataSQRL command. The package configuration declares dependencies, configures the engines in the data layer, sets compiler options, and provides package information.",source:"@site/docs/reference/operations/package-config.md",sourceDirName:"reference/operations",slug:"/reference/operations/package-config",permalink:"/docs/reference/operations/package-config",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/operations/package-config.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Optimizer",permalink:"/docs/reference/operations/optimizer"},next:{title:"Deploy",permalink:"/docs/reference/operations/deploy/overview"}},p={},s=[{value:"Dependencies",id:"dependency",level:2},{value:"Engines",id:"engine",level:2},{value:"Compiler",id:"compiler",level:2},{value:"Package Information",id:"information",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"package-configuration"},"Package Configuration"),(0,r.kt)("p",null,"The package configuration is the central configuration file used by the ",(0,r.kt)("a",{parentName:"p",href:"../command"},"DataSQRL command"),". The package configuration declares dependencies, configures the engines in the data layer, sets compiler options, and provides package information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "dependencies" : {\n    "datasqrl.seedshop" : {\n      "version" : "0.1.0",\n      "variant" : "dev"\n    }\n  },\n  "engines" : {\n    "stream" : {\n      "name" : "flink"\n    }, \n    "database" : {\n      "name" : "jdbc",\n      "url" : "postgresql://localhost:5432/datasqrl",\n      "driver" : "org.postgresql.Driver",\n      "dialect" : "postgres",\n      "database" : "datasqrl"\n    } \n  },\n  "compiler" : {\n    "errorSink" : "print.errors",\n    "debugSink" : "print"\n  },\n  "package": {\n    "name": "datasqrl.tutorials.Quickstart",\n    "version": "0.1.0",\n    "variant": "dev",\n    "description": "Quickstart tutorial for datasqrl.com"\n  }\n}\n')),(0,r.kt)("p",null,"This is an example package configuration for our ",(0,r.kt)("a",{parentName:"p",href:"../../../getting-started/quickstart"},"Quickstart tutorial"),". Each section of the configuration file is described in more detail below."),(0,r.kt)("h2",{id:"dependency"},"Dependencies"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," is a map of all packages that a script depends on. The name of the dependency is the key in the map and the associated value defines the dependency by ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"variant"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "datasqrl.seedshop": {\n      "version": "0.1.0",\n      "variant": "dev"\n    }\n  },\n  ...\n}\n')),(0,r.kt)("p",null,"This example declares a single dependency ",(0,r.kt)("inlineCode",{parentName:"p"},"datasqrl.seedshop"),". The DataSQRL packager retrieves the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasqrl.seedshop"),' package from the repository for the given version "0.1.0" and "dev" variant and makes it available for the compiler. The ',(0,r.kt)("inlineCode",{parentName:"p"},"variant")," is optional and defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,r.kt)("p",null,"Learn more about the ",(0,r.kt)("a",{parentName:"p",href:"../repository"},"repository")," and how dependencies are retrieved."),(0,r.kt)("h2",{id:"engine"},"Engines"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"engines")," is a map of engine configurations by engine name that the compiler uses to instantiate the engines in the data layer. The DataSQRL compiler produces an integrated data layer against those engines. DataSQRL expects that a stream and database engine is configured as shown in the example above."),(0,r.kt)("p",null,"When you use the ",(0,r.kt)("a",{parentName:"p",href:"../command"},"DataSQRL command")," without specifying an engine, DataSQRL will instantiate default engines for you. Learn more about the ",(0,r.kt)("a",{parentName:"p",href:"../build"},"build process"),"."),(0,r.kt)("p",null,"The engine configuration depends on each engine. ",(0,r.kt)("a",{parentName:"p",href:"../engines/overview"},"Look up the engine")," for more information."),(0,r.kt)("h2",{id:"compiler"},"Compiler"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler")," configuration contains options to control the behavior of the compiler."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errorSink"),(0,r.kt)("td",{parentName:"tr",align:null},"Errors in the ingested input data are produced to the table sink defined by this export path. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"print.errors")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debugSink"),(0,r.kt)("td",{parentName:"tr",align:null},"When debugging is enabled, change streams of all tables defined in the SQRL script are exported to the sink defined by this export path. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"print"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debugTables"),(0,r.kt)("td",{parentName:"tr",align:null},"Limits the exported change streams during debugging to the tables in this list, if the list is non-empty."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"information"},"Package Information"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," section of the configuration provides information about the package or script. The whole section can be omitted when compiling or running a script. It is required when ",(0,r.kt)("a",{parentName:"p",href:"../command#publish"},"publishing")," a package to the repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "package": {\n    "name": "datasqrl.tutorials.Quickstart",\n    "version": "0.1.0",\n    "variant": "dev",\n    "description": "Quickstart tutorial for datasqrl.com",\n    "homepage": "https://www.datasqrl.com/docs/getting-started/quickstart"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the package. The package name should start with the name of the individual or organization that provides the package."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the package. We recommend to use ",(0,r.kt)("a",{parentName:"td",href:"https://semver.org/"},"semantic versioning"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"The variant of the package if multiple variants are available. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latest"),(0,r.kt)("td",{parentName:"tr",align:null},"If this is the latest version of this package. DataSQRL uses the latest version when looking up ",(0,r.kt)("a",{parentName:"td",href:"../../sqrl/import#dependency"},"missing packages on import"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"A description of the package."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"license"),(0,r.kt)("td",{parentName:"tr",align:null},"The license used by this package."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Link that points to documentation for this package"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"homepage"),(0,r.kt)("td",{parentName:"tr",align:null},"Link that points to the homepage for this package"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))))}m.isMDXComponent=!0}}]);