<template>
  <div class="w-screen h-screen">
    <div class="bg-orange-500 text-[80px] leading-[300px]">MineView</div>
    <button v-on:click="f1($event)" v-on:mouseleave="f2">click1</button>
    <input
      class="border-[1px]"
      type="text"
      placeholder="测试"
      :value="value"
      @input="(e) => (value = e.target.value)"
    />
    <input
      class="border-[1px]"
      type="text"
      placeholder="测试"
      v-model="value"
    />
    <!-- <button v-on="{ click: f1, mouseleave: f2 }">click1</button>
    <a :href="href" id="id"> go to IndexView</a>
    <a v-bind="{ href, id }"> go to IndexView</a> -->
  </div>
</template>
<script>
export default {
  name: 'Mine',
  data() {
    return { href: '#IndexView', id: 'anchor', value: '' };
  },
  methods: {
    // inputHandler(e) {
    //   // console.log(e.target.value);
    //   this.value = e.target.value;
    // },
    f1(e) {
      console.log(e);
    },
    f2() {
      console.log(2);
    },
  },
  created() {
    window.mine = this;
  },
};
</script>
