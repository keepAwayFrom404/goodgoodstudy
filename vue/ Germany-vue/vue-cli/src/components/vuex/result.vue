<template>
  <div>
    <p>count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.doubleCount;
    }
  }
};
</script>

<style scoped>
</style>