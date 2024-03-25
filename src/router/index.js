import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

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
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Kalendar",
    name: "Kalendar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Kalendar.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Tasks",
    name: "Tasks",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tasks.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/NewTask",
    name: "NewTask",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewTask.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Zdravlje",
    name: "Zdravlje",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Zdravlje.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Prehrana",
    name: "Prehrana",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Prehrana.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Aktivnosti",
    name: "Aktivnosti",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Aktivnosti.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/RegistracijskaForma",
    name: "RegistracijskaForma",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/RegistracijskaForma.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
