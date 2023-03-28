(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(8),n=c.n(s),r=(c(14),c(15),c(2)),i=c(7),l=c(3),o=c.n(l),d=c(0),j=function(e){var t=e.product,c=t.id,a=t.name,s=t.category,n=t.user;return Object(d.jsxs)("tr",{"data-cy":"Product",children:[Object(d.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:c}),Object(d.jsx)("td",{"data-cy":"ProductName",children:a}),Object(d.jsxs)("td",{"data-cy":"ProductCategory",children:[Object(d.jsx)("span",{role:"img","aria-label":"emoji",children:s.icon})," - ".concat(s.title)]}),Object(d.jsx)("td",{"data-cy":"ProductUser",className:o()({"has-text-link":"m"===n.sex,"has-text-danger":"f"===n.sex}),children:n.name})]})},u=function(e){var t=e.products;return Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsx)(j,{product:e},e.id)}))})},b=function(e){var t=e.products;return Object(d.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(d.jsx)(u,{products:t})]})},h=function(e){var t=e.title,c=e.onCategoryClick,a=e.isActive;return Object(d.jsx)("button",{type:"button","data-cy":"Category",className:o()("button mr-2 my-1",{"is-info":a}),"aria-label":"".concat(t," filter button"),onClick:c,children:t})},x=function(e){var t=e.users,c=e.categories,s=e.onUserFilterChange,n=e.onCategoryFilterChange,i=e.onQueryFilterChange,l=Object(a.useState)(""),j=Object(r.a)(l,2),u=j[0],b=j[1],x=Object(a.useState)(0),O=Object(r.a)(x,2),f=O[0],m=O[1],p=Object(a.useState)(0),g=Object(r.a)(p,2),y=g[0],N=g[1],C=function(e){n(e),N(e===y?0:e)},w=function(e){s(e),m(e===f?0:e)};return Object(d.jsxs)("nav",{className:"panel",children:[Object(d.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(d.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(d.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:o()({"is-active":0===f}),onClick:function(){return w(0)},children:"All"}),t.map((function(e){return Object(d.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:o()({"is-active":f===e.id}),onClick:function(){return w(e.id)},children:e.name},e.id)}))]}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:u,onChange:function(e){var t=e.target.value;i(t),b(t)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),u&&Object(d.jsx)("span",{className:"icon is-right",children:Object(d.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete","aria-label":"clear-button",onClick:function(){i(""),b("")}})})]})}),Object(d.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(d.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",onClick:function(){return C(0)},children:"All"}),c.map((function(e){return Object(d.jsx)(h,{title:e.title,isActive:y===e.id,onCategoryClick:function(){return C(e.id)}},e.title)}))]}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){N(0),m(0),b(""),s(0),n(0),i("")},children:"Reset all filters"})})]})},O=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],f=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],m=(c(17),c(9)),p=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=f.find((function(t){return t.id===e.categoryId})),c=O.find((function(e){return e.id===t.ownerId}));return Object(i.a)(Object(i.a)({},e),{},{category:t,user:c})})),g=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(0),i=Object(r.a)(n,2),l=i[0],o=i[1],j=Object(a.useState)(""),u=Object(r.a)(j,2),h=u[0],g=u[1],y=function(e,t,c,a){var s=Object(m.a)(e);if(t>0&&(s=s.filter((function(e){return e.user.id===t}))),c>0&&(s=s.filter((function(e){return e.categoryId===c}))),c>0&&(s=s.filter((function(e){return e.categoryId===c}))),a){var n=a.toLowerCase().split(" ").filter(Boolean).join(" ");s=s.filter((function(e){return e.name.toLowerCase().includes(n)}))}return s}(p,c,l,h);return Object(d.jsx)("div",{className:"section",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"Product Categories"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(x,{users:O,categories:f,onUserFilterChange:s,onCategoryFilterChange:o,onQueryFilterChange:g})}),Object(d.jsx)("div",{className:"box table-container",children:y.length>0?Object(d.jsx)(b,{products:y}):Object(d.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};n.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.57f9be48.chunk.js.map