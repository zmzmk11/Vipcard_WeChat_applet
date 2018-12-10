global.webpackJsonp([5],{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(217);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: '个人信息'
    }
});

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5b855fee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(220);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(218)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b855fee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5b855fee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\update\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b855fee", Component.options)
  } else {
    hotAPI.reload("data-v-5b855fee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 218:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 219:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      choose: [],
      show: "",
      startDate: "1990-01-01",
      endDate: "2018-02-21",
      pickerStart: "1990-01-01",
      userInfo: []
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
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward"]), {
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
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
    change: function change() {}
  }),

  mounted: function mounted() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var today;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.userInfo = _this2.$store.state.userInfo;
              today = _this2.getToday();

              _this2.choose = _this2.$store.state.cardinfo.data;
              _this2.startDate = _this2.choose.birthday;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }))();
  }
});

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticStyle: {
      "background": "white"
    }
  }, [_c('div', {
    staticClass: "display"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("头像")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('img', {
    staticClass: "userinfo-avatar",
    staticStyle: {
      "margin-top": "1.5vw"
    },
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "background-size": "cover"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "display"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.choose.membername))])]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "display"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("性别")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.choose.sex))])]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "display"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("手机号")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.choose.mobile))])]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "display"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("生日")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.choose.birthday))])])]), _vm._v(" "), _c('div', {
    staticClass: "note"
  }, [_vm._v("如需修改资料请前往KTV服务台办理")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b855fee", esExports)
  }
}

/***/ })

},[216]);
//# sourceMappingURL=main.js.map