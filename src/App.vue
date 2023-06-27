<template>
  <div class="w-screen h-screen">
    <a href="#IndexView">IndexView</a><br />
    <a href="#HomeView">HomeView</a><br />
    <a href="#MineView">MineView</a><br />
    <IndexView v-if="visibleView === 'IndexView'" />
    <HomeView v-else-if="visibleView === 'HomeView'" />
    <MineView v-else-if="visibleView === 'MineView'" />
  </div>
</template>
<script>
import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView.vue';
export default {
  components: { IndexView, HomeView },
  data() {
    return {
      visibleView: 'IndexView',
    };
  },
  beforeCreate() {
    window.onhashchange = () => {
      this.visibleView = location.hash.replace('#', '');
      console.log(this.visibleView);
    };
  },
  created() {
    window.vm = this;
  },
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
