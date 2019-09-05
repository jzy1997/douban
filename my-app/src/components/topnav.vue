<template>
  <div class="topnav">
    <p class="leftTit">
      <router-link to="/index">豆瓣</router-link>
    </p>
    <ul class="rightnav">
      <li>
        <router-link to="/movie">电影</router-link>
      </li>
      <li>
        <router-link to="/book">图书</router-link>
      </li>
      <li>
        <router-link to="/status">广播</router-link>
      </li>
      <li>
        <router-link to="/group">小组</router-link>
      </li>
      <li>
        <router-link to="/route">
          <icon name="th-large"></icon>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.topnav {
  height: 0.58rem;
  width: 100%;
  padding: 0 0.22rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f3f3f3;
}
.leftTit {
  float: left;
  font-size: 0.28rem;
  font-weight: 600;
  color: #05b512;
  line-height: 0.58rem;
}
.leftTit a {
  color: #05b512;
  text-decoration: none;
}
.rightnav {
  font-size: 0;
  float: right;
  list-style: none;
  height: 100%;
}
.rightnav li {
  float: left;
  height: 100%;
  line-height: 0.58rem;
  margin-right: 0.14rem;
}
.rightnav li:last-of-type {
  margin-right: 0rem;
}
.rightnav li:nth-of-type(1) a {
  color: rgb(13, 132, 179);
}
.rightnav li:nth-of-type(2) a {
  color: #9f7860;
}
.rightnav li:nth-of-type(3) a {
  color: #e4a813;
}
.rightnav li:nth-of-type(4) a {
  color: skyblue;
}
.rightnav li:nth-of-type(5) svg {
  color: #05b512;
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.18rem;
}
.rightnav li a {
  font-size: 0.16rem;
  text-decoration: none;
}
</style>