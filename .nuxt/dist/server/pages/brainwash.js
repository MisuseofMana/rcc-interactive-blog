exports.ids = [2];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VImg/VImg.sass
var VImg = __webpack_require__(93);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
function inserted(el, binding) {
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === 'object' ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver((entries = [], observer) => {
    /* istanbul ignore if */
    if (!el._observe) return; // Just in case, should never fire
    // If is not quiet or has already been
    // initted, invoke the user callback

    if (handler && (!modifiers.quiet || el._observe.init)) {
      const isIntersecting = Boolean(entries.find(entry => entry.isIntersecting));
      handler(entries, observer, isIntersecting);
    } // If has already been initted and
    // has the once modifier, unbind


    if (el._observe.init && modifiers.once) unbind(el); // Otherwise, mark the observer as initted
    else el._observe.init = true;
  }, options);
  el._observe = {
    init: false,
    observer
  };
  observer.observe(el);
}

function unbind(el) {
  /* istanbul ignore if */
  if (!el._observe) return;

  el._observe.observer.unobserve(el);

  delete el._observe;
}

const Intersect = {
  inserted,
  unbind
};
/* harmony default export */ var intersect = (Intersect);
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VResponsive/VResponsive.sass
var VResponsive = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/measurable/index.js
var measurable = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VResponsive/VResponsive.js
 // Mixins

 // Utils


/* @vue/component */

/* harmony default export */ var VResponsive_VResponsive = (Object(mixins["a" /* default */])(measurable["a" /* default */]).extend({
  name: 'v-responsive',
  props: {
    aspectRatio: [String, Number],
    contentClass: String
  },
  computed: {
    computedAspectRatio() {
      return Number(this.aspectRatio);
    },

    aspectStyle() {
      return this.computedAspectRatio ? {
        paddingBottom: 1 / this.computedAspectRatio * 100 + '%'
      } : undefined;
    },

    __cachedSizer() {
      if (!this.aspectStyle) return [];
      return this.$createElement('div', {
        style: this.aspectStyle,
        staticClass: 'v-responsive__sizer'
      });
    }

  },
  methods: {
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-responsive__content',
        class: this.contentClass
      }, this.$slots.default);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-responsive',
      style: this.measurableStyles,
      on: this.$listeners
    }, [this.__cachedSizer, this.genContent()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VResponsive/index.js


/* harmony default export */ var components_VResponsive = (VResponsive_VResponsive);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
// Styles
 // Directives

 // Components

 // Mixins

 // Utils




const hasIntersect = typeof window !== 'undefined' && 'IntersectionObserver' in window;
/* @vue/component */

/* harmony default export */ var VImg_VImg = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(components_VResponsive, themeable["a" /* default */]).extend({
  name: 'v-img',
  directives: {
    intersect: intersect
  },
  props: {
    alt: String,
    contain: Boolean,
    eager: Boolean,
    gradient: String,
    lazySrc: String,
    options: {
      type: Object,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: () => ({
        root: undefined,
        rootMargin: undefined,
        threshold: undefined
      })
    },
    position: {
      type: String,
      default: 'center center'
    },
    sizes: String,
    src: {
      type: [String, Object],
      default: ''
    },
    srcset: String,
    transition: {
      type: [Boolean, String],
      default: 'fade-transition'
    }
  },

  data() {
    return {
      currentSrc: '',
      image: null,
      isLoading: true,
      calculatedAspectRatio: undefined,
      naturalWidth: undefined,
      hasError: false
    };
  },

  computed: {
    computedAspectRatio() {
      return Number(this.normalisedSrc.aspect || this.calculatedAspectRatio);
    },

    normalisedSrc() {
      return this.src && typeof this.src === 'object' ? {
        src: this.src.src,
        srcset: this.srcset || this.src.srcset,
        lazySrc: this.lazySrc || this.src.lazySrc,
        aspect: Number(this.aspectRatio || this.src.aspect)
      } : {
        src: this.src,
        srcset: this.srcset,
        lazySrc: this.lazySrc,
        aspect: Number(this.aspectRatio || 0)
      };
    },

    __cachedImage() {
      if (!(this.normalisedSrc.src || this.normalisedSrc.lazySrc || this.gradient)) return [];
      const backgroundImage = [];
      const src = this.isLoading ? this.normalisedSrc.lazySrc : this.currentSrc;
      if (this.gradient) backgroundImage.push(`linear-gradient(${this.gradient})`);
      if (src) backgroundImage.push(`url("${src}")`);
      const image = this.$createElement('div', {
        staticClass: 'v-image__image',
        class: {
          'v-image__image--preload': this.isLoading,
          'v-image__image--contain': this.contain,
          'v-image__image--cover': !this.contain
        },
        style: {
          backgroundImage: backgroundImage.join(', '),
          backgroundPosition: this.position
        },
        key: +this.isLoading
      });
      /* istanbul ignore if */

      if (!this.transition) return image;
      return this.$createElement('transition', {
        attrs: {
          name: this.transition,
          mode: 'in-out'
        }
      }, [image]);
    }

  },
  watch: {
    src() {
      // Force re-init when src changes
      if (!this.isLoading) this.init(undefined, undefined, true);else this.loadImage();
    },

    '$vuetify.breakpoint.width': 'getSrc'
  },

  mounted() {
    this.init();
  },

  methods: {
    init(entries, observer, isIntersecting) {
      // If the current browser supports the intersection
      // observer api, the image is not observable, and
      // the eager prop isn't being used, do not load
      if (hasIntersect && !isIntersecting && !this.eager) return;

      if (this.normalisedSrc.lazySrc) {
        const lazyImg = new Image();
        lazyImg.src = this.normalisedSrc.lazySrc;
        this.pollForSize(lazyImg, null);
      }
      /* istanbul ignore else */


      if (this.normalisedSrc.src) this.loadImage();
    },

    onLoad() {
      this.getSrc();
      this.isLoading = false;
      this.$emit('load', this.src);

      if (this.image && (this.normalisedSrc.src.endsWith('.svg') || this.normalisedSrc.src.startsWith('data:image/svg+xml'))) {
        if (this.image.naturalHeight && this.image.naturalWidth) {
          this.naturalWidth = this.image.naturalWidth;
          this.calculatedAspectRatio = this.image.naturalWidth / this.image.naturalHeight;
        } else {
          this.calculatedAspectRatio = 1;
        }
      }
    },

    onError() {
      this.hasError = true;
      this.$emit('error', this.src);
    },

    getSrc() {
      /* istanbul ignore else */
      if (this.image) this.currentSrc = this.image.currentSrc || this.image.src;
    },

    loadImage() {
      const image = new Image();
      this.image = image;

      image.onload = () => {
        /* istanbul ignore if */
        if (image.decode) {
          image.decode().catch(err => {
            Object(console["c" /* consoleWarn */])(`Failed to decode image, trying to render anyway\n\n` + `src: ${this.normalisedSrc.src}` + (err.message ? `\nOriginal error: ${err.message}` : ''), this);
          }).then(this.onLoad);
        } else {
          this.onLoad();
        }
      };

      image.onerror = this.onError;
      this.hasError = false;
      image.src = this.normalisedSrc.src;
      this.sizes && (image.sizes = this.sizes);
      this.normalisedSrc.srcset && (image.srcset = this.normalisedSrc.srcset);
      this.aspectRatio || this.pollForSize(image);
      this.getSrc();
    },

    pollForSize(img, timeout = 100) {
      const poll = () => {
        const {
          naturalHeight,
          naturalWidth
        } = img;

        if (naturalHeight || naturalWidth) {
          this.naturalWidth = naturalWidth;
          this.calculatedAspectRatio = naturalWidth / naturalHeight;
        } else if (!img.complete && this.isLoading && !this.hasError && timeout != null) {
          setTimeout(poll, timeout);
        }
      };

      poll();
    },

    genContent() {
      const content = components_VResponsive.options.methods.genContent.call(this);

      if (this.naturalWidth) {
        this._b(content.data, 'div', {
          style: {
            width: `${this.naturalWidth}px`
          }
        });
      }

      return content;
    },

    __genPlaceholder() {
      if (this.$slots.placeholder) {
        const placeholder = this.isLoading ? [this.$createElement('div', {
          staticClass: 'v-image__placeholder'
        }, this.$slots.placeholder)] : [];
        if (!this.transition) return placeholder[0];
        return this.$createElement('transition', {
          props: {
            appear: true,
            name: this.transition
          }
        }, placeholder);
      }
    }

  },

  render(h) {
    const node = components_VResponsive.options.render.call(this, h);
    const data = Object(mergeData["a" /* default */])(node.data, {
      staticClass: 'v-image',
      attrs: {
        'aria-label': this.alt,
        role: this.alt ? 'img' : undefined
      },
      class: this.themeClasses,
      // Only load intersect directive if it
      // will work in the current browser.
      directives: hasIntersect ? [{
        name: 'intersect',
        modifiers: {
          once: true
        },
        value: {
          handler: this.init,
          options: this.options
        }
      }] : undefined
    });
    node.children = [this.__cachedSizer, this.__cachedImage, this.__genPlaceholder(), this.genContent()];
    return h(node.tag, data, node.children);
  }

}));

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tower.7120d7d.png";

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b5af881a", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./algorithm.png": 201,
	"./antenna.png": 202,
	"./bedding.png": 203,
	"./block.png": 204,
	"./board.png": 205,
	"./calculation.png": 206,
	"./circuit.png": 207,
	"./cloud.png": 208,
	"./coil.png": 209,
	"./curve.png": 210,
	"./decay.png": 211,
	"./districts.png": 212,
	"./door.png": 213,
	"./dose.png": 214,
	"./figures.png": 215,
	"./flow.png": 216,
	"./formula.png": 217,
	"./gear.png": 218,
	"./geometry.png": 219,
	"./graph.png": 220,
	"./knob.png": 221,
	"./melt.png": 222,
	"./minimap.png": 223,
	"./path.png": 224,
	"./power.png": 225,
	"./pyramid.png": 226,
	"./radius.png": 227,
	"./realms.png": 228,
	"./section.png": 229,
	"./sphere.png": 230,
	"./stage.png": 231,
	"./table.png": 232,
	"./tower.png": 134
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 200;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/algorithm.08ce0ab.png";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/antenna.1cbfb01.png";

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bedding.89554ad.png";

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/block.2e75540.png";

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/board.56c6a02.png";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/calculation.d314ab0.png";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/circuit.7105c43.png";

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cloud.2a6706c.png";

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/coil.af65f88.png";

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/curve.7e1d8e9.png";

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/decay.d80d1d2.png";

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/districts.37a6a46.png";

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/door.2315fbb.png";

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dose.f8a2e09.png";

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/figures.c5465ce.png";

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flow.997bc91.png";

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/formula.8237d21.png";

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gear.bae0286.png";

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/geometry.7edd38b.png";

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/graph.ea7f1cc.png";

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/knob.337f4e5.png";

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/melt.09e23de.png";

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/minimap.746292b.png";

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/path.2ded811.png";

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/power.35204fa.png";

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pyramid.46e8a0c.png";

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/radius.b1d6ffc.png";

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/realms.67edef8.png";

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section.8327658.png";

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sphere.d5809a9.png";

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/stage.41ae291.png";

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/table.c4e1a9d.png";

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_brainwash_vue_vue_type_style_index_0_id_4162b746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_brainwash_vue_vue_type_style_index_0_id_4162b746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_brainwash_vue_vue_type_style_index_0_id_4162b746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_brainwash_vue_vue_type_style_index_0_id_4162b746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_brainwash_vue_vue_type_style_index_0_id_4162b746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".overflow-hidden[data-v-4162b746]{overflow-y:hidden}.linkSize[data-v-4162b746]{min-width:400px;min-height:400px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/brainwash.vue?vue&type=template&id=4162b746&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"overflow-hidden",attrs:{"fill-height":""}},[_c('v-row',{staticClass:"overflow-hidden"},[_c('v-col',{staticClass:"d-flex justify-center align-center",attrs:{"cols":"12"}},[_c('NuxtLink',{attrs:{"to":"/briefing"}},[_c('div',{staticClass:"linkSize d-flex align-center justify-center"},[_c('transition',{attrs:{"name":"brainwash","mode":"out-in"}},[_c('v-img',{key:_vm.whichClutter,staticClass:"abberation",attrs:{"max-width":"400","src":__webpack_require__(200)("./" + _vm.whichClutter + ".png"),"alt":_vm.whichClutter}})],1)],1)])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/brainwash.vue?vue&type=template&id=4162b746&scoped=true&

// EXTERNAL MODULE: ./plugins/pageMusic.js + 1 modules
var pageMusic = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/brainwash.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var brainwashvue_type_script_lang_js_ = ({
  name: 'Brainwash',
  music: 'theme',
  transition: 'fadeSwitch',
  layout: 'landing',
  mixins: [pageMusic["a" /* default */]],

  data() {
    return {
      clutterNames: ['decay', 'formula', 'graph', 'cloud', 'dose', 'table', 'flow', 'section', 'geometry', 'calculation', 'block', 'bedding', 'path', 'algorithm', 'antenna', 'board', 'circuit', 'coil', 'curve', 'districts', 'door', 'figures', 'gear', 'knob', 'melt', 'power', 'pyramid', 'radius', 'realms', 'sphere', 'stage', 'tower'],
      randomNumber: 0,
      changeClutter: undefined
    };
  },

  computed: {
    whichClutter() {
      return this.clutterNames[this.randomNumber];
    }

  },
  methods: {
    rollRandomNumber: max => {
      return Math.floor(Math.random() * max);
    }
  },

  mounted() {
    this.randomNumber = this.rollRandomNumber(this.clutterNames.length);
    this.changeClutter = setInterval(() => {
      if (this.randomNumber >= this.clutterNames.length - 1) {
        this.randomNumber = 0;
      } else {
        this.randomNumber++;
        this.maxWidth += 10;
      }
    }, 500);
  },

  beforeDestroy() {
    clearInterval(this.changeClutter);
  }

});
// CONCATENATED MODULE: ./pages/brainwash.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_brainwashvue_type_script_lang_js_ = (brainwashvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 3 modules
var VImg = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(90);

// CONCATENATED MODULE: ./pages/brainwash.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(233)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_brainwashvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4162b746",
  "aea3ec32"
  
)

/* harmony default export */ var brainwash = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("1cdf85c7", content, true)

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("2fba213c", content, true)

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "howler"
var external_howler_ = __webpack_require__(84);

// CONCATENATED MODULE: ./plugins/audio.js

const theme = new external_howler_["Howl"]({
  src: ['/audio/theme.mp3'],
  loop: true,
  volume: .5
});
const aboutTheme = new external_howler_["Howl"]({
  src: ['/audio/aboutTheme.mp3'],
  loop: true,
  volume: .1
});
const realmsTheme = new external_howler_["Howl"]({
  src: ['/audio/realms.mp3'],
  loop: true,
  volume: .05
});
const lierd = new external_howler_["Howl"]({
  src: ['/audio/lierd.mp3'],
  loop: true,
  volume: 1
});
const fencedcity = new external_howler_["Howl"]({
  src: ['/audio/fencedcity.mp3'],
  loop: true,
  volume: .3
});
const shakencolony = new external_howler_["Howl"]({
  src: ['/audio/shakencolony.mp3'],
  loop: true,
  volume: .2
});
const willowwoods = new external_howler_["Howl"]({
  src: ['/audio/willowwoods.mp3'],
  loop: true,
  volume: .05
});
const relicgarden = new external_howler_["Howl"]({
  src: ['/audio/relicgarden.mp3'],
  loop: true,
  volume: .1
});
const councillors = new external_howler_["Howl"]({
  src: ['/audio/councillors.mp3'],
  loop: true,
  volume: .1
});
const replacements = new external_howler_["Howl"]({
  src: ['/audio/replacements.mp3'],
  loop: true,
  volume: .05
});
const inhabitedrealm = new external_howler_["Howl"]({
  src: ['/audio/inhabitedrealm.mp3'],
  loop: true,
  volume: .2
});
const artifacts = new external_howler_["Howl"]({
  src: ['/audio/artifacts.mp3'],
  loop: true,
  volume: .2
});
/* harmony default export */ var audio = ({
  theme,
  aboutTheme,
  realmsTheme,
  lierd,
  fencedcity,
  shakencolony,
  willowwoods,
  relicgarden,
  councillors,
  replacements,
  inhabitedrealm,
  artifacts
});
// CONCATENATED MODULE: ./plugins/pageMusic.js

let volumes = {};
let target = "";

function storeVolume(musicName) {
  volumes[musicName] = audio[musicName]._volume;
  console.log(volumes);
}

/* harmony default export */ var pageMusic = __webpack_exports__["a"] = ({
  mounted() {
    if (this.$data.slug) target = this.$data.slug;else if (this.$options.music) target = this.$options.music; // if the volume isn't stored, store it

    if (!(target in volumes)) storeVolume(target); // reference the desired fade to volume

    const fadeToVolume = volumes[target];
    audio[target]._volume = 0;
    audio[target].play();
    audio[target].fade(0, fadeToVolume, 1500);
  },

  beforeDestroy() {
    // reference the desired fade from volume
    const fadeFromVolume = volumes[target];
    audio[target].fade(fadeFromVolume, 0, 1500);
    audio[target].on('fade', function () {
      if (audio[target]._volume === 0) {
        audio[target].pause(currentlyPlaying);
      }
    });
  }

});

/***/ })

};;
//# sourceMappingURL=brainwash.js.map