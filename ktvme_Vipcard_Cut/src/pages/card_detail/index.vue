<template>
  <div class="page">
    <canvas class="qrcode" canvas-id="qrcode"></canvas>
    <canvas class="barcode" canvas-id="barcode"></canvas>
    <div v-if="amplify" class="qr-amplify" @click="am">
      <div style="margin:auto">
        <img style="width:400rpx;height:400rpx" :src="qrcpic" alt>
      </div>
    </div>
    <div v-if="ambar" class="qr-amplify" @click="amBar">
      <div style="margin:auto;transform: rotate(-90deg);text-align:center">
        <img style="width:500rpx;height:120rpx" :src="barcpic" alt>
        <div class="bar-font">{{barcode}}</div>
      </div>
    </div>
    <div v-if="!amplify&&!ambar">
      <div class="card">
        <div class="gradename">{{bindedcard.gradename}}</div>
        <div class="cardnum">NO.{{bindedcard.cardnum}}</div>
        <img
          class="userinfo-avatar"
          v-if="userInfo.avatarUrl"
          :src="userInfo.avatarUrl"
          background-size="cover"
        >
        <div class="membername">{{bindedcard.membername}}</div>
        <div class="companyname">{{bindedcard.companyname}}</div>
        <div class="uselimitdate">有效期至：{{bindedcard.uselimitdate}}</div>
      </div>
      <div class="bar-qr-code" v-if="showcode">
        <div class="barcpic" @click="amBar">
          <img style="width:500rpx;height:120rpx" :src="barcpic" alt>
          <div class="bar-font">{{barcode}}</div>
        </div>
        <div class="qrcpic" @click="am">
          <img style="width:300rpx;height:300rpx" :src="qrcpic" alt>
        </div>
      </div>
      <form style="outline:none" @submit="getFormId" report-submit="true">
        <button class="qr-btn" form-type="submit">
          <img
            class="qr-icon"
            src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/二维码.png"
          >
        </button>
      </form>
      <div class="content">
        <div class="item">
          <span class="item-name">金额</span>
          <span class="item-content">￥{{bindedcard.accountbalance}}</span>
        </div>
        <div class="item">
          <span class="item-name">本金</span>
          <span class="item-content">￥{{bindedcard.accountcash}}</span>
        </div>
        <div class="item">
          <span class="item-name">赠金</span>
          <span class="item-content">￥{{bindedcard.accountpresent}}</span>
        </div>
        <div class="item">
          <span class="item-name">积分</span>
          <span class="item-content">{{bindedcard.integralbalance}}</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="items" @click="update">
        <img
          class="icon"
          src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_04.png"
        >
        <div>个人信息</div>
        <img class="next" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/右.png">
      </div>
      <div class="line"></div>
      <div class="items" @click="toOrder">
        <img
          class="icon"
          src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_05.png"
        >
        <div>订单管理</div>
        <img class="next" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/右.png">
      </div>
      <div class="line"></div>
      <div class="items" @click="toRight">
        <img
          class="icon"
          src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_01.png"
        >
        <div>会员权益</div>
        <img class="next" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/右.png">
      </div>
      <div class="line"></div>
      <div
        class="items"
        v-if="!bindedcard.isunbind"
        @click="unbind(bindedcard.companyid,bindedcard.kmid)"
      >
        <img
          class="icon"
          src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_10.png"
        >
        <div>解绑会员卡</div>
        <img class="next" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/右.png">
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { request } from "../../api/fetch";
var wxcode = require("../../utils/index.js");
import drawQrcode from "weapp-qrcode";
export default {
  data() {
    return {
      binded: {},
      qrcode: "",
      bindedcard: {},
      object: {
        text: "", // 二维码的内容
        width: 300, // 二维码的宽
        height: 300, // 二维码的高
        canvasId: "qrcode" //canvas的ID（唯一标识）
      },
      barcode: "",
      userInfo: {},
      barcpic: "",
      qrcpic: "",
      showcode: "",
      amplify: false,
      ambar: false
    };
  },
  methods: {
    ...mapActions(["getForward", "setUserInfo"]),
    getFormId(e) {
      console.log(e.mp.detail);
      if (!this.showcode) {
        this.getCode(this.object);
        this.barcpic = wx.getStorageSync("barcpic");
      }
      this.showcode = !this.showcode;
    },
    amBar() {
      this.ambar = !this.ambar;
    },
    am() {
      this.amplify = !this.amplify;
    },
    update() {
      var url = "../update/main";
      wx.navigateTo({ url });
    },
    toRight() {
      var url = "../memberright/main?kmid=" + this.bindedcard.kmid;
      wx.navigateTo({ url });
    },
    toOrder() {
      var url = "../order/main?kmid=" + this.bindedcard.kmid;
      wx.navigateTo({ url });
    },
    unbind(companyid, kmid) {
      var that = this;
      const res = wx.showModal({
        title: "温馨提示",
        content: "您确定解绑会员卡？",
        cancelText: "我再想想",
        confirmText: "去意已决",
        confirmColor: "#000",
        cancelColor: "#FF7300",
        success: async function(res) {
          if (res.confirm) {
            const res1 = await request({
              method: "post",
              url: "/member/api/forward",
              data: {
                user_id: that.$store.state.user_id,
                url: "/member/unbind",
                content: {
                  create_company_id: companyid,
                  kmid: kmid
                }
              }
            });
            if (res1.ret == 0) {
              setTimeout(() => {
                var url = "../home/main";
                wx.reLaunch({ url });
              }, 1000);
              wx.showToast({
                title: "解绑成功！",
                icon: "success",
                duration: 1500
              });
            } else {
              wx.showToast({
                title: res1.msg,
                icon: "none",
                duration: 1500
              });
            }
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    getCode(object) {
      let that = this;
      // 调用生成二维码的函数
      var windowWidth = wx.getSystemInfoSync().windowWidth / 750;
      const ctx = wx.createCanvasContext(object.canvasId);
      drawQrcode({
        width: object.width * windowWidth,
        height: object.height * windowWidth,
        canvasId: object.canvasId,
        text: object.text,
        callback: () => {
          wx.canvasToTempFilePath({
            canvasId: object.canvasId,
            quality: 1,
            success: function(res) {
              var tempFilePath = res.tempFilePath;
              that.qrcpic = tempFilePath;
            },
            fail: function(res) {
              console.log(res);
            }
          });
        }
      });
    }
  },
  async onLoad(options) {
    wx.removeStorageSync("barcpic");
    this.amplify = false;
    this.ambar = false;
    this.userInfo = this.$store.state.userInfo;
    this.showcode = false;
    let state = this.$store.state;
    this.binded = state.binded.data;
    const res = await this.getForward([
      {
        url: "/member/info",
        mutations: "setCardInfo"
      },
      {
        company_id: state.company_id,
        kmid: options.kmid,
        platformsource: state.platformsource
      }
    ]);
    this.bindedcard = res.data;
    this.object.text = res.data.cardnum;
    const res2 = await this.getForward([
      {
        url: "/member/online/api/show_qrcode",
        mutations: "setQrcode"
      },
      {
        cci: state.company_id,
        ki: options.kmid
      }
    ]);
    if (res2.ret == 0) {
      this.barcode = res2.barcode;
      this.object.text = res2.qrcode;
      wxcode.barc("barcode", this.barcode, 500, 120);
    } else {
      console.log("二维码条形码获取失败！");
    }
  }
};
</script>

<style lang="stylus" scoped>
.page {
  width: 100vw;
  overflow: hidden;
}

.loading {
  margin-top: -15vw;
  padding-bottm: 5vw;
  z-index: 5;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
}

.qr-amplify {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  background-color: white;
  display: flex;
  justify-content: center;
  align-item: center;
}

.card {
  width: 100vw;
  height: 50vw;
  background-image: url('https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/ecard.png');
  background-size: cover;
  color: white;
}

.qrcode {
  position: absolute;
  top: -9999px;
  width: 300rpx;
  height: 300rpx;
}

.barcode {
  position: absolute;
  top: -9999px;
  width: 500rpx;
  height: 120rpx;
}

.gradename {
  font-style: bold;
  font-size: 40rpx;
  position: absolute;
  top: 5vw;
  left: 5vw;
}

.cardnum {
  font-size: 36rpx;
  position: absolute;
  top: 14vw;
  left: 5vw;
}

.userinfo-avatar {
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  position: absolute;
  top: 5vw;
  right: 5vw;
  z-index: 1;
}

.membername {
  font-size: 28rpx;
  position: absolute;
  top: 21vw;
  right: 7vw;
}

.companyname {
  font-size: 30rpx;
  position: absolute;
  top: 42vw;
  left: 10px;
}

.uselimitdate {
  font-size: 30rpx;
  position: absolute;
  top: 42vw;
  right: 5px;
}

.bar-qr-code {
  width: 100vw;
  height: 85vw;
  background: bg_color;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  // padding-top: 5vw;
  // padding-bottom: 5vw;
  align-items: center;
  justify-content: center;
}

.bar-qr-code .barcpic {
  padding-bottom: 7vw;
}

.bar-qr-code .barcpic .bar-font {
  text-align: center;
  margin-top: 1px;
  font-size: 28rpx;
}

// .bar-qr-code .qrcpic {
// padding-top: 1vh;
// }
.qr-btn {
  background: white;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-top: -5vw;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  outline: none;
}

.qr-btn::after {
  border: none;
}

.qr-icon {
  position: absolute;
  width: 14vw;
  height: 14vw;
  z-index: 1;
}

.content {
  display: flex;
  flex-flow: wrap;
}

.content .item {
  width: 10vw;
  height: 17vw;
  flex: 0 0 22%;
  margin-top: 15px;
  margin-left: calc(((100% - 3 * 30%) / 4));
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.content .item .item-name {
  color: gray;
  font-size: 36rpx;
}

.content .item .item-content {
  color: primary_color;
  font-size: 36rpx;
}

.line {
  width: 100vw;
  border: 0.5px solid bg_color;
}

.items {
  padding-left: 7vw;
  pdding-right: 3vw;
  height: 12vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.items .icon {
  height: 6vw;
  width: 6vw;
}

.items div {
  font-size: 34rpx;
  color: gray;
  margin-left: 2vw;
}

.items .next {
  height: 6vw;
  width: 6vw;
  position: absolute;
  right: 3vw;
}
</style>
