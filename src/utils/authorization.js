/**
 * 登录授权
 */
import config from "@/config";
import useUserStore from "@/store/user";
import userApi from "@/api/user/user";

const userStore = useUserStore();

// 登录，获取 token 和用户信息
export const login = userInfo => {
  return new Promise((resolve, reject) => {
    userApi
      .login(userInfo)
      .then(res => {
        // 存储到 store 和 sessionStorage
        const { authorization: token, userInfo } = res?.data ?? {};
        if (token) {
          sessionStorage.setItem(config.SESSION_KEY_TOKEN, JSON.stringify({ data: token, expire: 0 }));
          userStore.setToken(token)
        }
        if (userInfo) {
          sessionStorage.setItem(config.SESSION_KEY_USERINFO, JSON.stringify(userInfo));
          userStore.setUserInfo(userInfo)
        }
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 退出登录，清空 token 和用户信息
export const logout = () => {
  // 清空 store 和 sessionStorage
  userStore.setToken(null);
  userStore.setUserInfo(null);
  sessionStorage.removeItem(config.SESSION_KEY_TOKEN);
  sessionStorage.removeItem(config.SESSION_KEY_USERINFO);
};
