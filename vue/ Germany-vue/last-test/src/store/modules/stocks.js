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
      const randomNum = Math.round(item.price * (1 + Math.random() - 0.5));
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
