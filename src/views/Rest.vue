<!-- <template>
  <div>
    <h1 @click="fn">{{ count }}</h1>
    <button @click="changeAbc">changeAbc</button>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template> -->
<script>
export default {
  // h ===> createElement
  render: function (h) {
    // return h('div', {}, [
    //   h('h1', { on: { click: this.fn } }, [this.count]),
    //   h('button', { on: { click: this.changeAbc } }, ['changeAbc']),
    //   h(
    //     'ul',
    //     {},
    //     this.arr.map((item) => h('li', {}, item))
    //   ),
    // ]);
    // jsx 元素 是js的一种新数据类型
    /*
    h("h1", {
    on: {
      "click": this.fn
    }
  }, [count])
        h("button", {
    on: {
      "click": this.changeAbc
    }
  }, ["changeAbc"])
        h("ul", [this.arr.map(item => h("li", {
    key: item
  }, [item]))])
    */
    return (
      <div>
        <h1 onClick={this.fn}>{this.count}</h1>
        <button onClick={this.changeAbc}>changeAbc</button>
        <ul>
          {this.arr.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  },
  data() {
    return {
      count: 123,
      abc: 1122,
      arr: [1, 2, 3],
    };
  },
  methods: {
    fn() {
      this.count = 124;
      this.$nextTick(() => console.log(this.$refs.h1.innerText));
    },
    changeAbc() {
      this.abc = 4321;
      console.log(this.abc);
    },
    addNewProp() {
      this.a = 1;
    },
  },
  updated() {
    console.log('updated');
  },
  created() {
    window.rest = this;
  },
};
/**
 使用jsx编写render函数的配置步骤：
 1.安装所需的babel相关模块
    "@babel/core": "^7.22.8"
    "@babel/preset-env": "^7.22.7"
    "@vue/babel-plugin-transform-vue-jsx": "^1.4.0"
    "babel-loader": "^9.1.2"
    "@vue/babel-helper-vue-jsx-merge-props": "^1.4.0"
    "@vue/babel-preset-jsx": "^1.4.0"
    "@vue/cli-plugin-babel": "^5.0.8"
  2.在根目录下新建.babelrc（babel.config.js）并写入如下配置：
    {
      "presets": [
        "@vue/cli-plugin-babel/preset",
        [
          "@vue/babel-preset-jsx",
          {
            "injectH": false
          }
        ]
      ]
    }
  3.修改webpack.config.js中的module配置项加入如下配置：
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
  4.编写正确的jsx代码 并编译
 */
</script>
