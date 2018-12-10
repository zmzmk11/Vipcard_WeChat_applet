global.webpackJsonp([6],{

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(198);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '填写个人信息'
  }
});

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5a552683_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(201);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(199)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5a552683_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\register_detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a552683", Component.options)
  } else {
    hotAPI.reload("data-v-5a552683", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      kmid: "",
      gender: "",
      show: "",
      gradeid: "",
      levelList: [],
      choose: {},
      userInfo: [],
      startDate: "1990-01-01",
      endDate: "2018-02-21",
      pickerStart: "1990-01-01",
      name: "",
      mobile: "18650461630",
      remsg: {}
    };
  },

  watch: {
    name: function name() {
      var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
      if (this.name == "") {
        this.show = "";
      } else {
        if (!reg.test(this.name)) {
          this.show = "姓名格式不合法！";
        } else {
          this.show = "";
        }
      }
    }
  },
  mounted: function mounted() {
    this.mobile = this.$store.state.mobile;
    this.userInfo = this.$store.state.userInfo;
    this.name = this.userInfo.nickName;
    console.log(this.userInfo);
    if (this.userInfo.gender == 2) {
      this.gender = "女";
    } else {
      this.gender = "男";
    }
    // 设置时间
    var today = this.getToday();
    // this.startDate = today;
    // this.endDate = today;
    // this.pickerStart = today;
  },

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward"]), {
    genderChange: function genderChange(e) {
      this.gender = e.mp.detail.value;
      console.log("radio 携带的值为：" + e.mp.detail.value);
    },
    getToday: function getToday() {
      var myDate = new Date();
      var myMonth = myDate.getMonth() + 1;
      if (myMonth < 10) {
        myMonth = "0" + myMonth; //补齐
      }
      var mydate = myDate.getDate();
      if (myDate.getDate() < 10) {
        mydate = "0" + myDate.getDate(); //补齐
      }
      var today = myDate.getFullYear() + "-" + myMonth + "-" + mydate;
      return today;
    },
    bindDateChange: function bindDateChange(e) {
      console.log("picker发送选择改变，携带值为", e.mp.detail.value);
      this.startDate = e.mp.detail.value;
    },
    register: function register() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.getForward([{
                  url: "/member/register",
                  mutations: "setRegister"
                }, {
                  birthday: _this.startDate,
                  companyid: _this.$store.state.company_id,
                  customerid: _this.$store.state.customerid,
                  gradeid: _this.choose.gradeid,
                  membername: _this.name,
                  mobile: _this.mobile,
                  ordertype: 1,
                  platformsource: 2,
                  rulesid: 0,
                  sex: _this.gender,
                  totalmoney: _this.choose.sellmoney
                }]);

              case 2:
                res = _context.sent;

                _this.remsg = res;

                return _context.abrupt("return", res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    success: function success() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.name == "")) {
                  _context2.next = 4;
                  break;
                }

                wx.showToast({
                  title: "请输入姓名！",
                  icon: "none",
                  duration: 1000
                });
                _context2.next = 12;
                break;

              case 4:
                if (!_this2.show) {
                  _context2.next = 8;
                  break;
                }

                wx.showToast({
                  title: "请输入合法姓名！",
                  icon: "none",
                  duration: 1000
                });
                _context2.next = 12;
                break;

              case 8:
                _context2.next = 10;
                return _this2.getForward([{
                  url: "/member/register",
                  mutations: "setRegister"
                }, {
                  birthday: _this2.startDate,
                  companyid: _this2.$store.state.company_id,
                  customerid: _this2.$store.state.customer_id,
                  gradeid: _this2.choose.gradeid,
                  membername: _this2.name,
                  mobile: _this2.mobile,
                  ordertype: 1,
                  platformsource: 2,
                  rulesid: 0,
                  sex: _this2.gender,
                  totalmoney: _this2.choose.sellmoney
                }]);

              case 10:
                res = _context2.sent;

                // var res = this.register();

                if (res.ret == 50080) {
                  setTimeout(function () {
                    var url = "../vipcard/main?kmid=" + res.msg;
                    wx.reLaunch({ url: url });
                  }, 1000);
                  wx.showToast({
                    title: "注册成功",
                    icon: "success",
                    duration: 2000
                  });
                } else if (res.ret == 0) {
                  setTimeout(function () {
                    var url = "../home/main";
                    wx.reLaunch({ url: url });
                  }, 1000);
                  showToast({
                    title: "注册成功",
                    icon: "success",
                    duration: 1000
                  });
                }
                // if (this.remsg.ret==50080) {
                //   setTimeout(() => {
                //     var url = "../vipcard/main?kmid"+kmid;
                //     wx.reLaunch({ url });
                //   }, 1000);
                //   wx.showToast({
                //     title: "注册成功!",
                //     icon: "success",
                //     duration: 1000
                //   });
                // }else{
                //   wx.showToast({
                //     title: this.remsg.msg,
                //     icon: "none",
                //     duration: 1000
                //   });
                // }

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
    this.levelList = this.$store.state.levelList.data;
    for (var i = 0; i < this.levelList.length; i++) {
      if (options.gradeid == this.levelList[i].gradeid) {
        this.choose = this.levelList[i];
        break;
      }
    }
    console.log(this.choose);
    //console.log(options.gradeid)
  }
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "display"
  }, [_c('input', {
    staticStyle: {
      "width": "30vw",
      "text-align": "center"
    },
    attrs: {
      "value": "姓名",
      "disabled": ""
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    staticStyle: {
      "width": "70vw"
    },
    attrs: {
      "maxlength": "12",
      "placeholder": "请输入姓名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "warn"
  }, [_vm._v(_vm._s(_vm.show))]), _vm._v(" "), _c('div', {
    staticClass: "display",
    staticStyle: {
      "margin-top": "2vh"
    }
  }, [_c('input', {
    staticStyle: {
      "width": "30vw",
      "text-align": "center"
    },
    attrs: {
      "value": "性别",
      "disabled": ""
    }
  }), _vm._v(" "), (_vm.userInfo.gender == 2) ? _c('radio-group', {
    attrs: {
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.genderChange
    }
  }, [_c('radio', {
    staticClass: "radio1",
    attrs: {
      "value": "男"
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('radio', {
    staticClass: "radio2",
    attrs: {
      "checked": "",
      "value": "女"
    }
  }, [_vm._v("女")])], 1) : _c('radio-group', {
    attrs: {
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.genderChange
    }
  }, [_c('radio', {
    staticClass: "radio1",
    attrs: {
      "checked": "",
      "value": "男"
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('radio', {
    staticClass: "radio2",
    attrs: {
      "value": "女"
    }
  }, [_vm._v("女")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "display"
  }, [_c('input', {
    staticStyle: {
      "width": "30vw",
      "text-align": "center"
    },
    attrs: {
      "value": "手机号",
      "disabled": ""
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mobile),
      expression: "mobile"
    }],
    staticStyle: {
      "width": "70vw"
    },
    attrs: {
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mobile = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "display"
  }, [_c('input', {
    staticStyle: {
      "width": "30vw",
      "text-align": "center"
    },
    attrs: {
      "value": "生日",
      "disabled": ""
    }
  }), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.startDate,
      "start": "pickerStart",
      "end": "2217-09-01",
      "eventid": '4'
    },
    on: {
      "change": function($event) {
        _vm.bindDateChange($event)
      }
    }
  }, [_c('div', {
    staticClass: "dateshow"
  }, [_c('div', {
    staticStyle: {
      "position": "relative",
      "top": "1.9vh",
      "left": "0rpx"
    }
  }, [_vm._v(_vm._s(_vm.startDate))])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "display"
  }, [_c('button', {
    staticStyle: {
      "background": "#318bf1",
      "color": "white",
      "border-radius": "10px",
      "width": "30vw"
    },
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.success
    }
  }, [_vm._v("完成")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a552683", esExports)
  }
}

/***/ })

},[197]);
//# sourceMappingURL=main.js.map