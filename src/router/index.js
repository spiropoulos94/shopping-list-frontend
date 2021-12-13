import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Home from "@/components/Home";

Vue.use(VueRouter);

const hasUser = true;

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/",
    beforeEnter(to, from, next) {
      //   if (store.state.user_data !== null) {  // edw vale to condition
      if (hasUser) {
        // edw vale to condition
        next("/home");
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
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
