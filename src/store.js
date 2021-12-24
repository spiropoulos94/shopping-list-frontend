import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    items: [],
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
      state.items = [];

      router.replace("/login");
    },
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
      state.userIsLoggedIn = true;
    },
    addItem(state, item) {
      state.items.push(item);
    },
    setItems(state, newItems) {
      state.items = newItems;
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
    items(state) {
      return state.items;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
