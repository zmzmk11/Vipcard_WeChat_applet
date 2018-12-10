global.webpackJsonp([23],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(110);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '绑定实卡'
  }
});

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_553dd5cd_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_553dd5cd_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\bindcard\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-553dd5cd", Component.options)
  } else {
    hotAPI.reload("data-v-553dd5cd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      cardnum: "",
      focus: false
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward"]), {
    bindGetUserInfo: function bindGetUserInfo(e) {
      console.log(e);
      this.$store.state.userInfo = e.mp.detail.userInfo;
      if (e.mp.detail.rawData) {
        this.next();
        //    var url="../register/main";
        // wx.navigateTo({url})
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    },
    next: function next() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var store, res, flag, binded, i, j, url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.cardnum == "")) {
                  _context.next = 4;
                  break;
                }

                wx.showToast({
                  title: "请输入卡号！",
                  icon: "none",
                  duration: 1000
                });
                _context.next = 12;
                break;

              case 4:
                store = _this.$store.state;
                _context.next = 7;
                return _this.getForward([{
                  url: "/member/list/unbind",
                  mutations: "setUnbind"
                }, {
                  companyid: store.company_id,
                  mobile: _this.cardnum,
                  platformsource: 0
                }]);

              case 7:
                res = _context.sent;
                flag = 0;
                binded = store.binded;

                for (i = 0; i < res.data.length; i++) {
                  for (j = 0; j < binded.length; j++) {
                    if (res.data[i].cardnum == binded[j].cardnum) {
                      flag++;
                    }
                  }
                }
                if (res.data.length - flag != 0) {
                  if (res.data.length - flag == 1) {
                    url = "../verify_phonenum/main";

                    wx.navigateTo({ url: url });
                  } else {
                    url = "../choose_bindcard/main";

                    wx.navigateTo({ url: url });
                  }
                } else {
                  wx.showToast({
                    title: "抱歉！未查询到注册卡号或手机号！",
                    icon: "none",
                    duration: 2000
                  });
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    fillPhone: function fillPhone() {
      this.cardnum = this.$store.state.mobile;
    },
    clean: function clean() {
      this.cardnum = "";
    }
  }),
  onLoad: function onLoad() {
    this.cardnum = "";
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "input"
  }, [_c('img', {
    staticStyle: {
      "height": "40rpx",
      "width": "6vw",
      "margin-left": "2vw"
    },
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/input.png"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cardnum),
      expression: "cardnum"
    }],
    staticStyle: {
      "width": "60vw",
      "margin-left": "20rpx",
      "font-size": "18px"
    },
    attrs: {
      "maxlength": "20",
      "type": "number",
      "placeholder": "请输入实体卡号或手机号",
      "eventid": '0'
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
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.cardnum),
      expression: "cardnum"
    }],
    staticClass: "clean",
    attrs: {
      "src": "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/错误.png",
      "eventid": '1'
    },
    on: {
      "click": _vm.clean
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "fill",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.fillPhone
    }
  }, [_vm._v("填充手机号")])]), _vm._v(" "), _c('div', {
    staticClass: "next"
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '3'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("下一步")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-553dd5cd", esExports)
  }
}

/***/ })

},[109]);
//# sourceMappingURL=main.js.map