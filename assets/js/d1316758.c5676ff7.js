"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7084],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(8168),a=(t(6540),t(5680));const i={title:"Secure Functions"},o="Text Functions",c={unversionedId:"reference/sqrl/functions/secure",id:"reference/sqrl/functions/secure",title:"Secure Functions",description:"The secure function package contains functions for generating unique ids and secure strings.",source:"@site/docs/reference/sqrl/functions/secure.md",sourceDirName:"reference/sqrl/functions",slug:"/reference/sqrl/functions/secure",permalink:"/docs/reference/sqrl/functions/secure",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/sqrl/functions/secure.md",tags:[],version:"current",frontMatter:{title:"Secure Functions"},sidebar:"docs",previous:{title:"Text Functions",permalink:"/docs/reference/sqrl/functions/text"},next:{title:"JSON Functions",permalink:"/docs/reference/sqrl/functions/json"}},l={},s=[{value:"Reference",id:"reference",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"text-functions"},"Text Functions"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"secure")," function package contains functions for generating unique ids and secure strings."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"IMPORT secure.*; -- imports all functions\nIMPORT secure.uuid; -- imports single function\n")),(0,a.yg)("h2",{id:"reference"},"Reference"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Function Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Uuid()")),(0,a.yg)("td",{parentName:"tr",align:null},"Generates a universally unique identifier (UUID) as a 36-character string. This function is non-deterministic, meaning it will return a different UUID with each call. For example, calling ",(0,a.yg)("inlineCode",{parentName:"td"},"Uuid()"),' might return "123e4567-e89b-12d3-a456-426614174000".')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"RandomID(BIGINT)")),(0,a.yg)("td",{parentName:"tr",align:null},"Generates a random ID based on the number of bytes specified. The ID is encoded in a URL-safe Base64 format without padding. If the input is ",(0,a.yg)("inlineCode",{parentName:"td"},"null")," or less than zero, it returns ",(0,a.yg)("inlineCode",{parentName:"td"},"null"),". For example, ",(0,a.yg)("inlineCode",{parentName:"td"},"RandomID(16)"),' could return a string like "T2Rkdk5OdXZ1ZG5GdlNhQw".')))))}d.isMDXComponent=!0}}]);