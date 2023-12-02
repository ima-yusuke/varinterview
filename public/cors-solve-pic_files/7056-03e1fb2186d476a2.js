"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7056],{6965:function(f,m,P){let k;P.d(m,{bQ:function(){return useDismiss},YF:function(){return floating_ui_react_esm_useFloating},NI:function(){return useInteractions}});var _=P(67294),B=P.t(_,2),M=P(73935),O=P(88301);function n(f){var m;return(null==(m=f.ownerDocument)?void 0:m.defaultView)||window}function o(f){return n(f).getComputedStyle(f)}let V=Math.min,I=Math.max,K=Math.round;function c(f){let m=o(f),P=parseFloat(m.width),k=parseFloat(m.height),_=f.offsetWidth,B=f.offsetHeight,M=K(P)!==_||K(k)!==B;return M&&(P=_,k=B),{width:P,height:k,fallback:M}}function s(f){return h(f)?(f.nodeName||"").toLowerCase():""}function u(){if(k)return k;let f=navigator.userAgentData;return f&&Array.isArray(f.brands)?k=f.brands.map(f=>f.brand+"/"+f.version).join(" "):navigator.userAgent}function a(f){return f instanceof n(f).HTMLElement}function d(f){return f instanceof n(f).Element}function h(f){return f instanceof n(f).Node}function p(f){return"undefined"!=typeof ShadowRoot&&(f instanceof n(f).ShadowRoot||f instanceof ShadowRoot)}function g(f){let{overflow:m,overflowX:P,overflowY:k,display:_}=o(f);return/auto|scroll|overlay|hidden|clip/.test(m+k+P)&&!["inline","contents"].includes(_)}function y(f){let m=/firefox/i.test(u()),P=o(f),k=P.backdropFilter||P.WebkitBackdropFilter;return"none"!==P.transform||"none"!==P.perspective||!!k&&"none"!==k||m&&"filter"===P.willChange||m&&!!P.filter&&"none"!==P.filter||["transform","perspective"].some(f=>P.willChange.includes(f))||["paint","layout","strict","content"].some(f=>{let m=P.contain;return null!=m&&m.includes(f)})}function x(){return/^((?!chrome|android).)*safari/i.test(u())}function w(f){return["html","body","#document"].includes(s(f))}function v(f){return d(f)?f:f.contextElement}let N={x:1,y:1};function L(f){let m=v(f);if(!a(m))return N;let P=m.getBoundingClientRect(),{width:k,height:_,fallback:B}=c(m),M=(B?K(P.width):P.width)/k,O=(B?K(P.height):P.height)/_;return M&&Number.isFinite(M)||(M=1),O&&Number.isFinite(O)||(O=1),{x:M,y:O}}function E(f,m,P,k){var _,B;void 0===m&&(m=!1),void 0===P&&(P=!1);let M=f.getBoundingClientRect(),O=v(f),V=N;m&&(k?d(k)&&(V=L(k)):V=L(f));let I=O?n(O):window,K=x()&&P,j=(M.left+(K&&(null==(_=I.visualViewport)?void 0:_.offsetLeft)||0))/V.x,X=(M.top+(K&&(null==(B=I.visualViewport)?void 0:B.offsetTop)||0))/V.y,q=M.width/V.x,Y=M.height/V.y;if(O){let f=n(O),m=k&&d(k)?n(k):k,P=f.frameElement;for(;P&&k&&m!==f;){let f=L(P),m=P.getBoundingClientRect(),k=getComputedStyle(P);m.x+=(P.clientLeft+parseFloat(k.paddingLeft))*f.x,m.y+=(P.clientTop+parseFloat(k.paddingTop))*f.y,j*=f.x,X*=f.y,q*=f.x,Y*=f.y,j+=m.x,X+=m.y,P=n(P).frameElement}}return{width:q,height:Y,top:X,right:j+q,bottom:X+Y,left:j,x:j,y:X}}function R(f){return((h(f)?f.ownerDocument:f.document)||window.document).documentElement}function T(f){return d(f)?{scrollLeft:f.scrollLeft,scrollTop:f.scrollTop}:{scrollLeft:f.pageXOffset,scrollTop:f.pageYOffset}}function C(f){return E(R(f)).left+T(f).scrollLeft}function F(f){if("html"===s(f))return f;let m=f.assignedSlot||f.parentNode||p(f)&&f.host||R(f);return p(m)?m.host:m}function D(f,m){var P;void 0===m&&(m=[]);let k=function W(f){let m=F(f);return w(m)?m.ownerDocument.body:a(m)&&g(m)?m:W(m)}(f),_=k===(null==(P=f.ownerDocument)?void 0:P.body),B=n(k);return _?m.concat(B,B.visualViewport||[],g(k)?k:[]):m.concat(k,D(k))}function S(f,m,P){let k;if("viewport"===m)k=function(f,m){let P=n(f),k=R(f),_=P.visualViewport,B=k.clientWidth,M=k.clientHeight,O=0,V=0;if(_){B=_.width,M=_.height;let f=x();(!f||f&&"fixed"===m)&&(O=_.offsetLeft,V=_.offsetTop)}return{width:B,height:M,x:O,y:V}}(f,P);else if("document"===m)k=function(f){let m=R(f),P=T(f),k=f.ownerDocument.body,_=I(m.scrollWidth,m.clientWidth,k.scrollWidth,k.clientWidth),B=I(m.scrollHeight,m.clientHeight,k.scrollHeight,k.clientHeight),M=-P.scrollLeft+C(f),O=-P.scrollTop;return"rtl"===o(k).direction&&(M+=I(m.clientWidth,k.clientWidth)-_),{width:_,height:B,x:M,y:O}}(R(f));else if(d(m))k=function(f,m){let P=E(f,!0,"fixed"===m),k=P.top+f.clientTop,_=P.left+f.clientLeft,B=a(f)?L(f):{x:1,y:1};return{width:f.clientWidth*B.x,height:f.clientHeight*B.y,x:_*B.x,y:k*B.y}}(m,P);else{let P={...m};if(x()){var _,B;let m=n(f);P.x-=(null==(_=m.visualViewport)?void 0:_.offsetLeft)||0,P.y-=(null==(B=m.visualViewport)?void 0:B.offsetTop)||0}k=P}return(0,O.JB)(k)}function A(f,m){return a(f)&&"fixed"!==o(f).position?m?m(f):f.offsetParent:null}function H(f,m){let P=n(f),k=A(f,m);for(;k&&["table","td","th"].includes(s(k))&&"static"===o(k).position;)k=A(k,m);return k&&("html"===s(k)||"body"===s(k)&&"static"===o(k).position&&!y(k))?P:k||function(f){let m=F(f);for(;a(m)&&!w(m);){if(y(m))return m;m=F(m)}return null}(f)||P}let j={getClippingRect:function(f){let{element:m,boundary:P,rootBoundary:k,strategy:_}=f,B="clippingAncestors"===P?function(f,m){let P=m.get(f);if(P)return P;let k=D(f).filter(f=>d(f)&&"body"!==s(f)),_=null,B="fixed"===o(f).position,M=B?F(f):f;for(;d(M)&&!w(M);){let f=o(M),m=y(M);"fixed"===f.position?_=null:(B?m||_:m||"static"!==f.position||!_||!["absolute","fixed"].includes(_.position))?_=f:k=k.filter(f=>f!==M),M=F(M)}return m.set(f,k),k}(m,this._c):[].concat(P),M=[...B,k],O=M[0],K=M.reduce((f,P)=>{let k=S(m,P,_);return f.top=I(k.top,f.top),f.right=V(k.right,f.right),f.bottom=V(k.bottom,f.bottom),f.left=I(k.left,f.left),f},S(m,O,_));return{width:K.right-K.left,height:K.bottom-K.top,x:K.left,y:K.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(f){let{rect:m,offsetParent:P,strategy:k}=f,_=a(P),B=R(P);if(P===B)return m;let M={scrollLeft:0,scrollTop:0},O={x:1,y:1},V={x:0,y:0};if((_||!_&&"fixed"!==k)&&(("body"!==s(P)||g(B))&&(M=T(P)),a(P))){let f=E(P);O=L(P),V.x=f.x+P.clientLeft,V.y=f.y+P.clientTop}return{width:m.width*O.x,height:m.height*O.y,x:m.x*O.x-M.scrollLeft*O.x+V.x,y:m.y*O.y-M.scrollTop*O.y+V.y}},isElement:d,getDimensions:function(f){return a(f)?c(f):f.getBoundingClientRect()},getOffsetParent:H,getDocumentElement:R,getScale:L,async getElementRects(f){let{reference:m,floating:P,strategy:k}=f,_=this.getOffsetParent||H,B=this.getDimensions;return{reference:function(f,m,P){let k=a(m),_=R(m),B=E(f,!0,"fixed"===P,m),M={scrollLeft:0,scrollTop:0},O={x:0,y:0};if(k||!k&&"fixed"!==P){if(("body"!==s(m)||g(_))&&(M=T(m)),a(m)){let f=E(m,!0);O.x=f.x+m.clientLeft,O.y=f.y+m.clientTop}else _&&(O.x=C(_))}return{x:B.left+M.scrollLeft-O.x,y:B.top+M.scrollTop-O.y,width:B.width,height:B.height}}(m,await _(P),k),floating:{x:0,y:0,...await B(P)}}},getClientRects:f=>Array.from(f.getClientRects()),isRTL:f=>"rtl"===o(f).direction},z=(f,m,P)=>{let k=new Map,_={platform:j,...P},B={..._.platform,_c:k};return(0,O.oo)(f,m,{..._,platform:B})};var X="undefined"!=typeof document?_.useLayoutEffect:_.useEffect;function deepEqual(f,m){let P,k,_;if(f===m)return!0;if(typeof f!=typeof m)return!1;if("function"==typeof f&&f.toString()===m.toString())return!0;if(f&&m&&"object"==typeof f){if(Array.isArray(f)){if((P=f.length)!=m.length)return!1;for(k=P;0!=k--;)if(!deepEqual(f[k],m[k]))return!1;return!0}if((P=(_=Object.keys(f)).length)!==Object.keys(m).length)return!1;for(k=P;0!=k--;)if(!Object.prototype.hasOwnProperty.call(m,_[k]))return!1;for(k=P;0!=k--;){let P=_[k];if(("_owner"!==P||!f.$$typeof)&&!deepEqual(f[P],m[P]))return!1}return!0}return f!=f&&m!=m}function useLatestRef(f){let m=_.useRef(f);return X(()=>{m.current=f}),m}var q="undefined"!=typeof document?_.useLayoutEffect:_.useEffect;B["useId".toString()];let Y=_.createContext(null),J=_.createContext(null),useFloatingParentNodeId=()=>{var f;return(null==(f=_.useContext(Y))?void 0:f.id)||null},useFloatingTree=()=>_.useContext(J);function getDocument(f){return(null==f?void 0:f.ownerDocument)||document}function getWindow(f){return getDocument(f).defaultView||window}function isElement(f){return!!f&&f instanceof getWindow(f).Element}function getChildren(f,m){let P=f.filter(f=>{var P;return f.parentId===m&&(null==(P=f.context)?void 0:P.open)})||[],k=P;for(;k.length;)k=f.filter(f=>{var m;return null==(m=k)?void 0:m.some(m=>{var P;return f.parentId===m.id&&(null==(P=f.context)?void 0:P.open)})})||[],P=P.concat(k);return P}let U=B["useInsertionEffect".toString()],$=U||(f=>f());function useEvent(f){let m=_.useRef(()=>{});return $(()=>{m.current=f}),_.useCallback(function(){for(var f=arguments.length,P=Array(f),k=0;k<f;k++)P[k]=arguments[k];return null==m.current?void 0:m.current(...P)},[])}function isEventTargetWithin(f,m){return null!=m&&("composedPath"in f?f.composedPath().includes(m):null!=f.target&&m.contains(f.target))}let Q={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Z={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},normalizeBubblesProp=function(f){var m,P;return void 0===f&&(f=!0),{escapeKeyBubbles:"boolean"==typeof f?f:null==(m=f.escapeKey)||m,outsidePressBubbles:"boolean"==typeof f?f:null==(P=f.outsidePress)||P}},useDismiss=function(f,m){let{open:P,onOpenChange:k,events:B,nodeId:M,elements:{reference:O,domReference:V,floating:I},dataRef:K}=f,{enabled:N=!0,escapeKey:j=!0,outsidePress:X=!0,outsidePressEvent:q="pointerdown",referencePress:Y=!1,referencePressEvent:J="pointerdown",ancestorScroll:U=!1,bubbles:$=!0}=void 0===m?{}:m,G=useFloatingTree(),ee=null!=useFloatingParentNodeId(),et=useEvent("function"==typeof X?X:()=>!1),en="function"==typeof X?et:X,er=_.useRef(!1),{escapeKeyBubbles:eo,outsidePressBubbles:ei}=normalizeBubblesProp($);return _.useEffect(()=>{if(!P||!N)return;function onKeyDown(f){if("Escape"===f.key){let f=G?getChildren(G.nodesRef.current,M):[];if(f.length>0){let m=!0;if(f.forEach(f=>{var P;if(null!=(P=f.context)&&P.open&&!f.context.dataRef.current.__escapeKeyBubbles){m=!1;return}}),!m)return}B.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),k(!1)}}function onOutsidePress(f){var m;let P=er.current;if(er.current=!1,P||"function"==typeof en&&!en(f))return;let _="composedPath"in f?f.composedPath()[0]:f.target;if(_&&_ instanceof getWindow(_).HTMLElement&&I){let m=I.ownerDocument.defaultView||window,P=_.scrollWidth>_.clientWidth,k=_.scrollHeight>_.clientHeight,B=k&&f.offsetX>_.clientWidth;if(k){let P="rtl"===m.getComputedStyle(_).direction;P&&(B=f.offsetX<=_.offsetWidth-_.clientWidth)}if(B||P&&f.offsetY>_.clientHeight)return}let O=G&&getChildren(G.nodesRef.current,M).some(m=>{var P;return isEventTargetWithin(f,null==(P=m.context)?void 0:P.elements.floating)});if(isEventTargetWithin(f,I)||isEventTargetWithin(f,V)||O)return;let K=G?getChildren(G.nodesRef.current,M):[];if(K.length>0){let f=!0;if(K.forEach(m=>{var P;if(null!=(P=m.context)&&P.open&&!m.context.dataRef.current.__outsidePressBubbles){f=!1;return}}),!f)return}B.emit("dismiss",{type:"outsidePress",data:{returnFocus:ee?{preventScroll:!0}:function(f){if(0===f.mozInputSource&&f.isTrusted)return!0;let m=/Android/i;return(m.test(function(){let f=navigator.userAgentData;return null!=f&&f.platform?f.platform:navigator.platform}())||m.test(function(){let f=navigator.userAgentData;return f&&Array.isArray(f.brands)?f.brands.map(f=>{let{brand:m,version:P}=f;return m+"/"+P}).join(" "):navigator.userAgent}()))&&f.pointerType?"click"===f.type&&1===f.buttons:0===f.detail&&!f.pointerType}(f)||0===(m=f).width&&0===m.height||1===m.width&&1===m.height&&0===m.pressure&&0===m.detail&&"mouse"!==m.pointerType||m.width<1&&m.height<1&&0===m.pressure&&0===m.detail}}),k(!1)}function onScroll(){k(!1)}K.current.__escapeKeyBubbles=eo,K.current.__outsidePressBubbles=ei;let f=getDocument(I);j&&f.addEventListener("keydown",onKeyDown),en&&f.addEventListener(q,onOutsidePress);let m=[];return U&&(isElement(V)&&(m=D(V)),isElement(I)&&(m=m.concat(D(I))),!isElement(O)&&O&&O.contextElement&&(m=m.concat(D(O.contextElement)))),(m=m.filter(m=>{var P;return m!==(null==(P=f.defaultView)?void 0:P.visualViewport)})).forEach(f=>{f.addEventListener("scroll",onScroll,{passive:!0})}),()=>{j&&f.removeEventListener("keydown",onKeyDown),en&&f.removeEventListener(q,onOutsidePress),m.forEach(f=>{f.removeEventListener("scroll",onScroll)})}},[K,I,V,O,j,en,q,B,G,M,P,k,U,N,eo,ei,ee]),_.useEffect(()=>{er.current=!1},[en,q]),_.useMemo(()=>N?{reference:{[Q[J]]:()=>{Y&&(B.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),k(!1))}},floating:{[Z[q]]:()=>{er.current=!0}}}:{},[N,B,Y,q,J,k])};function floating_ui_react_esm_useFloating(f){void 0===f&&(f={});let{open:m=!1,onOpenChange:P,nodeId:k}=f,B=function(f){void 0===f&&(f={});let{placement:m="bottom",strategy:P="absolute",middleware:k=[],platform:B,whileElementsMounted:O,open:V}=f,[I,K]=_.useState({x:null,y:null,strategy:P,placement:m,middlewareData:{},isPositioned:!1}),[N,j]=_.useState(k);deepEqual(N,k)||j(k);let q=_.useRef(null),Y=_.useRef(null),J=_.useRef(I),U=useLatestRef(O),$=useLatestRef(B),[Q,Z]=_.useState(null),[G,ee]=_.useState(null),et=_.useCallback(f=>{q.current!==f&&(q.current=f,Z(f))},[]),en=_.useCallback(f=>{Y.current!==f&&(Y.current=f,ee(f))},[]),er=_.useCallback(()=>{if(!q.current||!Y.current)return;let f={placement:m,strategy:P,middleware:N};$.current&&(f.platform=$.current),z(q.current,Y.current,f).then(f=>{let m={...f,isPositioned:!0};eo.current&&!deepEqual(J.current,m)&&(J.current=m,M.flushSync(()=>{K(m)}))})},[N,m,P,$]);X(()=>{!1===V&&J.current.isPositioned&&(J.current.isPositioned=!1,K(f=>({...f,isPositioned:!1})))},[V]);let eo=_.useRef(!1);X(()=>(eo.current=!0,()=>{eo.current=!1}),[]),X(()=>{if(Q&&G){if(U.current)return U.current(Q,G,er);er()}},[Q,G,er,U]);let ei=_.useMemo(()=>({reference:q,floating:Y,setReference:et,setFloating:en}),[et,en]),el=_.useMemo(()=>({reference:Q,floating:G}),[Q,G]);return _.useMemo(()=>({...I,update:er,refs:ei,elements:el,reference:et,floating:en}),[I,er,ei,el,et,en])}(f),O=useFloatingTree(),V=_.useRef(null),I=_.useRef({}),K=_.useState(()=>(function(){let f=new Map;return{emit(m,P){var k;null==(k=f.get(m))||k.forEach(f=>f(P))},on(m,P){f.set(m,[...f.get(m)||[],P])},off(m,P){f.set(m,(f.get(m)||[]).filter(f=>f!==P))}}})())[0],[N,j]=_.useState(null),Y=_.useCallback(f=>{let m=isElement(f)?{getBoundingClientRect:()=>f.getBoundingClientRect(),contextElement:f}:f;B.refs.setReference(m)},[B.refs]),J=_.useCallback(f=>{(isElement(f)||null===f)&&(V.current=f,j(f)),(isElement(B.refs.reference.current)||null===B.refs.reference.current||null!==f&&!isElement(f))&&B.refs.setReference(f)},[B.refs]),U=_.useMemo(()=>({...B.refs,setReference:J,setPositionReference:Y,domReference:V}),[B.refs,J,Y]),$=_.useMemo(()=>({...B.elements,domReference:N}),[B.elements,N]),Q=useEvent(P),Z=_.useMemo(()=>({...B,refs:U,elements:$,dataRef:I,nodeId:k,events:K,open:m,onOpenChange:Q}),[B,k,K,m,Q,U,$]);return q(()=>{let f=null==O?void 0:O.nodesRef.current.find(f=>f.id===k);f&&(f.context=Z)}),_.useMemo(()=>({...B,context:Z,refs:U,reference:J,positionReference:Y}),[B,U,Z,J,Y])}function mergeProps(f,m,P){let k=new Map;return{..."floating"===P&&{tabIndex:-1},...f,...m.map(f=>f?f[P]:null).concat(f).reduce((f,m)=>(m&&Object.entries(m).forEach(m=>{let[P,_]=m;if(0===P.indexOf("on")){if(k.has(P)||k.set(P,[]),"function"==typeof _){var B;null==(B=k.get(P))||B.push(_),f[P]=function(){for(var f,m=arguments.length,_=Array(m),B=0;B<m;B++)_[B]=arguments[B];null==(f=k.get(P))||f.forEach(f=>f(..._))}}}else f[P]=_}),f),{})}}let useInteractions=function(f){void 0===f&&(f=[]);let m=f,P=_.useCallback(m=>mergeProps(m,f,"reference"),m),k=_.useCallback(m=>mergeProps(m,f,"floating"),m),B=_.useCallback(m=>mergeProps(m,f,"item"),f.map(f=>null==f?void 0:f.item));return _.useMemo(()=>({getReferenceProps:P,getFloatingProps:k,getItemProps:B}),[P,k,B])}},86010:function(f,m,P){P.d(m,{Z:function(){return __WEBPACK_DEFAULT_EXPORT__}});function __WEBPACK_DEFAULT_EXPORT__(){for(var f,m,P=0,k="";P<arguments.length;)(f=arguments[P++])&&(m=function toVal(f){var m,P,k="";if("string"==typeof f||"number"==typeof f)k+=f;else if("object"==typeof f){if(Array.isArray(f))for(m=0;m<f.length;m++)f[m]&&(P=toVal(f[m]))&&(k&&(k+=" "),k+=P);else for(m in f)f[m]&&(k&&(k+=" "),k+=m)}return k}(f))&&(k&&(k+=" "),k+=m);return k}},88301:function(f,m,P){function t(f){return f.split("-")[1]}function e(f){return"y"===f?"height":"width"}function n(f){return f.split("-")[0]}function o(f){return["top","bottom"].includes(n(f))?"x":"y"}function r(f,m,P){let k,{reference:_,floating:B}=f,M=_.x+_.width/2-B.width/2,O=_.y+_.height/2-B.height/2,V=o(m),I=e(V),K=_[I]/2-B[I]/2,N="x"===V;switch(n(m)){case"top":k={x:M,y:_.y-B.height};break;case"bottom":k={x:M,y:_.y+_.height};break;case"right":k={x:_.x+_.width,y:O};break;case"left":k={x:_.x-B.width,y:O};break;default:k={x:_.x,y:_.y}}switch(t(m)){case"start":k[V]-=K*(P&&N?-1:1);break;case"end":k[V]+=K*(P&&N?-1:1)}return k}P.d(m,{JB:function(){return l},RR:function(){return b},oo:function(){return i},uY:function(){return E}});let i=async(f,m,P)=>{let{placement:k="bottom",strategy:_="absolute",middleware:B=[],platform:M}=P,O=B.filter(Boolean),V=await (null==M.isRTL?void 0:M.isRTL(m)),I=await M.getElementRects({reference:f,floating:m,strategy:_}),{x:K,y:N}=r(I,k,V),j=k,X={},q=0;for(let P=0;P<O.length;P++){let{name:B,fn:Y}=O[P],{x:J,y:U,data:$,reset:Q}=await Y({x:K,y:N,initialPlacement:k,placement:j,strategy:_,middlewareData:X,rects:I,platform:M,elements:{reference:f,floating:m}});K=null!=J?J:K,N=null!=U?U:N,X={...X,[B]:{...X[B],...$}},Q&&q<=50&&(q++,"object"==typeof Q&&(Q.placement&&(j=Q.placement),Q.rects&&(I=!0===Q.rects?await M.getElementRects({reference:f,floating:m,strategy:_}):Q.rects),{x:K,y:N}=r(I,j,V)),P=-1)}return{x:K,y:N,placement:j,strategy:_,middlewareData:X}};function l(f){return{...f,top:f.y,left:f.x,right:f.x+f.width,bottom:f.y+f.height}}async function s(f,m){var P;void 0===m&&(m={});let{x:k,y:_,platform:B,rects:M,elements:O,strategy:V}=f,{boundary:I="clippingAncestors",rootBoundary:K="viewport",elementContext:N="floating",altBoundary:j=!1,padding:X=0}=m,q="number"!=typeof X?{top:0,right:0,bottom:0,left:0,...X}:{top:X,right:X,bottom:X,left:X},Y=O[j?"floating"===N?"reference":"floating":N],J=l(await B.getClippingRect({element:null==(P=await (null==B.isElement?void 0:B.isElement(Y)))||P?Y:Y.contextElement||await (null==B.getDocumentElement?void 0:B.getDocumentElement(O.floating)),boundary:I,rootBoundary:K,strategy:V})),U="floating"===N?{...M.floating,x:k,y:_}:M.reference,$=await (null==B.getOffsetParent?void 0:B.getOffsetParent(O.floating)),Q=await (null==B.isElement?void 0:B.isElement($))&&await (null==B.getScale?void 0:B.getScale($))||{x:1,y:1},Z=l(B.convertOffsetParentRelativeRectToViewportRelativeRect?await B.convertOffsetParentRelativeRectToViewportRelativeRect({rect:U,offsetParent:$,strategy:V}):U);return{top:(J.top-Z.top+q.top)/Q.y,bottom:(Z.bottom-J.bottom+q.bottom)/Q.y,left:(J.left-Z.left+q.left)/Q.x,right:(Z.right-J.right+q.right)/Q.x}}let k=Math.min,_=Math.max;["top","right","bottom","left"].reduce((f,m)=>f.concat(m,m+"-start",m+"-end"),[]);let B={left:"right",right:"left",bottom:"top",top:"bottom"};function h(f){return f.replace(/left|right|bottom|top/g,f=>B[f])}let M={start:"end",end:"start"};function w(f){return f.replace(/start|end/g,f=>M[f])}let b=function(f){return void 0===f&&(f={}),{name:"flip",options:f,async fn(m){var P,k,_,B;let{placement:M,middlewareData:O,rects:V,initialPlacement:I,platform:K,elements:N}=m,{mainAxis:j=!0,crossAxis:X=!0,fallbackPlacements:q,fallbackStrategy:Y="bestFit",fallbackAxisSideDirection:J="none",flipAlignment:U=!0,...$}=f,Q=n(M),Z=n(I)===I,G=await (null==K.isRTL?void 0:K.isRTL(N.floating)),ee=q||(Z||!U?[h(I)]:function(f){let m=h(f);return[w(f),m,w(m)]}(I));q||"none"===J||ee.push(...function(f,m,P,k){let _=t(f),B=function(f,m,P){let k=["left","right"],_=["right","left"];switch(f){case"top":case"bottom":return P?m?_:k:m?k:_;case"left":case"right":return m?["top","bottom"]:["bottom","top"];default:return[]}}(n(f),"start"===P,k);return _&&(B=B.map(f=>f+"-"+_),m&&(B=B.concat(B.map(w)))),B}(I,U,J,G));let et=[I,...ee],en=await s(m,$),er=[],eo=(null==(P=O.flip)?void 0:P.overflows)||[];if(j&&er.push(en[Q]),X){let{main:f,cross:m}=function(f,m,P){void 0===P&&(P=!1);let k=t(f),_=o(f),B=e(_),M="x"===_?k===(P?"end":"start")?"right":"left":"start"===k?"bottom":"top";return m.reference[B]>m.floating[B]&&(M=h(M)),{main:M,cross:h(M)}}(M,V,G);er.push(en[f],en[m])}if(eo=[...eo,{placement:M,overflows:er}],!er.every(f=>f<=0)){let f=((null==(k=O.flip)?void 0:k.index)||0)+1,m=et[f];if(m)return{data:{index:f,overflows:eo},reset:{placement:m}};let P=null==(_=eo.filter(f=>f.overflows[0]<=0).sort((f,m)=>f.overflows[1]-m.overflows[1])[0])?void 0:_.placement;if(!P)switch(Y){case"bestFit":{let f=null==(B=eo.map(f=>[f.placement,f.overflows.filter(f=>f>0).reduce((f,m)=>f+m,0)]).sort((f,m)=>f[1]-m[1])[0])?void 0:B[0];f&&(P=f);break}case"initialPlacement":P=I}if(M!==P)return{reset:{placement:P}}}return{}}}},E=function(f){return void 0===f&&(f={}),{name:"shift",options:f,async fn(m){let{x:P,y:B,placement:M}=m,{mainAxis:O=!0,crossAxis:V=!1,limiter:I={fn:f=>{let{x:m,y:P}=f;return{x:m,y:P}}},...K}=f,N={x:P,y:B},j=await s(m,K),X=o(n(M)),q="x"===X?"y":"x",Y=N[X],J=N[q];O&&(Y=_(Y+j["y"===X?"top":"left"],k(Y,Y-j["y"===X?"bottom":"right"]))),V&&(J=_(J+j["y"===q?"top":"left"],k(J,J-j["y"===q?"bottom":"right"])));let U=I.fn({...m,[X]:Y,[q]:J});return{...U,data:{x:U.x-P,y:U.y-B}}}}}}}]);