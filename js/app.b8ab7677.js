(function(t){function e(e){for(var r,s,i=e[0],c=e[1],d=e[2],l=0,h=[];l<i.length;l++)s=i[l],o[s]&&h.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0966":function(t,e,n){"use strict";var r=n("5b06"),o=n.n(r);o.a},"18c3":function(t,e,n){"use strict";var r=n("6181"),o=n.n(r);o.a},"2bd8":function(t,e,n){},"2d8e":function(t,e,n){"use strict";var r=n("f9c4"),o=n.n(r);o.a},3359:function(t,e,n){"use strict";var r=n("73ce"),o=n.n(r);o.a},"436c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("PageLoader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldShow(),expression:"shouldShow()"}]},[n("GithubCorner"),n("div",{staticClass:"header container"},[n("h1",{staticClass:"text-center"},[t._v("What Word is it ?")]),n("hr")])],1)]),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("router-view")],1)],1)},a=[],s=(n("7f7f"),n("6762"),n("2fdb"),n("c93e")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"github-corner",attrs:{href:"https://github.com/kykungz/whatword","aria-label":"View source on Github"}},[n("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},c=[],d=(n("18c3"),n("2877")),u={},l=Object(d["a"])(u,i,c,!1,null,"77b6cf96",null),h=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full"},[n("icon",{attrs:{name:"spinner",scale:"10",spin:""}})],1)},m=[],f=(n("0966"),{}),v=Object(d["a"])(f,p,m,!1,null,"58c2e47e",null),b=v.exports,g=n("2f62"),w={components:{GithubCorner:h,PageLoader:b},computed:Object(s["a"])({},Object(g["c"])(["loading"])),methods:{shouldShow:function(){return["home","dashboard","create"].includes(this.$route.name)}}},C=w,_=(n("2d8e"),n("5c64"),Object(d["a"])(C,o,a,!1,null,"e7e7ec60",null)),k=_.exports,x=n("8c4f"),y=n("a78e"),O=n.n(y);r["a"].use(g["a"]);var R=new g["a"].Store({state:{loading:!1,rooms:O.a.getJSON("rooms")||{}},getters:{rooms:function(t){return t.rooms},loading:function(t){return t.loading}},mutations:{SAVE_ROOM:function(t,e){var n=e.id,r=e.password;t.rooms[n]=r,O.a.set("rooms",t.rooms,{expires:1})},SET_LOADING:function(t,e){t.loading=e}},actions:{saveRoom:function(t,e){var n=e.id,r=e.password;t.commit("SAVE_ROOM",{id:n,password:r})},setLoading:function(t,e){t.commit("SET_LOADING",e)}}}),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mb-4"},[n("div",{staticClass:"text-left content form-group"},[n("label",[t._v("Enter Game ID:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.roomId,expression:"roomId"}],staticClass:"mb-2 text-center form-control form-control-lg",class:{"is-invalid":t.error},attrs:{placeholder:"GAME ID"},domProps:{value:t.roomId},on:{input:function(e){e.target.composing||(t.roomId=e.target.value)}}}),n("label",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"text-danger"},[t._v("\n      "+t._s(t.error)+"\n    ")]),n("div",{staticClass:"options"},[n("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{disabled:t.loading},on:{click:function(e){t.redirect("play")}}},[t.loading?n("icon",{attrs:{name:"circle-notch",spin:""}}):n("icon",{attrs:{name:"rocket"}}),t._v(" Play\n      ")],1),n("div",{staticClass:"d-flex admin"},[n("button",{staticClass:"w-50 btn btn-danger btn-lg",attrs:{disabled:t.loading},on:{click:function(e){t.redirect("scoreboard")}}},[t.loading?n("icon",{attrs:{name:"circle-notch",spin:""}}):n("icon",{attrs:{name:"star"}}),t._v(" Scoreboard\n        ")],1),n("button",{staticClass:"w-50 btn btn-dark btn-lg",attrs:{disabled:t.loading},on:{click:function(e){t.redirect("dashboard")}}},[t.loading?n("icon",{attrs:{name:"circle-notch",spin:""}}):n("icon",{attrs:{name:"sliders-h"}}),t._v(" Dashboard\n        ")],1)])])]),n("hr"),n("h3",{staticClass:"text-center"},[t._v("OR")]),n("hr"),n("div",{staticClass:"content"},[n("router-link",{class:["btn btn-warning btn-lg btn-block",{disabled:t.loading}],attrs:{to:{name:"create"}}},[t.loading?n("icon",{attrs:{name:"circle-notch",spin:""}}):n("icon",{attrs:{name:"pencil-alt"}}),t._v(" Create New Game\n    ")],1)],1),n("div",{staticClass:"mt-4 content d-flex justify-content-between align-items-center"},[n("router-link",{attrs:{to:{name:"home"}}},[n("big",[t._v("How to play?")])],1),n("div",[t._v("\n      Made by\n      "),n("big",[n("a",{attrs:{href:"https://github.com/kykungz"}},[t._v("Kongpon C.")])])],1)],1)])},L=[],I=(n("96cf"),n("3040")),$=n("c665"),G=n("aa9a"),N=n("bc3a"),P=n.n(N),S={production:{ORIGIN_API_URL:"https://whatword-api.herokuapp.com",ORIGIN_URL:"https://kykungz.github.io/whatword/#"},development:{ORIGIN_API_URL:"http://localhost:5000",ORIGIN_URL:"http://localhost:8080/#"}},U=S["production"],E=P.a.create({baseURL:U.ORIGIN_API_URL}),W=function(){function t(){Object($["a"])(this,t)}return Object(G["a"])(t,null,[{key:"create",value:function(t){var e=t.wordBank,n=t.color,r=t.password;return E.post("/create",{wordBank:e,color:n,password:r})}},{key:"update",value:function(t){var e=t.id,n=t.wordBank,r=t.color,o=t.password;return E.post("/update",{id:e,wordBank:n,color:r,password:o})}},{key:"getRoomInfo",value:function(t){var e=t.id,n=t.password;return E.get("/room",{params:{id:e,password:n}})}},{key:"remote",value:function(t){var e=t.id,n=t.password,r=t.action;return E.post("/remote",{id:e,password:n,action:r})}}]),t}(),A=W,B={data:function(){return{roomId:"",error:"",loading:!1}},methods:{redirect:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,A.getRoomInfo({id:this.roomId});case 4:this.$router.push({name:e,params:{id:this.roomId}}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.error=t.t0.response&&t.t0.response.data||t.t0.message;case 10:return t.prev=10,this.loading=!1,t.finish(10);case 13:case"end":return t.stop()}},t,this,[[0,7,10,13]])}));return function(e){return t.apply(this,arguments)}}()}},H=B,M=(n("aba1"),Object(d["a"])(H,j,L,!1,null,"eeecd0b8",null)),q=M.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"play"}},[n("h1",{staticClass:"display-4 fixed-top text-center mt-4"},[n("b",[t._v("Score: "+t._s(t.state.score))])]),n("div",{staticClass:"d-flex justify-content-center align-items-center h-100 w-100 fixed-top"},[n("div",{staticClass:"word-container"},[n("h1",{staticClass:"word"},[void 0===t.state.currentWord?n("div",{staticClass:"hidden-word"},[t._v("\n          ??????\n        ")]):n("div",[t._v("\n          "+t._s(t.state.currentWord)+"\n        ")])])])])])},T=[],z=n("8055"),J=n.n(z),V={props:["id"],data:function(){return{socket:void 0,state:{score:0}}},computed:Object(s["a"])({},Object(g["c"])(["loading"])),methods:Object(s["a"])({},Object(g["b"])(["setLoading"])),mounted:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.setLoading(!0),t.prev=1,t.next=4,A.getRoomInfo({id:this.id});case 4:t.next=9;break;case 6:return t.prev=6,t.t0=t["catch"](1),t.abrupt("return",this.$router.push({name:"home"}));case 9:this.socket=J()(U.ORIGIN_API_URL),this.socket.emit("join",{id:this.id}),this.socket.on("state",function(t){e.loading&&e.setLoading(!1),e.state=t,document.body.style.background=t.color});case 12:case"end":return t.stop()}},t,this,[[1,6]])}));return function(){return t.apply(this,arguments)}}(),destroyed:function(){this.socket&&this.socket.disconnect()}},Y=V,Z=(n("8474"),Object(d["a"])(Y,D,T,!1,null,"56277da8",null)),K=Z.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"create"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("Wordbank",{attrs:{words:t.words,color:t.color},on:{wordsChange:t.onWordsChange,colorChange:t.onColorChange}}),n("div",{staticClass:"form-group mt-2"},[n("label",[t._v("Remote password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control password",attrs:{placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("span",{staticClass:"form-text text-muted"},[t._v("\n          Remote requires password in order to control the game.\n        ")])]),t.error?n("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.error)+"\n      ")]):t._e(),n("button",{staticClass:"btn btn-warning btn-lg btn-block",attrs:{disabled:t.isDisabled()},on:{click:function(e){t.submit()}}},[n("icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{name:"circle-notch",spin:""}}),t._v("\n        "+t._s(this.loading?"Creating...":"Create")+"\n      ")],1)],1)])])},Q=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"form-group"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-6 text-right"},[n("h4",[t._v(t._s(t.words.length)+" Words")])])]),n("textarea",{staticClass:"form-control",attrs:{rows:"18",placeholder:"Insert your words here"},domProps:{value:t.textArea},on:{input:t.onWordsChange}})]),n("div",{staticClass:"d-flex align-items-center justify-content-between"},[n("h4",{staticClass:"mb-0"},[t._v("Color:")]),n("div",{staticClass:"preview-color",style:{background:t.color}})]),n("div",{staticClass:"d-flex align-items-center justify-content-between"},[n("div",{staticClass:"d-flex color-palette"},t._l(t.colors,function(e){return n("div",{key:e,class:["color",{selected:e===t.color}],style:{background:e},on:{click:function(n){t.onColorChange(e)}}})})),n("input",{staticClass:"color-input ml-2 text-right form-control",attrs:{placeholder:"#000000"},domProps:{value:t.color},on:{input:function(e){t.onColorChange(e.target.value)}}})])])},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6"},[n("h4",[t._v("Word Bank:")])])}],et=(n("28a5"),{props:{words:{type:Array,required:!0,default:function(){return[]}},color:{type:String,required:!0,default:"#fc5c65"}},data:function(){return{textArea:this.words.join("\n"),colors:["#fc5c65","#fd9644","#fed330","#26de81","#45aaf2","#3867d6","#a55eea","#d1d8e0","#4b6584"]}},methods:{forceUpdate:function(t){this.textArea=t.join("\n")},onColorChange:function(t){this.$emit("colorChange",t)},onWordsChange:function(t){this.textArea=t.target.value,this.$emit("wordsChange",this.textArea.split("\n").filter(function(t){return""!==t.trim()}))}}}),nt=et,rt=(n("3359"),Object(d["a"])(nt,X,tt,!1,null,"90c2ba06",null)),ot=rt.exports,at={components:{Wordbank:ot},data:function(){return{words:[],color:"#fc5c65",password:"",error:"",loading:!1}},methods:Object(s["a"])({},Object(g["b"])(["saveRoom"]),{onWordsChange:function(t){this.words=t},onColorChange:function(t){this.color=t},isDisabled:function(){return this.loading||this.words.length<=0||!this.password},submit:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,A.create({wordBank:this.words,color:this.color,password:this.password});case 4:e=t.sent,n=e.data,this.saveRoom({id:n,password:this.password}),this.$router.push({name:"dashboard",params:{id:n}}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.error=t.t0.message||t.t0.response.data;case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}},t,this,[[0,10,13,16]])}));return function(){return t.apply(this,arguments)}}()})},st=at,it=(n("c3a0"),Object(d["a"])(st,F,Q,!1,null,"6baaccad",null)),ct=it.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"dashboard"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"text-center"},[n("h2",[t._v("Your game is ready")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v("Game ID:")]),n("h1",{staticClass:"alert alert-info"},[t._v(" "+t._s(t.id)+" ")])])]),n("h5",[t._v("\n        Remote URL:\n        "),n("router-link",{attrs:{to:{name:"remote",params:{id:t.id}}}},[t._v("\n          "+t._s(t.remoteURL)+"\n        ")]),n("qr-code",{staticClass:"mx-auto mt-3 mb-1",staticStyle:{width:"fit-content"},attrs:{text:t.remoteURL}}),t._m(0)],1),n("h5",{staticClass:"mt-3"},[t._v("\n        Play URL:\n        "),n("router-link",{attrs:{to:{name:"play",params:{id:t.id}}}},[t._v("\n          "+t._s(t.playURL)+"\n        ")])],1),n("hr"),n("div",{staticClass:"text-right"},[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.toggleConfig()}}},[n("h5",[t._v("Game configuration")])])]),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showConfig,expression:"showConfig"}]},[n("Wordbank",{ref:"wordbank",attrs:{words:t.words,color:t.color},on:{wordsChange:t.onWordsChange,colorChange:t.onColorChange}}),n("button",{staticClass:"mt-4 btn btn-warning btn-lg btn-block",attrs:{disabled:t.loading},on:{click:function(e){t.update()}}},[n("icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{name:"circle-notch",spin:""}}),t._v("\n            Update\n          ")],1),t.updated?n("label",{staticClass:"text-success"},[t._v("\n            Game updated! You must restart your game before the new setting takes effect.\n          ")]):t._e()],1)])],1)])])},ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("small",[n("i",[t._v("Remote Control URL")])])])}],lt=(n("a481"),{props:["id"],components:{Wordbank:ot},data:function(){return{words:[],color:"#000",showConfig:!1,remoteURL:"".concat(U.ORIGIN_URL,"/remote/").concat(this.id),playURL:"".concat(U.ORIGIN_URL,"/play/").concat(this.id),updated:!1,loading:!1}},computed:Object(s["a"])({},Object(g["c"])(["rooms"])),mounted:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.getRoomInfo({id:this.id,password:this.rooms[this.id]});case 3:e=t.sent,n=e.data,n.admin?(this.color=n.room.color,this.words=n.room.wordBank,this.$refs.wordbank.forceUpdate(this.words)):this.$router.replace({name:"auth",query:{id:this.id,redirect:"dashboard"}}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$router.push({name:"home"});case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),methods:{toggleConfig:function(){this.showConfig=!this.showConfig},onWordsChange:function(t){this.words=t},onColorChange:function(t){this.color=t},update:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,A.update({id:this.id,password:this.rooms[this.id],wordBank:this.words,color:this.color});case 4:e=t.sent,n=e.data,this.color=n.color,this.words=n.wordBank,this.$refs.wordbank.forceUpdate(this.words),this.updated=!0,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),this.updated=!1;case 15:return t.prev=15,this.loading=!1,t.finish(15);case 18:case"end":return t.stop()}},t,this,[[1,12,15,18]])}));return function(){return t.apply(this,arguments)}}()}}),ht=lt,pt=(n("bba9"),Object(d["a"])(ht,dt,ut,!1,null,"14486c19",null)),mt=pt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{background:t.state.color},attrs:{id:"scoreboard"}},[n("div",{staticClass:"d-flex justify-content-center align-items-center h-100 w-100"},[n("div",{staticClass:"custom-border"},[n("div",{staticClass:"score-text"},[t._v("Score:")]),n("div",{staticClass:"score"},[t._v(t._s(t.state.score))])])])])},vt=[],bt={props:["id"],data:function(){return{socket:void 0,state:{score:0,color:"#2e2e2e"}}},computed:Object(s["a"])({},Object(g["c"])(["loading"])),methods:Object(s["a"])({},Object(g["b"])(["setLoading"])),mounted:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.setLoading(!0),t.next=4,A.getRoomInfo({id:this.id});case 4:this.socket=J()(U.ORIGIN_API_URL),this.socket.emit("join",{id:this.id}),this.socket.on("state",function(t){e.loading&&e.setLoading(!1),e.state=t,document.body.style.background=t.color}),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0),this.$router.push({name:"home"});case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),destroyed:function(){this.socket&&this.socket.disconnect()}},gt=bt,wt=(n("cb0c"),Object(d["a"])(gt,ft,vt,!1,null,"25bd184c",null)),Ct=wt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"auth"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("form",{on:{submit:function(e){e.preventDefault(),t.auth()}}},[n("label",[t._v("Enter Game Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:[{"is-invalid":t.error},"password mb-2 text-center form-control form-control-lg"],attrs:{placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.error?n("label",{staticClass:"text-danger text-right"},[t._v("\n          "+t._s(t.error)+"\n        ")]):t._e(),n("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{disabled:t.loading,type:"submit"},on:{click:t.auth}},[n("icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{name:"circle-notch",spin:""}}),t._v(" Go\n        ")],1)])])])])},kt=[],xt={data:function(){return{id:this.$route.query.id,redirect:this.$route.query.redirect,password:"",error:!1,loading:!1}},mounted:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.id&&this.redirect){t.next=3;break}throw new Error;case 3:return this.setLoading(!0),t.next=6,A.getRoomInfo({id:this.id});case 6:this.setLoading(!1),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),this.$router.replace({name:"home"});case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),methods:Object(s["a"])({},Object(g["b"])(["setLoading","saveRoom"]),{auth:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,A.getRoomInfo({id:this.id,password:this.password});case 4:e=t.sent,n=e.data,n.admin?(this.saveRoom({id:this.id,password:this.password}),this.$router.replace({name:this.redirect,params:{id:this.id}})):this.error="Wrong password!",t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),this.$router.replace({name:"home"});case 12:return t.prev=12,this.loading=!1,t.finish(12);case 15:case"end":return t.stop()}},t,this,[[1,9,12,15]])}));return function(){return t.apply(this,arguments)}}()})},yt=xt,Ot=(n("ea08"),Object(d["a"])(yt,_t,kt,!1,null,"4e7ac302",null)),Rt=Ot.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"remote"}},[n("div",{staticClass:"remote-content"},[n("div",{staticClass:"remote-status alert-info text-center"},[n("div",{staticClass:"d-flex justify-content-around text-danger mt-3 w-100"},[n("h2",[t._v("Score: "+t._s(this.state.score))]),n("h2",[t._v("Left: "+t._s(this.state.remaining))])]),n("div",{staticClass:"d-flex justify-content-center align-items-center word"},[this.isOver?n("div",{staticClass:"badge badge-pill badge-danger"},[t._v("\n          Game Over\n        ")]):this.isHiding?n("div",{staticClass:"badge badge-pill badge-danger"},[t._v("\n          Hiding\n        ")]):n("div",[t._v("\n          "+t._s(this.state.currentWord)+"\n        ")])])]),n("button",{class:["remote-button btn text-center",t.isHiding?"btn-dark":"btn-success"],attrs:{disabled:t.isHiding},on:{click:function(e){t.remote("correct")}}},[n("h1",[n("icon",{attrs:{name:"check-circle",scale:"2"}}),t._v(" Correct")],1)]),n("button",{class:["remote-button btn text-center",t.skipBtnColor],attrs:{disabled:t.isHiding||t.isLast},on:{click:function(e){t.remote("skip")}}},[n("h1",[n("icon",{attrs:{name:"forward",scale:"2"}}),t._v(" Skip")],1)]),n("button",{class:["remote-button btn text-center",t.visibilityBtnColor],attrs:{disabled:t.isOver||t.isLast},on:{click:function(e){t.remote(t.isHiding?"show":"hide")}}},[t.isHiding?n("h1",[n("icon",{attrs:{name:"eye",scale:"2"}}),t._v(" Show")],1):n("h1",[n("icon",{attrs:{name:"eye-slash",scale:"2"}}),t._v(" Hide")],1)]),n("button",{staticClass:"remote-button btn btn-danger text-center",on:{click:function(e){t.restart()}}},[n("h1",[n("icon",{attrs:{name:"sync-alt",scale:"2"}}),t._v(" Restart")],1)])])])},Lt=[],It={props:["id"],data:function(){return{socket:void 0,state:{score:0,remaining:0}}},computed:Object(s["a"])({},Object(g["c"])(["loading","rooms"]),{isHiding:function(){return void 0===this.state.currentWord},isOver:function(){return void 0===this.state.currentWord&&0===this.state.remaining},isLast:function(){return 0===this.state.remaining},visibilityBtnColor:function(){return this.isOver||this.isLast?"btn-dark":this.isHiding?"btn-warning":"btn-dark"},skipBtnColor:function(){return this.isHiding||this.isLast?"btn-dark":"btn-info"}}),mounted:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.setLoading(!0),t.next=4,A.getRoomInfo({id:this.id,password:this.rooms[this.id]});case 4:e=t.sent,n=e.data,n.admin?(this.socket=J()(U.ORIGIN_API_URL),this.socket.emit("join",{id:this.id}),this.socket.on("state",function(t){r.loading&&r.setLoading(!1),r.state=t})):this.$router.replace({name:"auth",query:{id:this.id,redirect:"remote"}}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),this.$router.push({name:"home"});case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),methods:Object(s["a"])({},Object(g["b"])(["setLoading"]),{remote:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.socket.emit("remote",{id:this.id,action:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),restart:function(){var t=window.confirm("Are you sure to restart the game?");t&&this.remote("restart")}})},$t=It,Gt=(n("6cf1"),Object(d["a"])($t,jt,Lt,!1,null,"7cd1d6c4",null)),Nt=Gt.exports;r["a"].use(x["a"]);var Pt=new x["a"]({routes:[{path:"/",name:"home",component:q},{path:"/play/:id",name:"play",component:K,props:!0},{path:"/create",name:"create",component:ct},{path:"/dashboard/:id",name:"dashboard",component:mt,props:!0},{path:"/scoreboard/:id",name:"scoreboard",component:Ct,props:!0},{path:"/auth",name:"auth",component:Rt},{path:"/remote/:id",name:"remote",component:Nt,props:!0}]});Pt.afterEach(function(){R.dispatch("setLoading",!1),document.body.style.background="white"});var St=Pt,Ut=(n("ab8b"),n("d06d"),n("dfcf")),Et=n("0874");r["a"].component("qr-code",Ut["a"]),r["a"].component("icon",Et["a"]),r["a"].config.productionTip=!1,new r["a"]({router:St,store:R,render:function(t){return t(k)}}).$mount("#app")},"5b06":function(t,e,n){},"5c64":function(t,e,n){"use strict";var r=n("bf9e"),o=n.n(r);o.a},6:function(t,e){},6181:function(t,e,n){},"6cf1":function(t,e,n){"use strict";var r=n("436c"),o=n.n(r);o.a},"73ce":function(t,e,n){},"83bb":function(t,e,n){},8474:function(t,e,n){"use strict";var r=n("cae3"),o=n.n(r);o.a},aba1:function(t,e,n){"use strict";var r=n("83bb"),o=n.n(r);o.a},bba9:function(t,e,n){"use strict";var r=n("cff1"),o=n.n(r);o.a},bf9e:function(t,e,n){},c3a0:function(t,e,n){"use strict";var r=n("f3c0"),o=n.n(r);o.a},cae3:function(t,e,n){},cb0c:function(t,e,n){"use strict";var r=n("2bd8"),o=n.n(r);o.a},cff1:function(t,e,n){},ea08:function(t,e,n){"use strict";var r=n("f22e"),o=n.n(r);o.a},f22e:function(t,e,n){},f3c0:function(t,e,n){},f9c4:function(t,e,n){}});
//# sourceMappingURL=app.b8ab7677.js.map