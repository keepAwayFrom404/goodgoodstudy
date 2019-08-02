<template>
  <div>
    <div v-loading="loading">{{ data }}</div>
  </div>
</template>

<script>
export default {
  name: 'gt-transform',
  data() {
    return {
      loading: true,
      data: []
    };
  },
  created() {
    // 注册我们的mock数据，必须项
    this.$addDS('mock', require('./ds/mock.js'));

    // 使用this.$DS.xxx调用我们定义在mock数据中的方法
    this.$DS.getInfo().then(
      res => {
        this.data = res.data;
        this.loading = false;
      },
      err => {
        console.log('get info error' + err);
        this.loading = false;
      }
    );
  }
};
</script>

<style lang="scss" scoped>
</style>