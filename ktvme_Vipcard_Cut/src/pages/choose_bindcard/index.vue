<template>
  <div class="page">
    <div class="content">
      <div class="head">请选择会员卡进行绑定</div>
      <div class="card" @click="toVerifyPhone(index)" v-for="(item,index) in unbindcard" :key="item.cardnum">
        <div class="gradename">{{item.gradename}}</div>
        <div class="cardnum">No.{{item.cardnum}}</div>
        <div class="companyname">{{item.companyname}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store/index";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      unbindcard: {},
      binded: {},
      flag: ""
    };
  },

  computed: {
    ...mapState({
      iv_salt: state => state.iv_salt
    })
  },

  methods: {
    ...mapActions(["getForward"]),
    async toVerifyPhone(index) {
      var store = this.$store.state;
      if (this.flag == 1) {
        const res = await this.getForward([
          {
            url: "/member/bind",
            mutations: "setBindCard"
          },
          {
            bindcompanyid: store.company_id,
            bindsource: 1,
            cardnum: this.unbindcard[index].cardnum,
            customerid: store.customer_id,
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
              kmid: this.unbindcard[index].kmid,
              platformsource: store.platformsource
            }
          ]);
          if (!res1.data.isupdate) {
            setTimeout(() => {
              var url =
                "../update_information/main?kmid=" +
                this.unbindcard[index].kmid;
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
        var url = "../verify_phonenum/main?index=" + index;
        wx.navigateTo({ url });
      }
    }
  },
  onLoad(options) {
    if (options.flag) {
      this.flag = options.flag;
    }
    this.unbindcard = this.$store.state.unbind;
  }
};
</script>

<style scoped lang="stylus">
.page {
  height: 100vh;
  width: 100vw;
}

.content {
  background: white;
  padding-bottom: 3vh;
}

.head {
  height: 8vw;
  color: gray;
  display: flex;
  align-items: center;
  font-size: 34rpx;
  padding-bottom 2vw
  padding-left: 5vw;
}

.line {
  width: 95vw;
  margin-left: 5vw;
  border-bottom: 1px solid #f4f4f0;
}

.card {
  position: relative;
  padding-top: 4vw;
  width: 85vw;
  color: white;
  border-radius: 5px;
  height: 35vw;
  margin: 0vw 7.5vw 7vw 7.5vw;
  /* background: pink; */
  background-image: url('https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/ecard.png');
  background-size: cover; /* 平铺 */
  -moz-box-shadow: 2px 2px 5px #333333;
  -webkit-box-shadow: 2px 2px 5px #333333;
  box-shadow: 2px 2px 5px #333333;
}

.card .gradename {
  margin-left: 5vw;
  font-size: 40rpx;
}

.card .cardnum {
  margin-top: 1vh;
  margin-left: 5vw;
  font-size: 30rpx;
}

.card .companyname {
  position: absolute;
  bottom: 3px;
  margin-left: 5vw;
  font-size: 24rpx;
}

.card .companyname .icon {
  padding-right: 4rpx;
  margin-bottom: -4rpx;
  width: 24rpx;
  height: 24rpx;
}
</style>
