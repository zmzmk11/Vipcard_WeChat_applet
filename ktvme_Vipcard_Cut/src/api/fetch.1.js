import utils from '../utils/utils'
import store from '../store/index'

var Dec = require('../aes/AesUtil.js');

export function newrequest(obj) {
  let iv_salt = store.state.iv_salt
  obj.data.content = Dec.Encrypt(iv_salt.salt, iv_salt.iv, iv_salt.count, JSON.stringify(obj.data.content))
  // 是否显示loading
  if (obj.dontLoading !== true) {
    wx.showNavigationBarLoading();
    wx.showLoading({
      mask: true,
      title: '加载中'
    });
  }
  wx.request({
    url: utils.API + obj.url,
    data: obj.data,  //obj.data,
    header: {
      'content-type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': 'Bearer ' + token,
      ...obj.header
    },
    method: obj.method,

    success(res) {
      // 处理返回信息
      handleResult(res);

      // // 处理 new token
      // handleNewToken(res);

      if (obj.dontLoading !== true && store.state.showing !== true) {
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }

      store.commit('setShowing', false);
    },

    fail(e) {

      reject(e)
    }

  })
}

// 处理new token
function handleNewToken(res) {
  let new_token = res.header['New-Token'];
  if (new_token) {
    store.commit('setToken', new_token)
  }
}

// 统一显示toast
function showToast(message) {
  wx.showToast({
    title: message,
    icon: 'none',
    duration: 2000
  });

  store.commit('setShowing', true);
}
/**
 * 处理code信息
 * @param res
 */
function handleResult(res) {
  console.log(res)
  //  res.statusCode = 404
  if (res.statusCode == 200) {
    let code = res.data.ret;
    if (res.data.errno == 0) {
      code = 0
    }
    switch (code) {
      case 0:
        store.commit("setOpenid_SK", res.data.data)
        var url = "../logs/main"
        wx.reLaunch({ url })
        break;

      default:
        showToast(res.data.msg);
      // var url = "../erroPage/main"
      // wx.reLaunch({ url })
    }
  }

}