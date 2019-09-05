<template>
  <div class="index">
    <topnav></topnav>
    <div class="indexCon">
      <indexnav :isLogin="islogin"></indexnav>
      <indexlist></indexlist>
    </div>
  </div>
</template>

<script>
import topnav from "../components/topnav";
import indexnav from "../components/indexnav";
import indexlist from "../components/indexlist";
export default {
  created() {
    this.$store.dispatch("isloginAction");
  },
  components: {
    topnav,
    indexnav,
    indexlist
  },
  data() {
    return {};
  },
  computed: {
    islogin() {
      return !this.$store.state.islogin;
    }
  }
};
</script>

<style scoped>
.indexCon {
  width: 100%;
  flex: 1;
  overflow-y: auto;
}
.index {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>