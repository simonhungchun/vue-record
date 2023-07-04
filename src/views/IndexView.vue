<template>
  <div class="w-screen h-screen overflow-hidden">
    <h1 @click="increase">Index view{{ count }}</h1>
    <div
      ref="wrapper"
      class="wrapper h-[200px] border-[1px] border-[red] box-border overflow-hidden"
    >
      <div>
        <h1>00000001</h1>
        <h1>00000002</h1>
        <h1>00000003</h1>
        <h1>00000004</h1>
        <h1>00000005</h1>
        <h1>00000006</h1>
        <h1>00000007</h1>
        <h1>00000008</h1>
        <h1>00000009</h1>
        <h1>00000010</h1>
        <h1>00000011</h1>
        <h1>00000012</h1>
        <h1>00000013</h1>
        <h1>00000014</h1>
        <h1>00000015</h1>
        <h1>00000016</h1>
        <h1>00000017</h1>
        <h1>00000018</h1>
        <h1>00000019</h1>
        <h1>00000020</h1>
        <h1>00000021</h1>
        <h1>00000022</h1>
        <h1>00000023</h1>
        <h1>00000024</h1>
        <h1>00000025</h1>
        <h1>00000026</h1>
        <h1>00000027</h1>
        <h1>00000028</h1>
        <h1>00000029</h1>
        <h1>00000030</h1>
        <h1>00000031</h1>
        <h1>00000032</h1>
        <h1>00000033</h1>
        <h1>00000034</h1>
        <h1>00000035</h1>
        <h1>00000036</h1>
        <h1>00000037</h1>
        <h1>00000038</h1>
        <h1>00000039</h1>
        <h1>00000040</h1>
        <h1>00000041</h1>
        <h1>00000042</h1>
        <h1>00000043</h1>
        <h1>00000044</h1>
        <h1>00000045</h1>
        <h1>00000046</h1>
        <h1>00000047</h1>
        <h1>00000048</h1>
        <h1>00000049</h1>
        <h1>00000050</h1>
        <h1>00000051</h1>
        <h1>00000052</h1>
        <h1>00000053</h1>
        <h1>00000054</h1>
        <h1>00000055</h1>
        <h1>00000056</h1>
        <h1>00000057</h1>
        <h1>00000058</h1>
        <h1>00000059</h1>
        <h1>00000060</h1>
        <h1>00000061</h1>
        <h1>00000062</h1>
        <h1>00000063</h1>
        <h1>00000064</h1>
        <h1>00000065</h1>
        <h1>00000066</h1>
        <h1>00000067</h1>
        <h1>00000068</h1>
        <h1>00000069</h1>
        <h1>00000070</h1>
        <h1>00000071</h1>
        <h1>00000072</h1>
        <h1>00000073</h1>
        <h1>00000074</h1>
        <h1>00000075</h1>
        <h1>00000076</h1>
        <h1>00000077</h1>
        <h1>00000078</h1>
        <h1>00000079</h1>
        <h1>00000080</h1>
        <h1>00000081</h1>
        <h1>00000082</h1>
        <h1>00000083</h1>
        <h1>00000084</h1>
        <h1>00000085</h1>
        <h1>00000086</h1>
        <h1>00000087</h1>
        <h1>00000088</h1>
        <h1>00000089</h1>
        <h1>00000090</h1>
        <h1>00000091</h1>
        <h1>00000092</h1>
        <h1>00000093</h1>
        <h1>00000094</h1>
        <h1>00000095</h1>
        <h1>00000096</h1>
        <h1>00000097</h1>
        <h1>00000098</h1>
        <h1>00000099</h1>
        <h1>00000100</h1>
      </div>
    </div>
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
import BScroll from '@better-scroll/core';
import store from '@/store';
export default {
  mounted() {
    // new BScroll('.wrapper');
    // new BScroll(document.querySelector('.wrapper'));
    // ref + $refs 获取页面上的组件、DOM节点
    new BScroll(this.$refs.wrapper);
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
  data() {
    return {
      menu: [],
      activeMenuItem: '华语',
      playlists: [],
    };
  },
  methods: {
    increase: store.mutations.increase,
    toggleMenu(name) {
      this.activeMenuItem = name;
    },
  },
  async created() {
    console.log(this.$route.params.id);
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
