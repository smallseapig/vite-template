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
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import("@/views/ErrorPage/404.vue"),
    meta: { title: "404" }
  }
];

export default [...constantRouterMap];
