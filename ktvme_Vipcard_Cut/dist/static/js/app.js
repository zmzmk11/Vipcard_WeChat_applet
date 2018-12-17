global.webpackJsonp([24],{

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stylus_common_styl__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stylus_common_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__stylus_common_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_identify_vue__ = __webpack_require__(51);




// import api from './global/api' // 引用接口处理文件，此处为api.js


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__components_identify_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */]);
// Vue.prototype.$api = api
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/erroPage/main', '^pages/logs/main', 'pages/index/main', 'pages/home/main', 'pages/register/main', 'pages/bindcard/main', 'pages/register_detail/main', 'pages/detail/main', 'pages/vipcard/main', 'pages/update/main', 'pages/recharge/main', 'pages/memberright/main', 'pages/map/main', 'pages/order/main', 'pages/integral/main', 'pages/conversion_record/main', 'pages/coupon_detail/main', 'pages/pay/main', 'pages/chooseKtv/main', 'pages/verify_phonenum/main', 'pages/choose_bindcard/main', 'pages/update_information/main', 'pages/card_detail/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
      // enablePullDownRefresh: true,
    }
  }
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(57);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(56)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7abaa2df", Component.options)
  } else {
    hotAPI.reload("data-v-7abaa2df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 57:
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






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      iv_salt: [],
      novelList: [],
      userInfo: [],
      access_token: ""
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapState */])({
    iv_salt: function iv_salt(state) {
      return state.iv_salt;
    },
    userInfo: function userInfo(state) {
      return state.userInfo;
    }
  })),

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])(["getIv_salt", "getForward", "setUserInfo", "member_bind", "setUserInfo1"]), {
    getSetting: function getSetting() {
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting["scope.userInfo"]) {
            wx.getUserInfo({
              success: function success(res) {
                // console.log(res);
                //用户已经授权过
                // var url = "../home/main";
                // wx.reLaunch({ url });
                console.log("用户已经授权过");
              }
            });
          } else {
            // var url = "../type/main";
            // wx.reLaunch({ url });
            console.log("用户还未授权过");
          }
        }
      });
    },
    getAccessToken: function getAccessToken() {
      var _this = this;
      wx.request({
        url: "https://api.weixin.qq.com/cgi-bin/token",
        data: {
          grant_type: "client_credential",
          appid: this.$store.state.user_id,
          secret: this.$store.state.secret
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        success: function success(res) {
          _this.$store.state.access_token = res.data.access_token;
        }
      });
    },
    getQrcode: function getQrcode() {
      var _this = this;
      wx.request({
        url: "https://api.weixin.qq.com/wxa/getwxacode?access_token=" + _this.$store.state.access_token,
        data: {
          path: "pages/home/index"
        },
        header: {
          "content-type": "image/jpeg" // 默认值
        },
        method: "POST",
        success: function success(res) {
          console.log(res);
        }
      });
    },
    getiv_salt: function getiv_salt() {
      wx.request({
        method: "get",
        url: "http://localhost:8080/hello",
        data: {},
        header: {
          "content-type": "application/json" // 默认值
        },
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }),
  onLaunch: function onLaunch(options) {
    console.log("onLaunch场景值：" + options.scene);
    console.log("onLaunch路径：" + options.path);
    console.log(options.query);
  },
  onShow: function onShow(options) {
    console.log("onShow场景值：" + options.scene);
    console.log("onShow路径：" + options.path);
    console.log(options.query);
    var store = this.$store.state;
    if (options.query.scene != undefined) {
      var scene = decodeURIComponent(options.query.scene);
    } else {
      scene = 0;
    }
    if (options.scene != store.scene || scene != store.company_id && scene != 0) {
      store.scene = options.scene;
      if (scene) {
        store.login_type = 2;
        store.company_id = scene;
      } else if (!options.query.kmid) {
        store.login_type = 1;
        store.company_id = -1;
        var url = "./pages/logs/main";
        wx.reLaunch({ url: url });
      }
    }
  },
  created: function created(options) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var store, logs;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("created");
              store = _this2.$store.state;

              if (!store.openid) {
                _this2.setUserInfo1();
              }
              // 调用API从本地缓存中获取数据
              // this.getAccessToken();
              logs = wx.getStorageSync("logs") || [];

              logs.unshift(Date.now());
              wx.setStorageSync("logs", logs);
              console.log("app created and cache logs by setStorageSync");

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }))();
  }
});

/***/ })

},[53]);
//# sourceMappingURL=app.js.map