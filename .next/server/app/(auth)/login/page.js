(()=>{var e={};e.id=4665,e.ids=[4665],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},82593:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>x,tree:()=>d}),r(76190),r(70652),r(41888);var a=r(23191),o=r(88716),s=r(37922),n=r.n(s),l=r(95231),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let d=["",{children:["(auth)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,76190)),"D:\\Webdesigne\\Work\\bloombax\\app\\(auth)\\login\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,70652)),"D:\\Webdesigne\\Work\\bloombax\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,41888)),"D:\\Webdesigne\\Work\\bloombax\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Webdesigne\\Work\\bloombax\\app\\(auth)\\login\\page.jsx"],m="/(auth)/login/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(auth)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},51856:(e,t,r)=>{Promise.resolve().then(r.bind(r,44097))},60858:(e,t,r)=>{Promise.resolve().then(r.bind(r,21231)),Promise.resolve().then(r.bind(r,23361)),Promise.resolve().then(r.bind(r,40381))},61753:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},95583:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,79404,23))},44097:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(10326),o=r(17577),s=r(46226),n=r(90434),l=r(47111);function i({submitForm:e}){let[t,r]=(0,o.useState)({}),[i,d]=(0,o.useState)({}),c=e=>{r(t=>({...t,[e]:!t[e]}))},m=e=>{let{name:t,value:r}=e.target;d(e=>({...e,[t]:r}))};return a.jsx("div",{className:"p-10 max-sm:px-5 my-10",children:(0,a.jsxs)("div",{className:"flex flex-col items-center p-10 max-sm:px-5 md:w-[620px] mx-auto rounded-2xl gap-5",children:[a.jsx(s.default,{alt:"Logo",src:l.Z,className:" h-24 object-cover rounded-md"}),a.jsx("p",{className:"",children:"Login here to access your account"}),(0,a.jsxs)("form",{onSubmit:e,className:"w-full",children:[(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"email",className:"font-medium text-black",children:"E-mail or Username"}),a.jsx("input",{type:"email || text",id:"email",name:"email",required:!0,className:"w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent",onChange:m}),a.jsx("label",{htmlFor:"password",className:"font-medium text-black",children:"Password"}),(0,a.jsxs)("div",{className:"relative",children:[a.jsx("input",{type:t.password?"text":"password",id:"password",name:"password",required:!0,className:"w-full mb-2.5 px-5 py-2 text-lg text-black border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent",onChange:m}),a.jsx("button",{type:"button",className:"absolute right-3 top-3",onClick:()=>c("password"),children:t.password?a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-5 w-5 text-gray-500",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825a3.975 3.975 0 01-3.75 0m-1.425-1.2A9.015 9.015 0 012.08 12a9.014 9.014 0 016.62-6.62m1.425-1.2a3.975 3.975 0 013.75 0m1.425 1.2A9.015 9.015 0 0121.92 12a9.014 9.014 0 01-6.62 6.62m-1.425 1.2a3.975 3.975 0 01-3.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"})}):a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-5 w-5 text-gray-500",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.929 4.929a12 12 0 0114.142 0m0 0a12.046 12.046 0 013.463 7.071 12.046 12.046 0 01-3.463 7.071m-14.142 0a12.046 12.046 0 01-3.463-7.071 12.046 12.046 0 013.463-7.071m3.463 7.071a4.5 4.5 0 019 0 4.5 4.5 0 01-9 0z"})})})]})]}),(0,a.jsxs)("div",{className:"flex items-center mb-3",children:[a.jsx("input",{type:"checkbox",name:"rememberMe",id:"rememberMe",className:"mr-2"}),a.jsx("label",{htmlFor:"rememberMe",className:"text-lg text-black",children:"Remember Me"})]}),a.jsx("button",{type:"submit",className:"w-full py-2.5 bg-button-color hover:bg-button-hover-color rounded-md font-medium",children:"Login Me"}),(0,a.jsxs)("div",{className:"text-lg text-center mt-7 tracking-wide",children:["Forgot Password? ",a.jsx(n.default,{href:"/forgetPassword",className:"text-form-color underline",children:"Reset Password"})]}),(0,a.jsxs)("div",{className:"text-lg text-center mt-2 tracking-wide",children:[" Don't"," have an account? ",a.jsx(n.default,{href:"/register",className:"text-form-color  underline",children:"Register"})]})]})]})})}var d=r(27049),c=r(73502);function m(){let{login:e}=(0,d.a)(),t=async t=>{t.preventDefault();let r=new FormData(t.target),a=r.get("email"),o=r.get("password"),s="on"===r.get("rememberMe");await e(a,o,s)};return(0,a.jsxs)("div",{children:[a.jsx(i,{submitForm:t}),a.jsx(c.Z,{})]})}},73502:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(10326);function o(){return a.jsx("div",{className:"p-5 w-full flex items-center justify-center",children:a.jsx("p",{className:"text-sm",children:"\xa9 2024 Bloombax. All Rights Reserved."})})}r(17577)},21231:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var a=r(10326),o=r(17577);let s=()=>4*Math.random()+1,n=()=>4*Math.random()+16,l=()=>Math.random()>.5?"rounded-full":"",i=()=>{let e=["bg-white","bg-yellow-300","bg-blue-400","bg-red-500"];return e[Math.floor(Math.random()*e.length)]},d=()=>.7*Math.random()+.3,c=()=>{let e=["star-move","star-twinkle","star-slide","star-fall"];return e[Math.floor(Math.random()*e.length)]},m=()=>{let e=["normal","reverse"];return e[Math.floor(Math.random()*e.length)]},u=({style:e})=>{let t=s(),r=n(),o=l(),u=i(),x=d(),h=c(),p=m();return a.jsx("div",{className:`${u} ${o} fixed ${h}`,style:{...e,width:`${t}px`,height:`${t}px`,animationDuration:`${r}s`,animationDirection:p,opacity:x}})},x=({count:e})=>{let[t,r]=(0,o.useState)([]);return(0,o.useEffect)(()=>{let t=[];for(let r=0;r<e;r++)t.push(a.jsx(u,{style:{top:`${100*Math.random()}vh`,left:`${100*Math.random()}vw`}},r));r(t)},[e]),a.jsx(a.Fragment,{children:t})}},27049:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});let a=async()=>{try{let e=await fetch("/api/user",{method:"POST",headers:{"Content-Type":"application/json"}});if(!e.ok){let t=(await e.json()).error||"Failed to fetch Direct Bonus data";throw Error(t)}let{data:t}=await e.json();return t}catch(e){throw e}};var o=r(17577),s=r(40381);let n=()=>{let[e,t]=(0,o.useState)(null),[r,n]=(0,o.useState)(!0);(0,o.useEffect)(()=>{(async()=>{try{let e=await a();t(e),n(!1)}catch(e){i()}})()},[]);let l=e=>{t(e)},i=()=>{document.cookie="sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.removeItem("rememberMe"),localStorage.removeItem("email"),t(null)};return{user:e,loading:r,login:async(e,t,r)=>{try{let a=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});if(!a.ok){if(!1===a.status)throw Error("Incorrect email or password");throw Error("Login failed")}let{status:o,sessionId:n,data:i}=await a.json();if(!o){s.ZP.error("Login unsuccessful",{duration:2e3});return}l(i),document.cookie=`sessionId=${n}; path=/;`,r?(localStorage.setItem("rememberMe","true"),localStorage.setItem("email",e)):(localStorage.removeItem("rememberMe"),localStorage.removeItem("email")),window.location.href="/dashboard",s.ZP.success("Login successful",{duration:2e3})}catch(e){s.ZP.error(e.message||"Login failed",{duration:2e3})}},logout:async()=>{try{if(!(await fetch("/api/logout",{method:"POST"})).ok)throw Error("Logout failed");i(),window.location.href="/login"}catch(e){s.ZP.error(e.message,{duration:2e3})}}}}},23361:(e,t,r)=>{"use strict";r.d(t,{GlobalProvider:()=>n,r:()=>l});var a=r(10326),o=r(17577);let s=(0,o.createContext)();function n({children:e}){let[t,r]=(0,o.useState)(!0);return a.jsx(s.Provider,{value:{isOpen:t,setOpen:r},children:e})}function l(){return(0,o.useContext)(s)}},76190:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>l});var a=r(68570);let o=(0,a.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\app\(auth)\login\page.jsx`),{__esModule:s,$$typeof:n}=o;o.default;let l=(0,a.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\app\(auth)\login\page.jsx#default`)},70652:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b,metadata:()=>g});var a=r(19510),o=r(80143),s=r.n(o);r(67272);var n=r(68570);let l=(0,n.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\components\Stars.jsx`),{__esModule:i,$$typeof:d}=l;l.default;let c=(0,n.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\components\Stars.jsx#default`);var m=r(19125);let u=(0,n.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\hook\useContext.js`),{__esModule:x,$$typeof:h}=u;u.default;let p=(0,n.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\hook\useContext.js#GlobalProvider`);(0,n.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\hook\useContext.js#useGlobalContextProvider`);let g={title:"Bloombax",description:"Trusted trading platform"};function b({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:`${s().className} bgGradient bg-[#f3eeee] text-black relative`,children:[a.jsx(m.x7,{position:"top-right"}),a.jsx(c,{count:400}),a.jsx(p,{children:a.jsx("div",{className:"relative z-10",children:e})})]})})}},41888:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(19510),o=r(57371);function s(){return a.jsx("div",{className:"flex items-center justify-center h-screen bg-black",children:(0,a.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,a.jsxs)("div",{className:"animate-colorSplits text-[220px] relative ",children:["404",a.jsx("div",{className:"absolute top-0 left-[-2px] z-10 overflow-visible text-[#333] glitches",style:{clipPath:"polygon(0% 0%, 100% 0, 100% 25%, 0 25%, 0 30%, 100% 30%, 100% 50%, 0 50%, 0 60%, 100% 60%, 100% 65%, 0 65%, 0 80%, 100% 80%, 100% 85%, 0 85%, 0% 0%)"},children:"404"})]}),a.jsx("h2",{className:"text-lg font-semibold",children:" Page Not Found"}),a.jsx(o.default,{href:"/",className:"bg-base-color px-8 py-3 rounded-md text-black font-semibold hover:bg-base-color-hover hover:scale-105 transition-all duration-150",children:"Return Home"})]})})}},47111:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a={src:"/_next/static/media/Logo.4a76d414.png",height:620,width:850,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAElBMVEVMaXGtcienbye4eil/LwCRWyQM8GblAAAABnRSTlMARSVdCA4iXJVIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5JREFUeJxjYMAALIxMTEyMTKwMLMyMjIzMzEyYSgAEIQAmx+jSRwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(66621);let o=e=>[{type:"image/x-icon",sizes:"2000x1459",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8948,8605,285],()=>r(82593));module.exports=a})();