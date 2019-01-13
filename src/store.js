import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    glou: 0,
  },
  mutations: {
    drink(state) {
      state.glou += 1;
    },
  },
  actions: {

  },
});
