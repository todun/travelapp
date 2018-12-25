import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '成都'
try {
  if (localStorage.city) {
    defaultCity = localStorage.getItem('city')
  }
} catch (error) { }

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        localStorage.setItem('city', city)
      } catch (error) { }
    }
  }
})
