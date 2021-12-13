import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: true,
  },
  mutations: {
    login(state) {
      state.user = true;
    },
  },
});

export default store;
