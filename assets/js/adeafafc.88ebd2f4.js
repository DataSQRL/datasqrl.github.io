"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7557],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5862:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"Repository"},i="DataSQRL Repository",p={unversionedId:"reference/operations/repository",id:"reference/operations/repository",title:"Repository",description:"A repository contains DataSQRL packages. When compiling an SQRL script, the DataSQRL compiler retrieves dependencies declared in the package configuration and unpacks them in the build directory.",source:"@site/docs/reference/operations/repository.md",sourceDirName:"reference/operations",slug:"/reference/operations/repository",permalink:"/docs/reference/operations/repository",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/operations/repository.md",tags:[],version:"current",frontMatter:{title:"Repository"},sidebar:"docs",previous:{title:"Command Reference",permalink:"/docs/reference/operations/command"},next:{title:"Optimizer",permalink:"/docs/reference/operations/optimizer"}},l={},s=[{value:"Publish Package to Repository",id:"publish",level:2},{value:"Prepare Package Configuration",id:"prepare-package-configuration",level:3},{value:"Publish to Local Repository",id:"publish-local",level:3},{value:"Publish to Remote Repository",id:"publish-remote",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datasqrl-repository"},"DataSQRL Repository"),(0,r.kt)("p",null,"A repository contains DataSQRL packages. When compiling an SQRL script, the DataSQRL compiler retrieves dependencies declared in the ",(0,r.kt)("a",{parentName:"p",href:"../package-config#dependency"},"package configuration")," and unpacks them in the build directory. "),(0,r.kt)("p",null,"The remote DataSQRL directory is hosted at ",(0,r.kt)("a",{parentName:"p",href:"https://dev.datasqrl.com"},"https://dev.datasqrl.com"),". Packages in the remote repository can be retrieved from any machine running the DataSQRL compiler with access to the internet."),(0,r.kt)("p",null,"DataSQRL keeps a local repository in the hidden ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.datasqrl/")," directory in the user's home directory. The local repository is only accessible from the local machine. It caches packages downloaded from the remote repository and contains packages that are only published locally."),(0,r.kt)("h2",{id:"publish"},"Publish Package to Repository"),(0,r.kt)("p",null,"When you publish a package to the repository, you can declare it as a dependency in any of your SQRL projects and reuse it. "),(0,r.kt)("p",null,"To publish a package, follow these steps:"),(0,r.kt)("h3",{id:"prepare-package-configuration"},"Prepare Package Configuration"),(0,r.kt)("p",null,"Create the ",(0,r.kt)("a",{parentName:"p",href:"../package-config"},"package configuration")," file ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," in the root directory of the package if it does not already exist."),(0,r.kt)("p",null,"The configuration file specifies the package information and should contain at least the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "package":\n  {\n    "name": "yourOrganization.yourPackage",\n    "version": "1.0.0",\n    "variant": "dev"\n  },\n  ... other package content, if any\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the package is the full path that identifies the package. We recommend that you use a personal or organization name as the first component of the package name path to make it easy to identify who authored the package."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To publish a package to the remote repository, the first component of the package name path has to match your DataSQRL account name or the name of an organization you are part of.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," of a package can be any string. We recommend that you use ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," for the version string, i.e. the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"majorVersion.minorVersion.pathVersion"),"."),(0,r.kt)("p",null,"DataSQRL supports multiple variants of the same package and version by modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," name. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," is omitted or empty, it defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". Specifying a variant is optional."),(0,r.kt)("p",null,"If you have multiple variants of the same package, we recommend that you use the following naming convention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev")," for packages that are used for development or testing only."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test")," for packages that are used for testing only."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prod")," for packages that are used for production deployments.")),(0,r.kt)("h3",{id:"publish-local"},"Publish to Local Repository"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," command in the root directory of your package to publish the package to the local repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd publish\n")),(0,r.kt)("h3",{id:"publish-remote"},"Publish to Remote Repository"),(0,r.kt)("p",null,"To make the package available anywhere, you can publish it to the remote DataSQRL repository."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Publishing to the remote DataSQRL repository is not yet supported. ",(0,r.kt)("a",{parentName:"p",href:"/community"},"Stay tuned")," while we implement this feature. ")))}m.isMDXComponent=!0}}]);