// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { getCookie, setCookie } from "../static/js/cookieTools";
Vue.prototype.axios = axios
Vue.config.productionTip = false
import { store } from './store/store'
require("./mock")
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);

  if (to.path == "/status") {
    // 先判断是否登录
    if (getCookie("userInfo")) {
      next();
    } else {
      alert("先登录");
      next("/login");
    }
  } else if (to.path == "/group") {
    if (getCookie("userInfo")) {
      next();
    } else {
      alert("先登录");
      next("/login");
    }
  } else if (to.path == "/details/book") {
    if (getCookie("userInfo")) {
      next();
    } else {
      alert("先登录");
      next("/login");
    }
  }else if (to.path == "/details/movie") {
    if (getCookie("userInfo")) {
      next();
    } else {
      alert("先登录");
      next("/login");
    }
  }
  else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
