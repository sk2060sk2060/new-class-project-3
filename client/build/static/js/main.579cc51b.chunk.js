(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){},191:function(e,t,a){e.exports=a.p+"static/media/recyclelogo.cf582897.jpg"},195:function(e,t,a){e.exports=a.p+"static/media/owlartcraft.27ff0c25.jpg"},196:function(e,t,a){e.exports=a.p+"static/media/bottleholder.4eaa5944.jpg"},197:function(e,t,a){e.exports=a.p+"static/media/bird-feeder-1.51a56fa0.jpg"},198:function(e,t,a){e.exports=a.p+"static/media/minion-flower-planter-pot.2d3d17e0.jpg"},199:function(e,t,a){e.exports=a.p+"static/media/tire-project.3e5a0aec.jpg"},200:function(e,t,a){e.exports=a.p+"static/media/light-bulb-art.71967edb.png"},203:function(e,t){},207:function(e,t,a){e.exports=a(269)},212:function(e,t,a){},233:function(e,t,a){},267:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(58),i=a(62),s=a(60),m=a(189),u=a(112);a(212);var d=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var p=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},h=a(23),g=a.n(h),f=a(41),E=a(34),v=a.n(E),b={getMaps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:48.8583701,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2.2922926;return console.log(e,t),v.a.get("https:api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=".concat(e,"&longitude=").concat(t))},getMaterial:function(){var e=Object(f.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.earth911.com/earth911.searchMaterials?api_key=7827591ea2eb59e9&query=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getID:function(){var e=Object(f.a)(g.a.mark(function e(t){var a,n,r=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:39.742043,n=r.length>2&&void 0!==r[2]?r[2]:-104.991531,e.next=4,v.a.get("https:api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=".concat(a,"&longitude=").concat(n,"&").concat(t.map(function(e){return"material_id[]="+e+"&"}).join("")));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getSave:function(e){console.log(e),v()({method:"post",url:"/api/users/fav",data:{favorite:e}})},getAddress:function(){var e=Object(f.a)(g.a.mark(function e(t,a){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://us1.locationiq.com/v1/reverse.php?key=ec3dca5fbce16a&lat=".concat(t,"&lon=").concat(a,"&format=json"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()};function y(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function x(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function w(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(233);function j(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function N(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function O(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function S(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function k(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var C=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({}),i=Object(u.a)(c,2),h=i[0],g=i[1];function f(){b.getBooks().then(function(e){return l([])}).catch(function(e){return console.log(e)})}function E(e){var t=e.target,a=t.name,n=t.value;g(Object(m.a)({},h,Object(s.a)({},a,n)))}return Object(n.useEffect)(function(){f()},[]),r.a.createElement(y,{fluid:!0},r.a.createElement(x,null,r.a.createElement(w,{size:"md-6"},r.a.createElement(p,null,r.a.createElement("h1",null,"What Books Should I Read?")),r.a.createElement("form",null,r.a.createElement(O,{onChange:E,name:"title",placeholder:"Title (required)"}),r.a.createElement(O,{onChange:E,name:"author",placeholder:"Author (required)"}),r.a.createElement(S,{onChange:E,name:"synopsis",placeholder:"Synopsis (Optional)"}),r.a.createElement(k,{disabled:!(h.author&&h.title),onClick:function(e){e.preventDefault(),h.title&&h.author&&b.saveBook({title:h.title,author:h.author,synopsis:h.synopsis}).then(function(e){return f()}).catch(function(e){return console.log(e)})}},"Submit Book"))),r.a.createElement(w,{size:"md-6 sm-12"},r.a.createElement(p,null,r.a.createElement("h1",null,"Books On My List")),a.length?r.a.createElement(j,null,a.map(function(e){return r.a.createElement(N,{key:e._id},r.a.createElement(o.b,{to:"/books/"+e._id},r.a.createElement("strong",null,e.title," by ",e.author)),r.a.createElement(d,{onClick:function(){return t=e._id,void b.deleteBook(t).then(function(e){return f()}).catch(function(e){return console.log(e)});var t}}))})):r.a.createElement("h3",null,"No Results to Display"))))};var A=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),l=a[0],c=a[1],s=Object(i.g)().id;return Object(n.useEffect)(function(){b.getBook(s).then(function(e){return c(e.data)}).catch(function(e){return console.log(e)})},[]),r.a.createElement(y,{fluid:!0},r.a.createElement(x,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(p,null,r.a.createElement("h1",null,l.title," by ",l.author)))),r.a.createElement(x,null,r.a.createElement(w,{size:"md-10 md-offset-1"},r.a.createElement("article",null,r.a.createElement("h1",null,"Synopsis"),r.a.createElement("p",null,l.synopsis)))),r.a.createElement(x,null,r.a.createElement(w,{size:"md-2"},r.a.createElement(o.b,{to:"/"},"\u2190 Back to Authors"))))};var R=function(){return r.a.createElement(y,{fluid:!0},r.a.createElement(x,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(p,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},L=a(47),P=a(48),W=a(51),B=a(49),I=a(52),T=a(93),z=a(167),M=a(191),D=a.n(M),F=Object(z.a)({logo:{maxWidth:100,maxHeight:100},logoLocation:{margin:"auto"}});var _=function(){var e=F();return r.a.createElement("div",null,r.a.createElement(T.a,{className:e.logoLocation},r.a.createElement("img",{src:D.a,alt:"logo",className:e.logo,mx:"auto"})))},G=(a(168),function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(W.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).state={login:!1,email:"",password:""},a.handleChangeEmail=function(e){a.setState({email:e.target.value})},a.handleChangePassword=function(e){a.setState({password:e.target.value})},a.handleSubmit=function(){var e=Object(f.a)(g.a.mark(function e(t){var n,r,l,c,o,i,s,m;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,l=n.password,c={email:r,password:l},console.log("userdata:",c),e.next=6,v.a.post("/api/users/register",c);case 6:o=e.sent,i=o.data,s=i.status,m=i.message,console.log({status:s,message:m}),"ok"===s&&a.setState({login:!0});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return!0===this.state.login?r.a.createElement(i.a,{to:"/mainpage"}):r.a.createElement("div",null,r.a.createElement("div",{className:"container center"},r.a.createElement("div",{className:"card has-text-centered is-wide card-content",id:"registerbox"}," ",r.a.createElement("h1",{className:"go-green"},"Be Green"),r.a.createElement(_,null),r.a.createElement("form",{className:"login animated fadeIn delay-0.5s"}," ",r.a.createElement("div",{className:"field"},"If you have not registered, please do so now.",r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{id:"einput",onChange:this.handleChangeEmail,value:this.state.email,type:"email",placeholder:"Email",name:"email"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{id:"pinput",onChange:this.handleChangePassword,value:this.state.password,type:"password",placeholder:"Password",name:"password"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-info is-light",id:"registerbtn",onClick:this.handleSubmit},"Register"))),r.a.createElement("p",null,"Or login"," ",r.a.createElement("a",{href:"/login",id:"loginbtn"},"here"))))))}}]),t}(n.Component)),q=a(169),H=a(170),Q=a(144),Y=a(171);Object(z.a)(function(e){return{root:{flexGrow:1},typography:{padding:e.spacing(2),color:"white"},listItem:{padding:e.spacing(.02),color:"white"},list:{marginLeft:"8px",paddingLeft:"8px"}}});var J=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(W.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",login:!1},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;console.log(n,r),a.setState(Object(s.a)({},n,r))},a.handleSubmit=function(){var e=Object(f.a)(g.a.mark(function e(t){var n,r,l,c,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:a.state.email,password:a.state.password},console.log("send login userdata:",n),e.next=5,v.a.post("/api/users/checkuser",n);case 5:r=e.sent,l=r.data,c=l.status,o=l.message,console.log({status:c,message:o}),"ok"===c&&a.setState({login:!0});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return!0===this.state.login?r.a.createElement(i.a,{to:"/mainpage"}):r.a.createElement("div",null,r.a.createElement("div",{className:"container center"},r.a.createElement("div",{className:"card has-text-centered is-wide card-content",id:"loginbox"},r.a.createElement("h1",{className:"go-green"},"Be Green"),r.a.createElement(_,null),r.a.createElement("form",{className:"login animated fadeIn delay-0.5s"},r.a.createElement("div",{className:"field"},"Login",r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{id:"einput",onChange:this.handleChange,value:this.state.email,type:"email",placeholder:"Email",name:"email"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{id:"pinput",onChange:this.handleChange,value:this.state.password,type:"password",placeholder:"Password",name:"password"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-info is-light",onClick:this.handleSubmit},"Login"))),r.a.createElement("p",null,"Or Signup ",r.a.createElement("a",{href:"/register"},"here"))))))}}]),t}(n.Component),K=a(141),U=Object(z.a)({title:{flexGrow:1,textAlign:"center",color:"#194D33",paddingBottom:"8px",fontWeight:"bolder",fontFamily:"Arial"},textContent:{textAlign:"center",fontWeight:"bolder",color:"#0A3A22"}});var X=function(){var e=U();return r.a.createElement(K.a,{mt:2,mb:1},r.a.createElement(K.a,{component:"div",pt:1,pb:1},r.a.createElement(T.a,{variant:"h2",className:e.title},"Be Green")),r.a.createElement(K.a,{component:"div",pt:1,pb:1},r.a.createElement(T.a,{variant:"h6",className:e.textContent},"Change your habits. Change the world.")))},Z=a(172),V=a(173),$=a(174),ee=a(188),te=a(176),ae=a(177),ne=a(192),re=a.n(ne),le=Object(z.a)(function(e){return{heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},cardStyle:{margin:"20px",background:"hsla(148, 43%, 42%, 0.8)",width:345},expansionPanel:{background:"hsla(148, 43%, 42%, 0.8)"}}});function ce(e){return r.a.createElement(q.a,Object.assign({button:!0,component:"a"},e))}var oe=function(){var e=le();return r.a.createElement(Z.a,{className:e.cardStyle},r.a.createElement(V.a,null,r.a.createElement(T.a,{variant:"h6"},"How To Recycle"),r.a.createElement(T.a,{variant:"body2"},"Recycling can be confusing. Can you recycle this or that? Where does it go? But there's no need to stress anymore. Get your answers here.")),r.a.createElement($.a,null,r.a.createElement("div",null,r.a.createElement(ee.a,{className:e.expansionPanel},r.a.createElement(te.a,{expandIcon:r.a.createElement(re.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(T.a,{className:e.heading},"Materials")),r.a.createElement(ae.a,null,r.a.createElement(Q.a,{component:"nav","aria-label":"secondary mailbox folders"},r.a.createElement(ce,{href:"http://www.statemetalindustries.com/types-aluminum-products-can-recycled/"},r.a.createElement(Y.a,{primary:"Aluminum"})),r.a.createElement(ce,{href:"https://www.recycleandrecoverplastics.org/consumers/kids-recycling/plastics-can-become/"},r.a.createElement(Y.a,{primary:"Plastic"})),r.a.createElement(ce,{href:"https://www.azocleantech.com/article.aspx?ArticleID=585"},r.a.createElement(Y.a,{primary:"Other >>"}))))))))},ie=Object(z.a)(function(e){return{heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},cardStyle:{margin:"20px",background:"hsla(148, 43%, 42%, 0.8)",width:345},cardAction:{background:"hsla(148, 43%, 42%, 0.8)"}}});function se(e){return r.a.createElement(q.a,Object.assign({button:!0,component:"a"},e))}var me=function(){var e=ie();return r.a.createElement(Z.a,{className:e.cardStyle},r.a.createElement(V.a,null,r.a.createElement(T.a,{variant:"h6"},"Find Recyle Locations Near You"),r.a.createElement(T.a,{variant:"body2"},"Does your community not have a recycle center? No problem. Search for one here and do your part.")),r.a.createElement($.a,{className:e.cardAction},r.a.createElement("div",null,r.a.createElement(se,{href:"/maps"},r.a.createElement(Y.a,{primary:"Search >>"})))))},ue=Object(z.a)(function(e){return{heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},cardStyle:{margin:"20px",background:"hsla(148, 43%, 42%, 0.8)",width:345},cardAction:{background:"hsla(148, 43%, 42%, 0.8)"}}});function de(e){return r.a.createElement(q.a,Object.assign({button:!0,component:"a"},e))}var pe=function(){var e=ue();return r.a.createElement(Z.a,{className:e.cardStyle},r.a.createElement(V.a,null,r.a.createElement(T.a,{variant:"h6"},"Find Out More"),r.a.createElement(T.a,{variant:"body2"},"Search Environmental News.")),r.a.createElement($.a,{className:e.cardAction},r.a.createElement("div",null,r.a.createElement(de,{href:"/articles"},r.a.createElement(Y.a,{primary:"Search Articles >>"})))))},he=a(193),ge=a.n(he),fe=a(126),Ee=a(195),ve=a.n(Ee),be=a(196),ye=a.n(be),xe=a(197),we=a.n(xe),je=a(198),Ne=a.n(je),Oe=a(199),Se=a.n(Oe),ke=a(200),Ce=a.n(ke),Ae=Object(z.a)(function(e){return{heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},cardStyle:{margin:"20px",textAlign:"center",background:"hsla(148, 43%, 42%, 0.8)",width:345},carouselInner:{height:"250px",AlignItems:"center",justifyContent:"center"},carouselImage:{height:"200px",width:"200px",marginTop:"10px",marginLeft:"auto",marginRight:"auto"},imageHeader:{marginTop:"6px"}}});function Re(e){var t=Ae();return r.a.createElement(fe.a,{className:t.carouselInner},r.a.createElement("img",{src:e.item.image,alt:"recycle project",className:t.carouselImage}),r.a.createElement("h6",{className:t.imageHeader},e.item.name))}var Le=function(){var e=Ae(),t=[{name:"Owl Decoration Project",image:ve.a},{name:"Pen Holder Project",image:ye.a},{name:"Bird Feeder Project",image:we.a},{name:"Minion Flower Planter Pot Project",image:Ne.a},{name:"Tire Planters Project",image:Se.a},{name:"Light Bulb Art Project",image:Ce.a}];return r.a.createElement(Z.a,{className:e.cardStyle},r.a.createElement(V.a,null,r.a.createElement(T.a,{variant:"h6"},"Recycle Projects")),r.a.createElement($.a,null,r.a.createElement("div",null,r.a.createElement(ge.a,null,t.map(function(e){return r.a.createElement(Re,{item:e})})))))},Pe=Object(z.a)(function(e){return{heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},cardStyle:{margin:"20px",background:"hsla(148, 43%, 42%, 0.8)",width:345}}});var We=function(){var e=Pe();return r.a.createElement(Z.a,{className:e.cardStyle},r.a.createElement(V.a,null,r.a.createElement(T.a,{variant:"h6"},"Learn More")),r.a.createElement($.a,null,r.a.createElement("div",{className:"video",style:{position:"relative",paddingBottom:"50%",paddingTop:2,height:300}},r.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/OasbYWF4_S8",frameBorder:"0"}))))},Be=Object(z.a)(function(e){return{heading:{paddingLeft:"2px",marginLeft:"10px"},cardStyle:{margin:"20px",background:"hsla(148, 43%, 42%, 0.8)",width:345},expansionPanel:{background:"hsla(148, 43%, 42%, 0.8)"}}});var Ie=function(){var e=Be();return r.a.createElement(Z.a,{className:e.cardStyle},r.a.createElement(V.a,null,r.a.createElement(T.a,{variant:"h6"},"Why Recycle?"),r.a.createElement(T.a,{variant:"body2"},"To presereve the environment and sustain a stable and funcitonal ecosystem.")),r.a.createElement($.a,null,r.a.createElement("div",null,r.a.createElement(T.a,{className:e.heading,pl:4,variant:"subtitle1"},"Benefits of Recycling"),r.a.createElement(Q.a,null,r.a.createElement(q.a,null,r.a.createElement(T.a,{variant:"body2"},"1. Conserving natural resources")),r.a.createElement(q.a,null,r.a.createElement(T.a,{variant:"body2"},"2. Protecting ecosystems and wildlife")),r.a.createElement(q.a,null,r.a.createElement(T.a,{variant:"body2"},"3. Reduces demand for raw materials")),r.a.createElement(q.a,null,r.a.createElement(T.a,{variant:"body2"},"4. Saves energy")),r.a.createElement(q.a,null,r.a.createElement(T.a,{variant:"body2"},"5. Cuts climate-changing carbon emissions")),r.a.createElement(q.a,null,r.a.createElement(T.a,{variant:"body2"},"6. Cheaper than waste collection and disposal"))))))},Te=Object(z.a)(function(e){return{heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},cardStyle:{margin:"20px",background:"hsla(148, 43%, 42%, 0.8)",width:345},cardAction:{background:"hsla(148, 43%, 42%, 0.8)"}}});function ze(e){return r.a.createElement(q.a,Object.assign({button:!0,component:"a"},e))}var Me=function(){var e=Te();return r.a.createElement(Z.a,{className:e.cardStyle},r.a.createElement(V.a,null,r.a.createElement(T.a,{variant:"h6"},"Live Chat Room"),r.a.createElement(T.a,{variant:"body2"},"Be inspired. Share your story.")),r.a.createElement($.a,{className:e.cardAction},r.a.createElement("div",null,r.a.createElement(ze,{href:"/messages"},r.a.createElement(Y.a,{primary:"Chat It Up >>"})))))},De=Object(z.a)(function(e){return{root:{width:"100%",marginBottom:"40px",marginTop:"40px",marginLeft:"20px",marginRight:"20px"}}});var Fe=function(){var e=De();return r.a.createElement("div",{className:e.root},r.a.createElement(H.a,{container:!0},r.a.createElement(H.a,{item:!0,md:4},r.a.createElement(oe,null)),r.a.createElement(H.a,{item:!0,md:4},r.a.createElement(me,null)),r.a.createElement(H.a,{item:!0,md:4},r.a.createElement(pe,null))),r.a.createElement(H.a,{container:!0},r.a.createElement(H.a,{item:!0,md:4},r.a.createElement(Ie,null)),r.a.createElement(H.a,{item:!0,md:4},r.a.createElement(Le,null)),r.a.createElement(H.a,{item:!0,md:4},r.a.createElement(We,null))),r.a.createElement(H.a,{container:!0},r.a.createElement(H.a,{item:!0,md:4},r.a.createElement(Me,null))))};var _e=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(X,null),r.a.createElement(Fe,null))},Ge=a(201),qe=a.n(Ge),He=(a(267),a(268),function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(W.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).state={done:!1,address:[]},a.getAddress=function(){var e=Object(f.a)(g.a.mark(function e(t,n){var r,l,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAddress(t[1],t[2]);case 2:r=e.sent,l=r.data.display_name,(c=a.state.address)[n]=l,a.setState({address:c});case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data;return console.log({data:t}),console.log("render Adress"),r.a.createElement("div",null,r.a.createElement("ol",{style:{listStyleType:"none"}},t.map(function(t,a){e.getAddress(t,a);var n=e.state.address[a]||"----";return r.a.createElement("li",{style:{margin:"8px",padding:"6px",fontSize:"20px",color:"white"}},r.a.createElement("strong",null,"Location: ")," ",t[0],r.a.createElement("br",null),r.a.createElement("strong",null,"Address: ")," ",n,r.a.createElement("br",null),r.a.createElement("strong",null,"Distance: ")," ",t[3]," miles")})))}}]),t}(n.Component)),Qe=function(e){var t=e.text,a=e.lat,n=e.lng,l=e.saveFav;return r.a.createElement("div",{key:"".concat(a," ").concat(n),style:{color:"white",background:"grey",padding:"15px 10px",display:"inline-flex",textAlign:"center",alignItems:"center",justifyContent:"center",borderRadius:"100%",transform:"translate(-50%, -50%)"},onClick:function(){return l([t,a,n])}},t)},Ye=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(W.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).state={topic:"",recycleLocations:[],center:{lat:37.7576792,lng:-122.5078115}},a.componentDidMount=function(){navigator.geolocation.getCurrentPosition(a.success,function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message))},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}),a.getMaps()},a.success=function(e){var t=e.coords;console.log("Your current position is:"),console.log("Latitude : ".concat(t.latitude)),console.log("Longitude: ".concat(t.longitude)),console.log("More or less ".concat(t.accuracy," meters.")),a.setState({center:{lat:t.latitude,lng:t.longitude}}),console.log("im in success call"),console.log(a.state.center.lat),console.log(a.state.center.lng),a.getMaps(a.state.center.lat,a.state.center.lng)},a.getMaps=function(){b.getMaps().then(function(e){return console.log(e)})},a.getMaterial=function(){var e=Object(f.a)(g.a.mark(function e(t){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.saveLoc,e.next=3,b.getMaterial(t).then(function(e){e=e.data,console.log("BACK FROM GET MATERIAL: ",e);var t=e.result.map(function(e){return e.material_id});b.getID(t,a.state.center.lat,a.state.center.lng).then(function(e){e=e.data.result,console.log("back from getID: ",e);var t=e.map(function(e,t){return console.log(e),[e.description,e.latitude,e.longitude,e.distance,t+1]});n(t)})});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.saveLoc=function(e){console.log(e);var t={lat:e[0][1],lng:e[0][2]};a.setState({recycleLocations:e,center:t})},a.handleSaveFav=function(e){b.getSave(e)},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;console.log("--\x3e",n,r),a.setState(Object(s.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state),a.getMaterial(a.state.topic)},a}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.state;return console.log({center:e}),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleInputChange,name:"topic",className:"input",placeholder:"Material to Recycle"}),r.a.createElement("button",{className:"searchbtn",onClick:this.handleFormSubmit},"Search Material"),r.a.createElement("div",{style:{height:"60vh",width:"60%"}},r.a.createElement(qe.a,{bootstrapURLKeys:{key:"AIzaSyBZHzPiRourRDRoivXdhrjA4zdOhqEVYcQ"},defaultCenter:this.state.center,defaultZoom:this.props.zoom,center:this.state.center},this.state.recycleLocations.map(function(e){return r.a.createElement(Qe,{lat:e[1],lng:e[2],text:e[0]})}))),r.a.createElement(He,{data:this.state.recycleLocations.slice(0,5)}))}}]),t}(n.Component);Ye.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var Je=Ye,Ke=a(180),Ue=a(179),Xe=a(202),Ze=a.n(Xe);function Ve(e){return r.a.createElement(q.a,Object.assign({button:!0,component:"a"},e))}var $e=function(e){return r.a.createElement(q.a,{style:{fontWeight:700}},r.a.createElement(Ue.a,{style:{color:"green"}},r.a.createElement(Ze.a,null)),r.a.createElement(Ve,{href:e.url,target:"_blank",style:{display:"block",width:"100%",fontWeight:"bolder"}},r.a.createElement(Y.a,{disableTypography:!0,variant:"h4",primary:e.description}),r.a.createElement(Y.a,{secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{component:"span",variant:"body1",color:"textPrimary"},"Abstract:")," "+e.abstract)})))},et="https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_fields=news_desk&fq=environment&api-key=PG5A8XiRNxl8WhFaNTCE8aLD7GDOb3WE&q=",tt=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(W.a)(this,Object(B.a)(t).call(this,e))).handleChange=function(e){console.log(e.target.value),a.setState({userQuery:e.target.value})},a.SearchArticles=function(){a.setState({isLoading:!0}),a.setState({userQuery:""}),""!==a.state.userQuery&&v.a.get(et+a.state.userQuery).then(function(e){console.log(e),console.log(e.data.response.docs);var t=e.data.response.docs;a.setState({articles:t})}).catch(function(e){return a.setState({error:e,isLoading:!1})})},a.state={hits:[],isLoading:!1,error:null,userQuery:"",articles:[]},a}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(Ke.a,{style:{marginTop:"15px"},id:"standard-name",label:"Environmental Search Topic",inputProps:{style:{fontFamily:"Arial",fontWeight:600,fontSize:"20px"}},InputLabelProps:{style:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",width:"100%",fontWeight:500}},value:this.state.userQuery,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{style:{borderRadius:"4px"},onClick:function(){return e.SearchArticles()}},"Search"),r.a.createElement(Q.a,null,this.state.articles.map(function(e){return r.a.createElement($e,{description:e.headline.main,url:e.web_url,abstract:e.abstract})})))}}]),t}(n.Component),at=a(203),nt=a.n(at);var rt=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:["/active"]},r.a.createElement(C,null)),r.a.createElement(i.b,{exact:!0,path:["/register"]},r.a.createElement(G,null)),r.a.createElement(i.b,{exact:!0,path:["/","/login"]},r.a.createElement(J,null)),r.a.createElement(i.b,{exact:!0,path:"/books/:id"},r.a.createElement(A,null)),r.a.createElement(i.b,{exact:!0,path:["/mainpage"]},r.a.createElement(_e,null)),r.a.createElement(i.b,{exact:!0,path:["/maps"]},r.a.createElement(Je,null)),r.a.createElement(i.b,{exact:!0,path:["/articles"]},r.a.createElement(tt,null)),r.a.createElement(i.b,{exact:!0,path:["/messages"]},r.a.createElement(nt.a,null)),r.a.createElement(i.b,null,r.a.createElement(R,null)))))};c.a.render(r.a.createElement(rt,null),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.579cc51b.chunk.js.map