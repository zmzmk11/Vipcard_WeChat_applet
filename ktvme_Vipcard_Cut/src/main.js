import Vue from 'vue'
import App from './App'
import store from './store'
import vuex from 'vuex';
// import api from './global/api' // 引用接口处理文件，此处为api.js
import "./stylus/common.styl"
import SIdentify from './components/identify.vue'
Vue.use(SIdentify)
Vue.use(vuex);
// Vue.prototype.$api = api
Vue.prototype.$store = store;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/erroPage/main', '^pages/logs/main', 'pages/index/main',
      'pages/home/main', 'pages/register/main',
      'pages/bindcard/main', 'pages/register_detail/main',
      'pages/detail/main', 'pages/vipcard/main',
      'pages/update/main', 'pages/recharge/main',
      'pages/memberright/main', 'pages/map/main',
      'pages/order/main', 'pages/integral/main',
      'pages/conversion_record/main', 'pages/coupon_detail/main',
      'pages/pay/main','pages/chooseKtv/main',
      'pages/verify_phonenum/main','pages/choose_bindcard/main',
      'pages/update_information/main','pages/card_detail/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      // enablePullDownRefresh: true,
    }
  }
}
