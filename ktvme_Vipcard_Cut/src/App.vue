<script>
import store from "./store/index";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      iv_salt: [],
      novelList: [],
      userInfo: [],
      access_token: ""
    };
  },
  computed: {
    ...mapState({
      iv_salt: state => state.iv_salt,
      userInfo: state => state.userInfo
    })
  },

  methods: {
    ...mapActions([
      "getIv_salt",
      "getForward",
      "setUserInfo",
      "member_bind",
      "setUserInfo1"
    ]),
    getSetting() {
      wx.getSetting({
        success: function(res) {
          if (res.authSetting["scope.userInfo"]) {
            wx.getUserInfo({
              success: function(res) {
                // console.log(res);
                //用户已经授权过
                // var url = "../home/main";
                // wx.reLaunch({ url });
                console.log("用户已经授权过");
              }
            });
          } else {
            // var url = "../type/main";
            // wx.reLaunch({ url });
            console.log("用户还未授权过");
          }
        }
      });
    },
    getAccessToken() {
      var _this = this;
      wx.request({
        url: "https://api.weixin.qq.com/cgi-bin/token",
        data: {
          grant_type: "client_credential",
          appid: this.$store.state.user_id,
          secret: this.$store.state.secret
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        success: function(res) {
          _this.$store.state.access_token = res.data.access_token;
        }
      });
    },
    getQrcode() {
      var _this = this;
      wx.request({
        url:
          "https://api.weixin.qq.com/wxa/getwxacode?access_token=" +
          _this.$store.state.access_token,
        data: {
          path: "pages/home/index"
        },
        header: {
          "content-type": "image/jpeg" // 默认值
        },
        method: "POST",
        success: function(res) {
          console.log(res);
        }
      });
    },
    getiv_salt() {
      wx.request({
        method: "get",
        url: "http://localhost:8080/hello",
        data: {},
        header: {
          "content-type": "application/json" // 默认值
        },
        success: function(res) {
          console.log(res);
        }
      });
    }
  },
  onLaunch(options) {
    console.log("onLaunch场景值：" + options.scene);
    console.log("onLaunch路径：" + options.path);
    console.log(options.query);
  },
  onShow(options) {
    console.log("onShow场景值：" + options.scene);
    console.log("onShow路径：" + options.path);
    console.log(options.query);
    let store = this.$store.state;
    if (options.query.scene != undefined) {
      var scene = decodeURIComponent(options.query.scene);
    } else {
      scene = 0;
    }
    if (
      options.scene != store.scene ||
      (scene != store.company_id && scene != 0)
    ) {
      store.scene = options.scene;
      if (scene) {
        store.login_type = 2;
        store.company_id = scene;
      } else if (!options.query.kmid) {
        store.login_type = 1;
        store.company_id = -1;
        var url="./pages/logs/main"
        wx.reLaunch({url})
      }
    }
  },
  async created(options) {
    console.log("created");
    let store = this.$store.state;
    if (!store.openid) {
      this.setUserInfo1();
    }
    // 调用API从本地缓存中获取数据
    // this.getAccessToken();
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    console.log("app created and cache logs by setStorageSync");
  }
};
</script>

<style lang="stylus">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
</style>
