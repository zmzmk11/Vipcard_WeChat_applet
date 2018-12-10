global.webpackJsonp([8],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(193);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: '会员充值'
    }
});

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_65181327_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(196);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(194)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65181327"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_65181327_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\recharge\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65181327", Component.options)
  } else {
    hotAPI.reload("data-v-65181327", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 195:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      rechargeRule: {},
      custom_rule: {},
      classa: "item",
      ind: 0,
      show: false,
      money: "",
      present_money: "",
      rulesid: "",
      kmid: ""
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward"]), {
    checked: function checked(index) {
      this.ind = index;
      for (var i = 0; i < this.rechargeRule.length; i++) {
        if (this.rechargeRule[i].checked == true) {
          this.rechargeRule[i].checked = false;
          break;
        }
      }
      this.rechargeRule[index].checked = true;
    },
    other: function other() {
      if (this.ind == -1) {
        this.show = true;
      } else {
        this.ind = -1;
      }
    },
    toPay: function toPay() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var i, state, res, url, data, _res;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.ind == -1)) {
                  _context.next = 25;
                  break;
                }

                if (!(_this.money == 0 || _this.money == "")) {
                  _context.next = 5;
                  break;
                }

                wx.showToast({
                  title: "请输入金额！",
                  icon: "none",
                  duration: 1000
                });
                _context.next = 23;
                break;

              case 5:
                i = 0;

              case 6:
                if (!(i < _this.custom_rule.length)) {
                  _context.next = 17;
                  break;
                }

                if (!(_this.money >= _this.custom_rule[i].begin_cashchangemoney && _this.money <= _this.custom_rule[i].end_cashchangemoney)) {
                  _context.next = 13;
                  break;
                }

                _this.present_money = (_this.money * _this.custom_rule[i].presentproportion * 0.01).toFixed(2);
                _this.rulesid = -1;
                return _context.abrupt("break", 17);

              case 13:
                if (i == _this.custom_rule.length - 1) {
                  _this.present_money = (_this.money * _this.custom_rule[_this.custom_rule.length - 1].presentproportion * 0.01).toFixed(2);
                  _this.rulesid = -1;
                }

              case 14:
                i++;
                _context.next = 6;
                break;

              case 17:
                state = _this.$store.state;
                _context.next = 20;
                return _this.getForward([{
                  url: "/member/recharge",
                  mutations: "setRecharge"
                }, {
                  cashchangemoney: _this.money,
                  companyid: state.company_id,
                  create_company_id: state.company_id,
                  kmid: _this.kmid,
                  ordertype: 2,
                  platformsource: state.platformsource,
                  presentmoney: _this.present_money,
                  rulesid: _this.rulesid
                }]);

              case 20:
                res = _context.sent;

                console.log(res);
                if (!res.ret) {
                  url = "../pay/main?money=" + _this.money + "&present_money=" + _this.present_money + "&rulesid=" + _this.rulesid;

                  wx.navigateTo({ url: url });
                } else {
                  wx.showToast({
                    title: res.msg,
                    icon: "none",
                    duration: 1000
                  });
                }

              case 23:
                _context.next = 33;
                break;

              case 25:
                state = _this.$store.state;
                data = {
                  cashchangemoney: _this.rechargeRule[_this.ind].cashchangemoney,
                  companyid: state.company_id,
                  create_company_id: state.company_id,
                  kmid: _this.kmid,
                  ordertype: 2,
                  platformsource: state.platformsource,
                  presentmoney: _this.rechargeRule[_this.ind].presentmoney,
                  rulesid: _this.rechargeRule[_this.ind].rulesid
                };

                console.log(data);
                _context.next = 30;
                return _this.getForward([{
                  url: "/member/recharge",
                  mutations: "setRecharge"
                }, {
                  cashchangemoney: _this.rechargeRule[_this.ind].cashchangemoney,
                  companyid: state.company_id,
                  create_company_id: state.company_id,
                  kmid: _this.kmid,
                  ordertype: 2,
                  platformsource: state.platformsource,
                  presentmoney: _this.rechargeRule[_this.ind].presentmoney,
                  rulesid: _this.rechargeRule[_this.ind].rulesid
                }]);

              case 30:
                _res = _context.sent;

                console.log(_res);
                if (!_res.ret) {
                  url = "../pay/main?ind=" + _this.ind;

                  wx.navigateTo({ url: url });
                } else {
                  wx.showToast({
                    title: _res.msg,
                    icon: "none",
                    duration: 1000
                  });
                }

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }),
  onLoad: function onLoad(options) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var res, i, res1;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this2.kmid = options.kmid;
              _context2.next = 3;
              return _this2.getForward([{
                url: "/member/recharge/rule",
                mutations: "setRechargeRule"
              }, {
                companyid: _this2.$store.state.company_id,
                gradeid: options.gradeid
              }]);

            case 3:
              res = _context2.sent;

              console.log(res);
              for (i = 0; i < res.data.length; i++) {
                if (i == 0) {
                  res.data[i].checked = true;
                } else {
                  res.data[i].checked = false;
                }
              }
              _this2.rechargeRule = res.data;

              if (!(res.ret == 50008)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 15;
              break;

            case 10:
              _context2.next = 12;
              return _this2.getForward([{
                url: "/member/recharge/custom_rule",
                mutations: "setCustom_rule"
              }, {
                companyid: _this2.$store.state.company_id,
                gradeid: options.gradeid
              }]);

            case 12:
              res1 = _context2.sent;

              console.log(res1);
              _this2.custom_rule = res1.data;

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
});

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#F5F5F5",
      "width": "100%",
      "height": "100vh"
    }
  }, [_c('div', {
    staticClass: "block"
  }, [_c('div', {
    staticClass: "span"
  }, [_vm._v("请选择充值金额")]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._l((_vm.rechargeRule), function(item, index) {
    return _c('div', {
      key: item.cashchangemoney,
      staticClass: "item",
      class: {
        'check': _vm.ind === index
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.checked(index)
        }
      }
    }, [_c('span', {
      staticStyle: {
        "font-size": "28rpx",
        "padding": "1.0vh 0 0 0"
      }
    }, [_vm._v(_vm._s(item.cashchangemoney) + "元")]), _vm._v(" "), _c('span', {
      staticClass: "font",
      class: {
        'col': _vm.ind === index
      }
    }, [_vm._v("赠送：" + _vm._s(item.presentmoney) + "元")])])
  }), _vm._v(" "), (_vm.custom_rule.length) ? _c('div', {
    staticClass: "item",
    class: {
      'check': _vm.ind === -1
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.other
    }
  }, [(_vm.ind === -1) ? _c('div', {
    staticClass: "input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.money),
      expression: "money"
    }],
    attrs: {
      "maxlength": "5",
      "type": "number",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.money)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.money = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("元")])]) : _c('div', {
    staticClass: "other"
  }, [_c('span', [_vm._v("其他金额")])])]) : _vm._e()], 2)]), _vm._v(" "), (_vm.ind === -1) ? _c('div', {
    staticClass: "rule"
  }, [_c('span', {
    staticStyle: {
      "margin-left": "-7vw"
    }
  }, [_vm._v("充值优惠规则")]), _vm._v(" "), _vm._l((_vm.custom_rule), function(item, index) {
    return _c('span', {
      key: item.rulesid,
      staticStyle: {
        "padding-top": "1px"
      }
    }, [_vm._v("充值：" + _vm._s(item.begin_cashchangemoney) + "~" + _vm._s(item.end_cashchangemoney) + "元,赠送" + _vm._s(item.presentproportion) + "%充值金额")])
  })], 2) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.toPay
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
     require("vue-hot-reload-api").rerender("data-v-65181327", esExports)
  }
}

/***/ })

},[192]);
//# sourceMappingURL=main.js.map