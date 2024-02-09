import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import LandingPage from "../views/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
  {
    path: "/LandingPage",
    name: "LandingPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LandingPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
