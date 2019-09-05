<template>
  <div>
    <div class="searchBar">
      <p class="close">
        <router-link to="/index">关闭</router-link>
      </p>
      <div class="input">
        <input type="text" class="inp" @focus="onfun()" @blur="onblu()"/>
        <icon name="search" v-show="onfoc"></icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            onfoc:true
        }
    },
    methods: {
        onfun(){
            this.onfoc = false;
        },
        onblu(){
            this.onfoc = true;
        }
    },
};
</script>

<style scoped>
.searchBar {
  font-size: 0px;
  display: flex;
  align-items: center;
  height: .58rem;
  padding: 0 .18rem;
  background: #fff;
  border-bottom: .01rem solid #f3f3f3;
}
.close a {
  font-size: 0.16rem;
  color: #42bd56;
  text-decoration: none;
}
.input{
    width: 2.8rem;
    margin-left: .15rem;
    position: relative;
}
.input svg{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    color: #666;
    font-weight: 100;
    width: .2rem;
    height: .2rem;
}
.inp{
    box-sizing: border-box;
    border: 0;
    background-size: .17rem;
    border-radius: .03rem;
    width: 100%;
    height: .38rem;
    font-size: .14rem;
    background-color: #f3f3f3;
    outline: none;
    padding-left: .2rem;
}
</style>