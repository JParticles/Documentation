(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f9d341f"],{"29be":function(n,e,t){"use strict";var i=t("b5f8"),c=t.n(i);c.a},a42d:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"particles-root",domProps:{innerHTML:n._s(n.content)}})},c=[],a=t("cebc"),r=t("2f62"),o=t("8f73"),s={name:"Particle",props:{content:String},computed:Object(a["a"])({},Object(r["b"])(["isSmallScreen"])),mounted:function(){this.i1(),this.i2(),this.i3()},methods:{i1:function(){var n={proximity:90,range:100};this.isSmallScreen&&(n.proximity=30),this.$bindEffectHandlebar(".instance.i1",function(e){return new o["Particle"](e,n)})},i2:function(){this.$bindEffectHandlebar(".instance.i2",function(n){return new o["Particle"](n,{color:"#25bfff",lineShape:"cube",range:2e3,proximity:100,parallax:!0})})},i3:function(){this.$bindEffectHandlebar(".instance.i3",function(n){return new o["Particle"](n,{range:0,num:.1,minSpeed:.01,maxSpeed:.05,minR:.2,maxR:1.2})})}}},f=s,u=(t("29be"),t("2877")),l=Object(u["a"])(f,i,c,!1,null,"97b07236",null);e["default"]=l.exports},b5f8:function(n,e,t){}}]);