<template>
  <div>
    <top-search-bar></top-search-bar>
    <div class="routeNav">
      <route-item
        v-for="(v,i) in routearr"
        :key="i"
        :tit="v.tit"
        :sectit="v.sectit"
        :titcolor="v.titcolor"
        :rto="v.rto"
      ></route-item>
    </div>
    <div class="nav-item" v-show="islogin">
      <router-link to="/regist">注册账号</router-link>
      <router-link to="/login">登录豆瓣</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/regist">使用桌面版</router-link>
      <router-link to="/login">使用豆瓣APP</router-link>
    </div>
    <div class="nav-item" v-show="!islogin">
      <a @click.prevent="cancel()" style="width:100%;border:0;">注销账号</a>
    </div>
  </div>
</template>

<script>
import topSearchBar from "../components/topSearchBar";
import routeItem from "../components/routeItem";
import { getCookie, setCookie } from "../../static/js/cookieTools";
export default {
  components: {
    topSearchBar,
    routeItem
  },
  computed:{
    islogin(){
      return !this.$store.state.islogin;
    }
  },
  data() {
    return {
      routearr: []
    };
  },
  created() {
    this.axios({
      url: "/route",
      method: "get"
    }).then(ok => {
      this.routearr = ok.data.routes;
    });
    this.$store.dispatch("isloginAction");
  },
  methods:{
    cancel(){
      setCookie("userInfo","",-1);
      this.$store.dispatch("isloginAction");
      alert("注销成功");
      alert(this.$store.state.islogin);

      this.$router.push("/index");
    }
  }
};
</script>

<style scoped>
.routeNav {
  display: flex;
  flex-wrap: wrap;
}
.routeItem {
  width: 33.3%;
  padding: 0.2rem 0;
}
.nav-item {
  display: block;
  width: 100%;
  padding: 0.13rem 0;
  font-size: 0px;
  border-top: 0.01rem solid #f3f3f3;
}
.nav-item:last-of-type {
  border-bottom: 0.01rem solid #f3f3f3;
}
.nav-item a:nth-of-type(1) {
  border-right: 0.01rem solid #f3f3f3;
}
.nav-item a:nth-of-type(3) {
  border-right: 0.01rem solid #f3f3f3;
}
.nav-item a {
  color: #42bd56;
  width: 50%;
  display: inline-block;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 0.15rem;
  text-align: center;
  text-decoration: none;
}
</style>