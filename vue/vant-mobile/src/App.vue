<template>
  <div id="app">
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          clickable
          :title="`复选框 ${item}`"
          @click="toggle(index)"
        >
          <van-checkbox :name="item" slot="right-icon" ref="checkboxes"></van-checkbox>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    }
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
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
