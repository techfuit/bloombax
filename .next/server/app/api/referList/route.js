"use strict";(()=>{var e={};e.id=4691,e.ids=[4691],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},83622:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>f,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>x,staticGenerationAsyncStorage:()=>l});var s={};r.r(s),r.d(s,{POST:()=>u});var o=r(49303),n=r(88716),a=r(60670),i=r(71615),p=r(87070);async function u(){try{let e=i.cookies().get("sessionId")?.value;if(!e)return p.NextResponse.json({error:"Session ID not found"},{status:401});let t=await fetch("https://api.bloombax.com/api/referList",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:e})});if(!t.ok){let e=await t.json();return p.NextResponse.json({error:e.message},{status:t.status})}let r=await t.json();return p.NextResponse.json(r)}catch(e){return p.NextResponse.json({error:e.message},{status:500})}}let c=new o.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/referList/route",pathname:"/api/referList",filename:"route",bundlePath:"app/api/referList/route"},resolvedPagePath:"D:\\Webdesigne\\Work\\bloombax\\app\\api\\referList\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:x}=c,m="/api/referList/route";function f(){return(0,a.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:l})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8948,5972,1615],()=>r(83622));module.exports=s})();