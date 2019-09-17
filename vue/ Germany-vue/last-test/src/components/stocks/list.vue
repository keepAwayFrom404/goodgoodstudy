<template>
  <div class="stock-list">
    <stock-item v-for="(item, index) in stockList" :key="index" :item="item" @buyStock="buyStock(item)"></stock-item>
  </div>
</template>

<script>
import StockItem from './item';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'stock-list',
  components: {
    StockItem,
  },
  computed: {
    ...mapState(['funds']),
    // 股票列表
    stockList() {
      return this.$store.state.stocks.stockList;
    },
    portfolioList() {
      return this.$store.state.portfolio.portfolioList;
    },
  },
  methods: {
    ...mapMutations(['addFunds', 'reduceFunds']),
    buyStock(item) {
      if (item && item.buyNum * item.price > this.funds) {
        alert('钱不够，买个锤子');
      } else {
        const hasBuy = this.portfolioList.findIndex(portfolio => portfolio.brand === item.brand);
        if (hasBuy !== -1) {
          const payload = {
            index: hasBuy,
            num: item.buyNum,
          };
          this.$store.commit('addToPortfolioList', payload);
        } else {
          const { brand, price } = item;
          const obj = {
            brand,
            price,
            quantity: item.buyNum,
            sellNum: null,
          };
          this.$store.commit('addToPortfolioList', obj);
        }
        this.reduceFunds(item.buyNum * item.price);
      }
    },
  },
};
</script>

<style lang="scss">
.stock-list {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}
</style>
