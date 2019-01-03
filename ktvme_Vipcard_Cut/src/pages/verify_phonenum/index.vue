<template>
  <div class="page">
    <div class="msg">
      <img class="logo" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/大手机_03.png" />
      <div class="phone">您的电话号码：{{secretphone}}</div>
      <div class="head">请验证会员卡的手机号，即可完成绑定啦~</div>
    </div>
    <div class="content">
      <div class="item">
        <div class="title">国家/地区：</div>
        <picker @change="bindPickerChange" :value="index" range-key="content" :range="areagroup">
          <div class="select">
            <div>{{areagroup[index].content}}</div>
            <img class="fold" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/unfold.png"/>
          </div>
        </picker>
      </div>
      <div v-if="identifyCode" class="line"></div>
      <div v-if="identifyCode" class="item">
        <input maxlength="6" v-model="img_code" placeholder="请输入图形验证码" class="input"/>
        <div class="code">
        <canvas :style="{'width':width+'px','height':height+'px','position':'absolute','top':'-9999px'}" canvas-id="verify_code"></canvas>
        <img :style="{'width':width+'px','height':height+'px'}" :src="verifyPic" />
        </div>
      </div>
      <div class="line"></div>
      <div class="item">
        <input type="number" maxlength="6" v-model="verification_code" placeholder="请输入验证码" class="input"/>
        <div class="code-btn" @click="getCode" v-if="show">获取验证码</div>
        <div class="code-btn" style="background:white" v-else>{{count}}s重发</div>
      </div>
    </div>
    <div class="no" @click="help">不是您的手机号？</div>
    <button class="btn" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">确定</button>
  </div>
</template>

<script>
import store from "../../store/index";
import { mapActions, mapState } from "vuex";
import SIdentify from "../../components/identify.vue";
var drawVcode = require("../../utils/verify_code.js");
export default {
  data() {
    return {
      verifyPic: "",
      index: 0,
      show: true,
      count: "",
      timer: null,
      phone: "",
      unbind: {},
      secretphone: "",
      cardnum: "",
      verification_code: "",
      identifyCode: "",
      img_code: "",
      areacode: "",
      width: "",
      height: "",
      areagroup: [
        {
          id: 1,
          content: "中国",
          selected: true,
          code: "86"
        },
        {
          id: 2,
          content: "中国香港",
          code: "852"
        },
        {
          id: 3,
          content: "中国澳门",
          code: "853"
        },
        {
          id: 4,
          content: "中国台湾",
          code: "886"
        }
      ]
    };
  },

  computed: {
    ...mapState({
      iv_salt: state => state.iv_salt
    })
  },
  components: {
    SIdentify
  },
  methods: {
    ...mapActions(["getForward"]),
    bindPickerChange(e) {
      this.index = parseInt(e.mp.detail.value);
      this.areacode = this.areagroup[this.index].code;
    },
    bindGetUserInfo(e) {
      console.log(e);
      this.$store.state.userInfo = e.mp.detail.userInfo;
      if (e.mp.detail.rawData) {
        if (!this.verification_code) {
          wx.showToast({
            title: "请输入手机验证码！",
            icon: "none",
            duration: 2000
          });
        } else {
          this.bindcard();
        }
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    },
    help() {
      var that = this;
      wx.showModal({
        title: "温馨提示",
        content:
          "手机号为您申请会员卡时预留的手机号吗，如需更改请移驾或联系KTV.",
        cancelText: "联系KTV",
        confirmText: "我知道了",
        cancelColor: "#FF7300",
        confirmColor: "#000",
        success: function(res) {
          if (res.confirm) {
          } else {
            wx.makePhoneCall({
              phoneNumber: that.unbind.relationphone
            });
          }
        }
      });
    },
    async getCode() {
      if (this.identifyCode && this.img_code == "") {
        wx.showToast({
          title: "请输入图形验证码！",
          icon: "none",
          duration: 1500
        });
      }
      const res = await this.getForward([
        {
          url: "/member/api/random_code",
          mutations: "setVerifyCode"
        },
        {
          ac: this.areacode,
          vc: this.img_code,
          p: this.phone,
          cc: this.$store.state.company_id
        }
      ]);
      if (res.ret == 0) {
        wx.showModal({
          title: "",
          content: "验证码发送成功！",
          showCancel: false
        });
        this.show = false;
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      } else if (res.vc) {
        if (this.identifyCode != "") {
          wx.showToast({
            title: "图形验证码输入有误！",
            icon: "none",
            duration: 1500
          });
        }
        this.identifyCode = res.vc;
        drawVcode.drawPic(
          wx.createCanvasContext("verify_code"),
          this.identifyCode
        );
        setTimeout(() => {
          this.verifyPic = wx.getStorageSync("verifyPic");
        }, 1000);
      } else {
        wx.showToast({
          title: res.msg,
          icon: "none",
          duration: 1500
        });
      }
    },
    stringHandle(mobile) {
      var string1 = mobile.substring(0, 3);
      var string2 = mobile.substring(7, 11);
      this.secretphone = string1 + "****" + string2;
    },
    async bindcard() {
      var store = this.$store.state;

      const res = await this.getForward([
        {
          url: "/member/online/api/member_bind",
          mutations: "setBindCard"
        },
        {
          bindcompanyid: store.company_id,
          bindsource: 1,
          cardnum: this.cardnum,
          customerid: store.customer_id,
          companyid: store.company_id,
          platformsource: store.platformsource,
          openid: store.openid,
          user_source: 1,
          c: this.verification_code
        }
      ]);
      if (res.ret == 0) {
        const res1 = await this.getForward([
          {
            url: "/member/info",
            mutations: "setCardInfo"
          },
          {
            company_id: store.company_id,
            kmid: this.unbind.kmid,
            platformsource: store.platformsource
          }
        ]);
        if (!res1.data.isupdate) {
          setTimeout(() => {
            var url = "../update_information/main?kmid=" + this.unbind.kmid;
            wx.navigateTo({ url });
          }, 1000);
          wx.showToast({
            title: "验证通过！",
            icon: "success",
            duration: 1000
          });
        } else {
          setTimeout(() => {
            var url = "../home/main";
            wx.reLaunch({ url });
          }, 1000);
          wx.showToast({
            title: "绑卡成功！",
            icon: "success",
            duration: 1000
          });
        }
      } else if (res.ret == 116) {
        wx.showToast({
          title: "验证码输入有误，请重新输入！",
          icon: "none",
          duration: 1500
        });
      }
    }
  },
  onLoad(options) {
    var windowWidth = wx.getSystemInfoSync().windowWidth / 750;
    this.width = windowWidth * 750 * 0.25;
    this.height = windowWidth * 750 * 0.1;
    this.show = true;
    this.identifyCode = "";
    this.img_code = "";
    this.verification_code = "";
    if (options.index) {
      var unbind = this.$store.state.unbind[options.index];
      this.unbind = unbind;
      this.phone = unbind.mobile;
      this.cardnum = unbind.cardnum;
    } else {
      var unbind = this.$store.state.unbind[0];
      this.unbind = unbind;
      this.phone = unbind.mobile;
      this.cardnum = unbind.cardnum;
    }
    this.stringHandle(this.phone);
  }
};
</script>

<style lang="stylus">
.page {
  width: 100vw;
  height: 100vh;
}

.msg {
  width: 100vw;
  height: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  padding-top: 4vw;
  padding-bottom: 2vw;
}

.msg .logo {
  height: 230rpx;
  width: 150rpx;
}

.msg .head {
  padding: 1vw 5vw 0 5vw;
  font-size: 32rpx;
  color: gray;
}

.msg .phone {
  margin-top: 5vw;
  padding: 20rpx 8vw 0rpx 8vw;
  font-size: 38rpx;
}

.content {
  background: white;
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin-left: 7vw;
  font-size: 36rpx;
  border: 1px solid gray;
  padding-left: 3vw;
  padding-right: 1vw;
}

.content .item {
  /* background: green; */
  display: flex;
  flex-direction: row;
  height: 90rpx;
  align-items: center; /* 垂直居中 */
}

.content .item .title {
  width: 50vw;
  display: flex;
  justify-content: left; /* 水平居中 */
}

.content .item input {
  width: 55vw;
  font-size: 34rpx;
}

.content .item .code-btn {
  height: 9vw;
  width: 25vw;
  font-size: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  color: primary_color;
  border: 1px solid primary_color;
}

.content .line {
  width: 80vw;
  margin-left: -3vw;
  border-bottom: 1px solid bg_color;
}

.btn {
  margin-top: 13vw;
  width: 85vw;
  color: white;
  background: primary_color;
}

.fold {
  margin-top: 5rpx;
  height: 40rpx;
  width: 50rpx;
}

.select {
  background: white;
  display: flex;
  flex-direction: row;
  float: right;
  width: 40vw;
}

.select div {
  color: gray;
  width: 40vw;
  text-align: right;
  font-size: 34rpx;
  padding-right: 2vw;
}

.code {
  width: 25vw;
  display: flex;
  float: right;
  padding-left: 5vw;
  padding-top: 3vw;
}

// .code img {
// width: 28vw;
// height: 10vw;
// }
.no {
  margin-top: 2vw;
  color: primary_color;
  font-size: 30rpx;
  position: absolute;
  left: 7vw;
}
</style>
