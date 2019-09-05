<template>
  <div class="openApp">
      <img src="../../static/img/promotion_bg.b7abee9.jpg" alt="">
      <span class="info">打开APP，浏览更多</span>
      <button class="downLoad">极速下载</button>
      <button class="open">打开</button>
  </div>
</template>

<script>
export default {


};
</script>

<style scoped>
    .openApp{
        height: .8rem;
        overflow: hidden;
        font-size: 0;
        width: 100%;
        position: relative;
    }
    .openApp img{
        height: 100%;
    }
    .info,.open,.downLoad{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .info{
        color: #42bd56;
        font-size: .13rem;
        left: 8%;
    }
    .open,.downLoad{
        padding: .03rem .14rem;
        font-size: .13rem;
        border-radius: .03rem;
        border: 1px solid #42bd56;
    }
    .downLoad{
        background-color: #42bd56;
        color:#fff;
        left: 50%;

    }
    .open{
        background-color: transparent;
        color:#42bd56;
        right: 8%;
    }

</style>