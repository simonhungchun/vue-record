<template>
  <div class="border-[1px]">
    <div class="flex justify-between items-center px-[12px] box-border">
      <div class="flex items-center">
        <p>{{ label }}</p>
        <Icon icon="ep:arrow-right" />
      </div>
      <Icon icon="ant-design:more-outlined" />
    </div>
    <div ref="wrapper" class="wrapper">
      <div
        class="flex"
        :style="{ width: `${34 * $slots.default?.length + 2}vw` }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
let bs = null;
export default {
  mounted() {
    bs = new BScroll(this.$refs.wrapper, {
      scrollY: false,
      scrollX: true,
    });
  },
  updated() {
    bs.refresh();
  },
  props: {
    label: {
      required: true,
      type: String,
    },
  },
};
</script>
