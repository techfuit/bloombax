"use strict";(()=>{var e={};e.id=5901,e.ids=[5901],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},88425:(e,t,s)=>{s.r(t),s.d(t,{originalPathname:()=>x,patchFetch:()=>g,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l});var n={};s.r(n),s.d(n,{POST:()=>p});var o=s(49303),r=s(88716),a=s(60670),i=s(71615),u=s(87070);async function p(e){try{let t=i.cookies().get("sessionId")?.value,{type:s}=await e.json();if(!t)return u.NextResponse.json({error:"Session ID not found"},{status:401});let n=await fetch("https://api.bloombax.com/api/bonusList",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({sessionId:t,type:s})});if(!n.ok){let e=await n.json();return u.NextResponse.json({error:e.message},{status:n.status})}let o=await n.json();return u.NextResponse.json(o)}catch(e){return u.NextResponse.json({error:e.message},{status:500})}}let c=new o.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/bonusmatching/route",pathname:"/api/bonusmatching",filename:"route",bundlePath:"app/api/bonusmatching/route"},resolvedPagePath:"D:\\Webdesigne\\Work\\bloombax\\app\\api\\bonusmatching\\route.js",nextConfigOutput:"",userland:n}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:m}=c,x="/api/bonusmatching/route";function g(){return(0,a.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[8948,5972,1615],()=>s(88425));module.exports=n})();