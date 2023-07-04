// 数据仓库对象（vue插件）
let Vue = null;
let store = null;
export const mapMutations = (mutationKeys = []) => {
  return mutationKeys.reduce((prev, key) => {
    prev[key] = store.mutations[key];
    return prev;
  }, {});
};
export const mapState = (stateKeys = []) => {
  // let o = {};
  // for (let key of stateKeys) {
  //   o[key] = function () {
  //     return store.state[key];
  //   };
  // }
  // return o;
  return stateKeys.reduce((prev, key) => {
    prev[key] = function () {
      return store.state[key];
    };
    return prev;
  }, {});
};
export default {
  Store: class {
    constructor({ state = {}, mutations = {} }) {
      this.state = Vue.observable(state);
      let o = {};
      for (let key in mutations) {
        o[key] = () => {
          mutations[key](this.state);
        };
      }
      this.mutations = o;
    }
  },
  install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
      created() {
        if (!this.$parent) {
          Vue.prototype.$store = this.$options.store;
          store = this.$options.store;
        }
      },
    });
  },
};
