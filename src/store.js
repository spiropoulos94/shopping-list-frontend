import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    token: null,
    userIsLoggedIn: false,
  },
  mutations: {
    login(state) {
      state.userIsLoggedIn = true;
    },
    logout(state) {
      state.userIsLoggedIn = false;
      state.user = null;
      state.token = null;
      router.replace("/login");
    },
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
      state.userIsLoggedIn = true;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
    userIsLoggedIn(state) {
      return state.userIsLoggedIn;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
