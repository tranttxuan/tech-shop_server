(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[32],{1100:function(t,e,n){"use strict";n.r(e);var r=n(117),c=n(97),o=n(367),u=n(0),i=n(20),a=n(3),f=n(34),b=n(348),s=n(13);e.default=function(t){var e=t.children,n=Object(o.a)(t,["children"]),l=Object(i.c)((function(t){return t.user})),O=Object(u.useState)(!1),j=Object(c.a)(O,2),p=j[0],y=j[1];return Object(u.useEffect)((function(){l&&l.token&&Object(f.b)(l.token).then((function(t){y(!0)})).catch((function(t){console.log(t)}))}),[l]),p?Object(s.jsx)(a.a,Object(r.a)(Object(r.a)({},n),{},{render:function(){return e}})):Object(s.jsx)(b.a,{})}},117:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(123);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},123:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},348:function(t,e,n){"use strict";var r=n(97),c=n(0),o=n(3),u=n(13);e.a=function(){var t=Object(c.useState)(5),e=Object(r.a)(t,2),n=e[0],i=e[1],a=Object(o.e)();return Object(c.useEffect)((function(){var t=setInterval((function(){i((function(t){return--t}))}),1e3);return 0===n&&a.push("/"),function(){return clearInterval(t)}}),[n,a]),Object(u.jsx)("div",{className:"container p-5 text-center",children:Object(u.jsxs)("p",{children:["Redirecting you in ",n," seconds"]})})}},367:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n.d(e,"a",(function(){return r}))},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(31);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,o=void 0;try{for(var u,i=t[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(a){c=!0,o=a}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=32.dbb055d4.chunk.js.map