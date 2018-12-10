<template>
  <div class="page" style="">
    <div class="header">
      门店选择
    </div>
    <scroll-view :style="{'height': '93vh','background':'white'}" :scroll-y="true">
  <div v-for="item in ktvList" :key="item" @click="router(item)">
    <div class="items">
    <img class="pic" :src=item.logourl />
    <div class="item">
    <div class="companyname">{{item.companyname}}</div>
    <div class="companyaddress">{{item.companyaddress}}</div>
    </div>
    </div>
  </div>
  </scroll-view>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
var QQMapWX = require("../../../libs/qqmap-wx-jssdk.js");
var qqmapsdk;
export default {
  data() {
    return {
      ktvList: [],
      AK: "",
      region_code: "350200",
      type: ""
    };
  },
  methods: {
    ...mapActions(["getForward"]),
    async setKtvList() {
      const res = await this.getForward([
        {
          url: "/member/company/list/region",
          mutations: "setKtvList"
        },
        {
          region_code: this.region_code
        }
      ]);
      this.ktvList = res.data;
      console.log(res);
    },
    router(item) {
      this.$store.state.company_id = item.companyid;
      if (this.type == 1) {
        var url = "../register/main";
      } else {
        var url = "../bindcard/main";
      }
      wx.navigateTo({ url });
    }
  },

  async onLoad(options) {
    this.type = options.type;
    this.region_code = this.$store.state.region_code;
    this.setKtvList();
    // 实例化API核心类
    var AK = this.$store.state.AK;
    var that = this;
    wx.getLocation({
      success: function(res) {
        qqmapsdk = new QQMapWX({
          key: AK
        });
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function(res) {
            var adcode = res.result.ad_info.adcode.substr(0, 4);
            that.region_code = adcode + "00";
            if (that.region_code != that.$store.state.region_code) {
              wx.showModal({
                title: "提示",
                content: "是否切换到当前城市:" + res.result.ad_info.city,
                success: function(res) {
                  if (res.confirm == true && that.region_code != "110100") {
                    that.setKtvList();
                    that.$store.state.region_code = that.region_code;
                  }
                }
              });
            }
          },
          fail: function(res) {
            console.log(res);
          },
          complete: function(res) {}
        });
      }
    });
  }
};
</script>

<style lang="stylus">
.page {
  background: bg_color;
}
.header {
  height: 7vh;
  background: rgb(255, 115, 0);
  line-height: 7vh;
  color: white;
  text-align: center;
  font-size: 30rpx;
}

.pic {
  height: 85rpx;
  width: 85rpx;
  background: rgb(240, 187, 41);
  border-radius: 20%;
}

/* 去掉滚动条 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

.items {
  display: flex;
  flex-direction: row;
  padding: 20rpx 0rpx 20rpx 0rpx;
  align-items: center;
  width: 90vw;
  margin-left: 5vw;
  border-bottom: 1rpx solid rgb(202, 200, 200);
}

.item {
  display: flex;
  flex-direction: column;
  padding: 15rpx 15rpx 15rpx 30rpx;
}

.companyname {
  padding: 0 0 10rpx 0;
  font-size: 32rpx;
}

.companyaddress {
  font-size: 26rpx;
  color: gray;
}
</style>
