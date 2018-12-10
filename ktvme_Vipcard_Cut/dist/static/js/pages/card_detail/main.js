global.webpackJsonp([22],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(115);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: '会员卡详情'
    }
    // window:{
    //     enablePullDownRefresh: true,
    // }
});

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_79641194_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(120);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79641194"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_79641194_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\card_detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79641194", Component.options)
  } else {
    hotAPI.reload("data-v-79641194", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_fetch__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_weapp_qrcode__ = __webpack_require__(33);



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



var wxcode = __webpack_require__(52);

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      binded: {},
      qrcode: "",
      bindedcard: {},
      object: {
        text: "", // 二维码的内容
        width: 300, // 二维码的宽
        height: 300, // 二维码的高
        canvasId: "qrcode" //canvas的ID（唯一标识）
      },
      barcode: "",
      userInfo: {},
      barcpic: "",
      qrcpic: "",
      showcode: "",
      amplify: false,
      ambar: false
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward", "setUserInfo"]), {
    getFormId: function getFormId(e) {
      console.log(e.mp.detail);
      if (!this.showcode) {
        this.getCode(this.object);
        this.barcpic = wx.getStorageSync("barcpic");
      }
      this.showcode = !this.showcode;
    },
    amBar: function amBar() {
      this.ambar = !this.ambar;
    },
    am: function am() {
      this.amplify = !this.amplify;
    },
    update: function update() {
      var url = "../update/main";
      wx.navigateTo({ url: url });
    },
    toRight: function toRight() {
      var url = "../memberright/main?kmid=" + this.bindedcard.kmid;
      wx.navigateTo({ url: url });
    },
    toOrder: function toOrder() {
      var url = "../order/main?kmid=" + this.bindedcard.kmid;
      wx.navigateTo({ url: url });
    },
    unbind: function unbind(companyid, kmid) {
      var that = this;
      var res = wx.showModal({
        title: "温馨提示",
        content: "您确定解绑会员卡？",
        cancelText: "我再想想",
        confirmText: "去意已决",
        confirmColor: "#000",
        cancelColor: "#FF7300",
        success: function () {
          var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(res) {
            var res1;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!res.confirm) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 3;
                    return Object(__WEBPACK_IMPORTED_MODULE_4__api_fetch__["a" /* request */])({
                      method: "post",
                      url: "/member/api/forward",
                      data: {
                        user_id: that.$store.state.user_id,
                        url: "/member/unbind",
                        content: {
                          create_company_id: companyid,
                          kmid: kmid
                        }
                      }
                    });

                  case 3:
                    res1 = _context.sent;

                    if (res1.ret == 0) {
                      setTimeout(function () {
                        var url = "../home/main";
                        wx.reLaunch({ url: url });
                      }, 1000);
                      wx.showToast({
                        title: "解绑成功！",
                        icon: "success",
                        duration: 1500
                      });
                    } else {
                      wx.showToast({
                        title: res1.msg,
                        icon: "none",
                        duration: 1500
                      });
                    }
                    _context.next = 8;
                    break;

                  case 7:
                    if (res.cancel) {
                      console.log("用户点击取消");
                    }

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function success(_x) {
            return _ref.apply(this, arguments);
          }

          return success;
        }()
      });
    },
    getCode: function getCode(object) {
      var that = this;
      // 调用生成二维码的函数
      var windowWidth = wx.getSystemInfoSync().windowWidth / 750;
      var ctx = wx.createCanvasContext(object.canvasId);
      Object(__WEBPACK_IMPORTED_MODULE_5_weapp_qrcode__["a" /* default */])({
        width: object.width * windowWidth,
        height: object.height * windowWidth,
        canvasId: object.canvasId,
        text: object.text,
        callback: function callback() {
          wx.canvasToTempFilePath({
            canvasId: object.canvasId,
            quality: 1,
            success: function success(res) {
              var tempFilePath = res.tempFilePath;
              that.qrcpic = tempFilePath;
            },
            fail: function fail(res) {
              console.log(res);
            }
          });
        }
      });
    }
  }),
  onLoad: function onLoad(options) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var state, res, res2;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              wx.removeStorageSync("barcpic");
              _this.amplify = false;
              _this.ambar = false;
              _this.userInfo = _this.$store.state.userInfo;
              _this.showcode = false;
              state = _this.$store.state;

              _this.binded = state.binded.data;
              _context2.next = 9;
              return _this.getForward([{
                url: "/member/info",
                mutations: "setCardInfo"
              }, {
                company_id: state.company_id,
                kmid: options.kmid,
                platformsource: state.platformsource
              }]);

            case 9:
              res = _context2.sent;

              _this.bindedcard = res.data;
              _this.object.text = res.data.cardnum;
              _context2.next = 14;
              return _this.getForward([{
                url: "/member/online/api/show_qrcode",
                mutations: "setQrcode"
              }, {
                cci: state.company_id,
                ki: options.kmid
              }]);

            case 14:
              res2 = _context2.sent;

              if (res2.ret == 0) {
                _this.barcode = res2.barcode;
                _this.object.text = res2.qrcode;
                wxcode.barc("barcode", _this.barcode, 500, 120);
              } else {
                console.log("二维码条形码获取失败！");
              }

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }))();
  }
});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('canvas', {
    staticClass: "qrcode",
    attrs: {
      "canvas-id": "qrcode"
    }
  }), _vm._v(" "), _c('canvas', {
    staticClass: "barcode",
    attrs: {
      "canvas-id": "barcode"
    }
  }), _vm._v(" "), (_vm.amplify) ? _c('div', {
    staticClass: "qr-amplify",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.am
    }
  }, [_c('div', {
    staticStyle: {
      "margin": "auto"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "400rpx",
      "height": "400rpx"
    },
    attrs: {
      "src": _vm.qrcpic,
      "alt": ""
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.ambar) ? _c('div', {
    staticClass: "qr-amplify",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.amBar
    }
  }, [_c('div', {
    staticStyle: {
      "margin": "auto",
      "transform": "rotate(-90deg)",
      "text-align": "center"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "500rpx",
      "height": "120rpx"
    },
    attrs: {
      "src": _vm.barcpic,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bar-font"
  }, [_vm._v(_vm._s(_vm.barcode))])])]) : _vm._e(), _vm._v(" "), (!_vm.amplify && !_vm.ambar) ? _c('div', [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "gradename"
  }, [_vm._v(_vm._s(_vm.bindedcard.gradename))]), _vm._v(" "), _c('div', {
    staticClass: "cardnum"
  }, [_vm._v("NO." + _vm._s(_vm.bindedcard.cardnum))]), _vm._v(" "), (_vm.userInfo.avatarUrl) ? _c('img', {
    staticClass: "userinfo-avatar",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "background-size": "cover"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "membername"
  }, [_vm._v(_vm._s(_vm.bindedcard.membername))]), _vm._v(" "), _c('div', {
    staticClass: "companyname"
  }, [_vm._v(_vm._s(_vm.bindedcard.companyname))]), _vm._v(" "), _c('div', {
    staticClass: "uselimitdate"
  }, [_vm._v("有效期至：" + _vm._s(_vm.bindedcard.uselimitdate))])]), _vm._v(" "), (_vm.showcode) ? _c('div', {
    staticClass: "bar-qr-code"
  }, [_c('div', {
    staticClass: "barcpic",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.amBar
    }
  }, [_c('img', {
    staticStyle: {
      "width": "500rpx",
      "height": "120rpx"
    },
    attrs: {
      "src": _vm.barcpic,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bar-font"
  }, [_vm._v(_vm._s(_vm.barcode))])]), _vm._v(" "), _c('div', {
    staticClass: "qrcpic",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.am
    }
  }, [_c('img', {
    staticStyle: {
      "width": "300rpx",
      "height": "300rpx"
    },
    attrs: {
      "src": _vm.qrcpic,
      "alt": ""
    }
  })])]) : _vm._e(), _vm._v(" "), _c('form', {
    staticStyle: {
      "outline": "none"
    },
    attrs: {
      "report-submit": "true",
      "eventid": '4'
    },
    on: {
      "submit": _vm.getFormId
    }
  }, [_c('button', {
    staticClass: "qr-btn",
    attrs: {
      "form-type": "submit"
    }
  }, [_c('img', {
    staticClass: "qr-icon",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/二维码.png"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('span', {
    staticClass: "item-name"
  }, [_vm._v("金额")]), _vm._v(" "), _c('span', {
    staticClass: "item-content"
  }, [_vm._v("￥" + _vm._s(_vm.bindedcard.accountbalance))])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('span', {
    staticClass: "item-name"
  }, [_vm._v("本金")]), _vm._v(" "), _c('span', {
    staticClass: "item-content"
  }, [_vm._v("￥" + _vm._s(_vm.bindedcard.accountcash))])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('span', {
    staticClass: "item-name"
  }, [_vm._v("赠金")]), _vm._v(" "), _c('span', {
    staticClass: "item-content"
  }, [_vm._v("￥" + _vm._s(_vm.bindedcard.accountpresent))])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('span', {
    staticClass: "item-name"
  }, [_vm._v("积分")]), _vm._v(" "), _c('span', {
    staticClass: "item-content"
  }, [_vm._v(_vm._s(_vm.bindedcard.integralbalance))])])]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "items",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.update
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_04.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("个人信息")]), _vm._v(" "), _c('img', {
    staticClass: "next",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/右.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "items",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.toOrder
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_05.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("订单管理")]), _vm._v(" "), _c('img', {
    staticClass: "next",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/右.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "items",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.toRight
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_01.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("会员权益")]), _vm._v(" "), _c('img', {
    staticClass: "next",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/右.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), (!_vm.bindedcard.isunbind) ? _c('div', {
    staticClass: "items",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.unbind(_vm.bindedcard.companyid, _vm.bindedcard.kmid)
      }
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_10.png"
    }
  }), _vm._v(" "), _c('div', [_vm._v("解绑会员卡")]), _vm._v(" "), _c('img', {
    staticClass: "next",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/右.png"
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "line"
  })], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79641194", esExports)
  }
}

/***/ })

},[114]);
//# sourceMappingURL=main.js.map