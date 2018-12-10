<template>
  <div style="background:#F5F5F5;width:100%;height:100vh">
    <div class="block">
      <div class="span">请选择充值金额</div>
      <div class="line"></div>
      <div class="content">
      <div v-for="(item,index) in rechargeRule" class="item" :class="{'check':ind===index}" @click="checked(index)"  :key="item.cashchangemoney">    
        <span style="font-size:28rpx;padding: 1.0vh 0 0 0;">{{item.cashchangemoney}}元</span>
        <span class="font" :class="{'col':ind===index}">赠送：{{item.presentmoney}}元</span>
      </div>
      <div class="item" :class="{'check':ind===-1}" @click="other" v-if="custom_rule.length">
        <div v-if="ind===-1" class="input">
        <input maxlength="5" v-model="money" type="number" />
        <span>元</span>
        </div>
        <div v-else class="other" >
        <span  >其他金额</span>
        </div>
      </div>
    </div>
    </div>
    <div class="rule" v-if="ind===-1">
      <span style="margin-left:-7vw">充值优惠规则</span>
      <span v-for="item in custom_rule" style="padding-top:1px" :key="item.rulesid">充值：{{item.begin_cashchangemoney}}~{{item.end_cashchangemoney}}元,赠送{{item.presentproportion}}%充值金额</span>
    </div>
    <button class="btn" @click="toPay">确定</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      rechargeRule: {},
      custom_rule: {},
      classa: "item",
      ind: 0,
      show: false,
      money: "",
      present_money: "",
      rulesid: "",
      kmid: ""
    };
  },
  methods: {
    ...mapActions(["getForward"]),
    checked(index) {
      this.ind = index;
      for (var i = 0; i < this.rechargeRule.length; i++) {
        if (this.rechargeRule[i].checked == true) {
          this.rechargeRule[i].checked = false;
          break;
        }
      }
      this.rechargeRule[index].checked = true;
    },
    other() {
      if (this.ind == -1) {
        this.show = true;
      } else {
        this.ind = -1;
      }
    },
    async toPay() {
      if (this.ind == -1) {
        if (this.money == 0 || this.money == "") {
          wx.showToast({
            title: "请输入金额！",
            icon: "none",
            duration: 1000
          });
        } else {
          for (var i = 0; i < this.custom_rule.length; i++) {
            if (
              this.money >= this.custom_rule[i].begin_cashchangemoney &&
              this.money <= this.custom_rule[i].end_cashchangemoney
            ) {
              this.present_money = (
                this.money *
                this.custom_rule[i].presentproportion *
                0.01
              ).toFixed(2);
              this.rulesid = -1;
              break;
            } else if (i == this.custom_rule.length - 1) {
              this.present_money = (
                this.money *
                this.custom_rule[this.custom_rule.length - 1]
                  .presentproportion *
                0.01
              ).toFixed(2);
              this.rulesid = -1;
            }
          }
          var state = this.$store.state;
          const res = await this.getForward([
            {
              url: "/member/recharge",
              mutations: "setRecharge"
            },
            {
              cashchangemoney: this.money,
              companyid: state.company_id,
              create_company_id: state.company_id,
              kmid: this.kmid,
              ordertype: 2,
              platformsource: state.platformsource,
              presentmoney: this.present_money,
              rulesid: this.rulesid
            }
          ]);
          console.log(res);
          if (!res.ret) {
            var url =
              "../pay/main?money=" +
              this.money +
              "&present_money=" +
              this.present_money +
              "&rulesid=" +
              this.rulesid;
            wx.navigateTo({ url });
          } else {
            wx.showToast({
              title: res.msg,
              icon: "none",
              duration: 1000
            });
          }
        }
      } else {
        var state = this.$store.state;
        let data={
          cashchangemoney: this.rechargeRule[this.ind].cashchangemoney,
            companyid: state.company_id,
            create_company_id: state.company_id,
            kmid: this.kmid,
            ordertype: 2,
            platformsource: state.platformsource,
            presentmoney: this.rechargeRule[this.ind].presentmoney,
            rulesid: this.rechargeRule[this.ind].rulesid
        }
        console.log(data)
        const res = await this.getForward([
          {
            url: "/member/recharge",
            mutations: "setRecharge"
          },
          {
            cashchangemoney: this.rechargeRule[this.ind].cashchangemoney,
            companyid: state.company_id,
            create_company_id: state.company_id,
            kmid: this.kmid,
            ordertype: 2,
            platformsource: state.platformsource,
            presentmoney: this.rechargeRule[this.ind].presentmoney,
            rulesid: this.rechargeRule[this.ind].rulesid
          }
        ]);
        console.log(res);
        if (!res.ret) {
          var url = "../pay/main?ind=" + this.ind;
          wx.navigateTo({ url });
        } else {
          wx.showToast({
            title: res.msg,
            icon: "none",
            duration: 1000
          });
        }
      }
    }
  },
  async onLoad(options) {
    this.kmid = options.kmid;
    const res = await this.getForward([
      {
        url: "/member/recharge/rule",
        mutations: "setRechargeRule"
      },
      {
        companyid: this.$store.state.company_id,
        gradeid: options.gradeid
      }
    ]);
    console.log(res);
    for (var i = 0; i < res.data.length; i++) {
      if (i == 0) {
        res.data[i].checked = true;
      } else {
        res.data[i].checked = false;
      }
    }
    this.rechargeRule = res.data;
    if (res.ret == 50008) {
    } else {
      const res1 = await this.getForward([
        {
          url: "/member/recharge/custom_rule",
          mutations: "setCustom_rule"
        },
        {
          companyid: this.$store.state.company_id,
          gradeid: options.gradeid
        }
      ]);
      console.log(res1);
      this.custom_rule = res1.data;
    }
  },
  // onShow(){
  //   let isPay=this.$store.state.isPay;
  //   let state=this.$store.state
  //   if(isPay){
  //      wx.showModal({
  //       title:'还未完成支付，确定返回？',
  //       success: function(res) {
  //           state.isPay = false;
  //           if (res.confirm) {
  //             console.log('用户点击确定')
  //           } else if (res.cancel) {
  //             console.log('用户点击取消')
  //           }
  //         }
  //     })
  //   }
  // }
};
</script>

<style scoped>
page {
  background: #f5f5f5;
}
.block {
  /* margin-top: 10vh; */
  background: white;
  width: 100%;
  padding-bottom: 30px;
}
.span {
  font-size: 40rpx;
  padding: 20rpx;
  margin-top: 3vh;
  margin-left: 35rpx;
}
.line {
  border-style: none none solid none;
  border-width: 1rpx;
  width: 93%;
  margin-left: 7%;
  margin-top: 15rpx;
  border-color: #d3d0d0;
}
.content {
  display: flex;
  flex-flow: wrap;
}
.item {
  border: solid;
  border-radius: 10px;
  border-width: 1px;
  border-color: #685c5c;
  width: 20vw;
  height: 8vh;
  flex: 0 0 25%;
  margin-top: 24px;
  margin-left: 22px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.btn {
  background: #318bf1;
  color: white;
  width: 70%;
  margin-top: 10vh;
}
.check {
  border-color: #318bf1;
  border-width: 1px;
  color: #318bf1;
}
.font {
  font-size: 20rpx;
  color: #685c5c;
  padding: 0.5vh;
}
.other {
  font-size: 26rpx;
  padding: 2.5vh 0 0 0;
  color: #685c5c;
}
.col {
  color: #318bf1;
}
.rule {
  display: flex;
  flex-direction: column;
  color: red;
  padding-top: 2vh;
  padding-left: 10vw;
  font-size: 30rpx;
}
.input {
  padding: 2.5vh 0 0 0;
  width: 18vw;
  font-size: 30rpx;
  color: #318bf1;
  display: flex;
  flex-direction: row;
}
</style>
