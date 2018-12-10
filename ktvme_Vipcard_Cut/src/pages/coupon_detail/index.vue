<template>
  <div>
    <scroll-view :style="{'height': '90vh'}" :scroll-y="true">
      <div class="pic">
        <div style="height:20vh">
          <img class="coupon" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/优惠券icon.png"/>
        </div>
        <div style="height:10vh;background: linear-gradient(#f5f5f5, #868282);">
          <div class="name" v-if="coupon_detail.remarks">{{coupon_detail.change_money+coupon_detail.present_money}}元充值卡</div>
          <div class="name" v-if="coupon_detail.coupon_introduce_html">{{coupon_detail.coupon_long_name}}</div>
        </div>
      </div>
      <div v-if="coupon_detail.remarks">
        <div class="title">商品介绍：</div>
        <div class="content">
        <div v-html="coupon_detail.remarks">
        <div>{{coupon_detail.remarks}}</div>
        </div>
        </div>
      </div>
      <div v-if="coupon_detail.coupon_introduce_html">
        <div class="title">商品介绍：</div>
        <div class="content">
        <div v-html="coupon_detail.coupon_introduce_html">
        <div>{{coupon_detail.coupon_introduce_html}}</div>
        </div>
        </div>
      </div>
      <div v-if="coupon_detail.coupon_date_html">
        <div class="title">有效日期：</div>
        <div class="content">
        <div v-html="coupon_detail.coupon_date_html">
        <div>{{coupon_detail.coupon_date_html}}</div>
        </div>
        </div>
      </div>
      <div v-if="coupon_detail.coupon_time_html">
        <div class="title">可用时段：</div>
        <div class="content">
        <div v-html="coupon_detail.coupon_time_html">
        <div>{{coupon_detail.coupon_time_html}}</div>
        </div>
        </div>
      </div>
      <div v-if="coupon_detail.coupon_company_html">
        <div class="title">适用商家：</div>
        <div class="content">
        <div v-html="coupon_detail.coupon_company_html">
        <div>{{coupon_detail.coupon_company_html}}</div>
        </div>
        </div>
      </div>
      <div v-if="coupon_detail.coupon_unusable_room_type_html">
        <div class="title">超市不可用包厢类型：</div>
        <div class="content">
        <div v-html="coupon_detail.coupon_unusable_room_type_html">
        <div>{{coupon_detail.coupon_unusable_room_type_html}}</div>
        </div>
        </div>
      </div>
      <div v-if="coupon_detail.coupon_memo_html">
        <div class="title">使用须知：</div>
        <div class="content">
        <div v-html="coupon_detail.coupon_memo_html">
        <div>{{coupon_detail.coupon_memo_html}}</div>
        </div>
        </div>
      </div>
    </scroll-view>
    <div class="bottom">
      <div class="part1">
        <span style="font-size:30rpx;color:gray;margin-left:5vw">单价：</span>
        <span style="color:rgb(255, 115, 0);margin-left:2vw">{{coupon_detail.integral}}</span>
        <span style="margin-left:2vw">积分</span>
      </div>
      <button class="btn" @click="toExchange">立即兑换</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      id: "",
      integral: "",
      couponid: "",
      cardinfo: [],
      coupon_detail: {}
    };
  },
  computed: {
    ...mapState({
      cardinfo: state => state.cardinfo
    })
  },
  methods: {
    ...mapActions(["getForward"]),
    toExchange() {
      this.cardinfo = this.$store.state.cardinfo;
      var integralbalance=this.cardinfo.data.integralbalance
      var integral=this.coupon_detail.integral
      wx.showModal({
        title: "",
        content: "是否确认兑换？",
        confirmColor: "rgb(255, 115, 0)",
        success: function(res) {
          if (res.confirm) {
            if (integralbalance < integral) {
              wx.showToast({
                title: "积分余额不足！",
                icon: "none",
                duration: 2000
              });
            }
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    }
  },
  async onLoad(options) {
    this.id = options.id;
    this.couponid = options.couponid;
    if (this.id === undefined) {
      const res = await this.getForward([
        {
          url: "/member/coupon/detail",
          mutations: "setCouponDetail"
        },
        {
          integral_id: this.couponid
        }
      ]);
      console.log(res);
      this.coupon_detail = res.result;
    } else {
      const res = await this.getForward([
        {
          url: "/member/integral/exchange/money/detail",
          mutations: "setCouponDetail"
        },
        {
          id: this.id
        }
      ]);
      console.log(res);
      this.coupon_detail = res.data;
    }
  }
};
</script>

<style lang="stylus">
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.pic {
  background: bg_color;
  height: 30vh;
  display: flex;
  flex-direction: column;
}
.coupon {
  width: 60vw;
  height: 30vh;
  position: absolute;
  top: -3vh;
  left: 20vw;
  -webkit-box-reflect: below -75px -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(white),
      to(transparent)
    );
}
.name {
  position: absolute;
  top: 23vh;
  left: 5vw;
  font-size: 36rpx;
  font-weight: 600;
  color: white;
}
.title {
  margin-top: 3vh;
  margin-left: 5vw;
  font-size: 34rpx;
  color: gray;
}
.content {
  margin-top: 1vh;
  margin-left: 7vw;
  font-size: 30rpx;
}
.bottom {
  background: bg_color;
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  line-height: 7vh;
}
.part1 {
  font-size: 34rpx;
  padding: 1.5vh;
  width: 50vw;
}
.btn {
  background: rgb(255, 115, 0);
  width: 30vw;
  height: 6vh;
  margin-top: 2vh;
  line-height: 6vh;
  color: white;
  font-size: 34rpx;
  text-align: center;
  margin-left: 10vw;
}
</style>
