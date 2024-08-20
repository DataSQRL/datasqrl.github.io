"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7388],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6540),r=a(53);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(8168),r=a(6540),l=a(53),o=a(3104),i=a(6347),s=a(7485),c=a(1682),u=a(9466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=g({queryString:a,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),y(e)}),[c,y,l]),tabValues:l}}var h=a(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function k(e){const t=(0,h.A)();return r.createElement(N,(0,n.A)({key:String(t)},e))}},8221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(8168),r=(a(6540),a(5680)),l=a(1470),o=a(9365);const i={},s="DataSQRL Command",c={unversionedId:"reference/sqrl/cli",id:"reference/sqrl/cli",title:"DataSQRL Command",description:"The DataSQRL command compiles, runs, and tests SQRL scripts. It also provides utilities for managing data sources and sinks, uploading packages to the repository, and other convenience features.",source:"@site/docs/reference/sqrl/cli.md",sourceDirName:"reference/sqrl",slug:"/reference/sqrl/cli",permalink:"/docs/reference/sqrl/cli",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/sqrl/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SQRL Specification",permalink:"/docs/reference/sqrl/sqrl-spec"},next:{title:"Connectors (Source & Sink)",permalink:"/docs/reference/sqrl/connectors"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Global Options",id:"global-options",level:3},{value:"Compile Command",id:"compile-command",level:2},{value:"Test Command",id:"test-command",level:2},{value:"Publish Command",id:"publish-command",level:2},{value:"How repository resolution works",id:"how-repository-resolution-works",level:3},{value:"Login Command",id:"login-command",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"datasqrl-command"},"DataSQRL Command"),(0,r.yg)("p",null,"The DataSQRL command compiles, runs, and tests SQRL scripts. It also provides utilities for managing data sources and sinks, uploading packages to the repository, and other convenience features."),(0,r.yg)("p",null,"You invoke the DataSQRL command in your terminal or command line. Choose your operating system below or use Docker which works on any machine that has Docker installed."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)(l.A,{groupId:"cli",mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Mac",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"brew tap datasqrl/sqrl\nbrew install sqrl-cli\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Check that you're on the current version of DataSQRL by running ",(0,r.yg)("inlineCode",{parentName:"p"},"sqrl --version"),"\nTo update an existing installation:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"brew upgrade sqrl-cli\n")))),(0,r.yg)(o.A,{value:"Docker",mdxType:"TabItem"},"Always pull the latest Docker image to ensure you have the most recent updates:",(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker pull datasqrl/cmd:latest\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The Docker version of DataSQRL has limited functionality and does not support the development or testing runtime that ships with the DataSQRL command. These significantly speed up the development cycles from minutes to seconds.")))),(0,r.yg)("h3",{id:"global-options"},"Global Options"),(0,r.yg)("p",null,"All commands support the following global options:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option/Flag Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"-c or --config"),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the path to one or more package configuration files. Contents of multiple files are merged in the specified order. Defaults to package.json in the current directory, generating a default configuration if none exists.")))),(0,r.yg)("p",null,"Note, that most commands require that you either specify the SQRL script (and, optionally, a GraphQL schema) as command line arguments or use the\n",(0,r.yg)("inlineCode",{parentName:"p"},"-c")," option to specify a project configuration file that configures the SQRL script (and, optionally, a GraphQL schema)."),(0,r.yg)("h2",{id:"compile-command"},"Compile Command"),(0,r.yg)("p",null,"The compile command processes an SQRL script and, optionally, an API specification, into a deployable data pipeline. The outputs are saved in the specified target directory."),(0,r.yg)(l.A,{groupId:"cli",mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Mac",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sqrl compile myscript.sqrl myapischema.graphqls\n"))),(0,r.yg)(o.A,{value:"Docker",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls\n")))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option/Flag Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"-a or --api"),(0,r.yg)("td",{parentName:"tr",align:null},"Generates an API specification (GraphQL schema) in the file schema.graphqls. Overwrites any existing file with the same name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"-t or --target"),(0,r.yg)("td",{parentName:"tr",align:null},"Directory to write deployment artifacts, defaults to build/deploy.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--profile"),(0,r.yg)("td",{parentName:"tr",align:null},"Selects a specific set of configuration values that override the default package settings.")))),(0,r.yg)("p",null,"The command compiles the script and API specification into an integrated data product. The command creates a ",(0,r.yg)("inlineCode",{parentName:"p"},"build")," with all the build artifacts that are used during the compilation and build process (e.g. dependencies). The command writes the deployment artifacts for the compiled data product into the ",(0,r.yg)("inlineCode",{parentName:"p"},"build/deploy")," directory. Read more about deployment artifacts in the deployment documentation."),(0,r.yg)("h2",{id:"test-command"},"Test Command"),(0,r.yg)("p",null,"The test command executes the provided test queries and all tables annotated with ",(0,r.yg)("inlineCode",{parentName:"p"},"/*+test */")," and snapshots the results."),(0,r.yg)("p",null,"When you first run the test command, it will create the snapshots and fail. All subsequent runs of the test command compare the results to the previously snapshotted results and succeed if the results are identical, else fail."),(0,r.yg)(l.A,{groupId:"cli",mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Mac",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sqrl test myscript.sqrl myapischema.graphqls\n"))),(0,r.yg)(o.A,{value:"Docker",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd test\n")))),(0,r.yg)("p",null,"Options for the Test Command:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option/Flag Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"-s or --snapshot"),(0,r.yg)("td",{parentName:"tr",align:null},"Path to the snapshot files. Defaults to ",(0,r.yg)("inlineCode",{parentName:"td"},"snapshot"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--tests"),(0,r.yg)("td",{parentName:"tr",align:null},"Path to test query files. Defaults to ",(0,r.yg)("inlineCode",{parentName:"td"},"tests"),".")))),(0,r.yg)("h2",{id:"publish-command"},"Publish Command"),(0,r.yg)("p",null,"Publishes a local package to the repository. It is executed from the root directory of the package, archiving all contents and submitting them under the specified package configuration. The package must have a main ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json")," that contains the package information:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1",\n  "package": {\n    "name": "myorg.mypackage",\n    "version": "0.1.2",\n    "variant": "dev",\n    "description": "This is my profile",\n    "homepage": "http://www.mypackage.myorg.com",\n    "documentation": "More information on my package",\n    "topics": [ "mytag" ]\n  }\n}\n')),(0,r.yg)(l.A,{groupId:"cli",mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Mac",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sqrl publish --local\n"))),(0,r.yg)(o.A,{value:"Docker",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd publish --local\n")))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option/Flag Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--local"),(0,r.yg)("td",{parentName:"tr",align:null},"Publishes the package to the local repository only.")))),(0,r.yg)("h3",{id:"how-repository-resolution-works"},"How repository resolution works"),(0,r.yg)("p",null,"A repository contains DataSQRL packages. When compiling an SQRL script, the DataSQRL compiler retrieves dependencies declared in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/reference/sqrl/datasqrl-spec"},"package configuration")," and unpacks them in the build directory."),(0,r.yg)("p",null,"The remote DataSQRL directory is hosted at ",(0,r.yg)("a",{parentName:"p",href:"https://dev.datasqrl.com"},"https://dev.datasqrl.com"),". Packages in the remote repository can be retrieved from any machine running the DataSQRL compiler with access to the internet."),(0,r.yg)("p",null,"DataSQRL keeps a local repository in the hidden ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.datasqrl/")," directory in the user's home directory. The local repository is only accessible from the local machine. It caches packages downloaded from the remote repository and contains packages that are only published locally."),(0,r.yg)("h2",{id:"login-command"},"Login Command"),(0,r.yg)("p",null,"Authenticates a user against the repository. A user needs to be authenticated to access private packages in the repository or to publish a package."),(0,r.yg)(l.A,{groupId:"cli",mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Mac",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sqrl login\n"))),(0,r.yg)(o.A,{value:"Docker",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd login\n")))))}g.isMDXComponent=!0}}]);