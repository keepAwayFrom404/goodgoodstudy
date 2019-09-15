<template>
  <div>
    <h3>user edit</h3>
    <p>{{ $route.query.locale }}</p>
    <p>{{ $route.query.q }}</p>
    <div style="height:700px"></div>
    <p id="data">some text</p>
    <el-button type="primary" @click="confirmed = true">confirm</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style scoped>
</style>