<template>
  <div class="page">
   <div style="background:white">
     <div class="display">
      <div class="title">头像</div>
      <div class="content"><img class="userinfo-avatar" style="margin-top:1.5vw" :src="userInfo.avatarUrl" background-size="cover" /></div>
     </div>
     <div class="line"></div>
     <div class="display">
      <div class="title">姓名</div>
      <div class="content">{{choose.membername}}</div>
     </div>
     <div class="line"></div>
     <div class="display">
      <div class="title">性别</div>
      <div class="content">{{choose.sex}}</div>
     </div>
    <div class="line"></div>
    <div class="display">
      <div class="title">手机号</div>
      <div class="content">{{choose.mobile}}</div>
    </div>
    <div class="line"></div>
    <div class="display">
        <div class="title">生日</div>
        <div class="content">{{choose.birthday}}</div>
    </div>
    </div>
    <div class="note">如需修改资料请前往KTV服务台办理</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      choose: [],
      show: "",
      startDate: "1990-01-01",
      endDate: "2018-02-21",
      pickerStart: "1990-01-01",
      userInfo: []
    };
  },
  watch: {
    name: function() {
      var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
      if (this.name == "") {
        this.show = "";
      } else {
        if (!reg.test(this.name)) {
          this.show = "姓名格式不合法！";
        } else {
          this.show = "";
        }
      }
    }
  },
  methods: {
    ...mapActions(["getForward"]),
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    genderChange(e) {
      this.gender = e.mp.detail.value;
      console.log("radio 携带的值为：" + e.mp.detail.value);
    },
    getToday() {
      let myDate = new Date();
      let myMonth = myDate.getMonth() + 1;
      if (myMonth < 10) {
        myMonth = "0" + myMonth; //补齐
      }
      let mydate = myDate.getDate();
      if (myDate.getDate() < 10) {
        mydate = "0" + myDate.getDate(); //补齐
      }
      let today = myDate.getFullYear() + "-" + myMonth + "-" + mydate;
      return today;
    },
    bindDateChange(e) {
      console.log("picker发送选择改变，携带值为", e.mp.detail.value);
      this.startDate = e.mp.detail.value;
    },
    change() {}
  },

  async mounted() {
    this.userInfo = this.$store.state.userInfo;
    let today = this.getToday();
    this.choose = this.$store.state.cardinfo.data;
    this.startDate = this.choose.birthday;
  },
};
</script>

<style lang="stylus" scoped>
.page {
  background: bg_color;
  padding-top: 2vh;
  width: 100vw;
  height: 98vh;
  overflow-x: hidden;
}

.userinfo-avatar {
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
}

.display {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 12vw;
  padding-left: 5vw;
  padding-right: 5vw;
}

.display .title {
  width: 30vw;
  align-content: center;
}

.display .content {
  width: 70vw;
  text-align: right;
}

.line {
  border: 0.5px solid bg_color;
  width: 95vw;
  margin-left: 5vw;
}

.note {
  margin-top: 5vw;
  width: 100vw;
  text-align: center;
  color: gray;
  font-size: 30rpx;
}
</style>
