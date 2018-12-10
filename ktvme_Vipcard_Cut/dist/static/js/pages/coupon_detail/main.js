global.webpackJsonp([19],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(138);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: '商品详情'
    }
});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_12e7a620_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_12e7a620_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\coupon_detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12e7a620", Component.options)
  } else {
    hotAPI.reload("data-v-12e7a620", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(2);



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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      id: "",
      integral: "",
      couponid: "",
      cardinfo: [],
      coupon_detail: {}
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapState */])({
    cardinfo: function cardinfo(state) {
      return state.cardinfo;
    }
  })),
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward"]), {
    toExchange: function toExchange() {
      this.cardinfo = this.$store.state.cardinfo;
      var integralbalance = this.cardinfo.data.integralbalance;
      var integral = this.coupon_detail.integral;
      wx.showModal({
        title: "",
        content: "是否确认兑换？",
        confirmColor: "rgb(255, 115, 0)",
        success: function success(res) {
          if (res.confirm) {
            if (integralbalance < integral) {
              wx.showToast({
                title: "积分余额不足！",
                icon: "none",
                duration: 2000
              });
            }
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    }
  }),
  onLoad: function onLoad(options) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res, _res;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.id = options.id;
              _this.couponid = options.couponid;

              if (!(_this.id === undefined)) {
                _context.next = 10;
                break;
              }

              _context.next = 5;
              return _this.getForward([{
                url: "/member/coupon/detail",
                mutations: "setCouponDetail"
              }, {
                integral_id: _this.couponid
              }]);

            case 5:
              res = _context.sent;

              console.log(res);
              _this.coupon_detail = res.result;
              _context.next = 15;
              break;

            case 10:
              _context.next = 12;
              return _this.getForward([{
                url: "/member/integral/exchange/money/detail",
                mutations: "setCouponDetail"
              }, {
                id: _this.id
              }]);

            case 12:
              _res = _context.sent;

              console.log(_res);
              _this.coupon_detail = _res.data;

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    style: ({
      'height': '90vh'
    }),
    attrs: {
      "scroll-y": true
    }
  }, [_c('div', {
    staticClass: "pic"
  }, [_c('div', {
    staticStyle: {
      "height": "20vh"
    }
  }, [_c('img', {
    staticClass: "coupon",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/优惠券icon.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "10vh",
      "background": "linear-gradient(#f5f5f5, #868282)"
    }
  }, [(_vm.coupon_detail.remarks) ? _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.coupon_detail.change_money + _vm.coupon_detail.present_money) + "元充值卡")]) : _vm._e(), _vm._v(" "), (_vm.coupon_detail.coupon_introduce_html) ? _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.coupon_detail.coupon_long_name))]) : _vm._e()])]), _vm._v(" "), (_vm.coupon_detail.remarks) ? _c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v("商品介绍：")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.coupon_detail.remarks)
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.coupon_detail.remarks))])])])]) : _vm._e(), _vm._v(" "), (_vm.coupon_detail.coupon_introduce_html) ? _c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v("商品介绍：")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.coupon_detail.coupon_introduce_html)
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.coupon_detail.coupon_introduce_html))])])])]) : _vm._e(), _vm._v(" "), (_vm.coupon_detail.coupon_date_html) ? _c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v("有效日期：")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.coupon_detail.coupon_date_html)
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.coupon_detail.coupon_date_html))])])])]) : _vm._e(), _vm._v(" "), (_vm.coupon_detail.coupon_time_html) ? _c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v("可用时段：")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.coupon_detail.coupon_time_html)
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.coupon_detail.coupon_time_html))])])])]) : _vm._e(), _vm._v(" "), (_vm.coupon_detail.coupon_company_html) ? _c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v("适用商家：")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.coupon_detail.coupon_company_html)
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.coupon_detail.coupon_company_html))])])])]) : _vm._e(), _vm._v(" "), (_vm.coupon_detail.coupon_unusable_room_type_html) ? _c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v("超市不可用包厢类型：")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.coupon_detail.coupon_unusable_room_type_html)
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.coupon_detail.coupon_unusable_room_type_html))])])])]) : _vm._e(), _vm._v(" "), (_vm.coupon_detail.coupon_memo_html) ? _c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v("使用须知：")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.coupon_detail.coupon_memo_html)
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.coupon_detail.coupon_memo_html))])])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "part1"
  }, [_c('span', {
    staticStyle: {
      "font-size": "30rpx",
      "color": "gray",
      "margin-left": "5vw"
    }
  }, [_vm._v("单价：")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "rgb(255, 115, 0)",
      "margin-left": "2vw"
    }
  }, [_vm._v(_vm._s(_vm.coupon_detail.integral))]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-left": "2vw"
    }
  }, [_vm._v("积分")])]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toExchange
    }
  }, [_vm._v("立即兑换")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12e7a620", esExports)
  }
}

/***/ })

},[137]);
//# sourceMappingURL=main.js.map