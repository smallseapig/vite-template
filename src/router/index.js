import { createRouter, createWebHashHistory } from "vue-router";
import routerMap from "./routerMap.js";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_PATH),
  routes: routerMap
});

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  next()
});

export default router;
