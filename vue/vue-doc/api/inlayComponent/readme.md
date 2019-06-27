# 内置组件
## component
- 渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。
## transition
- <transition> 元素作为单个元素/组件的过渡效果。<transition> 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在检测过的组件层级中。
## transition-group
- <transition-group> 元素作为多个元素/组件的过渡效果。<transition-group> 渲染一个真实的 DOM 元素。默认渲染 <span>，可以通过 tag 属性配置哪个元素应该被渲染。
- 注意，每个 <transition-group> 的子节点必须有 独立的 key ，动画才能正常工作.
## keep-alive
- props:include(字符串或者正则，只有名称匹配的组件才会被缓存)，exclude(任何名称匹配的组件都不会缓存)，max（数字，最多可以缓存多少个实例）。
- <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
- 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
- 注意，<keep-alive> 是用在其一个直属的子组件被开关的情形。如果你在其中有 v-for 则不会工作。如果有上述的多个条件性的子元素，<keep-alive> 要求同时只有一个子元素被渲染。
- <keep-alive> 不会在函数式组件中正常工作，因为它们没有缓存实例。
## slot
- <slot> 元素作为组件模板之中的内容分发插槽。<slot> 元素自身将被替换。