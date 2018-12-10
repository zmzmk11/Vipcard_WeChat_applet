global.webpackJsonp([14],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(163);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: '积分兑换'
    }
});

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6e5727ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(166);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(164)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e5727ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6e5727ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\integral\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e5727ec", Component.options)
  } else {
    hotAPI.reload("data-v-6e5727ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 165:
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
      integral: [],
      kmid: ""
    };
  },


  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapState */])({
    iv_salt: function iv_salt(state) {
      return state.iv_salt;
    },
    userInfo: function userInfo(state) {
      return state.userInfo;
    },
    cardinfo: function cardinfo(state) {
      return state.cardinfo;
    }
  })),

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])(["getForward"]), {
    toExchange: function toExchange() {
      var url = "../conversion_record/main?kmid=" + this.kmid;
      wx.navigateTo({ url: url });
    },
    toDetail: function toDetail(id) {
      var url = "../coupon_detail/main?id=" + id;
      wx.navigateTo({ url: url });
    },
    toCouponDetail: function toCouponDetail(couponid) {
      var url = "../coupon_detail/main?couponid=" + couponid;
      wx.navigateTo({ url: url });
    }
  }),
  onLoad: function onLoad(options) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res, state, res1;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.kmid = options.kmid;
              _context.next = 3;
              return _this.getForward([{
                url: "/member/integral/exchange/rule/list",
                mutations: "setRulelist"
              }, {
                create_company_id: _this.$store.state.company_id,
                companyid: _this.$store.state.company_id,
                kmid: options.kmid,
                pos: 1,
                size: 10
              }]);

            case 3:
              res = _context.sent;

              _this.integral = res.data;
              console.log(res);

              /*更新积分*/

              state = _this.$store.state;
              _context.next = 9;
              return _this.getForward([{
                url: "/member/info",
                mutations: "setCardInfo"
              }, {
                company_id: state.company_id,
                kmid: options.kmid,
                platformsource: state.platformsource
              }]);

            case 9:
              res1 = _context.sent;

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "first"
  }, [_c('div', {
    staticClass: "inline"
  }, [(_vm.userInfo.avatarUrl) ? _c('img', {
    staticClass: "userinfo-avatar",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "background-size": "cover"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "userinfo-nickname"
  }, [_vm._v(_vm._s(_vm.cardinfo.data.membername))])]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "inline",
    staticStyle: {
      "height": "7vh"
    }
  }, [_c('div', {
    staticClass: "integral"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/积分.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "font"
  }, [_vm._v("积分\n        "), _c('div', {
    staticStyle: {
      "color": "rgb(255, 115, 0)",
      "margin-left": "3vw"
    }
  }, [_vm._v(_vm._s(_vm.cardinfo.data.integralbalance))])])]), _vm._v(" "), _c('div', {
    staticClass: "cline"
  }), _vm._v(" "), _c('div', {
    staticClass: "integral",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toExchange
    }
  }, [_c('img', {
    staticClass: "img",
    staticStyle: {
      "margin-left": "12vw"
    },
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/记录 (1).png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "font"
  }, [_vm._v("兑换记录")])])])]), _vm._v(" "), _c('div', {
    staticClass: "second"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n      大家都在兑\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "line",
    staticStyle: {
      "width": "100vw",
      "margin-left": "0vw",
      "margin-top": "1vh"
    }
  }), _vm._v(" "), _c('scroll-view', {
    style: ({
      'height': '70vh'
    }),
    attrs: {
      "scroll-y": true
    }
  }, [(!_vm.integral.length) ? _c('div', {
    staticClass: "null"
  }, [_c('img', {
    staticClass: "empty",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/empty_prompt.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "font_empty"
  }, [_vm._v("该商家暂无积分兑换规则~")])]) : _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.integral), function(item, index) {
    return _c('div', {
      key: item,
      staticClass: "item"
    }, [(item.id) ? _c('div', {
      staticClass: "coupon",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetail(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "coupon_name"
    }, [_vm._v(_vm._s(item.change_money + item.present_money) + "元会员充值卡")]), _vm._v(" "), _c('div', {
      staticClass: "coupon_integral"
    }, [_vm._v(_vm._s(item.integral)), _c('span', {
      staticStyle: {
        "color": "gray"
      }
    }, [_vm._v("积分")])]), _vm._v(" "), _c('img', {
      staticClass: "img1",
      attrs: {
        "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/优惠券icon.png"
      }
    })]) : (item.integral_id) ? _c('div', {
      staticClass: "coupon",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.toCouponDetail(item.integral_id)
        }
      }
    }, [_c('div', {
      staticClass: "coupon_name"
    }, [_vm._v(_vm._s(item.couponname))]), _vm._v(" "), _c('div', {
      staticClass: "coupon_integral"
    }, [_vm._v(_vm._s(item.integral)), _c('span', {
      staticStyle: {
        "color": "gray"
      }
    }, [_vm._v("积分")])]), _vm._v(" "), _c('img', {
      staticClass: "img2",
      attrs: {
        "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/优惠券icon.png"
      }
    })]) : _vm._e(), _vm._v(" "), ((index + 1) % 2 == 0) ? _c('div', {
      staticClass: "line",
      staticStyle: {
        "margin-top": "1vh",
        "margin-left": "-55vw",
        "width": "100vw"
      }
    }) : _vm._e()])
  }))])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e5727ec", esExports)
  }
}

/***/ })

},[162]);
//# sourceMappingURL=main.js.map