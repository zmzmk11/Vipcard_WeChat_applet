global.webpackJsonp([21],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(122);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: '选择会员卡'
    }
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d5157dea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(125);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d5157dea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d5157dea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\choose_bindcard\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5157dea", Component.options)
  } else {
    hotAPI.reload("data-v-d5157dea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(2);



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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      unbindcard: {},
      binded: {},
      flag: ""
    };
  },


  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapState */])({
    iv_salt: function iv_salt(state) {
      return state.iv_salt;
    }
  })),

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])(["getForward"]), {
    toVerifyPhone: function toVerifyPhone(index) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var store, res, res1, url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _this.$store.state;

                if (!(_this.flag == 1)) {
                  _context.next = 15;
                  break;
                }

                _context.next = 4;
                return _this.getForward([{
                  url: "/member/bind",
                  mutations: "setBindCard"
                }, {
                  bindcompanyid: store.company_id,
                  bindsource: 1,
                  cardnum: _this.unbindcard[index].cardnum,
                  customerid: store.customer_id,
                  companyid: store.company_id,
                  platformsource: 0,
                  openid: store.openid,
                  user_source: 1
                }]);

              case 4:
                res = _context.sent;

                if (!(res.ret == 0)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 8;
                return _this.getForward([{
                  url: "/member/info",
                  mutations: "setCardInfo"
                }, {
                  company_id: store.company_id,
                  kmid: _this.unbindcard[index].kmid,
                  platformsource: store.platformsource
                }]);

              case 8:
                res1 = _context.sent;

                if (!res1.data.isupdate) {
                  setTimeout(function () {
                    var url = "../update_information/main?kmid=" + _this.unbindcard[index].kmid;
                    wx.navigateTo({ url: url });
                  }, 1000);
                  wx.showToast({
                    title: "验证通过！",
                    icon: "success",
                    duration: 1000
                  });
                } else {
                  setTimeout(function () {
                    var url = "../home/main";
                    wx.reLaunch({ url: url });
                  }, 1000);
                  wx.showToast({
                    title: "绑卡成功！",
                    icon: "success",
                    duration: 1000
                  });
                }
                _context.next = 13;
                break;

              case 12:
                if (res.ret == 116) {
                  wx.showToast({
                    title: "绑卡失败！",
                    icon: "none",
                    duration: 1500
                  });
                }

              case 13:
                _context.next = 17;
                break;

              case 15:
                url = "../verify_phonenum/main?index=" + index;

                wx.navigateTo({ url: url });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }),
  onLoad: function onLoad(options) {
    if (options.flag) {
      this.flag = options.flag;
    }
    this.unbindcard = this.$store.state.unbind;
  }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "head"
  }, [_vm._v("请选择会员卡进行绑定")]), _vm._v(" "), _vm._l((_vm.unbindcard), function(item, index) {
    return _c('div', {
      key: item.cardnum,
      staticClass: "card",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.toVerifyPhone(index)
        }
      }
    }, [_c('div', {
      staticClass: "gradename"
    }, [_vm._v(_vm._s(item.gradename))]), _vm._v(" "), _c('div', {
      staticClass: "cardnum"
    }, [_vm._v("No." + _vm._s(item.cardnum))]), _vm._v(" "), _c('div', {
      staticClass: "companyname"
    }, [_vm._v(_vm._s(item.companyname))])])
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d5157dea", esExports)
  }
}

/***/ })

},[121]);
//# sourceMappingURL=main.js.map