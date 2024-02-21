import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import LandingPage from "../views/LandingPage.vue";
import MyProfile from "../views/MyProfile.vue";
import Kalendar from "../views/Kalendar.vue";

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
    path: "/",
    name: "LandingPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LandingPage.vue"),
  },
  {
    path: "/MyProfile",
    name: "MyProfile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyProfile.vue"),
  },
  {
    path: "/Kalendar",
    name: "Kalendar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Kalendar.vue"),
  },
  {
    path: "/Tasks",
    name: "Tasks",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tasks.vue"),
  },
  {
    path: "/NewTask",
    name: "NewTask",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewTask.vue"),
  },
  {
    path: "/Zdravlje",
    name: "Zdravlje",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Zdravlje.vue"),
  },
  {
    path: "/Prehrana",
    name: "Prehrana",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Prehrana.vue"),
  },
  {
    path: "/Aktivnosti",
    name: "Aktivnosti",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Aktivnosti.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
