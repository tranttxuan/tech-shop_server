(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[39],{108:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var n=s(43);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],n=!0,r=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(s.push(c.value),!t||s.length!==t);n=!0);}catch(l){r=!0,a=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return s}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1097:function(e,t,s){"use strict";s.r(t);var n=s(108),r=s(102),a=s(0),c=s(32),i=s(220),l=s(45),o=s(2);t.default=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),s=t[0],u=t[1],d=Object(a.useState)(""),b=Object(n.a)(d,2),j=b[0],h=b[1];return Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-2",children:Object(o.jsx)(i.a,{})}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("h4",{children:"Password Update"}),Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),h(!0),l.a.currentUser.updatePassword(s).then((function(){h(!1),u(""),c.b.success("Password updated")})).catch((function(e){console.log(e),c.b.error(e.message),h(!1)}))},children:Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Your password"}),Object(o.jsx)("input",{type:"password",onChange:function(e){return u(e.target.value)},className:"form-control",placeholder:"Enter new password",value:s,disabled:j}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:!s||s.length<6||j,children:j?Object(o.jsxs)("h4",{className:"text-danger",children:[Object(o.jsx)(r.a,{})," Loading ..."]}):"Submit"})]})})]})]})})}},220:function(e,t,s){"use strict";s(0);var n=s(40),r=s(2);t.a=function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"nav flex-column",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(n.b,{to:"/user/history",className:"nav-link",children:"History"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(n.b,{to:"/user/password",className:"nav-link",children:"Password"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(n.b,{to:"/user/wishlist",className:"nav-link",children:"Wishlist"})})]})})}}}]);
//# sourceMappingURL=39.7e52ea89.chunk.js.map