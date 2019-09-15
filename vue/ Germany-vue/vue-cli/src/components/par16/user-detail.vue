<template>
  <div>
    <h3>user detail</h3>
    <p>User loaded id: {{ $route.params.id }}</p>
    <div style="height:1000px;background:red;">111</div>
    <router-link tag="el-button" :to="link">go to detail</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: 'userEdit',
        params: { id: this.$route.params.id },
        query: {
          locale: 'en',
          q: '100'
        },
        hash: '#data'
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    next();
    console.log('component route enter');
  }
};
</script>

<style scoped>
</style>