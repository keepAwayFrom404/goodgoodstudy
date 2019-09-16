<template>
  <div>
    <p>count: {{ doubleCount }}</p>
    <p>clicks: {{ stringCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['doubleCount', 'stringCount'])
  }
};
</script>

<style scoped>
</style>