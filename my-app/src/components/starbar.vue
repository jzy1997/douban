<template>
  <div class="star">
    <el-rate v-model="score" disabled text-color="#ff9900"></el-rate>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: Number,
      required: true
    }
  },
  computed: {
    score() {
      return this.value / 2;
    }
  },
  data() {
    return {
      value: 0
    };
  },
  created() {
    this.value = this.val;
  }
};
</script>
    
<style scoped>
</style>