<template>
  <div class="w-screen h-screen">
    <!-- 声明式导航 -->
    <router-link :to="{ path: '/IndexView/123' }">go to index</router-link>
    <!-- <router-link to="/IndexView">go to index</router-link> -->
    <router-view />
    <Icon :icon="$route.meta.icon ?? 'ic:baseline-10k'" />
    <router-view
      v-if="$route.meta.visibleNav"
      class="absolute left-0 bottom-0"
      name="nav"
    />
    <!-- $route -->
  </div>
</template>
<script>
export default {
  created() {
    this.$watch('$route', function (route) {
      console.log(route);
    });
    this.$on('hook:beforeDestory', () => {});
  },
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
