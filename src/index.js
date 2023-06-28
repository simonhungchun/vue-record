import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import MineView from '@/views/MineView.vue';
Vue.component('MineView', MineView);
Vue.component('Icon', Icon);
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  created() {
    console.log(this.$parent); // undefined
    console.log(this.$children); // [App]
  },
  mounted() {
    console.log(this.$children[0].$children);
  },
});
// 组件：可复用性、可维护性
