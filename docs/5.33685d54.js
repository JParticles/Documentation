webpackJsonp([5,9],{634:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.createEffect=t.throttle=t.clearThrottle=void 0;var o=n(637),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=[];t.clearThrottle=function(){i.length=0},t.throttle=function(){e(window).on("resize.instance, scroll.instance",r.default.throttle(function(){i.forEach(function(e){var t=e.data("effect");!e.data("useClickPaused")&&r.default.checkInView(e)?t.open():t.pause()})},200))},t.createEffect=function(t,n){var o=e(t),r=o.find(".demo"),a=n(r[0]);o.data("effect",a).find(".open").click(function(){o.data("useClickPaused",!1),a.open()}).end().find(".pause").click(function(){o.data("useClickPaused",!0),a.pause()}),i.push(o)}}).call(t,n(325))},635:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(378),i=o(r),a=n(379),l=o(a),u=n(380),c=o(u),s=n(382),f=o(s),d=n(381),m=o(d),p=n(8),h=o(p),v=n(324),_=n(634),g=n(636),w=function(e){function t(){(0,l.default)(this,t);var e=(0,f.default)(this,(t.__proto__||(0,i.default)(t)).call(this));e.router=(0,g.parseRouter)(),e.filename=e.router.path.substring(10);var o=n(638)("./"+v.language.language+"/md/examples/"+e.filename+".md");return(e.content=remarkable.render(o))&&(e.content=e.content.replace(/(<a href=".*?")>/g,'$1 target="_blank">').replace(/(<pre)>/g,'$1 class="prettyprint">').replace(/(<table.*?>)((.|\s)*?)(?=<\/table>)/g,function(e,t,n){return t+n.replace(/`(.*?)`/g,"<code>$1</code>")})),e}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){JParticles.utils.isFunction(this.beforeComponentDidMount)&&this.beforeComponentDidMount(),prettyPrint(),(0,_.throttle)()}},{key:"componentWillUnmount",value:function(){JParticles.utils.isFunction(this.beforeComponentWillUnMount)&&this.beforeComponentWillUnMount(),(0,_.clearThrottle)()}},{key:"render",value:function(){return h.default.createElement("div",{className:this.filename,dangerouslySetInnerHTML:{__html:this.content}})}}]),t}(p.Component);t.default=w,e.exports=t.default},637:function(e,t,n){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0});var o={checkInView:function(e){var t=n,o=t(e).offset().top,r=t(e).outerHeight(),i=t(window).scrollTop(),a=t(window).height();return o+r>i&&o<i+a},throttle:function(e,t,n){if(!t&&!n)return e;var o=new Date,r=void 0;return function(i){var a=this;t?(clearTimeout(r),r=setTimeout(function(){e.call(a,i)},t)):new Date-o>n&&(o=new Date,e.call(this,i))}}};t.default=o,e.exports=t.default}).call(t,n(325))},638:function(e,t,n){function o(e){return n(r(e))}function r(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./cn/md/changelog.md":383,"./cn/md/examples/intro.md":384,"./cn/md/examples/particle.md":387,"./cn/md/examples/quick_start.md":388,"./cn/md/examples/snow.md":389,"./cn/md/examples/wave.md":390,"./cn/md/examples/wave_loading.md":391,"./en/md/changelog.md":385,"./en/md/examples/intro.md":386,"./en/md/examples/particle.md":392,"./en/md/examples/quick_start.md":393,"./en/md/examples/snow.md":394,"./en/md/examples/wave.md":395,"./en/md/examples/wave_loading.md":396};o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id=638},706:function(e,t,n){"use strict";(function(o){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(378),a=r(i),l=n(379),u=r(l),c=n(380),s=r(c),f=n(382),d=r(f),m=n(381),p=r(m),h=n(8),v=(r(h),n(324)),_=n(634),g=n(635),w=r(g),b=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"beforeComponentDidMount",value:function(){(0,_.createEffect)(".instance-1",function(e){return new JParticles.wave(e,{num:3,lineColor:["rgba(0, 190, 112, .5)","rgba(0, 190, 112, .7)","rgba(0, 190, 112, .9)"],lineWidth:[.5,.7,.9],offsetLeft:[2,1,0],offsetTop:.75,crestHeight:[10,14,18],rippleNum:(0,v.isMobile)()?1:2,speed:.1})}),(0,_.createEffect)(".instance-2",function(e){var t={crestHeight:[10,14,18],speed:.1},n=new JParticles.wave(e,JParticles.utils.extend({num:3,lineColor:["#e53d27","#42e527","#27C9E5"],lineWidth:[.7,.9,1],offsetTop:.65,rippleNum:(0,v.isMobile)()?1:2},t));return o(".instance-2 .voice").on("mousedown",function(){var e=this;clearInterval(this.timer),this.timer=setInterval(function(){var e=[10,14,18].map(function(e){return e+=JParticles.utils.limitRandom(20,-20),e<1&&e>0&&(e=Math.ceil(e)),e});n.setOptions({crestHeight:e,speed:[.2,.14,.1]})},100),o(document).on("mouseup.voice",function(){o(document).off("mouseup.voice"),clearInterval(e.timer),n.setOptions(t)})}),n}),(0,_.createEffect)(".instance-3",function(e){return new JParticles.wave(e,{num:1,line:!1,fill:!0,fillColor:"#27C9E5",offsetTop:.75,crestHeight:8,rippleNum:3,speed:.07})})}}]),t}(w.default);t.default=b,e.exports=t.default}).call(t,n(325))}});