(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{5331:function(e,t,r){Promise.resolve().then(r.bind(r,9433))},9433:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7437),o=r(2265),a=function(e){let t=(0,o.useRef)();return(0,o.useEffect)(()=>{let r=r=>{t.current&&!t.current.contains(r.target)&&e()};return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[]),t},i=r(9864),c=r(6806),s=r(5743),l=r(6648),u=r(661);function d(){let[e,t]=(0,o.useState)(!1),{isOpen:r,setOpen:d}=(0,s.r)(),f=()=>{t(!1)},h=a(()=>{f()});return(0,n.jsxs)("div",{className:"w-full p-5 flex items-center justify-between bg-glass-color glassBlur rounded-2xl sticky top-0 z-10 ",children:[(0,n.jsx)("div",{className:"cursor-pointer flex gap-4 items-center ",onClick:()=>{d(!r)},children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"size-10",children:(0,n.jsx)("path",{d:"M21 13H3a1 1 0 010-2h18a1 1 0 010 2zm0 5H3a1 1 0 010-2h18a1 1 0 010 2zm0-10H3a1 1 0 010-2h18a1 1 0 010 2z"})})}),(0,n.jsx)("div",{children:(0,n.jsx)(l.default,{alt:"Logo",src:u.Z,className:(0,i.cn)("object-cover w-80 h-16")})}),(0,n.jsx)("div",{className:"flex gap-2 items-center relative cursor-pointer",ref:h,onClick:()=>{t(!e)},children:(0,n.jsx)(c.Z,{className:"rounded-full"})})]})}},6806:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7437),o=r(7669),a=r(9864);function i(e){let{className:t,title:r}=e,{logout:i}=(0,o.a)();return(0,n.jsxs)("div",{onClick:i,className:(0,a.cn)("flex px-2 py-2.5 hover:bg-button-hover-color w-full gap-2 items-center cursor-pointer ",t),children:[(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"size-7",children:[(0,n.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 018 4h-2.71a8 8 0 10.001 12h2.71A9.985 9.985 0 0112 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"})]}),r]})}r(2265)},7669:function(e,t,r){"use strict";r.d(t,{a:function(){return i}});let n=async()=>{try{let e=await fetch("/api/user",{method:"POST",headers:{"Content-Type":"application/json"}});if(!e.ok){let t=(await e.json()).error||"Failed to fetch Direct Bonus data";throw Error(t)}let{data:t}=await e.json();return t}catch(e){throw e}};var o=r(2265),a=r(8726);let i=()=>{let[e,t]=(0,o.useState)(null),[r,i]=(0,o.useState)(!0);(0,o.useEffect)(()=>{(async()=>{try{let e=await n();t(e),i(!1)}catch(e){s()}})()},[]);let c=e=>{t(e)},s=()=>{document.cookie="sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.removeItem("rememberMe"),localStorage.removeItem("email"),t(null)};return{user:e,loading:r,login:async(e,t,r)=>{try{let n=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});if(!n.ok){if(!1===n.status)throw Error("Incorrect email or password");throw Error("Login failed")}let{status:o,sessionId:i,data:s}=await n.json();if(!o){a.ZP.error("Login unsuccessful",{duration:2e3});return}c(s),document.cookie="sessionId=".concat(i,"; path=/;"),r?(localStorage.setItem("rememberMe","true"),localStorage.setItem("email",e)):(localStorage.removeItem("rememberMe"),localStorage.removeItem("email")),window.location.href="/dashboard",a.ZP.success("Login successful",{duration:2e3})}catch(e){a.ZP.error(e.message||"Login failed",{duration:2e3})}},logout:async()=>{try{if(!(await fetch("/api/logout",{method:"POST"})).ok)throw Error("Logout failed");s(),window.location.href="/login"}catch(e){a.ZP.error(e.message,{duration:2e3})}}}}},5743:function(e,t,r){"use strict";r.d(t,{GlobalProvider:function(){return i},r:function(){return c}});var n=r(7437),o=r(2265);let a=(0,o.createContext)();function i(e){let{children:t}=e,[r,i]=(0,o.useState)(!0);return(0,n.jsx)(a.Provider,{value:{isOpen:r,setOpen:i},children:t})}function c(){return(0,o.useContext)(a)}},9864:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(4839),o=r(6164);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},661:function(e,t){"use strict";t.Z={src:"/_next/static/media/Logo.4a76d414.png",height:620,width:850,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAElBMVEVMaXGtcienbye4eil/LwCRWyQM8GblAAAABnRSTlMARSVdCA4iXJVIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5JREFUeJxjYMAALIxMTEyMTKwMLMyMjIzMzEyYSgAEIQAmx+jSRwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[868,726,648,971,23,744],function(){return e(e.s=5331)}),_N_E=e.O()}]);