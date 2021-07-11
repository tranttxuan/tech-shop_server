(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[20],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(43);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1120:function(e,t,n){"use strict";n.r(t);var r=n(122),a=n(120),c=n(108),o=n(102),i=n(0),s=n(24),u=n(33),l=n(362),p=n(361),h=n(2),f=function(e){var t=e.handleChange,n=e.handleSubmit,r=e.values,c=e.setValues,o=e.handleCategoryChange,i=e.subOptions,s=e.showSub,u=r.title,l=r.description,f=r.price,d=r.categories,b=r.category,m=r.subs,j=r.shipping,v=r.quantity,g=r.color,O=r.colors,y=r.brand,x=r.brands;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Title"}),Object(h.jsx)("input",{name:"title",type:"text",className:"form-control",value:u,onChange:t})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Description"}),Object(h.jsx)("input",{name:"description",type:"text",className:"form-control",value:l,onChange:t})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Price"}),Object(h.jsx)("input",{name:"price",type:"number",className:"form-control",value:f,step:"0.01",min:0,onChange:t})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Shipping"}),Object(h.jsxs)("select",{name:"shipping",className:"form-control",onChange:t,value:j,children:[Object(h.jsx)("option",{children:"Please select"}),Object(h.jsx)("option",{value:"Yes",children:"Yes"}),Object(h.jsx)("option",{value:"No",children:"No"})]})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Quantity"}),Object(h.jsx)("input",{name:"quantity",type:"number",className:"form-control",value:v,min:0,onChange:t})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Color"}),Object(h.jsxs)("select",{name:"color",className:"form-control",onChange:t,value:g,children:[Object(h.jsx)("option",{children:"Please select"}),O.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Brand"}),Object(h.jsxs)("select",{name:"brand",className:"form-control",onChange:t,value:y,children:[Object(h.jsx)("option",{children:"Please select"}),x.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Category"}),Object(h.jsxs)("select",{name:"category",className:"form-control",onChange:o,value:b,children:[Object(h.jsx)("option",{children:"Please select"}),d.map((function(e){return Object(h.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),s&&0!==i.length&&Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Sub Category"}),Object(h.jsx)(p.a,{mode:"multiple",placeholder:"Please select",style:{width:"100%"},value:m,name:"subs",onChange:function(e){return c(Object(a.a)(Object(a.a)({},r),{},{subs:e}))},children:i.map((function(e){return Object(h.jsx)(p.a.Option,{value:e._id,children:e.name},e._id)}))})]}),Object(h.jsx)("button",{className:"btn btn-outline-primary btn-block",children:"Save"})]})},d=n(132),b=n(130),m=n(141),j={title:"Macbook Pro",description:"one of best Apple products",price:4500,category:"",subs:[],shipping:"Yes",quantity:50,images:[],colors:["Black","Red","Blue","White","Brown","Silver"],brands:["Apple","Samsung","Microsoft","Lenovo","ASUS","HP"],color:"Silver",brand:"Apple",categories:[]};t.default=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],p=t[1],v=Object(s.c)((function(e){return e.user})),g=Object(i.useState)(j),O=Object(c.a)(g,2),y=O[0],x=O[1],w=Object(i.useState)([]),k=Object(c.a)(w,2),N=k[0],C=k[1],E=Object(i.useState)(!1),S=Object(c.a)(E,2),z=S[0],P=S[1],R=Object(i.useCallback)((function(){Object(b.b)().then((function(e){return x(Object(a.a)(Object(a.a)({},y),{},{categories:e.data}))})).catch((function(e){return u.b.error(e.response.data.message)}))}),[]);Object(i.useEffect)((function(){R()}),[R]);return Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-2",children:Object(h.jsx)(d.a,{})}),Object(h.jsxs)("div",{className:"col-md-10",children:[n?Object(h.jsxs)("h4",{className:"text-danger",children:[" ",Object(h.jsx)(o.a,{}),"Loading ..."," "]}):Object(h.jsx)("h4",{children:"Create Product"}),Object(h.jsx)("div",{className:"p-3",children:Object(h.jsx)(l.a,{values:y,setValues:x,setLoading:p})}),Object(h.jsx)(f,{handleSubmit:function(e){e.preventDefault(),Object(m.a)(y,v.token).then((function(e){window.alert("".concat(e.data.title," is created")),window.location.reload()})).catch((function(e){u.b.error(e.response.data.message)}))},handleChange:function(e){var t=e.target,n=t.value,c=t.name;x(Object(a.a)(Object(a.a)({},y),{},Object(r.a)({},c,n)))},handleCategoryChange:function(e){e.preventDefault(),x(Object(a.a)(Object(a.a)({},y),{},{subs:[],category:e.target.value})),Object(b.d)(e.target.value).then((function(e){return C(e.data)})).catch((function(e){return u.b.error(e.response.data.message)})),P(!0)},subOptions:N,showSub:z,values:y,setValues:x})]})]})})}},126:function(e,t,n){"use strict";var r=n(41);t.a=function(e,t,n){Object(r.a)(e,"[antd: ".concat(t,"] ").concat(n))}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return f}));var r=n(12),a=n.n(r),c=n(16),o=n(26),i=n.n(o),s=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/category/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("".concat("https://tech-shop-tran.herokuapp.com/api","/category/").concat(t),{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("".concat("https://tech-shop-tran.herokuapp.com/api","/category/").concat(t),n,{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/category"),t,{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/category/subs/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},132:function(e,t,n){"use strict";n(0);var r=n(31),a=n(2);t.a=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"nav flex-column",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/product",className:"nav-link",children:"Product"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/products",className:"nav-link",children:"Products"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/category",className:"nav-link",children:"Category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/sub",className:"nav-link",children:"Sub category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})})]})})}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=r.createContext(void 0),c=function(e){var t=e.children,n=e.size;return r.createElement(a.Consumer,null,(function(e){return r.createElement(a.Provider,{value:n||e},t)}))};t.b=a},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"j",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"g",(function(){return d})),n.d(t,"i",(function(){return b})),n.d(t,"h",(function(){return m})),n.d(t,"c",(function(){return j}));var r=n(12),a=n.n(r),c=n(16),o=n(26),i=n.n(o),s=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/product"),t,{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/products/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("".concat("https://tech-shop-tran.herokuapp.com/api","/product/").concat(t),{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/product/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("".concat("https://tech-shop-tran.herokuapp.com/api","/product/").concat(t),n,{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/products"),{sort:t,order:n,page:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/products/total"),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("".concat("https://tech-shop-tran.herokuapp.com/api","/product/star/").concat(t),{star:n},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/product/related/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/search/filters"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},142:function(e,t,n){"use strict";var r=n(13),a=n(109),c=n(110),o=n(112),i=n(113),s=n(0),u=n(172),l=n(136),p=n(41),h=n(127),f=n(192),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.apply(this,arguments)).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0,offsetHeight:0,offsetWidth:0},e.onResize=function(t){var n=e.props.onResize,a=t[0].target,c=a.getBoundingClientRect(),o=c.width,i=c.height,s=a.offsetWidth,u=a.offsetHeight,l=Math.floor(o),p=Math.floor(i);if(e.state.width!==l||e.state.height!==p||e.state.offsetWidth!==s||e.state.offsetHeight!==u){var h={width:l,height:p,offsetWidth:s,offsetHeight:u};e.setState(h),n&&Promise.resolve().then((function(){n(Object(r.a)(Object(r.a)({},h),{},{offsetWidth:s,offsetHeight:u}),a)}))}},e.setChildNode=function(t){e.childNode=t},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=Object(u.a)(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new f.a(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=Object(l.a)(e);if(t.length>1)Object(p.a)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return Object(p.a)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(s.isValidElement(n)&&Object(h.c)(n)){var r=n.ref;t[0]=s.cloneElement(n,{ref:Object(h.a)(r,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!s.isValidElement(e)||"key"in e&&null!==e.key?e:s.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}]),n}(s.Component);d.displayName="ResizeObserver",t.a=d},158:function(e,t,n){"use strict";var r=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},c=n(40),o=function(e,t){return r.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="CloseOutlined";t.a=r.forwardRef(o)},173:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(18),a=n(3),c=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,s=-1,u={},l={matchHandlers:{},dispatch:function(e){return u=e,i.forEach((function(e){return e(u)})),i.size>=1},subscribe:function(e){return i.size||this.register(),s+=1,i.set(s,e),e(u),s},unsubscribe:function(e){i.delete(e),i.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),i.clear()},register:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],c=function(n){var c=n.matches;e.dispatch(Object(a.a)(Object(a.a)({},u),Object(r.a)({},t,c)))},i=window.matchMedia(n);i.addListener(c),e.matchHandlers[n]={mql:i,listener:c},c(i)}))}};t.a=l},216:function(e,t,n){"use strict";var r=n(23),a=n(0),c=n(173);t.a=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){var e=c.a.subscribe((function(e){o(e)}));return function(){return c.a.unsubscribe(e)}}),[]),n}},347:function(e,t,n){!function(){"use strict";var t={d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{default:function(){return a}});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return(t=[{key:"changeHeightWidth",value:function(e,t,n,r,a,c){return n>r&&(e=Math.round(e*r/n),n=r),e>t&&(n=Math.round(n*t/e),e=t),a&&n<a&&(e=Math.round(e*a/n),n=a),c&&e<c&&(n=Math.round(n*c/e),e=c),{height:e,width:n}}},{key:"resizeAndRotateImage",value:function(e,t,n,r,a){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,s=o/100,u=document.createElement("canvas"),l=e.width,p=e.height,h=this.changeHeightWidth(p,n,l,t,r,a);!i||90!==i&&270!==i?(u.width=h.width,u.height=h.height):(u.width=h.height,u.height=h.width),l=h.width,p=h.height;var f=u.getContext("2d");return i&&(f.rotate(i*Math.PI/180),90===i?f.translate(0,-u.width):180===i?f.translate(-u.width,-u.height):270===i?f.translate(-u.height,0):0!==i&&360!==i||f.translate(0,0)),f.drawImage(e,0,0,l,p),u.toDataURL("image/".concat(c),s)}},{key:"b64toByteArrays",value:function(e,t){t=t||"image/jpeg";for(var n=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],a=0;a<n.length;a+=512){for(var c=n.slice(a,a+512),o=new Array(c.length),i=0;i<c.length;i++)o[i]=c.charCodeAt(i);var s=new Uint8Array(o);r.push(s)}return r}},{key:"b64toBlob",value:function(e,t){var n=this.b64toByteArrays(e,t);return new Blob(n,{type:t,lastModified:new Date})}},{key:"b64toFile",value:function(e,t,n){var r=this.b64toByteArrays(e,n);return new File(r,t,{type:n,lastModified:new Date})}},{key:"createResizedImage",value:function(t,n,r,a,c,o,i){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,p=new FileReader;if(!t)throw Error("File Not Found!");if(t.type&&!t.type.includes("image"))throw Error("File Is NOT Image!");p.readAsDataURL(t),p.onload=function(){var h=new Image;h.src=p.result,h.onload=function(){var p=e.resizeAndRotateImage(h,n,r,u,l,a,c,o),f="image/".concat(a);switch(s){case"blob":var d=e.b64toBlob(p,f);i(d);break;case"base64":i(p);break;case"file":var b=t.name.toString().replace(/(png|jpeg|jpg|webp)/,"").concat(a.toString()),m=e.b64toFile(p,b,f);i(m);break;default:i(p)}}},p.onerror=function(e){throw Error(e)}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e,t),e}(),a={imageFileResizer:function(e,t,n,a,c,o,i,s,u,l){return r.createResizedImage(e,t,n,a,c,o,i,s,u,l)}};e.exports=n}()},362:function(e,t,n){"use strict";var r=n(120),a=n(0),c=n(347),o=n.n(c),i=n(26),s=n.n(i),u=n(24),l=n(1114),p=n(3),h=n(18),f=n(32),d=n(23),b=n(39),m=n.n(b),j=n(142),v=n(127),g=n(280),O=n(126),y=n(173),x=n(216),w=a.createContext("default"),k=function(e){var t=e.children,n=e.size;return a.createElement(w.Consumer,null,(function(e){return a.createElement(w.Provider,{value:n||e},t)}))},N=w,C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},E=function(e,t){var n,r,c=a.useContext(N),o=a.useState(1),i=Object(d.a)(o,2),s=i[0],u=i[1],l=a.useState(!1),b=Object(d.a)(l,2),w=b[0],k=b[1],E=a.useState(!0),S=Object(d.a)(E,2),z=S[0],P=S[1],R=a.useRef(),A=a.useRef(),M=Object(v.a)(t,R),H=a.useContext(g.b).getPrefixCls,F=function(){if(A.current&&R.current){var t=A.current.offsetWidth,n=R.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&u(n-2*a<t?(n-2*a)/t:1)}}};a.useEffect((function(){k(!0)}),[]),a.useEffect((function(){P(!0),u(1)}),[e.src]),a.useEffect((function(){F()}),[e.gap]);var I=e.prefixCls,W=e.shape,B=e.size,D=e.src,L=e.srcSet,_=e.icon,U=e.className,T=e.alt,V=e.draggable,q=e.children,J=C(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),Y="default"===B?c:B,G=Object(x.a)(),Q=a.useMemo((function(){if("object"!==Object(f.a)(Y))return{};var e=y.b.find((function(e){return G[e]})),t=Y[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:_?t/2:18}:{}}),[G,Y]);Object(O.a)(!("string"===typeof _&&_.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(_,"` at https://ant.design/components/icon"));var X,K=H("avatar",I),Z=m()((n={},Object(h.a)(n,"".concat(K,"-lg"),"large"===Y),Object(h.a)(n,"".concat(K,"-sm"),"small"===Y),n)),$=a.isValidElement(D),ee=m()(K,Z,(r={},Object(h.a)(r,"".concat(K,"-").concat(W),W),Object(h.a)(r,"".concat(K,"-image"),$||D&&z),Object(h.a)(r,"".concat(K,"-icon"),_),r),U),te="number"===typeof Y?{width:Y,height:Y,lineHeight:"".concat(Y,"px"),fontSize:_?Y/2:18}:{};if("string"===typeof D&&z)X=a.createElement("img",{src:D,draggable:V,srcSet:L,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&P(!1)},alt:T});else if($)X=D;else if(_)X=_;else if(w||1!==s){var ne="scale(".concat(s,") translateX(-50%)"),re={msTransform:ne,WebkitTransform:ne,transform:ne},ae="number"===typeof Y?{lineHeight:"".concat(Y,"px")}:{};X=a.createElement(j.a,{onResize:F},a.createElement("span",{className:"".concat(K,"-string"),ref:function(e){A.current=e},style:Object(p.a)(Object(p.a)({},ae),re)},q))}else X=a.createElement("span",{className:"".concat(K,"-string"),style:{opacity:0},ref:function(e){A.current=e}},q);return delete J.onError,delete J.gap,a.createElement("span",Object(p.a)({},J,{style:Object(p.a)(Object(p.a)(Object(p.a)({},te),Q),J.style),className:ee,ref:M}),X)},S=a.forwardRef(E);S.displayName="Avatar",S.defaultProps={shape:"circle",size:"default"};var z=S,P=n(136),R=n(117),A=n(160),M=function(e){return e?"function"===typeof e?e():e:null},H=n(123),F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},I=a.forwardRef((function(e,t){var n=e.prefixCls,r=e.title,c=e.content,o=F(e,["prefixCls","title","content"]),i=a.useContext(g.b).getPrefixCls,s=i("popover",n),u=i();return a.createElement(A.a,Object(p.a)({},o,{prefixCls:s,ref:t,overlay:function(e){return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:"".concat(e,"-title")},M(r)),a.createElement("div",{className:"".concat(e,"-inner-content")},M(c)))}(s),transitionName:Object(H.b)(u,"zoom-big",o.transitionName)}))}));I.displayName="Popover",I.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var W=I,B=function(e){var t=a.useContext(g.b),n=t.getPrefixCls,r=t.direction,c=e.prefixCls,o=e.className,i=void 0===o?"":o,s=e.maxCount,u=e.maxStyle,l=e.size,p=n("avatar-group",c),f=m()(p,Object(h.a)({},"".concat(p,"-rtl"),"rtl"===r),i),d=e.children,b=e.maxPopoverPlacement,j=void 0===b?"top":b,v=Object(P.a)(d).map((function(e,t){return Object(R.a)(e,{key:"avatar-key-".concat(t)})})),O=v.length;if(s&&s<O){var y=v.slice(0,s),x=v.slice(s,O);return y.push(a.createElement(W,{key:"avatar-popover-key",content:x,trigger:"hover",placement:j,overlayClassName:"".concat(p,"-popover")},a.createElement(z,{style:u},"+".concat(O-s)))),a.createElement(k,{size:l},a.createElement("div",{className:f,style:e.style},y))}return a.createElement(k,{size:l},a.createElement("div",{className:f,style:e.style},v))},D=z;D.Group=B;var L=D,_=n(2);t.a=function(e){var t=e.values,n=e.setValues,a=e.setLoading,c=Object(u.c)((function(e){return e.user}));return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"row",children:t.images&&t.images.map((function(e){return Object(_.jsx)(l.a,{count:"x",onClick:function(){return o=e.public_id,a(!0),void s.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/removeimages"),{public_id:o},{headers:{authtoken:c?c.token:""}}).then((function(e){a(!1);var c=t.images.filter((function(e){return e.public_id!==o}));n(Object(r.a)(Object(r.a)({},t),{},{images:c}))})).catch((function(e){a(!1),console.log(e)}));var o},style:{cursor:"pointer"},children:Object(_.jsx)(L,{src:e.url,size:100,shape:"square",className:"ml-5"})},e.public_id)}))}),Object(_.jsx)("div",{className:"row",children:Object(_.jsxs)("label",{className:"btn btn-primary btn-raised mt-3",children:["Choose File",Object(_.jsx)("input",{type:"file",multiple:!0,hidden:!0,accept:"images/*",onChange:function(e){var i=e.target.files,u=t.images;if(i){a(!0);for(var l=0;l<i.length;l++)o.a.imageFileResizer(i[l],720,720,"JPEG",100,0,(function(e){s.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/uploadimages"),{image:e},{headers:{authtoken:c?c.token:""}}).then((function(e){a(!1),u.push(e.data),n(Object(r.a)(Object(r.a)({},t),{},{images:u}))})).catch((function(e){a(!1),console.log(e)}))}),"base64")}}})]})})]})}}}]);
//# sourceMappingURL=20.4ad44482.chunk.js.map