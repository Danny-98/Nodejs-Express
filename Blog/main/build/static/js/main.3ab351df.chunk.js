(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){e.exports=a(85)},47:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),r=a.n(l),o=(a(47),a(14)),i=a.n(o),m="#446965",s="#ffffff",u="#dbf4f3",d=a(2);a(65),a(10),a(66);function E(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],r=a[1],o=e.onSearch,i=e.onBlur,m=Object(n.useRef)(void 0);return c.a.createElement("input",{onBlur:i,onChange:function(e){var t=e.target.value;m.current&&clearTimeout(m.current),r(t),m.current=setTimeout((function(){o(t)}),300)},className:"seach_bar",value:l,type:"text",placeholder:"Search...."})}var p=a(8),h=a(5),f=function(e){return c.a.createElement("div",null,c.a.createElement(h.b,{className:"btn_MenuItem",to:{pathname:e.link}},c.a.createElement("span",null,e.text)))},g=c.a.memo((function(e){var t=e.data,a=Object(n.useState)([]),l=Object(d.a)(a,2),r=l[0],o=l[1],i=Object(n.useState)(!1),m=Object(d.a)(i,2),u=m[0],p=m[1];return c.a.createElement("div",{className:"Menu_container",style:{background:s}},c.a.createElement("nav",{className:"menuBar"},c.a.createElement(f,{text:"Home",link:"/"}),c.a.createElement(f,{text:"About",link:"/About"}),c.a.createElement(f,{text:"Contact",link:"/Contact"})),c.a.createElement("div",{className:"searchBar"},c.a.createElement(E,{onBlur:function(){p(!u)},onSearch:function(e){if(Array.isArray(t)){var a=t[0].filter((function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1}));console.log(a),o(""!==e?a:[])}}}),c.a.createElement("div",{className:"search-Value-Container"},r.length>0&&!1===u?r.map((function(e){return c.a.createElement(h.b,{className:"search-Item",key:e.pid,to:{pathname:"/".concat(e.title,"/Detail"),state:e}},c.a.createElement("h4",null,e.title))})):"")))})),b=Object(p.b)((function(e){return{data:e.fetchData.posts}}))(g);function v(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"copyright"}," \xa9 2020  Gemary Blog"),c.a.createElement("p",{className:"atribute"},"Theme by Gemary"))}function N(e){var t={background:m,width:"98%",height:"100%",borderRadius:"20px",margin:"auto"},a={color:u,width:"80%",fontSize:"4rem",margin:"2rem auto"};return c.a.createElement("div",{style:t},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{style:a},"GEMARY")),c.a.createElement(b,null),e.children,c.a.createElement(v,null))}a(35);var y=function(e){return c.a.createElement("div",{className:"item_container"},c.a.createElement("div",{className:"left_content"},c.a.createElement("div",{className:"wrap_img"},c.a.createElement("img",{className:"custom_Img",src:e.img?e.img:"https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/412/square_480/AccessibleReact_1000.png",alt:""}),c.a.createElement("p",null," ",e.date_created))),c.a.createElement("div",{className:"right_content"},c.a.createElement("h3",{className:"item_title"},e.title),c.a.createElement("div",{className:"description"},e.decription)))},_=a(20),O=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"About"),c.a.createElement("div",{className:"about-container"},c.a.createElement("h4",null,"Full name: \u0110\u1eb7ng Trung \u0110\u1ee9c"),c.a.createElement("h4",null," Nickname: gemary"),c.a.createElement("h4",null," D.O.B: 12/06/1998"),c.a.createElement("h4",null," Languages: Ti\u1ebfng Vi\u1ec7t , English")))},k=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Contact"),c.a.createElement("div",{className:"contact-container"},c.a.createElement("div",{className:"cv-block"},c.a.createElement("p",null,"You Can dowload my CV")," ",c.a.createElement("a",{href:"#1"},"here")),c.a.createElement("div",{className:"email-block"},c.a.createElement("p",null,"Email:ducdang1206@gmail.com"),c.a.createElement("p",null,"Github: ",c.a.createElement("a",{href:"https://github.com/gemary/"},"https://github.com/gemary/")))))},w=a(40),C=a.n(w),j=function(e){var t=e.location;return console.log(t.state.body),c.a.createElement("div",null,c.a.createElement("code",null,C()("".concat(t.state.body))))},S=function(e){var t=e.location.state,a=Object(n.useState)(1),l=Object(d.a)(a,2),r=l[0],o=l[1],i=5*(r-1),m=5*r,s=t.slice(i,m);return t.length<1?c.a.createElement("div",null,"Nothing Here!"):c.a.createElement("div",null,s.map((function(e){return c.a.createElement(h.b,{style:{textDecoration:"none",color:"black"},key:e.pid,to:{pathname:"/".concat(e.title,"/Detail"),state:e}},c.a.createElement(y,{author:e.author,tag:e.tag,date_created:e.date_created,date_updated:e.date_updated,title:e.title,body:e.body,decription:e.decription}))})),c.a.createElement(M,{onPageChange:function(e){o(e)},limits:5,pages:r,totalRows:t.length}))},D=function(){return c.a.createElement("div",{className:"item_container"},c.a.createElement("div",{className:"left_content"},c.a.createElement("div",{className:"wrap_img"},c.a.createElement("h1",null,"LOADING"))),c.a.createElement("div",{style:{backgroundColor:"white"}},c.a.createElement("div",{className:"description"})))},x=a(41),T=a.n(x);function A(){var e=Object(n.useRef)(null),t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)([]),m=Object(d.a)(o,2),s=m[0],u=m[1],E=Object(n.useState)(""),p=Object(d.a)(E,2),h=p[0],f=p[1],g=Object(n.useState)(""),b=Object(d.a)(g,2),v=b[0],N=b[1],y=Object(n.useState)(""),_=Object(d.a)(y,2),O=_[0],k=_[1],w=Object(n.useState)(""),C=Object(d.a)(w,2),j=C[0],S=C[1],D="https://gemary.herokuapp.com/";Object(n.useEffect)((function(){return i.a.get("".concat(D,"api/getAllPost")).then((function(e){u(e.data)})),function(){}}),[]);var x=function(e){var t=e.target;switch(t.name){case"title":f(t.value);break;case"bannerlink":S(t.value);break;case"des":k(t.value);break;case"tag":N(t.value)}},A=function(e){var t=e.title,a=e.id;return c.a.createElement("div",{style:{display:"flex",margin:"2rem"}},c.a.createElement("p",null,t),c.a.createElement("button",{onClick:function(){return function(e){console.log(e),console.log("running");var t={pid:e};i.a.post("".concat(D,"api/deletePost"),t)}(a)}},"Delete"))};return c.a.createElement("div",null,c.a.createElement("div",{className:"allPost"},s.map((function(e){return c.a.createElement(A,{key:e.pid,id:e.pid,title:e.title})}))),c.a.createElement("form",null,c.a.createElement("input",{type:"text",placeholder:"title",onChange:x,value:h,name:"title"}),c.a.createElement("input",{type:"text",placeholder:"Banner Link",onChange:x,value:j,name:"bannerlink"}),c.a.createElement("input",{type:"text",placeholder:"des",onChange:x,value:O,name:"des"}),c.a.createElement("input",{type:"text",placeholder:"tag",onChange:x,value:v,name:"tag"})),c.a.createElement("div",{className:"editor"},c.a.createElement(T.a,{ref:e,value:l,config:{readonly:!1},onBlur:function(e){return r(e)},onChange:function(e){}})),c.a.createElement("button",{onClick:function(){console.log("running");var e={title:h,body:l,des:O,tag:v,author:"gemary",banner:j};i.a.post("".concat(D,"api/createPost"),e).then((function(e){console.log(e)}))}},"Create"))}var R=Object(p.b)((function(e){return{data:e}}))((function(e){var t=Object(_.a)(e.data.fetchData.posts),a=void 0!==t[0]?t[0]:[],l=Object(n.useState)(1),r=Object(d.a)(l,2),o=r[0],i=r[1],m=5*(o-1),s=5*o,u=void 0!==t[0]?a.slice(m,s):[];return void 0===t[0]?c.a.createElement(D,null):c.a.createElement("div",null,u.map((function(e){return c.a.createElement(h.b,{style:{textDecoration:"none",color:"black"},key:e.pid,to:{pathname:"/".concat(e.title,"/Detail"),state:e}},c.a.createElement(y,{author:e.author,tag:e.tag,date_created:e.date_created,date_updated:e.date_updated,title:e.title,body:e.body,decription:e.decription}))})),c.a.createElement(M,{onPageChange:function(e){i(e)},limits:5,pages:o,totalRows:a.length}))}));var B=Object(p.b)((function(e){return{data:e.fetchData.posts}}))((function(e){var t=e.data,a=void 0!==t[0]?t[0]:[];return c.a.createElement("div",{className:"container_Content"},c.a.createElement("div",{className:"left_content"},e.children),c.a.createElement("div",{className:"right_content"},c.a.createElement("div",{className:"social_network_container"},c.a.createElement("h3",null,"Social Network"),c.a.createElement("div",{className:"icon_container"},c.a.createElement("a",{href:"https://www.facebook.com/"},c.a.createElement("img",{src:"https://raw.githubusercontent.com/ngxson/storeData/master/email_icons/icons8-facebook-48.png",alt:""})),c.a.createElement("a",{href:"https://github.com/gemary/"},c.a.createElement("img",{src:"https://raw.githubusercontent.com/ngxson/storeData/master/email_icons/icons8-github-48.png",alt:""})),c.a.createElement("a",{href:"https://www.linkedin.com/in/duc-dang-492114198/"},c.a.createElement("img",{src:"https://raw.githubusercontent.com/ngxson/storeData/master/email_icons/icons8-linkedin-48.png",alt:""})))),c.a.createElement("div",{className:"tag_container"},c.a.createElement("h3",null,"Tag"),c.a.createElement(P,{data:a})),c.a.createElement("div",{className:"recent_posts"},c.a.createElement("h3",null,"Recent Post"),c.a.createElement(L,{data:a}))))})),P=function(e){var t=e.data;return c.a.createElement("span",null,["JS","REACTJS","REACT NATIVE","FLUTTER","VUEJS","DOCKER"].map((function(e,a){var n;return n=t.filter((function(t){return t.tag.toLowerCase()===e.toLowerCase()})),c.a.createElement(h.b,{key:a,to:{pathname:"/".concat(e,"/posts"),state:n}},e)})))},L=function(e){var t=e.data;return c.a.createElement("span",null,t.map((function(e,t){var a=new Date(e.date_created);return t<5?c.a.createElement("section",{className:"recent-item",key:e.pid},c.a.createElement(h.b,{className:"customLink",to:{pathname:"/".concat(e.title,"/Detail"),state:e}},c.a.createElement("h4",null,e.title)),c.a.createElement("span",{className:"customDate"},"Create at:"," ".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear()))):null})))},M=(a(84),function(e){var t=e.totalRows,a=e.pages,n=e.limits,l=e.onPageChange,r=Math.ceil(t/n),o=Array(r).fill(1).map((function(e,t){return e+t})),i=function(e){l(e)};return c.a.createElement("div",{className:"pagination"},c.a.createElement("button",{disabled:a<=1,className:a<=1?"disabled hidden":"",onClick:function(){return i(a-1)}},"Previous"),o.map((function(e){return c.a.createElement("button",{className:e===a?"active hidden":"hidden",key:e,onClick:function(){return i(e)}},e)})),c.a.createElement("button",{className:a>=r?"disabled hidden":"",disabled:a>=r,onClick:function(){return i(a+1)}},"Next"))}),I=a(11);var V=function(){var e=Object(p.c)();return Object(n.useEffect)((function(){return i.a.get("/api/getAllPost").then((function(t){e({type:"FETCH_DB_POSTS",payload:t.data})})),function(){}}),[e]),c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement(N,null,c.a.createElement(B,null,c.a.createElement(I.c,null,c.a.createElement(I.a,{exact:!0,path:"/",component:R}),c.a.createElement(I.a,{path:"/About",component:O}),c.a.createElement(I.a,{path:"/Contact",component:k}),c.a.createElement(I.a,{path:"/:content/Detail",component:j}),c.a.createElement(I.a,{path:"/:tag/posts",component:S}),c.a.createElement(I.a,{path:"/admin/Dashboard",component:A}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(12),G={posts:[]},J=Object(F.b)({fetchData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DB_POSTS":return{posts:[].concat(Object(_.a)(e.posts),[t.payload])};case"REMOVE_DB_POSTS":default:return e}}}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.c,U=Object(F.d)(J,H());r.a.render(c.a.createElement(p.a,{store:U},c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);