global.webpackJsonp([10],{

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(183);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: '订单管理'
    }
});

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a5316638_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(186);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(184)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a5316638_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5316638", Component.options)
  } else {
    hotAPI.reload("data-v-a5316638", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 184:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 185:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      kmid: "",
      orderno: "",
      index: 0,
      detail: [],
      search_group: [{
        id: 1,
        lable: "近一个月",
        value: 1,
        checked: true
      }, {
        id: 2,
        lable: "近三个月",
        value: 3,
        checked: false
      }, {
        id: 3,
        lable: "近半年",
        value: 6,
        checked: false
      }, {
        id: 4,
        lable: "近一年",
        value: 12,
        checked: false
      }]
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward"]), {
    show: function show(orderno) {
      if (this.orderno == orderno) {
        this.orderno = "";
      } else {
        this.orderno = orderno;
      }
    },
    search: function search(index) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var state, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.index != index)) {
                  _context.next = 9;
                  break;
                }

                _this.search_group[_this.index].checked = !_this.search_group[_this.index].checked;
                _this.search_group[index].checked = !_this.search_group[index].checked;
                _this.index = index;
                state = _this.$store.state;
                _context.next = 7;
                return _this.getForward([{
                  url: "/member/consume/detail",
                  mutations: "setDetail"
                }, {
                  company_id: state.company_id,
                  kmid: _this.kmid,
                  num: _this.search_group[index].value
                }]);

              case 7:
                res = _context.sent;

                _this.detail = res.data;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    bindPickerChange: function bindPickerChange(e) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var state, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                state = _this2.$store.state;

                console.log("picker发送选择改变，携带值为", e.mp.detail.value);
                _this2.index = parseInt(e.mp.detail.value);
                _context2.next = 5;
                return _this2.getForward([{
                  url: "/member/consume/detail",
                  mutations: "setDetail"
                }, {
                  company_id: state.company_id,
                  kmid: _this2.kmid,
                  num: parseInt(e.mp.detail.value) + 1
                }]);

              case 5:
                res = _context2.sent;

                _this2.detail = res.data;

              case 7:
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
      var i, state, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this3.index = 0;
              _this3.search_group[0].checked = true;
              for (i = 1; i < 4; i++) {
                _this3.search_group[i].checked = false;
              }
              state = _this3.$store.state;

              _this3.kmid = options.kmid;
              _context3.next = 7;
              return _this3.getForward([{
                url: "/member/consume/detail",
                mutations: "setDetail"
              }, {
                company_id: state.company_id,
                kmid: options.kmid,
                num: 1
              }]);

            case 7:
              res = _context3.sent;

              _this3.detail = res.data;

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
});

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "btn-content"
  }, _vm._l((_vm.search_group), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "btn",
      class: {
        'on': item.checked
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.search(index)
        }
      }
    }, [_vm._v(_vm._s(item.lable))])])
  })), _vm._v(" "), (_vm.detail != '') ? _c('scroll-view', {
    style: ({
      'height': '87vh'
    }),
    attrs: {
      "scroll-y": true
    }
  }, _vm._l((_vm.detail), function(items, index) {
    return _c('div', {
      key: items.value,
      staticClass: "content"
    }, [_c('div', {
      staticStyle: {
        "padding": "15rpx 0rpx 10rpx 30rpx",
        "font-size": "30rpx"
      }
    }, [_vm._v(_vm._s(items.title))]), _vm._v(" "), _vm._l((items.context), function(item, val) {
      return _c('div', {
        key: val,
        attrs: {
          "eventid": '1-' + index + '-' + val
        },
        on: {
          "click": function($event) {
            _vm.show(item.orderno)
          }
        }
      }, [_c('div', {
        staticClass: "detail"
      }, [_c('div', {
        staticStyle: {
          "display": "flex",
          "flex-direction": "column",
          "width": "60vw"
        }
      }, [_c('span', {
        staticClass: "span1"
      }, [_vm._v(_vm._s(item.productname))]), _vm._v(" "), _c('div', {
        staticClass: "span2"
      }, [_vm._v(_vm._s(item.createdatetime))])]), _vm._v(" "), _c('div', {
        staticStyle: {
          "width": "25vw",
          "display": "flex",
          "flex-direction": "row"
        }
      }, [_c('span', {
        staticClass: "span3"
      }, [_vm._v("￥" + _vm._s(item.cashchangemoney))]), _vm._v(" "), (_vm.orderno != item.orderno) ? _c('img', {
        staticClass: "fold1",
        attrs: {
          "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/fold.png"
        }
      }) : _c('img', {
        staticClass: "fold1",
        attrs: {
          "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/unfold.png"
        }
      })])]), _vm._v(" "), _c('div', {
        staticClass: "line"
      }), _vm._v(" "), (_vm.orderno == item.orderno) ? _c('div', {
        staticClass: "remark"
      }, [_c('div', {
        domProps: {
          "innerHTML": _vm._s(item.remark)
        }
      }, [_vm._v(_vm._s(item.remark))])]) : _vm._e(), _vm._v(" "), _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (_vm.orderno == item.orderno),
          expression: "orderno==item.orderno"
        }],
        staticClass: "line"
      })])
    })], 2)
  })) : _c('scroll-view', {
    style: ({
      'height': '85vh'
    })
  }, [_c('div', {
    staticClass: "none"
  }, [_c('div', [_c('img', {
    staticClass: "sigui",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/empty_prompt.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.search_group[_vm.index].lable) + "没有订单产生！")])])])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticStyle: {
      "padding-top": "5rpx",
      "font-size": "32rpx"
    }
  }, [_vm._v("订单查询")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a5316638", esExports)
  }
}

/***/ })

},[182]);
//# sourceMappingURL=main.js.map