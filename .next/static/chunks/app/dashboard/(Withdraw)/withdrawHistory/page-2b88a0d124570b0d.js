(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{97705:function(e,s,l){Promise.resolve().then(l.bind(l,68077))},68077:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return c}});var r=l(57437);let a=async()=>{try{let e=await fetch("/api/withdrawhistory",{method:"POST",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Failed to fetch Withdraw data");let{data:s}=await e.json();return s}catch(e){throw e}};var t=l(35289),n=l(2265);function c(){let[e,s]=(0,n.useState)([]);return(0,n.useEffect)(()=>{(async function(){try{let e=await a();s(e)}catch(e){throw Error(e)}})()},[]),(0,r.jsx)("div",{className:"bg-glass-color glassBlur rounded-2xl ",children:(0,r.jsxs)(t.Z,{title:"Withdraw",children:[(0,r.jsxs)("div",{className:"grid grid-cols-7 p-3 border-b border-b-gray-500  w-[1600px] sticky top-0 left-0 bg-glass-color glassBlur",children:[(0,r.jsx)("p",{className:"-ml-2",children:"Serial"}),(0,r.jsx)("p",{className:"-ml-[180px]",children:"Amount"}),(0,r.jsx)("p",{className:"-ml-[320px]",children:"Withdraw Charge"}),(0,r.jsx)("p",{className:"-ml-[250px]",children:"Address"}),(0,r.jsx)("p",{children:"Trx Hash"}),(0,r.jsx)("p",{className:"ml-[230px]",children:"Status"}),(0,r.jsx)("p",{className:"ml-32",children:"Date"})]}),Array.isArray(e)&&(null==e?void 0:e.length)>0?e.map((e,s)=>(0,r.jsxs)("div",{className:"grid grid-cols-7 p-3 border-b border-b-gray-500 w-[1600px]",children:[(0,r.jsx)("p",{children:s+1<10?"0".concat(s+1):s+1}),(0,r.jsxs)("p",{className:"-ml-44",children:["$",e.amount]}),(0,r.jsxs)("p",{className:"-ml-[320px]",children:["$",(.1*e.amount).toFixed(2)]}),(0,r.jsx)("p",{className:"-ml-[400px]",children:e.to_address}),(0,r.jsx)("p",{className:"-ml-[210px]",children:e.txHash}),(0,r.jsx)("p",{className:"ml-56",children:"1"===e.status?"Completed":"2"===e.status?"Rejected":"Pending"}),(0,r.jsx)("p",{className:"ml-28",children:e.created_at})]},null==e?void 0:e.id)):(0,r.jsx)("p",{className:"text-center font-medium text-lg mt-2",children:"No data available"})]})})}},35289:function(e,s,l){"use strict";l.d(s,{Z:function(){return t}});var r=l(57437),a=l(39864);function t(e){let{title:s,children:l,className:t}=e;return(0,r.jsxs)("div",{className:"my-5 overflow-hidden w-full",children:[(0,r.jsx)("div",{className:(0,a.cn)("bg-blue-500 px-5 py-3 rounded-ss-2xl rounded-se-2xl",t),children:(0,r.jsxs)("p",{className:"text-2xl font-medium",children:[s," History "]})}),(0,r.jsx)("div",{className:"min-h-20 bg-base-glass-color rounded-es-2xl rounded-ee-2xl",children:(0,r.jsx)("div",{className:"overflow-hidden h-80",children:(0,r.jsx)("div",{className:"overflow-scroll h-full",children:l})})})]})}l(2265)},39864:function(e,s,l){"use strict";l.d(s,{cn:function(){return t}});var r=l(44839),a=l(96164);function t(){for(var e=arguments.length,s=Array(e),l=0;l<e;l++)s[l]=arguments[l];return(0,a.m6)((0,r.W)(s))}}},function(e){e.O(0,[868,971,23,744],function(){return e(e.s=97705)}),_N_E=e.O()}]);