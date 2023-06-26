import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import indexView from './IndexView.vue';
Vue.component('Icon', Icon);
const vm = new Vue({
  el: '#app',
  render: (h) => h(indexView),
});
