_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,"default",(function(){return v}));var a=n("nKUr"),o=n("8Kt/"),c=n.n(o),s=n("YFqc"),l=n.n(s),d=n("Wgwc"),u=n.n(d),m=n("q1tI"),b=n("QgiU"),f=n.n(b),h=n("ikY9"),j=n("VtrM"),x=n("Aiso"),p=n.n(x),g=n("M0WP");function v(){var e,t=Object(j.b)("/misc/top-subs").data,n=Object(m.useState)(1),i=(n[0],n[1]),o=Object(m.useState)(""),s=o[0],d=o[1],u=Object(j.c)((function(e){return"/posts?page=".concat(e)})),b=u.data,f=u.error,x=(u.mutate,u.size),v=u.setSize,y=u.isValidating,O=(u.revalidate,b?(e=[]).concat.apply(e,r(b)):[]),w=!b&&!f,N="TIO: Talk It Out",A="Talk It Out is a platorm where people gather together as a communtiy to talk about the stuffs they like.";Object(m.useEffect)((function(){if(O&&0!==O.length){var e=O[O.length-1].identifier;e!==s&&(d(e),S(document.getElementById(e)))}}),[O]);var S=function(e){if(e){var t=new IntersectionObserver((function(n){!0===n[0].isIntersecting&&(console.log("hii"),v(x+1),t.unobserve(e))}),{threshold:1});t.observe(e)}},k=function(e,t){var n=0;O.forEach((function(e,i){e.identifier===t.identifier&&(n=i,console.log(t.identifier))}));var i=O[n];i.userVote=e,i.voteScore=0===i.voteScore||1===i.voteScore||-1===i.voteScore?e:i.voteScore+=e,O.splice(n,1),O.splice(n,0,i),console.log(O)},z=Object(g.c)().authenticated;return Object(a.jsxs)(m.Fragment,{children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)("title",{children:N}),Object(a.jsx)("meta",{name:"description",content:A}),Object(a.jsx)("meta",{property:"og:description",content:A}),Object(a.jsx)("meta",{property:"og:title",content:N}),Object(a.jsx)("meta",{property:"twitter:title",content:N}),Object(a.jsx)("meta",{property:"twitter:description",content:A})]}),Object(a.jsxs)("div",{className:"container flex pt-4",children:[Object(a.jsxs)("div",{className:"w-full md:w-160",children:[w&&Object(a.jsx)("p",{className:"text-lg text-center",children:"Loading..."}),null===O||void 0===O?void 0:O.map((function(e){return Object(a.jsx)(h.a,{post:e,setVote:k,setDummy:i},e.identifier)})),y&&O.length>0&&Object(a.jsx)("p",{className:"text-lg text-center",children:"Loading more..."})]}),Object(a.jsx)("div",{className:"hidden px-4 ml-6 md:block md:p-0 w-80",children:Object(a.jsxs)("div",{className:"bg-white rounded",children:[Object(a.jsx)("div",{className:"p-4 border-b-2",children:Object(a.jsx)("p",{className:"text-lg font-semibold text-center",children:"Top Communities"})}),Object(a.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(a.jsxs)("div",{className:"flex items-center px-4 py-2 text-xs border-b",children:[Object(a.jsx)(l.a,{href:"/r/".concat(e.name),children:Object(a.jsx)("a",{children:Object(a.jsx)(p.a,{className:"rounded-full cursor-pointer",src:e.imageUrl,alt:"sub",width:24,height:24})})}),Object(a.jsx)(l.a,{href:"/r/".concat(e.name),children:Object(a.jsxs)("a",{className:"ml-2 font-bold hover:cursor-pointer",children:["/r/",e.name]})}),Object(a.jsx)("p",{className:"ml-auto font-medium",children:e.postCount})]},e.name)}))}),z&&Object(a.jsx)("div",{className:"p-4 border-t-2",children:Object(a.jsx)(l.a,{href:"/subs/create",children:Object(a.jsx)("a",{className:"w-full px-2 py-1 blue button",children:"Create Community"})})})]})})]})]})}u.a.extend(f.a)},Aiso:function(e,t,n){e.exports=n("dQHF")},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var i=n("J4zp"),r=n("RIqP"),a=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,c=void 0!==a&&a,d=e.priority,m=void 0!==d&&d,b=e.loading,h=e.className,j=e.quality,x=e.width,y=e.height,O=e.objectFit,w=e.objectPosition,N=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),A=n?"responsive":"intrinsic",S=!1;"unsized"in N?(S=Boolean(N.unsized),delete N.unsized):"layout"in N&&(N.layout&&(A=N.layout),delete N.layout);0;var k=!m&&("lazy"===b||"undefined"===typeof b);t&&t.startsWith("data:")&&(c=!0,k=!1);var z,_,E,I=(0,u.useIntersection)({rootMargin:"200px",disabled:!k}),q=i(I,2),D=q[0],U=q[1],C=!k||U,V=v(x),R=v(y),W=v(j),H={visibility:C?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:w};if("undefined"!==typeof V&&"undefined"!==typeof R&&"fill"!==A){var L=R/V,P=isNaN(L)?"100%":"".concat(100*L,"%");"responsive"===A?(z={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},_={display:"block",boxSizing:"border-box",paddingTop:P}):"intrinsic"===A?(z={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},_={boxSizing:"border-box",display:"block",maxWidth:"100%"},E='<svg width="'.concat(V,'" height="').concat(R,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===A&&(z={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:V,height:R})}else"undefined"===typeof V&&"undefined"===typeof R&&"fill"===A&&(z={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var T={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};C&&(T=function(e){var t=e.src,n=e.unoptimized,i=e.layout,a=e.width,o=e.quality,c=e.sizes;if(n)return{src:t};var s=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:f,kind:"w"};return{widths:r(new Set([e,2*e,3*e].map((function(e){return p.find((function(t){return t>=e}))||p[p.length-1]})))),kind:"x"}}(a,i),l=s.widths,d=s.kind,u=l.length-1,m=l.map((function(e,n){return"".concat(g({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", ");c||"w"!==d||(c=l.map((function(e,t){return t===u?"".concat(e,"px"):"(max-width: ".concat(e,"px) ").concat(e,"px")})).join(", "));return{src:t=g({src:t,quality:o,width:l[u]}),sizes:c,srcSet:m}}({src:t,unoptimized:c,layout:A,width:V,quality:W,sizes:n}));S&&(z=void 0,_=void 0,H=void 0);return s.default.createElement("div",{style:z},_?s.default.createElement("div",{style:_},E?s.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(E))}):null):null,s.default.createElement("img",Object.assign({},N,T,{decoding:"async",className:h,ref:D,style:H})))};var o=a(n("8OQS")),c=a(n("pVnL")),s=a(n("q1tI")),l=n("dEHY"),d=n("UWYU"),u=n("vNVm");var m=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,a=["auto=format","fit=max","w="+i],o="";r&&a.push("q="+r);a.length&&(o="?"+a.join("&"));return"".concat(t).concat(y(n)).concat(o)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i],o="";r&&a.push("q_"+r);a.length&&(o=a.join(",")+"/");return"".concat(t).concat(o).concat(y(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(y(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}]]),b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,f=b.deviceSizes,h=b.imageSizes,j=b.loader,x=b.path,p=(b.domains,[].concat(r(f),r(h)));function g(e){var t=m.get(j);if(t)return t((0,c.default)({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(j))}function v(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function y(e){return"/"===e[0]?e.slice(1):e}f.sort((function(e,t){return e-t})),p.sort((function(e,t){return e-t}))},ikY9:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var i=n("o0o1"),r=n.n(i),a=n("HaE+"),o=n("nKUr"),c=n("vDqi"),s=n.n(c),l=n("TSYQ"),d=n.n(l),u=n("Wgwc"),m=n.n(u),b=n("QgiU"),f=n.n(b),h=n("YFqc"),j=n.n(h),x=n("nOHt"),p=n("q1tI"),g=n("M0WP"),v=n("BH0o"),y=n("+ryr");function O(e){var t=e.post,n=e.revalidate,i=e.setVote,c=e.setDummy,l=Object(g.c)().authenticated,u=Object(x.useRouter)(),b="/r/[sub]"===u.pathname,f=function(){var e=Object(a.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l||u.push("/login"),console.log("hi vote"),a===t.userVote&&(a=0),e.prev=3,e.next=6,s.a.post("/misc/vote",{identifier:t.identifier,slug:t.slug,value:a});case 6:e.sent,n&&n(),i(a,t),c({}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:t.identifier,className:"flex mb-4 bg-white rounded",children:[Object(o.jsxs)("div",{className:"w-10 py-3 text-center bg-gray-200 rounded-l",children:[Object(o.jsx)("div",{onClick:function(){return f(1)},className:"w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500",children:Object(o.jsx)("i",{className:d()("icon-arrow-up",{"text-red-500":1===t.userVote})})}),Object(o.jsx)("p",{children:t.voteScore}),Object(o.jsx)("div",{onClick:function(){return f(-1)},className:"w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-600",children:Object(o.jsx)("i",{className:d()("icon-arrow-down",{"text-blue-600":-1===t.userVote})})})]}),Object(o.jsxs)("div",{className:"w-full p-2",children:[Object(o.jsxs)("div",{className:"flex items-center ",children:[!b&&Object(o.jsxs)(p.Fragment,{children:[Object(o.jsx)(j.a,{href:"/r/".concat(t.subName),children:Object(o.jsx)("img",{src:t.sub.imageUrl||"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",className:"w-6 h-6 mr-1 rounded-full cursor-pointer"})}),Object(o.jsx)(j.a,{href:"/r/".concat(t.subName),children:Object(o.jsxs)("a",{className:"text-xs font-bold cursor-pointer hover:underline",children:["/r/",t.subName]})})]}),Object(o.jsxs)("p",{className:"text-xs text-gray-600",children:[". Posted by",Object(o.jsx)(j.a,{href:"/u/".concat(t.username),children:Object(o.jsxs)("a",{className:"mx-1 hover:underline",children:["/u/",t.username]})}),Object(o.jsx)(j.a,{href:t.url,children:Object(o.jsx)("a",{className:"mx-1 hover:underline",children:m()(t.createdAt).fromNow()})})]})]}),Object(o.jsx)(j.a,{href:t.url,children:Object(o.jsx)("a",{className:"my-1 text-lg font-medium",children:t.title})}),null!==t.imageUrl&&Object(o.jsx)("img",{src:t.imageUrl}),t.body&&t.language?Object(o.jsx)(y.a,{className:"my-1 text-sm",language:t.language,children:t.body}):Object(o.jsx)("p",{className:"my-1 text-sm",children:t.body}),Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsx)(j.a,{href:t.url,children:Object(o.jsx)("a",{children:Object(o.jsxs)(v.a,{children:[Object(o.jsx)("i",{className:"mr-1 fas fa-comment-alt fa-xs"}),Object(o.jsxs)("span",{className:"font-bold",children:[t.commentCount," Comments"]})]})})}),Object(o.jsxs)(v.a,{children:[Object(o.jsx)("i",{className:"mr-1 fas fa-share fa-xs"}),Object(o.jsx)("span",{className:"font-bold",children:"Share"})]}),Object(o.jsxs)(v.a,{children:[Object(o.jsx)("i",{className:"mr-1 fas fa-bookmark fa-xs"}),Object(o.jsx)("span",{className:"font-bold",children:"Save"})]})]})]})]},t.identifier)}m.a.extend(f.a)}},[["/EDR",0,2,1,3,4,5,6]]]);