"use strict";(()=>{var e={};e.id=6250,e.ids=[6250],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},38328:(e,t,s)=>{s.r(t),s.d(t,{originalPathname:()=>m,patchFetch:()=>g,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>x,staticGenerationAsyncStorage:()=>l});var r={};s.r(r),s.d(r,{POST:()=>p});var n=s(49303),o=s(88716),a=s(60670),i=s(71615),u=s(87070);async function p(e){try{let t=i.cookies().get("sessionId")?.value,{type:s}=await e.json();if(!t)return u.NextResponse.json({error:"Session ID not found"},{status:401});let r=await fetch("https://api.dfmtrade.com/api/bonusList",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,type:s})});if(!r.ok){let e=await r.json();return u.NextResponse.json({error:e.message},{status:r.status})}let n=await r.json();return u.NextResponse.json(n)}catch(e){return u.NextResponse.json({error:e.message},{status:500})}}let c=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/bonusdirect/route",pathname:"/api/bonusdirect",filename:"route",bundlePath:"app/api/bonusdirect/route"},resolvedPagePath:"D:\\Webdesigne\\Work\\bloombax\\app\\api\\bonusdirect\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:x}=c,m="/api/bonusdirect/route";function g(){return(0,a.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:l})}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[8948,5972,1615],()=>s(38328));module.exports=r})();