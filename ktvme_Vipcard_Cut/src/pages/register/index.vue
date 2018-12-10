<template>
  <div>
    <div style="height:6vh;background:#EAEAEA;">
      <a class="tag">请选择会员卡：</a>
    </div>
    <scroll-view :enable-back-to-top="true" :style="{'height': '86vh'}" :scroll-y="true">
      <radio-group @change="radioChange">
        <div class="card-detail" v-if="item.sellmoney==0&&item.hidesell" v-for="(item,index) in cardItems" :key="index">
          <radio class="radio-type" :value="item.gradeid"  :checked="item.checked">
            <div class="first">
              <div class="small-card" :style="{'background-image':'url('+item.cardpicid+')'}"></div>
              <span class="card_name">{{item.gradename}}</span>
              <div class="cost">
                  <p style="text-align:right" v-if="item.sellmoney==0">免费</p>
                  <p style="text-align:right" v-else>￥{{item.sellmoney}}</p>
              </div>
            </div>
            <div class="dashed"></div>
            <div class="second">
            <div>
              <div class="discount">
                <span class="hui">惠</span>
                <span class="detail" >享受会员优惠<span v-if="!item.useintegral">、可积分</span></span>
              </div>
              <div class="discount" v-if="item.has_red" style="margin-top:15rpx;">
               <span class="flag">￥</span>
               <span class="detail">建卡就送<span style="color:#318bf1">{{item.red_envelop_memo}}</span></span>
              </div>      
            </div> 
            <div class="router" @click="toDetail(item.gradeid)" >详情></div>
            </div>
          </radio>
        </div>
      </radio-group>
    </scroll-view>
    <div class="next">
    <button class="button" @click="next()">下一步</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      gradeid: "",
      cardItems: [],
      unbind: []
    };
  },

  methods: {
    ...mapActions(["getForward"]),
    radioChange(e) {
      this.gradeid = e.mp.detail.value;
      console.log("radio 携带的值为：" + e.mp.detail.value);
      let radioItems = this.cardItems;
      for (let i = 0; i < radioItems.length; ++i) {
        radioItems[i].checked = radioItems[i].gradeid == e.mp.detail.value;
      }
      this.cardItems = radioItems;
    },
    toDetail(gradeid) {
      var url = "../detail/main?gradeid=" + gradeid;
      wx.navigateTo({ url });
    },
    next() {
      var url = "../register_detail/main?gradeid=" + this.gradeid;
      wx.navigateTo({ url });
    }
  },
  async onLoad() {
    //调用请求获取订单列表接口
    let state = this.$store.state;
    const res = await this.getForward([
      {
        url: "/member/list/level",
        mutations: "setLevelList"
      },
      {
        companyid: state.company_id,
        type: 0
      }
    ]);
    console.log("绑卡列表：");
    console.log(res);
    for (var i = 0; i < res.data.length; i++) {
      if (res.data[i].sellmoney == 0) {
        res.data[i].checked = true;
        break;
      }
    }
    this.gradeid = res.data[i].gradeid;
    this.cardItems = res.data;
    const res1 = await this.getForward([
      {
        url: "/member/list/unbind",
        mutations: "setUnbind"
      },
      {
        companyid: state.company_id,
        mobile: state.mobile,
        platformsource: state.platformsource
      }
    ]);
    console.log("未绑卡列表：");
    console.log(res1.data);
    const res2 = await this.getForward([
      {
        url: "/member/bind/all_red_envelop_rule",
        mutations: "setRedrule"
      },
      {
        company_id: state.company_id
      }
    ]);
    console.log("红包规则列表：");
    console.log(res2);
  }
};
</script>

<style>
page {
  background: #eaeaea;
  height: 100vh;
}
.tag {
  font-size: 2.7vh;
  margin-left: 20rpx;
  padding: 15rpx;
}
.card-detail {
  background: white;
  width: 100%;
  margin-bottom: 50rpx;
  padding: 25rpx;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.radio-type {
  width: 100%;
}
.card_name {
  width: 35vw;
  font-size: 16px;
  line-height: 90rpx;
  margin-left: 25rpx;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.small-card {
  width: 120rpx;
  height: 80rpx;
  border-radius: 10px;
  background: #318bf1;
  border: solid;
  border-color: white;
  border-width: 1px;
  background-size: cover;
}
.dashed {
  width: 70vw;
  border-width: 1px;
  border-style: none none dashed none;
  margin-left: 6vw;
  margin-top: 10rpx;
}

.cost {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 18px;
  line-height: 90rpx;
  height: 5vh;
  width: 25vw;
  color: green;
  text-align: right;
}
.span {
  display: block;
  width: 50rpx;
  float: left;
  text-align: right;
}
.next {
  width: 100%;
  height: 8vh;
}
.discount {
  width: 65vw;
  display: flex;
  flex-direction: row;
}
.hui {
  width: 30rpx;
  height: 30rpx;
  background: tomato;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.flag {
  width: 30rpx;
  height: 30rpx;
  background: rgb(247, 41, 4);
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.detail {
  font-size: 14px;
  margin-left: 10rpx;
  margin-top: -3rpx;
}
.router {
  width: 15vw;
  text-align: right;
  font-size: 30rpx;
}
.first {
  display: flex;
  flex-direction: row;
  padding: 15rpx;
  padding-left: 5vw;
}
.second {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20rpx 0rpx 0rpx 30rpx;
}
.button {
  background: #318bf1;
  color: white;
  border-radius: 0;
  height: 8vh;
  align-items: center;
  text-align: center;
  text-justify: auto;
  font-size: 3vh;
}
</style>
