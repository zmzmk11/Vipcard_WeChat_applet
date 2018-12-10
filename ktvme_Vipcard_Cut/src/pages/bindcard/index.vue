<template>
<div>
  <div class="input">
    <img style="height:40rpx;width:6vw;margin-left:2vw" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/input.png"/>
    <input style="width:60vw;margin-left:20rpx;font-size:18px;" maxlength=20 type="number" placeholder="请输入实体卡号或手机号" v-model="cardnum"/>
    <img v-show="cardnum" @click="clean" class="clean" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/错误.png"/>
    <div class="fill" @click="fillPhone">填充手机号</div>
  </div>
  <div class="next">
    <button class="btn" style="" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" >下一步</button>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      cardnum: "",
      focus: false
    };
  },
  methods: {
    ...mapActions(["getForward"]),
    bindGetUserInfo(e) {
      console.log(e);
      this.$store.state.userInfo = e.mp.detail.userInfo;
      if (e.mp.detail.rawData) {
        this.next();
        //    var url="../register/main";
        // wx.navigateTo({url})
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    },
    async next() {
      if (this.cardnum == "") {
        wx.showToast({
          title: "请输入卡号！",
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
        var flag = 0;
        var binded = store.binded;
        for (var i = 0; i < res.data.length; i++) {
          for (var j = 0; j < binded.length; j++) {
            if (res.data[i].cardnum == binded[j].cardnum) {
              flag++;
            }
          }
        }
        if (res.data.length - flag != 0) {
          if (res.data.length - flag == 1) {
            var url = "../verify_phonenum/main";
            wx.navigateTo({ url });
          } else {
            var url = "../choose_bindcard/main";
            wx.navigateTo({ url });
          }
        } else {
          wx.showToast({
            title: "抱歉！未查询到注册卡号或手机号！",
            icon: "none",
            duration: 2000
          });
        }
      }
    },
    fillPhone() {
      this.cardnum = this.$store.state.mobile;
    },
    clean() {
      this.cardnum = "";
    }
  },
  onLoad() {
    this.cardnum = "";
  }
};
</script>

<style lang="stylus">
page {
  background: bg_color;
}

.input {
  background: white;
  margin-top: 90rpx;
  height: 100rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.next {
  width: 70%;
  height: 80rpx;
  position: absolute;
  top: 270rpx;
  left: 115rpx;
}

.btn {
  background: primary_color;
  color: white;
  border-radius: 10px;
}

.fill {
  font-size: 28rpx;
  text-decoration: underline;
  color: green;
  position: absolute;
  right: 2vw;
}

.clean {
  width: 35rpx;
  height: 35rpx;
}

.testBtn {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background: primary_color;
}
</style>
