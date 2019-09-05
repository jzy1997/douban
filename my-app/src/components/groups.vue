<template>
  <div class="group">
    <h2>租房找室友</h2>
    <ul class="content">
      <li v-for="(v,i) in arr" :key="i">
        <a href="#/pages/group/subject/1234" class>
          <div class="group-meta">
            <img :src="v.images.small" alt="cover" />
            <div class="group-info">
              <span>{{v.title}}</span>
              <!---->
            </div>
            <span class="group-member">{{v.group_member}}人</span>
          </div>
          <div class="group-topic">
            <span>{{v.group_topic.time}}</span>
            <span>{{v.group_topic.title}}</span>
          </div>
        </a>
      </li>
      <li class="more"><a>更多相关小组</a></li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            arr: []
        }
    },
    props:{
        groupname:{
            type:String,
            default:"aaa"
        }
    },
    created() {
        if(this.groupname == "租房找室友"){
            this.axios({
                url:"/xiaozua",
                method:"get"
            }).then((ok)=>{
                this.arr = ok.data.xiaozua;
            });
        }else if(this.groupname == "来聊五块钱"){
            this.axios({
                url:"/xiaozub",
                method:"get"
            }).then((ok)=>{
                this.arr = ok.data.xiaozub;
            });
        }else if(this.groupname == "买买买"){
            this.axios({
                url:"/xiaozuc",
                method:"get"
            }).then((ok)=>{
                this.arr = ok.data.xiaozuc;               
            });
        }
    },
};
</script>

<style scoped>
.content > .more a{
    display: block;
    margin-bottom: .3rem;
    padding: .15rem 0;
    font-size: .16rem;
    line-height: .18rem;
    text-align: center;
    color: #42bd56;
    border: 0;
}
.content > li > a .group-meta {
  display: block;
  height: 0.4rem;
  line-height: 0.4rem;
}
.content > li > a .group-meta img {
  float: left;
}
.content > li > a .group-meta > div {
  float: left;
}
.content > li > a .group-meta .group-info {
  margin-left: 0.15rem;
}
.content > li > a .group-meta .group-member {
  float: right;
}
.content > li > a .group-topic {
  margin-top: 0.1rem;
  font-size: 0.13rem;
  color: #aaa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content > li > a .group-topic span {
  font-size: 0.13rem;
  color: #aaa;
  white-space: nowrap;
}
.content > li > a .group-info span {
  font-size: 0.16rem;
  color: #111;
  white-space: nowrap;
}
.content > li > a .group-member {
  color: #ccc;
  font-size: 0.15rem;
}
.content > li > a {
  text-decoration: none;
  display: block;
  padding: 0.15rem 0.18rem 0.15rem 0;
  border-bottom: 1px solid #f2f2f2;
}
.group > h2 {
  font-size: 0.16rem;
  font-weight: 400;
  color: #111;
}
.group {
  font-size: 0;
  margin-left: 0.18rem;
  padding-top: 0.14rem;
}
</style>