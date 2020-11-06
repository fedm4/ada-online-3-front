import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mostrarLista: true
  },
  getters: {
    mostrarLista(state): boolean {
      return state.mostrarLista;
    }
  },
  mutations: {
    CHANGE_MOSTRAR_LISTA(state, value: boolean) {
      state.mostrarLista = value;
    }
  },
  actions: {
    changeMostrarLista({commit}, value: boolean) {
      commit("CHANGE_MOSTRAR_LISTA", value);
    }
  },
  modules: {
  }
})
