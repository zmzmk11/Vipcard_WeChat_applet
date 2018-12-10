<template>
  <div>
    <div class="page">
      <div>        
        <span>页面出错啦~</span>
        <img src="https://lg-0rqt3zlw-1258015598.cos.ap-shanghai.myqcloud.com/empty_prompt.png"/>
        <button @click="retry">重试</button>
      </div>    
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["member_bind", "getForward", "setUserInfo"]),
    retry() {
      var store = this.$store.state;
      this.setUserInfo();
    }
  },
};
</script>

<style scoped lang="stylus">
.page {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page div {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.page span {
  font-size: 40rpx;
  font-weight: bold;
  color: primary_color;
  margin-top -10vh
}

.page img {
  margin-left: auto;
  margin-top: 18vw;
  width: 45vw;
  height: 45vw;
}

.page button {
  margin-top: 10vw;
  width: 30vw;
  background: #ffffff;
  color: primary_color;
  border: 1px solid primary_color;
}
</style>
