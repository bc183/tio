_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{ddSO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/r/[sub]/submit",function(){return n("jxjh")}])},jxjh:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return x})),n.d(t,"default",(function(){return p}));var a=n("o0o1"),r=n.n(a),c=n("HaE+"),s=n("nKUr"),i=n("vDqi"),l=n.n(i),o=n("8Kt/"),d=n.n(o),u=n("nOHt"),b=n("q1tI"),j=n("VtrM"),m=n("rREq"),x=!0;function p(){var e=Object(u.useRouter)(),t=Object(b.createRef)(),n=e.query.sub,a=Object(j.b)(n?"/subs/".concat(n):null),i=a.data;a.error&&e.push("/");var o=Object(b.useState)(""),x=o[0],p=o[1],h=Object(b.useState)(!1),g=h[0],O=h[1],v=Object(b.useState)(""),f=v[0],y=v[1],N=Object(b.useState)(null),w=N[0],k=N[1],C=Object(b.useState)(!1),S=C[0],_=(C[1],Object(b.useState)("Languages")),E=_[0],P=_[1],q=function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),(a=new FormData).append("file",w),a.append("title",x),a.append("body",f),a.append("sub",i.name),a.append("isCode",S.toString()),a.append("language",E),console.log(S.toString()),t.prev=9,t.next=12,l.a.post("/posts",a,{headers:{"Content-Type":"multipart/form-data"}});case 12:c=t.sent,s=c.data,e.push("/r/".concat(i.name,"/").concat(s.identifier,"/").concat(s.slug)),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(9),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[9,17]])})));return function(e){return t.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"container flex pt-5",children:[Object(s.jsx)(d.a,{children:Object(s.jsx)("title",{children:"Submit to TIO"})}),Object(s.jsxs)("div",{className:"w-160",children:[Object(s.jsx)("input",{type:"file",hidden:!0,ref:t,onChange:function(e){var t=e.target.files[0];k(t)}}),Object(s.jsxs)("div",{className:"p-4 bg-white rounded",children:[Object(s.jsxs)("h1",{className:"mb-3 text-lg",children:["Submit a post to /r/",n]}),Object(s.jsxs)("form",{onSubmit:q,children:[Object(s.jsxs)("div",{className:"relative mb-2",children:[Object(s.jsx)("input",{type:"text",className:"w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600",placeholder:"Title",maxLength:300,value:x,onChange:function(e){return p(e.target.value)}}),Object(s.jsxs)("div",{className:"absolute mb-2 text-sm text-gray-500 select-none",style:{top:11,right:10},children:[x.trim().length," / 300"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{onClick:function(){return e="file",t.current.name=e,void t.current.click();var e},className:"mb-2 fa fa-plus hover:bg-gray-200"}),Object(s.jsx)("span",{className:"m-2",children:"Add Photo"})]}),w&&Object(s.jsx)("p",{className:"text-sm",children:"Image uploaded!"}),"true"===(null===i||void 0===i?void 0:i.isCodingCommunity)&&Object(s.jsxs)(b.Fragment,{children:[Object(s.jsx)("div",{className:"m-2 text-sm",children:Object(s.jsx)("span",{children:"Want to add a Code snippet? Select the Language and Paste the code in the text."})}),Object(s.jsxs)("div",{className:"relative inline-block my-1 text-left",children:[Object(s.jsx)("div",{children:Object(s.jsxs)("button",{onClick:function(){return O(!g)},type:"button",className:"inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none",id:"options-menu","aria-haspopup":"true","aria-expanded":"true",children:[E,Object(s.jsx)("svg",{className:"w-5 h-5 ml-2 -mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:Object(s.jsx)("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})})]})}),Object(s.jsx)("div",{className:"".concat(g?"show":"hidden"," absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"),children:Object(s.jsxs)("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:[Object(s.jsx)("p",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",role:"menuitem",onClick:function(){P("c"),O(!1)},children:" C "}),Object(s.jsx)("p",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",role:"menuitem",onClick:function(){P("cpp"),O(!1)},children:" C++ "}),Object(s.jsx)("p",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",role:"menuitem",onClick:function(){P("python"),O(!1)},children:" Python "}),Object(s.jsx)("p",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",role:"menuitem",onClick:function(){P("java"),O(!1)},children:" Java "}),Object(s.jsx)("p",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",role:"menuitem",onClick:function(){P("javascript"),O(!1)},children:" Javascript "}),Object(s.jsx)("p",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",role:"menuitem",onClick:function(){P("ruby"),O(!1)},children:" Ruby "})]})})]})]}),Object(s.jsx)("textarea",{className:"w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600",value:f,placeholder:"Text (optional)",rows:4,onChange:function(e){return y(e.target.value)}}),Object(s.jsx)("div",{className:"flex justify-end",children:Object(s.jsx)("button",{className:"px-3 py-1 blue button",type:"submit",disabled:0===x.trim().length,children:"Submit"})})]})]})]}),i&&Object(s.jsx)(m.a,{sub:i})]})}},rREq:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("nKUr"),r=n("Wgwc"),c=n.n(r),s=n("YFqc"),i=n.n(s),l=n("M0WP");function o(e){var t=e.sub,n=Object(l.c)().authenticated;return Object(a.jsx)("div",{className:"w-40 ml-6 md:w-80",children:Object(a.jsxs)("div",{className:"bg-white rounded",children:[Object(a.jsx)("div",{className:"p-3 bg-blue-500 rounded-t",children:Object(a.jsx)("p",{className:"font-semibold text-white",children:"About Community"})}),Object(a.jsxs)("div",{className:"p-3",children:[Object(a.jsx)("p",{className:"mb-3 text-md",children:t.description}),Object(a.jsxs)("div",{className:"flex mb-3 text-sm font-medium",children:[Object(a.jsxs)("div",{className:"w-1/2",children:[Object(a.jsx)("p",{children:"5.2k"}),Object(a.jsx)("p",{children:"members"})]}),Object(a.jsxs)("div",{className:"w-1/2",children:[Object(a.jsx)("p",{children:"150"}),Object(a.jsx)("p",{children:"Online"})]})]}),Object(a.jsxs)("p",{className:"my-3",children:[Object(a.jsx)("i",{className:"mr-2 fas fa-birthday-cake"}),"Created ",c()(t.createdAt).format("D MMM YYYY")]}),n&&Object(a.jsx)(i.a,{href:"/r/".concat(t.name,"/submit"),children:Object(a.jsx)("a",{className:"w-full py-1 text-sm blue button",children:"Create Post"})})]})]})})}}},[["ddSO",0,2,1,3,4,5]]]);