<template>
  <div id="app">
    <Slider msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Slider from './components/slider.vue';

export default {
  name: 'app',
  components: {
    Slider
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
