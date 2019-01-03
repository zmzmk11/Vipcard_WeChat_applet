global.webpackJsonp([2],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(222);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: '验证手机号'
    }
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b760b798_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(226);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(223)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b760b798_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\verify_phonenum\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b760b798", Component.options)
  } else {
    hotAPI.reload("data-v-b760b798", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 224:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_identify_vue__ = __webpack_require__(51);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var drawVcode = __webpack_require__(225);
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      verifyPic: "",
      index: 0,
      show: true,
      count: "",
      timer: null,
      phone: "",
      unbind: {},
      secretphone: "",
      cardnum: "",
      verification_code: "",
      identifyCode: "",
      img_code: "",
      areacode: "",
      width: "",
      height: "",
      areagroup: [{
        id: 1,
        content: "中国",
        selected: true,
        code: "86"
      }, {
        id: 2,
        content: "中国香港",
        code: "852"
      }, {
        id: 3,
        content: "中国澳门",
        code: "853"
      }, {
        id: 4,
        content: "中国台湾",
        code: "886"
      }]
    };
  },


  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapState */])({
    iv_salt: function iv_salt(state) {
      return state.iv_salt;
    }
  })),
  components: {
    SIdentify: __WEBPACK_IMPORTED_MODULE_5__components_identify_vue__["a" /* default */]
  },
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])(["getForward"]), {
    bindPickerChange: function bindPickerChange(e) {
      this.index = parseInt(e.mp.detail.value);
      this.areacode = this.areagroup[this.index].code;
    },
    bindGetUserInfo: function bindGetUserInfo(e) {
      console.log(e);
      this.$store.state.userInfo = e.mp.detail.userInfo;
      if (e.mp.detail.rawData) {
        if (!this.verification_code) {
          wx.showToast({
            title: "请输入手机验证码！",
            icon: "none",
            duration: 2000
          });
        } else {
          this.bindcard();
        }
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    },
    help: function help() {
      var that = this;
      wx.showModal({
        title: "温馨提示",
        content: "手机号为您申请会员卡时预留的手机号吗，如需更改请移驾或联系KTV.",
        cancelText: "联系KTV",
        confirmText: "我知道了",
        cancelColor: "#FF7300",
        confirmColor: "#000",
        success: function success(res) {
          if (res.confirm) {} else {
            wx.makePhoneCall({
              phoneNumber: that.unbind.relationphone
            });
          }
        }
      });
    },
    getCode: function getCode() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, TIME_COUNT;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.identifyCode && _this.img_code == "") {
                  wx.showToast({
                    title: "请输入图形验证码！",
                    icon: "none",
                    duration: 1500
                  });
                }
                _context.next = 3;
                return _this.getForward([{
                  url: "/member/api/random_code",
                  mutations: "setVerifyCode"
                }, {
                  ac: _this.areacode,
                  vc: _this.img_code,
                  p: _this.phone,
                  cc: _this.$store.state.company_id
                }]);

              case 3:
                res = _context.sent;

                if (res.ret == 0) {
                  wx.showModal({
                    title: "",
                    content: "验证码发送成功！",
                    showCancel: false
                  });
                  _this.show = false;
                  TIME_COUNT = 60;

                  if (!_this.timer) {
                    _this.count = TIME_COUNT;
                    _this.show = false;
                    _this.timer = setInterval(function () {
                      if (_this.count > 0 && _this.count <= TIME_COUNT) {
                        _this.count--;
                      } else {
                        _this.show = true;
                        clearInterval(_this.timer);
                        _this.timer = null;
                      }
                    }, 1000);
                  }
                } else if (res.vc) {
                  if (_this.identifyCode != "") {
                    wx.showToast({
                      title: "图形验证码输入有误！",
                      icon: "none",
                      duration: 1500
                    });
                  }
                  _this.identifyCode = res.vc;
                  drawVcode.drawPic(wx.createCanvasContext("verify_code"), _this.identifyCode);
                  setTimeout(function () {
                    _this.verifyPic = wx.getStorageSync("verifyPic");
                  }, 1000);
                } else {
                  wx.showToast({
                    title: res.msg,
                    icon: "none",
                    duration: 1500
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    stringHandle: function stringHandle(mobile) {
      var string1 = mobile.substring(0, 3);
      var string2 = mobile.substring(7, 11);
      this.secretphone = string1 + "****" + string2;
    },
    bindcard: function bindcard() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var store, res, res1;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                store = _this2.$store.state;
                _context2.next = 3;
                return _this2.getForward([{
                  url: "/member/online/api/member_bind",
                  mutations: "setBindCard"
                }, {
                  bindcompanyid: store.company_id,
                  bindsource: 1,
                  cardnum: _this2.cardnum,
                  customerid: store.customer_id,
                  companyid: store.company_id,
                  platformsource: store.platformsource,
                  openid: store.openid,
                  user_source: 1,
                  c: _this2.verification_code
                }]);

              case 3:
                res = _context2.sent;

                if (!(res.ret == 0)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 7;
                return _this2.getForward([{
                  url: "/member/info",
                  mutations: "setCardInfo"
                }, {
                  company_id: store.company_id,
                  kmid: _this2.unbind.kmid,
                  platformsource: store.platformsource
                }]);

              case 7:
                res1 = _context2.sent;

                if (!res1.data.isupdate) {
                  setTimeout(function () {
                    var url = "../update_information/main?kmid=" + _this2.unbind.kmid;
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
                _context2.next = 12;
                break;

              case 11:
                if (res.ret == 116) {
                  wx.showToast({
                    title: "验证码输入有误，请重新输入！",
                    icon: "none",
                    duration: 1500
                  });
                }

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }),
  onLoad: function onLoad(options) {
    var windowWidth = wx.getSystemInfoSync().windowWidth / 750;
    this.width = windowWidth * 750 * 0.25;
    this.height = windowWidth * 750 * 0.1;
    this.show = true;
    this.identifyCode = "";
    this.img_code = "";
    this.verification_code = "";
    if (options.index) {
      var unbind = this.$store.state.unbind[options.index];
      this.unbind = unbind;
      this.phone = unbind.mobile;
      this.cardnum = unbind.cardnum;
    } else {
      var unbind = this.$store.state.unbind[0];
      this.unbind = unbind;
      this.phone = unbind.mobile;
      this.cardnum = unbind.cardnum;
    }
    this.stringHandle(this.phone);
  }
});

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["drawPic"] = drawPic;
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
/**生成一个随机色**/
function randomColor(min, max) {
    var r = randomNum(min, max);
    var g = randomNum(min, max);
    var b = randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
}

/**绘制验证码图片**/
function drawPic(ctx1, img_code) {
    var ctx = ctx1;
    /**绘制背景色**/
    ctx.fillStyle = randomColor(180, 240); //颜色若太深可能导致看不清
    ctx.fillRect(0, 0, 90, 28);
    /**绘制文字**/
    var arr;
    var text = '';
    var str = img_code;
    for (var i = 0; i < 4; i++) {
        var txt = str[i];
        ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
        ctx.font = randomNum(20, 26) + 'px SimHei'; //随机生成字体大小
        var x = 5 + i * 20;
        var y = randomNum(20, 25);
        var deg = randomNum(-20, 20);
        //修改坐标原点和旋转角度
        ctx.translate(x, y);
        ctx.rotate(deg * Math.PI / 180);
        ctx.fillText(txt, 5, 0);
        text = text + txt;
        //恢复坐标原点和旋转角度
        ctx.rotate(-deg * Math.PI / 180);
        ctx.translate(-x, -y);
    }
    /**绘制干扰线**/
    for (var i = 0; i < 4; i++) {
        ctx.strokeStyle = randomColor(40, 180);
        ctx.beginPath();
        ctx.moveTo(randomNum(0, 90), randomNum(0, 28));
        ctx.lineTo(randomNum(0, 90), randomNum(0, 28));
        ctx.stroke();
    }
    /**绘制干扰点**/
    for (var i = 0; i < 20; i++) {
        ctx.fillStyle = randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(randomNum(0, 90), randomNum(0, 28), 1, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.draw(false, function (e) {
        wx.canvasToTempFilePath({
            canvasId: "verify_code",
            quality: 1,
            success: function success(res) {
                var tempFilePath = res.tempFilePath;
                wx.setStorage({
                    key: "verifyPic",
                    data: tempFilePath
                });
            },
            fail: function fail(res) {
                console.log(res);
            }
        });
    });
}
/* harmony default export */ __webpack_exports__["default"] = ({
    drawPic: drawPic
});

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "msg"
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/大手机_03.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_vm._v("您的电话号码：" + _vm._s(_vm.secretphone))]), _vm._v(" "), _c('div', {
    staticClass: "head"
  }, [_vm._v("请验证会员卡的手机号，即可完成绑定啦~")])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("国家/地区：")]), _vm._v(" "), _c('picker', {
    attrs: {
      "value": _vm.index,
      "range-key": "content",
      "range": _vm.areagroup,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindPickerChange
    }
  }, [_c('div', {
    staticClass: "select"
  }, [_c('div', [_vm._v(_vm._s(_vm.areagroup[_vm.index].content))]), _vm._v(" "), _c('img', {
    staticClass: "fold",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/unfold.png"
    }
  })])])], 1), _vm._v(" "), (_vm.identifyCode) ? _c('div', {
    staticClass: "line"
  }) : _vm._e(), _vm._v(" "), (_vm.identifyCode) ? _c('div', {
    staticClass: "item"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.img_code),
      expression: "img_code"
    }],
    staticClass: "input",
    attrs: {
      "maxlength": "6",
      "placeholder": "请输入图形验证码",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.img_code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.img_code = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "code"
  }, [_c('canvas', {
    style: ({
      'width': _vm.width + 'px',
      'height': _vm.height + 'px',
      'position': 'absolute',
      'top': '-9999px'
    }),
    attrs: {
      "canvas-id": "verify_code"
    }
  }), _vm._v(" "), _c('img', {
    style: ({
      'width': _vm.width + 'px',
      'height': _vm.height + 'px'
    }),
    attrs: {
      "src": _vm.verifyPic
    }
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.verification_code),
      expression: "verification_code"
    }],
    staticClass: "input",
    attrs: {
      "type": "number",
      "maxlength": "6",
      "placeholder": "请输入验证码",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.verification_code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.verification_code = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.show) ? _c('div', {
    staticClass: "code-btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.getCode
    }
  }, [_vm._v("获取验证码")]) : _c('div', {
    staticClass: "code-btn",
    staticStyle: {
      "background": "white"
    }
  }, [_vm._v(_vm._s(_vm.count) + "s重发")])])]), _vm._v(" "), _c('div', {
    staticClass: "no",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.help
    }
  }, [_vm._v("不是您的手机号？")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '5'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("确定")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b760b798", esExports)
  }
}

/***/ })

},[221]);
//# sourceMappingURL=main.js.map