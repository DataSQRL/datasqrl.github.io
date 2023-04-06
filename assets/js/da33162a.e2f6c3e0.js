"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2034],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={title:"Command Reference"},i="DataSQRL Command Reference",l={unversionedId:"reference/operations/command",id:"reference/operations/command",title:"Command Reference",description:"You interact with DataSQRL through the DataSQRl command on your command line. The DataSQRL command compiles and runs SQRL scripts, discovers data sources and sinks, and publishes packages to the repository.",source:"@site/docs/reference/operations/command.md",sourceDirName:"reference/operations",slug:"/reference/operations/command",permalink:"/docs/reference/operations/command",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/operations/command.md",tags:[],version:"current",frontMatter:{title:"Command Reference"},sidebar:"docs",previous:{title:"Build",permalink:"/docs/reference/operations/build"},next:{title:"Repository",permalink:"/docs/reference/operations/repository"}},p={},d=[{value:"Common Options",id:"common",level:2},{value:"Compile",id:"compile",level:2},{value:"Run",id:"run",level:2},{value:"Discover",id:"discover",level:2},{value:"Publish",id:"publish",level:2}],s={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datasqrl-command-reference"},"DataSQRL Command Reference"),(0,r.kt)("p",null,"You interact with DataSQRL through the DataSQRl command on your command line. The DataSQRL command compiles and runs SQRL scripts, discovers data sources and sinks, and publishes packages to the repository."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We recommend that you run the DataSQRL command through docker and the following example commands use docker. This requires that you have ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker installed")," and running on your local machine.")),(0,r.kt)("h2",{id:"common"},"Common Options"),(0,r.kt)("p",null,"All following commands accept these options: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option/Flag Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-c")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"--config")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to one or more ",(0,r.kt)("a",{parentName:"td",href:"package-config"},"package configuration")," files. If multiple files are provided, the contents are merged into a single configuration file in the order listed. If this option is omitted, the ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json")," file in the current directory is used. If no such file exists, DataSQRL generates a default package configuration.")))),(0,r.kt)("p",null,"The package configuration configures the compiler, pipeline topology, ",(0,r.kt)("a",{parentName:"p",href:"engines/overview"},"engines"),", and dependencies among other aspects. Review the ",(0,r.kt)("a",{parentName:"p",href:"package-config"},"package configuration documentation")," for more information."),(0,r.kt)("h2",{id:"compile"},"Compile"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"compile")," command compiles an SQRL script and optional API specification to a data pipeline. The deployment artifacts for the data pipeline are written to the target directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v $PWD:/build datasqrl/datasqrl-cmd compile myscript.sqrl myapischema.graphqls\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"compile")," command takes the path to the SQRL script and API specification as first and second argument, respectively. The API specification is optional. If none is provided, DataSQRL generates it from the script. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"compile")," command accepts these options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option/Flag Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-a")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"--api")),(0,r.kt)("td",{parentName:"tr",align:null},"Generates API specification for the compiled script. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Use option argument ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql")," to generate a GraphQL schema in the file ",(0,r.kt)("inlineCode",{parentName:"td"},"schema.graphqls")))," The API specification file is written into the current directory and overwrites any existing file with that name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-t")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"--target")),(0,r.kt)("td",{parentName:"tr",align:null},"Writes the deployment artifiacts of the compiled data pipeline into the target directory. ",(0,r.kt)("inlineCode",{parentName:"td"},"deploy/")," by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--nolookup")),(0,r.kt)("td",{parentName:"tr",align:null},"Disables lookup of packages in the repository that cannot be resolved locally or as dependencies.")))),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command compiles an SQRL script and optional API specification to a data pipeline and then executes the pipeline locally. That means, the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command starts all engines in the pipeline and deploys the compiled pipeline artifacts on them. In particular, it starts the API server which can be accessed and queried on localhost with the configured port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8888:8888 -v $PWD:/build datasqrl/datasqrl-cmd run  myscript.sqrl myapischema.graphqls\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command takes the same arguments and options as the ",(0,r.kt)("inlineCode",{parentName:"p"},"compile")," command. It also accepts these additional options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option/Flag Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-p")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"--port")),(0,r.kt)("td",{parentName:"tr",align:null},"Generates API specification for the compiled script. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Use option argument ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql")," to generate a GraphQL schema in the file ",(0,r.kt)("inlineCode",{parentName:"td"},"schema.graphqls")))," The API specification file is written into the current directory and overwrites any existing file with that name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-d")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"--debug")),(0,r.kt)("td",{parentName:"tr",align:null},"Writes the deployment artifiacts of the compiled data pipeline into the target directory. ",(0,r.kt)("inlineCode",{parentName:"td"},"deploy/")," by default.")))),(0,r.kt)("h2",{id:"discover"},"Discover"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"discover")," command creates new data source and sink packages by inspecting a configured data system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v $PWD:/build datasqrl/datasqrl-cmd discover datasystem.json\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"discover")," command takes the ",(0,r.kt)("a",{parentName:"p",href:"../sources/discovery#datasystem"},"data system configuration file")," as an argument and supports the following options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option/Flag Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"--output")),(0,r.kt)("td",{parentName:"tr",align:null},"Data discovery writes the package configuration files to this directory. Defaults to the current directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-l")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"--limit")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time (in seconds) for data analysis. Data discovery terminates data analysis after this amount of time. Defaults to 3600 seconds (1 hour).")))),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"../sources/discovery"},"data discovery documentation")," to learn more about adding data sources and sinks for DataSQRL."),(0,r.kt)("h2",{id:"publish"},"Publish"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," command publishes a local package to the repository so that it can be used as a ",(0,r.kt)("a",{parentName:"p",href:"package-config#dependency"},"dependency")," in other SQRL scripts and projects."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," command is executed in the root directory of the package to be published. It archives all files in the package and submits the archive to the repository under the name, version, and variant of the package as configured in the package configuration. The command publishes to the local repository by default."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," command does not auto-generate a package configuration and expects the ",(0,r.kt)("a",{parentName:"p",href:"package-config"},"package configuration")," in the local file ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," or configured via ",(0,r.kt)("a",{parentName:"p",href:"#common"},"option"),". The package configuration must include the package information which specifies the name, version, and variant of the package. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v $PWD:/build datasqrl/datasqrl-cmd publish\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," command supports the following options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option/Flag Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--remote")),(0,r.kt)("td",{parentName:"tr",align:null},"Publishes the package to the remote repository in addition to the local one. Publishing to the remote repository requires user credentials for authentication. Read more about ",(0,r.kt)("a",{parentName:"td",href:"repository#publish-remote"},"publishing to remote repository"),".")))),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"repository#publish"},"repository documentation")," to learn more about publishing packages to the repository."))}m.isMDXComponent=!0}}]);