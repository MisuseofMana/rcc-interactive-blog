(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{270:function(n,o,e){"use strict";var t=e(296),audio={theme:new t.Howl({src:["/audio/theme.mp3"],loop:!0,volume:.5}),aboutTheme:new t.Howl({src:["/audio/aboutTheme.mp3"],loop:!0,volume:.1}),realmsTheme:new t.Howl({src:["/audio/realms.mp3"],loop:!0,volume:.05}),lierd:new t.Howl({src:["/audio/lierd.mp3"],loop:!0,volume:1}),fencedcity:new t.Howl({src:["/audio/fencedcity.mp3"],loop:!0,volume:.3}),shakencolony:new t.Howl({src:["/audio/shakencolony.mp3"],loop:!0,volume:.2}),willowwoods:new t.Howl({src:["/audio/willowwoods.mp3"],loop:!0,volume:.05}),relicgarden:new t.Howl({src:["/audio/relicgarden.mp3"],loop:!0,volume:.1}),councillors:new t.Howl({src:["/audio/councillors.mp3"],loop:!0,volume:.1}),replacements:new t.Howl({src:["/audio/replacements.mp3"],loop:!0,volume:.05}),inhabitedrealm:new t.Howl({src:["/audio/inhabitedrealm.mp3"],loop:!0,volume:.2}),artifacts:new t.Howl({src:["/audio/artifacts.mp3"],loop:!0,volume:.2}),aggregatelagoon:new t.Howl({src:["/audio/aggregatelagoon.mp3"],loop:!0,volume:.4}),silentshores:new t.Howl({src:["/audio/silentshores.mp3"],loop:!0,volume:.1})},r={},c="";o.a={mounted:function(){var n;this.$data.slug?c=this.$data.slug:this.$options.music&&(c=this.$options.music),c in r||(r[n=c]=audio[n]._volume,console.log(r));var o=r[c];audio[c]._volume=0,audio[c].play(),audio[c].fade(0,o,1500)},beforeDestroy:function(){var n=r[c];audio[c].fade(n,0,1500),audio[c].on("fade",(function(){0===audio[c]._volume&&audio[c].pause(currentlyPlaying)}))}}},309:function(n,o,e){n.exports=e.p+"img/minimap.746292b.png"},310:function(n,o,e){n.exports=e.p+"img/tower.7120d7d.png"},394:function(n,o,e){var content=e(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(12).default)("b5af881a",content,!0,{sourceMap:!1})},402:function(n,o,e){var map={"./algorithm.png":403,"./antenna.png":404,"./bedding.png":405,"./block.png":406,"./board.png":407,"./calculation.png":408,"./circuit.png":409,"./cloud.png":410,"./coil.png":411,"./curve.png":412,"./decay.png":413,"./districts.png":414,"./door.png":415,"./dose.png":416,"./figures.png":417,"./flow.png":418,"./formula.png":419,"./gear.png":420,"./geometry.png":421,"./graph.png":422,"./knob.png":423,"./melt.png":424,"./minimap.png":309,"./path.png":425,"./power.png":426,"./pyramid.png":427,"./radius.png":428,"./realms.png":429,"./section.png":430,"./sphere.png":431,"./stage.png":432,"./table.png":433,"./tower.png":310};function t(n){var o=r(n);return e(o)}function r(n){if(!e.o(map,n)){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}return map[n]}t.keys=function(){return Object.keys(map)},t.resolve=r,n.exports=t,t.id=402},403:function(n,o,e){n.exports=e.p+"img/algorithm.08ce0ab.png"},404:function(n,o,e){n.exports=e.p+"img/antenna.1cbfb01.png"},405:function(n,o,e){n.exports=e.p+"img/bedding.89554ad.png"},406:function(n,o,e){n.exports=e.p+"img/block.2e75540.png"},407:function(n,o,e){n.exports=e.p+"img/board.56c6a02.png"},408:function(n,o,e){n.exports=e.p+"img/calculation.d314ab0.png"},409:function(n,o,e){n.exports=e.p+"img/circuit.7105c43.png"},410:function(n,o,e){n.exports=e.p+"img/cloud.2a6706c.png"},411:function(n,o,e){n.exports=e.p+"img/coil.af65f88.png"},412:function(n,o,e){n.exports=e.p+"img/curve.7e1d8e9.png"},413:function(n,o,e){n.exports=e.p+"img/decay.d80d1d2.png"},414:function(n,o,e){n.exports=e.p+"img/districts.37a6a46.png"},415:function(n,o,e){n.exports=e.p+"img/door.2315fbb.png"},416:function(n,o,e){n.exports=e.p+"img/dose.f8a2e09.png"},417:function(n,o,e){n.exports=e.p+"img/figures.c5465ce.png"},418:function(n,o,e){n.exports=e.p+"img/flow.997bc91.png"},419:function(n,o,e){n.exports=e.p+"img/formula.8237d21.png"},420:function(n,o,e){n.exports=e.p+"img/gear.bae0286.png"},421:function(n,o,e){n.exports=e.p+"img/geometry.7edd38b.png"},422:function(n,o,e){n.exports=e.p+"img/graph.ea7f1cc.png"},423:function(n,o,e){n.exports=e.p+"img/knob.337f4e5.png"},424:function(n,o,e){n.exports=e.p+"img/melt.09e23de.png"},425:function(n,o,e){n.exports=e.p+"img/path.2ded811.png"},426:function(n,o,e){n.exports=e.p+"img/power.35204fa.png"},427:function(n,o,e){n.exports=e.p+"img/pyramid.46e8a0c.png"},428:function(n,o,e){n.exports=e.p+"img/radius.b1d6ffc.png"},429:function(n,o,e){n.exports=e.p+"img/realms.67edef8.png"},430:function(n,o,e){n.exports=e.p+"img/section.8327658.png"},431:function(n,o,e){n.exports=e.p+"img/sphere.d5809a9.png"},432:function(n,o,e){n.exports=e.p+"img/stage.41ae291.png"},433:function(n,o,e){n.exports=e.p+"img/table.c4e1a9d.png"},434:function(n,o,e){"use strict";e(394)},435:function(n,o,e){var t=e(11)(!1);t.push([n.i,".overflow-hidden[data-v-4162b746]{overflow-y:hidden}.linkSize[data-v-4162b746]{min-width:400px;min-height:400px}",""]),n.exports=t},455:function(n,o,e){"use strict";e.r(o);var t={name:"Brainwash",music:"theme",transition:"fadeSwitch",layout:"landing",mixins:[e(270).a],data:function(){return{clutterNames:["decay","formula","graph","cloud","dose","table","flow","section","geometry","calculation","block","bedding","path","algorithm","antenna","board","circuit","coil","curve","districts","door","figures","gear","knob","melt","power","pyramid","radius","realms","sphere","stage","tower"],randomNumber:0,changeClutter:void 0}},computed:{whichClutter:function(){return this.clutterNames[this.randomNumber]}},methods:{rollRandomNumber:function(n){return Math.floor(Math.random()*n)}},mounted:function(){var n=this;this.randomNumber=this.rollRandomNumber(this.clutterNames.length),this.changeClutter=setInterval((function(){n.randomNumber>=n.clutterNames.length-1?n.randomNumber=0:(n.randomNumber++,n.maxWidth+=10)}),500)},beforeDestroy:function(){clearInterval(this.changeClutter)}},r=(e(434),e(33)),c=e(40),l=e.n(c),m=e(262),d=e(268),f=e(266),h=e(263),component=Object(r.a)(t,(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("v-container",{staticClass:"overflow-hidden",attrs:{"fill-height":""}},[t("v-row",{staticClass:"overflow-hidden"},[t("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[t("NuxtLink",{attrs:{to:"/briefing"}},[t("div",{staticClass:"linkSize d-flex align-center justify-center"},[t("transition",{attrs:{name:"brainwash",mode:"out-in"}},[t("v-img",{key:n.whichClutter,staticClass:"abberation",attrs:{"max-width":"400",src:e(402)("./"+n.whichClutter+".png"),alt:n.whichClutter}})],1)],1)])],1)],1)],1)}),[],!1,null,"4162b746",null);o.default=component.exports;l()(component,{VCol:m.a,VContainer:d.a,VImg:f.a,VRow:h.a})}}]);