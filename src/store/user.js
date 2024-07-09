import { defineStore } from "pinia";
import config from "@/config";

export default defineStore("user", {
  state: () => ({
    token: null, // 用户 token
    userInfo: null // 用户信息
  }),
  getters: {
    getToken(state) {
      // 顺序：store || sessionStorage || config || ""
      const token = state.token || JSON?.parse(sessionStorage.getItem(config.SESSION_KEY_TOKEN))?.data || config.TEMP_TOKEN || "";
      this.token = token;
      return token;
    }
  },
  actions: {
    login() {
      return new Promise((resolve, reject) => {
        // 存储到 store
        this.token = res?.data?.token;
        sessionStorage.setItem(config.SESSION_KEY_TOKEN, JSON.stringify({ data: this.token, expire: 0 }));
        resolve();
      });
    },
    // 设置用户 token
    setToken(val) {
      this.token = val;
    },
    // 设置用户信息
    setUserData(val) {
      this.userInfo = val;
    },
    // 退出登录，清空用户 token 和用户信息
    logout() {
      this.token = null;
      this.userInfo = null;

      sessionStorage.removeItem(config.SESSION_KEY_TOKEN);
    }
  }
});
