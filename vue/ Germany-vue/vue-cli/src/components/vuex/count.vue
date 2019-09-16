<template>
  <div>
    <el-button @click="increment">Increment</el-button>
    <el-button @click="decrement">Decrement</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.count++;
    },
    decrement() {
      this.$store.state.count--;
    }
  }
};
</script>

<style scoped>
</style>