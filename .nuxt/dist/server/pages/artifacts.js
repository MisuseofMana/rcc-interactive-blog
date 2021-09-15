exports.ids = [1];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/archives.03e5cb8.jpg";

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/artifact.d4ae83c.jpg";

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bell.0c78bad.jpg";

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cabinet.2c042a9.jpg";

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cottage.e796a21.jpg";

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/curse.3f2d06f.jpg";

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/defense.7c89b96.jpg";

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/drawers.0ce78bf.jpg";

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/font.5081047.jpg";

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gate.9a0b6e4.jpg";

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moth.1fbd6d6.jpg";

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mushroom.e103fe6.jpg";

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/perfumes.09a03fb.jpg";

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pod.5962dee.jpg";

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sculpting.ae76dc2.jpg";

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sealilly.3c3a702.jpg";

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/seeds.eeb6def.jpg";

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shell.2cadb5b.jpg";

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/statue.d675f2c.jpg";

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tangle.ba20588.jpg";

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tree.e17e0d1.jpg";

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vase.9d06d7a.jpg";

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wheel.2aa584b.jpg";

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/witchwood.b625b46.jpg";

/***/ }),

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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./council.png": 126,
	"./fencedcity.png": 127,
	"./inhabited.png": 128,
	"./lierd.png": 129,
	"./pigpen.png": 99,
	"./predictions.png": 130,
	"./relic.png": 131,
	"./shakencolony.png": 132,
	"./willowwoods.png": 133
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
webpackContext.id = 125;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/council.7d64b41.png";

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fencedcity.f1ccc8d.png";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/inhabited.497e16f.png";

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lierd.f1ea9b6.png";

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/predictions.b46753a.png";

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/relic.92d6ccc.png";

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shakencolony.8d81275.png";

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/willowwoods.1b48e84.png";

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f28b9064", content, true, context)
};

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./archives.jpg": 100,
	"./artifact.jpg": 101,
	"./bell.jpg": 102,
	"./cabinet.jpg": 103,
	"./cottage.jpg": 104,
	"./curse.jpg": 105,
	"./defense.jpg": 106,
	"./drawers.jpg": 107,
	"./font.jpg": 108,
	"./gate.jpg": 109,
	"./moth.jpg": 110,
	"./mushroom.jpg": 111,
	"./perfumes.jpg": 112,
	"./pod.jpg": 113,
	"./sculpting.jpg": 114,
	"./sealilly.jpg": 115,
	"./seeds.jpg": 116,
	"./shell.jpg": 117,
	"./statue.jpg": 118,
	"./tangle.jpg": 119,
	"./tree.jpg": 120,
	"./vase.jpg": 121,
	"./wheel.jpg": 122,
	"./witchwood.jpg": 123
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
webpackContext.id = 197;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_artifacts_vue_vue_type_style_index_0_id_763e1288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_artifacts_vue_vue_type_style_index_0_id_763e1288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_artifacts_vue_vue_type_style_index_0_id_763e1288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_artifacts_vue_vue_type_style_index_0_id_763e1288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_artifacts_vue_vue_type_style_index_0_id_763e1288_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bar[data-v-763e1288]{background:var(--v-primary-darken4)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/artifacts.vue?vue&type=template&id=763e1288&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"my-5"},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('div',{staticClass:"text-h2 mb-8 primary--text"},[_vm._v("\n                Artifacts\n            ")])])],1),_vm._v(" "),_vm._l((_vm.realms),function(items,index){return _c('div',{key:index + items.realmIcon},[_c('v-row',{staticClass:"text-h3 mb-10 primary--text",attrs:{"align":"center","justify":"center"}},[_c('v-col',{attrs:{"cols":"4"}},[_c('div',{staticClass:"mb-5"},[_vm._v("\n                    "+_vm._s(items.realmName)+"\n                ")])]),_vm._v(" "),_c('v-col',{staticClass:"d-flex justify-end",attrs:{"cols":"4"}},[_c('div',[_c('v-img',{staticClass:"abberation",attrs:{"height":"300","width":"300","aspect-ratio":1,"src":__webpack_require__(125)("./" + (items.realmIcon) + ".png"),"alt":""}})],1)])],1),_vm._v(" "),_c('v-row',{staticClass:"mb-8",attrs:{"justify":"center"}},_vm._l((items.artifacts),function(artifacts,index){return _c('v-col',{key:index,staticClass:"primary--text mb-5",attrs:{"lg":"10","md":"4","sm":"12"}},[_c('div',{staticClass:"pa-10 bar d-flex flex-row justify-start align-center"},[_c('div',{staticClass:"mr-10"},[_c('v-img',{staticClass:"abberation",attrs:{"contain":"","height":"300","width":"300","lazy-src":"/images/lazyload.jpg","src":__webpack_require__(197)("./" + (artifacts.path) + ".jpg"),"alt":""},scopedSlots:_vm._u([{key:"placeholder",fn:function(){return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}})]},proxy:true}],null,true)})],1),_vm._v(" "),_c('div',[_c('div',{staticClass:"text-h3 mb-3"},[_vm._v(_vm._s(artifacts.title))]),_vm._v(" "),_c('div',{staticClass:"text-body-1 mb-3"},[_vm._v(_vm._s(artifacts.description))]),_vm._v(" "),_c('div',{staticClass:"text-body-1"},[_vm._v(_vm._s(artifacts.description2))])])])])}),1)],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/artifacts.vue?vue&type=template&id=763e1288&scoped=true&

// EXTERNAL MODULE: ./plugins/pageMusic.js + 1 modules
var pageMusic = __webpack_require__(97);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/artifacts.vue?vue&type=script&lang=js&
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
//
//


/* harmony default export */ var artifactsvue_type_script_lang_js_ = ({
  name: 'Artifacts',
  music: 'artifacts',
  transition: 'fadeSwitch',
  mixins: [pageMusic["a" /* default */]],
  computed: { ...Object(external_vuex_["mapState"])('artifacts', ['realms'])
  }
});
// CONCATENATED MODULE: ./pages/artifacts.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_artifactsvue_type_script_lang_js_ = (artifactsvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/artifacts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(198)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_artifactsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "763e1288",
  "b879739a"
  
)

/* harmony default export */ var artifacts = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pigpen.0b7a30c.png";

/***/ })

};;
//# sourceMappingURL=artifacts.js.map