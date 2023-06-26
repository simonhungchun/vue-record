// import Vue from 'vue/dist/vue.esm';
import Vue from 'vue';
import './index.css';
import template_index from './index.template';
const vm = new Vue({
  // 挂载节点
  el: '#app',
  // 指令是出现在模板中
  // 模版语法： 指令
  // 模版在一定程度上与html片段非常相似 html + 指令 === template
  // template: '<h1>vuejs,hello!</h1>',
  // template: '<div id="app123">{{msg}}</div>', // => <div id="app123">hello, vuejs!</div>
  // 当我不传递template选项时，存不存在template？如果存在，是什么？
  // 如果不传递template 它就会检查有没有传递el，如果传递，则将el.outHTML获取到并作为template传入
  // el.outHTML是template默认值
  // template取值流程：手动传递的模版 > el.outHTML > undefined
  template: template_index,
  data() {
    return {
      msg: 'hello, vuejs!',
    };
  },
});
