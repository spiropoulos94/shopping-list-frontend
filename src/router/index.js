import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Home from "@/components/Home";

Vue.use(VueRouter);

const shouldRedirect = true;

const routes = [
  {
    path: "/",
    beforeEnter(to, from, next) {
      //   if (store.state.user_data !== null) {  // edw vale to condition
      if (shouldRedirect) {
        // edw vale to condition
        next();
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
    path: "/",
    name: "home",
    component: Home,
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
