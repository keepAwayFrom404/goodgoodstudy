<template>
  <div id="app">
    <p>
      <!-- 你可以通过 prop 传递更小的 `width` 和 `height` -->
      <icon-base width="12" height="12" icon-name="write">
        <icon-write/>
      </icon-base>
      <!-- 或者你可以使用默认值，即 18 -->
      <icon-base icon-name="write">
        <icon-write/>
      </icon-base>
      <!-- 或者让它更大一些 :) -->
      <icon-base width="30" height="30" icon-name="write">
        <icon-write/>
      </icon-base>
    </p>
  </div>
</template>

<script>
import IconBase from './components/icon-base.vue';

export default {
  name: 'app',
  components: {
    IconBase
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
