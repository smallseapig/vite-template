<template>
  <div class="container">
    <div class="cus-fix-middle">
      <button class="btn login-btn" @click="handleLogin">临时登录按钮</button>
      <button class="btn logout-btn" @click="handleLogout">临时登出按钮</button>
      <button class="btn" @click="toUpload">跳转主页</button>
    </div>
  </div>
</template>
<script setup>
import config from "@/config";
import router from "@/router";
import { login, logout } from "@/utils/authorization";
import { Notify } from "@opentiny/vue";

const handleLogin = () => {
  login(config.loginParams).then(res => {
    Notify({
      type: "success",
      title: "登录成功",
      position: "top-right",
      message: res?.data?.authorization
    });
    router.push({ name: "upload" });
  });
};

const handleLogout = () => {
  logout();
  Notify({
    type: "info",
    title: "登出成功",
    position: "top-right"
  });
};

const toUpload = () => {
  router.push({ name: "upload" });
};
</script>
<style lang="less" scoped>
.container {
}

.btn {
  width: 200px;
  height: 100px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 0 10px -5px; // [水平偏移] [垂直偏移] [模糊半径] [扩展半径] [颜色] [inset]
  font-size: 18px;
  cursor: pointer;
  margin: 10px;
}

.login-btn {
  background: #bfa;
}

.logout-btn {
  background: #faa;
}
</style>
