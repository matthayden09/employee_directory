(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(16),o=c.n(s),i=(c(31),c(32),c(17)),l=c(18),a=c(26),j=c(25),h=c(19),b=c(20),d=c.n(b),u=function(){return d.a.get("https://randomuser.me/api/?results=25")},m=c(0);var p,O=function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:e.employeeKey}),Object(m.jsx)("td",{children:Object(m.jsx)("img",{alt:e.firstName,src:e.image})}),Object(m.jsx)("td",{children:e.firstName}),Object(m.jsx)("td",{children:e.lastName}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.phone}),Object(m.jsx)("td",{children:e.location})]})},x=c(21).a.div(p||(p=Object(h.a)(["\nbackground-color: white;\ntext-align: left;\n"]))),y=function(e){Object(a.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],shownEmployees:[]},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;u().then((function(t){e.setState({employees:t.data.results,shownEmployees:t.data.results}),console.log(e.state.employees)})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return Object(m.jsx)(x,{children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"#"}),Object(m.jsx)("th",{scope:"col",children:"Picture"}),Object(m.jsx)("th",{scope:"col",children:"First Name"}),Object(m.jsx)("th",{scope:"col",children:"Last Name"}),Object(m.jsx)("th",{scope:"col",children:"Email"}),Object(m.jsx)("th",{scope:"col",children:"Phone Number"}),Object(m.jsx)("th",{scope:"col",children:"Country"})]}),Object(m.jsx)("tbody",{children:this.state.employees.map((function(e,t){return Object(m.jsx)(O,{employeeKey:t+1,image:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,location:e.location.country},t)}))})]})})}}]),c}(n.Component);c(54);var f=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h2",{children:"Employee Directory"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary",children:"Sort by Last Name A-Z"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(y,{})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),s(e),o(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),g()}},[[55,1,2]]]);
//# sourceMappingURL=main.1c550081.chunk.js.map