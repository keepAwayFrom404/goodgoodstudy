<template>
  <li class="list-group-item" @click="showDetail" style="cursor:pointer">
    Server #{{ server.id }}
  </li>
</template>

<script>
import { serverBus } from '../main';
export default {
  props: ['server'],
  methods: {
    showDetail() {
      serverBus.$emit('serverSeleted', this.server);
    }
  }
};
</script>

<style scoped>
</style>