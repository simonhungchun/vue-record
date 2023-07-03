<template>
  <div
    class="w-[50px] h-[30px] rounded-[15px]"
    :class="`${value ? 'bg-red-400' : 'bg-black'}`"
    @click="toggle"
  >
    <div
      class="w-[30px] h-[30px] rounded-[15px] bg-white transition-all"
      :class="`${value ? 'translate-x-[20px]' : 'translate-x-0'}`"
    ></div>
  </div>
</template>
<script>
export default {
  // model主要是去配置v-model指令所需要使用的 属性名 和 事件名的
  // model: {
  //   prop: 'value1',
  //   event: 'input1',
  // },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggle() {
      // this.$emit('update:value', !this.value);
      // 触发自身的input1方法
      this.$emit('input', !this.value);
    },
  },
};
</script>
