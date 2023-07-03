<template>
  <div class="w-screen h-screen">
    <h1>{{ a }}</h1>
    <component :is="currentComponent" />
    <!-- component组件的is属性指向谁就渲染谁 -->
  </div>
</template>
<script>
import router from '@/router';
export default {
  // 混合
  mixins: [router],
  data() {
    return {
      a: 123,
    };
  },
  created() {
    window.vm = this;
  },
  // ...router,
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
