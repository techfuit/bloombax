(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{31297:function(e,t,l){Promise.resolve().then(l.bind(l,32728)),Promise.resolve().then(l.bind(l,41608))},74969:function(e,t,l){"use strict";l.d(t,{u:function(){return s}});let s=async()=>{try{let e=await fetch("/api/home",{method:"POST",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Failed to fetch home data");return await e.json()}catch(e){throw e}}},32728:function(e,t,l){"use strict";l.d(t,{default:function(){return d}});var s=l(57437),n=l(74969),i=l(39864),a=l(66648),r=l(2265);function d(){let[e,t]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async function(){try{let e=await (0,n.u)();t(e)}catch(e){throw Error(e)}})()},[]),(0,s.jsxs)("div",{className:"my-5 py-2 rounded-md",children:[(0,s.jsx)("div",{className:"pb-5",children:(0,s.jsxs)("h2",{className:"text-center md:text-5xl text-4xl font-semibold md:font-bold ",children:[" ",(0,s.jsx)("span",{className:"gradient-text2 ",children:"Welcome to BMX"}),"  ",(0,s.jsx)("span",{className:"text-blue-500",children:"Dashbaord"})," "]})}),(0,s.jsxs)("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:[(0,s.jsxs)("div",{className:(0,i.cn)("bg-glass-color glassBlur rounded-2xl p-3 flex items-center justify-center gap-3 min-h-32"),children:[(0,s.jsx)("div",{className:"rounded-2xl bg-orange-500 p-2",children:(0,s.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",className:"size-20 p-1",children:(0,s.jsx)("path",{d:"M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"})})}),(0,s.jsxs)("div",{className:"flex items-center justify-center flex-col",children:[(0,s.jsx)("h2",{className:"md:text-2xl text-xl gradient-text2 font-semibold mb-2",children:"Account Status"}),(0,s.jsx)("button",{className:" text-black text-lg font-semibold px-5 py-2.5 rounded-md ".concat((null==e?void 0:e.rank_status)?"bg-green-500 hover:bg-green-600":" bg-[#bbec0a] hover:bg-[#a2cc26]"),children:(null==e?void 0:e.rank_status)||"Inactive"})]})]}),(0,s.jsx)(c,{title:"Deposit",amount:isNaN(Number(null==e?void 0:e.deposit))?"0.00":Number(null==e?void 0:e.deposit).toFixed(2)}),(0,s.jsx)(c,{title:"Total Deposit",amount:isNaN(Number(null==e?void 0:e.deposit))?"0.00":Number(null==e?void 0:e.deposit).toFixed(2)}),(0,s.jsx)(c,{title:"Withdraw",amount:isNaN(Number(null==e?void 0:e.withdraw))?"0.00":Number(null==e?void 0:e.withdraw).toFixed(2)}),(0,s.jsx)(c,{title:"Total Withdraw",amount:isNaN(Number(null==e?void 0:e.total_withdraw))?"0.00":Number(null==e?void 0:e.total_withdraw).toFixed(2)}),(0,s.jsx)(c,{title:"Staking Reward",amount:isNaN(Number(null==e?void 0:e.roi_bonus))?"0.00":Number(null==e?void 0:e.roi_bonus).toFixed(2)}),(0,s.jsx)(c,{title:"Direct Bonus",amount:isNaN(Number(null==e?void 0:e.direct_bonus))?"0.00":Number(null==e?void 0:e.direct_bonus).toFixed(2)}),(0,s.jsx)(c,{title:"Team Bonus",amount:isNaN(Number(null==e?void 0:e.team_bonus))?"0.00":Number(null==e?void 0:e.team_bonus).toFixed(2)}),(0,s.jsx)(c,{title:"Equity",amount:isNaN(Number(null==e?void 0:e.matching_bonus))?"0.00":Number(null==e?void 0:e.matching_bonus).toFixed(2)}),(0,s.jsx)(c,{title:"Rank & Reward",amount:isNaN(Number(null==e?void 0:e.rank_reward))?"0.00":Number(null==e?void 0:e.rank_reward).toFixed(2)})]})]})}let c=e=>{let{title:t,amount:l}=e;return(0,s.jsxs)("div",{className:"bg-glass-color glassBlur2 rounded-2xl p-3 pl-5 flex items-center gap-5 min-h-32",children:[(0,s.jsx)("div",{className:"animate-zoomInOut",children:(0,s.jsx)(a.default,{src:"/3DIcon1.png",height:400,width:400,className:"size-20",alt:"Wallet"})}),(0,s.jsxs)("div",{className:"flex items-start flex-col",children:[(0,s.jsx)("h2",{className:"text-lg font-medium",children:t}),(0,s.jsxs)("p",{className:"text-lg font-semibold ",children:["$"," ",l]})]})]})}},41608:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return h}});var s=l(57437),n=l(8380),i=l.n(n),a=l(66648),r=l(2265),d=l(35231),c=l(46018),o=l(89810),u=l(68295),x=e=>{let{deta:t,COLORS:l=["#000000","#253edb"]}=e,n=isNaN(Number(null==t?void 0:t.earning_limit))?0:Number(null==t?void 0:t.earning_limit),i=isNaN(Number(null==t?void 0:t.totalEarning))?0:Number(null==t?void 0:t.totalEarning),a=Math.min(i/n*100,100),r=[{name:"Earning Limit",value:100-a},{name:"Total Earning",value:a}],x=Math.PI/180;return(0,s.jsxs)("div",{style:{width:"100%",height:"220px"},children:[(0,s.jsx)(d.h,{children:(0,s.jsx)(c.u,{children:(0,s.jsx)(o.b,{data:r,cx:"50%",cy:"50%",labelLine:!1,label:e=>{let{cx:t,cy:l,midAngle:n,innerRadius:i,outerRadius:a,percent:r}=e,d=i+(a-i)*.5,c=t+d*Math.cos(-n*x);return(0,s.jsx)("text",{x:c,y:l+d*Math.sin(-n*x),fill:"white",textAnchor:c>t?"start":"end",dominantBaseline:"central",children:"".concat((100*r).toFixed(0),"%")})},outerRadius:100,fill:"#8884d8",dataKey:"value",children:r.map((e,t)=>(0,s.jsx)(u.b,{fill:l[t%l.length]},"cell-".concat(t)))})})}),(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsxs)("div",{style:{margin:"5px 0"},children:[(0,s.jsx)("span",{style:{color:l[0],fontWeight:"bold",fontSize:"20px"},children:"Earning Limit:"})," ","$",Math.max(n,0).toFixed(2)]}),(0,s.jsxs)("div",{style:{margin:"5px 0"},children:[(0,s.jsx)("span",{style:{color:l[1],fontWeight:"bold",fontSize:"20px"},children:"Total Earning:"})," ","$",i.toFixed(2)]})]})]})},m=l(74969);function h(){let[e,t]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async function(){try{let e=await (0,m.u)();t(e)}catch(e){throw Error(e)}})()},[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 rounded-2xl mb-10 gap-5",children:[(0,s.jsxs)("div",{className:"rounded-2xl",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 p-3 bg-blue-500 rounded-ss-2xl rounded-se-2xl",children:[(0,s.jsx)("svg",{viewBox:"0 0 640 512",fill:"currentColor",className:"size-7 ",children:(0,s.jsx)("path",{d:"M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0l-23.6 47.8-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"})}),(0,s.jsx)("h1",{className:" text-lg font-medium",children:"Rank Status"})]}),(0,s.jsxs)("div",{className:'bg-[url("/rankbg.gif")] bg-center bg-cover h-96 rounded-es-2xl rounded-ee-2xl flex flex-col items-center justify-center',children:[(0,s.jsx)(a.default,{src:"/levelLogo.png",alt:"Rank Logo",height:500,width:500,className:"size-80 animate-zoomInOut2"}),(0,s.jsxs)("h2",{className:" md:text-5xl text-4xl  text-[#00ACEE] ".concat(i().className),children:["Rank ",(null==e?void 0:e.rank_status)||"Learner"]})]})]}),(0,s.jsxs)("div",{className:"rounded-2xl border",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 p-3 bg-blue-500 rounded-ss-2xl rounded-se-2xl",children:[(0,s.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 16 16",className:"size-7",children:[(0,s.jsx)("path",{d:"M8 4a.5.5 0 01.5.5V6a.5.5 0 01-1 0V4.5A.5.5 0 018 4zM3.732 5.732a.5.5 0 01.707 0l.915.914a.5.5 0 11-.708.708l-.914-.915a.5.5 0 010-.707zM2 10a.5.5 0 01.5-.5h1.586a.5.5 0 010 1H2.5A.5.5 0 012 10zm9.5 0a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zm.754-4.246a.389.389 0 00-.527-.02L7.547 9.31a.91.91 0 101.302 1.258l3.434-4.297a.389.389 0 00-.029-.518z"}),(0,s.jsx)("path",{fillRule:"evenodd",d:"M0 10a8 8 0 1115.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 010 10zm8-7a7 7 0 00-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 008 3z"})]}),(0,s.jsx)("h1",{className:" text-lg font-medium",children:"Capping Limit"})]}),(0,s.jsx)("div",{className:"bg-glass-color glassBlur h-96 rounded-es-2xl rounded-ee-2xl flex items-center justify-center pb-5",children:(0,s.jsx)(x,{deta:e})})]})]}),(0,s.jsxs)("h2",{className:"text-xl gradient-text2 text-center font-semibold flex flex-col gap-1",children:["DFM Trade ! The Gateway of Success. ",(0,s.jsxs)("span",{className:"pt-1.5",children:['"Transform Dreams into Reality Together."'," "]})," "]})]})}},39864:function(e,t,l){"use strict";l.d(t,{cn:function(){return i}});var s=l(44839),n=l(96164);function i(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,n.m6)((0,s.W)(t))}}},function(e){e.O(0,[440,868,648,686,971,23,744],function(){return e(e.s=31297)}),_N_E=e.O()}]);