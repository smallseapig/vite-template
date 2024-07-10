/**
 * 用户管理
 */
import request from "@/api/index";

const basePath = `/mmm`;

export default {
  /**
   * 登录接口，获取 token
   * @param {any} data 接口数据
   * @returns {Promise}
   */
  login(data) {
    return request({
      url: `${basePath}/open-token`,
      data
    });
  }
};
