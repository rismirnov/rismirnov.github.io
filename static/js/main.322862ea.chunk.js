(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{147:function(e,t,a){},254:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(14),s=a.n(c),o=(a(145),a(146),a(147),a(20)),i=a(21),l=a(33),u=a(32),p=a(285),h=a(286),d=a(133),j=a(288),b=a(289),f=a(3),v=a.n(f),x=(a(254),a(290)),O=a(138),g=a(22),y=a(2),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleClick=function(){r.setState({displayColorPicker:!r.state.displayColorPicker})},r.handleClose=function(){r.setState({displayColorPicker:!1})},r.handleChange=function(e){r.setState({color:e.rgb}),r.props.dispatch({type:"valutes/setValuteColor",payload:{charCode:r.props.charCode,color:e.hex}})},r.state={displayColorPicker:!1,color:{r:"241",g:"112",b:"19",a:"1"}},r}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=v()({default:{color:{background:"rgba(".concat(this.state.color.r,", ").concat(this.state.color.g,", ").concat(this.state.color.b,", ").concat(this.state.color.a,")")}}});return Object(y.jsx)(x.a,{children:Object(y.jsxs)(x.a.Body,{className:"d-flex align-items-center justify-content-between",children:[Object(y.jsxs)("div",{className:"position-relative",children:[Object(y.jsx)("div",{className:"swatch",onClick:this.handleClick,children:Object(y.jsx)("div",{style:t.color})}),this.state.displayColorPicker?Object(y.jsxs)("div",{className:"popover",children:[Object(y.jsx)("div",{className:"cover",onClick:this.handleClose}),Object(y.jsx)(O.a,{color:this.state.color,onChange:this.handleChange})]}):null]}),Object(y.jsx)("span",{className:"ms-4",children:this.props.name}),Object(y.jsx)(j.a.Check,{onChange:function(t){e.props.dispatch({type:"valutes/toggleValuteVisible",payload:e.props.charCode})},checked:this.props.checked})]})})}}]),a}(r.Component),C=Object(g.b)((function(e){return e.valutes.forEach((function(e){""==e.color&&(e.color="#F17013")})),{valutes:e}}))(m),k=(a(261),a(28)),w=a(287),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.chartData.map((function(t){var a=t.values.map((function(e){return{x:e.date,y:e.value}})).slice(e.props.startDate-1,e.props.startDate+e.props.period-1);return Object(y.jsx)(k.b,{data:a,color:t.color},t.charCode)}));return 0==t.length?Object(y.jsxs)(w.a,{variant:"warning",children:[Object(y.jsx)(w.a.Heading,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441"}),Object(y.jsx)("p",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u044b"})]}):Object(y.jsxs)(k.e,{height:700,width:800,xType:"ordinal",children:[t,Object(y.jsx)(k.c,{}),Object(y.jsx)(k.a,{}),Object(y.jsx)(k.d,{title:"\u0414\u0430\u0442\u0430",style:{text:{stroke:"none",fill:"white",fontWeight:600},title:{stroke:"none",fill:"white",fontWeight:600}}}),Object(y.jsx)(k.f,{title:"\u041a\u0443\u0440\u0441",style:{text:{stroke:"none",fill:"white",fontWeight:600},title:{stroke:"none",fill:"white",fontWeight:600}}})]})}}]),a}(r.Component),V=Object(g.b)((function(e){return{chartData:e.valutes.filter((function(e){return e.checked})),period:e.date.period,startDate:e.date.startDate}}))(D),N=a(16),P=a(27),S=a.n(P),F=a(54);function L(e){var t=(e=new Date(e)).getDate(),a=e.getMonth()+1,r=e.getFullYear();return a=a<10?"0"+a:a,"".concat(t=t<10?"0"+t:t,".").concat(a,".").concat(r)}function E(e){return W.apply(this,arguments)}function W(){return(W=Object(F.a)(S.a.mark((function e(t){var a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if(200!=(a=e.sent).status){e.next=9;break}return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",[r.Valute,r.PreviousURL,r.Date]);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function B(){return M.apply(this,arguments)}function M(){return(M=Object(F.a)(S.a.mark((function e(){var t,a,r,n,c,s,o,i,l,u,p,h,d;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("https://www.cbr-xml-daily.ru/daily_json.js");case 2:for(o in t=e.sent,a=Object(N.a)(t,3),r=a[0],n=a[1],c=a[2],s={},r)s[o]={name:r[o].Name,charCode:o,values:[{date:L(c),value:r[o].Value}]};e.prev=9,i=0;case 11:if(!(i<14)){e.next=29;break}return n=n.substring(2,n.length),l="https://"+n.split("/").join("//"),e.next=16,E(l);case 16:if(e.t0=e.sent,e.t0){e.next=21;break}return e.next=20,E("https://"+n);case 20:e.t0=e.sent;case 21:for(p in u=e.t0,r=u[0],n=u[1],c=u[2],r)s[p].values.push({date:L(c),value:r[p].Value});case 26:i++,e.next=11;break;case 29:for(d in e.prev=29,h=[],s)h.push(s[d]);return e.abrupt("return",h);case 34:case"end":return e.stop()}}),e,null,[[9,,29,34]])})))).apply(this,arguments)}var T=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"getValutes",value:function(){var e=Object(F.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),G=new T,I=a(86),J=a.n(I),Y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;G.getValutes().then((function(t){t.forEach((function(e){e.color="",e.checked=!1})),e.props.dispatch({type:"valutes/setValutes",payload:t}),e.props.dispatch({type:"valutes/toggleValuteVisible",payload:t[0].charCode})}))}},{key:"render",value:function(){var e=this;return Object(y.jsx)(p.a,{className:"mt-5",children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(d.a,{className:"col",children:Object(y.jsx)(V,{})}),Object(y.jsxs)(d.a,{className:"col-md-4",children:[Object(y.jsxs)("div",{className:"text-light",children:[Object(y.jsx)(j.a.Label,{children:"\u0412\u044b\u0431\u043e\u0440 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u0430\u0442\u044b"}),Object(y.jsx)(j.a,{children:Object(y.jsxs)(j.a.Group,{as:h.a,children:[Object(y.jsx)(d.a,{xs:"9",children:Object(y.jsx)(J.a,{value:this.props.startDate,min:1,max:15,step:1,onChange:function(t){return e.props.dispatch({type:"period/setStartDate",payload:t.target.value})}})}),Object(y.jsx)(d.a,{xs:"3",children:this.props.valutes.length>0?Object(y.jsx)(j.a.Control,{value:this.props.startDate-1}):null})]})})]}),Object(y.jsxs)("div",{className:"text-light",children:[Object(y.jsx)(j.a.Label,{children:"\u0412\u044b\u0431\u043e\u0440 \u043f\u0435\u0440\u0438\u043e\u0434\u0430"}),Object(y.jsx)(j.a,{children:Object(y.jsxs)(j.a.Group,{as:h.a,children:[Object(y.jsx)(d.a,{xs:"9",children:Object(y.jsx)(J.a,{value:this.props.period,min:1,max:7,step:1,onChange:function(t){return e.props.dispatch({type:"period/setPeriod",payload:t.target.value})}})}),Object(y.jsx)(d.a,{xs:"3",children:Object(y.jsx)(j.a.Control,{value:this.props.period})})]})})]}),Object(y.jsx)(b.a,{className:"mt-3",gap:2,style:{overflowY:"auto",height:"500px"},children:this.props.valutes.map((function(e){return Object(y.jsx)(C,{charCode:e.charCode,name:e.name,checked:e.checked,color:e.color},e.charCode)}))})]})]})})}}]),a}(r.Component),H=Object(g.b)((function(e){return{valutes:e.valutes,period:e.date.period,startDate:e.date.startDate}}))(Y),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,291)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},U=a(87),_=[];var q=a(4);var z=Object(U.b)(Object(U.a)({valutes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"valutes/setValutes":return t.payload;case"valutes/setValuteColor":return e.map((function(e){return e.charCode==t.payload.charCode&&(e.color=t.payload.color),e}));case"valutes/toggleValuteVisible":return e.map((function(e){return e.charCode==t.payload&&(e.checked=!e.checked),e}));default:return e}},date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{period:1,startDate:1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"period/setPeriod":return Object(q.a)(Object(q.a)({},e),{},{period:+t.payload});case"period/setStartDate":return Object(q.a)(Object(q.a)({},e),{},{startDate:+t.payload});default:return e}}})),A=z;s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(g.a,{store:A,children:Object(y.jsx)(H,{})})}),document.getElementById("root")),R()}},[[281,1,2]]]);
//# sourceMappingURL=main.322862ea.chunk.js.map