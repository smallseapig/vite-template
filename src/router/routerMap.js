// 固定的路由表
const constantRouterMap = [
  {
    path: "/",
    redirect: "/upload"
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("@/views/Upload/index.vue"),
    meta: { title: "upload" }
  },
  {
    path: "/401", // TODO，用于开发时获取 token 的数据页面，生产环境需要删除
    name: "401",
    component: () => import("@/views/401.vue"),
    meta: { title: "401" }
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import("@/views/ErrorPage/404.vue"),
    meta: { title: "404" }
  }
];

export default [...constantRouterMap];
