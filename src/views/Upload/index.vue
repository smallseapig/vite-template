<template>
  <div class="container">
    <button @click="test">点击事件</button>
  </div>
</template>
<script setup>
import upload from '@/api/upload/upload'
const test = () => {
  upload.page({
    current: 1,
    size: 5
  }).then(res => {
    console.log(res);
  })
}
</script>
<style lang="less" scoped>
.container {
  background-color: #bfd;
}
</style>
