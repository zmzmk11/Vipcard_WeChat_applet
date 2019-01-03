global.webpackJsonp([4],{

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(208);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: '个人信息确认'
    }
});

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47288a36_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(215);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(209)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47288a36"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47288a36_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\update_information\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47288a36", Component.options)
  } else {
    hotAPI.reload("data-v-47288a36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 209:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      kmid: "",
      gender: "",
      show: "",
      gradeid: "",
      levelList: [],
      choose: {},
      startDate: "1990-01-01",
      endDate: "2018-02-21",
      pickerStart: "1990-01-01",
      remsg: {}
    }, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, "gender", [{
      id: 1,
      value: "男",
      isChecked: true
    }, {
      id: 2,
      value: "女",
      isChecked: false
    }]), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, "checked1", true), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, "checked2", false), _ref;
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
    // 设置时间
    var today = this.getToday();
  },

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])(["getForward"]), {
    genderChange: function genderChange(e) {
      this.choose.sex = e.mp.detail.value;
      console.log("radio 携带的值为：" + e.mp.detail.value);
    },
    check: function check(index) {
      // 先取消所有选中项
      this.radios.forEach(function (item) {
        item.isChecked = false;
      });
      //再设置当前点击项选中
      // 设置值，以供传递
      this.radios[index].isChecked = true;
    },
    radio: function radio(index) {
      if (index == 0) {
        this.choose.sex = "男";
        this.gender[index].isChecked = true;
        this.gender[index + 1].isChecked = false;
      } else if (index == 1) {
        this.choose.sex = "女";
        this.gender[index].isChecked = true;
        this.gender[index - 1].isChecked = false;
      }
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
                  platformsource: _this.$store.state.platformsource,
                  rulesid: 0,
                  sex: _this.choose.sex,
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
                  url: "/member/update",
                  mutations: "setUpdate"
                }, {
                  birthday: _this2.startDate,
                  companyid: _this2.$store.state.company_id,
                  create_company_id: _this2.$store.state.company_id,
                  membername: _this2.choose.membername,
                  kmid: _this2.kmid,
                  mobile: _this2.choose.mobile,
                  sex: _this2.choose.sex
                }]);

              case 10:
                res = _context2.sent;

                if (res.ret == 0) {
                  setTimeout(function () {
                    var url = "../home/main";
                    wx.reLaunch({ url: url });
                  }, 1000);
                  wx.showToast({
                    title: "绑卡成功！",
                    icon: "success",
                    duration: 1500
                  });
                } else {
                  wx.showToast({
                    title: res.msg,
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
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var store, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              store = _this3.$store.state;

              _this3.kmid = options.kmid;
              _context3.next = 4;
              return _this3.getForward([{
                url: "/member/info",
                mutations: "setCardInfo"
              }, {
                company_id: store.company_id,
                kmid: options.kmid,
                platformsource: store.platformsource
              }]);

            case 4:
              res = _context3.sent;

              _this3.choose = res.data;
              _this3.startDate = res.data.birthday;
              if (res.data.sex == "女") {
                _this3.gender[1].isChecked = true;
                _this3.gender[0].isChecked = false;
              } else {
                _this3.gender[0].isChecked = true;
                _this3.gender[1].isChecked = false;
              }

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
});

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "head"
  }, [_vm._v("请确认您的个人信息")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "background": "white"
    }
  }, [_c('div', {
    staticClass: "display"
  }, [_c('input', {
    staticStyle: {
      "width": "30vw",
      "text-align": "center",
      "padding-right": "10vw"
    },
    attrs: {
      "value": "姓名",
      "disabled": ""
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.choose.membername),
      expression: "choose.membername"
    }],
    staticStyle: {
      "width": "60vw",
      "color": "gray"
    },
    attrs: {
      "maxlength": "12",
      "placeholder": "请输入姓名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.choose.membername)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.choose.membername = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "warn"
  }, [_vm._v(_vm._s(_vm.show))]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "display"
  }, [_c('input', {
    staticStyle: {
      "width": "30vw",
      "text-align": "center"
    },
    attrs: {
      "value": "性别",
      "disabled": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "radio"
  }, _vm._l((_vm.gender), function(item, index) {
    return _c('div', {
      key: item.id,
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.radio(index)
        }
      }
    }, [(item.isChecked) ? _c('img', {
      staticClass: "radio-icon",
      attrs: {
        "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页_选择.png"
      }
    }) : _c('img', {
      staticClass: "radio-icon",
      attrs: {
        "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页_选择常态.png"
      }
    }), _vm._v(" "), _c('div', {
      staticStyle: {
        "margin-right": "20rpx"
      }
    }, [_vm._v(_vm._s(item.value))])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
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
      "eventid": '2'
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
      "left": "10vw"
    }
  }, [_vm._v(_vm._s(_vm.startDate))])])])], 1)]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.success
    }
  }, [_vm._v("确认")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47288a36", esExports)
  }
}

/***/ })

},[207]);
//# sourceMappingURL=main.js.map