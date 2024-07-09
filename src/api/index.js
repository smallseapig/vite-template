import useUserStore from "@/store/user";
import request from "@/utils/request";

export default data => {
  const userStore = useUserStore();
  return request({
    ...data,
    headers: {
      ...(data.headers || {}),
      Authorization: userStore.getToken
    }
  });
};
