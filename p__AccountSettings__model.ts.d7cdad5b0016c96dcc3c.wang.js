(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{AzYo:function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryCurrent=i,t.queryProvince=o,t.queryCity=l,t.query=d;var a=n(r("d6i3")),u=n(r("1l/V")),c=n(r("sy1d"));function i(){return s.apply(this,arguments)}function s(){return s=(0,u.default)(a.default.mark(function e(){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/currentUser"));case 1:case"end":return e.stop()}},e)})),s.apply(this,arguments)}function o(){return p.apply(this,arguments)}function p(){return p=(0,u.default)(a.default.mark(function e(){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/geographic/province"));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return f=(0,u.default)(a.default.mark(function e(t){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/geographic/city/".concat(t)));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function d(){return y.apply(this,arguments)}function y(){return y=(0,u.default)(a.default.mark(function e(){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/users"));case 1:case"end":return e.stop()}},e)})),y.apply(this,arguments)}},mDRf:function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("p0pE")),u=n(r("d6i3")),c=r("AzYo"),i={namespace:"accountSettings",state:{currentUser:{},province:[],city:[],isLoading:!1},effects:{fetch:u.default.mark(function e(t,r){var n,a,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.call,a=r.put,e.next=3,n(c.query);case 3:return i=e.sent,e.next=6,a({type:"save",payload:i});case 6:case"end":return e.stop()}},e)}),fetchCurrent:u.default.mark(function e(t,r){var n,a,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.call,a=r.put,e.next=3,n(c.queryCurrent);case 3:return i=e.sent,e.next=6,a({type:"saveCurrentUser",payload:i});case 6:case"end":return e.stop()}},e)}),fetchProvince:u.default.mark(function e(t,r){var n,a,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.call,a=r.put,e.next=3,a({type:"changeLoading",payload:!0});case 3:return e.next=5,n(c.queryProvince);case 5:return i=e.sent,e.next=8,a({type:"setProvince",payload:i});case 8:case"end":return e.stop()}},e)}),fetchCity:u.default.mark(function e(t,r){var n,a,i,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,a=r.call,i=r.put,e.next=4,a(c.queryCity,n);case 4:return s=e.sent,e.next=7,i({type:"setCity",payload:s});case 7:case"end":return e.stop()}},e)})},reducers:{saveCurrentUser:function(e,t){return(0,a.default)({},e,{currentUser:t.payload||{}})},changeNotifyCount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return(0,a.default)({},e,{currentUser:(0,a.default)({},e.currentUser,{notifyCount:t.payload.totalCount,unreadCount:t.payload.unreadCount})})},setProvince:function(e,t){return(0,a.default)({},e,{province:t.payload})},setCity:function(e,t){return(0,a.default)({},e,{city:t.payload})},changeLoading:function(e,t){return(0,a.default)({},e,{isLoading:t.payload})}}},s=i;t.default=s}}]);