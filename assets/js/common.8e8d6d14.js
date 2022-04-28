(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[592],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,c(c({ref:t},u),{},{components:n})):r.createElement(h,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5710:function(e,t,n){"use strict";n.d(t,{Z:function(){return Y}});var r=n(7462),o=n(3366),a=n(7294),c=n(2389),l=n(6010),i=n(2949),s=n(6668);function u(){var e=(0,s.L)().prism,t=(0,i.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var p=n(6528),d=n(7594),m=n.n(d),h=(0,p.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),f=(0,p.Z)(/\{([\d,-]+)\}/,{range:1}),g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},y=["highlight-next-line","highlight-start","highlight-end"];function v(e){var t=e.map((function(e){var t=g[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+y.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function b(e,t,n){var r=e.replace(/\n$/,"");if(t&&f.test(t)){var o=t.match(f).groups.range;return{highlightLines:m()(o).filter((function(e){return e>0})).map((function(e){return e-1})),code:r}}if(void 0===n)return{highlightLines:[],code:r};for(var a,c=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":case"bash":return v(["bash"]);case"markdown":case"md":return v(["html","jsx","bash"]);default:return v(Object.keys(g))}}(n),l=r.split("\n"),i="",s=0;s<l.length;){var u=l[s].match(c);if(u){switch(u.slice(1).find((function(e){return void 0!==e}))){case"highlight-next-line":i+=s+",";break;case"highlight-start":a=s;break;case"highlight-end":i+=a+"-"+(s-1)+","}l.splice(s,1)}else s+=1}return{highlightLines:m()(i),code:r=l.join("\n")}}var k=n(5281),E="codeBlockContainer_MPoW",B=["as"];function N(e){var t=e.as,n=(0,o.Z)(e,B),c=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],o=e[1],a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(u());return a.createElement(t,(0,r.Z)({},n,{style:c,className:(0,l.Z)(n.className,E,k.k.common.codeBlock)}))}var w={codeBlockContent:"codeBlockContent_B9tL",codeBlockTitle:"codeBlockTitle_YYkX",codeBlock:"codeBlock__0OG",codeBlockStandalone:"codeBlockStandalone_Px3r",codeBlockLines:"codeBlockLines_gEuF",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hGCP",buttonGroup:"buttonGroup_hRr1"};function j(e){var t=e.children,n=e.className;return a.createElement(N,{as:"pre",tabIndex:0,className:(0,l.Z)(w.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:w.codeBlockLines},t))}var L={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},O={Prism:n(7410).default,theme:L};function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}var x=/\r\n|\r|\n/,P=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},_=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=T({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=T({},n,{backgroundColor:null}),o};function I(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var Z=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),C(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?_(e.theme,e.language):void 0;return t.themeDict=n})),C(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=T({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?T({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),C(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),C(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=T({},I(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?T({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),C(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,l=[],i=[l];c>-1;){for(;(a=r[c]++)<o[c];){var s=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=S(u,p.type),p.alias&&(u=S(u,p.alias)),s=p.content),"string"==typeof s){var d=s.split(x),m=d.length;l.push({types:u,content:d[0]});for(var h=1;h<m;h++)P(l),i.push(l=[]),l.push({types:u,content:d[h]})}else c++,t.push(u),n.push(s),r.push(0),o.push(s.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return P(l),i}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),A=Z,D="highlightedCodeLine_mQo0",z="codeLine_rqGN",W="codeLineNumber_hzTh",H="codeLineContent_hM6e";function R(e){var t=e.line,n=e.highlight,o=e.showLineNumbers,c=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var s=c(Object.assign({line:t},o&&{className:z}));n&&(s.className=(0,l.Z)(s.className,D,"theme-code-block-highlighted-line"));var u=t.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},i({token:e,key:t})))}));return a.createElement("span",s,o?a.createElement(a.Fragment,null,a.createElement("span",{className:W}),a.createElement("span",{className:H},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var M=n(5999),F={copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function V(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),o=r[0],c=r[1],i=(0,a.useRef)(void 0),s=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var c=document.getSelection(),l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),l&&(c.removeAllRanges(),c.addRange(l)),a&&a.focus()}(t),c(!0),i.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,M.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,F.copyButton,o&&F.copyButtonCopied),onClick:s},a.createElement("span",{className:F.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:F.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:F.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var G="wordWrapButtonIcon_azs1",q="wordWrapButtonEnabled_Geot";function $(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,M.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,r&&q),"aria-label":o,title:o},a.createElement("svg",{className:G,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function X(e){var t,n,o,c,i,p,d,m,f,g,y,v=e.children,k=e.className,E=void 0===k?"":k,B=e.metastring,j=e.title,L=e.showLineNumbers,C=e.language,T=(0,s.L)().prism.defaultLanguage,x=null!=(t=null!=C?C:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:T,P=u(),S=(o=(0,a.useState)(!1),c=o[0],i=o[1],p=(0,a.useState)(!1),d=p[0],m=p[1],f=(0,a.useRef)(null),g=(0,a.useCallback)((function(){var e=f.current.querySelector("code");c?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",i((function(e){return!e}))}),[f,c]),y=(0,a.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(t)}),[f]),(0,a.useEffect)((function(){y()}),[c,y]),(0,a.useEffect)((function(){return window.addEventListener("resize",y,{passive:!0}),function(){window.removeEventListener("resize",y)}}),[y]),{codeBlockRef:f,isEnabled:c,isCodeScrollable:d,toggle:g}),_=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(h))?void 0:n.groups.title)?t:""}(B)||j,I=b(v,B,x),Z=I.highlightLines,D=I.code,z=L||function(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}(B);return a.createElement(N,{as:"div",className:(0,l.Z)(E,x&&!E.includes("language-"+x)&&"language-"+x)},_&&a.createElement("div",{className:w.codeBlockTitle},_),a.createElement("div",{className:w.codeBlockContent},a.createElement(A,(0,r.Z)({},O,{theme:P,code:D,language:null!=x?x:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:S.codeBlockRef,className:(0,l.Z)(t,w.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,l.Z)(w.codeBlockLines,z&&w.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(R,{key:t,line:e,getLineProps:r,getTokenProps:o,highlight:Z.includes(t),showLineNumbers:z})}))))})),a.createElement("div",{className:w.buttonGroup},(S.isEnabled||S.isCodeScrollable)&&a.createElement($,{className:w.codeButton,onClick:function(){return S.toggle()},isEnabled:S.isEnabled}),a.createElement(V,{className:w.codeButton,code:D}))))}var Q=["children"];function Y(e){var t=e.children,n=(0,o.Z)(e,Q),l=(0,c.Z)(),i=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof i?X:j;return a.createElement(s,(0,r.Z)({key:String(l)},n),i)}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);