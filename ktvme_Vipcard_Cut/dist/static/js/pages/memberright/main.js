global.webpackJsonp([11],{

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(178);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '会员特权'
  }
});

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c32137d0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(181);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(179)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c32137d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c32137d0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\memberright\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c32137d0", Component.options)
  } else {
    hotAPI.reload("data-v-c32137d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
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
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      choose: {},
      applicablestores: {},
      flag: false
    };
  },
  onLoad: function onLoad(options) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res, items, index, cardinfo;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.flag = false;
              _context.next = 3;
              return _this.getForward([{
                url: "/member/applicablestores",
                mutations: "setApplicablestores"
              }, {
                company_id: _this.$store.state.company_id,
                kmid: options.kmid
              }]);

            case 3:
              res = _context.sent;

              _this.applicablestores = res.result;
              items = _this.applicablestores;
              _context.t0 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.keys(items);

            case 7:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 13;
                break;
              }

              index = _context.t1.value;

              _this.flag = true;
              return _context.abrupt("break", 13);

            case 13:
              cardinfo = _this.$store.state.cardinfo.data;

              _this.choose = _this.$store.state.cardinfo.data;

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward"]), {
    phoneCall: function phoneCall() {
      wx.makePhoneCall({
        phoneNumber: this.choose.relationphone
      });
    },
    toMap: function toMap(companycode) {
      var url = "../map/main?companycode=" + companycode;
      wx.navigateTo({ url: url });
    }
  })
});

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "block"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), (!_vm.choose.memberrights) ? _c('div', {
    staticClass: "content"
  }, [_vm._v("商家还未添加任何会员权益!!!")]) : _vm._e(), _vm._v(" "), (_vm.choose.memberrights) ? _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.choose.memberrights)
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.choose.memberrights))])]) : _vm._e()]), _vm._v(" "), (_vm.flag) ? _c('div', {
    staticClass: "block1"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _vm._l((_vm.applicablestores), function(items, index) {
    return _c('div', {
      key: index
    }, _vm._l((items), function(item, val) {
      return _c('div', {
        key: val,
        staticClass: "content",
        attrs: {
          "eventid": '0-' + index + '-' + val
        },
        on: {
          "click": function($event) {
            _vm.toMap(item.companycode)
          }
        }
      }, [_c('div', {
        staticStyle: {
          "display": "flex",
          "flex-direction": "column",
          "margin-left": "10rpx",
          "width": "70vw",
          "color": "gray"
        }
      }, [_c('span', [_vm._v(_vm._s(item.companyname))]), _vm._v(" "), _c('span', {
        staticStyle: {
          "font-size": "28rpx"
        }
      }, [_vm._v("(地址：" + _vm._s(item.companyaddress) + ")")])])])
    }))
  })], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "margin"
  }), _vm._v(" "), _c('div', {
    staticClass: "block2"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "content",
    staticStyle: {
      "flex-direction": "row"
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.phoneCall
    }
  }, [_c('span', {
    staticClass: "font"
  }, [_vm._v(_vm._s(_vm.choose.relationphone))])])]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  })])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "head"
  }, [_c('img', {
    staticClass: "pic",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_01.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "font"
  }, [_vm._v("会员权益")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "head"
  }, [_c('img', {
    staticClass: "pic",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_02.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "font"
  }, [_vm._v("适用门店")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "head"
  }, [_c('img', {
    staticClass: "pic",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_08.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "font"
  }, [_vm._v("商家电话")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c32137d0", esExports)
  }
}

/***/ })

},[177]);
//# sourceMappingURL=main.js.map