global.webpackJsonp([15],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(158);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: 'K米会员卡'
  },
  window: {
    enablePullDownRefresh: true
  }
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_efb04d30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-efb04d30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_efb04d30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efb04d30", Component.options)
  } else {
    hotAPI.reload("data-v-efb04d30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
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
      showPopUp: false,
      mobile: "",
      customer_id: "",
      cardnum: "",
      unbind: [],
      showBind: false
    };
  },


  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapState */])({
    iv_salt: function iv_salt(state) {
      return state.iv_salt;
    }
  })),

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])(["getForward", "member_bind"]), {
    bindGetUserInfo: function bindGetUserInfo(e) {
      this.$store.state.userInfo = e.mp.detail.userInfo;
      if (e.mp.detail.rawData) {
        this.next();
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    },
    next: function next() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var store, that, res, _res, res1, url;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _this.$store.state;
                that = _this;
                _context.next = 4;
                return _this.getForward([{
                  url: "/member/list/unbind",
                  mutations: "setUnbind"
                }, {
                  companyid: store.company_id,
                  mobile: _this.mobile,
                  platformsource: 0
                }]);

              case 4:
                res = _context.sent;

                _this.unbind = _this.search(res.data);
                _this.$store.state.unbind = _this.unbind;

                if (!(_this.unbind.length != 0)) {
                  _context.next = 26;
                  break;
                }

                if (!(_this.unbind.length == 1)) {
                  _context.next = 22;
                  break;
                }

                _context.next = 11;
                return _this.getForward([{
                  url: "/member/bind",
                  mutations: "setBindCard"
                }, {
                  bindcompanyid: store.company_id,
                  bindsource: 1,
                  cardnum: _this.unbind[0].cardnum,
                  customerid: _this.customer_id,
                  companyid: store.company_id,
                  platformsource: 0,
                  openid: store.openid,
                  user_source: 1
                }]);

              case 11:
                _res = _context.sent;

                if (!(_res.ret == 0)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 15;
                return _this.getForward([{
                  url: "/member/info",
                  mutations: "setCardInfo"
                }, {
                  company_id: store.company_id,
                  kmid: _this.unbind[0].kmid,
                  platformsource: store.platformsource
                }]);

              case 15:
                res1 = _context.sent;

                if (!res1.data.isupdate) {
                  setTimeout(function () {
                    var url = "../update_information/main?kmid=" + _this.unbind[0].kmid;
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
                _context.next = 20;
                break;

              case 19:
                if (_res.ret == 116) {
                  wx.showToast({
                    title: "绑卡失败！",
                    icon: "none",
                    duration: 1500
                  });
                }

              case 20:
                _context.next = 24;
                break;

              case 22:
                url = "../choose_bindcard/main?flag=1";

                wx.navigateTo({ url: url });

              case 24:
                _context.next = 27;
                break;

              case 26:
                wx.showToast({
                  title: "抱歉！该手机号不存在未绑卡！",
                  icon: "none",
                  duration: 2000
                });

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },


    /**筛除未绑卡返回数据中已绑卡的部分 */
    search: function search(unbind) {
      var store = this.$store.state;
      var binded = store.binded;
      var x = 0;
      var num = 0;
      var nobind = [];
      for (var i = 0; i < unbind.length; i++) {
        x = i;
        for (var j = 0; j < binded.length; j++) {
          if (unbind[i].cardnum == binded[j].cardnum) {
            x = i + 1;
            break;
          }
        }
        if (x == i) {
          nobind[num++] = unbind[i];
        }
      }
      return nobind;
    },
    getPhoneNumber: function getPhoneNumber(e) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var store, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!e.mp.detail.encryptedData) {
                  _context2.next = 9;
                  break;
                }

                store = _this2.$store.state;
                _context2.next = 4;
                return _this2.getForward([{
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
                res = _context2.sent;

                _this2.mobile = JSON.parse(res.data).purePhoneNumber;
                _this2.getCustomerid();
                _context2.next = 10;
                break;

              case 9:
                console.log("用户按了拒绝按钮");

              case 10:
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
        var store, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                store = _this3.$store.state;

                _this3.$store.state.mobile = _this3.mobile;
                _context3.next = 4;
                return _this3.member_bind({
                  openid: store.openid,
                  mobile: _this3.mobile,
                  type: 2
                });

              case 4:
                res = _context3.sent;

                if (res.ret == 0) {
                  _this3.customer_id = res.data.customer_id;
                  if (store.login_type == 1) {
                    wx.showModal({
                      title: "温馨提示",
                      content: "请通过扫描商家二维码使用该小程序！",
                      showCancel: false,
                      confirmColor: "#FF7300"
                    });
                  } else {
                    _this3.showPopUp = false;
                  }
                } else {
                  wx.showToast({
                    title: "customer_id获取失败！",
                    icon: "none",
                    duration: 1000
                  });
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    byCard: function byCard() {
      this.showBind = true;
      this.cardnum = "";
    },
    bindCard: function bindCard() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var _store, res, flag, url;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this4.cardnum == "")) {
                  _context4.next = 4;
                  break;
                }

                wx.showToast({
                  title: "卡号不能为空！",
                  icon: "none",
                  duration: 1000
                });
                _context4.next = 12;
                break;

              case 4:
                _store = _this4.$store.state;
                _context4.next = 7;
                return _this4.getForward([{
                  url: "/member/list/unbind",
                  mutations: "setUnbind"
                }, {
                  companyid: _store.company_id,
                  mobile: _this4.cardnum,
                  platformsource: 0
                }]);

              case 7:
                res = _context4.sent;

                _this4.unbind = _this4.search(res.data);
                _this4.$store.state.unbind = _this4.unbind;
                flag = 0;

                if (_this4.unbind.length != 0) {
                  if (_this4.unbind.length == 1) {
                    url = "../verify_phonenum/main";

                    wx.navigateTo({ url: url });
                  } else {
                    url = "../choose_bindcard/main?flag=0";

                    wx.navigateTo({ url: url });
                  }
                } else {
                  wx.showToast({
                    title: "抱歉！未查询到输入卡号！",
                    icon: "none",
                    duration: 2000
                  });
                }

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    }
  }),
  mounted: function mounted() {
    wx.setEnableDebug({
      enableDebug: true
    });
  },
  onShow: function onShow() {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
      var store;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              store = _this5.$store.state;

              _this5.unbind = [];
              _this5.showBind = false;
              _this5.mobile = store.mobile;
              _this5.customer_id = store.customer_id;
              if (_this5.mobile == "0" || _this5.customer_id == "") {
                _this5.showPopUp = true;
              } else {
                _this5.showPopUp = false;
              }

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [(_vm.showPopUp || _vm.showBind) ? _c('div', {
    staticClass: "page"
  }) : _vm._e(), _vm._v(" "), (_vm.showPopUp) ? _c('div', {
    staticClass: "pop-up"
  }, [_c('div', {
    staticClass: "font-a"
  }, [_vm._v("需要您的授权")]), _vm._v(" "), _c('div', {
    staticClass: "font-b"
  }, [_vm._v("由于用户注册需要")]), _vm._v(" "), _c('div', {
    staticClass: "font-b"
  }, [_vm._v("请在稍后的提示框中点击“确认授权”")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/手机号授权图.jpg"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getPhoneNumber",
      "eventid": '0'
    },
    on: {
      "getphonenumber": _vm.getPhoneNumber
    }
  }, [_vm._v("我知道了")])], 1) : _vm._e(), _vm._v(" "), (_vm.showBind) ? _c('div', [_c('div', {
    staticClass: "pop-up-bind"
  }, [_c('div', [_vm._v("实体卡号绑定")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cardnum),
      expression: "cardnum"
    }],
    attrs: {
      "maxlength": "20",
      "type": "number",
      "placeholder": "请输入实体卡号",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.cardnum)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cardnum = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "bind-btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.bindCard
    }
  }, [_vm._v("绑卡")])], 1), _vm._v(" "), _c('img', {
    staticClass: "close",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/关闭3.png",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.showBind = !_vm.showBind
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('button', {
    staticClass: "btn1",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '4'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_c('img', {
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_03.png"
    }
  }), _vm._v("手机号快捷绑卡\n    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn2",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.byCard
    }
  }, [_c('img', {
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_06.png"
    }
  }), _vm._v("实体卡号绑卡\n    ")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "head"
  }, [_c('div', {
    staticClass: "head-title"
  }, [_vm._v("会员卡包")]), _vm._v(" "), _c('div', {
    staticClass: "head-content"
  }, [_vm._v("这里可以管理您的KTV会员卡哦")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "items"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-会员_03.png"
    }
  })]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "title"
  }, [_vm._v("会员卡随身带")]), _vm._v(" "), _c('span', {
    staticClass: "content"
  }, [_vm._v("不用再让会员卡抢占钱包的一席之地")])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-会员_06_03.png"
    }
  })]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "title"
  }, [_vm._v("优惠轻松享")]), _vm._v(" "), _c('span', {
    staticClass: "content"
  }, [_vm._v("轻松便捷还能享受各种消费满赠")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-efb04d30", esExports)
  }
}

/***/ })

},[157]);
//# sourceMappingURL=main.js.map