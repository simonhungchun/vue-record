import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import MineView from '@/views/MineView.vue';
Vue.component('MineView', MineView);
Vue.component('Icon', Icon);
// vm就是根实例 root 具备el
// 但是其他实例不具备
// 组件的嵌套 A组件出现在B组件的template中 A是B的子组件
// 如果一个组件没有父组件 则说明它是root组件
/*
组件树
  root
    App
      IndexView
      HomeView
*/
// vm.$parent 获取父组件
// vm.$children 获取子组件
// vm.$root 获取根组件
// 全局组件：注册一次（在实例化root之前） 全局使用
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 实例已经创建 但是实例上的模板还没有渲染
  created() {
    console.log(this.$parent); // undefined
    console.log(this.$children); // [App]
  },
  // 当前组件的template已经渲染到页面上了
  mounted() {
    console.log(this.$children[0].$children);
  },
});
// 组件分类：
// 从功能上分：页面组件 业务组件
// 从来源上分：内置组件 第三方组件 自定义组件
// 从作用范围分：局部组件（引入文件、注册组件、使用标签） 全局组件(使用Vue.component来注册的)
