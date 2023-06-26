import Vue from 'vue';
import './index.css';
import template_index from './index.template';
import axios from 'axios';
// 页面打开请求自动发送
// 请求回来的数据还要渲染到页面上 （数据驱动视图）
// 数据驱动视图变化的条件：数据必须是响应式数据（data）+ 数据必须通过模板语法绑定到模板中
// vue中this的指向问题：methods中的所有函数（不要箭头函数）的this指向vm（vue的实例）
const vm = new Vue({
  el: '#app',
  template: template_index,
  data() {
    return {
      menu: [],
      activeMenuItem: '',
      playlists: [],
    };
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
      this.fetchPlaylists(name);
    },
    fetchPlaylists(cat) {
      axios
        .get(
          'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist',
          { params: { cat } }
        )
        .then((res) => {
          console.log(res.data.playlists);
          this.playlists = res.data.playlists;
        });
    },
  },
  created() {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot'
      )
      .then((res) => {
        this.menu = res.data.tags;
        return (this.activeMenuItem = this.menu[0].name);
      })
      .then((cat) => this.fetchPlaylists(cat))
      .catch((err) => console.log(err));
  },
});
window.vm = vm;
console.log(vm);
// 以_开头的变量名属性名是私有变量或私用属性，不希望其他人去使用
// 一般情况下：我们在实例化vue传递的配置项 a => $a
// el => $el
// data => $data
// afterInit ==> created
