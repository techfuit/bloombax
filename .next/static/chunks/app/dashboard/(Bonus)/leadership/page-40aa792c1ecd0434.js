(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{3266:function(e,r,s){Promise.resolve().then(s.bind(s,8047))},8047:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return a}});var l=s(7437);let n=async()=>{try{let e=await fetch("/api/leadership",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"leadership"})});if(!e.ok)throw Error("Failed to fetch Leadership Bonus data");let{data:r}=await e.json();return r}catch(e){throw e}};var t=s(5289),i=s(2265);function a(){let[e,r]=(0,i.useState)(null);return(0,i.useEffect)(()=>{(async function(){try{let e=await n();r(e)}catch(e){throw Error(e)}})()},[]),(0,l.jsx)("div",{className:"bg-glass-color glassBlur rounded-2xl ",children:(0,l.jsxs)(t.Z,{title:"Leadership Bonus",children:[(0,l.jsxs)("div",{className:"grid grid-cols-5 p-3 border-b border-b-gray-500 lg:w-full w-[1000px] sticky top-0 left-0 bg-glass-color glassBlur",children:[(0,l.jsx)("p",{children:"Serial"}),(0,l.jsx)("p",{children:"User"}),(0,l.jsx)("p",{children:"Amount"}),(0,l.jsx)("p",{children:"Total Amount"}),(0,l.jsx)("p",{children:"Date"})]}),Array.isArray(e)&&e.length>0?e.map((e,r)=>(0,l.jsxs)("div",{className:"grid grid-cols-5 p-3 border-b border-b-gray-500 lg:w-full w-[1000px]",children:[(0,l.jsx)("p",{children:r+1<10?"0".concat(r+1):r+1}),(0,l.jsxs)("p",{children:["$",e.to_user]}),(0,l.jsx)("p",{children:e.amount}),(0,l.jsx)("p",{children:e.totalAmount}),(0,l.jsx)("p",{children:e.created_at})]},e.id)):(0,l.jsx)("p",{className:"text-center font-medium text-lg mt-2",children:"No data available"})]})})}},5289:function(e,r,s){"use strict";s.d(r,{Z:function(){return t}});var l=s(7437),n=s(9864);function t(e){let{title:r,children:s,className:t}=e;return(0,l.jsxs)("div",{className:"my-5 overflow-hidden w-full",children:[(0,l.jsx)("div",{className:(0,n.cn)("bg-blue-500 px-5 py-3 rounded-ss-2xl rounded-se-2xl",t),children:(0,l.jsxs)("p",{className:"text-2xl font-medium",children:[r," History "]})}),(0,l.jsx)("div",{className:"min-h-20 bg-base-glass-color rounded-es-2xl rounded-ee-2xl",children:(0,l.jsx)("div",{className:"overflow-hidden h-80",children:(0,l.jsx)("div",{className:"overflow-scroll h-full",children:s})})})]})}s(2265)},9864:function(e,r,s){"use strict";s.d(r,{cn:function(){return t}});var l=s(4839),n=s(6164);function t(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return(0,n.m6)((0,l.W)(r))}}},function(e){e.O(0,[868,971,23,744],function(){return e(e.s=3266)}),_N_E=e.O()}]);