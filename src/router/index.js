import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "news",
      component: HomeView,
    },
    {
      path: "/sport",
      name: "sport",
      component: () => import("../views/SportView.vue"),
    },
    {
      path: "/finance",
      name: "finance",
      component: () => import("../views/FinanceView.vue"),
    },
  ],
});

export default router;
