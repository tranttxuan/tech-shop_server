(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[19],{1117:function(t,e,n){"use strict";n.r(e);var r=n(108),c=n(248),a=n(249),s=n(0),o=n(24),i=n(292),u=n(220),l=n(152),d=n(221),p=n(951),h=n(2),j=d.StyleSheet.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:24,textAlign:"center"},author:{fontSize:12,textAlign:"center",marginBottom:40},subtitle:{fontSize:18,margin:12},text:{margin:12,fontSize:14,textAlign:"justify"},image:{marginVertical:15,marginHorizontal:100},header:{fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},footer:{padding:"100px",fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},pageNumber:{position:"absolute",fontSize:12,bottom:30,left:0,right:0,textAlign:"center",color:"grey"}});var b=function(t){var e=t.order;return Object(h.jsx)(d.Document,{children:Object(h.jsxs)(d.Page,{style:j.body,children:[Object(h.jsxs)(d.Text,{style:j.header,fixed:!0,children:[" "," ----- ",(new Date).toLocaleString()," ----- "," "]}),Object(h.jsx)(d.Text,{style:j.title,children:"Order Invoice"}),Object(h.jsx)(d.Text,{style:j.author,children:"Order Redux E-commerce"}),Object(h.jsx)(d.Text,{style:j.subtitle,children:"Order Summary"}),Object(h.jsx)(p.Table,{children:Object(h.jsxs)(p.TableHeader,{children:[Object(h.jsx)(p.TableCell,{children:"Title"}),Object(h.jsx)(p.TableCell,{children:"Price"}),Object(h.jsx)(p.TableCell,{children:"Quantity"}),Object(h.jsx)(p.TableCell,{children:"Brand"}),Object(h.jsx)(p.TableCell,{children:"Color"})]})}),Object(h.jsx)(p.Table,{data:e.products,children:Object(h.jsxs)(p.TableBody,{children:[Object(h.jsx)(p.DataTableCell,{getContent:function(t){return t.product.title}}),Object(h.jsx)(p.DataTableCell,{getContent:function(t){return"$".concat(t.product.price)}}),Object(h.jsx)(p.DataTableCell,{getContent:function(t){return t.count}}),Object(h.jsx)(p.DataTableCell,{getContent:function(t){return t.product.brand}}),Object(h.jsx)(p.DataTableCell,{getContent:function(t){return t.product.color}})]})}),Object(h.jsxs)(d.Text,{style:j.text,children:["Date: ",new Date(1e3*e.paymentIntent.created).toLocaleString()]}),Object(h.jsxs)(d.Text,{style:j.text,children:["Order Id: ",e.paymentIntent.id]}),Object(h.jsxs)(d.Text,{style:j.text,children:["Order status: ",e.orderStatus]}),Object(h.jsxs)(d.Text,{style:j.text,children:["Total Paid: ",(e.paymentIntent.amount/100).toLocaleString("en-US",{style:"currency",currency:"EUR"})]}),Object(h.jsx)(d.Text,{style:j.footer,children:"Thank you for shopping with us"})]})})};e.default=function(){var t=Object(s.useState)([]),e=Object(r.a)(t,2),n=e[0],p=e[1],j=Object(o.c)((function(t){return t.user}));Object(s.useEffect)((function(){Object(l.f)(j.token).then((function(t){p(t.data)})).catch((function(t){}))}),[]);var x=function(t){return Object(h.jsxs)("table",{className:"table table-bordered",children:[Object(h.jsx)("thead",{className:"thead-light",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Title"}),Object(h.jsx)("th",{scope:"col",children:"Price"}),Object(h.jsx)("th",{scope:"col",children:"Brand"}),Object(h.jsx)("th",{scope:"col",children:"Color"}),Object(h.jsx)("th",{scope:"col",children:"Count"}),Object(h.jsx)("th",{scope:"col",children:"Shipping"})]})}),Object(h.jsx)("tbody",{children:t.products.map((function(t,e){var n=t.product,r=t.color,s=t.count;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n.title}),Object(h.jsx)("td",{children:n.price}),Object(h.jsx)("td",{children:n.brand}),Object(h.jsx)("td",{children:r}),Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{children:"Yes"===n.shipping?Object(h.jsx)(c.a,{style:{color:"green"}}):Object(h.jsx)(a.a,{style:{color:"red"}})})]},e)}))})]})},f=function(t){return Object(h.jsx)(d.PDFDownloadLink,{document:Object(h.jsx)(b,{order:t}),fileName:"invoice.pdf",className:"btn btn-sm btn-block btn-outline-primary",children:"Download PDF"})};return Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-2",children:Object(h.jsx)(u.a,{})}),Object(h.jsxs)("div",{className:"col text-center ",children:[Object(h.jsx)("h4",{children:n.length>0?"User purchase orders":"No purchase order"}),n.map((function(t,e){return Object(h.jsxs)("div",{className:"m-5 p-3 card",children:[Object(h.jsx)(i.a,{order:t}),x(t),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:f(t)})})]},e)}))]})]})})}},152:function(t,e,n){"use strict";n.d(e,"j",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return j})),n.d(e,"g",(function(){return b})),n.d(e,"a",(function(){return x})),n.d(e,"h",(function(){return f}));var r=n(12),c=n.n(r),a=n(16),s=n(26),o=n.n(s),i=function(){var t=Object(a.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/user/cart"),{cart:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),u=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("".concat("https://tech-shop-tran.herokuapp.com/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/user/address"),{address:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/user/cart/coupon"),{name:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/user/order"),{stripeResponse:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/user/order"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("https://tech-shop-tran.herokuapp.com/api","/user/wishlist"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/user/wishlist"),{productId:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("https://tech-shop-tran.herokuapp.com/api","/user/wishlist/").concat(e),{},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},220:function(t,e,n){"use strict";n(0);var r=n(31),c=n(2);e.a=function(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"nav flex-column",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/user/history",className:"nav-link",children:"History"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/user/password",className:"nav-link",children:"Password"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/user/wishlist",className:"nav-link",children:"Wishlist"})})]})})}},292:function(t,e,n){"use strict";n(0);var r=n(2);e.a=function(t){var e=t.order,n=t.showStatus,c=void 0===n||n;return Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[Object(r.jsxs)("span",{children:["Order Id: ",e.paymentIntent.id]})," / ",Object(r.jsxs)("span",{children:["Amount: ",(e.paymentIntent.amount/100).toLocaleString("en-US",{style:"currency",currency:"EUR"})]})," ",Object(r.jsxs)("span",{children:["Currency: ",e.paymentIntent.currency.toUpperCase()]})," / ",Object(r.jsxs)("span",{children:["Method: ",e.paymentIntent.payment_method_types[0]]})," / ",Object(r.jsxs)("span",{children:["Payment: ",e.paymentIntent.status.toUpperCase()]})," / ",Object(r.jsx)("br",{}),Object(r.jsxs)("span",{children:["Ordered on: ",new Date(1e3*e.paymentIntent.created).toLocaleString()]})," / ",Object(r.jsx)("br",{}),c&&Object(r.jsxs)("span",{className:"badge bg-primary text-white",children:["STATUS: ",e.orderStatus]})]})})}},550:function(t,e){},552:function(t,e){},583:function(t,e){},584:function(t,e){},704:function(t,e){},706:function(t,e){},734:function(t,e){},736:function(t,e){},737:function(t,e){},742:function(t,e){},744:function(t,e){},763:function(t,e){},775:function(t,e){},778:function(t,e){}}]);
//# sourceMappingURL=19.d615fa41.chunk.js.map