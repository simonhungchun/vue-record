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
    const _keys = key.split(':');
    prev[_keys[1] ?? _keys[0]] = function () {
      return store.state[_keys[0]];
    };
    return prev;
  }, {});
};
export const mapMutations = (keys) => {
  if (!Array.isArray(keys)) return;
  if (!keys.every((key) => typeof key === 'string')) return;
  return keys.reduce((prev, key) => {
    const _keys = key.split(':');
    prev[_keys[1] ?? _keys[0]] = store.mutations[_keys[0]];
    return prev;
  }, {});
};
const getType = (data) => Object.prototype.toString.call(data).slice(8, -1);
export default {
  Store: class {
    constructor(options = {}) {
      this._options = options;
      if (getType(this._options.state) !== 'Object') return;
      this.state = Vue.observable(this._options.state);
      if (getType(this._options.mutations) !== 'Object') return;
      if (
        !Object.values(this._options.mutations).every(
          (item) => typeof item === 'function'
        )
      )
        return;

      /*
      {
        _decrease(state) {
          state.count--;
        },
        decrease() {
          _decrease(store.state)
        }
      }
      */
      // this.mutations = this._options.mutations;
      this.mutations = Object.entries(this._options.mutations).reduce(
        (prev, [key, fn]) => {
          prev[key] = () => fn(store.state);
          return prev;
        },
        {}
      );
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

// const state = { a: 'abc' };

// function fn(state) {
//   console.log(state.a);
// }

// function $fn() {
//   fn(state);
// }

// $fn(); // abc
