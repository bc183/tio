_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"+VHE":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return h})),n.d(t,"default",(function(){return b}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),c=n("nKUr"),s=n("vDqi"),i=n.n(s),u=n("8Kt/"),l=n.n(u),d=n("q1tI"),f=n("TSYQ"),p=n.n(f),m=n("nOHt"),h=!0;function b(){var e=Object(d.useState)(""),t=e[0],n=e[1],r=Object(d.useState)(""),s=r[0],u=r[1],f=Object(d.useState)(""),h=f[0],b=f[1],v=Object(d.useState)(!1),y=v[0],x=v[1],j=Object(d.useState)({}),g=j[0],O=j[1],w=Object(m.useRouter)(),_=function(){var e=Object(o.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,i.a.post("/subs",{name:t,title:s,description:h,isCodingCommunity:y.toString()});case 4:r=e.sent,w.push("/r/".concat(r.data.name)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),O(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"flex bg-white",children:[Object(c.jsx)(l.a,{children:Object(c.jsx)("title",{children:"Create a Community"})}),Object(c.jsx)("div",{className:"h-screen bg-center bg-cover w-36",style:{backgroundImage:"url('/images/waterfall.jpg')"}}),Object(c.jsx)("div",{className:"flex flex-col justify-center pl-6",children:Object(c.jsxs)("div",{className:"w-98",children:[Object(c.jsx)("h1",{className:"mb-2 text-lg font-medium",children:"Create a Community"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{onSubmit:_,children:[Object(c.jsxs)("div",{className:"my-6",children:[Object(c.jsx)("p",{className:"font-medium",children:"Name"}),Object(c.jsx)("p",{className:"mb-2 text-xs text-gray-500",children:"Community name cannot be changed."}),Object(c.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},className:p()("w-full p-3 border border-gray-200 rounded hover:border-gray-500",{"border-red-600":g.name})}),Object(c.jsx)("small",{className:"font-medium text-red-600",children:g.name})]}),Object(c.jsxs)("div",{className:"my-6",children:[Object(c.jsx)("p",{className:"font-medium",children:"Title"}),Object(c.jsx)("p",{className:"mb-2 text-xs text-gray-500",children:"Community title represents the topic of discussion and you can change it at any time."}),Object(c.jsx)("input",{type:"text",value:s,onChange:function(e){return u(e.target.value)},className:p()("w-full p-3 border border-gray-200 rounded hover:border-gray-500",{"border-red-600":g.title})}),Object(c.jsx)("small",{className:"font-medium text-red-600",children:g.title})]}),Object(c.jsxs)("div",{className:"my-6",children:[Object(c.jsx)("p",{className:"font-medium",children:"Description"}),Object(c.jsx)("p",{className:"mb-2 text-xs text-gray-500",children:"Write a few lines about your community. It's optional."}),Object(c.jsx)("textarea",{value:h,onChange:function(e){return b(e.target.value)},className:p()("w-full p-3 border border-gray-200 rounded hover:border-gray-500",{"border-red-600":g.description})}),Object(c.jsx)("small",{className:"font-medium text-red-600",children:g.description})]}),Object(c.jsxs)("label",{className:"inline-flex items-center mt-3",children:[Object(c.jsx)("input",{type:"checkbox",className:"w-5 h-5 text-gray-600 blue form-checkbox",onChange:function(){return x(!y)},checked:y}),Object(c.jsx)("span",{className:"ml-2 text-xs text-gray-500",children:"Create this community as a coding community."})]}),Object(c.jsx)("div",{className:"flex justify-end",children:Object(c.jsx)("button",{className:"px-4 py-1 text-sm font-semibold capitalize blue button",children:"Create Community"})})]})]})})]})}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),s=n("FYa8"),i=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,i=f.length;s<i;s++){var u=f[s];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],d=r[u]||new Set;d.has(l)?o=!1:(d.add(l),r[u]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),s=n("a1gu"),i=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},ddkX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/subs/create",function(){return n("+VHE")}])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[["ddkX",0,2,1,3]]]);