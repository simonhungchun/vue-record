import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import MineView from '@/views/MineView.vue';
import Drawer from '@/components/Drawer.vue';
import Switch from '@/components/Switch.vue';
Vue.component('v-switch', Switch);
Vue.component('MineView', MineView);
Vue.component('Icon', Icon);
Vue.component('Drawer', Drawer);
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
