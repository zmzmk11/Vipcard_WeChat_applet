<template>
  <div class="page">
    <div class="title">
      <span style="padding-top:5rpx;font-size:32rpx;">订单查询</span>
    </div>
    <div class="btn-content">
      <div class="item" v-for="(item,index) in search_group" :key="item.id"><div @click="search(index)" class="btn" :class="{'on':item.checked}">{{item.lable}}</div></div>
    </div>
    <scroll-view v-if="detail!=undefined" :style="{'height': '87vh'}" :scroll-y="true">
     <div v-for="items in detail" :key="items.value"  class="content">
       <div style="padding:15rpx 0rpx 10rpx 30rpx;font-size:30rpx;">{{items.title}}</div>
       <div v-for="(item,val) in items.context" @click="show(item.orderno)" :key="val">
        <div class="detail">
         <div style="display:flex;flex-direction:column;width:60vw;">
          <span class="span1">{{item.productname}}</span>
          <div class="span2">{{item.createdatetime}}</div>
         </div>
         <div style="width:25vw;display:flex;flex-direction:row;">
          <span class="span3">￥{{item.cashchangemoney}}</span>
          <img v-if="orderno!=item.orderno" class="fold1" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/fold.png" />
          <img v-else class="fold1" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/unfold.png"/>
         </div>
        </div>
        <div class="line"></div>
        <div class="remark" v-if="orderno==item.orderno">
          <div v-html="item.remark">{{item.remark}}</div>
        </div>
        <div v-show="orderno==item.orderno" class="line"></div>
       </div>
     </div>
    </scroll-view>
    <scroll-view :style="{'height': '85vh'}" v-else>
      <div class="none">
        <div>
          <img class="sigui" src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/empty_prompt.png"/>
          <span>{{search_group[index].lable}}没有订单产生！</span>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      kmid: "",
      orderno: "",
      index: 0,
      detail: [],
      search_group: [
        {
          id: 1,
          lable: "近一个月",
          value: 1,
          checked: true
        },
        {
          id: 2,
          lable: "近三个月",
          value: 3,
          checked: false
        },
        {
          id: 3,
          lable: "近半年",
          value: 6,
          checked: false
        },
        {
          id: 4,
          lable: "近一年",
          value: 12,
          checked: false
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getForward"]),
    show(orderno) {
      if (this.orderno == orderno) {
        this.orderno = "";
      } else {
        this.orderno = orderno;
      }
    },
    async search(index) {
      if (this.index != index) {
        this.search_group[this.index].checked = !this.search_group[this.index]
          .checked;
        this.search_group[index].checked = !this.search_group[index].checked;
        this.index = index;
        let state = this.$store.state;
        const res = await this.getForward([
          {
            url: "/member/consume/detail",
            mutations: "setDetail"
          },
          {
            company_id: state.company_id,
            kmid: this.kmid,
            num: this.search_group[index].value
          }
        ]);
        this.detail = res.data;
      }
    },
    async bindPickerChange(e) {
      let state = this.$store.state;
      console.log("picker发送选择改变，携带值为", e.mp.detail.value);
      this.index = parseInt(e.mp.detail.value);
      const res = await this.getForward([
        {
          url: "/member/consume/detail",
          mutations: "setDetail"
        },
        {
          company_id: state.company_id,
          kmid: this.kmid,
          num: parseInt(e.mp.detail.value) + 1
        }
      ]);
      this.detail = res.data;
    }
  },
  async onLoad(options) {
    this.index = 0;
    this.search_group[0].checked = true;
    for (var i = 1; i < 4; i++) {
      this.search_group[i].checked = false;
    }
    let state = this.$store.state;
    this.kmid = options.kmid;
    const res = await this.getForward([
      {
        url: "/member/consume/detail",
        mutations: "setDetail"
      },
      {
        company_id: state.company_id,
        kmid: options.kmid,
        num: 1
      }
    ]);
    this.detail = res.data;
  }
};
</script>

<style lang="stylus">
.page {
  background: bg_color;
  width: 100vw;
  height: 100vh;
}

.title {
  height: 5vh;
  padding-top: 20rpx;
  margin-left: 3vw;
  font-size: 30rpx;
  display: flex;
  flex-direction: column;
}

.btn-content {
  height: 7vh;
  display: flex;
  flex-flow: wrap;
}

.item {
  width: 14vw;
  flex: 0 0 22%;
  margin-left: 2.5vw;
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.btn {
  background: white;
  text-align: center;
  width: 20vw;
  height: 7vw;
  line-height: 7vw;
  font-size: 30rpx;
  border: 1px solid primary_color;
  color: primary_color;
}

.on {
  background: primary_color;
  color: white;
}

.select {
  background: white;
  display: flex;
  flex-direction: row;
  width: 28vw;
}

.fold {
  position: relative;
  top: 1vh;
  left: -1vw;
  height: 30rpx;
  width: 30rpx;
}

.content {
  /* padding-top: 2vh;
  padding-bottom: 2vh; */
  /* padding-bottom: -2vh; */
  display: flex;
  flex-direction: column;
}

.detail {
  display: flex;
  flex-direction: row;
  width: 100%;
  background: white;
  height: 10vh;
  /* margin-top: 3vh; */
  padding-bottom: 2vh;
  /* height: 10vh; */
}

.span1 {
  font-size: 34rpx;
  margin-left: 5vw;
  margin-top: 2vh;
}

.span2 {
  font-size: 28rpx;
  margin-left: 5vw;
  margin-top: 1vh;
  color: gray;
}

.span3 {
  font-size: 36rpx;
  position: absolute;
  right: 15vw;
  margin-top: 4vh;
}

.fold1 {
  height: 36rpx;
  width: 36rpx;
  position: absolute;
  right: 5vw;
  margin-top: 4.5vh;
}

.remark {
  background: white;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 13vh;
  font-size: 30rpx;
  color: gray;
  padding-top: 2vh;
  padding-left: 60rpx;
}

.remark_font {
  position: relative;
  top: 2vh;
  left: 30rpx;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

.line {
  width: 100vw;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: bg_color;
}

.none {
  display: flex;
  width: 100vw;
  height: 80vh;
}

.none div {
  margin: auto;
  display: flex;
  flex-direction: column;
}

.none div span {
  margin-top: 5vw;
  font-size: 34rpx;
  color: primary_color;
}

.sigui {
  margin-left auto
  height: 45vw;
  width: 45vw;
}

.line1 {
  border-style: none none solid none;
  border-width: 0.1rpx;
  width: 100vw;
  border-color: rgb(196, 193, 193);
  margin-top: 1vh;
}
</style>
