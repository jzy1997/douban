<template>
  <div class="status">
    <topnav></topnav>
    <div class="staConWrap">
      <open-app></open-app>
      <login-first v-show="islogin"></login-first>
      <div class="staCon">
        <comments
          v-for="(v,i) in comarr"
          :key="i"
          :img="v.img"
          :uname="v.uname"
          :comtit="v.comtit"
          :time="v.time"
          :detail="v.detail"
          :like="v.like"
          :talk="v.talk"
          :other="v.other"
        ></comments>
      </div>
      <pagefoot></pagefoot>
    </div>
  </div>
</template>
<script>
import topnav from "../components/topnav";
import openApp from "../components/openapp";
import loginFirst from "../components/loginFirst";
import pagefoot from "../components/pagefoot";
import comments from "../components/comments";
export default {
  components: {
    topnav,
    openApp,
    loginFirst,
    pagefoot,
    comments
  },
  created() {
    this.axios({
      url: "/comments",
      method: "get"
    }).then(ok => {
      this.comarr = ok.data.data;
    });
    this.$store.dispatch("isloginAction");
  },
  data() {
    return {
      comarr: []
    };
  },
  computed: {
    islogin() {
      return !this.$store.state.islogin;
    }
  }
};
</script>
<style scoped>
.staCon {
  width: 100%;
  padding: 0 0.21rem;
  box-sizing: border-box;
}
.status {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.staConWrap {
  width: 100%;
  flex: 1;
  overflow-y: auto;
}
</style>