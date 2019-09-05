<template>
  <div class="group">
    <topnav></topnav>
    <div class="groupWrap">
      <login-first v-show="islogin"></login-first>
      <div class="con">
        <groups groupname="租房找室友"></groups>
        <groups groupname="来聊五块钱"></groups>
        <groups groupname="买买买"></groups>
      </div>
      <pagefoot></pagefoot>
    </div>
  </div>
</template>
<script>
import topnav from "../components/topnav";
import loginFirst from "../components/loginFirst";
import pagefoot from "../components/pagefoot";
import groups from "../components/groups";
// import { getCookie, setCookie } from "../../static/js/cookieTools";
export default {
  components: {
    topnav,
    loginFirst,
    pagefoot,
    groups
  },
  created() {
    // if (getCookie("userInfo")) {
    //   var userInfo = JSON.parse(getCookie("userInfo"));
    //   if (userInfo.token) {
    //     console.log("欢迎" + userInfo.uname);
    //     // this.islogin = false;
    //   }
    // } else {
    //   console.log("未登录");
    // }
    this.$store.dispatch("isloginAction");
  },
  computed:{
    islogin(){
      return !this.$store.state.islogin;
    }
  }
};
</script>
<style scoped>
.group {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.groupWrap {
  width: 100%;
  flex: 1;
  overflow-y: auto;
}
</style>