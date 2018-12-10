<template>
  <div style="background:#F5F5F5;height:100vh">
    <div class="block">
      <div class="head">
        <img class="pic" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/品牌专享.png"/>
        <span class="font">会员权益</span>
        </div>
      <div class="line"></div>
      <div class="content" v-html="choose.memberrights"><div>{{choose.memberrights}}</div>
      </div>
    </div>
    <div class="block1">
      <div class="head">
        <img class="pic" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/手机.png"/>
        <span class="font">商家电话</span>   
      </div>
      <div class="line"></div>
      <div class="content" @click="phoneCall">
        <img class="pic" style="padding-top: 3rpx;" src="https://lg-2aw9z8qs-1257131072.cos.ap-shanghai.myqcloud.com/telephone.png"/>
        <span class="font">{{choose.relationphone}}</span>  
        </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";
export default {
  data () {
    return {
      choose:{}
    }
  },
  created () {

  },
 
  onLoad(options){
    var levelList = this.$store.state.levelList.data;
    for (var i = 0; i < levelList.length; i++) {
      if (options.gradeid == levelList[i].gradeid) {
        this.choose = levelList[i];
        break;
      }
    }
    console.log(this.choose);
  },
  methods:{
    ...mapActions(["getForward"]),
    phoneCall(){
      wx.makePhoneCall({
        phoneNumber:this.choose.relationphone
      })
    }
  }

}
</script>

<style scoped lang="stylus">
.container{
  width: 100%;
  background: bg_color;
  height: 100vh;
}
.block{
  position: relative;
  background: white;
  width:100%;
  /* margin-top:-100px; */
  top:20px;
  display: flex;
  flex-direction: column;
  /* padding: 30rpx; */
}
.block1{
  position: relative;
  background: white;
  width:100%;
  /* margin-top:-100px; */
  top:30px;
  display: flex;
  flex-direction: column;
  /* padding: 20rpx; */
}
.head{
  font-size: 36rpx;
  padding:30rpx;
  margin-left: 50rpx;
  display: flex;
  flex-direction: row
}
.line{
  border-style: none none solid none;
  border-width: 2px;
  width: 90%;
  margin-left: 10%;
  border-color: #F5F5F5;
}
.content{
  font-size: 32rpx;
  padding:30rpx;
  margin-left: 50rpx;
  width:80%;
  display: flex;
  flex-direction: row
}
.pic{
  /* padding: 10rpx 5rpx 0rpx 10rpx; */
  padding-top: 8rpx;
  width: 40rpx;
  height: 40rpx;
}
.font{
  margin-left: 15rpx;
}
</style>
