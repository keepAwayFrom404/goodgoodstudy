<template>
  <div>
    I am user page
    <hr />
    <el-button @click="goHome">go home</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
</style>