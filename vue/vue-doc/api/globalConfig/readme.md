# vue API 汇总
## 全局配置：Vue.config是一个对象，包含Vue的全局配置。
1. silent: type(Boolean);default(false);Vue.config.silent = true;取消所有Vue的日志和警告。
2. optionMergeStrategies: type({[key: string]: Function});default({});Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  // 返回合并后的值
};自定义合并策略，参数为父实例、子实例、Vue实例上下文。
3. devtools: type(Boolean);default(true,生产为false);// 务必在加载 Vue 之后，立即同步设置以下内容Vue.config.devtools = true;配置是否允许开发者工具检查代码。
4. ignoredElements：type(Array<string | RegExp>);default([]);Vue.config.ignoredElements = ['my-custom-web-component'// 用一个 `RegExp` 忽略所有“ion-”开头的元素]。
5. keyCodes: type([key:string]:number|Array<number>);default({});Vue.config.keyCodes = {v:86,kebab-case用双引号扩起来}。
6. performance: type(Boolean);default(false);设置为true以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API 的浏览器上。
7. productionTip: type(Boolean);default(true);设置为 false 以阻止 vue 在启动时生成生产提示。
