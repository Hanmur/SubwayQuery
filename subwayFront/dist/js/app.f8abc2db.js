(function(e){function t(t){for(var l,o,s=t[0],i=t[1],c=t[2],b=0,p=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],l=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(l=!1)}l&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var l={},a={app:0},r=[];function o(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=l,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4e4d":function(e,t,n){},"543c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("7a23"),a=n("f23d");function r(e,t,n,a,r,o){var s=this,i=Object(l["N"])("a-image"),c=Object(l["N"])("a-col"),u=Object(l["N"])("input-access"),b=Object(l["N"])("result-displayer"),p=Object(l["N"])("a-alert"),f=Object(l["N"])("a-space"),j=Object(l["N"])("a-row");return Object(l["F"])(),Object(l["k"])(j,{align:"middle"},{default:Object(l["Z"])((function(){return[Object(l["p"])(c,{span:8},{default:Object(l["Z"])((function(){return[Object(l["p"])(i,{src:"https://cs.gzmtr.com/ckfw/xlu_2020/202011/W020211101558961941389.jpg",width:600},null,8,["src"])]})),_:1}),Object(l["p"])(c,{span:8,offset:6},{default:Object(l["Z"])((function(){return[Object(l["p"])(f,{direction:"vertical",class:"main"},{default:Object(l["Z"])((function(){return[Object(l["p"])(u,{linesInfo:e.linesInfo,callback:o.retJson},null,8,["linesInfo","callback"]),e.resShow?(Object(l["F"])(),Object(l["k"])(b,{key:0,linesInfo:e.linesInfo,leastTransfer:e.leastTransfer,bestTime:e.bestTime,bestTimeTime:e.bestTimeTime,leastTransferTime:e.leastTransferTime},null,8,["linesInfo","leastTransfer","bestTime","bestTimeTime","leastTransferTime"])):Object(l["l"])("",!0),Object(l["p"])(p,{message:"鸡汤来喽～",description:s.joke,type:"info","show-icon":""},null,8,["description"])]})),_:1})]})),_:1})]})),_:1})}n("e9c4");function o(e,t,n,a,r,o){var s=this,i=Object(l["N"])("Input"),c=Object(l["N"])("a-tag"),u=Object(l["N"])("a-typography-text"),b=Object(l["N"])("a-card"),p=Object(l["N"])("a-space");return Object(l["F"])(),Object(l["k"])(p,{direction:"vertical"},{default:Object(l["Z"])((function(){return[Object(l["p"])(i,{callback:o.contentChange,lines:s.linesMap(),stops:s.stopsMap()},null,8,["callback","lines","stops"]),e.resultShow?(Object(l["F"])(),Object(l["k"])(b,{key:0,size:"small",title:"你的路线",style:{width:"100%"}},{default:Object(l["Z"])((function(){return[Object(l["p"])(u,null,{default:Object(l["Z"])((function(){return[Object(l["o"])(Object(l["Q"])(s.spanInfo(s.travel.start.line,s.travel.start.stop))+" ",1),Object(l["p"])(c,{color:s.linesInfo[s.travel.start.line].color},{default:Object(l["Z"])((function(){return[Object(l["o"])(Object(l["Q"])(s.travel.start.line),1)]})),_:1},8,["color"]),Object(l["p"])(c,null,{default:Object(l["Z"])((function(){return[Object(l["o"])(Object(l["Q"])(s.travel.start.stop),1)]})),_:1}),Object(l["o"])(" ➡️ "+Object(l["Q"])(s.spanInfo(s.travel.end.line,s.travel.end.stop))+" ",1),Object(l["p"])(c,{color:n.linesInfo[s.travel.end.line].color},{default:Object(l["Z"])((function(){return[Object(l["o"])(Object(l["Q"])(s.travel.end.line),1)]})),_:1},8,["color"]),Object(l["p"])(c,null,{default:Object(l["Z"])((function(){return[Object(l["o"])(Object(l["Q"])(s.travel.end.stop),1)]})),_:1})]})),_:1})]})),_:1})):Object(l["l"])("",!0)]})),_:1})}n("b0c0"),n("4de4"),n("d3b7");var s=function(e){return Object(l["I"])("data-v-fc90d194"),e=e(),Object(l["G"])(),e},i=s((function(){return Object(l["n"])("h3",null,"请选择你的路线(左图单击可放大)",-1)})),c=s((function(){return Object(l["n"])("em",null,"起点:",-1)})),u=s((function(){return Object(l["n"])("em",null,"终点:",-1)})),b=Object(l["o"])("选好了");function p(e,t,n,a,r,o){var s=Object(l["N"])("a-select"),p=Object(l["N"])("a-space"),f=Object(l["N"])("a-button");return Object(l["F"])(),Object(l["m"])(l["b"],null,[i,Object(l["p"])(p,{direction:"vertical"},{default:Object(l["Z"])((function(){return[Object(l["p"])(p,null,{default:Object(l["Z"])((function(){return[c,Object(l["p"])(s,{ref:"select",value:e.start_line,"onUpdate:value":t[0]||(t[0]=function(t){return e.start_line=t}),style:{width:"150px"},options:e.lines,onChange:t[1]||(t[1]=function(){e.start_stop=void 0})},null,8,["value","options"]),Object(l["p"])(s,{ref:"select-stops",value:e.start_stop,"onUpdate:value":t[2]||(t[2]=function(t){return e.start_stop=t}),style:{width:"200px"},options:e.stops[e.start_line]},null,8,["value","options"])]})),_:1}),Object(l["p"])(p,null,{default:Object(l["Z"])((function(){return[u,Object(l["p"])(s,{ref:"select",value:e.end_line,"onUpdate:value":t[3]||(t[3]=function(t){return e.end_line=t}),style:{width:"150px"},options:e.lines,onChange:t[4]||(t[4]=function(){e.end_stop=void 0})},null,8,["value","options"]),Object(l["p"])(s,{ref:"select-stops",value:e.end_stop,"onUpdate:value":t[5]||(t[5]=function(t){return e.end_stop=t}),style:{width:"200px"},options:e.stops[e.end_line]},null,8,["value","options"])]})),_:1}),Object(l["p"])(f,{type:"primary",style:{width:"150px"},onClick:t[6]||(t[6]=function(t){return e.callback([e.start_line,e.start_stop,e.end_line,e.end_stop])})},{default:Object(l["Z"])((function(){return[b]})),_:1})]})),_:1})],64)}var f=Object(l["q"])({props:["callback","lines","stops"],setup:function(){return{start_line:Object(l["K"])(),start_stop:Object(l["K"])(),end_line:Object(l["K"])(),end_stop:Object(l["K"])()}}}),j=(n("b355"),n("6b0d")),O=n.n(j);const d=O()(f,[["render",p],["__scopeId","data-v-fc90d194"]]);var v=d,h=n("f64c"),m={name:"InputAccess",props:["callback","linesInfo"],data:function(){return{travel:{start:{line:"1",stop:"1"},end:{line:"1",stop:"1"}},resultShow:!1,errorShow:!1}},components:{Input:v},methods:{linesMap:function(){var e=[];for(var t in this.linesInfo){var n=new Object;n["value"]=t,n["label"]=this.linesInfo[t].name,e.push(n)}return e},stopsMap:function(){var e=new Object;for(var t in this.linesInfo)e[t]=this.linesInfo[t].stops;return e},contentChange:function(e){for(var t=0;t<4;++t)if(void 0===e[t])return void h["a"].error("请确认是否已经选择完毕!");this.travel.start.line=e[0],this.travel.start.stop=e[1],this.travel.end.line=e[2],this.travel.end.stop=e[3],this.resultShow=!0,console.log(e),this.$props.callback(e)},findByValue:function(e,t){var n=t.filter((function(t){return t.value===e}));if(n.length)return n[0].label},spanInfo:function(e,t){return this.findByValue(t,this.linesInfo[e].stops)}}};n("b77e");const T=O()(m,[["render",o],["__scopeId","data-v-6d1f16ad"]]);var _=T;function y(e,t,n,a,r,o){var s=this,i=Object(l["N"])("result-shower"),c=Object(l["N"])("a-tab-pane"),u=Object(l["N"])("a-tabs");return Object(l["F"])(),Object(l["k"])(u,{activeKey:e.activeKey,"onUpdate:activeKey":t[0]||(t[0]=function(t){return e.activeKey=t})},{default:Object(l["Z"])((function(){return[Object(l["p"])(c,{key:"1",tab:"时间最短"},{default:Object(l["Z"])((function(){return[Object(l["p"])(i,{linesInfo:n.linesInfo,route:s.convert(s.bestTime),timeTransSel:!0,time:n.bestTimeTime},null,8,["linesInfo","route","time"])]})),_:1}),Object(l["p"])(c,{key:"2",tab:"换乘最少"},{default:Object(l["Z"])((function(){return[Object(l["p"])(i,{linesInfo:n.linesInfo,route:s.convert(s.leastTransfer),timeTransSel:!1,time:n.leastTransferTime-s.subed},null,8,["linesInfo","route","time"])]})),_:1})]})),_:1},8,["activeKey"])}var g={key:0},I=Object(l["n"])("b",null,"换乘",-1),k=Object(l["o"])(),w=Object(l["o"])(),N={key:1},Z=Object(l["o"])(" 乘坐 "),S=Object(l["o"])();function x(e,t,n,a,r,o){var s=this,i=Object(l["N"])("a-tag"),c=Object(l["N"])("a-list-item"),u=Object(l["N"])("a-list"),b=Object(l["N"])("a-space");return Object(l["F"])(),Object(l["k"])(b,{direction:"vertical"},{default:Object(l["Z"])((function(){return[Object(l["n"])("h3",null,Object(l["Q"])(s.makeTitle()),1),Object(l["p"])(u,{"item-layout":"horizontal","data-source":s.displayData(s.route)},{renderItem:Object(l["Z"])((function(e){var t=e.item;return[Object(l["p"])(c,null,{default:Object(l["Z"])((function(){return[t.trans?(Object(l["F"])(),Object(l["m"])("div",g,[I,k,Object(l["n"])("b",null,Object(l["Q"])(t.text),1),w,Object(l["p"])(i,{color:t.tagColor},{default:Object(l["Z"])((function(){return[Object(l["o"])(Object(l["Q"])(t.tagLine),1)]})),_:2},1032,["color"])])):Object(l["l"])("",!0),t.trans?Object(l["l"])("",!0):(Object(l["F"])(),Object(l["m"])("div",N,[Z,Object(l["n"])("b",null,Object(l["Q"])(t.lineText),1),S,Object(l["n"])("em",null,Object(l["Q"])(t.lineDire),1),Object(l["o"])(" "+Object(l["Q"])(t.stopNum)+"站到 "+Object(l["Q"])(t.endName)+" ",1),Object(l["p"])(i,{color:t.tagColor},{default:Object(l["Z"])((function(){return[Object(l["o"])(Object(l["Q"])(t.tagLine),1)]})),_:2},1032,["color"]),Object(l["p"])(i,null,{default:Object(l["Z"])((function(){return[Object(l["o"])(Object(l["Q"])(t.tagStop),1)]})),_:2},1024)]))]})),_:2},1024)]})),_:1},8,["data-source"])]})),_:1})}n("a9e3"),n("33d1"),n("ea98"),n("b680");var Q={props:["route","linesInfo","timeTransSel","time"],data:function(){return{}},methods:{findByValue:function(e,t){var n=t.filter((function(t){return t.value===e}));if(n.length)return n[0].label},displayData:function(e){for(var t=new Array,n=0;n<e.length-1;n++){var l=e[n],a=e[n+1],r=new Object,o=new String;if(l.line!=a.line)r.trans=!0,o+=this.linesInfo[a.line].name;else{r.trans=!1,r.lineText=this.linesInfo[l.line].name;var s=Number(l.stop)<Number(a.stop);r.lineDire=s?this.linesInfo[l.line].stops.at(-1).label+"方向":this.linesInfo[l.line].stops.at(0).label+"方向",r.endName=this.findByValue(String(a.stop),this.linesInfo[a.line].stops),r.stopNum=a.step}r.text=o,r.tagLine=a.line,r.tagStop=a.stop,r.tagColor=this.linesInfo[a.line].color,t.push(r)}return t},makeTitle:function(){var e="";if(this.timeTransSel){var t=this.time/60;e+="全程大概需要"+t.toFixed(0)+"分钟"}else e+="全程需要换乘"+this.time+"次";return e}}};const F=O()(Q,[["render",x]]);var P=F,C={props:["bestTime","leastTransfer","linesInfo","bestTimeTime","leastTransferTime"],data:function(){return{subed:0,activeKey:"1"}},methods:{convert:function(e){this.subed=0;var t=[],n={line:e[0].line,stop:e[0].stop,step:0};t.push(n);for(var l=0,a=1;a<e.length;a++){if(e[a].line!=e[l].line){var r={line:e[a-1].line,stop:e[a-1].stop,step:a-1-l},o={line:e[a].line,stop:e[a].stop,step:1};t.push(r),t.push(o),l=a}if(a==e.length-1){var s={line:e[a].line,stop:e[a].stop,step:a-l};t.push(s)}}return t.length>=2&&0==t[1].step&&(t.shift(),t.shift(),this.subed+=1),t.length>=2&&0==t[t.length-1].step&&(t.pop(),t.pop(),this.subed+=1),t}},components:{ResultShower:P}};const K=O()(C,[["render",y]]);var M=K,A=n("bc3a"),B=n.n(A),D={name:"App",components:{InputAccess:_,ResultDisplayer:M},mounted:function(){var e=this;B.a.get("https://api.oick.cn/dutang/api.php").then((function(t){e.joke=t.data})),B.a.get("http://localhost:8081/linesList").then((function(t){e.linesInfo=t.data["lines"]}))},data:function(){return{joke:"",post:[],linesInfo:{1:{name:"一号线",stops:[{value:"1",label:"广州东站"},{value:"2",label:"体育中心"},{value:"3",label:"体育西路"}],color:"#EECF2D"},2:{name:"二号线",stops:[{value:"1",label:"广州南站"},{value:"2",label:"石壁"},{value:"4",label:"洛溪"}],color:"#005E9E"},3:{name:"三号线",stops:[{value:"1",label:"机场北(T2)"},{value:"2",label:"机场南(T1)"},{value:"3",label:"高增"},{value:"4",label:"广州东站"}],color:"#EB9A3E"},18:{name:"十八号线",stops:[{value:"1",label:"万顷沙"},{value:"2",label:"横沥"},{value:"3",label:"番禺广场"},{value:"4",label:"南村万博"},{value:"5",label:"沙溪"}],color:"#2A459C"},GF:{name:"广佛线",stops:[{value:"1",label:"新城东"},{value:"2",label:"魁奇路"},{value:"3",label:"𧒽岗"},{value:"4",label:"南洲"},{value:"5",label:"沥滘"}],color:"#BAD200"},APM:{name:"APM线",stops:[{value:"1",label:"广州塔"},{value:"2",label:"海心沙"},{value:"3",label:"大剧院"}],color:"#01B6E3"}},response:{},bestTimeTime:0,leastTransferTime:0,resShow:!1,bestTime:[{line:"1",stop:"2"}],leastTransfer:[{line:"1",stop:"2"}]}},methods:{makePost:function(e){var t={line:e[0],stop:e[1]},n={line:e[2],stop:e[3]};this.post[0]=t,this.post[1]=n},retJson:function(e){var t=this;this.pack=e,this.makePost(e),B.a.post("http://localhost:8081/search",JSON.stringify(this.post)).then((function(e){console.log(e),t.leastTransfer=e.data.leastTransfer,t.bestTime=e.data.bestTime,t.bestTimeTime=e.data.bestTimeTime,t.leastTransferTime=e.data.leastTransferTime,t.response=e.data})),this.resShow=!0}}};n("bbe9");const E=O()(D,[["render",r]]);var J=E,U=(n("202f"),n("130e")),L=Object(l["j"])(J);L.config.productionTip=!1,L.use(a["a"]).mount("#app"),L.use(U["a"],B.a),L.provide("axios",L.config.globalProperties.axios)},b355:function(e,t,n){"use strict";n("c1a2")},b77e:function(e,t,n){"use strict";n("543c")},bbe9:function(e,t,n){"use strict";n("4e4d")},c1a2:function(e,t,n){}});
//# sourceMappingURL=app.f8abc2db.js.map