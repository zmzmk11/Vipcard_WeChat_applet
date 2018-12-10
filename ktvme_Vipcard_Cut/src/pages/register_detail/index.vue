<template>
  <div>
    <div class="display">
     <input style="width:30vw;text-align:center" value="姓名" disabled/>
     <input style="width:70vw" maxlength="12" placeholder="请输入姓名" v-model="name"/>
    </div>
    <span class="warn">{{show}}</span>
   <div class="display" style="margin-top:2vh">
     <input style="width:30vw;text-align:center" value="性别" disabled/>
     <radio-group v-if="userInfo.gender==2" @change="genderChange">
       <radio class="radio1" value="男">男</radio>
       <radio checked class="radio2" value="女">女</radio>
     </radio-group>
     <radio-group v-else  @change="genderChange">
       <radio checked class="radio1" value="男">男</radio>
       <radio class="radio2" value="女">女</radio>
     </radio-group>
   </div>
   <div class="display">
      <input style="width:30vw;text-align:center" value="手机号" disabled/>
      <input style="width:70vw" v-model="mobile"/>
   </div>
   <div class="display">
      <input style="width:30vw;text-align:center" value="生日" disabled/>
      <picker mode="date"  v-bind:value="startDate"
      start="pickerStart" end="2217-09-01" @change="bindDateChange($event)" >
      <div class="dateshow">
         <div style="position: relative;top: 1.9vh;left: 0rpx;">{{ startDate }}</div>
      </div>
      </picker>
   </div>
   <div class="display">
    <button style="background:#318bf1;color:white;border-radius:10px;width:30vw" @click="success">完成</button>
   </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      kmid: "",
      gender: "",
      show: "",
      gradeid: "",
      levelList: [],
      choose: {},
      userInfo: [],
      startDate: "1990-01-01",
      endDate: "2018-02-21",
      pickerStart: "1990-01-01",
      name: "",
      mobile: "18650461630",
      remsg: {}
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
  mounted() {
    this.mobile = this.$store.state.mobile;
    this.userInfo = this.$store.state.userInfo;
    this.name = this.userInfo.nickName;
    console.log(this.userInfo);
    if (this.userInfo.gender == 2) {
      this.gender = "女";
    } else {
      this.gender = "男";
    }
    // 设置时间
    let today = this.getToday();
    // this.startDate = today;
    // this.endDate = today;
    // this.pickerStart = today;
  },
  methods: {
    ...mapActions(["getForward"]),
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
    async register() {
      const res = await this.getForward([
        {
          url: "/member/register",
          mutations: "setRegister"
        },
        {
          birthday: this.startDate,
          companyid: this.$store.state.company_id,
          customerid: this.$store.state.customerid,
          gradeid: this.choose.gradeid,
          membername: this.name,
          mobile: this.mobile,
          ordertype: 1,
          platformsource: 2,
          rulesid: 0,
          sex: this.gender,
          totalmoney: this.choose.sellmoney
        }
      ]);
      this.remsg = res;

      return res;
    },
    async success() {
      if (this.name == "") {
        wx.showToast({
          title: "请输入姓名！",
          icon: "none",
          duration: 1000
        });
      } else if (this.show) {
        wx.showToast({
          title: "请输入合法姓名！",
          icon: "none",
          duration: 1000
        });
      } else {
        const res = await this.getForward([
          {
            url: "/member/register",
            mutations: "setRegister"
          },
          {
            birthday: this.startDate,
            companyid: this.$store.state.company_id,
            customerid: this.$store.state.customer_id,
            gradeid: this.choose.gradeid,
            membername: this.name,
            mobile: this.mobile,
            ordertype: 1,
            platformsource: 2,
            rulesid: 0,
            sex: this.gender,
            totalmoney: this.choose.sellmoney
          }
        ]);
        // var res = this.register();

        if (res.ret == 50080) {
          setTimeout(() => {
            var url = "../vipcard/main?kmid=" + res.msg;
            wx.reLaunch({ url });
          }, 1000);
          wx.showToast({
            title: "注册成功",
            icon: "success",
            duration: 2000
          });
        } else if (res.ret == 0) {
          setTimeout(() => {
            var url = "../home/main";
            wx.reLaunch({ url });
          }, 1000);
          showToast({
            title: "注册成功",
            icon: "success",
            duration: 1000
          });
        }
        // if (this.remsg.ret==50080) {
        //   setTimeout(() => {
        //     var url = "../vipcard/main?kmid"+kmid;
        //     wx.reLaunch({ url });
        //   }, 1000);
        //   wx.showToast({
        //     title: "注册成功!",
        //     icon: "success",
        //     duration: 1000
        //   });
        // }else{
        //   wx.showToast({
        //     title: this.remsg.msg,
        //     icon: "none",
        //     duration: 1000
        //   });
        // }
      }
    }
  },
  onLoad(options) {
    this.levelList = this.$store.state.levelList.data;
    for (var i = 0; i < this.levelList.length; i++) {
      if (options.gradeid == this.levelList[i].gradeid) {
        this.choose = this.levelList[i];
        break;
      }
    }
    console.log(this.choose);
    //console.log(options.gradeid)
  }
};
</script>

<style>
page {
  background: #f5f5f5;
}
.warn {
  font-size: 15px;
  color: red;
  margin-left: 230rpx;
  margin-top: 10rpx;
}
.display {
  display: flex;
  flex-direction: row;
  margin-top: 6vh;
}
radio-group {
  background: white;
  width: 70vw;
}
input {
  background: white;
  height: 8vh;
}
.radio1 {
  position: relative;
  top: 1.7vh;
  left: 30rpx;
}
.radio2 {
  position: relative;
  top: 1.7vh;
  left: 100rpx;
}
.dateshow {
  width: 70vw;
  background: white;
  height: 8vh;
}
</style>
