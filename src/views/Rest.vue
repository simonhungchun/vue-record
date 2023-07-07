<template>
  <div>
    <h1 ref="h1" @click="fn">{{ count }}</h1>
    <!-- <h1 @click="() => count++">{{ count }}</h1> -->
    <!-- <h1 @click="count++">{{ count }}</h1> -->
    <button @click="changeAbc">changeAbc</button>
  </div>
</template>
<script>
// data中的数据变化(同步) => 数据对应的视图更新（异步）
// import Vue from 'vue';
export default {
  data() {
    return {
      count: 123,
      abc: 1122,
    };
  },
  methods: {
    fn() {
      this.count = 124;
      this.$nextTick(() => console.log(this.$refs.h1.innerText));
    },
    changeAbc() {
      this.abc = 4321;
      console.log(this.abc);
    },
  },
  updated() {
    console.log('updated');
    // console.log('updated', this.$refs.h1.innerText);
  },
};
</script>
