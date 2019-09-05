<template>
  <div class="detailsItem">
    <p class="tit">{{obj.tit}}</p>
    <h2>
      <div class="person">
        <div>
          <div class="star">
            <starbar :val="obj.score"></starbar>
          </div>
          <span class="num">{{obj.score}}分</span>
          <span>{{obj.eva}}</span>人评价
        </div>
        <br />
        <div class="tag">
          <span v-for="(v,i) in obj.types" :key="i">{{v}} /</span>
        </div>
        <p>用APP打开查看影人资料</p>
      </div>
      <div class="imgBox">
        <img :src="obj.imgs" alt />
      </div>
    </h2>
    <div class="btns">
      <span>想看</span>
      <span>看过</span>
    </div>
    <div class="brief">
      <span>{{obj.tit}}</span>的简介
    </div>
    <div class="bri">
      {{text}}
      <span @click="open($event)" v-text="isopen?'(关闭)':'(展开)'"></span>
    </div>
    <div class="brief">查看更多相关分类</div>
    <div class="types">
      <span v-for="(v,i) in obj.tags" :key="i">{{v}}</span>
    </div>
    <div class="brief">
      <span>{{obj.tit}}</span>的图片
    </div>
    <div class="imgs">
      <div class="imgss">
        <img v-for="(v,i) in obj.imgsMore" :key="i" :src="v" alt />
      </div>
    </div>
  </div>
</template>

<script>
import starbar from "../components/starbar";
export default {
  components: {
    starbar
  },
  props: ["typ", "id"],
  methods: {
    open($event) {
      if (this.isopen) {
        this.text = this.obj.bri;
      } else {
        this.text = this.obj.briAll;
      }
      this.isopen = !this.isopen;
    }
  },
  data() {
    return {
      obj: {},
      text: "",
      isopen: false
    };
  },
  created() {
    this.axios({
      url: "/detailsitem",
      method: "get"
    }).then(ok => {
      this.obj = ok.data.dat;
      console.log(this.obj);
      this.text = this.obj.bri;
    });
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.imgs {
  overflow: auto;
  width: 100%;
  white-space: nowrap;
}
.imgs {
  width: 100%;
  height: 100%;
  margin-right: 0.1rem;
}
.imgss img:last-of-type {
  margin-right: 0rem;
}
.imgss img {
  margin-right: 0.07rem;
  width: 1.3rem;
}
.imgss {
  width: 1.5rem;
  height: 1.3rem;
  margin-right: 0.12rem;
  display: inline-block;
}
.types {
  padding: 0.1rem 0;
}
.types span {
  color: #aaa;
  padding: 0.02rem 0.09rem;
  font-size: 0.13rem;
  background-color: #f5f5f5;
  margin: 0.1rem 0.05rem;
  border-radius: 0.2rem;
}
.bri {
  font-size: 0.13rem;
  line-height: 0.25rem;
  color: #282c34;
}
.bri span {
  color: #42bd56;
}
.brief {
  font-size: 0.14rem;
  color: #aaa;
  height: 0.4rem;
  line-height: 0.4rem;
}
.btns {
  font-size: 0px;
  padding-top: 0.1rem;
}
.btns span:first-of-type {
  margin-right: 0.09rem;
}
.btns span {
  width: 48%;
  display: inline-block;
  padding: 0.1rem 0;
  border: 1px solid #fecb56;
  border-radius: 0.05rem;
  text-align: center;
  font-size: 0.16rem;
  color: #fecb56;
}
.detailsItem {
  width: 100%;
  padding: 0 0.21rem;
  box-sizing: border-box;
  font-size: 0px;
}
.detailsItem .tit {
  font-size: 0.18rem;
  line-height: 0.38rem;
  height: 0.38rem;
  font-weight: 600;
}
.detailsItem h2 > .person {
  color: #aaa;
  font-weight: 100;
  width: 60%;
  font-size: 0px;
}
.detailsItem h2 > .person > p {
  font-size: 0.13rem;
  color: #42bd56;
  margin-top: 0.2rem;
}
.tag {
  font-size: 0.13rem;
  color: #282c34;
}
.detailsItem h2 .num {
  margin-right: 0.07rem;
}
.detailsItem h2 .star {
  width: 0.85rem;
}
.detailsItem h2 {
  display: flex;
}
.detailsItem h2 .person > div:first-of-type {
  display: flex;
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.14rem;
  margin-bottom: 0.15rem;
}
.imgBox {
  width: 40%;
  height: 1.5rem;
  background-color: #bfa;
}
</style>