"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{713:function(n,t,e){e.d(t,{A9:function(){return d},Bk:function(){return g},LP:function(){return s},af:function(){return f},pj:function(){return l},xJ:function(){return p}});var r=e(861),a=e(757),o=e.n(a),c=e(243),u="f6b5dfee4ed71b77313e17116e40108d",i="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/trending/movie/day"),{params:{api_key:"".concat(u),page:1}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1"),{params:{api_key:"".concat(u)}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"?language=en-US"),{params:{api_key:"".concat(u)}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/credits?language=en-US"),{params:{api_key:"".concat(u)}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews?language=en-US&page=1"),{params:{api_key:"".concat(u)}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(n){return n.map((function(n){return n.name})).join(", ")}},257:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,o,c,u=e(439),i=e(791),s=e(713),p=e(168),f=e(444),l=e(87),d=f.ZP.ul(r||(r=(0,p.Z)(["\n  margin-left: 15px;\n"]))),g=(0,f.ZP)(l.rU)(a||(a=(0,p.Z)(["\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n  transition: color 0.2s ease;\n  margin-bottom: 10px;\n\n  &:hover {\n    color: #0056b3;\n  }\n"]))),m=e(184),x=function(n){var t=n.list,e=n.loc;if(null!==t){var r=t.data.results;return(0,m.jsx)(d,{children:r.map((function(n){var t=n.title,r=n.id;return(0,m.jsx)("li",{children:(0,m.jsx)(g,{to:"".concat(r),state:{from:e},children:t})},r)}))})}},h=f.ZP.input(o||(o=(0,p.Z)(["\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n  transition: border-color 0.2s ease;\n  margin-left: 15px;\n  margin-bottom: 15px;\n  margin-right: 5px;\n\n  &:focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);\n  }\n"]))),b=f.ZP.button(c||(c=(0,p.Z)(["\n  padding: 10px;\n  border: 1px solid #007bff;\n  border-radius: 4px;\n  font-size: 16px;\n  background-color: #007bff;\n  color: #fff;\n  transition: background-color 0.2s ease;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),v=e(689),k=function(){var n=(0,l.lr)(""),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(""),o=(0,u.Z)(a,2),c=o[0],p=o[1],f=(0,i.useState)(null),d=(0,u.Z)(f,2),g=d[0],k=d[1],Z=e.get("querty"),w=(0,v.TH)();(0,i.useEffect)((function(){Z&&(0,s.xJ)(Z).then((function(n){k(n)})).catch((function(n){return console.log(n)}))}),[Z]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==c?(r({querty:c}),p("")):alert("Enter something!")},children:[(0,m.jsx)(h,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Movie",value:c,onChange:function(n){p(n.target.value)}}),(0,m.jsx)(b,{type:"submit",children:"Search"})]}),g&&(0,m.jsx)(x,{list:g,loc:w})]})}}}]);
//# sourceMappingURL=257.a9744c76.chunk.js.map