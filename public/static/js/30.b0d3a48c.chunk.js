(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[30],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(43);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1102:function(t,e,n){"use strict";n.r(e);var r=n(108),a=n(0),c=n(132),s=n(33),u=n(24),o=n(130),i=n(165),p=n(189),h=n(2);e.default=function(t){var e=t.match,n=t.history,l=Object(u.c)((function(t){return t.user})),b=Object(a.useState)(""),d=Object(r.a)(b,2),f=d[0],j=d[1],m=Object(a.useState)(!1),v=Object(r.a)(m,2),O=v[0],x=v[1],k=Object(a.useState)([]),y=Object(r.a)(k,2),g=y[0],w=y[1],N=Object(a.useState)(""),S=Object(r.a)(N,2),C=S[0],P=S[1],_=Object(a.useCallback)((function(){Object(o.b)().then((function(t){return w(t.data)})).catch((function(t){return console.log(t)}))}),[]),A=Object(a.useCallback)((function(){Object(i.b)(e.params.slug).then((function(t){j(t.data.sub.name),P(t.data.parent)})).catch((function(t){return console.log(t)}))}),[e.params.slug]);Object(a.useEffect)((function(){_(),A()}),[_,A]);return Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-2",children:Object(h.jsx)(c.a,{})}),Object(h.jsxs)("div",{className:"col",children:[O?Object(h.jsx)("h4",{className:"text-danger",children:"Loading.."}):Object(h.jsx)("h4",{children:"Update sub category"}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Parent category"}),Object(h.jsxs)("select",{name:"category",className:"form-control",onChange:function(t){return P(t.target.value)},children:[Object(h.jsx)("option",{children:"Please select"}),g.length>0&&g.map((function(t){return Object(h.jsx)("option",{value:t._id,selected:t._id===C,children:t.name},t._id)}))]})]}),Object(h.jsx)(p.a,{handleSubmit:function(t){t.preventDefault(),x(!0),Object(i.e)(e.params.slug,{name:f,parent:C},l.token).then((function(t){x(!1),j(""),s.b.success('"'.concat(t.data.name,'" is updated')),n.push("/admin/sub")})).catch((function(t){x(!1),s.b.error(t.response.data)}))},name:f,setName:j})]})]})})}},130:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return h})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return b}));var r=n(12),a=n.n(r),c=n(16),s=n(26),u=n.n(s),o=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/categories"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/category/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.delete("".concat("https://tech-shop-tran.herokuapp.com/api","/category/").concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.put("".concat("https://tech-shop-tran.herokuapp.com/api","/category/").concat(e),n,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/category"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/category/subs/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},132:function(t,e,n){"use strict";n(0);var r=n(31),a=n(2);e.a=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"nav flex-column",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/product",className:"nav-link",children:"Product"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/products",className:"nav-link",children:"Products"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/category",className:"nav-link",children:"Category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/sub",className:"nav-link",children:"Sub category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/password",className:"nav-link",children:"Password"})})]})})}},165:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return l}));var r=n(12),a=n.n(r),c=n(16),s=n(26),u=n.n(s),o=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/subs"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/sub/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.delete("".concat("https://tech-shop-tran.herokuapp.com/api","/sub/").concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.put("".concat("https://tech-shop-tran.herokuapp.com/api","/sub/").concat(e),n,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/sub"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},189:function(t,e,n){"use strict";n(0);var r=n(2);e.a=function(t){var e=t.name,n=t.handleSubmit,a=t.setName;return Object(r.jsx)("form",{onSubmit:n,children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Name"}),Object(r.jsx)("input",{type:"text",className:"form-control",onChange:function(t){return a(t.target.value)},value:e,required:!0}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})}}}]);
//# sourceMappingURL=30.b0d3a48c.chunk.js.map