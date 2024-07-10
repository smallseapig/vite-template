import { createApp } from "vue";
import App from "@/App.vue";

// 全局样式
import "@/style.less";

// 配置文件
import config from "@/config";

// 路由模块
import router from "@/router";

// 状态管理模块
import { createPinia } from "pinia";
import useCommonStore from "@/store/common";

// 创建应用实例
const app = createApp(App);
const pinia = createPinia();
app.use(router);
// 先注册 pinia 再导入其他文件，防止有文件提前使用 pinia
app.use(pinia);

// 写入配置
const commonStore = useCommonStore();
commonStore.setConfig(config);

// 引入工具方法

// 全局方法挂载

// 应用挂载
app.mount("#app");
