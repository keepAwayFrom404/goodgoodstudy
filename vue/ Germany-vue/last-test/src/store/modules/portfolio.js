const state = {
  portfolioList: [],
};
const mutations = {
  addToPortfolioList: (state, payload) => {
    if (payload && payload.num) {
      state.portfolioList[payload.index].quantity =
        Number(state.portfolioList[payload.index].quantity) + Number(payload.num);
    } else {
      state.portfolioList.push(payload);
    }
  },
  deleteProtfolio: (state, payload) => {
    state.portfolioList.splice(payload, 1);
  },
  initProtfilioPrice: (state, payload) => {
    state.portfolioList.forEach(item => {
      const stockPrice = payload.find(stock => stock.brand === item.brand);
      if (stockPrice) {
        item.price = stockPrice.price;
      }
    });
  },
};
export default {
  state,
  mutations,
};
