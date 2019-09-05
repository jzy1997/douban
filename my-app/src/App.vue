<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("isloginAction");
    console.log(this.$store.state.islogin);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  font-size: 26.67vw;
  font-family: sans-serif;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
