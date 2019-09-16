<template>
  <div id="app">
    <lee-header></lee-header>
    <router-view />
  </div>
</template>
<script>
import LeeHeader from './components/header';
export default {
  components: {
    LeeHeader,
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  text-decoration: none;
}
</style>
