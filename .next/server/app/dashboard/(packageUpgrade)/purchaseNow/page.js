(()=>{var e={};e.id=3022,e.ids=[3022],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},85636:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),t(82814),t(13033),t(70652),t(41888);var r=t(23191),s=t(88716),o=t(37922),n=t.n(o),i=t(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(a,l);let c=["",{children:["dashboard",{children:["(packageUpgrade)",{children:["purchaseNow",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,82814)),"D:\\Webdesigne\\Work\\bloombax\\app\\dashboard\\(packageUpgrade)\\purchaseNow\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,13033)),"D:\\Webdesigne\\Work\\bloombax\\app\\dashboard\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,70652)),"D:\\Webdesigne\\Work\\bloombax\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,41888)),"D:\\Webdesigne\\Work\\bloombax\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Webdesigne\\Work\\bloombax\\app\\dashboard\\(packageUpgrade)\\purchaseNow\\page.jsx"],u="/dashboard/(packageUpgrade)/purchaseNow/page",p={require:t,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/(packageUpgrade)/purchaseNow/page",pathname:"/dashboard/purchaseNow",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},17366:(e,a,t)=>{Promise.resolve().then(t.bind(t,53664))},27951:(e,a,t)=>{"use strict";t.d(a,{N:()=>r});let r=async({trx:e})=>{try{let a=await fetch("/api/checkTransactionStatus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trx:e})});if(!a.ok)throw Error("Transaction Failed");return await a.json()}catch(e){throw e}}},53664:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>d});var r=t(10326);let s=async e=>{try{let a=await fetch("/api/checkPackageByAmount",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:e})});if(!a.ok)throw Error("Failed to fetch Purchase List data");let{data:t}=await a.json();return t}catch(e){throw Error(e)}};var o=t(35047),n=t(17577),i=t(40381),l=t(27951);function c(){(0,o.useSearchParams)();let[e,a]=(0,n.useState)(null),[t,c]=(0,n.useState)(100),[d,u]=(0,n.useState)(100),[p,h]=(0,n.useState)(1e4),[m,x]=(0,n.useState)(!1),[b,g]=(0,n.useState)(""),f=async a=>{if(a.preventDefault(),x(!0),d>t>p){i.ZP.error("Invalid amount"),x(!1);return}if(t<d){i.ZP.error(`Amount is below the minimum price of $${d}.`),x(!1);return}if(t>p){i.ZP.error(`Amount exceeds the maximum price of $${p}.`),x(!1);return}if(t>e?.deposit){i.ZP.error("Insufficient balance."),x(!1);return}try{let e=await s(t);g(e.title)}catch(e){i.ZP.error("Failed to fetch package data");return}try{if(!0===status)await w(transaction_hash),!0===response.status?(i.ZP.success("Transaction successful"),x(!1),window.location.reload("/dashboard/purchaseNow")):i.ZP.error("Transaction failed. Please try again.");else{i.ZP.error("Transaction Failed"),x(!1);return}}catch(e){return}finally{x(!1)}},w=async e=>{try{let a=await (0,l.N)({trx:e});if(!0===a.status){i.ZP.success("Transaction successful");return}i.ZP.loading("Wait for some time",{duration:2e3}),await new Promise(e=>setTimeout(e,7e3));let t=await (0,l.N)({trx:e});return i.ZP.success("Transaction successful"),window.location.replace("/dashboard/withdrawHistory"),!0===t.status}catch(e){return i.ZP.error("Failed to check transaction status"),!1}};return(0,r.jsxs)("div",{className:"bg-glass-color glassBlur rounded-2xl my-5 p-5",children:[r.jsx("h2",{className:"text-4xl font-bold  text-[#293b79] text-center mb-8",children:"Swap"}),(0,r.jsxs)("p",{className:"text-2xl font-bold text-center mb-4",children:["Available Deposit Balance ",(0,r.jsxs)("span",{className:"text-blue-500",children:["$",e?.deposit||0]})," "]}),(0,r.jsxs)("form",{onSubmit:f,className:"flex items-center flex-col gap-5 justify-center px-5 pb-5",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-1 justify-center w-full sm:w-[500px]",children:[r.jsx("label",{htmlFor:"packageName",children:"BMX"}),r.jsx("input",{type:"text",id:"packageName",name:"packageName",value:b,disabled:!0,className:" w-full px-3 py-2.5 bg-transparent ring-1 outline-none rounded-md "})]}),r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",className:"size-10",children:r.jsx("path",{d:"M14 8h-3v6H6V8H3l5.5-6L14 8m1.5 14l5.5-6h-3v-6h-5v6h-3l5.5 6z"})}),(0,r.jsxs)("div",{className:"flex flex-col gap-1 justify-center w-full sm:w-[500px]",children:[r.jsx("label",{htmlFor:"amount",children:"USDT (BEP-20)"}),r.jsx("input",{type:"number",id:"amount",name:"amount",placeholder:`Amount between $${d} and $${p}`,value:t,required:!0,onChange:e=>{c(parseFloat(e.target.value))},className:"w-full px-3 py-2.5 bg-transparent ring-1 outline-none rounded-md"})]}),r.jsx("button",{type:"submit","aria-disabled":m,disabled:m,className:"flex items-center justify-center px-4 py-2.5 bg-button-color rounded-md hover:bg-button-hover-color hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed",children:m?(0,r.jsxs)(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",className:"size-6 mr-2 text-white animate-spin",children:r.jsx("path",{fill:"currentColor",d:"M8 4.736a.933.933 0 01-.933-.933V1.005a.933.933 0 011.866 0v2.798A.933.933 0 018 4.736zM8 15.577a.583.583 0 01-.583-.583v-2.798a.583.583 0 111.166 0v2.798a.583.583 0 01-.583.583zM5.902 5.24a.875.875 0 01-.758-.437L3.745 2.38a.874.874 0 011.514-.874l1.399 2.423a.874.874 0 01-.756 1.311zM11.498 14.582a.525.525 0 01-.455-.262l-1.399-2.423a.525.525 0 11.909-.525l1.399 2.423a.525.525 0 01-.454.787zM4.365 6.718a.813.813 0 01-.407-.109L1.535 5.21a.817.817 0 01.816-1.414l2.423 1.399a.817.817 0 01-.408 1.523zM14.057 11.964a.461.461 0 01-.233-.063l-2.423-1.399a.467.467 0 01.466-.808l2.423 1.399a.467.467 0 01-.233.87zM3.803 8.758H1.005a.758.758 0 010-1.516h2.798a.758.758 0 110 1.516zM14.995 8.466h-2.798a.466.466 0 110-.932h2.798a.466.466 0 110 .932zM1.943 12.197a.698.698 0 01-.35-1.305l2.423-1.399a.698.698 0 11.699 1.211l-2.423 1.399a.69.69 0 01-.349.094zM11.635 6.368a.466.466 0 01-.233-.87l2.423-1.399a.466.466 0 11.466.808l-2.423 1.399a.469.469 0 01-.233.063zM4.502 14.699a.64.64 0 01-.555-.962l1.399-2.423a.641.641 0 111.111.641l-1.399 2.423a.64.64 0 01-.556.321zM10.098 4.832a.467.467 0 01-.404-.7l1.399-2.423a.467.467 0 01.808.466l-1.399 2.423a.464.464 0 01-.404.233z"})}),"Swaping..."]}):"Swap Now"})]})]})}function d(){return r.jsx(n.Suspense,{fallback:r.jsx("div",{children:"Loading..."}),children:r.jsx(c,{})})}},82814:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var r=t(68570);let s=(0,r.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\app\dashboard\(packageUpgrade)\purchaseNow\page.jsx`),{__esModule:o,$$typeof:n}=s;s.default;let i=(0,r.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\app\dashboard\(packageUpgrade)\purchaseNow\page.jsx#default`)}};var a=require("../../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[8948,8605,285,325,1497],()=>t(85636));module.exports=r})();