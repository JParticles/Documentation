webpackJsonp([3,5],{316:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(34),o=a(r),u=n(35),l=a(u),i=n(36),c=a(i),d=n(38),s=a(d),f=n(37),p=a(f),m=n(9),h=a(m),v=n(39),_=n(747),g=n(101),w=function(e){function t(){(0,l.default)(this,t);var e=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this));e.router=(0,g.parseRouter)(),e.filename=e.router.path.substring(10);var a=n(749)("./"+v.language.language+"/md/examples/"+e.filename+".md");return(e.content=remarkable.render(a))&&(e.content=e.content.replace(/(<a href=".*?")>/g,'$1 target="_blank">').replace(/(<pre)>/g,'$1 class="prettyprint">').replace(/(<table.*?>)((.|\s)*?)<\/table>/g,function(e,t,n){return'<div class="table-scroll">'+(t+n.replace(/`((.|\s)*?)`/g,"<code>$1</code>"))+"</table></div>"}).replace(/<h3>((.|s)*?)(?=<\/h3>)/g,function(e,t){return'<h3 id="'+t.replace(/[.,\s]+/g,"_")+'">'+t}).replace(/<h4>((.|s)*?)(?=<\/h4>)/g,function(e,t){return'<h4 id="'+t.replace(/[.,\s]+/g,"_")+'">'+t})),e}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){if(this.router.hash){var e=$("#"+this.router.hash);e.length&&$(window).scrollTop(e.offset().top)}JParticles.utils.isFunction(this.beforeComponentDidMount)&&this.beforeComponentDidMount(),prettyPrint(),(0,_.throttle)()}},{key:"componentWillUnmount",value:function(){JParticles.utils.isFunction(this.beforeComponentWillUnMount)&&this.beforeComponentWillUnMount(),(0,_.clearThrottle)()}},{key:"render",value:function(){return h.default.createElement("div",{className:this.filename,dangerouslySetInnerHTML:{__html:this.content}})}}]),t}(m.Component);t.default=w,e.exports=t.default},319:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(34),o=a(r),u=n(35),l=a(u),i=n(36),c=a(i),d=n(38),s=a(d),f=n(37),p=a(f),m=n(9),h=(a(m),n(747)),v=n(316),_=a(v),g=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"beforeComponentDidMount",value:function(){var e=$(".instance");(0,h.createEffect)(e,function(e){return new JParticles.particle(e,{distance:60,num:30})}),$(".instance-ctrl").find(".open").click(function(){e.data("useClickPaused",!1).data("effect").open()}).end().find(".pause").click(function(){e.data("useClickPaused",!0).data("effect").pause()})}}]),t}(_.default);t.default=g,e.exports=t.default},747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createEffect=t.throttle=t.clearThrottle=void 0;var a=n(748),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=[];t.clearThrottle=function(){o.length=0},t.throttle=function(){$(window).on("resize.instance, scroll.instance",r.default.throttle(function(){o.forEach(function(e){var t=e.data("effect");!e.data("useClickPaused")&&r.default.checkInView(e)?t.open():t.pause()})},200))},t.createEffect=function(e,t){var n=$(e),a=n.find(".demo"),r=t(a[0]);n.data("effect",r).find(".open").click(function(){n.data("useClickPaused",!1),r.open()}).end().find(".pause").click(function(){n.data("useClickPaused",!0),r.pause()}),o.push(n)}},748:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={checkInView:function(e){var t=jQuery,n=t(e).offset().top,a=t(e).outerHeight(),r=t(window).scrollTop(),o=t(window).height();return n+a>r&&n<r+o},throttle:function(e,t,n){if(!t&&!n)return e;var a=new Date,r=void 0;return function(o){var u=this;t?(clearTimeout(r),r=setTimeout(function(){e.call(u,o)},t)):new Date-a>n&&(a=new Date,e.call(this,o))}}};t.default=a,e.exports=t.default},749:function(e,t,n){function a(e){return n(r(e))}function r(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./cn/md/changelog.md":102,"./cn/md/examples/intro.md":131,"./cn/md/examples/particle.md":133,"./cn/md/examples/quick_start.md":134,"./cn/md/examples/snow.md":135,"./cn/md/examples/wave.md":136,"./cn/md/examples/wave_loading.md":137,"./en/md/changelog.md":103,"./en/md/examples/intro.md":132,"./en/md/examples/particle.md":138,"./en/md/examples/quick_start.md":139,"./en/md/examples/snow.md":140,"./en/md/examples/wave.md":141,"./en/md/examples/wave_loading.md":142};a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=749}});