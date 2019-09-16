<template>
  <div>
    <el-button @click="asyncIncrement">Increment</el-button>
    <el-button @click="asyncDecrement">Decrement</el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['asyncIncrement', 'asyncDecrement'])
  }
};
</script>

<style scoped>
</style>