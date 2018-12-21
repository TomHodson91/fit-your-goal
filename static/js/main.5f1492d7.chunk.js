(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/hero.d36c0784.png"},function(e,t,n){e.exports=n.p+"static/media/iconmonstr-home-6 (1).9e62ff1d.svg"},function(e,t,n){e.exports=n.p+"static/media/iconmonstr-medical-6.f28696f2.svg"},,function(e,t,n){e.exports=n(41)},,,,,,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),l=(n(24),n(6)),c=n(7),s=n(10),u=n(8),m=n(11),f=n(43),h=n(44),g=n(42),v=n(14),d=n.n(v);function p(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",null,r.a.createElement("h1",null,"Start your fitness journey now!")),r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement(g.a,{className:"wholeButton",to:"/get-started"},r.a.createElement("h1",{className:"getStartedButton"},r.a.createElement("div",{className:"links"},"Get Started"))))}n(28);var E=function(e){return r.a.createElement("span",{className:"input-label"},r.a.createElement("div",{className:"name-text"},function(e,t){var n=e[0].toUpperCase()+e.substring(1);return"".concat(n," (").concat(t,")")}(e.name,e.info)),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:e.name,value:e.value,onChange:e.textChangeEvent})),r.a.createElement("div",{className:"error"},e.errorMessage),r.a.createElement("br",null))},y=function(e){var t=["Years","kg","cm","sessions / week",""];return r.a.createElement("span",null,e.names.map(function(n,a){return r.a.createElement(E,{key:a,info:t[a],name:n,value:e.fields[n],errorMessage:e.errors[n],textChangeEvent:e.textChangeEvent})}))};var b=function(e){return r.a.createElement("option",{style:{display:(t=e.currVal,"instruction"===t?"block":"none")},value:"instruction"},"Choose your desired goal");var t},w=function(e){return r.a.createElement("option",{value:e.value},e.value.split("-").map(function(e){return e[0].toUpperCase()+e.substring(1)}).join(" "))},N=(n(30),function(e){return r.a.createElement("span",{className:"full-dropdown"},r.a.createElement("div",{className:"goal-name"},"Goal"),r.a.createElement("select",{value:e.currVal,onChange:e.change},r.a.createElement(b,{currVal:e.currVal}),e.options.map(function(e){return r.a.createElement(w,{value:e})})),r.a.createElement("div",{className:"error"},e.error))}),k=(n(32),function(e){return r.a.createElement("input",{className:"submit-button",type:"submit",value:"Fit My Goal!"})}),O=(n(34),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={fields:{age:"",weight:"",height:"",activity:""},error_msg:{age:"",weight:"",height:"",activity:"",goal:""},goalOptionVal:"instruction"},e.allnames=Object.keys(e.state.fields),e.options=["fitness","lose-weight","gain-weight"],e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t,n,a=(t=this.state.fields,n=e.target,Object.keys(t).reduce(function(e,a){return a===n.name?e[a]=n.value:e[a]=t[a],e},{}));this.setState({fields:a})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.validateAllEverything()){var t=this.state.fields;t.goal=this.state.goalOptionVal,this.props.history.push("/results",t)}}},{key:"validateAllEverything",value:function(){var e,t=function(e,t){var n="instruction"===t;return e.goal=n?"Please select an option":"",e}(this.validateNumericalFields(),this.state.goalOptionVal);return e=t,!!Object.keys(e).reduce(function(t,n){return t&&""===e[n]},!0)||(this.setState({error_msg:t}),!1)}},{key:"changeAge",value:function(){this.setState({goalOptionVal:"fitness"})}},{key:"validateNumericalFields",value:function(){var e;return e=this.state.fields,Object.keys(e).reduce(function(t,n){var a=!e[n];return t[n]=a?"Please fill in the ".concat(n):"",t},{})}},{key:"handleGoalOptionsChange",value:function(e){this.setState({goalOptionVal:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"get-started"},r.a.createElement("form",{className:"get-started-form",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(y,{names:this.allnames,fields:this.state.fields,errors:this.state.error_msg,textChangeEvent:function(t){return e.handleChange(t)}}),r.a.createElement(N,{options:this.options,currVal:this.state.goalOptionVal,change:function(t){return e.handleGoalOptionsChange(t)},error:this.state.error_msg.goal}),r.a.createElement(k,null)))}}]),t}(a.Component));function j(e,t){var n=[10,20,30,40,50,60];return n=function(e,t){return 0===t?e.filter(function(e){return e<=30}):1===t?e.filter(function(e){return e<=40}):2===t?e.filter(function(e){return e<=50}):e}(n=function(e,t){return t>80?e.filter(function(e){return e<=20}):t>=60?e.filter(function(e){return e<=30}):t>=55?e.filter(function(e){return e<=40}):t>=50?e.filter(function(e){return e<=50}):e}(n,e),t)}n(36);function C(e){return r.a.createElement("div",{className:"results-info"},r.a.createElement("h1",null,"Your personal fitness program!"),r.a.createElement("h2",null,"Try these activities: ",function(e,t,n){var a=["run","bike","swim","row","walk","yoga","weights"];return a=function(e,t){return"lose-weight"===t?e.filter(function(e){return"weights"!==e}):e.filter(function(e){return"weights"===e})}(a=function(e,t){return t>100?e.filter(function(e){return"run"!==e}):e}(a=function(e,t){return t>60?e.filter(function(e){return"weights"!==e&&"run"!==e&&"row"!==e}):e}(a,e),t),n)}(Number(e.history.location.state.age),Number(e.history.location.state.weight),e.history.location.state.goals).join(", ")),r.a.createElement("h2",null,"Train between ",j(Number(e.history.location.state.age),Number(e.history.location.state.activity))[0]," and ",j(Number(e.history.location.state.age),Number(e.history.location.state.activity)).slice(-1)," minutes!"),r.a.createElement("h2",null,"Train up to ",function(e,t){var n=[1,2,3,4,5,6,7];return n=function(e,t){return 0===t?e.filter(function(e){return e<=2}):1===t?e.filter(function(e){return e<=3}):2===t?e.filter(function(e){return e<=5}):e}(n=function(e,t){return t>60?e.filter(function(e){return e<=2}):t>=56?e.filter(function(e){return e<=3}):t>=51?e.filter(function(e){return e<=4}):t>=46?e.filter(function(e){return e<=5}):t>=40?e.filter(function(e){return e<=6}):e}(n,e),t)}(Number(e.history.location.state.age),Number(e.history.location.state.activity)).slice(-1)," time/s per week!"),r.a.createElement("h2",null,"Session intensity: ",function(e,t){var n=["low","medium","high"];return n=function(e,t){return 0===t?e.filter(function(e){return"low"===e}):1===t?e.filter(function(e){return"low"===e||"medium"===e}):e}(n=function(e,t){return t>60?e.filter(function(e){return"low"===e}):t>=50?e.filter(function(e){return"low"===e||"medium"===e}):e}(n,e),t)}(Number(e.history.location.state.age),Number(e.history.location.state.activity)).join(", ")),r.a.createElement(g.a,{to:"/get-started"},r.a.createElement("div",{className:"links"},"Back to get started!")))}n(38);var x=n(15),S=n.n(x),V=n(16),A=n.n(V),B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"banner"},r.a.createElement("div",{className:"icon"},r.a.createElement(g.a,{to:"/"},r.a.createElement("img",{className:"imagee",src:S.a,alt:""}))),r.a.createElement("div",{className:"icon"},r.a.createElement("img",{className:"imagee2",src:A.a,alt:""}))),r.a.createElement(h.a,{exact:!0,path:"",component:p}),r.a.createElement(h.a,{exact:!0,path:"/get-started",component:O}),r.a.createElement(h.a,{exact:!0,path:"/results",component:C})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,2,1]]]);
//# sourceMappingURL=main.5f1492d7.chunk.js.map