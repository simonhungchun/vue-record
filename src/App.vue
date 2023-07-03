<template>
  <div class="w-screen h-screen">
    <!-- 声明式导航 -->
    <router-link :to="{ path: '/IndexView/123' }">go to index</router-link>
    <!-- <router-link to="/IndexView">go to index</router-link> -->
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    // setTimeout(() => {
    //   // 编程式导航
    //   this.$router.push('/IndexView');
    // }, 10000);
  },
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
