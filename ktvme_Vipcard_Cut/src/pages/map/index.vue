<template>
  <div class="page">
    <map
      class="map"
      :show-location="true"
      :longitude="map.lon"
      :enable-rotate="ture"
      :enable-overlooking="ture"
      :enable-3D="true"
      :latitude="map.lat"
      :markers="markers"
    ></map>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      map: {},
      scope: false,
      markers: [
        {
          iconPath: "",
          id: 0,
          longitude: "",
          latitude: "",
          width: 1,
          height: 1
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getForward"])
  },
  async onLoad(options) {
    wx.getSetting({
      success: response => {
        if (response.authSetting["scope.userLocation"]) {
          this.scope = true;
        }
      }
    });
    const res = await this.getForward([
      {
        url: "/InvokeKm/getKmCompanyByCode",
        mutations: "setCompany"
      },
      {
        companycode: options.companycode,
        companyid: this.$store.state.company_id
      }
    ]);
    this.map = res.result;
    this.markers[0] = {
      longitude: res.result.lon,
      latitude: res.result.lat
    };
  }
};
</script>

<style lang="stylus">
.page {
  widht: 100vw;
}

.map {
  width: 100vw;
  height: 100vh;
}
</style>
