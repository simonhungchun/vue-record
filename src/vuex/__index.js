// import Vue from 'vue';
// import Vuex from '@/vuex';
// Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {
//     count: 123,
//     msg: 'hello, vuex！',
//   },
//   mutations: {
//     increase(state) {
//       state.count++;
//     },
//   },
// });
// export default store;
let Vue = null;
let store = null;
// 辅助函数mapState
// 通过state中的key 动态生成计算属性的配置对象
// mapState(['count', 'list']);
/**
 {
    count() {
      return store.state.count;
    },
    list() {
      return store.state.list;
    },
  }
*/
export const mapState = (keys) => {
  if (!Array.isArray(keys)) return;
  if (!keys.every((key) => typeof key === 'string')) return;
  return keys.reduce((prev, key) => {
    prev[key] = function () {
      return store.state[key];
    };
    return prev;
  }, {});
};
export default {
  Store: class {
    constructor(options = {}) {
      this._options = options;
      if (
        Object.prototype.toString.call(this._options.state).slice(8, -1) !==
        'Object'
      )
        return;
      this.state = Vue.observable(this._options.state);
    }
  },
  install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
      beforeCreate() {
        if (!this.$parent) {
          Vue.prototype.$store = this.$options.store;
          store = this.$options.store;
        }
      },
    });
  },
};
