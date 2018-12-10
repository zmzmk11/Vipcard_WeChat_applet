global.webpackJsonp([6],{

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(207);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: 'K米会员卡'
  }
});

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6e48bb0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(210);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(208)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e48bb0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6e48bb0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\type\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e48bb0c", Component.options)
  } else {
    hotAPI.reload("data-v-6e48bb0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 208:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(1);



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
      mobile: "",
      customer_id: ""
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["member_bind", "getForward"]), {
    Pay: function Pay() {
      wx.requestPayment({
        timeStamp: "",
        nonceStr: "",
        package: "",
        signType: "MD5",
        paySign: "",
        success: function success(res) {},
        fail: function fail(res) {}
      });
    },
    getPhoneNumber: function getPhoneNumber(e) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var store, res, url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!e.mp.detail.encryptedData) {
                  _context.next = 10;
                  break;
                }

                store = _this.$store.state;
                _context.next = 4;
                return _this.getForward([{
                  url: "/wechatcallbackserver/api/mini/decrypt",
                  mutations: "setDdata",
                  server: 1
                }, {
                  ai: store.ai,
                  ed: e.mp.detail.encryptedData,
                  iv: e.mp.detail.iv,
                  sk: store.sessionKey
                }]);

              case 4:
                res = _context.sent;

                _this.mobile = JSON.parse(res.data).purePhoneNumber;
                _this.getCustomerid();
                if (store.login_type == 1) {
                  wx.showModal({
                    title: "温馨提示",
                    content: "请通过扫描商家二维码使用该小程序！",
                    showCancel: false
                  });
                } else if (store.login_type == 2) {
                  url = "../bindcard/main";

                  wx.navigateTo({ url: url });
                }
                _context.next = 11;
                break;

              case 10:
                console.log("用户按了拒绝按钮");

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    toRegister: function toRegister() {
      var url = "../register/main";
      wx.navigateTo({ url: url });
    },
    toBind: function toBind() {
      if (this.customer_id == "") {
        wx.showToast({
          title: "请先输入手机号！",
          icon: "none",
          duration: 2000
        });
      } else {
        var store = this.$store.state;
        if (store.login_type == 1) {
          var url = "../chooseKtv/main?type=1";
          wx.navigateTo({ url: url });
        } else if (store.login_type == 2) {
          var url = "../bindcard/main";
          wx.navigateTo({ url: url });
        }
      }
    },
    bindGetUserInfo: function bindGetUserInfo(e) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var store, res, url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(e.mp.detail);
                store = _this2.$store.state;
                _context2.next = 4;
                return _this2.getForward([{
                  url: "/wechatcallbackserver/api/mini/decrypt",
                  mutations: "setDdate",
                  server: 1
                }, {
                  ai: store.ai,
                  ed: e.mp.detail.encryptedData,
                  iv: e.mp.detail.iv,
                  sk: store.sessionKey
                }]);

              case 4:
                res = _context2.sent;

                console.log(JSON.parse(res.data));
                if (_this2.customer_id == "") {
                  wx.showToast({
                    title: "请先输入手机号！",
                    icon: "none",
                    duration: 2000
                  });
                } else {
                  if (e.mp.detail.rawData) {
                    if (store.login_type == 1) {
                      url = "../chooseKtv/main?type=2";

                      wx.navigateTo({ url: url });
                    } else if (store.login_type == 2) {
                      url = "../bindcard/main";

                      wx.navigateTo({ url: url });
                    }
                  } else {
                    //用户按了拒绝按钮
                    console.log("用户按了拒绝按钮");
                  }
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    getCustomerid: function getCustomerid() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.$store.state.mobile = _this3.mobile;
                _context3.next = 3;
                return _this3.member_bind({
                  openid: _this3.$store.state.openid,
                  mobile: _this3.mobile,
                  type: 2
                });

              case 3:
                res = _context3.sent;

                if (res.ret == 0) {
                  _this3.customer_id = res.data.customer_id;
                  // this.$store.state.customer_id = res.data.customer_id;
                  // console.log("customer_id:"+this.$store.state.customer_id)
                } else {
                  wx.showToast({
                    title: "customer_id获取失败！",
                    icon: "none",
                    duration: 1000
                  });
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  }),
  mounted: function mounted() {
    wx.setEnableDebug({
      enableDebug: true
    });
  }
});

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('img', {
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/people_default.png"
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getPhoneNumber",
      "eventid": '0'
    },
    on: {
      "getphonenumber": _vm.getPhoneNumber
    }
  }, [_vm._v("立即前往绑卡")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e48bb0c", esExports)
  }
}

/***/ })

},[206]);
//# sourceMappingURL=main.js.map