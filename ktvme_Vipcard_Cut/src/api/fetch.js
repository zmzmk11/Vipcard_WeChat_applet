import utils from '../utils/utils'
import store from '../store/index'

var Dec = require('../aes/AesUtil.js');

export async function request(obj) {
  let iv_salt = store.state.iv_salt
  obj.data.content = Dec.Encrypt(iv_salt.salt, iv_salt.iv, iv_salt.count, JSON.stringify(obj.data.content))
  return new Promise((resolve, reject) => {
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

        resolve(res.data)
      },

      fail(e) {

        reject(e)
      }

    })
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
// console.log(res)
  if (res.statusCode != 200) {
    var url = "../erroPage/main"
    wx.reLaunch({ url });
  } else {
    let code = res.data.ret;
    if (res.data.errno == 0) {
      code = 0
    }
    switch (code) {
      case 0:
        break;

      case 111:
        showToast("服务异常，请稍后重试！")
        // var url = "../type/main"
        // wx.reLaunch({ url })
        // store.dispatch('getUserToken');
        break;
      case 116:
        break;
      case 50008:
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 2000)
        showToast('抱歉,此会员等级未开通储值权限,请与商家联系!')
        // var url="../home/main"
        // wx.redirectTo({ url });
        break;

      case 50080:
        wx.hideLoading();
        wx.hideNavigationBarLoading();
        break;

      case 50000:
        showToast('抱歉,该会员不存在!');
        break;

      default:
        // setTimeout(() => {
        //   wx.navigateBack({
        //     delta: 1
        //   })
        // }, 2000)
        showToast(res.data.msg);

    }
  }

}