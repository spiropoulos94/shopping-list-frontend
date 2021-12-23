import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/auth/Login";
import Signup from "@/views/auth/Signup";
import Home from "@/views/Home";
import NotFound from "@/components/NotFound";
import store from "@/store";

Vue.use(VueRouter);

// const store.state.user !== null = store.state.user;

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter(to, from, next) {
      if (store.state.userIsLoggedIn) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter(to, from, next) {
      if (store.state.userIsLoggedIn) {
        next();
      } else {
        next("/login");
      }
    },
  },

  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "*",
    component: NotFound,
    beforeEnter(to, from, next) {
      if (store.state.userIsLoggedIn) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
