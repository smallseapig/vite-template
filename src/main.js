import { createApp } from "vue";
// 全局样式
import "@/style.less";
import App from "@/App.vue";

// 路由模块
import router from "@/router";
// 状态管理模块
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

import useCommonStore from "@/store/common";
// 配置文件
import config from "@/config";
// 引入工具方法

// 先注册 pinia 再导入其他文件，防止有文件提前使用 pinia
app.use(router);
app.use(pinia);

// 写入配置
const commonStore = useCommonStore();
commonStore.setConfig(config);

// 全局方法挂载

app.mount("#app");
