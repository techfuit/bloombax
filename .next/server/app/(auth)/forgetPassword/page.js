(()=>{var e={};e.id=8792,e.ids=[8792],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},31060:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>x,tree:()=>d}),r(5368),r(70652),r(41888);var a=r(23191),s=r(88716),o=r(37922),n=r.n(o),l=r(95231),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let d=["",{children:["(auth)",{children:["forgetPassword",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5368)),"D:\\Webdesigne\\Work\\bloombax\\app\\(auth)\\forgetPassword\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,70652)),"D:\\Webdesigne\\Work\\bloombax\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,41888)),"D:\\Webdesigne\\Work\\bloombax\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Webdesigne\\Work\\bloombax\\app\\(auth)\\forgetPassword\\page.jsx"],m="/(auth)/forgetPassword/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(auth)/forgetPassword/page",pathname:"/forgetPassword",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},25505:(e,t,r)=>{Promise.resolve().then(r.bind(r,40596))},60858:(e,t,r)=>{Promise.resolve().then(r.bind(r,21231)),Promise.resolve().then(r.bind(r,23361)),Promise.resolve().then(r.bind(r,40381))},61753:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},95583:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,79404,23))},40596:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(10326),s=r(46226),o=r(90434),n=r(17577),l=r(47111);function i(){let[e,t]=(0,n.useState)({}),r=e=>{let{name:r,value:a}=e.target;t(e=>({...e,[r]:a}))};return a.jsx("div",{children:a.jsx("div",{className:"p-10 max-sm:px-5 my-10",children:(0,a.jsxs)("div",{className:"flex flex-col items-center p-10 max-sm:px-5 md:w-[620px] mx-auto rounded-2xl gap-5",children:[a.jsx(s.default,{alt:"Logo",src:l.Z,className:"h-24 object-cover rounded-md"}),a.jsx("p",{className:"text-center text-lg font-medium",children:" If you have forgotten your password, enter your username and we will email you your password. "}),(0,a.jsxs)("form",{onSubmit:"#",className:"w-full",children:[(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"username",className:"font-medium text-black",children:"Username"}),a.jsx("input",{type:"text",id:"username",name:"username",placeholder:"Enter your usename here...",required:!0,className:"w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-white rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent",onChange:r})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"email",className:"font-medium text-black",children:"E-mail"}),a.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your e-mail here...",required:!0,className:"w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-white rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent",onChange:r})]}),a.jsx("button",{type:"submit",className:"w-full py-2.5 bg-button-color hover:bg-button-hover-color font-medium text-lg rounded-md",children:"Send Password on E-mail"}),(0,a.jsxs)("div",{className:"text-lg text-center mt-5",children:["Already have an account? ",a.jsx(o.default,{href:"/login",className:"text-form-color tracking-wide underline",children:"Login"})]}),(0,a.jsxs)("div",{className:"text-lg text-center mt-2 tracking-wide",children:[" Don't"," have an account? ",a.jsx(o.default,{href:"/register",className:"text-form-color  underline",children:"Register"})]})]})]})})})}},21231:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var a=r(10326),s=r(17577);let o=()=>4*Math.random()+1,n=()=>4*Math.random()+16,l=()=>Math.random()>.5?"rounded-full":"",i=()=>{let e=["bg-white","bg-yellow-300","bg-blue-400","bg-red-500"];return e[Math.floor(Math.random()*e.length)]},d=()=>.7*Math.random()+.3,c=()=>{let e=["star-move","star-twinkle","star-slide","star-fall"];return e[Math.floor(Math.random()*e.length)]},m=()=>{let e=["normal","reverse"];return e[Math.floor(Math.random()*e.length)]},u=({style:e})=>{let t=o(),r=n(),s=l(),u=i(),x=d(),h=c(),p=m();return a.jsx("div",{className:`${u} ${s} fixed ${h}`,style:{...e,width:`${t}px`,height:`${t}px`,animationDuration:`${r}s`,animationDirection:p,opacity:x}})},x=({count:e})=>{let[t,r]=(0,s.useState)([]);return(0,s.useEffect)(()=>{let t=[];for(let r=0;r<e;r++)t.push(a.jsx(u,{style:{top:`${100*Math.random()}vh`,left:`${100*Math.random()}vw`}},r));r(t)},[e]),a.jsx(a.Fragment,{children:t})}},23361:(e,t,r)=>{"use strict";r.d(t,{GlobalProvider:()=>n,r:()=>l});var a=r(10326),s=r(17577);let o=(0,s.createContext)();function n({children:e}){let[t,r]=(0,s.useState)(!0);return a.jsx(o.Provider,{value:{isOpen:t,setOpen:r},children:e})}function l(){return(0,s.useContext)(o)}},5368:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var a=r(19510),s=r(93936);let o=(0,r(68570).createProxy)(String.raw`D:\Webdesigne\Work\bloombax\components\ForgetPasswordForm.jsx#default`);function n(){return(0,a.jsxs)("div",{className:"",children:[a.jsx(o,{}),a.jsx(s.Z,{})]})}r(71159)},70652:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>c});var a=r(19510),s=r(80143),o=r.n(s);r(67272);var n=r(68570);let l=(0,n.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\components\Stars.jsx#default`);var i=r(19125);let d=(0,n.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\hook\useContext.js#GlobalProvider`);(0,n.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\hook\useContext.js#useGlobalContextProvider`);let c={title:"Bloombax",description:"Trusted trading platform"};function m({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:`${o().className} bgGradient bg-[#f3eeee] text-black relative`,children:[a.jsx(i.x7,{position:"top-right"}),a.jsx(l,{count:400}),a.jsx(d,{children:a.jsx("div",{className:"relative z-10",children:e})})]})})}},41888:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(19510),s=r(57371);function o(){return a.jsx("div",{className:"flex items-center justify-center h-screen bg-black",children:(0,a.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,a.jsxs)("div",{className:"animate-colorSplits text-[220px] relative ",children:["404",a.jsx("div",{className:"absolute top-0 left-[-2px] z-10 overflow-visible text-[#333] glitches",style:{clipPath:"polygon(0% 0%, 100% 0, 100% 25%, 0 25%, 0 30%, 100% 30%, 100% 50%, 0 50%, 0 60%, 100% 60%, 100% 65%, 0 65%, 0 80%, 100% 80%, 100% 85%, 0 85%, 0% 0%)"},children:"404"})]}),a.jsx("h2",{className:"text-lg font-semibold",children:" Page Not Found"}),a.jsx(s.default,{href:"/",className:"bg-base-color px-8 py-3 rounded-md text-black font-semibold hover:bg-base-color-hover hover:scale-105 transition-all duration-150",children:"Return Home"})]})})}},93936:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(19510);function s(){return a.jsx("div",{className:"p-5 w-full flex items-center justify-center",children:a.jsx("p",{className:"text-sm",children:"\xa9 2024 Bloombax. All Rights Reserved."})})}r(71159)},47111:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a={src:"/_next/static/media/Logo.4a76d414.png",height:620,width:850,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAElBMVEVMaXGtcienbye4eil/LwCRWyQM8GblAAAABnRSTlMARSVdCA4iXJVIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5JREFUeJxjYMAALIxMTEyMTKwMLMyMjIzMzEyYSgAEIQAmx+jSRwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(66621);let s=e=>[{type:"image/x-icon",sizes:"2000x1459",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8948,8605,285],()=>r(31060));module.exports=a})();