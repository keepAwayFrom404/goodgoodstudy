<template>
  <div class="lee-header">
    <div class="left">
      <span class="title click-text"><router-link to="/">Stock Trader</router-link></span>
      <router-link class="click-text" to="/portfolio">Portfolio</router-link>
      <router-link class="click-text" to="/stocks">Stocks</router-link>
    </div>
    <div class="right">
      <span class="click-text" @click="newDatePrice">End Day</span>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link click-text"> Save & Load<i class="el-icon-arrow-down el-icon--right"></i> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="save">Save Data</el-dropdown-item>
          <el-dropdown-item command="load">Load Data</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Funds: ${{ funds }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'lee-header',
  computed: {
    ...mapState(['funds']),
    stockList() {
      return this.$store.state.stocks.stockList;
    },
  },
  methods: {
    newDatePrice() {
      this.$store.commit('initStockPrice');
      this.$store.commit('initProtfilioPrice', this.stockList);
    },
    handleCommand(command) {
      if (command === 'save') {
        console.log(this.stockList);
        localStorage.setItem('stockStorage', JSON.stringify(this.stockList));
      } else if (command === 'load' && localStorage.getItem('stockStorage')) {
        const payload = JSON.parse(localStorage.getItem('stockStorage'));
        console.log(payload);
        this.$store.commit('reloadStockList', payload);
        this.$store.commit('initProtfilioPrice', payload);
      } else {
        alert('暂无存档');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.lee-header {
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  padding: 0 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: 0px 0px 8px #ccc;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .el-dropdown {
    font-size: 16px;
  }
}
a:-webkit-any-link {
  color: gray;
}
.click-text {
  color: gray;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    color: #000;
  }
}
</style>
