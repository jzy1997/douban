<template>
  <div class="commitem">
    <div class="desc">
      <img
        :src="img"
        alt
      />
      <div class="user-info">
        <strong>{{uname}}</strong>
        <span>写了日记</span>
        <div class="timestamp">{{time}}</div>
      </div>
    </div>
    <div class="article-card">
      <div class="title">{{comtit}}</div>
      <div class="detail">{{detail}}</div>
    </div>
    <div class="info">
      <span>
        <icon name="at"></icon>
        <i>{{like}}</i>
      </span>
      <span>
        <icon name="comment"></icon>
        <i>{{talk}}</i>
      </span>
      <span>
        <icon name="bullseye"></icon>
        <i>{{other}}</i>
      </span>
      <icon name="registered"></icon>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        img:{
            type:String,
            required:true
        },
        uname:{
            type:String,
            required:true
        },
        comtit:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        detail:{
            type:String,
            required:true
        },
        like:{
            type:Number,
            required:true
        },
        talk:{
            type:Number,
            required:true
        },
        other:{
            type:Number,
            required:true
        },
    }
};
</script>

<style scoped>
.info {
  font-size: 0;
  float: right;
  margin-bottom: .2rem;
}
.info svg {
  width: 0.16rem;
  height: 0.16rem;
  color: #aaa;
  margin-right: 0.07rem;
}
.info i {
  font-size: 0.14rem;
  font-style: normal;
  color: #aaa;
}
.info span {
  margin-right: 0.35rem;
}
.commitem {
  margin: 0.2rem 0.18rem;
  overflow: hidden;
  border-bottom: .01rem solid #aaa;
}
.desc {
  font-size: 0;
  display: flex;
}
.desc img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.desc .user-info {
  padding-top: 0.1rem;
  padding-left: 0.15rem;
  box-sizing: border-box;
}
.desc .user-info strong {
  font-size: 0.14rem;
  margin-right: 0.05rem;
}
.desc .user-info span {
  font-size: 0.13rem;
  color: #aaa;
}
.desc .user-info .timestamp {
  font-size: 0.12rem;
  margin-top: 0.05rem;
  color: #aaa;
}
.article-card {
  margin: 0.1rem 0 0.2rem;
  padding: 0.15rem;
  width: 2rem;
  border-radius: 0.02rem;
  float: right;
  border: 0.01rem solid #d8d8d8;
}
.article-card .title {
  font-size: 0.14rem;
  margin-bottom: 0.08rem;
}
.detail {
  font-size: 0.13rem;
  line-height: 0.19rem;
  color: #aaa;
}
</style>