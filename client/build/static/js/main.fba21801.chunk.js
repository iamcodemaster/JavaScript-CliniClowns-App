(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t){},125:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){},131:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(49),s=a.n(r),o=(a(59),a(2)),c=a(3),i=a(5),m=a(4),u=a(6),h=a(136),d=a(135),p=a(134),E=a(137),b=(a(61),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("token"),this.props.history.push("/")}},{key:"render",value:function(){var e=l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{to:"/login",className:"nav-link"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{to:"/register",className:"nav-link"},"Register")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{to:"/clowns",className:"nav-link"},"Clowns")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{to:"/videos",className:"nav-link"},"Videos"))),t=l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{to:"/profile",className:"nav-link"},"User")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{to:"/videochat",className:"nav-link"},"Video Chat")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#",onClick:this.logOut.bind(this),className:"nav-link"},"Logout")));return l.a.createElement("nav",null,localStorage.token?t:e)}}]),t}(n.Component)),f=Object(E.a)(b),v=(a(66),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f,null),l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center"},"Map")))}}]),t}(n.Component)),N=a(13),g=a(7),w=a(11),j=a.n(w),O=(a(86),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={email:"",password:""},e.onChange=e.onChange.bind(Object(g.a)(Object(g.a)(e))),e.onSubmit=e.onSubmit.bind(Object(g.a)(Object(g.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return j.a.post("users/login",{email:e.email,password:e.password}).then(function(e){return localStorage.setItem("token",e.data),e.data}).catch(function(e){console.log(e)})}({email:this.state.email,password:this.state.password}).then(function(e){e&&t.props.history.push("/")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit"},"Sign in")))))}}]),t}(n.Component)),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={nickname:"",first_name:"",last_name:"",email:"",password:""},e.onChange=e.onChange.bind(Object(g.a)(Object(g.a)(e))),e.onSubmit=e.onSubmit.bind(Object(g.a)(Object(g.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a,n={nickname:this.state.nickname,first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,password:this.state.password};(a=n,j.a.post("/clowns/register",{nickname:a.nickname,firstName:a.firstName,lastName:a.lastName,email:a.email,password:a.password}).then(function(e){console.log("Registered")})).then(function(e){t.props.history.push("/login")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"nickname"},"Nickname"),l.a.createElement("input",{type:"text",className:"form-control",name:"nickname",placeholder:"Enter Fist Name",value:this.state.nickname,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"first_name"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"first_name",placeholder:"Enter Fist Name",value:this.state.first_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"last_name"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"last_name",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register")))))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={email:"",password:""},e.onChange=e.onChange.bind(Object(g.a)(Object(g.a)(e))),e.onSubmit=e.onSubmit.bind(Object(g.a)(Object(g.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a,n={email:this.state.email,password:this.state.password};(a=n,j.a.post("/clowns/login",{email:a.email,password:a.password}).then(function(e){return localStorage.setItem("token",e.data),e.data}).catch(function(e){console.log(e)})).then(function(e){e&&t.props.history.push("/")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit"},"Sign in")))))}}]),t}(n.Component),C=(a(88),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={firstName:"",lastName:"",email:"",password:""},e.onChange=e.onChange.bind(Object(g.a)(Object(g.a)(e))),e.onSubmit=e.onSubmit.bind(Object(g.a)(Object(g.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a,n={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,password:this.state.password};(a=n,j.a.post("users/register",{firstName:a.firstName,lastName:a.lastName,email:a.email,password:a.password}).then(function(e){console.log("Registered")})).then(function(e){t.props.history.push("/login")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"firstName",placeholder:"Enter Fist Name",value:this.state.firstName,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"lastName",placeholder:"Enter Last Name",value:this.state.lastName,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register")))))}}]),t}(n.Component)),S=a(52),x=a.n(S),F=(a(92),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={id:"",nickname:"",firstName:"",lastName:"",email:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=function(){if(!localStorage.getItem("token"))return{res:!1};var e=localStorage.token;return{res:!0,user:x()(e)}}();!0===e.res?"user"===e.user.type?this.setState({id:e.user.id,firstName:e.user.firstName,lastName:e.user.lastName,email:e.user.email}):"clown"===e.user.type&&this.setState({id:e.user.id,nickname:e.user.nickname,firstName:e.user.firstName,lastName:e.user.lastName,email:e.user.email}):this.props.history.push("/login")}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron mt-5"},l.a.createElement("div",{className:"col-sm-8 mx-auto"},l.a.createElement("h1",{className:"text-center"},"PROFILE")),l.a.createElement("table",{className:"table col-md-6 mx-auto"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Id"),l.a.createElement("td",null,this.state.id)),l.a.createElement("tr",null,l.a.createElement("td",null,"First Name"),l.a.createElement("td",null,this.state.firstName)),l.a.createElement("tr",null,l.a.createElement("td",null,"Last Name"),l.a.createElement("td",null,this.state.lastName)),l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null,this.state.email))))))}}]),t}(n.Component)),P=(a(94),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onClick=function(t){t.preventDefault(),e.props.history.goBack()},e.state={},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("a",{href:"#",onClick:this.onClick},"Terug"))}}]),t}(n.Component)),V=Object(E.a)(P),_=(a(96),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={youTubeVideos:[],youTubeVideosUrl:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAxljpEKy0-vwjWrGJEYcOsohzfBDPe8wE&channelId=UCbcMVpCRxwcqaT1wiWM_ocg&part=snippet,id&order=date&maxResults=20").then(function(e){return e.json()}).then(function(t){e.setState({youTubeVideos:t.items});var a=[];e.state.youTubeVideos.forEach(function(e){if(e.id.videoId){var t="https://www.youtube.com/embed/"+e.id.videoId;a.push(t)}}),e.setState({youTubeVideosUrl:a})})}},{key:"render",value:function(){var e=this.state.youTubeVideosUrl.map(function(e){return l.a.createElement("li",{key:e},l.a.createElement("iframe",{width:"560",height:"315",src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))});return l.a.createElement("div",{className:"container"},l.a.createElement(V,null),l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center"},"Videos"),l.a.createElement("ul",null,e)))}}]),t}(n.Component)),D=(a(98),a(53)),I=a.n(D),L=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={id:"",nickname:"",firstName:"",lastName:"",email:"",socket:I()("https://app-cliniclowns.herokuapp.com:5050"),connection:new RTCPeerConnection({iceServers:[{url:"stun:stun2.1.google.com:19302"}]}),name:null,otherUsername:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"login"},l.a.createElement("label",{htmlFor:"username"},"Login"),l.a.createElement("input",{id:"username",placeholder:"Login",required:"",autoFocus:""}),l.a.createElement("button",{id:"login"},"Login")),l.a.createElement("div",{id:"call"},l.a.createElement("video",{id:"local",autoPlay:!0}),l.a.createElement("video",{id:"remote",autoPlay:!0}),l.a.createElement("div",null,l.a.createElement("input",{id:"username-to-call",placeholder:"Username to call"}),l.a.createElement("button",{id:"call"},"Call"),l.a.createElement("button",{id:"close-call"},"Close call"))))}}]),t}(n.Component),R=(a(125),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={clowns:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/clowns/all").then(function(t){e.setState({clowns:t.data})})}},{key:"render",value:function(){var e=this.state.clowns.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("img",{src:window.location.origin+e.image,alt:"foto "+e.nickname}),l.a.createElement("a",{href:"clowns/"+e.id},e.nickname))});return l.a.createElement("div",{className:"container"},l.a.createElement(V,null),l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center"},"Clowns"),l.a.createElement("ul",null,e)))}}]),t}(n.Component)),T=(a(127),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={firstName:"",lastName:"",imageUrl:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.id,j.a.get("/clowns/"+e)).then(function(e){t.setState({firstName:e.data.firstName,lastName:e.data.lastName,imageUrl:"../src/logo.svg"})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(V,null),l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center"},this.state.firstName," ",this.state.lastName)))}}]),t}(n.Component)),U=(a(129),a(131),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(d.a,{exact:!0,path:"/",component:v}),l.a.createElement("div",{className:"container"},l.a.createElement(d.a,{exact:!0,path:"/register",component:C}),l.a.createElement(d.a,{exact:!0,path:"/login",component:O}),l.a.createElement(d.a,{exact:!0,path:"/profile",component:F}),l.a.createElement(d.a,{exact:!0,path:"/videos",component:_}),l.a.createElement(d.a,{exact:!0,path:"/videochat",component:L}),l.a.createElement(d.a,{exact:!0,path:"/clowns",component:R}),l.a.createElement(d.a,{exact:!0,path:"/clowns/:id",component:T}),l.a.createElement(d.a,{exact:!0,path:"/clowns/login",component:k}),l.a.createElement(d.a,{exact:!0,path:"/clowns/register",component:y}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,a){e.exports=a(133)},59:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){}},[[54,2,1]]]);
//# sourceMappingURL=main.fba21801.chunk.js.map