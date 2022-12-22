import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home/",
      name: "home1",
      component: HomeView,
    },
    {
      path: "/user/",
      name: "user_index",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/user/login/",
      name: "login_index",
      component: () => import("../views/user/account/LoginView.vue"),
    },
    {
      path: "/user/register/",
      name: "register_index",
      component: () => import("../views/user/account/RegisterView.vue"),
    },
    {
      path: "/game/",
      name: "game_index",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/pk/",
      name: "pk_index",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/bot/",
      name: "bot_index",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/ranklist/",
      name: "rank_list",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/record/",
      name: "record_list",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/404/",
      name: "error_notfound",
      component: () => import("../views/error/NotFoundView.vue"),
    },
  ],
});

export default router;
