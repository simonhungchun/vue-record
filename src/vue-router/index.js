let _Vue = null;
/*
  [
    {path: '/a', component: A}, 
    {path: '/b', component: B}, 
    { path: '/c', component: C, children: [
      {
        path: 'd',
        component: D
      }
    ]}
  ]
  /a ==> A
  /b ==> B
  /c ==> C
  /c/d => D
*/
export default class VueRouter {
  constructor(options = {}) {
    if (!options.routes) return;
    this.$options = options;
    this.currentView = _Vue.observable({ value: null });
    this.$route = _Vue.observable({
      path: '',
      component: null,
      params: {},
    });
    this.initRoutes();
    this.initEvent();
    this.registerComponents();
  }
  initEvent() {
    window.addEventListener('hashchange', () => {
      const hashValue = window.location.hash.replace(/^#/, '');
      const [path, params] = hashValue.split('?');
      this.$route.path = path;
      this.$route.params = params
        ? params
            .split('&')
            .map((item) => item.split('='))
            .reduce((prev, [key, value]) => {
              prev[key] = value;
              return prev;
            }, {})
        : {};
      this.currentView.value = this.$routeMap[path] ?? this.$routeMap['*'];
      this.$route.component = this.currentView.value;
    });
    window.location.hash = '#/';
  }
  initRoutes() {
    this.$routeMap = this.$options.routes.reduce(
      (prev, { path, component }) => {
        prev[path] = component;
        return prev;
      },
      {}
    );
  }
  registerComponents() {
    let self = this;
    _Vue.component('router-view', {
      template: '<component :is="getCurrentView"/>',
      computed: {
        getCurrentView() {
          return self.currentView.value;
        },
      },
    });
    _Vue.component('router-link', {
      render(h) {
        return h('a', { href: `#${this.to}` }, this.$slots.default);
      },
      props: {
        to: {
          type: [String, Object],
          required: true,
        },
      },
    });
  }
  push(arg) {
    if (
      !['Object', 'String'].includes(
        Object.prototype.toString.call(arg).slice(8, -1)
      )
    )
      return;
    if (typeof arg === 'string') {
      arg = { path: arg };
    }
    if (!arg['path']) return;
    if (Object.prototype.toString.call(arg.params).slice(8, -1) === 'Object') {
      arg.path = `${arg.path}?${Object.entries(arg.params).reduce(
        (prev, [k, v]) => (prev += `${k}=${v}&`),
        ''
      )}`.replace(/&$/, '');
    }
    window.location.hash = `#${arg.path}`;
  }
  static install(Vue) {
    _Vue = Vue;
    Vue.mixin({
      beforeCreate() {
        if (!this.$parent) {
          Vue.prototype.$router = this.$options.router;
          Vue.prototype.$route = this.$options.router.$route;
        }
      },
    });
  }
}
