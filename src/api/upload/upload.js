import request from "@/api/index";

const basePath = `/dict`;

export default {
  /**
   * 获取分页
   * @param {any} data
   * @returns {Promise}
   */
  page(data) {
    return request({
      url: `${basePath}/search-all`,
      method: 'get',
      data,
    });
  }
};
