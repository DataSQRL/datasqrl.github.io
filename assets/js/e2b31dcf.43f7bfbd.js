"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5927],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,g=s["".concat(l,".").concat(u)]||s[u]||y[u]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},0:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(8168),r=(n(6540),n(5680));const a={title:"Deploy"},i="Deploying DataSQRL Projects",p={unversionedId:"reference/operations/deploy/overview",id:"reference/operations/deploy/overview",title:"Deploy",description:"To deploy your DataSQRL project, the first step is to compile the deployment artifacts:",source:"@site/docs/reference/operations/deploy/overview.md",sourceDirName:"reference/operations/deploy",slug:"/reference/operations/deploy/overview",permalink:"/docs/reference/operations/deploy/overview",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/operations/deploy/overview.md",tags:[],version:"current",frontMatter:{title:"Deploy"},sidebar:"docs",previous:{title:"Package Configuration",permalink:"/docs/reference/operations/package-config"},next:{title:"DataSQRL Engines",permalink:"/docs/reference/operations/engines/overview"}},l={},c=[{value:"Docker",id:"docker",level:2},{value:"Individually",id:"individually",level:2}],d={toc:c},s="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"deploying-datasqrl-projects"},"Deploying DataSQRL Projects"),(0,r.yg)("p",null,"To deploy your DataSQRL project, the first step is to compile the deployment artifacts:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd compile myscript.sqrl myapischema.graphqls\n")),(0,r.yg)("p",null,"The compiler populates the ",(0,r.yg)("inlineCode",{parentName:"p"},"build/")," directory with all the build artifacts needed to compile the data pipeline. Inside the build directory is the ",(0,r.yg)("inlineCode",{parentName:"p"},"deploy/")," directory that contains all the deployment artifacts for the individual engines configured in the ",(0,r.yg)("a",{parentName:"p",href:"../../package-config"},"package configuration"),". If no package configuration is provided, DataSQRL uses the default engines."),(0,r.yg)("p",null,"You can either deploy DataSQRL projects with docker or deploy each engine separately.\nUsing docker is the easiest deployment option.\nDeploying each engine separately gives you more flexibility and allows you to deploy on existing infrastructure or use managed cloud services."),(0,r.yg)("h2",{id:"docker"},"Docker"),(0,r.yg)("p",null,"To deploy a SQRL script and API specification with docker, run ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose up")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"build/deploy")," folder:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"(cd build/deploy; docker compose up)\n")),(0,r.yg)("p",null,"Docker-compose uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," template in the ",(0,r.yg)("inlineCode",{parentName:"p"},"deploy")," folder which you can modify to your needs."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To stop the pipeline, interrupt it with ",(0,r.yg)("inlineCode",{parentName:"p"},"CTRL-C")," and shut it down with:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose down -v\n")),(0,r.yg)("p",{parentName:"admonition"},"It's important to remove the containers and volumes with this command before launching another data pipeline to get updated containers.")),(0,r.yg)("h2",{id:"individually"},"Individually"),(0,r.yg)("p",null,"Deploying each component of the data pipeline independently gives you complete control over how and where your data pipeline is deployed."),(0,r.yg)("p",null,"In this deployment mode, DataSQRL compiles deployment artifacts for each engine configured in ",(0,r.yg)("inlineCode",{parentName:"p"},"engines")," section of the ",(0,r.yg)("a",{parentName:"p",href:"../../package-config"},"package configuration")," which you can then deploy in a way that works for your infrastructure and deployment requirements."),(0,r.yg)("p",null,"The deployment artifacts can be found in the ",(0,r.yg)("inlineCode",{parentName:"p"},"build/deploy")," folder. How to deploy them individually depends on the engines that you are using for your data pipeline."),(0,r.yg)("p",null,"Check the ",(0,r.yg)("a",{parentName:"p",href:"../../engines/overview"},"engine documentation")," for a particular engine for more information on how to deploy the executables on existing data infrastructure (an existing Flink cluster, database cluster, etc) or managed service."))}y.isMDXComponent=!0}}]);