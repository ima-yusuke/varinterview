(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3835],{4151:function(e,t,n){"use strict";var r,i,o=n(67294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.Z=e=>o.createElement("svg",_extends({viewBox:"0 0 24 24",fill:"currentColor"},e),r||(r=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),i||(i=o.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})))},4696:function(e,t,n){"use strict";var r,i=n(67294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.Z=e=>i.createElement("svg",_extends({viewBox:"0 0 27 27"},e),r||(r=i.createElement("path",{fill:"currentColor",d:"M12.74,20.53,3.48,11.35a.75.75,0,0,1,0-1.07L4.71,9.05a.75.75,0,0,1,1.07,0l7.49,7.41,7.49-7.41a.74.74,0,0,1,1.06,0l1.24,1.23a.77.77,0,0,1,0,1.07L13.8,20.53A.74.74,0,0,1,12.74,20.53Z"})))},22116:function(e,t,n){"use strict";var r,i=n(67294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.Z=e=>i.createElement("svg",_extends({viewBox:"0 0 24 24",fill:"currentColor"},e),r||(r=i.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})))},1354:function(e,t,n){"use strict";n.d(t,{X:function(){return Heading}});var r=n(85893),i=n(86010),o=n(13053),l=n.n(o);let Heading=e=>{let{tag:t,children:n,className:o,id:c,size:s,centered:a,letterSpaced:u}=e;return(0,r.jsx)(t,{className:(0,i.Z)(l()[`size-${s}`],a&&l().centered,u&&l().letterSpaced,o),id:c,children:n})}},50753:function(e,t,n){"use strict";n.d(t,{v:function(){return GlobalStateLikeButton},c:function(){return LocalStateLikeButton}});var r=n(85893),i=n(67294),o=n(86010),l=n(35527),c=n.n(l),s=n(48583),a=n(80983),u=n(80417);let d=(0,i.memo)(e=>{let{userLiked:t,styleType:n,countPosition:l,likedCount:s,handleUpdateLike:a}=e,d=(0,i.useRef)(!1),f=(0,u.f)(()=>{d.current=!0,a(!t)});return(0,r.jsxs)("div",{className:(0,o.Z)(c().container,`style-${n}`,{"count-bottom":"bottom"===l},{"anim-enabled":d.current}),onClick:f,children:[(0,r.jsx)("button",{"aria-label":"いいね",className:t?c().buttonActive:c().button,children:(0,r.jsx)(HeartIcon,{})}),!!s&&"none"!==l&&(0,r.jsx)("span",{className:c().likedCount,children:s})]})}),GlobalStateLikeButton=e=>{let{styleType:t,countPosition:o,likableType:l,likableId:c}=e,{like:u,updateLike:f}=function(e){let{likableType:t,likableId:r}=e,[o,l]=(0,s.KO)(a.uA),c=(0,i.useMemo)(()=>{let e=o.findIndex(e=>e.likableId===r&&e.likableType===t);return e},[o,r,t]),u=c<0?null:o[c],d=u?{likedCount:u.likedCount,currentUserLiked:u.currentUserLiked}:null;return{like:d,updateLike:async function(e){if(!u)return alert("Likeボタンが初期化されていません");let i=[...o];i[c]={...u,currentUserLiked:e,likedCount:e?u.likedCount+1:u.likedCount-1},l(i);let{postLike:s}=await n.e(8426).then(n.bind(n,48426));try{await s({liked:e,likableId:r,likableType:t})}catch(e){alert("いいねができませんでした"),console.log(e),l(o)}}}}({likableType:l,likableId:c}),_=u?.currentUserLiked===!0,x=u?.likedCount;async function handleUpdateLike(e){try{await f(e)}catch(e){alert("エラーが発生しました")}}return(0,r.jsx)(d,{countPosition:o,handleUpdateLike:handleUpdateLike,likedCount:x,styleType:t,userLiked:_})},LocalStateLikeButton=e=>{let{likableId:t,likableType:o,styleType:l,countPosition:c,initialUserLiked:s,initialLikedCount:a}=e,[u,f]=(0,i.useState)(s),_=(0,i.useMemo)(()=>s&&!u?a-1:!s&&u?a+1:a,[u,a,s]);async function handleUpdateLike(e){f(e);let{postLike:r}=await n.e(8426).then(n.bind(n,48426));try{await r({liked:e,likableId:t,likableType:o})}catch(t){alert("いいねができませんでした"),console.log(t),f(!e)}}return(0,r.jsx)(d,{countPosition:c,handleUpdateLike:handleUpdateLike,likedCount:_,styleType:l,userLiked:u})};function HeartIcon(){return(0,r.jsxs)("svg",{className:c().svgLike,viewBox:"0 0 110 110",children:[(0,r.jsx)("path",{className:c().svgLikeLine,d:"M73,24a23.78,23.78,0,0,0-15.89,6.19,3.14,3.14,0,0,1-4.18,0A23.81,23.81,0,0,0,37,24a22,22,0,0,0-22,22c0,16.67,19.64,32.82,25.11,37.93,2.84,2.65,6.15,5.64,8.92,8.13a8.9,8.9,0,0,0,11.9,0c2.77-2.49,6.07-5.48,8.91-8.13C75.37,78.81,95,62.66,95,46A22,22,0,0,0,73,24Z",fill:"currentColor"}),(0,r.jsx)("path",{className:c().svgLikeInner,d:"M66.25,76.42c-.71.64-1.32,1.2-1.82,1.67-2.51,2.33-5.39,5-7.94,7.25a2.21,2.21,0,0,1-3,0C51,83,48.1,80.42,45.59,78.09c-.5-.47-1.12-1-1.82-1.67C38.09,71.29,23,57.67,23,46A14,14,0,0,1,37,32a15.92,15.92,0,0,1,11.65,5.23l4.73,5a2.2,2.2,0,0,0,3.23,0l4.72-5A16.06,16.06,0,0,1,73,32,14,14,0,0,1,87,46C87,57.67,71.93,71.29,66.25,76.42Z",fill:"currentColor"}),(0,r.jsxs)("g",{className:c().svgLikeDecoration,children:[(0,r.jsx)("circle",{cx:"41.5",cy:"9.5",fill:"#3ea8ff",r:"3.5"}),(0,r.jsx)("circle",{cx:"98.5",cy:"26.5",fill:"#ffdc6e",r:"3.5"}),(0,r.jsx)("circle",{cx:"13",cy:"19",fill:"#c067f4",r:"5"}),(0,r.jsx)("circle",{cx:"77",cy:"9",fill:"#f76685",r:"5"}),(0,r.jsx)("circle",{cx:"26.5",cy:"92.5",fill:"#f76685",r:"3.5"}),(0,r.jsx)("circle",{cx:"105.5",cy:"48.5",fill:"#c067f4",r:"3.5"}),(0,r.jsx)("circle",{cx:"4.5",cy:"60.5",fill:"#3ea8ff",r:"3.5"}),(0,r.jsx)("circle",{cx:"94.5",cy:"73.5",fill:"#3ea8ff",r:"1.5"}),(0,r.jsx)("circle",{cx:"16.5",cy:"75.5",fill:"#ffdc6e",r:"1.5"}),(0,r.jsx)("circle",{cx:"78.5",cy:"91.5",fill:"#ffdc6e",r:"1.5"})]})]})}},43687:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(85893),i=n(67294);let o=(0,i.memo)(e=>{let{size:t}=e;return(0,r.jsx)("span",{style:{display:"block",height:function(e){switch(e){case"3xs":return"0.25rem";case"xxs":return"0.5rem";case"xs":return"1rem";case"sm":return"1.5rem";case"md":return"2rem";case"lg":return"2.5rem";case"xl":return"3rem";case"xxl":return"4rem"}}(t),flexShrink:0}})})},8026:function(e,t,n){"use strict";n.d(t,{U:function(){return d}});var r=n(85893),i=n(41664),o=n.n(i),l=n(67294),c=n(86010),s=n(16269),a=n.n(s),u=n(4151);let d=(0,l.memo)(e=>{let{children:t,className:n,colored:i,icon:s,block:d,targetBlank:f,nextLink:_=!0,href:x,...k}=e,h=(0,l.useMemo)(()=>(0,c.Z)(i?a().anchorColored:a().anchor,d&&a().block,n),[d,n,i]),p=(0,l.useMemo)(()=>f?{target:"_blank",rel:"noopener noreferrer"}:{},[f]),m=(0,l.useMemo)(()=>!0===s?(0,r.jsx)(u.Z,{className:f?a().iconOpen:a().icon}):null,[s,f]);return _?(0,r.jsxs)(o(),{className:h,href:x,...p,...k,children:[t,m]}):(0,r.jsxs)("a",{className:h,href:x.toString(),...p,children:[t,m]})})},26034:function(e,t,n){"use strict";n.d(t,{Gz:function(){return getDiffHoursFromNow},N2:function(){return formatDateForSystem},YI:function(){return isFutureDate},fR:function(){return isHourWithin},jC:function(){return isDateWithin},p6:function(){return formatDate},qb:function(){return isValidDate},s9:function(){return milliSecondsText}});var r=n(27484),i=n.n(r),o=n(28734),l=n.n(o),c=n(84110),s=n.n(c);function getDiffHoursFromNow(e){let t=i()(e);return t.diff(Date.now(),"hour")}function isDateWithin(e,t){let n=i()(e);return Math.abs(n.diff(Date.now(),"day"))<t}function isHourWithin(e,t){let n=i()(e);return Math.abs(n.diff(Date.now(),"hour"))<t}function isValidDate(e){return i()(e).isValid()}function isFutureDate(e){return i()(e).isAfter(i()())}function formatDate(e,t){if(!e)return"";let n=i()(e),r=6>Math.abs(n.diff(Date.now(),"month"));return t?.fromNow&&r?n.fromNow():n.format(t?.format||"YYYY/MM/DD")}function formatDateForSystem(e){if(!e)return"";let t=i()(e);return t.format()}function milliSecondsText(e){return e.format("x")}n(76831),i().extend(s(),{thresholds:[{l:"s",r:1},{l:"m",r:1},{l:"mm",r:59,d:"minute"},{l:"h",r:1},{l:"hh",r:23,d:"hour"},{l:"d",r:1},{l:"dd",r:29,d:"day"},{l:"M",r:1},{l:"MM",r:11,d:"month"},{l:"y"},{l:"yy",d:"year"}]}),i().locale("ja"),i().extend(l())},46211:function(e,t,n){"use strict";n.d(t,{e:function(){return useInitLike}});var r=n(67294),i=n(48583),o=n(66269),l=n(80983);function useInitLike(e){let{likableType:t,likableId:n,initialLikedCount:c,initialUserLiked:s}=e,a=(0,i.b9)(l.uA),u=(0,o.lV)(e=>e(l.uA));async function initLike(){let e=await u(),r=!!e.find(e=>e.likableId===n&&e.likableType===t);r||a([...e,{likableType:t,likableId:n,likedCount:c,currentUserLiked:s}])}(0,r.useEffect)(()=>{initLike()},[])}},64793:function(e,t,n){"use strict";n.d(t,{S:function(){return usePopover}});var r=n(85893),i=n(67294),o=n(6965),l=n(88301),c=n(48845),s=n.n(c);function usePopover(e){let{placement:t,className:n}=e,[c,a]=(0,i.useState)(!1),{x:u,y:d,refs:f,strategy:_,context:x}=(0,o.YF)({middleware:[(0,l.RR)(),(0,l.uY)({padding:10,crossAxis:!0})],placement:t,open:c,onOpenChange:a}),{getReferenceProps:k,getFloatingProps:h}=(0,o.NI)([(0,o.bQ)(x,{bubbles:!1,outsidePressEvent:"click"})]),p=k({ref:f.setReference}),m=(0,i.useCallback)(()=>a(e=>!e),[]);return{anchorButtonProps:p,renderPanel:e=>c?(0,r.jsx)("div",{...h({ref:f.setFloating,style:{position:_,left:u??"",top:d??""}}),className:`${s().popover} ${n}`,children:e}):null,togglePanel:m,setOpen:a,open:c}}},13053:function(e){e.exports={"size-2xl":"Heading_size-2xl__3YXbz","size-xl":"Heading_size-xl__BBLmD","size-lg":"Heading_size-lg__KD3Up","size-md":"Heading_size-md__Zg0Hr","size-sm":"Heading_size-sm__uF0C8","size-xs":"Heading_size-xs__woklr",centered:"Heading_centered__lNLF_",letterSpaced:"Heading_letterSpaced__6QUgL"}},35527:function(e){e.exports={container:"LikeButton_container__YlckE",buttonActive:"LikeButton_buttonActive__oR0fY LikeButton_button__ZwdG4",svgLike:"LikeButton_svgLike__Gl0Sz",pulse:"LikeButton_pulse__xGXY3",svgLikeDecoration:"LikeButton_svgLikeDecoration__78UjB",explode:"LikeButton_explode__3Z5as",button:"LikeButton_button__ZwdG4",likedCount:"LikeButton_likedCount__nJzwt",svgLikeLine:"LikeButton_svgLikeLine__f9txR",svgLikeInner:"LikeButton_svgLikeInner__uiexS"}},16269:function(e){e.exports={anchor:"TextAnchor_anchor__ZJD31",anchorColored:"TextAnchor_anchorColored__PlNnP",icon:"TextAnchor_icon__1hdMx",iconOpen:"TextAnchor_iconOpen__kbdr3",block:"TextAnchor_block__Arhnl"}},48845:function(e){e.exports={popover:"usePopover_popover__H67Sl",popoverIn:"usePopover_popoverIn__u98Pc"}}}]);