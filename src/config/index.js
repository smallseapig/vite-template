/**
 * 项目静态配置
 */
import { routerWhiteList } from "@/const/whiteList";
import superRoot from "./superRoot";

export default {
  env: import.meta.env.MODE, // 当前应用的运行模式，dev | sit | production
  baseURL: import.meta.env.VITE_BASE_URL, // 当前应用的 api 地址
  routerWhiteList: routerWhiteList, // 无权限也可以访问的页面

  SESSION_KEY_TOKEN: `token`, // 存储用户 token 的 key
  SESSION_KEY_USERINFO: `userInfo`, // 存储用户信息的 key

  ...superRoot // TODO，仅用于开发，生产环境需要删除
};
