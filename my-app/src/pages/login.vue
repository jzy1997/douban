<template>
  <div class="login">
    <p class="tit">登录豆瓣</p>
    <input type="text" class="uname" @input="logname()" placeholder="用户名" v-model="uname" />
    <h3>
      <input class="pwd" :type="show" placeholder="密码" v-model="pwd" />
      <span @click="showpwd()">
        <icon :name="show=='password'?'eye':'eye-slash'"></icon>
      </span>
    </h3>
    <button :class="{loginbtn:canlog,notloginbtn:!canlog}" @click="log()">登录</button>
    <h5>使用其他方式登录 & 找回密码</h5>
    <h6>
      <router-link to="/regist">注册豆瓣账号</router-link>
      <router-link to="/">下载豆瓣</router-link>
    </h6>
    <cancel></cancel>
  </div>
</template>

<script>
import cancel from "../components/cancel";
import { getCookie, setCookie } from "../assets/cookieTools";
export default {
  components: {
    cancel
  },
  data() {
    return {
      uname: "",
      pwd: "",
      canlog: false,
      counting: 3,
      show: "password"
    };
  },
  methods: {
    showpwd() {
      if(this.pwd == ""){
        return;
      }
      if (this.show == "password") {
        this.show = "text";
        setTimeout(() => {
          this.show = "password";
        }, 3000);
      } else {
        this.show = "password";
      }
    },
    log() {
      var pwd = this.pwd;
      var canlog = this.canlog;
      var pwdFlag = /^\S{6,12}$/.test(pwd);
      if (pwdFlag && canlog) {
        console.log("允许登录");
        let params = new URLSearchParams();
        params.append("uname", this.uname);
        params.append("pwd", pwd);
        this.axios({
          url: "http://localhost:3000/login",
          method: "post",
          data: params
        }).then(ok => {
          if (ok.data.flag == 3) {
            var userInfo = {
              token: ok.data.token,
              uname: this.uname
            };
            setCookie("userInfo", JSON.stringify(userInfo), 1);
            var interval = setInterval(() => {
              console.log("登录成功" + this.counting + "秒后跳转");
              this.counting--;
              if (this.counting <= 0) {
                return clearInterval(interval);
              }
            }, 1000);
          } else {
            alert("账号密码不正确，请重新登录");
            this.pwd = "";
          }
        });
      } else {
        alert("账号格式不正确");
      }
    },
    logname() {
      var uname = this.uname;
      var unameFlag = /^1[3456789]\d{9}$/.test(uname);
      this.canlog = unameFlag;
    }
  },
  watch: {
    counting(newval, oldval) {
      if (newval <= 0) {
        this.$router.push("/index");
      }
    }
  }
};
</script>

<style scoped>
svg {
  color: #17aa52;
  position: absolute;
  top: 50%;
  right: 7%;
  transform: translateY(-50%);
  width: 0.2rem;
  height: 0.18rem;
}
h3 {
  position: relative;
  width: 2.5rem;
  margin: 0 auto;
}
.login {
  font-size: 0rem;
  text-align: center;
  position: relative;
}
.tit {
  font-size: 0.16rem;
  font-weight: 600;
  text-align: center;
  line-height: 0.55rem;
  height: 0.55rem;
  width: 2.9rem;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
}
.uname,
.pwd {
  width: 2.5rem;
  height: 0.5rem;
  border-color: #ccc;
  box-sizing: border-box;
  font-size: 0.16rem;
  color: #ccc;
  outline: none;
  padding-left: 10px;
  border: 1px solid #ccc;
}
.uname {
  border-radius: 2px 2px 0px 0px;
  margin-top: 0.36rem;
  box-sizing: border-box;
}
.pwd {
  border-radius: 0px 0px 2px 2px;
  border-top: 0;
}
.loginbtn {
  width: 2.5rem;
  border-radius: 2px;
  background-color: #17aa52;
  color: #fff;
  text-align: center;
  line-height: 0.4rem;
  height: 0.4rem;
  border: 0;
  font-size: 0.16rem;
  font-weight: normal;
  margin-top: 0.12rem;
  outline: none;
}
.notloginbtn {
  width: 2.6rem;
  border-radius: 2px;
  background-color: #84d39b;
  color: #fff;
  text-align: center;
  line-height: 0.4rem;
  height: 0.4rem;
  border: 0;
  font-size: 0.16rem;
  font-weight: normal;
  margin-top: 0.12rem;
  outline: none;
}
h5 {
  font-size: 0.16rem;
  color: #ccc;
  font-weight: normal;
  margin-top: 0.25rem;
  margin-bottom: 0.44rem;
}
h6 > a {
  font-size: 0.16rem;
  color: #17aa52;
  margin: 0.12rem;
  font-weight: normal;
  text-decoration: none;
}
</style>