import { createRouter, createWebHistory } from "vue-router";
import Error from "../components/Error/TheError.vue";
import TheGeneral from "../components/General/TheGeneral.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TheGeneral,
    },
    {
      path: "/where",
      name: "where",
      component: Error,
    },
    {
      path: "/what",
      name: "what",
      component: Error,
    },
    {
      path: "/who",
      name: "who",
      component: Error,
    },
    {
      path: "/",
      name: "goBack",
      component: TheGeneral,
    },
  ],
});

export default router;
