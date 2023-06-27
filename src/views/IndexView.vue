<template>
  <div class="w-screen h-screen overflow-hidden">
    <ul class="flex">
      <li
        v-for="item in menu"
        :key="item.id"
        v-on:click="toggleMenu(item.name)"
        class="mx-4 cursor-pointer"
        v-bind:class="{ active: item.name === activeMenuItem }"
      >
        {{ item.name }}
      </li>
    </ul>
    <ul class="flex flex-wrap">
      <li v-for="item in playlists" class="w-[200px]" :key="item.id">
        <div class="w-[200px] h-[200px] rounded overflow-hidden">
          <img :src="item.coverImgUrl" class="w-[200px] h-[200px]" alt="" />
        </div>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { fetchPlaylistHot, fetchPlaylists } from '@/request/index';
export default {
  data() {
    return {
      menu: [],
      activeMenuItem: '华语',
      playlists: [],
    };
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
    },
  },
  async created() {
    const res = await fetchPlaylistHot().catch((err) => console.log(err));
    this.menu = res.data.tags;
  },
  watch: {
    activeMenuItem: {
      // 指定数据变化的回调函数
      // async() { await + promise }
      async handler(newCat) {
        const res = await fetchPlaylists(newCat);
        this.playlists = res.data.playlists;
        // fetchPlaylists(newCat).then((res) => {
        //   this.playlists = res.data.playlists;
        // });
      },
      // 执行配置：立即执行
      immediate: true,
    },
  },
};
</script>
<style>
.active {
  color: red;
}
</style>
