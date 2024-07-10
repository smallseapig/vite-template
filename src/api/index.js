import useUserStore from "@/store/user";
import { service } from "@/utils/request";
import config from "@/config";

const userStore = useUserStore();

export default data => {
  const request = service(config);
  return request({
    ...data,
    headers: {
      ...(data.headers || {}),
      Authorization: userStore.getToken
    }
  });
};
