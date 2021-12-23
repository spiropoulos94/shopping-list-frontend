import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    login(state) {
      state.user = true;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
  },
});

export default store;
