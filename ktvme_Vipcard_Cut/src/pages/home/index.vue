<template>
  <div class="page">
    <div v-if="showId==true" class="dropdown">
      <div class="triangle_border_up">
        <span></span>
      </div>
    </div>
    <div class="header">
      <div class="header-font" @click="hideList()">
        <img
          class="icon-card"
          src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-列表icon_03.png"
        >
        <div style="margin-left:10rpx">会员卡列表</div>
      </div>
      <div class="header-a" v-if="login_type==2" @click="toBind">
        <img
          class="add"
          src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-添加_06.png"
        >
        <div id="a" style="margin-left:6rpx">添加</div>
      </div>
    </div>
    <scroll-view :style="{'height': 'calc(99vh-10vw)','margin-top':'1vh'}" :scroll-y="true">
      <div
        style="padding-top:1vh;padding-bottom:0vh"
        v-for="(item,index) in bindedItems"
        :key="item.kmid"
      >
        <div
          id="card"
          class="card"
          :style="{'background-image':'url('+background_img[index%3]+')'}"
          v-if="item.uselimitdate"
          @click="toVipCard(item.kmid,item.companyid,item.uselimitdate)"
        >
          <div class="flex">
            <div style="padding: 6vw 5rpx 4vw 5rpx;margin-left: 5vw;color:white">{{item.gradename}}</div>
            <!-- <div class="flag" v-if="!item.uselimitdate">待审核</div> -->
          </div>
          <div class="bottom">
            <p class="ktv_name">{{item.companyname}}</p>
            <P class="time" v-if="item.uselimitdate">有效期至：{{item.uselimitdate}}</P>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      iv_salt: state => state.iv_salt
    })
  },
  data() {
    return {
      userInfo: [],
      novelList: [],
      iv_salt: {},
      result: [],
      showId: false,
      bindedItems: [],
      login_type: "",
      background_img: [
        "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-会员蓝_03.png",
        "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-会员红_03.png",
        "https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页-会员黄_03.png"
      ]
    };
  },
  methods: {
    ...mapActions(["getForward", "setUserInfo"]),
    scrolltolower() {},
    scroll(e) {
      console.log(e);
    },
    showList() {
      this.showId = !this.showId;
    },
    hideList() {
      this.showId = false;
    },
    toVipCard(kmid, companyid, limitdate) {
      if (this.showId) {
        this.showId = false;
      } else {
        if (limitdate) {
          this.$store.state.company_id = companyid;
          var url = "../card_detail/main?kmid=" + kmid;
          wx.navigateTo({ url });
        }
      }
    },
    toRegister() {
      let store = this.$store.state;
      if (store.login_type == 2) {
        var url = "../index/main";
        wx.navigateTo({ url });
      } else {
        var url = "../chooseKtv/main?type=1";
        wx.navigateTo({ url });
      }
    },
    toBind() {
      let store = this.$store.state;
      var url = "../index/main";
      wx.navigateTo({ url });
    }
  },
  async onShow() {
    let store = this.$store.state;
    this.login_type = store.login_type;
    if (store.login_type == 1) {
      this.$store.state.company_id = -1;
    }
    const res = await this.getForward([
      {
        url: "/member/list/binded",
        mutations: "setBinded"
      },
      {
        companyid: store.company_id,
        customerid: store.customer_id,
        platformsource: store.platformsource
      }
    ]);
    if (res.data.length == 0 && store.login_type == 2) {
      wx.showModal({
        title: "温馨提示",
        content: "您还没有会员卡，是否立即前往绑卡？",
        cancelText: "我再想想",
        confirmText: "立即前往",
        confirmColor: "#000",
        cancelColor: "#FF7300",
        success: function(res) {
          if (res.confirm) {
            var url = "../index/main";
            wx.navigateTo({ url });
          } else if (res.cancel) {
            console.log("用户拒绝前往");
          }
        }
      });
    }
    this.bindedItems = res.data;
  }
};
</script>

<style lang="stylus" scoped>
.page {
  background: white;
  width: 100vw;
}

.header {
  height: 10vw;
  display: flex;
  flex-direction: row;
  background: white;
  align-items: center;
}

.icon-card {
  height: 5vw;
  width: 6vw;
}

.add {
  height: 3.5vw;
  width: 3.5vw;
}

.header-font {
  padding-left: 4vw;
  width: 70vw;
  font-size: 36rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-a {
  position: absolute;
  display: flex;
  flex-direction: row;
  font-size: 32rpx;
  /* margin-left: 40rpx; */
  color: primary_color;
  font-weight: 600;
  align-items: center;
  right: 30rpx;
}

.card {
  color: black;
  border-radius: 3px;
  height: 40vw;
  width: 85vw;
  margin-left: 7.5vw;
  margin-bottom: 4vw;
  // background-image: url('https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/ecard.png');
  /* background: pink; */
  background-size: cover; /* 平铺 */
  -moz-box-shadow: 2px 2px 5px #333333;
  -webkit-box-shadow: 2px 2px 5px #333333;
  box-shadow: 2px 2px 5px #333333;
}

/* 去掉滚动条 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

.dropdown {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  /* background-color: #fafafa; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: transparent;
}

.dropdown-content {
  width: 28vw;
  height: 14vh;
  border-radius: 10%;
  position: absolute;
  left: 530rpx;
  top: 8vh;
  background-color: white;
  font-size: 4vw;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.line {
  height: 2rpx;
  width: 80%;
  position: absolute;
  left: 10%;
  top: 6.5vh;
  background: rgb(110, 110, 110);
}

.list1 {
  /* margin:30rpx 10rpx 20rpx 10rpx; */
  position: absolute;
  top: 1.5vh;
  left: 4vw;
}

.list2 {
  /* margin:30rpx 10rpx 20rpx 10rpx; */
  position: absolute;
  top: 8.5vh;
  left: 5.5vw;
}

.triangle_border_up {
  width: 0;
  height: 0;
  border-width: 0 2vh 2vh;
  border-style: solid;
  border-color: transparent transparent white; /* 透明 透明  灰 */
  position: absolute;
  left: 620rpx;
  top: 7vh;
}

.kmid {
  margin-left: 5vw;
  height: 8vw;
  font-size: 32rpx;
}

.icon {
  position: relative;
  top: 2.5vh;
  margin-top: -14rpx;
  margin-left: 30rpx;
  width: 28rpx;
  height: 28rpx;
}

.ktv_name {
  padding: 5px 5rpx 5px 25rpx;
}

.time {
  font-size: 30rpx;
  position: absolute;
  right: 0vw;
  padding: 5px 10rpx 5px 5rpx;
}

.card .bottom {
  color: white;
  height: 8vw;
  font-size: 30rpx;
  // background-color: #ffffff;
  // opacity: 0.6;
  width: 100%;
  position: relative;
  top: 19vw;
  display: flex;
  flex-direction: row;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.flag {
  height: 4vh;
  padding-top: 5rpx;
  font-size: 30rpx;
  text-align: center;
  width: 18vw;
  background: #318bf1;
  color: white;
  border-radius: 20px;
  position: absolute;
  display: inline-block;
  right: 6vw;
  margin-top: 2vh;
}

.flex {
  display: flex;
  flex-direction: row;
  height: 12vw;
  font-size: 38rpx;
}
</style>
