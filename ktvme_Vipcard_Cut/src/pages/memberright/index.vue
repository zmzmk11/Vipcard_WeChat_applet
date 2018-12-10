<template>
  <div class="page">

    <div class="block">
      <div class="head">
        <img class="pic" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_01.png"/>
        <span class="font">会员权益</span>
        </div>
      <div class="line"></div>
      <div class="content" v-if="!choose.memberrights">商家还未添加任何会员权益!!!</div>
      <div class="content" v-if="choose.memberrights" v-html="choose.memberrights"><div>{{choose.memberrights}}</div>
      </div>
    </div>
    <div class="block1" v-if="flag">
      <div class="head">
        <img class="pic" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_02.png"/>
        <span class="font">适用门店</span>
        </div>
      <div class="line"></div>
      <div v-for="(items,index) in applicablestores" :key="index">
        <div class="content" v-for="(item,val) in items" :key="val" @click="toMap(item.companycode)">
          <div style="display:flex;flex-direction:column;margin-left:10rpx;width:70vw;color:gray">
            <span>{{item.companyname}}</span>
            <span style="font-size:28rpx">(地址：{{item.companyaddress}})</span>
          </div>       
          </div>
      </div>
    </div>
    <div class="margin"></div>
    <div class="block2">
      <div class="head">
        <img class="pic" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/通用绑卡小程序_08.png"/>
        <span class="font">商家电话</span>   
      </div>
      <div class="line"></div>
      <div class="content" style="flex-direction:row" @click="phoneCall">
        <span class="font">{{choose.relationphone}}</span>  
        </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      choose: {},
      applicablestores: {},
      flag: false
    };
  },
  async onLoad(options) {
    this.flag = false;
    const res = await this.getForward([
      {
        url: "/member/applicablestores",
        mutations: "setApplicablestores"
      },
      {
        company_id: this.$store.state.company_id,
        kmid: options.kmid
      }
    ]);
    this.applicablestores = res.result;
    var items = this.applicablestores;
    for (var index in items) {
      this.flag = true;
      break;
    }
    var cardinfo = this.$store.state.cardinfo.data;
    this.choose = this.$store.state.cardinfo.data;
  },
  methods: {
    ...mapActions(["getForward"]),
    phoneCall() {
      wx.makePhoneCall({
        phoneNumber: this.choose.relationphone
      });
    },
    toMap(companycode) {
      var url = "../map/main?companycode=" + companycode;
      wx.navigateTo({ url });
    }
  }
};
</script>

<style scoped lang="stylus">
.page {
  background: bg_color;
  height: 100vh;
  width 100vw
  padding-top: 20px;
}

.container {
  width: 100%;
  background: bg_color;
  height: 100vh;
}

.block {
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.block1 {
  background: white;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.block2 {
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.city {
  margin-top: 10rpx;
  margin-left: 70rpx;
  font-size: 34rpx;
}

.head {
  font-size: 36rpx;
  padding: 30rpx;
  margin-left: 50rpx;
  display: flex;
  flex-direction: row;
}

.line {
  border-style: none none solid none;
  border-width: 2px;
  width: 90%;
  margin-left: 10%;
  border-color: bg_color;
}

.content {
  display: flex;
  flex-direction: row;
  font-size: 32rpx;
  padding: 30rpx;
  margin-left: 50rpx;
  width: 80%;
  color:gray
}

.pic {
  /* padding: 10rpx 5rpx 0rpx 10rpx; */
  padding-top: 8rpx;
  width: 40rpx;
  height: 40rpx;
}

.font {
  margin-left: 15rpx;
}

.margin {
  height: 20px;
  background: bg_color;
  color:gray
}

.bottom {
  height: 20px;
  background: bg_color;
}
</style>
