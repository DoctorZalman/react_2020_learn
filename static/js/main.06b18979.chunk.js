(this.webpackJsonpreact_1=this.webpackJsonpreact_1||[]).push([[0],{127:function(A,e,t){"use strict";t.d(e,"b",(function(){return s}));var n=t(44),r=t(5),a="SEND_MESSAGE",c={dialogs:[{id:1,name:"Roma"},{id:4,name:"Vasia"},{id:2,name:"Vika"},{id:3,name:"Endry"}],messages:[{id:1,message:"How is your cat",likesCount:12},{id:2,message:"Hi",likesCount:13},{id:3,message:"Good",likesCount:14},{id:4,message:"Nice",likesCount:15}]},s=function(A){return{type:a,newMessageBody:A}};e.a=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:var t=e.newMessageBody;return Object(r.a)(Object(r.a)({},A),{},{messages:[].concat(Object(n.a)(A.messages),[{id:7,message:t}])});default:return A}}},134:function(A,e,t){A.exports={userPhoto:"users_userPhoto__3ehBm"}},15:function(A,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return s}));var n=t(132),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"03dcfcb3-b206-4bb6-9dc2-cdad312203ff"}}),a={getUsers:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(A,"&count=").concat(e)).then((function(A){return A.data}))},follow:function(A){return r.post("follow/".concat(A))},unfollow:function(A){return r.delete("follow/".concat(A))},getProfile:function(A){return console.warn("Obsolete method. Please use profilesAPI object"),c.getProfile(A)}},c={getProfile:function(A){return r.get("profile/"+A)},getStatus:function(A){return r.get("profile/status/"+A)},updateStatus:function(A){return r.put("profile/status",{status:A})}},s={me:function(){return r.get("auth/me")},login:function(A,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:A,password:e,rememberMe:t})},logout:function(){return r.delete("auth/login")}}},168:function(A,e,t){},169:function(A,e,t){},22:function(A,e,t){A.exports={nav:"Navbar_nav__3Wi2g",item:"Navbar_item__37kqs",activeLink:"Navbar_activeLink__3I75Y"}},290:function(A,e,t){"use strict";t.r(e);var n=t(1),r=t(0),a=t.n(r),c=t(66),s=t.n(c),i=(t(168),t(35)),o=t(36),u=t(38),l=t(37),d=(t(169),t(22)),j=t.n(d),f=t(20),b=function(){return Object(n.jsxs)("nav",{className:j.a.nav,children:[Object(n.jsx)("div",{className:"".concat(j.a.item," ").concat(j.a.active),children:Object(n.jsx)(f.b,{to:"/profile",activeClassName:j.a.activeLink,children:"Profile"})}),Object(n.jsx)("div",{className:j.a.item,children:Object(n.jsx)(f.b,{to:"/dialogs",activeClassName:j.a.activeLink,children:"Messages"})}),Object(n.jsx)("div",{className:j.a.item,children:Object(n.jsx)(f.b,{to:"/users",activeClassName:j.a.activeLink,children:"Users"})}),Object(n.jsx)("div",{className:j.a.item,children:Object(n.jsx)("a",{children:"News"})}),Object(n.jsx)("div",{className:j.a.item,children:Object(n.jsx)("a",{children:"Music"})}),Object(n.jsx)("div",{className:j.a.item,children:Object(n.jsx)("a",{children:"Settings"})})]})},p=t(11),O=t(13),g=t(10),h=t.n(g),m=t(19),v=t(44),x=t(5),w=t(15),C=function(A,e,t,n){return A.map((function(A){return A[t]===e?Object(x.a)(Object(x.a)({},A),n):A}))},P="FOLLOW",I="UNFOLLOW",S="SET_USERS",y="SET_CURRENT_PAGE",k="SET_TOTAL_USERS_COUNT",K="TOGGLE_IS_FETCHING",L="TOGGLE_IS_FOLLOWING_PROGRESS",z={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},E=function(A){return{type:P,userId:A}},F=function(A){return{type:I,userId:A}},U=function(A){return{type:y,currentPage:A}},T=function(A){return{type:K,isFetching:A}},G=function(A,e){return{type:L,isFetching:A,userId:e}},_=function(){var A=Object(m.a)(h.a.mark((function A(e,t,n,r){return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e(G(!0,t)),A.next=3,n(t);case 3:0==A.sent.data.resultCode&&e(r(t)),e(G(!1,t));case 6:case"end":return A.stop()}}),A)})));return function(e,t,n,r){return A.apply(this,arguments)}}(),N=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P:return Object(x.a)(Object(x.a)({},A),{},{users:C(A.users,e.userId,"id",{followed:!0})});case I:return Object(x.a)(Object(x.a)({},A),{},{users:C(A.users,e.userId,"id",{followed:!1})});case S:return Object(x.a)(Object(x.a)({},A),{},{users:e.users});case y:return Object(x.a)(Object(x.a)({},A),{},{currentPage:e.currentPage});case k:return Object(x.a)(Object(x.a)({},A),{},{totalUsersCount:e.count});case K:return Object(x.a)(Object(x.a)({},A),{},{isFetching:e.isFetching});case L:return Object(x.a)(Object(x.a)({},A),{},{followingInProgress:e.isFetching?[].concat(Object(v.a)(A.followingInProgress),[e.userId]):A.followingInProgress.filter((function(A){return A!=e.userId}))});default:return A}},B=t(56),q=t(69),H=t(129),M=t(71),D=t.n(M),J=t(133),W=t.n(J),R=function(A){var e=A.totalItemsCount,t=A.pageSize,a=A.currentPage,c=A.onPageChanged,s=A.portionSize,i=void 0===s?5:s;console.log(e,t,a,c,i);for(var o=Math.ceil(e/t),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/t),j=Object(r.useState)(1),f=Object(H.a)(j,2),b=f[0],p=f[1],O=(b-1)*i+1,g=b*i;return Object(n.jsxs)("div",{className:D.a.paginator,children:[b>1&&Object(n.jsx)("button",{onClick:function(){p(b-1)},children:"Previous"}),u.filter((function(A){return A>=O&&A<=g})).map((function(A){return Object(n.jsx)("span",{className:W()(Object(q.a)({},D.a.selectedPage,a===A),D.a.pageNumber),onClick:function(e){c(A)},children:A},A)})),d>b&&Object(n.jsx)("button",{onClick:function(){p(b+1)},children:"Next"})]})},Z=t(134),Q=t.n(Z),X=t.p+"static/media/hr.3e7bb820.png",Y=function(A){var e=A.user,t=A.followingInProgress,r=A.unfollow,a=A.follow;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:Object(n.jsx)(f.b,{to:"/profile/"+e.id,children:Object(n.jsx)("img",{src:null!=e.photos.small?e.photos.small:X,className:Q.a.userPhoto,alt:"ava"})})}),Object(n.jsx)("div",{children:e.followed?Object(n.jsx)("button",{disabled:t.some((function(A){return A===e.id})),onClick:function(){r(e.id)},children:"Unfollow"}):Object(n.jsx)("button",{disabled:t.some((function(A){return A===e.id})),onClick:function(){a(e.id)},children:"Follow"})})]}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:e.name}),Object(n.jsx)("div",{children:e.status})]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:"user.location.country"}),Object(n.jsx)("div",{children:"user.location.city"})]})]})]})},V=function(A){var e=A.currentPage,t=A.totalUsersCount,r=A.pageSize,a=A.onPageChanged,c=A.users,s=Object(B.a)(A,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(n.jsxs)("div",{children:[Object(n.jsx)(R,{currentPage:e,onPageChanged:a,totalItemsCount:t,pageSize:r}),Object(n.jsx)("div",{children:c.map((function(A){return Object(n.jsx)(Y,{user:A,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},A.id)}))})]})},$=t(40),AA=t(9),eA=t(135),tA=Object(eA.a)((function(A){return A.usersPage.users}),(function(A){return A.filter((function(A){return!0}))})),nA=function(A){return A.usersPage.pageSize},rA=function(A){return A.usersPage.totalUsersCount},aA=function(A){return A.usersPage.currentPage},cA=function(A){return A.usersPage.isFetching},sA=function(A){return A.usersPage.followingInProgress},iA=function(A){Object(u.a)(t,A);var e=Object(l.a)(t);function t(){var A;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(A=e.call.apply(e,[this].concat(r))).onPageChanged=function(e){var t=A.props.pageSize;A.props.getUsers(e,t)},A}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var A=this.props,e=A.currentPage,t=A.pageSize;this.props.getUsers(e,t)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.isFetching?Object(n.jsx)($.a,{}):null,Object(n.jsx)(V,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),t}(a.a.Component),oA=Object(AA.d)(Object(O.b)((function(A){return{users:tA(A),pageSize:nA(A),totalUsersCount:rA(A),currentPage:aA(A),isFetching:cA(A),followingInProgress:sA(A)}}),{follow:function(A){return function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(t,A,w.c.follow.bind(w.c),E);case 1:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},unfollow:function(A){return function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(t,A,w.c.unfollow.bind(w.c),F);case 1:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},setCurrentPage:U,toggleFollowingProgress:G,getUsers:function(A,e){return function(){var t=Object(m.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(T(!0)),n(U(A)),t.next=4,w.c.getUsers(A,e);case 4:r=t.sent,n(T(!1)),n((c=r.items,{type:S,users:c})),n((a=r.totalCount,{type:k,count:a}));case 8:case"end":return t.stop()}var a,c}),t)})));return function(A){return t.apply(this,arguments)}}()}}))(iA),uA=t(94),lA=t.n(uA),dA=function(A){return Object(n.jsxs)("header",{className:lA.a.header,children:[Object(n.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-uH0ttxOHBdtpV-G3iokQRz1bRVZu5dQfg&usqp=CAU",alt:"header"}),Object(n.jsx)("div",{className:lA.a.loginBlock,children:A.isAuth?Object(n.jsxs)("div",{children:[A.login," - ",Object(n.jsx)("button",{onClick:A.logout,children:"Log out"})]}):Object(n.jsx)(f.b,{to:"/login",children:"Login"})})]})},jA=t(45),fA="samurai/auth/SET_USER_DATA",bA={id:null,login:null,email:null,isAuth:!1},pA=function(A,e,t,n){return{type:fA,payload:{userId:A,email:e,login:t,isAuth:n}}},OA=function(){return function(){var A=Object(m.a)(h.a.mark((function A(e){var t,n,r,a,c;return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,w.a.me();case 2:0===(t=A.sent).data.resultCode&&(n=t.data.data,r=n.id,a=n.login,c=n.email,e(pA(r,a,c,!0)));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},gA=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bA,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case fA:return Object(x.a)(Object(x.a)({},A),e.payload);default:return A}},hA=function(A){Object(u.a)(t,A);var e=Object(l.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(n.jsx)(dA,Object(x.a)({},this.props))}}]),t}(a.a.Component),mA=Object(O.b)((function(A){return{isAuth:A.auth.isAuth,login:A.auth.login}}),{logout:function(){return function(){var A=Object(m.a)(h.a.mark((function A(e){return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,w.a.logout();case 2:0===A.sent.data.resultCode&&e(pA(null,null,null,!1));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()}})(hA),vA=t(128),xA=t(33),wA=t(57),CA=t(53),PA=t.n(CA),IA=Object(vA.a)({form:"login"})((function(A){var e=A.handleSubmit,t=A.error;return Object(n.jsxs)("form",{onSubmit:e,children:[Object(xA.c)("Email","email",[wA.b],xA.a),Object(xA.c)("Password","password",[wA.b],xA.a,{type:"password"}),Object(xA.c)(null,"rememberMe",[],xA.a,{type:"checkbox"},"remember me"),t&&Object(n.jsx)("div",{className:PA.a.formSummeryError,children:t}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Enter"})})]})})),SA=Object(O.b)((function(A){return{isAuth:A.auth.isAuth}}),{login:function(A,e,t){return function(){var n=Object(m.a)(h.a.mark((function n(r){var a,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.login(A,e,t);case 2:0===(a=n.sent).data.resultCode?r(OA()):(c=a.data.messages.length>0?a.data.messages[0]:"Some error",r(Object(jA.a)("login",{_error:c})));case 4:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}()}})((function(A){return A.isAuth?Object(n.jsx)(p.a,{to:"/profile"}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsx)(IA,{onSubmit:function(e){A.login(e.email,e.password,e.rememberMe)}})]})})),yA="INITILAZED_SUCCES",kA={initialized:!1},KA=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kA,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case yA:return Object(x.a)(Object(x.a)({},A),{},{initialized:!0});default:return A}},LA=function(A){return function(e){return Object(n.jsx)(a.a.Suspense,{fallback:Object(n.jsx)($.a,{}),children:Object(n.jsx)(A,Object(x.a)({},e))})}},zA=a.a.lazy((function(){return t.e(4).then(t.bind(null,297))})),EA=a.a.lazy((function(){return t.e(3).then(t.bind(null,296))})),FA=function(A){Object(u.a)(t,A);var e=Object(l.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(mA,{}),Object(n.jsx)(b,{}),Object(n.jsxs)("div",{className:"app-wrapper-content",children:[Object(n.jsx)(p.b,{path:"/dialogs",render:LA(zA)}),Object(n.jsx)(p.b,{path:"/profile/:userId?",render:LA(EA)}),Object(n.jsx)(p.b,{path:"/users",render:function(){return Object(n.jsx)(oA,{})}}),Object(n.jsx)(p.b,{path:"/login",render:function(){return Object(n.jsx)(SA,{})}})]})]}):Object(n.jsx)($.a,{})}}]),t}(r.Component),UA=Object(AA.d)(p.f,Object(O.b)((function(A){return{initialized:A.app.initialized}}),{initializeApp:function(){return function(A){var e=A(OA());Promise.all([e]).then((function(){A({type:yA})}))}}}))(FA),TA=function(A){A&&A instanceof Function&&t.e(5).then(t.bind(null,295)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(A),n(A),r(A),a(A),c(A)}))},GA=t(97),_A=t(127),NA={},BA=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:NA;return A},qA=t(137),HA=t(130),MA=Object(AA.c)({profilePage:GA.b,dialogsPage:_A.a,sidebar:BA,usersPage:N,auth:gA,form:HA.a,app:KA}),DA=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||AA.d,JA=Object(AA.e)(MA,DA(Object(AA.a)(qA.a)));window.___store___=JA;var WA=JA;s.a.render(Object(n.jsx)(f.a,{children:Object(n.jsx)(O.a,{store:WA,children:Object(n.jsx)(UA,{})})}),document.getElementById("root")),TA()},33:function(A,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return l})),t.d(e,"c",(function(){return d}));var n=t(5),r=t(56),a=t(1),c=(t(0),t(53)),s=t.n(c),i=(t(57),t(90)),o=function(A){A.input;var e=A.meta,t=e.touched,n=e.error,r=A.children,c=t&&n;return Object(a.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:""),children:[Object(a.jsx)("div",{children:r}),c&&Object(a.jsx)("span",{children:n})]})},u=function(A){var e=A.input;A.meta,A.child,Object(r.a)(A,["input","meta","child"]);return Object(a.jsxs)(o,Object(n.a)(Object(n.a)({},A),{},{children:[Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({},e),A))," "]}))},l=function(A){var e=A.input;A.meta,A.child,Object(r.a)(A,["input","meta","child"]);return Object(a.jsxs)(o,Object(n.a)(Object(n.a)({},A),{},{children:[Object(a.jsx)("input",Object(n.a)(Object(n.a)({},e),A))," "]}))},d=function(A,e,t,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(i.a,Object(n.a)({placeholder:A,name:e,validate:t,component:r},c))," ",s]})}},40:function(A,e,t){"use strict";var n=t(1);t(0),e.a=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"data:image/gif;base64,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"})})}},53:function(A,e,t){A.exports={formControl:"FormsControls_formControl__1rAxd",error:"FormsControls_error__1sJMo",formSummeryError:"FormsControls_formSummeryError__3z937"}},57:function(A,e,t){"use strict";t.d(e,"b",(function(){return n})),t.d(e,"a",(function(){return r}));var n=function(A){if(!A)return"Field is required"},r=function(A){return function(e){if(e.length>A)return"Max lenght is ".concat(A," symbols")}}},71:function(A,e,t){A.exports={paginator:"Paginator_paginator__2t25h",pageNumber:"Paginator_pageNumber__Wt7_x",selectedPage:"Paginator_selectedPage__3v7Te"}},94:function(A,e,t){A.exports={header:"Header_header__1dpD9",loginBlock:"Header_loginBlock__UctD6"}},97:function(A,e,t){"use strict";t.d(e,"a",(function(){return f})),t.d(e,"d",(function(){return p})),t.d(e,"c",(function(){return O})),t.d(e,"e",(function(){return g}));var n=t(10),r=t.n(n),a=t(19),c=t(44),s=t(5),i=t(15),o="ADD-POST",u="SET_USER_PROFILE",l="SET_STATUS",d="DELETE_POST",j={posts:[{id:1,message:"How is your cat",likesCount:12},{id:2,message:"Hi",likesCount:13},{id:3,message:"Good",likesCount:14},{id:4,message:"Nice",likesCount:15}],profile:null,status:""},f=function(A){return{type:o,newPostText:A}},b=function(A){return{type:l,status:A}},p=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getProfile(A);case 2:n=e.sent,t((r=n.data,{type:u,profile:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(A){return e.apply(this,arguments)}}()},O=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.getStatus(A);case 2:n=e.sent,t(b(n.data));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},g=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.updateStatus(A);case 2:0===e.sent.data.resultCode&&t(b(A));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()};e.b=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:var t={id:5,message:e.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},A),{},{posts:[].concat(Object(c.a)(A.posts),[t]),newPostText:""});case l:return Object(s.a)(Object(s.a)({},A),{},{status:e.status});case u:return Object(s.a)(Object(s.a)({},A),{},{profile:e.profile});case d:return Object(s.a)(Object(s.a)({},A),{},{posts:A.posts.filter((function(A){return A.id!=e.postId}))});default:return A}}}},[[290,1,2]]]);
//# sourceMappingURL=main.06b18979.chunk.js.map