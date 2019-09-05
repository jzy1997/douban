<template>
  <div class="details">
    <topnav></topnav>
    <div class="detCon">
      <openApp></openApp>

      <details-item :typ="type" :id="id"></details-item>

      <details-com
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
      ></details-com>
      <div class="findmore">
        <router-link to="/movie">显示更多评论</router-link>
      </div>
      <p class="askTit">
        关于
        <span>无问西东</span>的问答
      </p>
      <ask></ask>
      <ask></ask>
      <ask></ask>
      <ask></ask>
      <div class="findmore" style="margin-top:.1rem;">
        <router-link to="/movie">显示更多问答</router-link>
      </div>
      <div class="wrap">
        <span class="tit">推荐的豆列</span>
        <router-link to="/index" class="more">更多</router-link>
      </div>
      <find-movie :dat="finddata"></find-movie>
      <pagefoot></pagefoot>
    </div>
  </div>
</template>
<script>
import topnav from "../components/topnav";
import openApp from "../components/openapp";
import detailsCom from "../components/detailsCom";
import findMovie from "../components/findMovie";
import pagefoot from "../components/pagefoot";
import ask from "../components/ask";
import detailsItem from "../components/detailsItem";
export default {
  data() {
    return {
      comarr: [],
      finddata: []
    };
  },
  computed: {
      id(){
          return this.$route.params.id
      },
      type(){
          return this.$route.params.type
      }
  },
  created() {
    console.log(this.$route.params.id);
    console.log(this.$route.params.type);
    this.axios({
      url: "/comments",
      method: "get"
    }).then(ok => {
      this.comarr = ok.data.data;
    });
    this.axios({
      url: "/findMovie",
      method: "get"
    }).then(ok => {
      this.finddata = ok.data.findMovie;
    });
  },
  components: {
    topnav,
    openApp,
    detailsCom,
    findMovie,
    pagefoot,
    ask,
    detailsItem
  }
};
</script>
<style scoped>
.findmore {
  text-align: center;
  font-size: 0px;
}
.findmore a {
  text-decoration: none;
  font-size: 0.14rem;
  color: #42bd56;
}
.askTit {
  margin-top: 0.2rem;
  font-size: 0.13rem;
  color: #aaa;
  padding-left: 0.25rem;
}
.wrap {
  overflow: hidden;
  width: 100%;
  padding: 0 0.2rem;
  box-sizing: border-box;
  min-height: 0.5rem;
  line-height: 0.5rem;
}
.tit {
  float: left;
  font-size: 0.17rem;
}
.more {
  float: right;
  font-size: 0.16rem;
  color: #42bd56;
  text-decoration: none;
}
.detCon {
  width: 100%;
  flex: 1;
  overflow-y: auto;
}
.article-card {
  margin: 0.1rem 0 0.2rem;
  width: 2.75rem;
  border-radius: 0.02rem;
  float: right;
}
.foot {
  margin-top: 0.2rem;
}
.details {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>