<template>
  <div class="indexlist">
    <div v-if="indexdata.length<=0" style="text-align:center">
      <img src="../../static/img/loading_green.c0f9be0.gif" alt="">
    </div>
    <div v-else class="item">
      <indexlistitem v-for="(v,i) in indexdata" :key="i" :imgUrl="v.image" :tit="v.title" :lab="v.time_str" :con="v.content" :nam="v.category_name" :url="v.adapt_url"></indexlistitem>
    </div>
  </div>
</template>
<script>
import indexlistitem from "./index-list-item";
export default {
  data(){
    return {
      indexdata:[]
    }
  },
  components: {
    indexlistitem
  },
  created() {
    this.axios({
      url:"/index",
      method:"get",
    }).then((ok)=>{
      this.indexdata = ok.data.shouye;
    })
    
  }
};
</script>
<style scoped>
.indexlist {
  width: 100%;
}
</style>