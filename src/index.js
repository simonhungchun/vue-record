import Vue from 'vue';
import '@/index.css';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
Vue.component('Icon', Icon);
// vm就是根实例 root 具备el
// 但是其他实例不具备
const vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
