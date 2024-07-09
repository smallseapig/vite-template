/**
 * 项目静态配置
 */
import { routerWhiteList } from "@/const/whiteList";

export default {
  env: import.meta.env.MODE, // 当前应用的运行模式，dev | sit | production
  baseURL: import.meta.env.VITE_BASE_URL, // 当前应用的 api 地址
  routerWhiteList: routerWhiteList, // 无权限也可以访问的页面

  SESSION_KEY_TOKEN: `token`, // 存储用户 token 的 key
  
  // 临时 token，绕开验证使用
  TEMP_TOKEN: ``,
  TEMP_BASE_URL: `` // 临时请求 api 路径，本地调试不知道怎么配置环境变量使用
};
