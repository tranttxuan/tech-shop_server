(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[25],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(43);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1100:function(e,t,n){"use strict";n.r(t);var a=n(109),r=n(103),c=n(251),s=n(542),o=n(0),i=n(24),u=n(40),l=n(32),d=n(190),b=n(347),h=n(133),f=n(131),j=n(2);t.default=function(){var e=Object(o.useState)(""),t=Object(a.a)(e,2),n=t[0],m=t[1],p=Object(o.useState)(!1),v=Object(a.a)(p,2),O=v[0],x=v[1],y=Object(i.c)((function(e){return e.user})),g=Object(o.useState)([]),N=Object(a.a)(g,2),w=N[0],k=N[1],S=Object(o.useState)(""),C=Object(a.a)(S,2),L=C[0],z=C[1],E=Object(o.useCallback)((function(){Object(f.b)().then((function(e){console.log(e.data),k(e.data)})).catch((function(e){return l.b.error(e.response.data.message)}))}),[]);return Object(o.useEffect)((function(){E()}),[E]),Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-2",children:Object(j.jsx)(h.a,{})}),Object(j.jsxs)("div",{className:"col",children:[O?Object(j.jsxs)("h4",{className:"text-danger",children:[" ",Object(j.jsx)(r.a,{}),"Loading ... "]}):Object(j.jsx)("h4",{children:"Create Category"}),Object(j.jsx)(d.a,{name:n,handleSubmit:function(e){e.preventDefault(),x(!0),Object(f.a)({name:n},y.token).then((function(e){x(!1),m(""),l.b.success("".concat(e.data.name," is created")),E()})).catch((function(e){x(!1),l.b.error(e.response.data.message)}))},setName:m}),Object(j.jsx)(b.a,{keyword:L,setKeyword:z}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:w.filter(function(e){return function(t){return t.name.toLowerCase().includes(e)}}(L)).map((function(e){return Object(j.jsxs)("div",{className:"alert alert-primary flex-column",children:[e.name,Object(j.jsx)("span",{className:"btn btn-sm float-right",onClick:function(t){return function(e,t){window.confirm("Are you sure to delete ".concat(t," category?"))&&(x(!0),Object(f.e)(e,y.token).then((function(e){l.b.success("".concat(t," deleted")),x(!1),E()})).catch((function(e){x(!1),l.b.error(e.response.data.message)})))}(e.slug,e.name)},children:Object(j.jsx)(c.a,{className:" text-warning"})}),Object(j.jsx)("span",{className:"btn btn-sm float-right",children:Object(j.jsx)(u.b,{to:"/admin/category/".concat(e.slug),children:Object(j.jsx)(s.a,{className:"text-danger"})})})]},e._id)}))})]})]})})}},131:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h}));var a=n(12),r=n.n(a),c=n(16),s=n(26),o=n.n(s),i=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("https://techshop-tran.herokuapp.com/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("https://techshop-tran.herokuapp.com/api","/category/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("".concat("https://techshop-tran.herokuapp.com/api","/category/").concat(t),{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.put("".concat("https://techshop-tran.herokuapp.com/api","/category/").concat(t),n,{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://techshop-tran.herokuapp.com/api","/category"),t,{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("https://techshop-tran.herokuapp.com/api","/category/subs/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},133:function(e,t,n){"use strict";n(0);var a=n(40),r=n(2);t.a=function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"nav flex-column",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(a.b,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(a.b,{to:"/admin/product",className:"nav-link",children:"Product"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(a.b,{to:"/admin/products",className:"nav-link",children:"Products"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(a.b,{to:"/admin/category",className:"nav-link",children:"Category"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(a.b,{to:"/admin/sub",className:"nav-link",children:"Sub category"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(a.b,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(a.b,{to:"/admin/password",className:"nav-link",children:"Password"})})]})})}},190:function(e,t,n){"use strict";n(0);var a=n(2);t.a=function(e){var t=e.name,n=e.handleSubmit,r=e.setName;return Object(a.jsx)("form",{onSubmit:n,children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return r(e.target.value)},value:t,required:!0}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})}},251:function(e,t,n){"use strict";var a=n(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=n(39),s=function(e,t){return a.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="DeleteOutlined";t.a=a.forwardRef(s)},347:function(e,t,n){"use strict";n(0);var a=n(2);t.a=function(e){var t=e.keyword,n=e.setKeyword;return Object(a.jsx)("input",{type:"search",placeholder:"Filter",value:t,onChange:function(e){e.preventDefault(),n(e.target.value.toLowerCase())},className:"form-control md-4"})}},542:function(e,t,n){"use strict";var a=n(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},c=n(39),s=function(e,t){return a.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="EditOutlined";t.a=a.forwardRef(s)}}]);
//# sourceMappingURL=25.85ec54ec.chunk.js.map