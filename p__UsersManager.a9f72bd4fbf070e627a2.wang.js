(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{aDHx:function(e,t,a){e.exports={main:"antd-pro-pages-users-manager-index-main",range:"antd-pro-pages-users-manager-index-range",newRecord:"antd-pro-pages-users-manager-index-newRecord"}},"hx+Z":function(e,t,a){},iyc1:function(e,t,a){"use strict";a.r(t),a.d(t,"SINGLE_PAGE_SIZE",(function(){return A})),a.d(t,"COUNSELOR",(function(){return F})),a.d(t,"MANAGER",(function(){return P}));var n=a("0Owb"),r=(a("IzEo"),a("bx4M")),c=(a("+L6B"),a("2/Rp")),i=(a("5NDa"),a("5rEg")),u=a("jrin"),o=a("k1fw"),s=a("WmNS"),l=a.n(s),d=a("9og8"),p=a("oBTY"),f=a("tJVT"),m=(a("OaEy"),a("2fM7")),b=(a("y8nQ"),a("Vl3Y")),y=a("Hx5s"),v=a("q1tI"),O=a.n(v),j=a("aDHx"),g=a.n(j),E=(a("g9YV"),a("wCAj")),w=a("hx+Z"),h=a.n(w),x=a("BqDR"),k=a("dWVB"),N=function(e){return[{title:"\u7528\u6237id",dataIndex:"name",key:"name"},{title:"\u540d\u79f0",dataIndex:"showName",key:"showName"},{title:"\u8eab\u4efd",key:"identity",render:function(e){return"counselor"===e.identity?"\u54a8\u8be2\u5e08":"\u7ba1\u7406\u5458"}},{title:"\u72b6\u6001",key:"isFrezzed",render:function(e){var t=e.isFreezed,a=t?"\u51bb\u7ed3":"\u6b63\u5e38";return O.a.createElement("span",null,O.a.createElement(k["a"],{style:{color:t?"red":""},text:a}))}},{title:"Action",key:"action",render:function(t){var a=t.isFreezed;return O.a.createElement("span",null,O.a.createElement(k["a"],{onClick:function(){return e({type:"update",id:t._id,action:!a})},text:a?"\u89e3\u51bb":"\u51bb\u7ed3"}))}}]},z=function(e){var t=e.list,a=e.action,n=e.total,r=e.currentPage,c=e.setCurrentPage;function i(e){return u.apply(this,arguments)}function u(){return u=Object(d["a"])(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(x["d"])({offset:A*(t-1),size:A});case 2:n=e.sent,r=Object(x["b"])(n),c(t),a({type:"init",payload:{},list:r});case 6:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}var o={onChange:i,total:n,current:r,pageSize:A};return O.a.createElement("div",{className:h.a.container},O.a.createElement("div",{id:"components-table-demo-basic"},O.a.createElement(E["a"],{pagination:o,columns:N(a),dataSource:t})))},I=a("wqQd"),R=a("9kvl"),C=a("R1gS"),S=b["a"].Item,_=m["a"].Option,A=10,F="counselor",P="manager",T=[{value:F,label:"\u54a8\u8be2\u5e08"},{value:P,label:"\u7ba1\u7406\u5458"}],V=function(e){var t=e.currentUser,a=Object(v["useState"])(0),s=Object(f["a"])(a,2),j=s[0],E=s[1],w=Object(v["useState"])(1),h=Object(f["a"])(w,2),k=h[0],N=h[1],R=Object(v["useReducer"])(D,[]),P=Object(f["a"])(R,2),V=P[0],B=P[1];function D(e,t){var a=function(){var a=e.findIndex((function(e){return e._id===t.id})),n=e[a],r=n._id,c=void 0===r?"":r;return n.isFreezed=t.action||!1,Object(I["e"])({targetId:c,isFreezed:t.action}),[].concat(Object(p["a"])(e.slice(0,a)),[n],Object(p["a"])(e.slice(a+1)))},n={add:function(){return((null===t||void 0===t?void 0:t.payload)?[t.payload]:[]).concat(Object(p["a"])(e))},init:function(){return(null===t||void 0===t?void 0:t.list)||[]},update:a};return n[t.type]()}Object(v["useEffect"])((function(){function e(){return t.apply(this,arguments)}function t(){return t=Object(d["a"])(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(x["d"])({offset:0,size:A});case 2:t=e.sent,a=Object(x["b"])(t),B({type:"init",payload:{},list:a}),E(t.pager.Total);case 6:case"end":return e.stop()}}),e)}))),t.apply(this,arguments)}e()}),[]);var U=Object(v["useReducer"])(J,{createName:"",identity:F}),q=Object(f["a"])(U,2),G=q[0],H=q[1];function J(e,t){return Object(o["a"])({},e,Object(u["a"])({},t.type,t.value))}function L(e){H({type:"identity",value:e})}function M(e){H({type:"createName",value:e.target.value})}function Y(){return Z.apply(this,arguments)}function Z(){return Z=Object(d["a"])(l.a.mark((function e(){var t,a,r,c,i;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(n["a"])({},G),t.createName){e.next=4;break}return Object(C["a"])("\u7528\u6237id\u672a\u586b\u5199"),e.abrupt("return");case 4:return N(1),E(j+1),e.next=8,Object(x["a"])(G);case 8:a=e.sent,r=a.errcode,c=a.id_list,0===r?(i={_id:c[0],showName:"",avatar:"",userInfo:"",name:G.createName,identity:G.identity},B({type:"add",list:[],payload:i})):1===r&&Object(C["a"])("\u7528\u6237id\u91cd\u590d");case 12:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}return O.a.createElement(y["c"],{className:g.a.main},O.a.createElement(r["a"],{title:"\u6dfb\u52a0\u8d26\u53f7"},O.a.createElement(b["a"],{className:g.a.range},O.a.createElement(S,{label:"\u7528\u6237id"},O.a.createElement(i["a"],{onChange:M})),O.a.createElement(S,{label:"\u7528\u6237\u89d2\u8272"},O.a.createElement(m["a"],{placeholder:"\u8bf7\u9009\u62e9\u89d2\u8272",defaultValue:F,onChange:function(e){return L(e)}},T.map((function(e){return O.a.createElement(_,{key:e.value,value:e.value},e.label)})))),O.a.createElement(c["a"],{className:g.a.newRecord,onClick:Y,type:"primary"},"\u65b0\u5efa"))),O.a.createElement(z,{list:V,currentPage:k,action:B,setCurrentPage:N,total:j,user:t.name||""}))};t["default"]=Object(R["b"])((function(e){var t=e.user,a=e.login;return{currentUser:t.currentUser,accessToken:a.accessToken}}))(V)}}]);