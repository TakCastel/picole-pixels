import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showRules: !localStorage.getItem('picole_pixels_rules_understood'),
    glou: [
      // All glou dates
    ]
  },
  mutations: {
    INCREMENT_GLOU (state, newValue) {
      state.glou.push(newValue)
    },

    UNDERSTAND_RULES (state) {
      state.showRules = false
    }
  },
  actions: {
    userDrink ({ commit }, newValue) {
      commit('INCREMENT_GLOU', newValue)
    },

    userUnderstandRules ({ commit }) {
      commit('UNDERSTAND_RULES')
      localStorage.setItem('picole_pixels_rules_understood', true)
    }
  }
})
