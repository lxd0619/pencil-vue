(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{190:function(t,e,i){"use strict";var n=i(197);e.a={a:function(t){console.log(t)},clearNode:function(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)},watchDom:function(t,e){new n.a(function(t){e()}).observe(t)}}},191:function(t,e,i){"use strict";var n=i(4),a=i(15),r=i(14),o=i(74),l=i(72),s=i(7),c=i(100).f,h=i(99).f,u=i(9).f,f=i(98).trim,d=n.Number,v=d,p=d.prototype,g="Number"==r(i(73)(p)),_="trim"in String.prototype,b=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var i,n,a,r=(e=_?e.trim():f(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var o,s=e.slice(2),c=0,h=s.length;c<h;c++)if((o=s.charCodeAt(c))<48||o>a)return NaN;return parseInt(s,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof d&&(g?s(function(){p.valueOf.call(i)}):"Number"!=r(i))?o(new v(b(e)),i,d):b(e)};for(var y,m=i(8)?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;m.length>w;w++)a(v,y=m[w])&&!a(d,y)&&u(d,y,h(v,y));d.prototype=p,p.constructor=d,i(10)(n,"Number",d)}},192:function(t,e,i){},194:function(t,e,i){var n=i(3);n(n.P,"Array",{fill:i(196)}),i(102)("fill")},195:function(t,e,i){},196:function(t,e,i){"use strict";var n=i(19),a=i(101),r=i(16);t.exports=function(t){for(var e=n(this),i=r(e.length),o=arguments.length,l=a(o>1?arguments[1]:void 0,i),s=o>2?arguments[2]:void 0,c=void 0===s?i:a(s,i);c>l;)e[l++]=t;return e}},198:function(t,e,i){"use strict";i(194),i(53),i(24),i(191);var n=i(193),a=i.n(n),r=i(190),o={name:"pc-button",props:{elevation:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},decoration:{type:Object,default:function(){return{stroke:"",fill:"",fillStyle:""}},validator:function(t){var e=[],i=["stroke","fill","fillStyle","hachureAngle","hachureGap","fillWeight"],n=!0;for(var a in t)e.push(a);return e.forEach(function(t){-1===i.indexOf(t)&&(n=!1)}),n}}},mounted:function(){var t=this;r.a.watchDom(this.$el,function(){t.r()})},methods:{r:function(){var t=this.$el,e=this.$el.querySelector("#svg");r.a.clearNode(e);var i=t.getBoundingClientRect(),n=Math.min(Math.max(0,this.elevation),5);e.setAttribute("width",i.width+2*n),e.setAttribute("height",i.height+2*n);var o=a.a.svg(e),l=o.rectangle(.5,.5,i.width-1,i.height-1,{stroke:this.decoration.stroke,fill:this.decoration.fill,fillStyle:this.decoration.fillStyle,hachureAngle:this.decoration.hachureAngle,hachureGap:this.decoration.hachureGap,fillWeight:this.decoration.fillWeight,bowing:2});l.style.opacity=.8,e.appendChild(l);for(var s=0;s<=n;s++){if(0===n)return;var c=o.linearPath([[i.width+2*s,0+2*s],[i.width+2*s,i.height+2*s],[i.width+2*s,i.height+2*s],[0+2*s,i.height+2*s]],{bowing:2,stroke:this.decoration.stroke});c.style.opacity=1-.12*s,e.appendChild(c)}}}},l=(i(199),i(1)),s=Object(l.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"host",class:{disabled:t.disabled},attrs:{id:"btn"},on:{click:function(e){t.$emit("click",e.target)}}},[t._t("default"),t._v(" "),i("div",{staticClass:"overlay"},[i("svg",{attrs:{id:"svg"}})])],2)},[],!1,null,"bae96b7c",null);s.options.__file="button.vue";e.a=s.exports},199:function(t,e,i){"use strict";var n=i(192);i.n(n).a},209:function(t,e,i){"use strict";var n=i(195);i.n(n).a},211:function(t,e,i){"use strict";i(194),i(53),i(24),i(191);var n=i(193),a=i.n(n),r=i(190),o={name:"pc-card",props:{elevation:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},decoration:{type:Object,default:function(){return{stroke:"",fill:"",fillStyle:""}},validator:function(t){var e=[],i=["stroke","fill","fillStyle","hachureAngle","hachureGap","fillWeight"],n=!0;for(var a in t)e.push(a);return e.forEach(function(t){-1===i.indexOf(t)&&(n=!1)}),n}}},mounted:function(){var t=this;r.a.watchDom(this.$el,function(){t.r()})},methods:{r:function(){var t=this.$el,e=this.$el.querySelector("#svg");r.a.clearNode(e);var i=t.getBoundingClientRect(),n=Math.min(Math.max(0,this.elevation),5);e.setAttribute("width",i.width+2*n),e.setAttribute("height",i.height+2*n);var o=a.a.svg(e),l=o.rectangle(.5,.5,i.width-1,i.height-1,{stroke:this.decoration.stroke,fill:this.decoration.fill,fillStyle:this.decoration.fillStyle,hachureAngle:this.decoration.hachureAngle,hachureGap:this.decoration.hachureGap,fillWeight:this.decoration.fillWeight,bowing:2});l.style.opacity=.8,e.appendChild(l);for(var s=0;s<=n;s++){if(0===n)return;var c=o.linearPath([[i.width+2*s,0+2*s],[i.width+2*s,i.height+2*s],[i.width+2*s,i.height+2*s],[0+2*s,i.height+2*s]],{bowing:2,stroke:this.decoration.stroke});c.style.opacity=1-.12*s,e.appendChild(c)}}}},l=(i(209),i(1)),s=Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"host"},[e("div",[this._t("default")],2),this._v(" "),e("div",{staticClass:"overlay"},[e("svg",{attrs:{id:"svg"}})])])},[],!1,null,"566aff80",null);s.options.__file="card.vue";e.a=s.exports},229:function(t,e,i){},437:function(t,e,i){"use strict";var n=i(229);i.n(n).a},448:function(t,e,i){"use strict";i.r(e);i(103);var n=i(211),a=i(198),r={components:{"pc-card":n.a,"pc-button":a.a},mounted:function(){},data:function(){return{link:"/install/",config:{stroke:"#309286",fill:"rgba(197,236,190,0.8)",fillStyle:"zigzag",hachureAngle:100,hachureGap:13,fillWeight:6}}},methods:{go:function(t){t.link;/^http/.test(this.link)?window.open(this.link):this.$router.push(this.link)}}},o=(i(437),i(1)),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("pc-button",{staticClass:"btn",attrs:{elevation:"5",decoration:t.config},on:{click:t.go}},[i("h3",[t._v("快速上手 →")])]),t._v(" "),i("hr"),t._v(" "),i("pc-card",{staticClass:"card c1"},[i("h2",[t._v("简明优先")]),t._v(" "),i("p",[t._v("用法简单,构建声明式UI框架")])]),t._v(" "),i("pc-card",{staticClass:"card c2"},[i("h2",[t._v("Vue 驱动")]),t._v(" "),i("p",[t._v("享用 Vue + webpack 开发环境")])]),t._v(" "),i("pc-card",{staticClass:"card"},[i("h2",[t._v("源码易读")]),t._v(" "),i("p",[t._v("源码简单通俗，容易理解看懂")])]),t._v(" "),i("div",{staticClass:"footer"},[t._v("MIT Licensed | Copyright © 2018-present Mrlgm")])],1)},[],!1,null,"0452f60a",null);l.options.__file="home.vue";e.default=l.exports}}]);