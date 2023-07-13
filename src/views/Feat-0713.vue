<template>
  <div class="w-screen h-screen bg-orange-200">
    <h1>Feat_07.13</h1>
    <h2>top</h2>
    <router-view />
    <h2>bootom</h2>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route);
  },
};
</script>
