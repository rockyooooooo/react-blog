(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r,c,a,s,i,o,u,j,b,l,h,d,O,p,f,x,m,v,g,w,k,y,S,$,C,z,P,E,F=n(22),N=n.n(F),_=(n(30),n(5)),D=n(2),J=n(1),L=n(3),A=n(12),I=n(6),U=Object(J.createContext)(null),B="token",M=function(e){return localStorage.setItem(B,e)},T=function(){return localStorage.getItem(B)},q=n(0),G=L.a.header(r||(r=Object(D.a)(["\n  background: white;\n  height: 4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0 2rem;\n"]))),H=L.a.div(c||(c=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  gap: 4rem;\n"]))),K=L.a.h1(a||(a=Object(D.a)([""]))),Q=L.a.div(s||(s=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  height: 4rem;\n"]))),R=Object(L.a)(A.b)(i||(i=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 6rem;\n  cursor: pointer;\n  color: inherit;\n\n  background: ","\n"])),(function(e){return e.$active?"#75757575":""})),V=function(){var e=Object(J.useContext)(U),t=e.user,n=e.setUser,r=Object(I.g)(),c=Object(I.f)();return Object(q.jsxs)(G,{children:[Object(q.jsxs)(H,{children:[Object(q.jsx)(K,{children:"Large"}),Object(q.jsxs)(Q,{children:[Object(q.jsx)(R,{to:"/",$active:"/"===r.pathname,children:"\u9996\u9801"}),Object(q.jsx)(R,{to:"/list",$active:"/list"===r.pathname,children:"\u6587\u7ae0\u5217\u8868"}),t&&Object(q.jsx)(R,{to:"/new",$active:"/new"===r.pathname,children:"\u767c\u5e03\u6587\u7ae0"}),Object(q.jsx)(R,{to:"/about",$active:"/about"===r.pathname,children:"About"})]})]}),Object(q.jsx)(Q,{children:t?Object(q.jsx)(R,{to:"/",onClick:function(){M(null),n(null),"/"!==r.pathname&&c.push("/")},children:"\u767b\u51fa"}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(R,{to:"/register",$active:"/register"===r.pathname,children:"\u8a3b\u518a"}),Object(q.jsx)(R,{to:"/login",$active:"/login"===r.pathname,children:"\u767b\u5165"})]})})]})},W=L.a.article(o||(o=Object(D.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n"]))),X=Object(L.a)(A.b)(u||(u=Object(D.a)(["\n  font-size: 1.5rem;\n  color: #333;\n"]))),Y=L.a.p(j||(j=Object(D.a)(["\n  flex-shrink: 0;\n  color: #757575;\n"]))),Z=function(e){var t=e.post,n=t.title,r=t.createdAt;return Object(q.jsxs)(W,{children:[Object(q.jsx)(X,{to:"/posts/".concat(t.id),children:n}),Object(q.jsx)(Y,{children:new Date(r).toLocaleString()})]})},ee=n(4),te=n.n(ee),ne=n(8),re="https://student-json-api.lidemy.me",ce="createdAt",ae="desc",se=function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/posts?_sort=").concat(ce,"&_order=").concat(ae));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/posts?_page=").concat(t,"&_limit=").concat(5,"&_sort=").concat(ce,"&_order=").concat(ae));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/posts/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/users/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,r,c,a,s;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,c=t.nickname,e.next=3,fetch("".concat(re,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:c,username:n,password:r})});case 3:return a=e.sent,e.next=6,a.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(ne.a)(te.a.mark((function e(t,n){var r,c;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:n})});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T(),e.prev=1,e.next=4,fetch("".concat(re,"/me"),{headers:{authorization:"Bearer ".concat(t)}});case 4:if((n=e.sent).ok){e.next=7;break}throw new Error("Network response was not ok in getMe.");case 7:return e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",{ok:0,data:e.t0});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(ne.a)(te.a.mark((function e(t,n){var r,c,a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=T(),e.prev=1,e.next=4,fetch("".concat(re,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(r)},body:JSON.stringify({title:t,body:n})});case 4:if((c=e.sent).ok){e.next=7;break}throw new Error("Network response was not ok in newPost.");case 7:return e.next=9,c.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",{ok:0,data:e.t0});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}(),de=L.a.div(b||(b=Object(D.a)(["\n  width: 50rem;\n  margin: 0 auto;\n"]))),Oe=function(){var e=Object(J.useState)([]),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(J.useEffect)((function(){se().then((function(e){r(e)}))}),[]),Object(q.jsx)(de,{children:n.map((function(e){return Object(q.jsx)(Z,{post:e},e.id)}))})},pe=L.a.h2(l||(l=Object(D.a)(["\n  color: red;\n"]))),fe=function(){var e=Object(J.useContext)(U).setUser,t=Object(J.useState)(""),n=Object(_.a)(t,2),r=n[0],c=n[1],a=Object(J.useState)(""),s=Object(_.a)(a,2),i=s[0],o=s[1],u=Object(J.useState)(""),j=Object(_.a)(u,2),b=j[0],l=j[1],h=Object(I.f)(),d=function(){var t=Object(ne.a)(te.a.mark((function t(n){var c,a,s,o,u;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),l(null),t.next=4,be(r,i);case 4:if(c=t.sent,a=c.message,s=c.token,c.ok){t.next=9;break}return l(a),t.abrupt("return");case 9:return M(s),t.next=12,le();case 12:if(o=t.sent,u=o.data,o.ok){t.next=18;break}return M(null),l(u),t.abrupt("return");case 18:e(u),h.push("/");case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(q.jsxs)("form",{onSubmit:d,children:[Object(q.jsx)("h2",{children:"\u767b\u5165"}),Object(q.jsxs)("label",{children:["username:",Object(q.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)}})]}),Object(q.jsxs)("label",{children:["password:",Object(q.jsx)("input",{type:"password",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(q.jsx)("button",{children:"\u767b\u5165"}),b&&Object(q.jsx)(pe,{children:b})]})},xe=L.a.div(h||(h=Object(D.a)(["\n  width: 42.5rem;\n  margin: 0 auto;\n"]))),me=L.a.h2(d||(d=Object(D.a)(["\n  border-bottom: 1px solid #333;\n  margin: 0;\n  padding: 1rem 0;\n  font-size: 3rem;\n  font-weight: 400;\n  line-height: 3.75rem;\n  color: #292929;\n"]))),ve=L.a.div(O||(O=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 0 ;\n"]))),ge=L.a.span(p||(p=Object(D.a)([""]))),we=L.a.span(f||(f=Object(D.a)(["\n  color: #757575;\n"]))),ke=L.a.main(x||(x=Object(D.a)(["\n  white-space: pre-wrap;\n  margin-bottom: 4rem;\n"]))),ye=function(){var e=Object(I.h)().id,t=Object(J.useState)(null),n=Object(_.a)(t,2),r=n[0],c=n[1],a=Object(J.useState)(null),s=Object(_.a)(a,2),i=s[0],o=s[1];return Object(J.useEffect)((function(){oe(e).then((function(e){c(e)}))}),[e]),Object(J.useEffect)((function(){r&&ue(r.userId).then((function(e){o(e)}))}),[r]),Object(q.jsx)(q.Fragment,{children:r&&i&&Object(q.jsxs)(xe,{children:[Object(q.jsx)(me,{children:r.title}),Object(q.jsxs)(ve,{children:[Object(q.jsx)(ge,{children:i&&i.nickname}),Object(q.jsx)(we,{children:new Date(r.createdAt).toLocaleString()})]}),Object(q.jsx)(ke,{children:r.body})]})})},Se=L.a.h2(m||(m=Object(D.a)(["\n  color: red;\n"]))),$e=function(){var e=Object(J.useContext)(U).setUser,t=Object(J.useState)(""),n=Object(_.a)(t,2),r=n[0],c=n[1],a=Object(J.useState)(""),s=Object(_.a)(a,2),i=s[0],o=s[1],u=Object(J.useState)(""),j=Object(_.a)(u,2),b=j[0],l=j[1],h=Object(J.useState)(""),d=Object(_.a)(h,2),O=d[0],p=d[1],f=Object(I.f)(),x=function(){var t=Object(ne.a)(te.a.mark((function t(n){var c,a,s,o,u;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),p(null),t.next=4,je({username:r,password:i,nickname:b});case 4:if(c=t.sent,a=c.message,s=c.token,c.ok){t.next=9;break}return p(a),t.abrupt("return");case 9:return M(s),t.next=12,le();case 12:if(o=t.sent,u=o.data,o.ok){t.next=18;break}return M(null),p(u),t.abrupt("return");case 18:e(u),f.push("/");case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(q.jsxs)("form",{onSubmit:x,children:[Object(q.jsx)("h2",{children:"\u8a3b\u518a"}),Object(q.jsxs)("label",{children:["username:",Object(q.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)}})]}),Object(q.jsxs)("label",{children:["password:",Object(q.jsx)("input",{type:"password",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(q.jsxs)("label",{children:["nickname:",Object(q.jsx)("input",{value:b,onChange:function(e){return l(e.target.value)}})]}),Object(q.jsx)("button",{children:"\u8a3b\u518a"}),O&&Object(q.jsx)(Se,{children:O})]})},Ce=L.a.form(v||(v=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  height: calc(100vh - 4rem);\n  width: 50vw;\n  margin: 4rem auto;\n"]))),ze=L.a.input(g||(g=Object(D.a)(["\n  padding: 0.5rem;\n  font-family: inherit;\n  font-size: 1.25rem;\n"]))),Pe=L.a.textarea(w||(w=Object(D.a)(["\n  resize: vertical;\n  padding: 0.5rem;\n  font-family: inherit;\n  font-size: 1rem;\n  height: 10rem;\n"]))),Ee=L.a.button(k||(k=Object(D.a)(["\n  font-size: 1rem;\n  padding: 0.5rem;\n  margin-top: 1rem;\n"]))),Fe=function(){var e=Object(J.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1],c=Object(J.useState)(""),a=Object(_.a)(c,2),s=a[0],i=a[1],o=Object(I.f)(),u=function(){var e=Object(ne.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,he(n,s);case 3:o.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)(Ce,{onSubmit:u,children:[Object(q.jsx)("label",{htmlFor:"title",children:"\u6587\u7ae0\u6a19\u984c\uff1a"}),Object(q.jsx)(ze,{type:"text",id:"title",name:"content",value:n,onChange:function(e){r(e.target.value)}}),Object(q.jsx)("label",{htmlFor:"content",children:"\u6587\u7ae0\u5167\u5bb9\uff1a"}),Object(q.jsx)(Pe,{id:"content",name:"content",value:s,onChange:function(e){i(e.target.value)}}),Object(q.jsx)(Ee,{children:"\u9001\u51fa\u6587\u7ae0"})]})},Ne=L.a.div(y||(y=Object(D.a)(["\n  display: block;\n  text-align: center;\n"]))),_e=L.a.button(S||(S=Object(D.a)(["\n  background: none;\n  border: none;\n  padding: 1rem;\n  font-family: inherit;\n  width: 4rem;\n  cursor: ",";\n  transition: background 300ms ease;\n\n  &:hover {\n    background: ","\n  }\n"])),(function(e){return e.$active&&"pointer;"}),(function(e){return e.$active&&"#75757575;"})),De=function(e){var t=e.page,n=e.setPage,r=e.lastPage;return Object(q.jsxs)(Ne,{children:[t>1?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(_e,{$active:!0,onClick:function(){return n(1)},children:"First"}),Object(q.jsx)(_e,{$active:!0,onClick:function(){return n((function(e){return e-1}))},children:"Prev"})]}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(_e,{$active:!1}),Object(q.jsx)(_e,{$active:!1})]}),t<r?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(_e,{$active:!0,onClick:function(){return n((function(e){return e+1}))},children:"Next"}),Object(q.jsx)(_e,{$active:!0,onClick:function(){return n(r)},children:"Last"})]}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(_e,{$active:!1}),Object(q.jsx)(_e,{$active:!1})]})]})},Je=L.a.div($||($=Object(D.a)(["\n  width: 50rem;\n  margin: 0 auto;\n"]))),Le=function(){var e=Object(J.useState)([]),t=Object(_.a)(e,2),n=t[0],r=t[1],c=Object(J.useState)(1),a=Object(_.a)(c,2),s=a[0],i=a[1],o=Object(J.useState)(1),u=Object(_.a)(o,2),j=u[0],b=u[1];return Object(J.useEffect)((function(){se().then((function(e){b(Math.ceil(e.length/5))}))}),[]),Object(J.useEffect)((function(){ie(s).then((function(e){r(e)}))}),[s]),Object(q.jsxs)(Je,{children:[n.map((function(e){return Object(q.jsx)(Z,{post:e},e.id)})),Object(q.jsx)(De,{page:s,setPage:i,lastPage:j})]})},Ae=L.a.div(C||(C=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: calc(100vh - 4rem);\n"]))),Ie=L.a.h2(z||(z=Object(D.a)(["\n  font-size: 3rem;\n"]))),Ue=L.a.p(P||(P=Object(D.a)(["\n  font-size: 0.8rem;\n  color: #757575;\n"]))),Be=function(){return Object(q.jsxs)(Ae,{children:[Object(q.jsx)(Ie,{children:"Large"}),Object(q.jsx)(Ue,{children:"\u4e00\u500b\u60f3\u5047\u88dd\u81ea\u5df1\u662f Medium \u7684\u90e8\u843d\u683c"})]})},Me=L.a.div(E||(E=Object(D.a)(["\n padding-top: 4rem;\n"])));var Te=function(){var e=Object(J.useState)(null),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(J.useEffect)((function(){T()&&le().then((function(e){var t=e.ok,n=e.data;t?r(n):console.log(n)}))}),[]),Object(q.jsx)(U.Provider,{value:{user:n,setUser:r},children:Object(q.jsx)(Me,{children:Object(q.jsxs)(A.a,{children:[Object(q.jsx)(V,{}),Object(q.jsxs)(I.c,{children:[Object(q.jsx)(I.a,{exact:!0,path:"/",children:Object(q.jsx)(Oe,{})}),Object(q.jsx)(I.a,{exact:!0,path:"/list",children:Object(q.jsx)(Le,{})}),Object(q.jsx)(I.a,{path:"/new",children:Object(q.jsx)(Fe,{})}),Object(q.jsx)(I.a,{path:"/about",children:Object(q.jsx)(Be,{})}),Object(q.jsx)(I.a,{path:"/login",children:Object(q.jsx)(fe,{})}),Object(q.jsx)(I.a,{path:"/register",children:Object(q.jsx)($e,{})}),Object(q.jsx)(I.a,{path:"/posts/:id",children:Object(q.jsx)(ye,{})})]})]})})})};N.a.render(Object(q.jsx)(Te,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.cf135d23.chunk.js.map