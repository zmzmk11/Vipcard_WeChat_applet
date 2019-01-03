import Vue from 'vue';
import vuex from 'vuex';
import { request } from '../api/fetch'
import { newrequest } from '../api/fetch.1'
import utils from '../utils/utils'
import createPersistedState from 'vuex-persistedstate'

// var Dec = require('../secret/public.js');//引用封装好的加密解密js
var Dec = require('../aes/AesUtil.js');

Vue.use(vuex);
const state = {
    company_id: "",
    mobile: 0,
    platformsource: 10,
    showing: false,
    customerid: [],
    iv_salt: {},
    levelList: [],
    userInfo: [],
    appSecret: 'adfjjlw',
    bindCard: [],
    register: [],
    binded: [],
    cardinfo: [],
    qrcode: [],
    unbind: [],
    recharge_rule: {},
    custom_rule: {},
    applicablestores: [],
    company: {},
    red_rule: [],
    detail: [],
    stock: [],
    rulelist: [],
    exchange: [],
    coupon_detail: [],
    recharge: [],
    openid: "",
    customer_id: '',
    user_id: "wx955e7fafd658e54e",
    ai: "wx955e7fafd658e54e",
    isPay: false,
    secret: "bbae4ad27d87e7c322e038b5b69753bd",
    access_token: "",
    ktvList: [],
    region_code: "110100",
    AK: "CUZBZ-55ZWP-ZXMD3-VJAF7-I7PS2-I7F4Y",
    login_type: 1,
    sessionKey: "",
    scene: "",
    Ddata: {}
}
const mutations = {
    setShowing(state, data) {
        state.showing = data;
    },
    setIv_salt(state, data) {
        state.iv_salt = data;
    },
    setIv_salt1(state, data) {
        state.iv_salt1 = data;
    },
    setLevelList(state, data) {
        state.levelList = data;
    },
    setUserInfo(state, data) {
        state.userInfo = data;
    },
    setBindCard(state, data) {
        state.bindCard = data;
    },
    setCustomerid(state, data) {
        state.customerid = data.data;
    },
    setCustomer_id(state, data) {
        state.customer_id = data;
    },
    setRegister(state, data) {
        state.register = data;
    },
    setBinded(state, data) {
        state.binded = data.data;
    },
    setCardInfo(state, data) {
        state.cardinfo = data;
    },
    setQrcode(state, data) {
        state.qrcode = data.data;
    },
    setUnbind(state, data) {
        state.unbind = data.data;
    },
    setRechargeRule(state, data) {
        state.recharge_rule = data;
    },
    setCustom_rule(state, data) {
        state.custom_rule = data;
    },
    setApplicablestores(state, data) {
        state.applicablestores = data;
    },
    setCompany(state, data) {
        state.company = data;
    },
    setRedrule(state, data) {
        state.red_rule = data;
    },
    setDetail(state, data) {
        state.detail = data;
    },
    setStock(state, data) {
        state.stock = data;
    },
    setRulelist(state, data) {
        state.rulelist = data;
    },
    setExchange(state, data) {
        state.exchange = data;
    },
    setCouponDetail(state, data) {
        state.coupon_detail = data;
    },
    setRecharge(state, data) {
        state.recharge = data;
    },
    setOpenid(state, data) {
        state.openid = data.op
    },
    setKtvList(state, data) {
        state.ktvList = data
    },
    setUpdate(state, data) {
    },
    setOpenid_SK(state, data) {
        state.openid = data.openid
        state.sessionKey = data.session_key
    },
    setVerifyCode(state, data) {

    },
    setDdata(state, data) {
        state.Ddate = JSON.parse(data.data)
    }
}
const actions = {
    setUserInfo({ commit }) {
        const res1 = wx.request({
            method: 'post',
            url: utils.API + '/member/api/iv_salt',
            data: { "user_id": state.user_id },
            header: {
                "content-type": "application/json" // 默认值
            },
            success: function (res1) {
                if (!res1.data.ret) {
                    commit('setIv_salt', res1.data.data);
                    wx.login({
                        success: res => {
                            if (res.code) {
                                const result = newrequest({
                                    method: 'post',
                                    url: '/member/api/forward',
                                    data: {
                                        "server": 1,
                                        "user_id": state.user_id,
                                        "url": "/wechatcallbackserver/api/fetch_open_id",
                                        "content": {
                                            ai: state.ai,
                                            co: res.code,
                                        }
                                    },
                                })
                            } else {
                                console.log('登录失败！' + res.errMsg)
                            }
                        }
                    })
                }

            }
        })
    },
    setUserInfo1({ commit }) {
        const res1 = wx.request({
            method: 'post',
            url: utils.API + '/member/api/iv_salt',
            data: { "user_id": state.user_id },
            header: {
                "content-type": "application/json" // 默认值
            },
            success: function (res1) {
                if (!res1.data.ret) {
                    commit('setIv_salt', res1.data.data);
                    wx.login({
                        success: async res => {
                            if (res.code) {
                                const result = await request({
                                    method: 'post',
                                    url: '/member/api/forward',
                                    data: {
                                        "server": 1,
                                        "user_id": state.user_id,
                                        "url": "/wechatcallbackserver/api/fetch_open_id",
                                        "content": {
                                            ai: state.ai,
                                            co: res.code,
                                        }
                                    },
                                })
                                if (!result.ret) {
                                    // var url = "../index/main";
                                    // wx.reLaunch({ url });
                                    commit("setOpenid_SK", result.data)
                                    console.log("获取openid成功")
                                } else {
                                    var url = "../erroPage/main";
                                    wx.reLaunch({ url });
                                    console.log("获取openid失败")
                                }
                            } else {
                                console.log('登录失败！' + res.errMsg)
                            }
                        }
                    })
                }

            }
        })
    },
    async getForward({ commit }, params) {
        if (params[0].server) {
            var server = 1
        } else {
            server = 0
        }
        //  var content = Dec.Encrypt(this.state.iv_salt.salt, this.state.iv_salt.iv, 100, JSON.stringify(params))
        const res = await request({
            method: 'post',
            url: '/member/api/forward',
            data: {
                "user_id": state.user_id,
                "url": params[0].url,
                "content": params[1],
                "server": server
            },
        })
        commit(params[0].mutations, res);
        return res;
    },
    async member_bind({ commit }, params) {
        const res = await request({
            method: 'post',
            url: '/member/api/forward',
            data: {
                "user_id": state.user_id,
                "url": "/member/customer/member_bind",
                "content": params
            },
        })
        commit("setCustomer_id", res.data.customer_id)
        return res;
    }
}

export default new vuex.Store({
    state,
    mutations,
    actions,
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => wx.getStorageSync(key),
                setItem: (key, value) => wx.setStorageSync(key, value),
                removeItem: key => wx.clearStorage()
            }
        })
    ]
})
