/**
 * TODO 超级管理员配置项，生产环境需要删除
 */

export default {
  // 模拟登录的配置
  loginParams: {
    userAccount: "XXX",
    password: "AAA",
    tenantId: "BBB"
  },

  // 临时 token，绕开验证使用
  TEMP_TOKEN: `XXXAAA`,
  // 临时请求 api 路径，本地调试不知道怎么配置环境变量使用
  TEMP_BASE_URL: ``
};
