<template>
  <div class="page">
    <div class="warn">
      <img class="smile" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/笑脸.png"/>
      <div class="content">付款可能存在延时，请勿重复支付噢！</div>
    </div>
    <div class="detail">
      <div class="style">
        <div class="title">商品名称</div>
        <div class="name">会员充值</div>
      </div>
      <div class="line"></div>
      <div class="style">
        <div class="title">支付金额</div>
        <div class="name">￥{{money}}</div>
      </div>
    </div>
    <div class="choose">
      <div class="biaoti">请选择付款方式</div>
      <div class="line"></div>
      <radio-group @change="radioChange">
        <div class="radio">
          <img class="radio-img" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/微信.png"/>
          <div class="radio-font">
            <div style="font-size:36rpx;">微信支付</div>
            <div style="font-size:28rpx;color:gray;padding-top:10rpx;">推荐微信用户使用</div>
          </div>
          <radio style="padding-left:18vw;" checked></radio>
        </div>
      </radio-group>
    </div>
    <button class="btn">确认充值</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      pay_type: "",
      money: ""
    };
  },
  methods: {
    ...mapActions(["getForward"])
  },
  radioChange(e) {
    this.pay_type = e.mp.detail.value;
    // console.log("radio 携带的值为：" + e.mp.detail.value);
  },
  onLoad(options) {
    console.log(options);
    if (options.ind == undefined) {
      this.money = options.money;
    } else {
      var index = parseInt(options.ind);
      this.money = this.$store.state.recharge_rule.data[index].cashchangemoney;
    }
  },
  // onShow() {
  //   this.$store.state.isPay = true;
  // }
  // onUnload(){
  //   wx.showModal({
  //       title: "提示",
  //       content: "您还未完成支付！确定离开？",
  //       cancelText: "继续支付",
  //       confirmText: "去意已决",
  //       success: function(res) {
  //          if (res.confirm) {
  //           console.log("用户点击确定");
  //          }else if (res.cancel) {
  //           console.log("用户点击取消");
  //         }
  //       }
  //   })
  // }
};
</script>

<style>
.page {
  background: #f5f5f5;
  width: 100%;
  height: 100vh;
}
.warn {
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  background: rgb(250, 250, 160);
}
.smile {
  margin-left: 10vw;
  width: 3vh;
  height: 3vh;
  margin-top: 1vh;
}
.content {
  margin-left: 3vw;
  line-height: 5vh;
  font-size: 30rpx;
  color: rgb(243, 134, 9);
}
.detail {
  background: #fff;
  width: 100%;
  height: 16vh;
}
.style {
  height: 50%;
  display: flex;
  flex-direction: row;
  font-size: 38rpx;
}
.line {
  border-bottom-style: solid;
  border-width: 1rpx;
  width: 95%;
  margin-left: 5%;
  border-bottom-color: #d3d0d0;
}
.title {
  width: 50%;
  height: 8vh;
  line-height: 8vh;
  margin-left: 7vw;
}
.name {
  line-height: 8vh;
  height: 8vh;
  width: 35%;
  text-align: right;
}
.biaoti {
  font-size: 32rpx;
  padding: 20rpx 0 20rpx 5vw;
}
.choose {
  background: #fff;
  width: 100%;
  margin-top: 5vh;
}
.radio {
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* display: table-cell;
  vertical-align: middle;
  text-align: center; */
}
.radio-img {
  width: 15vw;
  height: 15vw;
  padding-left: 7vw;
}
.radio-font {
  width: 40vw;
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
}
.btn {
  background: #318bf1;
  color: white;
  width: 70%;
  margin-top: 5vh;
}
</style>
