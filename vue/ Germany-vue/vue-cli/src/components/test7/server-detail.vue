<template>
  <div class="server-detail">
    <p v-if="!server">please select server</p>
    <p v-else>server #{{ server.id }}: {{ server.status }}</p>
    <hr />
    <button @click="changeStatus(server.id)">change status</button>
  </div>
</template>

<script>
import { serverBus } from '../main';
export default {
  data() {
    return {
      server: null
    };
  },
  created() {
    serverBus.$on('serverSeleted', server => {
      this.server = server;
    });
  },
  methods: {
    changeStatus() {
      this.server.status = 'normal';
      // this.$emit('statusChange', id);
    }
  }
};
</script>

<style scoped>
</style>