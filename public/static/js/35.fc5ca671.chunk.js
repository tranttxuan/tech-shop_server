(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[35],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(43);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1096:function(t,e,n){"use strict";n.r(e);var r=n(108),a=n(250),c=n(0),s=n(24),u=n(40),o=n(220),i=n(152),h=n(2);e.default=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],p=e[1],l=Object(s.c)((function(t){return t.user})),f=Object(c.useCallback)((function(){Object(i.g)(l.token).then((function(t){console.log(t.data),p(t.data.wishlist)})).catch((function(t){return console.log(t)}))}));return Object(c.useEffect)((function(){f()}),[]),Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-2",children:Object(h.jsx)(o.a,{})}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("h4",{children:"Wishlist"}),0===n.length?Object(h.jsx)("h4",{children:"No product"}):Object(h.jsx)(h.Fragment,{children:n.map((function(t){return Object(h.jsxs)("div",{className:"alert alert-secondary",children:[Object(h.jsx)(u.b,{to:"/product/".concat(t.slug),children:t.title}),Object(h.jsx)("p",{onClick:function(){return e=t._id,void Object(i.h)(e,l.token).then((function(t){return p(t.data.wishlist)})).catch((function(t){return console.log(t)}));var e},className:"btn btn-sm float-right",children:Object(h.jsx)(a.a,{})})]},t._id)}))})]})]})})}},152:function(t,e,n){"use strict";n.d(e,"j",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return h})),n.d(e,"i",(function(){return p})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return b})),n.d(e,"a",(function(){return j})),n.d(e,"h",(function(){return v}));var r=n(12),a=n.n(r),c=n(16),s=n(26),u=n.n(s),o=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/cart"),{cart:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("https://techshop-tran.herokuapp.com/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.delete("".concat("https://techshop-tran.herokuapp.com/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/address"),{address:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/cart/coupon"),{name:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/order"),{stripeResponse:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("https://techshop-tran.herokuapp.com/api","/user/order"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("https://techshop-tran.herokuapp.com/api","/user/wishlist"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/wishlist"),{productId:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/wishlist/").concat(e),{},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},220:function(t,e,n){"use strict";n(0);var r=n(40),a=n(2);e.a=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"nav flex-column",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/user/history",className:"nav-link",children:"History"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/user/password",className:"nav-link",children:"Password"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/user/wishlist",className:"nav-link",children:"Wishlist"})})]})})}},250:function(t,e,n){"use strict";var r=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=n(39),s=function(t,e){return r.createElement(c.a,Object.assign({},t,{ref:e,icon:a}))};s.displayName="DeleteOutlined";e.a=r.forwardRef(s)}}]);
//# sourceMappingURL=35.fc5ca671.chunk.js.map