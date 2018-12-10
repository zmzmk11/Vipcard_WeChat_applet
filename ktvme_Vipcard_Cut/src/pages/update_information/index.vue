<template>
  <div class="page">
    <div class="head">请确认您的个人信息</div>
    <div style="background:white">
    <div class="display">
     <input style="width:30vw;text-align:center;padding-right:10vw" value="姓名" disabled/>
     <input style="width:60vw;color:gray" maxlength="12" placeholder="请输入姓名" v-model="choose.membername"/>
    </div>
    <span v-show="show" class="warn">{{show}}</span>
    <div class="line"></div>
    <div class="display" >
      <input style="width:30vw;text-align:center" value="性别" disabled/>
      <div class="radio">
        <div v-for="(item,index) in gender" :key="item.id" @click="radio(index)">
          <img class="radio-icon" v-if="item.isChecked" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页_选择.png" />
          <img class="radio-icon" v-else src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/商家小程序首页_选择常态.png"/>
          <div style="margin-right:20rpx">{{item.value}}</div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="display">
        <input style="width:30vw;text-align:center" value="生日" disabled/>
        <picker mode="date"  v-bind:value="startDate"
        start="pickerStart" end="2217-09-01" @change="bindDateChange($event)" >
        <div class="dateshow">
          <div style="position: relative;top: 1.9vh;left: 10vw">{{ startDate }}</div>
        </div>
        </picker>
    </div>
    </div>
    <button class="btn" style="" @click="success">确认</button>
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
      startDate: "1990-01-01",
      endDate: "2018-02-21",
      pickerStart: "1990-01-01",
      remsg: {},
      gender: [
        {
          id: 1,
          value: "男",
          isChecked: true
        },
        {
          id: 2,
          value: "女",
          isChecked: false
        }
      ],
      checked1: true,
      checked2: false
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
    // 设置时间
    let today = this.getToday();
  },
  methods: {
    ...mapActions(["getForward"]),
    genderChange(e) {
      this.choose.sex = e.mp.detail.value;
      console.log("radio 携带的值为：" + e.mp.detail.value);
    },
    check(index) {
      // 先取消所有选中项
      this.radios.forEach(item => {
        item.isChecked = false;
      });
      //再设置当前点击项选中
      // 设置值，以供传递
      this.radios[index].isChecked = true;
    },
    radio(index) {
      if (index == 0) {
        this.choose.sex = "男";
        this.gender[index].isChecked = true;
        this.gender[index + 1].isChecked = false;
      } else if (index == 1) {
        this.choose.sex = "女";
        this.gender[index].isChecked = true;
        this.gender[index - 1].isChecked = false;
      }
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
          sex: this.choose.sex,
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
            url: "/member/update",
            mutations: "setUpdate"
          },
          {
            birthday: this.startDate,
            companyid: this.$store.state.company_id,
            create_company_id: this.$store.state.company_id,
            membername: this.choose.membername,
            kmid: this.kmid,
            mobile: this.choose.mobile,
            sex: this.choose.sex
          }
        ]);
        if (res.ret == 0) {
          setTimeout(() => {
            var url = "../home/main";
            wx.reLaunch({ url });
          }, 1000);
          wx.showToast({
            title: "绑卡成功！",
            icon: "success",
            duration: 1500
          });
        } else {
          wx.showToast({
            title: res.msg,
            icon: "none",
            duration: 1500
          });
        }
      }
    }
  },
  async onLoad(options) {
    var store = this.$store.state;
    this.kmid = options.kmid;
    const res = await this.getForward([
      {
        url: "/member/info",
        mutations: "setCardInfo"
      },
      {
        company_id: store.company_id,
        kmid: options.kmid,
        platformsource: store.platformsource
      }
    ]);
    this.choose = res.data;
    this.startDate = res.data.birthday;
    if (res.data.sex == "女") {
      this.gender[1].isChecked = true;
      this.gender[0].isChecked = false;
    } else {
      this.gender[0].isChecked = true;
      this.gender[1].isChecked = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.page {
  background: bg_color;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

.head {
  height: 12vw;
  line-height: 12vw;
  padding-left: 5vw;
  color: gray;
  font-size: 32rpx;
}

.warn {
  font-size: 15px;
  color: red;
  margin-left: 230rpx;
  margin-top: 10rpx;
}

.line {
  border: 1rpx solid bg_color;
  width: 95vw;
  margin-left: 5vw;
}

.display {
  display: flex;
  flex-direction: row;
}

.radio {
  display: flex;
  flex-direction: row;
  height: 8vh;
  background: white;
  width: 60vw;
  padding-left: 12vw;
  color: gray;
}

.radio div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.radio-icon {
  height: 45rpx;
  width: 45rpx;
  padding-right: 20rpx;
}

input {
  background: white;
  height: 8vh;
}

.dateshow {
  color: gray;
  width: 60vw;
  background: white;
  height: 8vh;
}

.btn {
  margin-top: 10vw;
  background: primary_color;
  color: white;
  border-radius: 3px;
  width: 85vw;
}
</style>
