<template>
  <div class="stocks-item">
    <div class="header">
      <span class="brand">{{ item.brand }}</span>
      <span>(price: {{ item.price }})</span>
    </div>
    <div class="content">
      <el-input v-model="item.buyNum" placeholder="Quantity"></el-input>
      <el-button type="success" @click="buyStock">Buy</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stocks-item',
  props: ['item'],
  methods: {
    buyStock() {
      this.$emit('buyStock');
      this.item.buyNum = null;
    },
  },
};
</script>

<style lang="scss">
.stocks-item {
  width: 500px;
  height: 120px;
  margin: 0 20px 20px 0;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  .header {
    background: #e2f3da;
    height: 40px;
    padding-left: 14px;
    line-height: 40px;
    color: green;
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
