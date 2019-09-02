<template>
  <div id="app">
    <Common msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Common from './components/common.vue';

export default {
  name: 'app',
  components: {
    Common
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
