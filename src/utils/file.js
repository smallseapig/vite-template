/**
 * 文件操作方法
 */
import { Notify } from "@opentiny/vue";

// blob 文件下载
export const downloadFile = (res, fileName) => {
  // 需要满足响应格式为 blob，防止出现特殊类型数据。并且文件大小不为 0
  if (res?.config?.responseType === "blob" && res?.data?.size != 0) {
    // 转化 blob 对象
    const blob = new Blob([res.data]);

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // 模拟点击链接来触发下载
    document.body.appendChild(link);
    link.click();

    // 下载完成后，撤销 Blob URL
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
  } else {
    Notify({
      type: "error",
      message: "发生未知错误",
      position: "top-right"
    });
  }
};
