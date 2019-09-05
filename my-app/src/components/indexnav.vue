<template>
    <div class="indexnav">
        <div class="index-nav-item"><router-link to="/status">影院热映</router-link></div>
        <div class="index-nav-item"><router-link to="/movie">欧美新歌榜</router-link></div>
        <div v-show="isLogin" class="index-nav-item"><router-link to="/regist">注册账号</router-link></div>
        <div v-show="isLogin" class="index-nav-item"><router-link to="/login">登录豆瓣</router-link></div>
    </div>
</template>
<script>
export default {
    props:{
        isLogin:{
            type:Boolean,
            default:true
        }
    }
}
</script>
<style scoped>
    .indexnav{
        margin-top: .1rem;
        width: 100%;
        padding: 0 .21rem;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
    }
    .index-nav-item{
        width: 48%;
        text-align: center;
        font-size: 0px;
        background-color: #f6f6f6;
        margin: .03rem;
        line-height: .5rem;
        height: .5rem;
        box-sizing: border-box;
    }
    .index-nav-item a{
        font-size: .15rem;
        color: rgb(22, 21, 21);
        text-decoration: none;
    }
</style>