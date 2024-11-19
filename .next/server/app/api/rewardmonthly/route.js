"use strict";(()=>{var e={};e.id=1126,e.ids=[1126],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63210:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>y,patchFetch:()=>h,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>p,staticGenerationAsyncStorage:()=>f});var o={};r.r(o),r.d(o,{POST:()=>d});var s=r(49303),n=r(88716),a=r(60670),i=r(71615),l=r(87070);async function d(e){try{let t=i.cookies().get("sessionId")?.value,{type:r}=await e.json();if(!t)return l.NextResponse.json({error:"Session ID not found"},{status:401});let o=await fetch("https://api.bloombax.com/api/rewardBonusList",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,type:r})});if(!o.ok){let e=await o.json();return l.NextResponse.json({error:e.message},{status:o.status})}let s=await o.json();return l.NextResponse.json(s)}catch(e){return l.NextResponse.json({error:e.message},{status:500})}}let u=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/rewardmonthly/route",pathname:"/api/rewardmonthly",filename:"route",bundlePath:"app/api/rewardmonthly/route"},resolvedPagePath:"D:\\Webdesigne\\Work\\bloombax\\app\\api\\rewardmonthly\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:f,serverHooks:p}=u,y="/api/rewardmonthly/route";function h(){return(0,a.patchFetch)({serverHooks:p,staticGenerationAsyncStorage:f})}},71615:(e,t,r)=>{var o=r(88757);r.o(o,"cookies")&&r.d(t,{cookies:function(){return o.cookies}})},33085:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraftMode",{enumerable:!0,get:function(){return n}});let o=r(45869),s=r(6278);class n{get isEnabled(){return this._provider.isEnabled}enable(){let e=o.staticGenerationAsyncStorage.getStore();return e&&(0,s.trackDynamicDataAccessed)(e,"draftMode().enable()"),this._provider.enable()}disable(){let e=o.staticGenerationAsyncStorage.getStore();return e&&(0,s.trackDynamicDataAccessed)(e,"draftMode().disable()"),this._provider.disable()}constructor(e){this._provider=e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cookies:function(){return f},draftMode:function(){return p},headers:function(){return c}});let o=r(68996),s=r(53047),n=r(92044),a=r(72934),i=r(33085),l=r(6278),d=r(45869),u=r(54580);function c(){let e="headers",t=d.staticGenerationAsyncStorage.getStore();if(t){if(t.forceStatic)return s.HeadersAdapter.seal(new Headers({}));(0,l.trackDynamicDataAccessed)(t,e)}return(0,u.getExpectedRequestStore)(e).headers}function f(){let e="cookies",t=d.staticGenerationAsyncStorage.getStore();if(t){if(t.forceStatic)return o.RequestCookiesAdapter.seal(new n.RequestCookies(new Headers({})));(0,l.trackDynamicDataAccessed)(t,e)}let r=(0,u.getExpectedRequestStore)(e),s=a.actionAsyncStorage.getStore();return(null==s?void 0:s.isAction)||(null==s?void 0:s.isAppRoute)?r.mutableCookies:r.cookies}function p(){let e=(0,u.getExpectedRequestStore)("draftMode");return new i.DraftMode(e.draftMode)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53047:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{HeadersAdapter:function(){return n},ReadonlyHeadersError:function(){return s}});let o=r(38238);class s extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new s}}class n extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,s){if("symbol"==typeof r)return o.ReflectAdapter.get(t,r,s);let n=r.toLowerCase(),a=Object.keys(e).find(e=>e.toLowerCase()===n);if(void 0!==a)return o.ReflectAdapter.get(t,a,s)},set(t,r,s,n){if("symbol"==typeof r)return o.ReflectAdapter.set(t,r,s,n);let a=r.toLowerCase(),i=Object.keys(e).find(e=>e.toLowerCase()===a);return o.ReflectAdapter.set(t,i??r,s,n)},has(t,r){if("symbol"==typeof r)return o.ReflectAdapter.has(t,r);let s=r.toLowerCase(),n=Object.keys(e).find(e=>e.toLowerCase()===s);return void 0!==n&&o.ReflectAdapter.has(t,n)},deleteProperty(t,r){if("symbol"==typeof r)return o.ReflectAdapter.deleteProperty(t,r);let s=r.toLowerCase(),n=Object.keys(e).find(e=>e.toLowerCase()===s);return void 0===n||o.ReflectAdapter.deleteProperty(t,n)}})}static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"append":case"delete":case"set":return s.callable;default:return o.ReflectAdapter.get(e,t,r)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new n(e)}append(e,t){let r=this.headers[e];"string"==typeof r?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){let t=this.headers[e];return void 0!==t?this.merge(t):null}has(e){return void 0!==this.headers[e]}set(e,t){this.headers[e]=t}forEach(e,t){for(let[r,o]of this.entries())e.call(t,o,r,this)}*entries(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase();yield t}}*values(){for(let e of Object.keys(this.headers)){let t=this.get(e);yield t}}[Symbol.iterator](){return this.entries()}}},68996:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{MutableRequestCookiesAdapter:function(){return c},ReadonlyRequestCookiesError:function(){return a},RequestCookiesAdapter:function(){return i},appendMutableCookies:function(){return u},getModifiedCookieValues:function(){return d}});let o=r(92044),s=r(38238),n=r(45869);class a extends Error{constructor(){super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options")}static callable(){throw new a}}class i{static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"clear":case"delete":case"set":return a.callable;default:return s.ReflectAdapter.get(e,t,r)}}})}}let l=Symbol.for("next.mutated.cookies");function d(e){let t=e[l];return t&&Array.isArray(t)&&0!==t.length?t:[]}function u(e,t){let r=d(t);if(0===r.length)return!1;let s=new o.ResponseCookies(e),n=s.getAll();for(let e of r)s.set(e);for(let e of n)s.set(e);return!0}class c{static wrap(e,t){let r=new o.ResponseCookies(new Headers);for(let t of e.getAll())r.set(t);let a=[],i=new Set,d=()=>{let e=n.staticGenerationAsyncStorage.getStore();if(e&&(e.pathWasRevalidated=!0),a=r.getAll().filter(e=>i.has(e.name)),t){let e=[];for(let t of a){let r=new o.ResponseCookies(new Headers);r.set(t),e.push(r.toString())}t(e)}};return new Proxy(r,{get(e,t,r){switch(t){case l:return a;case"delete":return function(...t){i.add("string"==typeof t[0]?t[0]:t[0].name);try{e.delete(...t)}finally{d()}};case"set":return function(...t){i.add("string"==typeof t[0]?t[0]:t[0].name);try{return e.set(...t)}finally{d()}};default:return s.ReflectAdapter.get(e,t,r)}}})}}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[8948,5972],()=>r(63210));module.exports=o})();