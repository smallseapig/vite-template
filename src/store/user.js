import { defineStore } from "pinia";
import config from "@/config";

export default defineStore("user", {
  state: () => ({
    token: null, // 用户 token
    userInfo: null // 用户信息
  }),
  getters: {
    // 获取 token
    getToken(state) {
      // 顺序：store || sessionStorage || config || ""
      let storageToken = sessionStorage.getItem(config.SESSION_KEY_TOKEN);
      storageToken = storageToken ? JSON.parse(storageToken).data : undefined
      const token = state.token || storageToken || config.TEMP_TOKEN || "";
      this.token = token;
      return token;
    },
    // 获取用户信息
    getUserInfo(val) {
      this.userInfo = val;
    }
  },
  actions: {
    // 设置 token
    setToken(val) {
      this.token = val;
    },
    // 设置用户信息
    setUserInfo(val) {
      this.userInfo = val;
    }
  }
});
