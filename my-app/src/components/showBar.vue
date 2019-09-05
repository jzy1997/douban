<template>
  <div class="showbar">
    <div class="showItem" v-for="(v,i) in showarr" :key="i">
      <router-link :to="{name:routeTo,params:{id:i,type:typ}}">
        <!-- <router-link :to="{name:"要去的路由",params:{id:"要传的值"}"> -->
        <img :src="v.img" alt />
        <p>{{v.movieName}}</p>
        <div class="bottom">
          <star-bar :val="v.num"></star-bar>
          <h2>{{v.num}}</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import starBar from "../components/starbar";
export default {
  components:{
    starBar
  },
  props: {
    num: {
      type: Number,
      required: true
    },
    typ: {
      type: String,
      required: true
    }
  },
  computed: {
    routeTo() {
      return this.typ + "Details";
    },
    score() {
      if (this.value > 5) {
        return this.value - 5;
      }else{
        return this.value / 2;
      }
    }
  },
  data() {
    return {
      showarr: [],
      value: 9.1
    };
  },
  created() {
    var urlStr = "/new" + this.typ;
    this.axios({
      url: urlStr,
      method: "get"
    }).then(ok => {
      this.showarr = ok.data.movie[this.num];
    });
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.showbar {
  overflow-x: auto;
  white-space: nowrap;
  font-size: 0px;
  line-height: initial;
}
.showItem {
  display: inline-block;
  margin-right: 0.1rem;
  font-size: 0px;
}
.el-rate__icon {
    font-size: 18px;
    margin-right: 0px;
    color: #C0C4CC;
    -webkit-transition: .3s;
    transition: .3s;
}
.el-rate__item {
    font-size: 0;
    vertical-align: middle;
    margin-top: .02rem;
}
.showItem:last-of-type {
  margin-right: 0px;
}
.showItem img {
  width: 1.1rem;
  height: 1.4rem;
  display: block;
}
.showItem .bottom {
  display: flex;
  line-height: 0.24rem;
  height: 0.24rem;
}
.showItem p {
  font-size: 0.14rem;
  text-align: center;
  line-height: 0.24rem;
  height: 0.24rem;
  color: rgb(46, 43, 43);
}
.showItem .star {
  width: 70%;
}
.showItem h2 {
  font-size: 0.12rem;
  color: #aaa;
  width: 30%;
  text-align: center;
}
</style>