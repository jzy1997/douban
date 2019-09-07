<template>
  <div class="star" id="sta">
    <el-rate v-model="value" disabled text-color="#ff9900"></el-rate>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: Number,
      default: 7.6
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
    this.value = this.val / 2;
  }
};
</script>

<style scoped>
#sta .el-rate__item .el-rate__icon {
  font-size: 18px;
  margin-right: 0px;
  margin-top: 0.03rem;
}
</style>