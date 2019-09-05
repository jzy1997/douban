import Vue from 'vue'
import Vuex from 'vuex'
import { getCookie, setCookie } from "../../static/js/cookieTools";
Vue.use(Vuex);

export let store = new Vuex.Store({
    state: {
        islogin: false
    },
    getters: {},
    mutations: {
        islogin(state) {
            if (getCookie("userInfo")) {
              var userInfo = JSON.parse(getCookie("userInfo"));
              if (userInfo.token) {
                console.log("欢迎" + userInfo.uname);
                state.islogin = true;
              }
            } else {
              state.islogin = false;
              console.log("未登录");
            }
        }
    },
    actions: {
        isloginAction(comtext) {
            comtext.commit("islogin");
        }
    }
})