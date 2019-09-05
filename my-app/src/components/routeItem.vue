<template>
  <div class="routeItem">
    <router-link :to="rto">
      <h3 :style="titcolor">{{tit}}</h3>
      <h4>{{sectit}}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
    props:{
        tit:{
            type:String,
            default:"电影"
        },
        sectit:{
            type:String,
            default:"院线热映"
        },
        titcolor:{
            type:String,
            default:"color:#bfa;",
        },
        rto: {
            type:String,
            default:"/index"
        }
    }
};
</script>

<style scoped>
    .routeItem a{
        text-decoration: none;
        text-align: center;
    }
    .routeItem a h3{
        font-size: .24rem;
        line-height: .28rem;
        font-weight: 400;
    }
    .routeItem a h4{
    color: #999;
    height: .17rem;
    font-size: .12rem;
    letter-spacing: .01rem;
    font-weight: 100;
    }
</style>