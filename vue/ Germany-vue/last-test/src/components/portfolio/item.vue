<template>
  <div class="portfolio-item">
    <div class="header">
      <span class="brand">{{ item.brand }}</span>
      <span>(price: {{ item.price }} | Quantity: {{ item.quantity }})</span>
    </div>
    <div class="content">
      <el-input v-model="item.sellNum" placeholder="Quantity"></el-input>
      <el-button type="danger" @click="sellStock">Sell</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio-item',
  props: ['item'],
  methods: {
    sellStock() {
      this.$emit('sellStock');
      this.item.quantity -= this.item.sellNum;
      this.item.sellNum = null;
    },
  },
};
</script>

<style lang="scss">
.portfolio-item {
  width: 500px;
  height: 120px;
  margin: 0 20px 20px 0;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  .header {
    background: #dceff7;
    height: 40px;
    padding-left: 14px;
    line-height: 40px;
    color: lightblue;
  }
  .brand {
    font-size: 20px;
  }
  .content {
    display: flex;
    margin: 20px 20px 0;
  }
  .el-input__inner {
    width: 240px;
  }
}
</style>
