global.webpackJsonp([16],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(153);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '会员卡管理'
  }
});

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b7a0442_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(154)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b7a0442"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b7a0442_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b7a0442", Component.options)
  } else {
    hotAPI.reload("data-v-6b7a0442", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 154:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 155:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapState */])({
    iv_salt: function iv_salt(state) {
      return state.iv_salt;
    }
  })),
  data: function data() {
    return {
      userInfo: [],
      novelList: [],
      iv_salt: {},
      result: [],
      showId: false,
      bindedItems: [],
      login_type: ""
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(["getForward", "setUserInfo"]), {
    scrolltolower: function scrolltolower() {},
    scroll: function scroll(e) {
      console.log(e);
    },
    showList: function showList() {
      this.showId = !this.showId;
    },
    hideList: function hideList() {
      this.showId = false;
    },
    toVipCard: function toVipCard(kmid, companyid, limitdate) {
      if (this.showId) {
        this.showId = false;
      } else {
        if (limitdate) {
          this.$store.state.company_id = companyid;
          var url = "../card_detail/main?kmid=" + kmid;
          wx.navigateTo({ url: url });
        }
      }
    },
    toRegister: function toRegister() {
      var store = this.$store.state;
      if (store.login_type == 2) {
        var url = "../index/main";
        wx.navigateTo({ url: url });
      } else {
        var url = "../chooseKtv/main?type=1";
        wx.navigateTo({ url: url });
      }
    },
    toBind: function toBind() {
      var store = this.$store.state;
      var url = "../index/main";
      wx.navigateTo({ url: url });
    }
  }),
  onShow: function onShow() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var store, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store = _this.$store.state;

              _this.login_type = store.login_type;
              if (store.login_type == 1) {
                _this.$store.state.company_id = -1;
              }
              _context.next = 5;
              return _this.getForward([{
                url: "/member/list/binded",
                mutations: "setBinded"
              }, {
                companyid: store.company_id,
                customerid: store.customer_id,
                platformsource: store.platformsource
              }]);

            case 5:
              res = _context.sent;

              if (res.data.length == 0 && store.login_type == 2) {
                wx.showModal({
                  title: "温馨提示",
                  content: "您还没有会员卡，是否立即前往绑卡？",
                  cancelText: "我再想想",
                  confirmText: "立即前往",
                  confirmColor: "#000",
                  cancelColor: "#FF7300",
                  success: function success(res) {
                    if (res.confirm) {
                      var url = "../index/main";
                      wx.navigateTo({ url: url });
                    } else if (res.cancel) {
                      console.log("用户拒绝前往");
                    }
                  }
                });
              }
              _this.bindedItems = res.data;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [(_vm.showId == true) ? _c('div', {
    staticClass: "dropdown"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "header-font",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.hideList()
      }
    }
  }, [_c('img', {
    staticClass: "icon-card",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-列表icon_03.png"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "10rpx"
    }
  }, [_vm._v("会员卡列表")])]), _vm._v(" "), (_vm.login_type == 2) ? _c('div', {
    staticClass: "header-a",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toBind
    }
  }, [_c('img', {
    staticClass: "add",
    attrs: {
      "src": "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-添加_06.png"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "6rpx"
    },
    attrs: {
      "id": "a"
    }
  }, [_vm._v("添加")])]) : _vm._e()]), _vm._v(" "), _c('scroll-view', {
    style: ({
      'height': 'calc(99vh-10vw)',
      'margin-top': '1vh'
    }),
    attrs: {
      "scroll-y": true
    }
  }, _vm._l((_vm.bindedItems), function(item, index) {
    return _c('div', {
      key: item.kmid,
      staticStyle: {
        "padding-top": "1vh",
        "padding-bottom": "0vh"
      }
    }, [(item.uselimitdate) ? _c('div', {
      staticClass: "card",
      attrs: {
        "id": "card",
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.toVipCard(item.kmid, item.companyid, item.uselimitdate)
        }
      }
    }, [_c('div', {
      staticClass: "flex"
    }, [_c('div', {
      staticStyle: {
        "padding": "3vw 5rpx 4vw 5rpx",
        "margin-left": "5vw",
        "color": "white"
      }
    }, [_vm._v(_vm._s(item.gradename))])]), _vm._v(" "), _c('div', {
      staticClass: "bottom"
    }, [_c('p', {
      staticClass: "ktv_name"
    }, [_vm._v(_vm._s(item.companyname))]), _vm._v(" "), (item.uselimitdate) ? _c('P', {
      staticClass: "time",
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_vm._v("有效期至：" + _vm._s(item.uselimitdate))]) : _vm._e()], 1)]) : _vm._e()])
  }))], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "triangle_border_up"
  }, [_c('span')])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b7a0442", esExports)
  }
}

/***/ })

},[152]);
//# sourceMappingURL=main.js.map