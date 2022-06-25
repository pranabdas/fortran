(()=>{"use strict";var e,r,t,o,a,n={},c={};function f(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={exports:{}};return n[e].call(t.exports,t,t.exports,f),t.exports}f.m=n,e=[],f.O=(r,t,o,a)=>{if(!t){var n=1/0;for(b=0;b<e.length;b++){t=e[b][0],o=e[b][1],a=e[b][2];for(var c=!0,i=0;i<t.length;i++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](t[i])))?t.splice(i--,1):(c=!1,a<n&&(n=a));if(c){e.splice(b--,1);var d=o();void 0!==d&&(r=d)}}return r}a=a||0;for(var b=e.length;b>0&&e[b-1][2]>a;b--)e[b]=e[b-1];e[b]=[t,o,a]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};r=r||[null,t({}),t([]),t(t)];for(var c=2&o&&e;"object"==typeof c&&!~r.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,f.d(a,n),a},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"assets/js/"+({6:"af036c34",10:"db3cc5ec",53:"935f2afb",135:"37e61803",161:"b7e4d31e",226:"685fb83e",318:"dfb2590f",328:"d1eb9fd4",514:"1be78505",525:"248c8cf4",529:"ac5280f2",581:"3847b3ea",592:"common",625:"6cf698e2",698:"858ebe90",798:"d92a3c43",806:"7c7ecee8",817:"14eb3368",826:"f7a8d7e4",888:"1c39b14f",918:"17896441",920:"1a4e3797"}[e]||e)+"."+{6:"3a5dd598",10:"1ec88bc4",53:"cd040b21",135:"bc06e640",161:"a8512106",165:"27d1e9ba",226:"5ea9bb8c",318:"17e5a054",328:"a234386b",443:"f478b0d2",514:"14b84b27",525:"49a5d754",529:"1c18aa08",581:"7d8c6b14",592:"14f973e2",625:"da343676",698:"4939624a",798:"827454cf",806:"71555305",817:"d7bdb3ff",826:"b70468c6",888:"cbf92026",918:"8bc408f3",920:"61d15f99",972:"3cf4222b"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},a="fortran-programing:",f.l=(e,r,t,n)=>{if(o[e])o[e].push(r);else{var c,i;if(void 0!==t)for(var d=document.getElementsByTagName("script"),b=0;b<d.length;b++){var u=d[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+t){c=u;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",a+t),c.src=e),o[e]=[r];var l=(r,t)=>{c.onerror=c.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),i&&document.head.appendChild(c)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/fortran/",f.gca=function(e){return e={17896441:"918",af036c34:"6",db3cc5ec:"10","935f2afb":"53","37e61803":"135",b7e4d31e:"161","685fb83e":"226",dfb2590f:"318",d1eb9fd4:"328","1be78505":"514","248c8cf4":"525",ac5280f2:"529","3847b3ea":"581",common:"592","6cf698e2":"625","858ebe90":"698",d92a3c43:"798","7c7ecee8":"806","14eb3368":"817",f7a8d7e4:"826","1c39b14f":"888","1a4e3797":"920"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(r,t)=>{var o=f.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var n=f.p+f.u(r),c=new Error;f.l(n,(t=>{if(f.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,o[1](c)}}),"chunk-"+r,r)}},f.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,n=t[0],c=t[1],i=t[2],d=0;if(n.some((r=>0!==e[r]))){for(o in c)f.o(c,o)&&(f.m[o]=c[o]);if(i)var b=i(f)}for(r&&r(t);d<n.length;d++)a=n[d],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(b)},t=self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();