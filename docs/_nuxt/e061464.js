(window.webpackJsonp=window.webpackJsonp||[]).push([[8],Array(270).concat([function(e,t,o){"use strict";var n=o(296),audio={theme:new n.Howl({src:["/audio/theme.mp3"],loop:!0,volume:.5}),aboutTheme:new n.Howl({src:["/audio/aboutTheme.mp3"],loop:!0,volume:.1}),realmsTheme:new n.Howl({src:["/audio/realms.mp3"],loop:!0,volume:.05}),lierd:new n.Howl({src:["/audio/lierd.mp3"],loop:!0,volume:1}),fencedcity:new n.Howl({src:["/audio/fencedcity.mp3"],loop:!0,volume:.3}),shakencolony:new n.Howl({src:["/audio/shakencolony.mp3"],loop:!0,volume:.2}),willowwoods:new n.Howl({src:["/audio/willowwoods.mp3"],loop:!0,volume:.05}),relicgarden:new n.Howl({src:["/audio/relicgarden.mp3"],loop:!0,volume:.1}),councillors:new n.Howl({src:["/audio/councillors.mp3"],loop:!0,volume:.1}),replacements:new n.Howl({src:["/audio/replacements.mp3"],loop:!0,volume:.05}),inhabitedrealm:new n.Howl({src:["/audio/inhabitedrealm.mp3"],loop:!0,volume:.2}),artifacts:new n.Howl({src:["/audio/artifacts.mp3"],loop:!0,volume:.2}),aggregatelagoon:new n.Howl({src:["/audio/aggregatelagoon.mp3"],loop:!0,volume:.4}),silentshores:new n.Howl({src:["/audio/silentshores.mp3"],loop:!0,volume:.1})},r={},c="";t.a={mounted:function(){var e;console.log(this.$options.music),this.$data.slug?c=this.$data.slug:this.$options.music&&(c=this.$options.music),c in r||(r[e=c]=audio[e]._volume);var t=r[c];audio[c]._volume=0,audio[c].play(),audio[c].fade(0,t,1500)},beforeDestroy:function(){var e=r[c];audio[c].fade(e,0,1500),audio[c].on("fade",(function(){0===audio[c]._volume&&(audio[c].pause(currentlyPlaying),console.log(currentlyPlaying))}))}}},,function(e,t,o){e.exports=o.p+"img/archives.03e5cb8.jpg"},function(e,t,o){e.exports=o.p+"img/artifact.d4ae83c.jpg"},function(e,t,o){e.exports=o.p+"img/bell.0c78bad.jpg"},function(e,t,o){e.exports=o.p+"img/cabinet.2c042a9.jpg"},function(e,t,o){e.exports=o.p+"img/cottage.e796a21.jpg"},function(e,t,o){e.exports=o.p+"img/curse.3f2d06f.jpg"},function(e,t,o){e.exports=o.p+"img/defense.7c89b96.jpg"},function(e,t,o){e.exports=o.p+"img/drawers.0ce78bf.jpg"},function(e,t,o){e.exports=o.p+"img/font.5081047.jpg"},function(e,t,o){e.exports=o.p+"img/gate.9a0b6e4.jpg"},function(e,t,o){e.exports=o.p+"img/moth.1fbd6d6.jpg"},function(e,t,o){e.exports=o.p+"img/mushroom.e103fe6.jpg"},function(e,t,o){e.exports=o.p+"img/perfumes.09a03fb.jpg"},function(e,t,o){e.exports=o.p+"img/pod.5962dee.jpg"},function(e,t,o){e.exports=o.p+"img/sculpting.ae76dc2.jpg"},function(e,t,o){e.exports=o.p+"img/sealilly.3c3a702.jpg"},function(e,t,o){e.exports=o.p+"img/seeds.eeb6def.jpg"},function(e,t,o){e.exports=o.p+"img/shell.2cadb5b.jpg"},function(e,t,o){e.exports=o.p+"img/statue.d675f2c.jpg"},function(e,t,o){e.exports=o.p+"img/tangle.ba20588.jpg"},function(e,t,o){e.exports=o.p+"img/tree.e17e0d1.jpg"},function(e,t,o){e.exports=o.p+"img/vase.9d06d7a.jpg"},function(e,t,o){e.exports=o.p+"img/wheel.2aa584b.jpg"},function(e,t,o){e.exports=o.p+"img/witchwood.b625b46.jpg"},,function(e,t,o){var map={"./aggregateLagoon/cryptid.jpg":312,"./aggregateLagoon/curl.jpg":313,"./aggregateLagoon/drive.jpg":314,"./aggregateLagoon/gate.jpg":315,"./aggregateLagoon/gaze.jpg":316,"./aggregateLagoon/pillar.jpg":317,"./aggregateLagoon/post.jpg":318,"./aggregateLagoon/priest.jpg":319,"./aggregateLagoon/rubble.jpg":320,"./aggregateLagoon/touch.jpg":321,"./aggregateLagoon/wheel.jpg":322,"./artifacts/archives.jpg":272,"./artifacts/artifact.jpg":273,"./artifacts/bell.jpg":274,"./artifacts/cabinet.jpg":275,"./artifacts/cottage.jpg":276,"./artifacts/curse.jpg":277,"./artifacts/defense.jpg":278,"./artifacts/drawers.jpg":279,"./artifacts/font.jpg":280,"./artifacts/gate.jpg":281,"./artifacts/moth.jpg":282,"./artifacts/mushroom.jpg":283,"./artifacts/perfumes.jpg":284,"./artifacts/pod.jpg":285,"./artifacts/sculpting.jpg":286,"./artifacts/sealilly.jpg":287,"./artifacts/seeds.jpg":288,"./artifacts/shell.jpg":289,"./artifacts/statue.jpg":290,"./artifacts/tangle.jpg":291,"./artifacts/tree.jpg":292,"./artifacts/vase.jpg":293,"./artifacts/wheel.jpg":294,"./artifacts/witchwood.jpg":295,"./councillors/coven.jpg":323,"./councillors/operator10.jpg":324,"./councillors/oracle.jpg":325,"./councillors/straightman.jpg":326,"./fencedCity/corner.jpg":327,"./fencedCity/top.jpg":328,"./fencedCity/wall.jpg":329,"./inhabited/above.jpg":330,"./inhabited/barn.jpg":331,"./inhabited/corner.jpg":332,"./inhabited/dam.jpg":333,"./inhabited/factory.jpg":334,"./inhabited/farmhouse.jpg":335,"./inhabited/fog.jpg":336,"./inhabited/ghost.jpg":337,"./inhabited/hill.jpg":338,"./inhabited/overlook.jpg":339,"./inhabited/path.jpg":340,"./inhabited/shortcut.jpg":341,"./lierd/basin.jpg":342,"./lierd/cabin.jpg":343,"./lierd/curse.jpg":344,"./lierd/flow.jpg":345,"./lierd/fountain.jpg":346,"./lierd/path.jpg":347,"./lierd/sprawl.jpg":348,"./lierd/well.jpg":349,"./lierd/wilds.jpg":350,"./oldBurrow/bean.jpg":351,"./oldBurrow/dragonfly.jpg":352,"./oldBurrow/droop.jpg":353,"./oldBurrow/pod.jpg":354,"./oldBurrow/puff.jpg":355,"./oldBurrow/rattle.jpg":356,"./redacted/roll.jpg":357,"./replacements/carridge.jpg":358,"./replacements/float.jpg":359,"./replacements/labs.jpg":360,"./replacements/labs2.jpg":361,"./replacements/lagoon.jpg":362,"./replacements/notice.jpg":363,"./replacements/relocate.jpg":364,"./replacements/same.jpg":365,"./replacements/signal.jpg":366,"./replacements/terminal.jpg":367,"./replacements/towers.jpg":368,"./shakenColony/divide.jpg":369,"./shakenColony/expanse.jpg":370,"./shakenColony/fountain.jpg":371,"./shakenColony/imageTemplate_0008_Layer 19.jpg":372,"./shakenColony/lake.jpg":373,"./shakenColony/line.jpg":374,"./shakenColony/mound.jpg":375,"./shakenColony/pipe.jpg":376,"./shakenColony/site.jpg":377,"./shakenColony/triangle.jpg":378,"./shakenColony/well.jpg":379,"./silentShore/destination.jpg":380,"./silentShore/grave.jpg":381,"./silentShore/nightbreak.jpg":382,"./silentShore/rolling.jpg":383,"./silentShore/shore.jpg":384,"./silentShore/skyward.jpg":385,"./silentShore/stones.jpg":386,"./silentShore/tower.jpg":387,"./silentShore/wayside.jpg":388,"./willowWoods/beyond.jpg":389,"./willowWoods/etchings.jpg":390,"./willowWoods/gnarl.jpg":391,"./willowWoods/knot.jpg":392,"./willowWoods/moss.jpg":393,"./willowWoods/rituals.jpg":394,"./willowWoods/vestal.jpg":395,"./willowWoods/witch.jpg":396};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=297},,,,,,,,,,,,,,,function(e,t,o){e.exports=o.p+"img/cryptid.60f33ab.jpg"},function(e,t,o){e.exports=o.p+"img/curl.6a43808.jpg"},function(e,t,o){e.exports=o.p+"img/drive.6bed90a.jpg"},function(e,t,o){e.exports=o.p+"img/gate.c1ebc02.jpg"},function(e,t,o){e.exports=o.p+"img/gaze.50f5c0c.jpg"},function(e,t,o){e.exports=o.p+"img/pillar.1218fbd.jpg"},function(e,t,o){e.exports=o.p+"img/post.28bf83d.jpg"},function(e,t,o){e.exports=o.p+"img/priest.e70da1f.jpg"},function(e,t,o){e.exports=o.p+"img/rubble.534b821.jpg"},function(e,t,o){e.exports=o.p+"img/touch.7e7ce96.jpg"},function(e,t,o){e.exports=o.p+"img/wheel.749ecdb.jpg"},function(e,t,o){e.exports=o.p+"img/coven.7463535.jpg"},function(e,t,o){e.exports=o.p+"img/operator10.b9090b8.jpg"},function(e,t,o){e.exports=o.p+"img/oracle.9ec229d.jpg"},function(e,t,o){e.exports=o.p+"img/straightman.9b0bf48.jpg"},function(e,t,o){e.exports=o.p+"img/corner.ca3451d.jpg"},function(e,t,o){e.exports=o.p+"img/top.14de6bc.jpg"},function(e,t,o){e.exports=o.p+"img/wall.346395c.jpg"},function(e,t,o){e.exports=o.p+"img/above.8f1004f.jpg"},function(e,t,o){e.exports=o.p+"img/barn.b628c4a.jpg"},function(e,t,o){e.exports=o.p+"img/corner.013e32e.jpg"},function(e,t,o){e.exports=o.p+"img/dam.07ac2c5.jpg"},function(e,t,o){e.exports=o.p+"img/factory.7cdf037.jpg"},function(e,t,o){e.exports=o.p+"img/farmhouse.c8f6b41.jpg"},function(e,t,o){e.exports=o.p+"img/fog.12d8213.jpg"},function(e,t,o){e.exports=o.p+"img/ghost.0787c51.jpg"},function(e,t,o){e.exports=o.p+"img/hill.b0d9571.jpg"},function(e,t,o){e.exports=o.p+"img/overlook.36186d5.jpg"},function(e,t,o){e.exports=o.p+"img/path.507cd91.jpg"},function(e,t,o){e.exports=o.p+"img/shortcut.5b4fb4b.jpg"},function(e,t,o){e.exports=o.p+"img/basin.cc6d2ee.jpg"},function(e,t,o){e.exports=o.p+"img/cabin.e9d1501.jpg"},function(e,t,o){e.exports=o.p+"img/curse.f68e591.jpg"},function(e,t,o){e.exports=o.p+"img/flow.be5a50f.jpg"},function(e,t,o){e.exports=o.p+"img/fountain.e470309.jpg"},function(e,t,o){e.exports=o.p+"img/path.b6162d1.jpg"},function(e,t,o){e.exports=o.p+"img/sprawl.01fa9fa.jpg"},function(e,t,o){e.exports=o.p+"img/well.4e6f047.jpg"},function(e,t,o){e.exports=o.p+"img/wilds.a7642b9.jpg"},function(e,t,o){e.exports=o.p+"img/bean.ca37e11.jpg"},function(e,t,o){e.exports=o.p+"img/dragonfly.7c34cf0.jpg"},function(e,t,o){e.exports=o.p+"img/droop.35b054e.jpg"},function(e,t,o){e.exports=o.p+"img/pod.faab9c1.jpg"},function(e,t,o){e.exports=o.p+"img/puff.eb6c25b.jpg"},function(e,t,o){e.exports=o.p+"img/rattle.387b706.jpg"},function(e,t,o){e.exports=o.p+"img/roll.498daf5.jpg"},function(e,t,o){e.exports=o.p+"img/carridge.a08edd7.jpg"},function(e,t,o){e.exports=o.p+"img/float.56c41c8.jpg"},function(e,t,o){e.exports=o.p+"img/labs.9eaa74e.jpg"},function(e,t,o){e.exports=o.p+"img/labs2.4e4d6cb.jpg"},function(e,t,o){e.exports=o.p+"img/lagoon.29ea4d0.jpg"},function(e,t,o){e.exports=o.p+"img/notice.ad7d0d2.jpg"},function(e,t,o){e.exports=o.p+"img/relocate.ec95930.jpg"},function(e,t,o){e.exports=o.p+"img/same.554c069.jpg"},function(e,t,o){e.exports=o.p+"img/signal.844fd3b.jpg"},function(e,t,o){e.exports=o.p+"img/terminal.82e56f2.jpg"},function(e,t,o){e.exports=o.p+"img/towers.ecbc7bd.jpg"},function(e,t,o){e.exports=o.p+"img/divide.1c5c1b2.jpg"},function(e,t,o){e.exports=o.p+"img/expanse.4f38dda.jpg"},function(e,t,o){e.exports=o.p+"img/fountain.a3f1dde.jpg"},function(e,t,o){e.exports=o.p+"img/imageTemplate_0008_Layer 19.841d8b7.jpg"},function(e,t,o){e.exports=o.p+"img/lake.b1ae635.jpg"},function(e,t,o){e.exports=o.p+"img/line.ef1f73f.jpg"},function(e,t,o){e.exports=o.p+"img/mound.5b1bf7c.jpg"},function(e,t,o){e.exports=o.p+"img/pipe.c79c8be.jpg"},function(e,t,o){e.exports=o.p+"img/site.2338149.jpg"},function(e,t,o){e.exports=o.p+"img/triangle.61c5db6.jpg"},function(e,t,o){e.exports=o.p+"img/well.6ac0ca2.jpg"},function(e,t,o){e.exports=o.p+"img/destination.9b4e224.jpg"},function(e,t,o){e.exports=o.p+"img/grave.0d18e77.jpg"},function(e,t,o){e.exports=o.p+"img/nightbreak.d4e71cc.jpg"},function(e,t,o){e.exports=o.p+"img/rolling.810cd5a.jpg"},function(e,t,o){e.exports=o.p+"img/shore.d593136.jpg"},function(e,t,o){e.exports=o.p+"img/skyward.58ca093.jpg"},function(e,t,o){e.exports=o.p+"img/stones.78e0e77.jpg"},function(e,t,o){e.exports=o.p+"img/tower.82ebfc4.jpg"},function(e,t,o){e.exports=o.p+"img/wayside.0a6671c.jpg"},function(e,t,o){e.exports=o.p+"img/beyond.69021a2.jpg"},function(e,t,o){e.exports=o.p+"img/etchings.10dc18d.jpg"},function(e,t,o){e.exports=o.p+"img/gnarl.403396d.jpg"},function(e,t,o){e.exports=o.p+"img/knot.866e7fa.jpg"},function(e,t,o){e.exports=o.p+"img/moss.1761c0f.jpg"},function(e,t,o){e.exports=o.p+"img/rituals.a1a9898.jpg"},function(e,t,o){e.exports=o.p+"img/vestal.6b6c6c0.jpg"},function(e,t,o){e.exports=o.p+"img/witch.23117e9.jpg"},,,,function(e,t,o){var content=o(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("7d5e0845",content,!0,{sourceMap:!1})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,o){"use strict";o(400)},function(e,t,o){var n=o(11)(!1);n.push([e.i,".border[data-v-1a14728a]{transform:scale(1);padding:30px;z-index:-2;transition:all .25s}.border[data-v-1a14728a],.theme--light.v-icon[data-v-1a14728a]{color:var(--v-primary-base)}.grow[data-v-1a14728a]{padding:15px}.grow[data-v-1a14728a],.grow[data-v-1a14728a]:hover{transition:all .25s}.grow[data-v-1a14728a]:hover{cursor:pointer;padding:0}.realmImage[data-v-1a14728a]{filter:sepia() hue-rotate(35deg);z-index:-1}.upcomingRealmImage[data-v-1a14728a]{filter:saturate(0);z-index:-1}.shadow[data-v-1a14728a]{box-shadow:inset 30px 30px 25px var(--v-background-base),inset -30px -30px 25px var(--v-background-base)}",""]),e.exports=n},,,,,,,,,,,function(e,t,o){"use strict";o.r(t);o(9),o(6),o(8),o(17),o(18);var n=o(1),r=o(270),c=o(82);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var f={name:"Gallery",music:"realmsTheme",transition:"fadeSwitch",mixins:[r.a],computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("gallery",["pages"]))},m=(o(449),o(33)),j=o(40),d=o.n(j),x=o(262),h=o(268),w=o(261),v=o(266),y=o(128),k=o(263),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"my-5"},[n("div",{staticClass:"text-h2 primary--text"},[e._v("\n        REALMS\n    ")]),e._v(" "),n("v-row",e._l(e.pages,(function(t,r){return n("v-col",{key:r,staticClass:"mb-8",attrs:{lg:"4",md:"12",sm:"12"}},[n("div",{staticClass:"border"},[n("div",{staticClass:"text-h3",class:t.slug?"primary--text":"grey--text darken-1"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"text-subtitle-1 mb-5",class:t.slug?"primary--text":"grey--text darken-1"},[e._v(e._s(t.subtitle))]),e._v(" "),t.slug?n("div",{staticClass:"my-2 mb-3 shadow grow"},[n("NuxtLink",{attrs:{to:"insights/"+t.slug}},[n("v-img",{staticClass:"realmImage",attrs:{"lazy-src":"/images/realmPlaceholder.jpg","aspect-ratio":1,src:o(297)("./"+t.imagesDirectory+"/"+t.titlePhoto+".jpg"),alt:"a photo representing the realm you're visiting"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)})],1)],1):n("div",{staticClass:"my-2 mb-3 shadow"},[n("v-img",{staticClass:"upcomingRealmImage",attrs:{"lazy-src":"/images/realmPlaceholder.jpg","aspect-ratio":1,src:o(297)("./"+t.imagesDirectory+"/"+t.titlePhoto+".jpg"),alt:"a photo representing the realm you're visiting"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)})],1),e._v(" "),n("div",{staticClass:"d-flex justify-space-between"},[n("div",{staticClass:"ml-4"},e._l(t.iconNames,(function(o,r){return n("v-icon",{key:o+r,attrs:{color:t.slug?"primary":"grey darken-1"}},[e._v("mdi-"+e._s(o))])})),1),e._v(" "),t.publishedRecently?n("v-icon",{directives:[{name:"icon",rawName:"v-icon"}],staticClass:"mr-4",attrs:{color:"yellow"}},[e._v("mdi-alert-decagram")]):e._e()],1)])])})),1)],1)}),[],!1,null,"1a14728a",null);t.default=component.exports;d()(component,{VCol:x.a,VContainer:h.a,VIcon:w.a,VImg:v.a,VProgressCircular:y.a,VRow:k.a})}])]);