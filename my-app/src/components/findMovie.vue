<template>
  <div class="find">
    <a v-for="(v,i) in dat" :key="i" :href="v.href" :id="v.line?'brr':''" :style="'color:' + v.color">
      {{v.title}}
      
    </a>
  </div>
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
.find {
  overflow-x: auto;
  white-space: nowrap;
  font-size: 0px;
}
.find a {
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0 0.24rem;
  letter-spacing: 0.016rem;
  text-decoration: none;
  margin: 0 0 0.08rem 0.16rem;
  border: 0.01rem solid rgb(255, 172, 45);
  border-radius: 0.04rem;
  overflow: auto;
  text-align: center;
  font-size: 0.14rem;
  display: inline-block;
}
#brr {
  width: 100%;
  display: block;
  height: 0.01rem;
  background-color: transparent;
  border: 0;
  margin: 0;
}
</style>