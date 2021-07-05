(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[40],{1122:function(e,t,c){"use strict";c.r(t);var n=c(108),a=c(0),s=c(24),r=c(1067),i=c.n(r),o=(c(539),c(132)),l=c(12),u=c.n(l),j=c(16),b=c(26),d=c.n(b),h=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/coupons"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(u.a.mark((function e(t,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("".concat("https://tech-shop-tran.herokuapp.com/api","/coupon/").concat(t),{headers:{authtoken:c}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(u.a.mark((function e(t,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/coupon"),t,{headers:{authtoken:c}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),x=c(33),O=c(102),f=c(250),v=c(2);t.default=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),c=t[0],r=t[1],l=Object(a.useState)(""),u=Object(n.a)(l,2),j=u[0],b=u[1],d=Object(a.useState)(""),N=Object(n.a)(d,2),g=N[0],k=N[1],y=Object(a.useState)(""),w=Object(n.a)(y,2),C=w[0],S=w[1],D=Object(a.useState)(""),q=Object(n.a)(D,2),E=q[0],P=q[1],F=Object(a.useState)([]),J=Object(n.a)(F,2),L=J[0],_=J[1],A=Object(s.c)((function(e){return e.user})),U=(Object(s.b)(),Object(a.useCallback)((function(){h().then((function(e){return _(e.data)})).catch((function(e){return x.b.error(e.message)}))}),[]));return Object(a.useEffect)((function(){U()}),[]),Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-md-2",children:Object(v.jsx)(o.a,{})}),Object(v.jsxs)("div",{className:"col",children:[C?Object(v.jsxs)("h4",{className:"text-danger",children:[Object(v.jsx)(O.a,{}),"Loading..."]}):Object(v.jsx)("h4",{children:"Coupon"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S(!0),E||p({name:c,expiry:j,discount:g},A.token).then((function(e){S(!1),U(),r(""),k(""),b(""),x.b.success("Coupon ".concat(e.data.name," is created"))})).catch((function(e){return x.b.error(e.message)}))},children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-muted",children:"Name"}),Object(v.jsx)("input",{type:"text",className:"form-control",value:c,name:"name",onChange:function(e){var t=e.target.value;r(t.toUpperCase()),t.length<6?P("Name is too short. Coupon has at least 6 characters and its maximum length is 12 characters"):t.length>12?P("Name is too long.  Coupon has at least 6 characters and its maximum length is 12 characters"):P("")},required:!0,autoFocus:!0}),E&&Object(v.jsx)("p",{children:E})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-muted",children:"Discount %"}),Object(v.jsx)("input",{min:"0",max:"100",type:"number",className:"form-control",value:g,onChange:function(e){return k(e.target.value)},required:!0,autoFocus:!0})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-muted",children:"Expiry"}),Object(v.jsx)("br",{}),Object(v.jsx)(i.a,{value:j,onChange:function(e){return b(e)},required:!0})]}),Object(v.jsx)("button",{className:"btn btn-primary",children:"Save"})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("h4",{children:[L.length," Coupon",L.length<2?"":"s"]}),Object(v.jsxs)("table",{className:"table table-bordered",children:[Object(v.jsx)("thead",{className:"thead-light",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"Name"}),Object(v.jsx)("th",{scope:"col",children:"Expiry"}),Object(v.jsx)("th",{scope:"col",children:"Discount"}),Object(v.jsx)("th",{scope:"col",children:"Action"})]})}),Object(v.jsx)("tbody",{children:L.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.name}),Object(v.jsx)("td",{children:new Date(e.expiry).toLocaleDateString()}),Object(v.jsxs)("td",{children:[e.discount,"%"]}),Object(v.jsx)("td",{children:Object(v.jsx)(f.a,{onClick:function(){return t=e._id,void(window.confirm("Delete?")&&(S(!0),m(t,A.token).then((function(e){U(),S(!1),x.b.info("Coupon ".concat(e.data.name," is deleted"))})).catch((function(e){return x.b.error(e.message)}))));var t},className:"text-danger",style:{cursor:"pointer"}})})]},e._id)}))})]})]})]})})}},132:function(e,t,c){"use strict";c(0);var n=c(31),a=c(2);t.a=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"nav flex-column",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.b,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.b,{to:"/admin/product",className:"nav-link",children:"Product"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.b,{to:"/admin/products",className:"nav-link",children:"Products"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.b,{to:"/admin/category",className:"nav-link",children:"Category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.b,{to:"/admin/sub",className:"nav-link",children:"Sub category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.b,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.b,{to:"/admin/password",className:"nav-link",children:"Password"})})]})})}}}]);
//# sourceMappingURL=40.84096ae9.chunk.js.map