webpackJsonp([7],{712:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(220),o=n(l),u=a(52),r=n(u),f=a(53),d=n(f),i=a(54),s=n(i),c=a(56),p=n(c),g=a(55),m=n(g),v=a(6),h=n(v),b=a(80),w=a(57),E=a(716),N=n(E),_=a(717),k=n(_),y=function(e){function t(){return(0,d.default)(this,t),(0,p.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"getOptions",value:function(){var e=$(window).width();return e<=1024&&e>414?{crestHeight:[6,10,14],offsetTop:.5,rippleNum:2}:e<=414?{crestHeight:[4,8,12],offsetTop:.5,rippleNum:1}:void 0}},{key:"componentDidMount",value:function(){new JParticles.wave(".not-found .below",(0,o.default)({num:3,lineColor:["rgba(255, 255, 255, .5)","rgba(255, 255, 255, .7)","rgba(255, 255, 255, .9)"],lineWidth:[.6,.8,1],crestHeight:[8,12,16],offsetLeft:[2,1,0],offsetTop:18,rippleNum:3,speed:.07},this.getOptions()))}},{key:"render",value:function(){return h.default.createElement("div",{className:"not-found pr overflow-hidden"},h.default.createElement("div",{className:"wrap"},h.default.createElement("img",{src:N.default,alt:"404"}),h.default.createElement("div",{className:"text"},h.default.createElement("img",{src:k.default,alt:"Not Found"}),h.default.createElement("strong",null,h.default.createElement(b.Link,{to:"/"+w.language.language+"/",replace:!0},w.language.notFound.toHomePage),h.default.createElement("a",{href:"javascript:history.back()"},w.language.notFound.toPrevPage)))),h.default.createElement("div",{className:"below"}))}}]),t}(v.Component);t.default=y,e.exports=t.default},716:function(e,t,a){e.exports=a.p+"images/404.2346dcdb.png"},717:function(e,t,a){e.exports=a.p+"images/info.9bfd9e7a.png"}});