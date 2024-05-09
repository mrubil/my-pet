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
    path: "/DailyTasks",
    name: "DailyTasks",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DailyTasks.vue"),
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
    path: "/RegistrationForm",
    name: "RegistrationForm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegistrationForm.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/EditProfile",
    name: "EditProfile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditProfile.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/EditTask/:id",
    name: "EditTask",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditTask.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/EditPhoto",
    name: "EditPhoto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditPhoto.vue"),
    meta: {
      needsUser: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(
    "Stara ruta",
    from.name,
    "nova ruta",
    to.name,
    "Korisnik:",
    store.currentUser
  );

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
