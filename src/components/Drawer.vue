<template>
  <div @click="clickHandler">
    <transition :name="direction">
      <div
        v-show="visible"
        class="w-screen h-[220px] bg-white absolute z-[999]"
        :style="[drawerContentStyle, { width }]"
      >
        <div>
          <slot name="header">
            <div class="flex justify-between items-center">
              <p>{{ title }}</p>
              <Icon @click.native="closeDrawer" icon="clarity:times-line" />
            </div>
          </slot>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </transition>
    <div
      v-if="visible"
      ref="drawerMask"
      class="bg-black opacity-20 absolute top-0 right-0 bottom-0 left-0 z-[998]"
    ></div>
  </div>
</template>
<script>
export default {
  // 单向数据流（父级通过props传递给子组件的数据 子组件没有权利修改）
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '默认标题',
    },
    direction: {
      type: String,
      default: 'btt',
      validator(direction) {
        return ['ttb', 'btt', 'ltr', 'rtl'].includes(direction);
      },
    },
    width: {
      type: [Number, String],
      default: '80vw',
    },
  },
  // 计算属性
  computed: {
    drawerContentStyle() {
      if (this.direction === 'btt') {
        return {
          width: '100vw',
          left: 0,
          bottom: 0,
        };
      } else if (this.direction === 'ttb') {
        return {
          width: '100vw',
          left: 0,
          top: 0,
        };
      } else if (this.direction === 'ltr') {
        return {
          height: '100vh',
          left: 0,
          top: 0,
        };
      } else if (this.direction === 'rtl') {
        return {
          height: '100vh',
          right: 0,
          top: 0,
        };
      }
    },
  },
  methods: {
    closeDrawer() {
      this.$emit('update:visible', false);
    },
    clickHandler(e) {
      if (e.target === this.$refs.drawerMask) {
        // this.visible = false;
        // 使用vm.$emit给父组件传递数据
        this.closeDrawer();
      }
    },
  },
};
</script>
<style scoped>
.btt-enter,
.btt-leave-to {
  transform: translateY(110%);
}

.btt-enter-active,
.btt-leave-active {
  transition: all ease-in-out 0.5s;
}
.btt-enter-to,
.btt-leave {
  transform: translateY(0);
}
</style>
