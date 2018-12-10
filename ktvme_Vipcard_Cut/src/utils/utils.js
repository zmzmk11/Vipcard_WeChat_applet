let util = {};

const ajaxUrl = process.env.NODE_ENV === 'development'
  // 测试接口地址
  ? 'http://192.168.96.11:3007'
  // 线上接口地址
  : 'http://192.168.97.178:3007';


util.API = ajaxUrl;
util.oauthUrl = ajaxUrl;

export default util;
