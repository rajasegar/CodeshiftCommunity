(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(99)),i={id:"prompting-for-human-input",title:"Prompting for human input",slug:"/prompting-for-human-input"},c={unversionedId:"guides/prompting-for-human-input",id:"guides/prompting-for-human-input",isDocsHomePage:!1,title:"Prompting for human input",description:"When writing codemods, you might encounter a scenario where a specific migration might require human eyes, might not be possible or even not worth the amount of work required.",source:"@site/docs/guides/prompting-for-human-input.mdx",slug:"/prompting-for-human-input",permalink:"/docs/prompting-for-human-input",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/guides/prompting-for-human-input.mdx",version:"current",sidebar:"docs",previous:{title:"When not to codemod",permalink:"/docs/when-not-to-codemod"},next:{title:"Import manipulation",permalink:"/docs/import-manipulation"}},p=[{value:"Inserting a comment",id:"inserting-a-comment",children:[]}],u={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When writing codemods, you might encounter a scenario where a specific migration might require human eyes, might not be possible or even ",Object(a.b)("a",{parentName:"p",href:"/docs/when-not-to-codemod"},"not worth the amount of work required"),"."),Object(a.b)("p",null,"In these scenarios, it's usually the best to migrate as much as you can and bail-out by ",Object(a.b)("strong",{parentName:"p"},"prompting for human input"),"."),Object(a.b)("p",null,"Or in other words: ",Object(a.b)("strong",{parentName:"p"},'"Insert a comment"'),"."),Object(a.b)("p",null,"Inserting comments as codemod output is a completely valid thing to do and highlights to maintainers that they need to manually complete the migration.\nWhen leaving comments, it's helpful to be as descriptive as possible, including all or as much of the context required for the maintainer."),Object(a.b)("p",null,"Comments are also helpful because when a PR is raised, these prompts can easily be seen in the diff and actioned at the maintainers discression. The key is to make the surface area of your codemod known and let maintainers know where they're needed."),Object(a.b)("h2",{id:"inserting-a-comment"},"Inserting a comment"),Object(a.b)("p",null,"Let's say your component now requires an additional prop ",Object(a.b)("inlineCode",{parentName:"p"},"securityToken")," to function safely, but you need a user to manually enter the token.\nThis is a great candidate for prompting for user input."),Object(a.b)("p",null,"Let's write a transform to do that:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  const newProp = source\n    .find(j.JSXIdentifier)\n    .filter(path => path.node.name === 'securityToken')\n    .forEach(path => {\n      path.value.comments = path.value.comments || [];\n      path.value.comments.push(\n        j.commentBlock(`\n        * TODO (Codemod generated): Please provide a security token.\n        * Visit https://www.my-project/security/tokens to generate a valid token.\n      `),\n      );\n    });\n\n  return source.toSource();\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport MyComponent from '../components/my-module';\n\nconst App = props => {\n  return <div {...props} securityToken=\"???\" />;\n};\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nimport MyComponent from '../components/my-module';\n\n+/**\n+ * TODO (Codemod generated): Please provide a security token.\n+ * Visit https://www.my-project/security/tokens to generate a valid token.\n+ */\nconst App = props => {\n  return <div {...props} securityToken=\"???\" />;\n};\n")))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||l[d]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);