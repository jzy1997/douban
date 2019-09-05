<template>
  <div class="item">
    <a :href="url">
      <div class="content">
        <img :src="imgUrl" />
        <h3>{{tit}}</h3>
        <h4>{{tit}}</h4>
      </div>
      <div class="all">
        <span class="name">{{nam}}</span>
        <span class="label" v-show="lab">{{lab}}</span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props:{
    imgUrl:{
      type:String,
      default:"https://img1.doubanio.com/pview/event_poster/hlarge/public/2de96f7de8cce08.jpg"
    },
    tit:{
      type:String,
      default:"奇妙的不确定性 Intriguing Uncertainties"
    },
    con:{
      type:String,
      default:"展览“奇妙的不确定性”旨在强调当代艺术中某些特定叙事的重要性"
    },
    nam:{
      type:String,
      default:"展览"
    },
    lab:{
      type:String
    },
    url:{
      type:String,
      default:"https:\/\/www.douban.com\/location\/partner\/event\/31461871\/"
    }
  }
};
</script>
<style scoped>
a{
    text-decoration: none;
}
.content {
  overflow: hidden;
  margin-bottom: 0.12rem;
}
.item {
  position: relative;
  display: block;
  padding: 0.3rem 0.21rem 0.2rem 0;
  margin-left: 0.21rem;
  border-bottom: 1px solid #ccc;
}
img {
  float: right;
  width: 25.6%;
  height: 1.04rem;
  margin-left: 0.3rem;
}
h3 {
  margin-top: 0;
  margin-bottom: 0.07rem;
  line-height: 0.2rem;
  text-align: justify;
  font-size: 0.17rem;
  color: #494949;
  font-weight: 500;
}
h4 {
  line-height: 0.18rem;
  text-align: justify;
  color: #aaa;
  font-size: 0.12rem;
  overflow: hidden;
  font-weight: 100;
}
.all {
  font-size: 0px;
}
.all span {
  font-size: 0.12rem;
  color: #ccc;
}
.label {
  float: right;
}
</style>