"use strict";(()=>{var e={};e.id=8311,e.ids=[8311],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},81066:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>x,patchFetch:()=>h,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l});var r={};o.r(r),o.d(r,{POST:()=>u});var s=o(49303),n=o(88716),a=o(60670),i=o(71615),p=o(87070);async function u(){let e=i.cookies().get("sessionId")?.value;try{if(!e)return p.NextResponse.json({error:"Session ID not found"},{status:401});let t=await fetch("https://api.bloombax.com/api/home",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:e})});if(!t.ok){let e=await t.json();return p.NextResponse.json({error:e.message},{status:t.status})}let o=await t.json();return p.NextResponse.json(o)}catch(e){return p.NextResponse.json({error:e.message},{status:500})}}let c=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/home/route",pathname:"/api/home",filename:"route",bundlePath:"app/api/home/route"},resolvedPagePath:"D:\\Webdesigne\\Work\\bloombax\\app\\api\\home\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:m}=c,x="/api/home/route";function h(){return(0,a.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[8948,5972,1615],()=>o(81066));module.exports=r})();