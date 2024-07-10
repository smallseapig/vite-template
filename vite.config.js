import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log("mode :>> ", mode);
  console.log("command :>> ", command);
  const env = loadEnv(mode, "env");
  console.log("run on env :>> ", env);
  return {
    plugins: [vue()],
    define: {
      "process.env": { ...process.env }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    base: env.VITE_BASE_PATH ? env.VITE_BASE_PATH + "/" : "./", // 开发或生产环境服务的公共基础路径
    envDir: "env", // 用于加载 .env 文件的目录
    mode: mode
  };
});
