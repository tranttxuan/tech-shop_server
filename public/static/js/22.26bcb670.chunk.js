(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{1082:function(e,t,n){},1091:function(e,t,n){"use strict";var r=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}}]},name:"dollar",theme:"outlined"},c=n(39),o=function(e,t){return r.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="DollarOutlined";t.a=r.forwardRef(o)},1116:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(541),c="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,u="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",s=null,i=function(e){return null!==s?s:s=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(u),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(c,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();r&&e?console.warn(u):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(c).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(a){return void n(a)}else t(null)}))},p=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.15.0",startTime:t})}(r,n),r},l=Promise.resolve().then((function(){return i(null)})),f=!1;l.catch((function(e){f||console.warn(e)}));var d=n(12),h=n.n(d),m=n(16),b=n(121),y=n(109),j=(n(1082),n(24)),v=n(26),O=n.n(v),g=function(){var e=Object(m.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat("https://techshop-tran.herokuapp.com/api","/create-payment-intent"),{couponApplied:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=n(40),x=n(1112),k=n(1091),E=n(283),S=n(153),P=n(139),C=n(46),N=n(2);var R=function(){var e=Object(a.useStripe)(),t=Object(a.useElements)(),n=Object(r.useState)(!1),c=Object(y.a)(n,2),o=c[0],u=c[1],s=Object(r.useState)(null),i=Object(y.a)(s,2),p=i[0],l=i[1],f=Object(r.useState)(""),d=Object(y.a)(f,2),v=d[0],O=d[1],R=Object(r.useState)(),A=Object(y.a)(R,2),T=A[0],B=A[1],_=Object(r.useState)(""),I=Object(y.a)(_,2),q=I[0],F=I[1],L=Object(r.useState)(0),M=Object(y.a)(L,2),D=M[0],z=M[1],U=Object(r.useState)(0),W=Object(y.a)(U,2),V=W[0],J=W[1],Y=Object(r.useState)(0),$=Object(y.a)(Y,2),H=$[0],G=$[1],Q=Object(j.b)(),Z=Object(j.c)((function(e){return Object(b.a)({},e)})),X=Z.user,K=Z.coupon;Object(r.useEffect)((function(){g(X.token,K).then((function(e){console.log("----",e.data);var t=e.data,n=t.clientSecret,r=t.cartTotal,a=t.payable,c=t.totalAfterDiscount;F(n),z(r),J(a),G(c)})).catch((function(e){return console.log(e)}))}),[K,X.token]);var ee=function(){var n=Object(m.a)(h.a.mark((function n(r){var c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),e&&t){n.next=3;break}return n.abrupt("return");case 3:return O(!0),n.next=6,e.confirmCardPayment(q,{payment_method:{card:t.getElement(a.CardElement),billing_details:{}}});case 6:(c=n.sent).error?(l("Payment failed ".concat(c.error.message)),O(!1)):(Object(S.c)(c,X.token).then((function(e){Q(Object(P.c)()),Q(Object(C.a)(!1)),Object(S.d)(X.token).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),l(null),O(!1),u(!0));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(N.jsxs)(N.Fragment,{children:[!o&&Object(N.jsx)("div",{children:K&&void 0!==H?Object(N.jsxs)("p",{className:"alert alert-success",children:["Total after discount: $",H]}):Object(N.jsx)("p",{className:"alert alert-danger",children:"No coupon applied"})}),Object(N.jsx)("div",{className:"text-center pb-5",children:Object(N.jsx)(x.a,{cover:Object(N.jsx)("img",{style:{height:"200px",objectFit:"cover",marginBottom:"-50px"},alt:"img-card"}),actions:[Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(k.a,{className:"text-info"}),Object(N.jsx)("br",{})," Total: $",D]}),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(E.a,{className:"text-info"}),Object(N.jsx)("br",{})," Total payable: $",V]})]})}),Object(N.jsxs)("form",{id:"payment-form",className:"stripe-form",onSubmit:ee,children:[Object(N.jsx)(a.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:function(e){B(e.empty),l(e.error?e.error.message:"")}}),Object(N.jsx)("button",{type:"submit",className:"stripe-button",disabled:v||T||o,children:Object(N.jsx)("span",{id:"button-text",children:v?Object(N.jsx)("div",{className:"spinner",id:"spinner"}):"Pay"})}),p&&Object(N.jsx)("div",{className:"card-error",role:"alert",children:p}),Object(N.jsx)("br",{}),Object(N.jsxs)("p",{className:o?"result-message":"result-message hidden",children:["Payment Successful."," ",Object(N.jsx)(w.b,{to:"/user/history",children:"See it in your purchase history"})]})]})]})},A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];f=!0;var r=Date.now();return l.then((function(e){return p(e,t,r)}))}("pk_test_51IEL8FIUMVGuOdPc3QJNZFcfeoP3JBOgklSOEYZQ8oqOOR3eRCteCAlG0nXVSlBhr0LL4lTfoeq6zhvuiUMfawqL00hSBA57Ht");t.default=function(){return Object(N.jsxs)("div",{className:"container p-5 text-center",children:[Object(N.jsx)("h4",{children:"Complete your purchase"}),Object(N.jsx)(a.Elements,{stripe:A,children:Object(N.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(N.jsx)(R,{})})})]})}},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(123);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},123:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o}));var r=n(5),a=function(e){return function(t,n){t({type:r.a,payload:e}),console.log("object",n().cart),"undefined"!==typeof window&&localStorage.setItem("cart",JSON.stringify(n().cart))}},c=function(e){return function(t,n){t({type:r.g,payload:e}),console.log("object",n().cart),"undefined"!==typeof window&&localStorage.setItem("cart",JSON.stringify(n().cart))}},o=function(){return function(e){"undefined"!==typeof window&&localStorage.removeItem("cart"),e({type:r.c,payload:[]})}}},153:function(e,t,n){"use strict";n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return p})),n.d(t,"i",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"h",(function(){return y}));var r=n(12),a=n.n(r),c=n(16),o=n(26),u=n.n(o),s=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/cart"),{cart:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://techshop-tran.herokuapp.com/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete("".concat("https://techshop-tran.herokuapp.com/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/address"),{address:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/cart/coupon"),{name:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/order"),{stripeResponse:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://techshop-tran.herokuapp.com/api","/user/order"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://techshop-tran.herokuapp.com/api","/user/wishlist"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/wishlist"),{productId:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://techshop-tran.herokuapp.com/api","/user/wishlist/").concat(t),{},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},283:function(e,t,n){"use strict";var r=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},c=n(39),o=function(e,t){return r.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="CheckOutlined";t.a=r.forwardRef(o)},541:function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function a(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function c(e,t){return o(e)||u(e,t)||s(e,t)||p()}function o(e){if(Array.isArray(e))return e}function u(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}function s(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function d(){}function h(){}h.resetWarningCache=d;var m=function(){function e(e,t,n,r,a,c){if(c!==f){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:h,resetWarningCache:d};return n.PropTypes=n,n},b=l((function(e){e.exports=m()})),y=function(e){return null!==e&&"object"===n(e)},j=function(e){return y(e)&&"function"===typeof e.then},v=function(e){return y(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},O="[object Object]",g=function e(t,n){if(!y(t)||!y(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var a=Object.prototype.toString.call(t)===O;if(a!==(Object.prototype.toString.call(n)===O))return!1;if(!a&&!r)return!1;var c=Object.keys(t),o=Object.keys(n);if(c.length!==o.length)return!1;for(var u={},s=0;s<c.length;s+=1)u[c[s]]=!0;for(var i=0;i<o.length;i+=1)u[o[i]]=!0;var p=Object.keys(u);if(p.length!==c.length)return!1;var l=t,f=n,d=function(t){return e(l[t],f[t])};return p.every(d)},w=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},x="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",k=function(e){if(null===e||v(e))return e;throw new Error(x)},E=function(e){if(j(e))return{tag:"async",stripePromise:Promise.resolve(e).then(k)};var t=k(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},S=t.createContext(null);S.displayName="ElementsContext";var P=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},C=function(e){var n=e.stripe,r=e.options,a=e.children,o=t.useRef(!1),u=t.useRef(!0),s=t.useMemo((function(){return E(n)}),[n]),i=c(t.useState((function(){return{stripe:null,elements:null}})),2),p=i[0],l=i[1],f=w(n),d=w(r);return null!==f&&(f!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),g(r,d)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),o.current||("sync"===s.tag&&(o.current=!0,l({stripe:s.stripe,elements:s.stripe.elements(r)})),"async"===s.tag&&(o.current=!0,s.stripePromise.then((function(e){e&&u.current&&l({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){u.current=!1}}),[]),t.useEffect((function(){var e=p.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.4.1"}),e.registerAppInfo({name:"react-stripe-js",version:"1.4.1",url:"https://stripe.com/docs/stripe-js/react"}))}),[p.stripe]),t.createElement(S.Provider,{value:p},a)};C.propTypes={stripe:b.any,options:b.object};var N=function(e){var n=t.useContext(S);return P(n,e)},R=function(){return N("calls useElements()").elements},A=function(){return N("calls useStripe()").stripe},T=function(e){return(0,e.children)(N("mounts <ElementsConsumer>"))};T.propTypes={children:b.func.isRequired};var B=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},_=function(e){return y(e)?(e.paymentRequest,a(e,["paymentRequest"])):{}},I=function(){},q=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},F=function(e,n){var r="".concat(q(e),"Element"),a=n?function(e){N("mounts <".concat(r,">"));var n=e.id,a=e.className;return t.createElement("div",{id:n,className:a})}:function(n){var a=n.id,c=n.className,o=n.options,u=void 0===o?{}:o,s=n.onBlur,i=void 0===s?I:s,p=n.onFocus,l=void 0===p?I:p,f=n.onReady,d=void 0===f?I:f,h=n.onChange,m=void 0===h?I:h,b=n.onEscape,y=void 0===b?I:b,j=n.onClick,v=void 0===j?I:j,O=N("mounts <".concat(r,">")).elements,w=t.useRef(null),x=t.useRef(null),k=B(d),E=B(i),S=B(l),P=B(v),C=B(m),R=B(y);t.useLayoutEffect((function(){if(null==w.current&&O&&null!=x.current){var t=O.create(e,u);w.current=t,t.mount(x.current),t.on("ready",(function(){return k(t)})),t.on("change",C),t.on("blur",E),t.on("focus",S),t.on("escape",R),t.on("click",P)}}));var A=t.useRef(u);return t.useEffect((function(){A.current&&A.current.paymentRequest!==u.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=_(u);0===Object.keys(e).length||g(e,_(A.current))||w.current&&(w.current.update(e),A.current=u)}),[u]),t.useLayoutEffect((function(){return function(){w.current&&w.current.destroy()}}),[]),t.createElement("div",{id:a,className:c,ref:x})};return a.propTypes={id:b.string,className:b.string,onChange:b.func,onBlur:b.func,onFocus:b.func,onReady:b.func,onClick:b.func,options:b.object},a.displayName=r,a.__elementType=e,a},L="undefined"===typeof window,M=F("auBankAccount",L),D=F("card",L),z=F("cardNumber",L),U=F("cardExpiry",L),W=F("cardCvc",L),V=F("fpxBank",L),J=F("iban",L),Y=F("idealBank",L),$=F("p24Bank",L),H=F("epsBank",L),G=F("payment",L),Q=F("paymentRequestButton",L),Z=F("afterpayClearpayMessage",L);e.AfterpayClearpayMessageElement=Z,e.AuBankAccountElement=M,e.CardCvcElement=W,e.CardElement=D,e.CardExpiryElement=U,e.CardNumberElement=z,e.Elements=C,e.ElementsConsumer=T,e.EpsBankElement=H,e.FpxBankElement=V,e.IbanElement=J,e.IdealBankElement=Y,e.P24BankElement=$,e.PaymentElement=G,e.PaymentRequestButtonElement=Q,e.useElements=R,e.useStripe=A,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(0))}}]);
//# sourceMappingURL=22.26bcb670.chunk.js.map