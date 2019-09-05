<template>
  <div class="login">
    <p class="tit">欢迎加入豆瓣</p>
    <input type="text" class="uname" @input="regname()" placeholder="用户名" v-model="uname" />
    <h3>
      <input :type="show" class="pwd" @input="regname()" placeholder="密码" v-model="pwd" />
      <span @click="showpwd()">
        <icon :name="show=='password'?'eye':'eye-slash'"></icon>
      </span>
    </h3>
    <button :class="{regist:yes,notregist:!yes}" @click="reg()">注册</button>
    <h5>
        点击「注册」代表你已阅读并同意用户使用协议
    </h5>
    <h6>
      <router-link to="/login">账号密码登录</router-link>
      <router-link to="/">下载豆瓣</router-link>
    </h6>
    <cancel></cancel>
  </div>
</template>

<script>
import cancel from "../components/cancel";
export default {
  components: {
    cancel
  },
  data() {
    return {
      uname: "",
      pwd: "",
      canreg: false,
      same: false,
      counting: 3,
      show: "password"
    };
  },
  methods: {
    showpwd() {
      if (this.pwd != "") {
        if (this.show == "password") {
          this.show = "text";
          setTimeout(() => {
            this.show = "password";
          }, 1000);
        } else {
          this.show = "password";
        }
      }
    },
    reg() {
      var pwd = this.pwd;
      var canreg = this.canreg;
      var pwdFlag = /^\S{6,12}$/.test(pwd);
      if (pwdFlag && canreg && this.same) {
        console.log("允许注册");
        let params = new URLSearchParams();
        params.append("uname", this.uname);
        params.append("pwd", pwd);
        this.axios({
          url: "http://localhost:3000/regist",
          method: "post",
          data: params
        }).then(ok => {
          if (ok.data.flag == 1) {
            var interval = setInterval(() => {
              console.log(this.counting + "秒后跳转");
              this.counting--;
              if (this.counting <= 0) {
                return clearInterval(interval);
              }
            }, 1000);
          }
        });
      } else {
        console.log("不允许");
      }
    },
    regname() {
      var uname = this.uname;
      var unameFlag = /^1[3456789]\d{9}$/.test(uname);
      this.canreg = unameFlag;
      if (unameFlag) {
        let params = new URLSearchParams();
        params.append("uname", this.uname);
        this.axios({
          url: "http://localhost:3000/check",
          method: "post",
          data: params
        }).then(ok => {
          if (ok.data.flag == 6) {
            this.same = false;
            console.log("该账号已经注册过了宝贝");
          } else if (ok.data.flag == 7) {
            this.same = true;
          }
        });
      }
    }
  },
  computed: {
    yes() {
      return this.same && this.canreg;
    }
  },
  watch: {
    counting(newval, oldval) {
      if (newval <= 0) {
        this.$router.push("/login");
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
}
.pwd {
  border-radius: 0px 0px 2px 2px;
  border-top: 0;
}
.regist {
  width: 2.6rem;
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
.notregist {
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
  font-size: 0.12rem;
  color: #ccc;
  font-weight: normal;
  margin-top: 0.25rem;
  margin-bottom: 0.44rem;
}
h5 a {
  color: #ccc;
  text-decoration: none;
}
h6 > a {
  font-size: 0.16rem;
  color: #17aa52;
  margin: 0.12rem;
  font-weight: normal;
  text-decoration: none;
}
</style>