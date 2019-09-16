<template>
  <div class="portfolio-list">
    <div class="no-data" v-if="!portfolioList.length">暂无买入股票</div>
    <template v-else>
      <portfolio-item
        v-for="(item, index) in portfolioList"
        :key="index"
        :item="item"
        @sellStock="sellStock(item, index)"
      ></portfolio-item>
    </template>
  </div>
</template>

<script>
import PortfolioItem from './item.vue';
import { mapMutations } from 'vuex';
export default {
  name: 'portfolio-list',
  components: {
    PortfolioItem,
  },
  computed: {
    portfolioList() {
      return this.$store.state.portfolio.portfolioList;
    },
  },
  methods: {
    ...mapMutations(['addFunds']),
    sellStock(item, index) {
      if (item.sellNum > item.quantity) {
        alert('自己有多少股票没点逼数吗');
      } else {
        this.addFunds(item.sellNum * item.price);
        if (item.quantity - item.sellNum == 0) {
          this.$store.commit('deleteProtfolio', index);
        }
      }
    },
  },
};
</script>

<style lang="scss"></style>
