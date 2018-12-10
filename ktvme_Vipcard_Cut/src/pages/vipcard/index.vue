<template>
  <div class="page">
    <canvas class="canvas"  style="width: 300rpx; height: 300rpx;" canvas-id="qrcode"></canvas>
    <div class="first">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        <div class="userinfo-nickname">
          <div>{{bindedcard.membername}}</div>
        </div>
        <span class="card-name"> {{bindedcard.gradename}}</span>
        <span class="card-num"> NO.{{bindedcard.cardnum}}</span>
        <!-- :style="{'background-image':'url('+bindedcard.cardpicid+')'}" -->
        <div class="card" >
          <div class="bottom1">
            <img class="icon" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/店铺.png"/>
           <div class="card-ktv">{{bindedcard.companyname}}</div>
           <div class="card-time">有效期至：{{bindedcard.uselimitdate}}</div>
          </div>
        </div>
    </div>
    
        <div v-if="qrcode" class="show-qr"> 
          <div class="barcode">
            <div v-if="!barcpic">
              <canvas style="width: 500rpx; height: 120rpx;bakcground:red" canvas-id="barcode"></canvas>
            </div>
            <div v-else>
              <img :src="barcpic" alt="">  
            </div>
            <div class="bar_font">{{barcode}}</div>
          </div>
          <div class='container'>
            <div @click="show_qr">
            <img :src="picsrc" alt="">
            </div>
          </div>     
        </div>

        <div class="second">
          <form style="outline:none" @submit="getFormId" report-submit="true">
          <button class="img" form-type="submit">
            <img class="qrcode" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/qrcode_icon.png" />
          </button>
          </form>
          <div v-if="!qrcode" class="show" >点击显示二维码</div>
          <div v-else class="show">点击隐藏二维码</div>
          <div class="menu" @click="show1">
            <img class="pic" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/money (1).png"/>
            <span class="menu-font">我的资产</span> 
            <!-- <img v-if="menu.show1" class="fold" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/fold.png"/>
            <img v-else class="fold" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/unfold.png"/> -->
          </div>
          <div class="content" v-if="menu.show1">
            <div class="item">
              <span class="item-name">积分</span>
              <span class="item-content">{{bindedcard.integralbalance}}</span>
              <!-- <button class="item-btn" @click="toIntegral">去兑换</button> -->
            </div>
            <div class="item" v-if="!usestorage">
              <span class="item-name">金额</span>
              <span class="item-content">￥{{bindedcard.accountbalance}}</span>
              <!-- <button class="item-btn" @click="toRecharge">去充值</button> -->
            </div>
            <div class="item" v-if="!usestorage">
              <span class="item-name">本金</span>
              <span class="item-content">￥{{bindedcard.accountcash}}</span>
            </div>
            <div class="item" v-if="!usestorage">
              <span class="item-name">赠金</span>
              <span class="item-content">￥{{bindedcard.accountpresent}}</span>
            </div>
            <!-- <div class="item">
              <span class="item-name">优惠券</span>
              <span class="item-content">{{red_rule.length}}张</span>
              <button class="item-btn">去使用</button>
            </div>
            <div class="item">
              <span class="item-name">存酒</span>
              <span class="item-content">{{stock.length}}瓶</span>
              <button class="item-btn">查看</button>
            </div> -->
          </div>
          <!-- <div class="menu" @click="show2">
            <img class="pic" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/亲淘 (1).png"/>
            <span class="menu-font">在线功能</span>
            <img v-if="menu.show2" class="fold" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/fold.png"/>
            <img v-else class="fold" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/unfold.png"/>
          </div>
          <div class="content" v-if="menu.show2">
            <div class="item">
              <img class="image" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/电脑.png">
              <span style="font-size:30rpx;">在线预订</span>
           </div>
           <div class="item">
              <img class="image" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/商家.png">
              <span style="font-size:30rpx;">在线超市</span>
           </div>
           <div class="item" @click="toOrder">
              <img class="image" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/账单.png">
              <span style="font-size:30rpx;">订单管理</span>
           </div>
          </div> -->
          <div class="menu" @click="show3">
            <img class="pic" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/people3 (1).png"/>
            <span class="menu-font">我的信息</span>
            <!-- <img v-if="menu.show3" class="fold" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/fold.png"/>
            <img v-else class="fold" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/unfold.png"/> -->
          </div>
           <div class="content" v-if="menu.show3">
            <div class="item" @click="update">
              <img class="image" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/用户.png">
              <span style="font-size:30rpx;">个人信息</span>
           </div>
           <div class="item" @click="toOrder">
              <img class="image" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/账单.png">
              <span style="font-size:30rpx;">订单管理</span>
           </div>
           <div class="item" @click="toRight">
              <img class="image" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/皇冠.png">
              <span style="font-size:30rpx;">会员特权</span>
           </div>
           <!-- <div class="item" @click="toAdd">
              <img class="image" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/添加.png">
              <span style="font-size:30rpx;">绑卡建卡</span>
           </div> -->
           <div class="item" v-if="!bindedcard.isunbind" @click="unbind(bindedcard.companyid,bindedcard.kmid)">
              <img class="image" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/停用.png">
              <span style="font-size:30rpx">解绑会员卡</span>
           </div>
          </div>
          <div class="bottom"></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { request } from "../../api/fetch";
import store from "../../store/index";
import card from "@/components/card";
import drawQrcode from "weapp-qrcode";
var wxcode = require("../../utils/index.js");
var wxqrcode = require("../../utils/code.js");
var Dec = require("../../aes/AesUtil.js");
export default {
  config: {
    enablePullDownRefresh: true
  },
  data() {
    return {
      userInfo: {},
      qr: [
        "https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/qr.png"
      ],
      qrcode: false,
      binded: [],
      bindedcard: {},
      stock: [],
      red_rule: [],
      canvasHidden: false,
      barcode: "",
      menu: {
        show1: true,
        show2: true,
        show3: true
      },
      picsrc: "",
      barcpic: "",
      // 画布的宽高要和object里面的宽高保持一致
      object: {
        text: "https://uu.ghaoqi.com/v3/index.html#/cece2-start?id=2", // 二维码的内容
        width: 300, // 二维码的宽
        height: 300, // 二维码的高
        canvasId: "qrcode" //canvas的ID（唯一标识）
      }
    };
  },
  async onPullDownRefresh() {
    // to doing..
    // 停止下拉刷新
    wx.stopPullDownRefresh();
  },
  methods: {
    ...mapActions(["getForward"]),
    // showqr() {
    //   if (!this.qrcode) {
    //     this.getCode(this.object);
    //     this.barcpic = wx.getStorageSync("barcpic");
    //     // console.log(this.picsrc);
    //   }
    //   this.qrcode = !this.qrcode;
    // },
    getFormId(e) {
      console.log(e.mp.detail);
      if (!this.qrcode) {
        this.getCode(this.object);
        this.barcpic = wx.getStorageSync("barcpic");
        // console.log(this.picsrc);
      }
      this.qrcode = !this.qrcode;
    },
    // show1() {
    //   this.menu.show1 = !this.menu.show1;
    // },
    // show2() {
    //   this.menu.show2 = !this.menu.show2;
    // },
    // show3() {
    //   this.menu.show3 = !this.menu.show3;
    // },
    toAdd() {
      var url = "../home/main";
      wx.reLaunch({ url });
    },
    update() {
      // var url = "../update_information/main?kmid=" + this.bindedcard.kmid;
      var url = "../update/main";
      wx.navigateTo({ url });
    },
    toRecharge() {
      var url =
        "../recharge/main?gradeid=" +
        this.bindedcard.gradeid +
        "&kmid=" +
        this.bindedcard.kmid;
      // var url ="../pay/main"
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
    toIntegral() {
      var url = "../integral/main?kmid=" + this.bindedcard.kmid;
      wx.navigateTo({ url });
    },
    show_qr() {
      // console.log(this.picsrc);
      wx.previewImage({
        current: this.picsrc, // 当前显示图片的http链接
        urls: [this.picsrc] // 需要预览的图片http链接列表
      });
    },
    getCode(object) {
      // wxcode.qrc(object.canvasId, object.text, object.height, object.width);
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
              that.picsrc = tempFilePath;
              // console.log(tempFilePath);
            },
            fail: function(res) {
              console.log(res);
            }
          });
        }
      });
      // that.picsrc = wxqrcode.code(object);
      //  console.log("pic:"+that.picsrc)
    },
    unbind(companyid, kmid) {
      var that = this;
      const res = wx.showModal({
        title: "温馨提示",
        content: "您确定解绑会员卡？",
        cancelText: "我再想想",
        confirmText: "去意已决",
        cancelColor: "#FF7300",
        confirmColor: "#000000",
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
    }
  },
  async onLoad(options) {
    this.qrcode = false;
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

    // const res2 = await this.getForward([
    //   {
    //     url: "/member/bind/all_red_envelop_rule",
    //     mutations: "setRedrule"
    //   },
    //   {
    //     company_id: state.company_id
    //   }
    // ]);
    // this.red_rule = res2.data;
  },
  mounted() {
    this.userInfo = this.$store.state.userInfo;
    // 调用应用实例的方法获取全局数据
    //this.getUserInfo();
  }
};
</script>

<style scoped lang="stylus">
.page {
  background: bg_color;
  width: 100vw;
  height: 100%;
}

.first {
  width: 100vw;
  height: 35vh;
  background: bg_color;
}

.userinfo-avatar {
  width: 18vw;
  height: 18vw;
  border-radius: 50%;
  position: absolute;
  top: 2vh;
  left: 41vw;
  z-index: 1;
}

.userinfo-nickname {
  color: black;
  font-size: 30rpx;
  width: 100%;
  text-align: center;
  position: absolute;
  top: calc(18vw + 2vh);
  z-index: 1;
}

.card {
  background-image: url('https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/ecard.png'); // lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/ecard.png);
  // border-top-right-radius: 15px;
  // border-top-left-radius: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 91vw;
  height: 45vw;
  position: absolute;
  padding: 0;
  top: 7vh;
  left: 4.5vw;
  background-size: cover;
  -moz-box-shadow: 2px 2px 5px #333333;
  -webkit-box-shadow: 2px 2px 5px #333333;
  box-shadow: 2px 2px 5px #333333;
  /* background: PeachPuff; */
}

.bottom1 {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 100%;
  height: 6vh;
  background-color: #ffffff;
  opacity: 0.6;
  // filter: alpha(opacity=60);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center; /* 垂直居中 */
  flex-direction: row;
}

.card-name {
  position: absolute;
  top: 10vh;
  left: 9vw;
  z-index: 1;
  font-size: 40rpx;
  display: inline-block;
}

.card-num {
  position: absolute;
  top: 19vh;
  left: 9vw;
  z-index: 1;
  font-size: 30rpx;
}

.icon {
  margin-left: 20rpx;
  width: 28rpx;
  height: 28rpx;
}

.card-ktv {
  font-size: 28rpx;
  margin-left: 5rpx;
  width: 45%;
}

.card-time {
  font-size: 24rpx;
  margin-left: 60rpx;
}

.show-qr {
  width: 95vw;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
  padding-bottom: 5vh;
}

.second {
  width: 91vw;
  margin-left: 4.5vw;
  background: white;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.img {
  background: white;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: -7vw;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  outline: none;
}

.img::after {
  border: none;
}

.qrcode {
  width: 8vw;
  height: 8vw;
  z-index: 1;
}

.show {
  width: 25vw;
  font-size: 24rpx;
  margin-left: auto;
  margin-right: auto;
  // margin-left: 34.5vw;
}

.menu {
  border-color: rgb(167, 163, 163);
  /* margin-top: 30rpx; */
  width: 86vw;
  border-top-style: none;
  border-bottom-style: solid;
  border-bottom-width: 0.5rpx;
  display: flex;
  flex-direction: row;
  margin-left: 20rpx;
  padding-bottom: 10rpx;
}

.menu-font {
  padding-top: 5rpx;
  margin-left: 10rpx;
}

.content {
  display: flex;
  flex-flow: wrap;
}

.item {
  width: 10vw;
  height: 14vh;
  flex: 0 0 22%;
  margin-top: 15px;
  margin-left: calc(((100% - 3 * 30%) / 4));
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.item-name {
  font-size: 35rpx;
  margin-top: 10rpx;
}

.item-content {
  font-size: 35rpx;
  margin-top: 20rpx;
}

.item-btn {
  margin-top: 10rpx;
  width: 15vw;
  font-size: 26rpx;
  height: 4vh;
  border-style: solid;
  border-width: 1rpx;
  border-color: primary_color;
  border-radius: 10px;
  color: primary_color;
  background: white;
  text-align: center;
  padding: 0px;
  vertical-align: middle;
  line-height: 3.5vh;
}

.image {
  padding: 18rpx;
  height: 12vw;
  width: 12vw;
}

.bottom {
  background: white;
  height: 5vh;
  width: 86vw;
}

.fold {
  padding-top: 10rpx;
  margin-left: 55vw;
  width: 60rpx;
  height: 50rpx;
}

.pic {
  padding-top: 8rpx;
  width: 40rpx;
  height: 40rpx;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 30vh;
}

.container img {
  width: 300rpx;
  height: 300rpx;
  /* background-color: #f9f9f9; */
}

.canvas {
  position: absolute;
  top: -9999px;
}

.barcode {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
}

.bar_font {
  margin-top: 5px;
  font-size: 28rpx;
}

.barcode div img {
  /* background: bg_color; */
  width: 250px;
  height: 60px;
}
</style>
