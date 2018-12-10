<template>
  <div class="page">
    <div class="title">
      <span style="padding-top:0.5vh;font-size:30rpx;">订单查询：</span>
      <picker @change="bindPickerChange" :value="index" range-key="content" :range="monthgroup">
        <div class="select">
          <div style="width:18vw;text-align:center;padding:7rpx;padding-left:15rpx">{{monthgroup[index].content}}</div>
          <img class="fold" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/unfold.png"/>
        </div>
      </picker>
     </div>
     <div class="line"></div>
     <div v-if="exchange==''" class="content">
       <img class="img" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/empty_prompt.png"/>
       <div style="margin-top:2vh;color:gray">您还没有兑换记录~</div>
       <div style="margin-top:2vh">赶紧去兑换吧</div>
     </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      index: 0,
      num: 3,
      kmid: "",
      exchange: [],
      monthgroup: [
        {
          id: 1,
          content: "三个月内",
          selected: true
        },
        {
          id: 2,
          content: "半年内"
        },
        {
          id: 3,
          content: "一年内"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getForward"]),
    async bindPickerChange(e) {
      let state = this.$store.state;
      console.log("picker发送选择改变，携带值为", e.mp.detail.value);
      this.index = parseInt(e.mp.detail.value);
      if (this.index == 0) {
        this.num = 3;
      } else if (this.index == 1) {
        this.num = 6;
      } else {
        this.num = 12;
      }
      const res = await this.getForward([
        {
          url: "/member/integral/exchange/list",
          mutations: "setExchange"
        },
        {
          company_id: state.company_id,
          kmid: this.kmid,
          num: this.num
        }
      ]);
      this.exchange = res.data;
      console.log(res);
    }
  },
  async onLoad(options) {
    this.index = 0;
    let state = this.$store.state;
    this.kmid = options.kmid;
    const res = await this.getForward([
      {
        url: "/member/integral/exchange/list",
        mutations: "setExchange"
      },
      {
        company_id: state.company_id,
        kmid: options.kmid,
        num: 3
      }
    ]);
    this.exchange = res.data;
    console.log(res);
  }
};
</script>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
}
.title {
  height: 5vh;
  padding-top: 2vh;
  margin-left: 3vw;
  font-size: 30rpx;
  display: flex;
  flex-direction: row;
}
.select {
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: row;
  width: 25vw;
  color: gray;
}
.fold {
  position: relative;
  top: 1vh;
  left: -1vw;
  height: 30rpx;
  width: 30rpx;
}
.line {
  border-style: none none solid none;
  border-width: 0.1rpx;
  width: 100%;
  border-color: rgb(196, 193, 193);
  margin-top: 1vh;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  font-size: 34rpx;
}
.img {
  width: 150px;
  height: 150px;
  margin-top: 25vh;
}
</style>
