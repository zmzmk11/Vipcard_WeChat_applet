<template>
  <div></div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["getForward", "setUserInfo1"]),
    async getSetting() {
      let store = this.$store.state;
      if (
        store.customer_id != "" &&
        store.company_id != "" &&
        store.company_id != -1
      ) {
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
        if (res.data.length == 0) {
          var url = "../index/main";
          wx.reLaunch({ url });
        } else {
          var url = "../home/main";
          wx.reLaunch({ url });
        }
      } else if (store.customer_id != "") {
        var url = "../home/main";
        wx.reLaunch({ url });
      } else {
        var url = "../index/main";
        wx.reLaunch({ url });
      }
    }
  },
  // mounted() {
  //   wx.setEnableDebug({
  //     enableDebug: true
  //   });
  // },
  async onShow() {
    let store = this.$store.state;
    await this.getSetting();
  }
};
</script>

<style>
</style>
