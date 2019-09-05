<template>
  <div class="movie">
    <topnav></topnav>
    <div class="movieCon">
      <movie-nav typ="book" :moredata="moredata"></movie-nav>
      <findMovie :dat="finddata"></findMovie>
      <h2>分类预览</h2>
      <pages-nav :dat="type"></pages-nav>
      <pagefoot></pagefoot>
    </div>
  </div>
</template>

<script>
import topnav from "../components/topnav";
import movieNav from "../components/movieNav";
import findMovie from "../components/findMovie";
import pagesNav from "../components/pagesNav";
import pagefoot from "../components/pagefoot";

export default {
  components: {
    topnav,
    movieNav,
    findMovie,
    pagesNav,
    pagefoot
  },
  created() {

    this.axios({
      url: "/goodBook",
      method: "get"
    }).then(ok => {
      this.finddata = ok.data.goodBook;
    });

    this.axios({
      url: "/booknav",
      method: "get"
    }).then(ok => {
      this.moredata = ok.data.data;
    });
    this.axios({
      url: "/movietype",
      method: "get"
    }).then(ok => {
      this.type = ok.data.movietype;
    });
  },
  data() {
    return {
      finddata: [],
      moredata: [],
      type:[]
    };
  }
};
</script>

<style scoped>
.movieCon {
  width: 100%;
  flex: 1;
  overflow-y: auto;
}
.movie {
  display: flex;
  flex-direction: column;
  height: 100%;
}
h2 {
  font-size: 0.16rem;
  font-weight: 400;
  padding-left: 0.2rem;
  line-height: 0.6rem;
  height: 0.6rem;
}
</style>