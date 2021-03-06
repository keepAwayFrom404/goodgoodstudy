# vue风格指南
## 优先级A的规则：必要的（规避错误）
- 组件名为多个单词
- 组件的data必须返回一个函数，不然所有实例共享data互相影响
- Prop 定义应该尽量详细
- 为v-for设置key
- 永远不要把 v-if 和 v-for 同时用在同一个元素上
- 为组件样式设置作用域，class规范优先于scoped
- 私有属性名以$_yourPluginName_命名，避免冲突

## 优先级B的规则：强烈推荐（增强可读性）
- 只要有能够拼接文件的构建系统，就把每个组件单独分成文件
- 单文件组件的文件名应该始终使用横线连接 (kebab-case)写法
- 应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头
- 只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性
- 和父组件紧密耦合的子组件应该以父组件名作为前缀命名
- 组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾
- 在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的（<my-component/>）——但在 DOM 模板(html)里永远不要这样做
- 对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的(本人全部统一使用kebab-case写法)——但是在 DOM 模板中总是 kebab-case 的
- JS/JSX 中的组件名应该始终是 PascalCase 的，尽管在较为简单的应用中只使用 Vue.component 进行全局组件注册时，可以使用 kebab-case 字符串
- 组件名应该倾向于完整单词而不是缩写
- 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case
- 多个特性的元素应该分多行撰写，每个特性一行
- 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法
- 应该把复杂计算属性分割为尽可能多的更简单的属性
- 非空 HTML 特性值应该始终带引号（本人属性使用双引号）
- 指令缩写 (用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:) 应该要么都用要么都不用（选择使用缩写）

## 优先级C的规则：推荐（将选择和认知成本最小化）
- 组件/实例的选项应该有统一的顺序（只列出常用）
  1.副作用（触发组件外的影响）
    1）el
  2.全局感知（要求组件以外知识）
    1）name
  3.模块依赖（模版内使用的资源）
    1）components
    2）directives
    3）filters
  4.组合（向选项里合并属性）
    1）extends
    2）mixins
  5.接口（组件的接口）
    1）inheritAttrs
    2）model
    3）props/propsData
  6.本地状态（本地的响应式属性）
    1）data
    2）computed
  7.事件（通过响应式事件触发的回调）
    1）watch
    2）生命周期
  8.非响应式的属性（不依赖响应式系统的实例属性）
    1）methods


- 元素 (包括组件) 的特性应该有统一的顺序
  1.定义（提供组件的选项）
    1）is
  2.列表渲染（创建多个变化的相同元素）
    1）v-for
  3.条件渲染（元素是否渲染/显示）
    1）v-if
    2）v-show
  4.渲染方式（改变元素的渲染方式）
    1）v-once
    2）v-pre
  5.全局感知（需要超越组件的知识）
    1）id
  6.唯一的特性（需要唯一值的特性）
    1）ref
    2）key
    3）slot
  7.双向绑定（把绑定和事件结合起来）
    1）v-model
  8.其它特性 (所有普通的绑定或未绑定的特性)
  9.事件（组件事件监听器）
    1）v-on
  10.内容（复写元素的内容）
    1）v-html
    2）v-text
- 单文件组件应该总是让 <script>、<template> 和 <style> 标签的顺序保持一致。且 <style> 要放在最后，因为另外两个标签至少要有一个

## 优先级D的规则：谨慎使用（有潜在危险的模式）
- 如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 <div> 元素)
- 元素选择器应该避免在 scoped 中出现（以后宁愿加类名）
- 应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop
- 应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线