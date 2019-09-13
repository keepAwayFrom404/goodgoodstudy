<template>
  <div>
    <p>{{ showStrLength }}</p>
  </div>
</template>

<script>
import { showStrLength } from './mixin';
export default {
  mixins: [showStrLength],
  data() {
    return {
      msg: 'hello world!'
    };
  },
  computed: {
    reverseStr() {
      return this.msg
        .split('')
        .reverse()
        .join('');
    }
  },
  filters: {
    reverseStr(value) {
      return value
        .split('')
        .reverse()
        .join('');
    }
  }
};
</script>

<style scoped>
</style>