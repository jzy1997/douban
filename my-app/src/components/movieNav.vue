<template>
  <div>
    <div v-for="(v,i) in moredata" :key="i" class="movieItem">
      <div class="wrap">
        <span class="tit">{{v.tit}}</span>
        <router-link :to="v.url" class="more">更多</router-link>
      </div>
      <div v-show="v.hasitem" class="items">
        <div v-for="(v,i) in v.item" :key="i" style="width:100%;">
          <img :src="v.img" alt />
          <div class="itemRight">
            <div style="overflow:hidden;">
              <h2>{{v.booknam}}</h2>
              <h3>{{v.pirce | money}}</h3>
            </div>
            <p>{{v.info}}</p>
          </div>
        </div>
      </div>
      <show-bar v-show="v.haslist" :num="i" :typ="typ"></show-bar>
    </div>
  </div>
</template>

<script>
import showBar from '../components/showBar'

export default {
  components:{
    showBar
  },
  props: {
    moredata: {
      type: Array,
      required: true
    },
    typ: {
      type: String,
      required: true
    },
  },
  filters: {
    money(val) {
      return "￥" + val;
    }
  }
};
</script>

<style scoped>
.items {
  font-size: 0;
  display: flex;
  margin-bottom: .15rem;
}
.items img {
  float: left;
  width: 1.2rem;
  height: 1.6rem;
  margin-right: 0.15rem;
}
.itemRight {
  overflow: hidden;
}
.items h2 {
  font-size: 0.18rem;
  color: #494949;
  font-weight: 400;
  margin: 0.1rem;
  max-width: 100%;
  float: left;
  line-height: 0.22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.items h3 {
  float: right;
  color: #e76648;
  font-size: 0.16rem;
  line-height: 0.46rem;
  height: 0.46rem;
  margin-right: 0.2rem;
  font-weight: 100;
}
.items p {
  font-size: 0.13rem;
  font-weight: 300;
  line-height: 1.5;
  color: #9b9b9b;
  letter-spacing: 0.02rem;
}
.movieItem {
  min-height: 0.5rem;
  width: 100%;
  overflow: hidden;
  line-height: 0.5rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.movieItem .tit {
  float: left;
  font-size: 0.17rem;
}
.movieItem .more {
  float: right;
  font-size: 0.16rem;
  color: #42bd56;
  text-decoration: none;
}
.wrap {
  overflow: hidden;
}
</style>