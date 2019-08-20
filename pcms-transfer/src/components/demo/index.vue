<template>
  <div>
    template code here!
  </div>
</template>
<script>
export default {
  created() {
    this.$addDS('mock', require('./ds/mock.js'))

    this.$DS.getInfo().then(data => {
      console.log('got data :', data)
    })
  }
}
</script>
<style scoped>
</style>
