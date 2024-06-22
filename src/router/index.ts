/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/index.vue"),
  },
  {
    path: "/jogadores",
    name: "Jogadores",
    component: () => import("../pages/players.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
