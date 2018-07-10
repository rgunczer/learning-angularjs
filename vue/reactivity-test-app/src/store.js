import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fruits: [],
  },
  mutations: {
    addFruit: ({ fruits }, payload) => {
      fruits.push(payload);
    },
    setSelected: (state, payload) => {
      // state.fruits
      console.log('store setSelected: ' + JSON.stringify(payload));

      for (let i = 0; i < state.fruits.length; ++i) {
        if (state.fruits[i].id === payload.id) {
          state.fruits[i].selected = !state.fruits[i].selected;
        }
      }
    },
  },
  getters: {
    fruits: state => state.fruits,
  },
});
