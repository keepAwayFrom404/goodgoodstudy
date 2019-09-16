const state = {
  stockList: [
    {
      brand: 'BMW',
      price: 20,
      buyNum: null,
    },
    {
      brand: 'Google',
      price: 50,
      buyNum: null,
    },
    {
      brand: 'Apple',
      price: 10,
      buyNum: null,
    },
    {
      brand: 'Twitter',
      price: 30,
      buyNum: null,
    },
  ],
};
const mutations = {
  initStockPrice: state => {
    state.stockList.forEach(item => {
      const randomNum = Math.floor(Math.random() * 100 + 1);
      item.price = randomNum;
    });
  },
  reloadStockList: (state, payload) => {
    state.stockList = payload;
  },
};
export default {
  state,
  mutations,
};
