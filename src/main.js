import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import Vuex from "vuex";
import "es6-promise/auto";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
