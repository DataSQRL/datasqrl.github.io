"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2806],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(a),p=n,f=h["".concat(l,".").concat(p)]||h[p]||c[p]||r;return a?o.createElement(f,i(i({ref:t},u),{},{components:a})):o.createElement(f,i({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4720:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],s={title:"Why DataSQRL?"},l="Why does DataSQRL exist?",d={unversionedId:"getting-started/why-datasqrl",id:"getting-started/why-datasqrl",title:"Why DataSQRL?",description:"We love building with data, but we got frustrated by how complicated it is to build data-driven features. That's why we built DataSQRL.",source:"@site/docs/getting-started/why-datasqrl.md",sourceDirName:"getting-started",slug:"/getting-started/why-datasqrl",permalink:"/docs/getting-started/why-datasqrl",editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/getting-started/why-datasqrl.md",tags:[],version:"current",frontMatter:{title:"Why DataSQRL?"},sidebar:"docs",previous:{title:"Advanced Concepts",permalink:"/docs/getting-started/intro/advanced"},next:{title:"How does DataSQRL compare to other Technologies?",permalink:"/docs/getting-started/comparison/overview"}},u=[{value:"Why Should You Use DataSQLR?",id:"why-should-you-use-datasqlr",children:[{value:"Saves You Time",id:"save-time",children:[],level:3},{value:"Easy to Use",id:"easy-to-use",children:[],level:3},{value:"Fast &amp; Efficient",id:"performance",children:[],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],c={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"why-does-datasqrl-exist"},"Why does DataSQRL exist?"),(0,r.kt)("p",null,"We love building with data, but we got frustrated by how complicated it is to build data-driven features. That's why we built DataSQRL."),(0,r.kt)("p",null,"There are a gazillion CRUD frameworks and ORM libraries for mapping database rows onto objects, but if you want to do anything more interesting with your data, you are on your own. Want to do complex data transformations? Say hello to obscure stored procedures, brittle data pipelines, and a scattershot of python scripts. Want to do data analytics? Good luck wading through the jungle of data warehouse fiefdoms, big data overkill, and mountains of SQL."),(0,r.kt)("p",null,"Thought you could quickly add a simple recommendation engine to the site but ended up in a 6 months-long game of telephone with the PM, data engineers, and data scientists all the while waging a political battle with the data analytics team? Yes, we have been there too. This should be simpler."),(0,r.kt)("p",null,"Why can you build a production-grade web service in a few days, but it takes months to build a mediocre data service that looks like Frankenstein after a colonoscopy?"),(0,r.kt)("p",null,"We believe that a lack of developer tools for building with data has a lot to do with it. Playing with data used to be the realm of business intelligence and data analysts. When we discovered that data-driven features in software are extremely valuable, we took their tools, methods, and approaches for compiling reports and dashboards and bolted software engineering on top. The result is like putting cheesecake into a Ramen soup - both make sense individually but thrown together it's a gross mess. "),(0,r.kt)("p",null,"We are developing DataSQRL as a tool for developers to build data services. You connect your data sources to DataSQRL, implement the logic and structure of your data service in a scripting language that looks and feels like SQL, and DataSQRL generates a scalable and cost-efficient API that exposes your data service. It's as easy as 1-2-3. We cut out all the stuff developers don't need and focused on building a tool that integrates with your workflow."),(0,r.kt)("h2",{id:"why-should-you-use-datasqlr"},"Why Should You Use DataSQLR?"),(0,r.kt)("p",null,"If you are building a data service or a data-driven feature for an application, DataSQRL can save you a lot of time, make your life easier, and produce better implementations."),(0,r.kt)("p",null,"If you are or planning to build a data service or data-driven feature, how do you know if DataSQRL is the right choice for you?"),(0,r.kt)("p",null,"While it depends a lot on the specifics of your situation, the following heuristics are generally useful:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If your data needs are so simple that they are mostly satisfied by mapping database records onto objects, then use an ORM (object-relational mapper) library, make sure you have the right indexes installed in the database, and add the odd custom SQL query where needed."),(0,r.kt)("li",{parentName:"ol"},"If your data needs are so complex that they require a team of data scientists, data engineers, ML specialist, MLOps to be satisfied, then you likely need a custom data pipeline that glues together multiple data systems."),(0,r.kt)("li",{parentName:"ol"},"For anything in between, try DataSQRL.")),(0,r.kt)("p",null,"Be careful with heuristic 2: We frequently see organizations that think they need to bring in the whole caboodle of data scientists, data engineers, MLOps, etc to build some simple data analytics into their product. Don't call the Navy to shoot a sparrow."),(0,r.kt)("p",null,"Essentially, this boils down to: If you need more than a CRUD app but are not trying to compete with Google's algorithms, then DataSQRL is a pragmatic choice that gets you good results quickly with little effort."),(0,r.kt)("p",null,"Let's look in more detail at how DataSQRL saves you time, makes your life easier, and produces good implementations with little effort."),(0,r.kt)("h3",{id:"save-time"},"Saves You Time"),(0,r.kt)("h3",{id:"easy-to-use"},"Easy to Use"),(0,r.kt)("h3",{id:"performance"},"Fast & Efficient"),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"You can learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/concepts/datasqrl"},"DataSQRL")," or dive right into the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/nutshop-tutorial"},"introductory tutorial")," to see how it works in practice."),(0,r.kt)("p",null,"Comparison to database, warehouse, etc"))}h.isMDXComponent=!0}}]);