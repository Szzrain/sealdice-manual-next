import{u as U,f as Z,g as ee,h as B,i as te,j as le,t as ae,k as se,l as E,m as D,n as re,p as M,q as l,s as O,v as j,R as I,x as ue,y as oe,z as ie,A as ne,B as ce,C as de,D as ve,E as he,O as pe,F as me,G as ye,P as fe,H as ge,I as ke,J as T}from"./app-3dGJw9wW.js";const _e=["/","/about/","/about/about.html","/about/develop.html","/about/license.html","/advanced/","/advanced/edit_complex_custom_text.html","/advanced/edit_deck.html","/advanced/edit_gamesystem.html","/advanced/edit_helpdoc.html","/advanced/edit_jsscript.html","/advanced/edit_reply.html","/advanced/edit_sensitive_words.html","/advanced/introduce.html","/advanced/script.html","/config/","/config/ban.html","/config/censor.html","/config/custom_text.html","/config/deck.html","/config/helpdoc.html","/config/jsscript.html","/config/quit_grp_auto.html","/config/reply.html","/deploy/","/deploy/about_opensource.html","/deploy/about_pc.html","/deploy/db-repair.html","/deploy/platform-dingtalk.html","/deploy/platform-discord.html","/deploy/platform-dodo.html","/deploy/platform-kook.html","/deploy/platform-qq.html","/deploy/platform-slack.html","/deploy/platform-telegram.html","/deploy/quick-start.html","/deploy/special_feature.html","/deploy/transfer.html","/use/","/use/attribute_alias.html","/use/coc7.html","/use/core.html","/use/deck_and_reply.html","/use/dnd5e.html","/use/faq.html","/use/fun.html","/use/introduce.html","/use/log.html","/use/other_rules.html","/use/quick-start.html","/use/story.html","/404.html"],He="SEARCH_PRO_QUERY_HISTORY",p=U(He,[]),Re=()=>{const{queryHistoryCount:a}=T,s=a>0;return{enabled:s,queryHistory:p,addQueryHistory:r=>{s&&(p.value.length<a?p.value=Array.from(new Set([r,...p.value])):p.value=Array.from(new Set([r,...p.value.slice(0,a-1)])))},removeQueryHistory:r=>{p.value=[...p.value.slice(0,r),...p.value.slice(r+1)]}}},P=a=>_e[a.id]+("anchor"in a?`#${a.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:L}=T,m=U(xe,[]),be=()=>{const a=L>0;return{enabled:a,resultHistory:m,addResultHistory:s=>{if(a){const r={link:P(s),display:s.display};"header"in s&&(r.header=s.header),m.value.length<L?m.value=[r,...m.value]:m.value=[r,...m.value.slice(0,L-1)]}},removeResultHistory:s=>{m.value=[...m.value.slice(0,s),...m.value.slice(s+1)]}}},Qe=a=>{const s=ce(),r=B(),q=de(),o=E(!1),f=ve([]);return he(()=>{const{search:H,terminate:y}=pe(),R=()=>{f.value=[],o.value=!1},g=ke(v=>{o.value=!0,v?H(v,r.value,s.value).then(h=>{var x,k;return((k=(x=s.value).searchFilter)==null?void 0:k.call(x,h,v,r.value,q.value))??h}).then(h=>{f.value=h,o.value=!1}).catch(h=>{console.error(h),R()}):R()},T.searchDelay);M([a,r],()=>g(a.value),{immediate:!0}),me(()=>{y()})}),{searching:o,results:f}};var we=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:s}){const r=ee(),q=B(),o=te(le),{enabled:f,addQueryHistory:H,queryHistory:y,removeQueryHistory:R}=Re(),{enabled:g,resultHistory:v,addResultHistory:h,removeResultHistory:x}=be(),k=f||g,w=ae(a,"query"),{results:_,searching:Y}=Qe(w),u=se({isQuery:!0,index:0}),c=E(0),d=E(0),$=D(()=>k&&(y.value.length>0||v.value.length>0)),C=D(()=>_.value.length>0),S=D(()=>_.value[c.value]||null),z=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?v.value.length-1:y.value.length-1):u.index=t-1},G=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:v.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{c.value=c.value>0?c.value-1:_.value.length-1,d.value=S.value.contents.length-1},V=()=>{c.value=c.value<_.value.length-1?c.value+1:0,d.value=0},K=()=>{d.value<S.value.contents.length-1?d.value+=1:V()},N=()=>{d.value>0?d.value-=1:J()},A=e=>e.map(t=>ye(t)?t:l(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[i,Q=""]=ge(t)?t[q.value].split("$content"):t.split("$content");return e.display.map(n=>l("div",A([i,...n,Q])))}return e.display.map(t=>l("div",A(t)))},b=()=>{c.value=0,d.value=0,s("updateQuery",""),s("close")};return re("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=S.value.contents[d.value];H(a.query),h(t),r.push(P(t)),b()}}else if(g){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(s("updateQuery",y.value[t]),e.preventDefault()):(r.push(v.value[t].link),b())}}}}),M([c,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:w.value?!C.value:!$.value}],id:"search-pro-results"},w.value===""?k?$.value?[f?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},o.value.queryHistory),y.value.map((e,t)=>l("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{s("updateQuery",e)}},[l(O,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:i=>{i.preventDefault(),i.stopPropagation(),R(t)}})]))])):null,g?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},o.value.resultHistory),v.value.map((e,t)=>l(I,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{b()}},()=>[l(O,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(i=>A(i)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:i=>{i.preventDefault(),i.stopPropagation(),x(t)}})]))])):null]:o.value.emptyHistory:o.value.emptyResult:Y.value?l(ue,{hint:o.value.searching}):C.value?l("ul",{class:"search-pro-result-list"},_.value.map(({title:e,contents:t},i)=>{const Q=c.value===i;return l("li",{class:["search-pro-result-list-item",{active:Q}]},[l("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),t.map((n,X)=>{const F=Q&&d.value===X;return l(I,{to:P(n),class:["search-pro-result-item",{active:F,"aria-selected":F}],onClick:()=>{H(a.query),h(n),b()}},()=>[n.type==="text"?null:l(n.type==="title"?oe:n.type==="heading"?ie:ne,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?l("div",{class:"content-header"},n.header):null,l("div",W(n))])])})])})):o.value.emptyResult)}});export{we as default};
