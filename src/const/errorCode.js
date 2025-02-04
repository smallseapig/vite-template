/**
 * 网络请求错误码映射表
 */

export default {
  "000": "操作太频繁，请勿重复请求",
  401: "登录已过期，请重新登录",
  403: "当前操作没有权限",
  404: "资源不存在",
  417: "未绑定登录账号，请使用密码登录后绑定",
  423: "演示环境不能操作，如需了解联系冷冷",
  426: "用户名不存在或密码错误",
  428: "验证码错误,请重新输入",
  429: "请求过频繁",
  479: "演示环境，没有权限操作",
  503: "服务器繁忙，请刷新页面重试！",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
  default: "系统未知错误,请反馈给管理员"
};
