import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard/index.vue"),
  },
  {
    path: "/*",
    component: () => import("../views/error/404"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
