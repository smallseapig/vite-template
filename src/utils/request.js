import axios from "axios";
import errorCode from "@/const/errorCode";
import config from "@/config";
import useCommonStore from "@/store/common";
import useUserStore from "@/store/user";

const commonStore = useCommonStore();
const userStore = useUserStore();

/**
 * 初始化并获得 axios 请求实例
 * @param {object} options 请求默认配置
 * @param {string} [options.baseURL] 默认请求地址
 * @param {string} [options.token] 凭证
 * @returns Promise 请求实例
 */
const service = options => {
  const request = axios.create({
    baseURL: options.TEMP_BASE_URL || options.baseURL || "/api",
    method: "post",
    headers: { "Content-Type": "application/json" },
    withCredentials: false, // 跨域请求时是否需要使用凭证
    timeout: 30000 // 请求超时时间
  });

  // 请求拦截
  request.interceptors.request.use(
    httpConfig => {
      // ----- 配置 token -----
      if (!httpConfig.headers.Authorization) {
        httpConfig.headers.Authorization = userStore.getToken;
      }
      return httpConfig;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // 响应拦截
  request.interceptors.response.use(
    response => {
      const { status: statusCode, data: responseData } = response;
      let errMsg = "";
      if (statusCode === 200) {
        if (responseData.code !== 0) {
          errMsg = responseData.msg;
        }
      } else {
        errMsg = errorCode?.[statusCode] || errorCode.default;
      }

      if (errMsg) console.error(errMsg);

      return responseData;
    },
    error => {
      const { status: statusCode, statusText, data } = error.response ?? {};
      const errorMsg = data?.msg || errorCode?.[statusCode] || statusText || error?.message || errorCode.default;

      if (!error.config?.customConfig?.noToast) console.error(errorMsg);

      return Promise.reject(error);
    }
  );

  return request;
};

// 初始化请求实例
const request = service(config);
commonStore.setReq(request);
export default request;
