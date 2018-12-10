global.webpackJsonp([7],{

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(203);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '申请会员卡'
  }
});

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f7da0fba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(206);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(204)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f7da0fba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\register\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f7da0fba", Component.options)
  } else {
    hotAPI.reload("data-v-f7da0fba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 204:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 205:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      gradeid: "",
      cardItems: [],
      unbind: []
    };
  },


  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward"]), {
    radioChange: function radioChange(e) {
      this.gradeid = e.mp.detail.value;
      console.log("radio 携带的值为：" + e.mp.detail.value);
      var radioItems = this.cardItems;
      for (var i = 0; i < radioItems.length; ++i) {
        radioItems[i].checked = radioItems[i].gradeid == e.mp.detail.value;
      }
      this.cardItems = radioItems;
    },
    toDetail: function toDetail(gradeid) {
      var url = "../detail/main?gradeid=" + gradeid;
      wx.navigateTo({ url: url });
    },
    next: function next() {
      var url = "../register_detail/main?gradeid=" + this.gradeid;
      wx.navigateTo({ url: url });
    }
  }),
  onLoad: function onLoad() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var state, res, i, res1, res2;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //调用请求获取订单列表接口
              state = _this.$store.state;
              _context.next = 3;
              return _this.getForward([{
                url: "/member/list/level",
                mutations: "setLevelList"
              }, {
                companyid: state.company_id,
                type: 0
              }]);

            case 3:
              res = _context.sent;

              console.log("绑卡列表：");
              console.log(res);
              i = 0;

            case 7:
              if (!(i < res.data.length)) {
                _context.next = 14;
                break;
              }

              if (!(res.data[i].sellmoney == 0)) {
                _context.next = 11;
                break;
              }

              res.data[i].checked = true;
              return _context.abrupt("break", 14);

            case 11:
              i++;
              _context.next = 7;
              break;

            case 14:
              _this.gradeid = res.data[i].gradeid;
              _this.cardItems = res.data;
              _context.next = 18;
              return _this.getForward([{
                url: "/member/list/unbind",
                mutations: "setUnbind"
              }, {
                companyid: state.company_id,
                mobile: state.mobile,
                platformsource: state.platformsource
              }]);

            case 18:
              res1 = _context.sent;

              console.log("未绑卡列表：");
              console.log(res1.data);
              _context.next = 23;
              return _this.getForward([{
                url: "/member/bind/all_red_envelop_rule",
                mutations: "setRedrule"
              }, {
                company_id: state.company_id
              }]);

            case 23:
              res2 = _context.sent;

              console.log("红包规则列表：");
              console.log(res2);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('scroll-view', {
    style: ({
      'height': '86vh'
    }),
    attrs: {
      "enable-back-to-top": true,
      "scroll-y": true
    }
  }, [_c('radio-group', {
    attrs: {
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.radioChange
    }
  }, _vm._l((_vm.cardItems), function(item, index) {
    return (item.sellmoney == 0 && item.hidesell) ? _c('div', {
      key: index,
      staticClass: "card-detail"
    }, [_c('radio', {
      staticClass: "radio-type",
      attrs: {
        "value": item.gradeid,
        "checked": item.checked
      }
    }, [_c('div', {
      staticClass: "first"
    }, [_c('div', {
      staticClass: "small-card",
      style: ({
        'background-image': 'url(' + item.cardpicid + ')'
      })
    }), _vm._v(" "), _c('span', {
      staticClass: "card_name"
    }, [_vm._v(_vm._s(item.gradename))]), _vm._v(" "), _c('div', {
      staticClass: "cost"
    }, [(item.sellmoney == 0) ? _c('p', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v("免费")]) : _c('p', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v("￥" + _vm._s(item.sellmoney))])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "dashed"
    }), _vm._v(" "), _c('div', {
      staticClass: "second"
    }, [_c('div', [_c('div', {
      staticClass: "discount"
    }, [_c('span', {
      staticClass: "hui"
    }, [_vm._v("惠")]), _vm._v(" "), _c('span', {
      staticClass: "detail"
    }, [_vm._v("享受会员优惠"), (!item.useintegral) ? _c('span', [_vm._v("、可积分")]) : _vm._e()])]), _vm._v(" "), (item.has_red) ? _c('div', {
      staticClass: "discount",
      staticStyle: {
        "margin-top": "15rpx"
      }
    }, [_c('span', {
      staticClass: "flag"
    }, [_vm._v("￥")]), _vm._v(" "), _c('span', {
      staticClass: "detail"
    }, [_vm._v("建卡就送"), _c('span', {
      staticStyle: {
        "color": "#318bf1"
      }
    }, [_vm._v(_vm._s(item.red_envelop_memo))])])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "router",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetail(item.gradeid)
        }
      }
    }, [_vm._v("详情>")])])])], 1) : _vm._e()
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "next"
  }, [_c('button', {
    staticClass: "button",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.next()
      }
    }
  }, [_vm._v("下一步")])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "height": "6vh",
      "background": "#EAEAEA"
    }
  }, [_c('a', {
    staticClass: "tag"
  }, [_vm._v("请选择会员卡：")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f7da0fba", esExports)
  }
}

/***/ })

},[202]);
//# sourceMappingURL=main.js.map