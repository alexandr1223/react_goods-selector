(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(5),s=c.n(n),o=c(4),a=c(6),l=c(7),r=c(9),i=c(8),d=c(1),u=c.n(d),h=(c(14),c(3)),b=c.n(h),j=(c(15),c(0)),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(r.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:["Jam"]},e.selectGoodHandler=function(t){e.state.selectedGood.includes(t)?e.setState((function(e){return{selectedGood:e.selectedGood.filter((function(e){return e!==t}))}})):e.setState((function(e){return{selectedGood:[].concat(Object(o.a)(e.selectedGood),[t])}}))},e.clearSelections=function(){e.setState({selectedGood:[]})},e.showGoods=function(){var t=e.state.selectedGood;if(0===t.length)return"No goods selected";if(1===t.length)return"".concat(t," is selected");var c=Object(o.a)(t).map((function(e,c){return t.length-2>c?"".concat(e,", "):t.length-2===c?"".concat(e," and "):e}));return"".concat(c.join("")," are selected")},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"block container",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h1",{className:"content is-medium",children:this.showGoods()}),t.length>0&&Object(j.jsx)("button",{type:"button",className:"button is-black mb-2",onClick:this.clearSelections,children:"Clear"})]}),Object(j.jsx)("ul",{className:"is-one-third content is-small",children:m.map((function(c){return Object(j.jsxs)("li",{className:b()("goods__item",{"has-text-white has-background-success":t.includes(c)}),children:[c,Object(j.jsx)("button",{type:"button",className:b()("button is-light",{"is-danger":t.includes(c)}),onClick:function(){e.selectGoodHandler(c)},children:t.includes(c)?"Remove":"Select"})]},c)}))})]})})}}]),c}(u.a.Component),g=f;s.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8c76315f.chunk.js.map