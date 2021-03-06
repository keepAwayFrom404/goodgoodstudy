# 组合
## parent
- 指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
- 节制地使用 $parent 和 $children - 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信.
## mixins
- mixins 选项接受一个混入对象的数组。这些混入实例对象可以像正常的实例对象一样包含选项，他们将在 Vue.extend() 里最终选择使用相同的选项合并逻辑合并。
- Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。
## extends
- Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。这和 mixins 类似。
## provide/inject
- provide 和 inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。
- 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
- provide 选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。在该对象中你可以使用 ES2015 Symbols 作为 key，但是只在原生支持 Symbol 和 Reflect.ownKeys 的环境下可工作。
- inject 选项应该是一个字符串数组，或一个对象，对象的 key 是本地的绑定名，value 是：在可用的注入内容中搜索用的 key (字符串或 Symbol)，或一个对象，该对象的：from 属性是在可用的注入内容中搜索用的 key (字符串或 Symbol)default 属性是降级情况下使用的 value.
- provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。