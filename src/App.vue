<template>
  <div class="w-screen h-screen">
    <IndexView v-if="visible" />
    <HomeView v-else />
  </div>
</template>
<script>
import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView.vue';
export default {
  components: { IndexView, HomeView },
  data() {
    return {
      visible: false,
    };
  },
  created() {
    window.vm = this;
  },
};
</script>
