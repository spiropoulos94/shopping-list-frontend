import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/auth/Login";
import Signup from "@/views/auth/Signup";
import Home from "@/views/Home";

Vue.use(VueRouter);

const hasUser = false;

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter(to, from, next) {
      if (hasUser) {
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
      if (hasUser) {
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
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
