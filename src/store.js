/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drinkTree: JSON.parse(localStorage.getItem('drinkTree')) || [
      {
        date: new Date(),
        glou: 0
      }
    ],
  },

  actions: {
    async drink ({ commit, state }, newDrink) {
      const drinkTree = await JSON.parse(localStorage.getItem('drinkTree'))

      if (drinkTree) {
        console.log('retour API: ', drinkTree)

        drinkTree.push(newDrink)
        localStorage.setItem('drinkTree', JSON.stringify(drinkTree))
        
      } else {
        localStorage.setItem('drinkTree', JSON.stringify(state.drinkTree))
      }
      commit('updateDrinkTree', JSON.parse(localStorage.getItem('drinkTree')))
    }
  },
  mutations: {
    updateDrinkTree (state, newDrinkTree) {
      state.drinkTree = newDrinkTree
    },
  },
});
