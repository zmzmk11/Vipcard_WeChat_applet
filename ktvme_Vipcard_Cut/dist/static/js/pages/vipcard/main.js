global.webpackJsonp([1],{

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(228);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '会员卡首页'
  }
});

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cf96967a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(236);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(229)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cf96967a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cf96967a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\vipcard\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cf96967a", Component.options)
  } else {
    hotAPI.reload("data-v-cf96967a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_fetch__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_card__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_weapp_qrcode__ = __webpack_require__(33);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var wxqrcode = __webpack_require__(235);
var Dec = __webpack_require__(21);
/* harmony default export */ __webpack_exports__["a"] = ({
  config: {
    enablePullDownRefresh: true
  },
  data: function data() {
    return {
      userInfo: {},
      qr: ["https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/qr.png"],
      qrcode: false,
      binded: [],
      bindedcard: {},
      stock: [],
      red_rule: [],
      canvasHidden: false,
      barcode: "",
      menu: {
        show1: true,
        show2: true,
        show3: true
      },
      picsrc: "",
      barcpic: "",
      // 画布的宽高要和object里面的宽高保持一致
      object: {
        text: "https://uu.ghaoqi.com/v3/index.html#/cece2-start?id=2", // 二维码的内容
        width: 300, // 二维码的宽
        height: 300, // 二维码的高
        canvasId: "qrcode" //canvas的ID（唯一标识）
      }
    };
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // to doing..
              // 停止下拉刷新
              wx.stopPullDownRefresh();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward"]), {
    // showqr() {
    //   if (!this.qrcode) {
    //     this.getCode(this.object);
    //     this.barcpic = wx.getStorageSync("barcpic");
    //     // console.log(this.picsrc);
    //   }
    //   this.qrcode = !this.qrcode;
    // },
    getFormId: function getFormId(e) {
      console.log(e.mp.detail);
      if (!this.qrcode) {
        this.getCode(this.object);
        this.barcpic = wx.getStorageSync("barcpic");
        // console.log(this.picsrc);
      }
      this.qrcode = !this.qrcode;
    },

    // show1() {
    //   this.menu.show1 = !this.menu.show1;
    // },
    // show2() {
    //   this.menu.show2 = !this.menu.show2;
    // },
    // show3() {
    //   this.menu.show3 = !this.menu.show3;
    // },
    toAdd: function toAdd() {
      var url = "../home/main";
      wx.reLaunch({ url: url });
    },
    update: function update() {
      // var url = "../update_information/main?kmid=" + this.bindedcard.kmid;
      var url = "../update/main";
      wx.navigateTo({ url: url });
    },
    toRecharge: function toRecharge() {
      var url = "../recharge/main?gradeid=" + this.bindedcard.gradeid + "&kmid=" + this.bindedcard.kmid;
      // var url ="../pay/main"
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
    toIntegral: function toIntegral() {
      var url = "../integral/main?kmid=" + this.bindedcard.kmid;
      wx.navigateTo({ url: url });
    },
    show_qr: function show_qr() {
      // console.log(this.picsrc);
      wx.previewImage({
        current: this.picsrc, // 当前显示图片的http链接
        urls: [this.picsrc] // 需要预览的图片http链接列表
      });
    },
    getCode: function getCode(object) {
      // wxcode.qrc(object.canvasId, object.text, object.height, object.width);
      var that = this;
      // 调用生成二维码的函数
      var windowWidth = wx.getSystemInfoSync().windowWidth / 750;
      var ctx = wx.createCanvasContext(object.canvasId);
      Object(__WEBPACK_IMPORTED_MODULE_7_weapp_qrcode__["a" /* default */])({
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
              that.picsrc = tempFilePath;
              // console.log(tempFilePath);
            },
            fail: function fail(res) {
              console.log(res);
            }
          });
        }
      });
      // that.picsrc = wxqrcode.code(object);
      //  console.log("pic:"+that.picsrc)
    },
    unbind: function unbind(companyid, kmid) {
      var that = this;
      var res = wx.showModal({
        title: "温馨提示",
        content: "您确定解绑会员卡？",
        cancelText: "我再想想",
        confirmText: "去意已决",
        cancelColor: "#FF7300",
        confirmColor: "#000000",
        success: function () {
          var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(res) {
            var res1;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!res.confirm) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 3;
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
                    res1 = _context2.sent;

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
                    _context2.next = 8;
                    break;

                  case 7:
                    if (res.cancel) {
                      console.log("用户点击取消");
                    }

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function success(_x) {
            return _ref.apply(this, arguments);
          }

          return success;
        }()
      });
    }
  }),
  onLoad: function onLoad(options) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var state, res, res2;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this2.qrcode = false;
              state = _this2.$store.state;

              _this2.binded = state.binded.data;
              _context3.next = 5;
              return _this2.getForward([{
                url: "/member/info",
                mutations: "setCardInfo"
              }, {
                company_id: state.company_id,
                kmid: options.kmid,
                platformsource: state.platformsource
              }]);

            case 5:
              res = _context3.sent;

              _this2.bindedcard = res.data;
              _this2.object.text = res.data.cardnum;
              _context3.next = 10;
              return _this2.getForward([{
                url: "/member/online/api/show_qrcode",
                mutations: "setQrcode"
              }, {
                cci: state.company_id,
                ki: options.kmid
              }]);

            case 10:
              res2 = _context3.sent;

              if (res2.ret == 0) {
                _this2.barcode = res2.barcode;
                _this2.object.text = res2.qrcode;
                wxcode.barc("barcode", _this2.barcode, 500, 120);
              } else {
                console.log("二维码条形码获取失败！");
              }

              // const res2 = await this.getForward([
              //   {
              //     url: "/member/bind/all_red_envelop_rule",
              //     mutations: "setRedrule"
              //   },
              //   {
              //     company_id: state.company_id
              //   }
              // ]);
              // this.red_rule = res2.data;

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }))();
  },
  mounted: function mounted() {
    this.userInfo = this.$store.state.userInfo;
    // 调用应用实例的方法获取全局数据
    //this.getUserInfo();
  }
});

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86e80b72_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__ = __webpack_require__(234);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(232)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86e80b72_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-86e80b72", Component.options)
  } else {
    hotAPI.reload("data-v-86e80b72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),

/***/ 232:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['text']
});

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    staticClass: "card"
  }, [_vm._v("\n    " + _vm._s(_vm.text) + "\n  ")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-86e80b72", esExports)
  }
}

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["code"] = code;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weapp_qrcode__ = __webpack_require__(33);


function code(object) {
    // 使用canvas画出二维码
    Object(__WEBPACK_IMPORTED_MODULE_0_weapp_qrcode__["a" /* default */])({
        width: object.width,
        height: object.height,
        canvasId: object.canvasId,
        text: object.text,
        callback: function callback() {
            wx.canvasToTempFilePath({
                canvasId: object.canvasId,
                quality: 1,
                success: function success(res) {
                    var tempFilePath = res.tempFilePath;
                    console.log(tempFilePath);
                    return tempFilePath;
                },
                fail: function fail(res) {
                    console.log(res);
                    return res;
                }
            });
        }
    });
}

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('canvas', {
    staticClass: "canvas",
    staticStyle: {
      "width": "300rpx",
      "height": "300rpx"
    },
    attrs: {
      "canvas-id": "qrcode"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "first"
  }, [(_vm.userInfo.avatarUrl) ? _c('img', {
    staticClass: "userinfo-avatar",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "background-size": "cover"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "userinfo-nickname"
  }, [_c('div', [_vm._v(_vm._s(_vm.bindedcard.membername))])]), _vm._v(" "), _c('span', {
    staticClass: "card-name"
  }, [_vm._v(" " + _vm._s(_vm.bindedcard.gradename))]), _vm._v(" "), _c('span', {
    staticClass: "card-num"
  }, [_vm._v(" NO." + _vm._s(_vm.bindedcard.cardnum))]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "bottom1"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/店铺.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card-ktv"
  }, [_vm._v(_vm._s(_vm.bindedcard.companyname))]), _vm._v(" "), _c('div', {
    staticClass: "card-time"
  }, [_vm._v("有效期至：" + _vm._s(_vm.bindedcard.uselimitdate))])])])]), _vm._v(" "), (_vm.qrcode) ? _c('div', {
    staticClass: "show-qr"
  }, [_c('div', {
    staticClass: "barcode"
  }, [(!_vm.barcpic) ? _c('div', [_c('canvas', {
    staticStyle: {
      "width": "500rpx",
      "height": "120rpx",
      "bakcground": "red"
    },
    attrs: {
      "canvas-id": "barcode"
    }
  })]) : _c('div', [_c('img', {
    attrs: {
      "src": _vm.barcpic,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "bar_font"
  }, [_vm._v(_vm._s(_vm.barcode))])]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.show_qr
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.picsrc,
      "alt": ""
    }
  })])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "second"
  }, [_c('form', {
    staticStyle: {
      "outline": "none"
    },
    attrs: {
      "report-submit": "true",
      "eventid": '1'
    },
    on: {
      "submit": _vm.getFormId
    }
  }, [_c('button', {
    staticClass: "img",
    attrs: {
      "form-type": "submit"
    }
  }, [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/qrcode_icon.png"
    }
  })])], 1), _vm._v(" "), (!_vm.qrcode) ? _c('div', {
    staticClass: "show"
  }, [_vm._v("点击显示二维码")]) : _c('div', {
    staticClass: "show"
  }, [_vm._v("点击隐藏二维码")]), _vm._v(" "), _c('div', {
    staticClass: "menu",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.show1
    }
  }, [_c('img', {
    staticClass: "pic",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/money (1).png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "menu-font"
  }, [_vm._v("我的资产")])]), _vm._v(" "), (_vm.menu.show1) ? _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('span', {
    staticClass: "item-name"
  }, [_vm._v("积分")]), _vm._v(" "), _c('span', {
    staticClass: "item-content"
  }, [_vm._v(_vm._s(_vm.bindedcard.integralbalance))])]), _vm._v(" "), (!_vm.usestorage) ? _c('div', {
    staticClass: "item"
  }, [_c('span', {
    staticClass: "item-name"
  }, [_vm._v("金额")]), _vm._v(" "), _c('span', {
    staticClass: "item-content"
  }, [_vm._v("￥" + _vm._s(_vm.bindedcard.accountbalance))])]) : _vm._e(), _vm._v(" "), (!_vm.usestorage) ? _c('div', {
    staticClass: "item"
  }, [_c('span', {
    staticClass: "item-name"
  }, [_vm._v("本金")]), _vm._v(" "), _c('span', {
    staticClass: "item-content"
  }, [_vm._v("￥" + _vm._s(_vm.bindedcard.accountcash))])]) : _vm._e(), _vm._v(" "), (!_vm.usestorage) ? _c('div', {
    staticClass: "item"
  }, [_c('span', {
    staticClass: "item-name"
  }, [_vm._v("赠金")]), _vm._v(" "), _c('span', {
    staticClass: "item-content"
  }, [_vm._v("￥" + _vm._s(_vm.bindedcard.accountpresent))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "menu",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.show3
    }
  }, [_c('img', {
    staticClass: "pic",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/people3 (1).png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "menu-font"
  }, [_vm._v("我的信息")])]), _vm._v(" "), (_vm.menu.show3) ? _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "item",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.update
    }
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/用户.png"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "30rpx"
    }
  }, [_vm._v("个人信息")])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.toOrder
    }
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/账单.png"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "30rpx"
    }
  }, [_vm._v("订单管理")])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.toRight
    }
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/皇冠.png"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "30rpx"
    }
  }, [_vm._v("会员特权")])]), _vm._v(" "), (!_vm.bindedcard.isunbind) ? _c('div', {
    staticClass: "item",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.unbind(_vm.bindedcard.companyid, _vm.bindedcard.kmid)
      }
    }
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/停用.png"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "30rpx"
    }
  }, [_vm._v("解绑会员卡")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cf96967a", esExports)
  }
}

/***/ })

},[227]);
//# sourceMappingURL=main.js.map