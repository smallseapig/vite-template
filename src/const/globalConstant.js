/**
 * 全局常量
 */

export default {
  REQUEST_AUTO: 0, // request 请求根据错误码状态表捕获异常，未匹配则抛出异常
  REQUEST_CATCH: 1, // request 请求根据错误码状态表捕获异常，未匹配则捕获后以默认异常处理
  REQUEST_THROW: 2 // request 请求不捕获异常，自行捕获异常
};
