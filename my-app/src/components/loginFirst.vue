<template>
  <div class="login">
    <router-link to="/login"><icon name="user-circle" ></icon></router-link>
    <router-link class="log" to="/login">请先登录</router-link>
    <router-link to="/login"><icon name="id-card" ></icon></router-link>
    <router-link to="/regist"><icon name="registered"></icon></router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.login {
  padding: 0.1rem 0.18rem;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  font-size: 0;
  position: relative;
  height: 0.8rem;
  border-bottom: 2px solid #eee;
}
.login svg {
  color: #dedede;
  font-size: 0.12rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.login .log {
  text-decoration: none;
  font-size: 0.15rem;
  color: #dedede;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 23%;
}
.login a:first-of-type svg {
  width: 0.5rem;
  height: 0.5rem;
}
.login a:nth-of-type(3) svg {
  right: 25%;
  width: 0.3rem;
  height: 0.3rem;
}
.login a:nth-of-type(4) svg {
  right: 10%;
  width: 0.3rem;
  height: 0.3rem;
}
</style>