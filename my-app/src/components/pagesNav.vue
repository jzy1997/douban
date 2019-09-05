<template>
  <ul>
    <li v-for="(v,i) in dat" :key="i">
      <a :href="v.url">{{v.tit}}</a>
      <span class="arrow"></span>
    </li>
  </ul>
</template>

<script>
export default {
    props:{
        dat:{
            type:Array,
            required:true
        }
    }
};
</script>
<style scoped>
ul {
  width: 100%;
  box-sizing: border-box;
  padding-left: 0.21rem;
  display: flex;
  flex-wrap: wrap;
}
ul li {
  height: 0.5rem;
  line-height: 0.5rem;
  border: 1px solid #eee;
  border-left: 0;
  float: left;
  font-size: 0;
  width: 49.7%;
  overflow: hidden;
  position: relative;
}
ul li > a {
  text-decoration: none;
  font-size: 0.16rem;
  color: #42bd56;
}
ul li:nth-of-type(2n) > a{
    margin-left: .21rem;
}
ul li > span {
  color: #ccc;
  font-weight: 900;
  display: inline-block;
  border-right: 0.01rem solid #ccc;
  border-bottom: 0.01rem solid #ccc;
  width: 0.08rem;
  height: 0.08rem;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: rotate(-45deg) translateY(-49%);
}
</style>