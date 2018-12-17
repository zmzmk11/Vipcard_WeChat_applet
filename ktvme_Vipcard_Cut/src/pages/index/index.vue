<template>
  <div>
    <!-- <div class="loading">
      <img style="width:15vw;height:15vw" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/timg.gif" />
    </div>-->
    <div>
      <div v-if="showPopUp||showBind" class="page"></div>
      <div v-if="showPopUp" class="pop-up">
        <div class="font-a">需要您的授权</div>
        <div class="font-b">由于用户注册需要</div>
        <div class="font-b">请在稍后的提示框中点击“确认授权”</div>
        <img src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/手机号授权图.jpg">
        <button class="btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">我知道了</button>
      </div>
      <div v-if="showBind">
        <div class="pop-up-bind">
          <div>实体卡号绑定</div>
          <input maxlength="20" type="number" placeholder="请输入实体卡号" v-model="cardnum">
          <button class="bind-btn" @click="bindCard">绑卡</button>
        </div>
        <img
          class="close"
          @click="showBind=!showBind"
          src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/关闭3.png"
        >
      </div>
      <div class="head">
        <div class="head-title">会员卡包</div>
        <div class="head-content">这里可以管理您的KTV会员卡哦</div>
      </div>
      <div class="items">
        <div class="item">
          <div>
            <img
              src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-会员_03.png"
            >
          </div>
          <div>
            <span class="title">会员卡随身带</span>
            <span class="content">不用再让会员卡抢占钱包的一席之地</span>
          </div>
        </div>
        <div class="item">
          <div>
            <img
              src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-会员_06_03.png"
            >
          </div>
          <div>
            <span class="title">优惠轻松享</span>
            <span class="content">轻松便捷还能享受各种消费满赠</span>
          </div>
        </div>
      </div>
      <button class="btn1" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">
        <img src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_03.png">手机号快捷绑卡
      </button>
      <button class="btn2" @click="byCard">
        <img src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_06.png">实体卡号绑卡
      </button>
    </div>
  </div>
</template>

<script>
import store from "../../store/index";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      showPopUp: false,
      mobile: "",
      customer_id: "",
      cardnum: "",
      unbind: [],
      showBind: false
    };
  },

  computed: {
    ...mapState({
      iv_salt: state => state.iv_salt
    })
  },

  methods: {
    ...mapActions(["getForward", "member_bind"]),
    bindGetUserInfo(e) {
      this.$store.state.userInfo = e.mp.detail.userInfo;
      if (e.mp.detail.rawData) {
        this.next();
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    },
    async next() {
      let store = this.$store.state;
      var that = this;
      const res = await this.getForward([
        {
          url: "/member/list/unbind",
          mutations: "setUnbind"
        },
        {
          companyid: store.company_id,
          mobile: this.mobile,
          platformsource: 0
        }
      ]);
      this.unbind = this.search(res.data);
      this.$store.state.unbind = this.unbind;
      if (this.unbind.length != 0) {
        if (this.unbind.length == 1) {
          const res = await this.getForward([
            {
              url: "/member/bind",
              mutations: "setBindCard"
            },
            {
              bindcompanyid: store.company_id,
              bindsource: 1,
              cardnum: this.unbind[0].cardnum,
              customerid: this.customer_id,
              companyid: store.company_id,
              platformsource: 0,
              openid: store.openid,
              user_source: 1
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
                kmid: this.unbind[0].kmid,
                platformsource: store.platformsource
              }
            ]);
            if (!res1.data.isupdate) {
              setTimeout(() => {
                var url =
                  "../update_information/main?kmid=" + this.unbind[0].kmid;
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
              title: "绑卡失败！",
              icon: "none",
              duration: 1500
            });
          }
        } else {
          var url = "../choose_bindcard/main?flag=1";
          wx.navigateTo({ url });
        }
      } else {
        wx.showToast({
          title: "抱歉！该手机号不存在未绑卡！",
          icon: "none",
          duration: 2000
        });
      }
    },

    /**筛除未绑卡返回数据中已绑卡的部分 */
    search(unbind) {
      let store = this.$store.state;
      var binded = store.binded;
      var x = 0;
      var num = 0;
      var nobind = [];
      for (var i = 0; i < unbind.length; i++) {
        x = i;
        for (var j = 0; j < binded.length; j++) {
          if (unbind[i].cardnum == binded[j].cardnum) {
            x = i + 1;
            break;
          }
        }
        if (x == i) {
          nobind[num++] = unbind[i];
        }
      }
      return nobind;
    },

    async getPhoneNumber(e) {
      if (e.mp.detail.encryptedData) {
        var store = this.$store.state;
        const res = await this.getForward([
          {
            url: "/wechatcallbackserver/api/mini/decrypt",
            mutations: "setDdata",
            server: 1
          },
          {
            ai: store.ai,
            ed: e.mp.detail.encryptedData,
            iv: e.mp.detail.iv,
            sk: store.sessionKey
          }
        ]);
        this.mobile = JSON.parse(res.data).purePhoneNumber;
        this.getCustomerid();
      } else {
        console.log("用户按了拒绝按钮");
      }
    },
    async getCustomerid() {
      var store = this.$store.state;
      this.$store.state.mobile = this.mobile;
      const res = await this.member_bind({
        openid: store.openid,
        mobile: this.mobile,
        type: 2
      });
      if (res.ret == 0) {
        this.customer_id = res.data.customer_id;
        if (store.login_type == 1) {
          wx.showModal({
            title: "温馨提示",
            content: "请通过扫描商家二维码使用该小程序！",
            showCancel: false,
            confirmColor: "#FF7300"
          });
        } else {
          this.showPopUp = false;
        }
      } else {
        wx.showToast({
          title: "customer_id获取失败！",
          icon: "none",
          duration: 1000
        });
      }
    },
    byCard() {
      this.showBind = true;
      this.cardnum = "";
    },
    async bindCard() {
      if (this.cardnum == "") {
        wx.showToast({
          title: "卡号不能为空！",
          icon: "none",
          duration: 1000
        });
      } else {
        let store = this.$store.state;
        const res = await this.getForward([
          {
            url: "/member/list/unbind",
            mutations: "setUnbind"
          },
          {
            companyid: store.company_id,
            mobile: this.cardnum,
            platformsource: 0
          }
        ]);
        this.unbind = this.search(res.data);
        this.$store.state.unbind = this.unbind;
        var flag = 0;
        if (this.unbind.length != 0) {
          if (this.unbind.length == 1) {
            var url = "../verify_phonenum/main";
            wx.navigateTo({ url });
          } else {
            var url = "../choose_bindcard/main?flag=0";
            wx.navigateTo({ url });
          }
        } else {
          wx.showToast({
            title: "抱歉！未查询到输入卡号！",
            icon: "none",
            duration: 2000
          });
        }
      }
    }
  },
  mounted() {
    wx.setEnableDebug({
      enableDebug: true
    });
  },
  async onShow() {
    var store = this.$store.state;
    this.unbind = [];
    this.showBind = false;
    this.mobile = store.mobile;
    this.customer_id = store.customer_id;
    if (this.mobile == "0" || this.customer_id == "") {
      this.showPopUp = true;
    } else {
      this.showPopUp = false;
    }
  }
};
</script>

<style scoped lang="stylus">
page {
  widht: 100vw;
}

.loading {
  margin-top: -20vw;
  padding-bottm: 5vw;
  z-index: 5;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
}

.page {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-content: center;
}

.pop-up {
  border-radius: 5px;
  z-index: 2;
  position: absolute;
  top: 20vw;
  left: 10vw;
  opacity: 1;
  width: 80vw;
  height: 110vw;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.pop-up img {
  width: 60vw;
  height: 60vw;
  margin-left: 10vw;
  margin-top: 3vw;
}

.pop-up .font-a {
  margin-top: 4vw;
  padding-bottom: 2vw;
  font-size: 38rpx;
}

.pop-up .font-b {
  font-size: 32rpx;
  color: gray;
}

.pop-up-bind {
  border-radius: 5px;
  z-index: 2;
  position: absolute;
  top: 40vw;
  left: 10vw;
  opacity: 1;
  width: 80vw;
  height: 80vw;
  background: #ffffff;
  display: flex;
  text-align: center;
  flex-direction: column;
}

.pop-up-bind div {
  padding-top: 15vw;
  color: primary_color;
  font-size: 38rpx;
  font-weight: 600;
}

.pop-up-bind input {
  height: 45px;
  border-radius: 50rpx;
  border: 1px solid primary_color;
  margin-top: 8vw;
  width: 70vw;
  margin-left: 5vw;
  font-size: 36rpx;
}

.close {
  width: 8vw;
  height: 8vw;
  z-index: 2;
  position: absolute;
  top: 135vw;
  left: 47vw;
}

.head {
  margin-top: 5vh;
  text-align: center;
}

.head .head-title {
  color: primary_color;
  font-size: 40rpx;
  font-weight: 600;
}

.head .head-content {
  margin-top: 2px;
  color: gray;
  font-size: 34rpx;
}

.items {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 70vw;
  padding: 5vh 15vw 5vh 15vw;
}

.items .item {
  height: 20vh;
  display: flex;
  flex-direction: row;
  padding: 2vh 0 2vh 0;
}

.items .item div img {
  width: 31vw;
  height: 31vw;
}

.items .item div {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding-left: 3vw;
  width: 35vw;
  height: 35vw;
}

.items .item div .title {
  font-size: 34rpx;
}

.items .item div .content {
  font-size: 28rpx;
  color: gray;
}

button {
  width: 70vw;
  margin-left: 15vw;
  margin-top: 15px;
}

button img {
  width: 5vw;
  height: 5vw;
  padding-right: 7px;
  position: relative;
  top: 5rpx;
}

.btn {
  width: 40vw;
  margin-left: 20vw;
  background: primary_color;
  color: #ffffff;
}

.btn1 {
  background: primary_color;
  color: #ffffff;
}

.btn2 {
  background: #ffffff;
  color: primary_color;
  border: 1px solid primary_color;
}

.bind-btn {
  border-radius: 50rpx;
  width: 70vw;
  height: 45px;
  background: primary_color;
  color: #ffffff;
  margin-left: 5vw;
  margin-top: 5vw;
}
</style>
