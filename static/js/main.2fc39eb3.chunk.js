(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},21:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){},27:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),r=i(10),a=i.n(r),s=(i(18),i(19),i(11)),o=i(13),m=i(12),d=(i(20),i(21),i(0));var l=function(e){var t=e.cart,i=e.removeCart;Object(n.useEffect)((function(){t.length>0&&localStorage.setItem("Cart",JSON.stringify(t))}),[t]);var c=t.map((function(e){return parseInt(e.price)})).reduce((function(e,t){return parseInt(e)+parseInt(t)}),0);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("ul",{id:"cartList",children:[Object(d.jsx)("li",{id:"title",children:Object(d.jsx)("h4",{children:"Cart:"})}),t.map((function(e,t){return Object(d.jsxs)("li",{children:[Object(d.jsxs)("p",{className:"itemInfo",children:[Object(d.jsxs)("span",{className:"itemName",children:[Object(d.jsx)("b",{children:"name:"})," ",e.name]}),Object(d.jsxs)("span",{className:"itemPrice",children:[Object(d.jsx)("b",{children:"price:"})," ",e.price]})]}),Object(d.jsx)("button",{className:"removeButton",onClick:function(){i(e.id)},children:"Remove"})]},t)})),Object(d.jsxs)("li",{id:"total",children:[Object(d.jsx)("span",{children:"Total: "}),Object(d.jsxs)("span",{children:["$ ",parseFloat(c).toFixed(2)]})]})]})})},p=i(4),u=i(5),j=i(7),h=i(6),b=(i(23),i(24),function(e){Object(j.a)(i,e);var t=Object(h.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(u.a)(i,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"menu-item",id:"menu-item-".concat(this.props.itemId),children:[Object(d.jsxs)("div",{className:"item-info",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"name:"})," ",this.props.itemName]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"description:"})," ",this.props.itemDescription]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"price:"})," $",this.props.itemPrice]})]}),Object(d.jsx)("button",{className:"addCartButton",onClick:function(){e.props.addCart(e.props.itemName,e.props.itemPrice,e.props.itemId)},children:"Add to Cart"})]})}}]),i}(c.a.Component)),f=function(e){Object(j.a)(i,e);var t=Object(h.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(u.a)(i,[{key:"render",value:function(){var e=this,t=this.props.data.map((function(e){return e}));return Object(d.jsx)("div",{children:t.map((function(t){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{id:"menu",children:[t.menuName," Menu"]}),Object(d.jsx)("ul",{id:"menuList",children:t.menuItems.map((function(t){return Object(d.jsx)("li",{className:"item",children:Object(d.jsx)(b,{itemId:t.itemId,itemPrice:t.itemPrice,itemName:t.itemName,itemDescription:t.itemDescription,addCart:e.props.addCart})},"Item___".concat(t.id))}))})]})}))})}}]),i}(c.a.Component),O=i(9),x=i.n(O);var v=function(){var e=Object(n.useState)(null!==localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[]),t=Object(m.a)(e,2),i=t[0],c=t[1];return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)(f,{data:[{menuName:"Dinner",menuItems:[{itemId:1,itemPrice:"12",itemName:"Lasagne",itemDescription:"Meat and cheese layered between house-made pasta with bell peppers and onions."},{itemId:2,itemPrice:"10",itemName:"Cheese Ravioli",itemDescription:"Cheese-filled ravioli served with house red sauce."},{itemId:3,itemPrice:"14",itemName:"Chicken Parmesan",itemDescription:"Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti."}]},{menuName:"Dessert",menuItems:[{itemId:45,itemPrice:"10",itemName:"Chocolate Lava Cake",itemDescription:"Dark chocolate molten lava cake. Serves 2-3."},{itemId:47,itemPrice:"8",itemName:"Tiramisu",itemDescription:"Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder."},{itemId:49,itemPrice:"5",itemName:"Cannolis",itemDescription:"Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips."},{itemId:50,itemPrice:"5",itemName:"Cappuccino",itemDescription:"Steamed milk with two ristretto shots of espresso."}]}],addCart:function(e,t,n){!function(e,t,n){if(-1!==x.a.findIndex(i,{name:e})){var r=x.a.findIndex(i,{name:e});c(i.map((function(e){return e===i[r]?Object(o.a)({},e):e})))}else c((function(i){return[].concat(Object(s.a)(i),[{name:e,price:t,id:n}])}))}(e,t,n)}}),Object(d.jsx)(l,{cart:i,removeCart:function(e){var t=i.filter((function(t){return t.id!==e}));c(t)}})]})};var C=function(){return Object(d.jsx)(v,{})},I=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,28)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),I()}},[[27,1,2]]]);
//# sourceMappingURL=main.2fc39eb3.chunk.js.map