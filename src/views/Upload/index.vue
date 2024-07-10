<template>
  <div class="container">
    <div class="cus-fix-middle">
      <button class="btn" @click="getData">获取数据</button>
    </div>
  </div>
</template>
<script setup>
import mrpApi from "@/api/upload/mrp";
import { Notify } from "@opentiny/vue";

const getData = () => {
  mrpApi
    .page({
      current: 1,
      size: 5
    })
    .then(res => {
      if (res.code == 0) {
        console.log(res);
        Notify({
          type: "success",
          position: "top-right",
          message: res?.msg
        });
      }
    });
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
  background: #bfa;
}
</style>
