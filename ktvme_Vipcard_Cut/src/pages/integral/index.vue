<template>
  <div class="page">
    <div class="first">
      <div class="inline">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        <div class="userinfo-nickname">{{cardinfo.data.membername}}</div>
      </div>
      <div class="line"></div>
      <div class="inline" style="height:7vh;">
        <div class="integral">
          <img class="img" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/积分.png"/>
          <div class="font">积分
          <div style="color:rgb(255, 115, 0);margin-left:3vw">{{cardinfo.data.integralbalance}}</div>
          </div>
        </div>
        <div class="cline"></div>
        <div class="integral" @click="toExchange">
          <img class="img" style="margin-left:12vw" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/记录 (1).png"/>
          <div class="font">兑换记录</div>
        </div>
      </div>
    </div>
    <div class="second">
      <div class="title">
        大家都在兑
      </div>
      <div class="line" style="width:100vw;margin-left:0vw;margin-top:1vh"></div>
      <scroll-view  :style="{'height': '70vh'}" :scroll-y="true" >
        <div class="null" v-if="!integral.length">
          <img class="empty" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/empty_prompt.png"/>
          <div class="font_empty">该商家暂无积分兑换规则~</div>
        </div>
        <div class="content" v-else>
          <div v-for="(item,index) in integral" :key="item" class="item">
            <div v-if="item.id" class="coupon" @click="toDetail(item.id)">
              <div class="coupon_name">{{item.change_money+item.present_money}}元会员充值卡</div>
              <div class="coupon_integral">{{item.integral}}<span style="color:gray">积分</span></div>
              <img class="img1" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/优惠券icon.png"/>
            </div>
            <div v-else-if="item.integral_id" class="coupon" @click="toCouponDetail(item.integral_id)">
              <div class="coupon_name">{{item.couponname}}</div>
              <div class="coupon_integral">{{item.integral}}<span style="color:gray">积分</span></div>
              <img class="img2" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/优惠券icon.png"/>
            </div>
            <div class="line" v-if="(index+1)%2==0" style="margin-top:1vh;margin-left:-55vw;width:100vw"></div>
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import store from "../../store/index";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      integral: [],
      kmid: ""
    };
  },

  computed: {
    ...mapState({
      iv_salt: state => state.iv_salt,
      userInfo: state => state.userInfo,
      cardinfo: state => state.cardinfo
    })
  },

  methods: {
    ...mapActions(["getForward"]),
    toExchange() {
      var url = "../conversion_record/main?kmid=" + this.kmid;
      wx.navigateTo({ url });
    },
    toDetail(id) {
      var url = "../coupon_detail/main?id=" + id;
      wx.navigateTo({ url });
    },
    toCouponDetail(couponid) {
      var url = "../coupon_detail/main?couponid=" + couponid;
      wx.navigateTo({ url });
    }
  },
  async onLoad(options) {
    this.kmid = options.kmid;
    const res = await this.getForward([
      {
        url: "/member/integral/exchange/rule/list",
        mutations: "setRulelist"
      },
      {
        create_company_id: this.$store.state.company_id,
        companyid: this.$store.state.company_id,
        kmid: options.kmid,
        pos: 1,
        size: 10
      }
    ]);
    this.integral = res.data;
    console.log(res);

    /*更新积分*/

    let state = this.$store.state;
    const res1 = await this.getForward([
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
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
}
.first {
  background: white;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
}
.inline {
  display: flex;
  flex-direction: row;
  height: 13vh;
}
.userinfo-avatar {
  width: 13vw;
  height: 13vw;
  border-radius: 50%;
  margin-top: 3vh;
  margin-left: 5vw;
}
.userinfo-nickname {
  color: black;
  font-size: 32rpx;
  margin-top: 5.5vh;
  margin-left: 3vw;
}
.line {
  border-style: none none solid none;
  border-width: 1rpx;
  width: 90%;
  margin-left: 5%;
  border-color: #bebbbb;
  margin-top: 2vh;
}
.cline {
  border-style: none solid none none;
  border-width: 2px;
  width: 1rpx;
  height: 7vh;
  border-color: #f5f5f5;
}
.integral {
  width: 50%;
  display: flex;
  flex-direction: row;
}
.font {
  display: flex;
  flex-direction: row;
  margin-left: 2vw;
  margin-top: 1vh;
  font-size: 34rpx;
}
.img {
  height: 40rpx;
  width: 40rpx;
  margin-left: 15vw;
  margin-top: 1.3vh;
}
.second {
  background: white;
  margin-top: 3vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 32rpx;
  margin-top: 2vh;
  margin-left: 5vw;
  color: gray;
}
.coupon {
  display: flex;
  flex-direction: column;
}
.coupon_name {
  font-size: 32rpx;
}
.coupon_integral {
  margin-top: 1vh;
  font-size: 26rpx;
  color: rgb(255, 115, 0);
}
.content {
  display: flex;
  flex-flow: wrap;
}
.item {
  flex: 0 0 45%;
  margin-top: 2vh;
  margin-left: 5vw;
}
.null{
  display: flex;
  flex-direction: column;
}
.empty{
  width: 300rpx;
  height: 300rpx;
  position: relative;
  top:15vh;
  left: 50%;
  margin-left: -150rpx;
}
.font_empty{
  position: relative;
  top:15vh;
  text-align: center;
  font-size: 30rpx;
  margin-top: 30rpx;
  color: gray;
}
.img1 {
  margin-top: 1vh;
  margin-left: 3vw;
  width: 260rpx;
  height: 180rpx;
  -webkit-box-reflect: below -38px -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(white),
      to(transparent)
    );
}
.img2 {
  margin-top: 1vh;
  margin-left: 5vw;
  width: 260rpx;
  height: 180rpx;
  -webkit-box-reflect: below -38px -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(white),
      to(transparent)
    );
}
</style>
