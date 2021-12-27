import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    lists: [],
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
      state.lists = [];

      router.replace("/login");
    },
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
      state.userIsLoggedIn = true;
    },
    addList(state, list) {
      state.lists.push(list);
    },
    setLists(state, newLists) {
      state.lists = newLists;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    userName(state) {
      return state.user.name;
    },
    token(state) {
      return state.token;
    },
    userIsLoggedIn(state) {
      return state.userIsLoggedIn;
    },
    lists(state) {
      return state.lists;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
