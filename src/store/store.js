import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentArticle: {
      title: '',
      content: '',
      type: '',
      category: ''
    }
  },
  getters: {
    // saleProducts: state => {
    //   let saleProducts = state.products.map(p => {
    //     return {
    //       name: '**' + p.name + '**',
    //       price: p.price * 0.5
    //     }
    //   });
    //   return saleProducts;
    // }
  },
  mutations: { // mutation 必须同步执行, 如要异步请用actions, actions基于mutations
    // reducePrice: (state, amount) => {
    //   state.products.forEach(p => {
    //     p.price -= amount;
    //   })
    // }
    editArticle: (state, article) => {
      state.currentArticle = article;
    },
    resetArticle: (state) => {
      state.currentArticle = {
        title: '',
        content: '',
        type: '',
        category: ''
      };
    }
  },
  actions: {
    // 以下通过ES6参数解构简化代码...其实也没差多少, 第一个参数是context
    // reducePriceAction: ({commit}, payload) => {
    //   setTimeout(function () {
    //     commit('reducePrice', payload) // 激活
    //   }, 1000)
    // }
  }
});
