"use strict";(self.webpackChunkfortran_programing=self.webpackChunkfortran_programing||[]).push([[920],{8374:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(5861),a=n(7757),c=n.n(a),u=n(7294),l=n(2263),o=n(2600),s=n(5742),i=n(9960),m=n(6775),h=n(412);var f=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,l.Z)().siteConfig.baseUrl;return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(22),d=n(8202),g=n(2539),_=n(726),E=n(1073),v=n(311),y=n(1029);function I(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var S="searchQueryInput_CFBF",w="searchResultItem_U687",k="searchResultItemPath_uIbk",b="searchResultItemSummary_oZHr";function C(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,c=t.tokens,l=t.metadata,o=0===r,s=2===r,m=(o?n.b:a.b).slice(),h=s?n.s:n.t;return o||m.push(a.t),u.createElement("article",{className:w},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:s?(0,g.C)(h,c):(0,_.o)(h,(0,E.m)(l,"t"),c,100)}})),m.length>0&&u.createElement("p",{className:k},m.join(" \u203a ")),s&&u.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,_.o)(n.t,(0,E.m)(l,"t"),c,100)}}))}var Z=function(){var e=(0,l.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,a=t.updateSearchPath,i=(0,u.useState)(n),m=i[0],h=i[1],g=(0,u.useState)(),_=g[0],E=g[1],w=(0,u.useState)(),k=w[0],b=w[1],Z=(0,u.useMemo)((function(){return m?I(y.Iz.search_results_for,{keyword:m}):y.Iz.search_the_documentation}),[m]);(0,u.useEffect)((function(){a(m),_&&(m?_(m,(function(e){b(e)})):b(void 0))}),[m,_]);var R=(0,u.useCallback)((function(e){h(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==m&&h(n)}),[n]),(0,u.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,a=n.zhDictionary,E((function(){return(0,d.v)(r,a,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(o.Z,{title:Z},u.createElement(s.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"})),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,Z),u.createElement("input",{type:"search",name:"q",className:S,"aria-label":"Search",onChange:R,value:m,autoComplete:"off",autoFocus:!0}),!_&&m&&u.createElement("div",null,u.createElement(v.Z,null)),k&&(k.length>0?u.createElement("p",null,I(1===k.length?y.Iz.count_documents_found:y.Iz.count_documents_found_plural,{count:k.length})):u.createElement("p",null,y.Iz.no_documents_were_found)),u.createElement("section",null,k&&k.map((function(e){return u.createElement(C,{key:e.document.i,searchResult:e})})))))}}}]);