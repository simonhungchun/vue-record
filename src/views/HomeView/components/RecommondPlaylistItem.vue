<template>
  <div>
    <div
      class="w-[32vw] h-[32vw] bg-cover bg-no-repeat"
      :style="`background-image: url(${source.uiElement.image.imageUrl});`"
    ></div>
    <div>{{ source.uiElement.mainTitle.title }}</div>
    <h5>{{ count }}</h5>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
    };
  },
  // $attrs
  // $props (被代理了的)
  // 在组件封装属性时我们可选的属性类型：attr属性、prop属性
  // 其中两者都可以把数据从父组件传递到子组件
  // 两者区别：
  //   attr属性开箱即用 不需要额外配置 但是使用略显繁琐 而且不具备属性值类型检测等功能
  //   prop属性需要现在对应组件中使用props配置项先行配置才可使用 使用简单 具备属性值类型检测等功能
  // props: ['source'],
  props: {
    source: {
      // 属性值的类型，目前类型用对应数据的构造函数表达，如果约束为多种类型用数组表达
      type: Object,
      // 是否必须传递
      required: true,
    },
    count: {
      default: 1,
      // 自定义验证器
      validator(value) {
        return [1, 2, 3].includes(value);
      },
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>
