# vuex概念
- vuex状态存储是响应式的
- 你不能直接改变store里的状态，唯一途径是显示的提交（commit）mutation，为了更好的追踪变化。
## state
- 数据源
## getter
- 从state当中派生出来的计算属性,可返回一个函数对getter传参
## mutation
- 修改state的唯一方式
- 使用常量替代 mutation 事件类型，同时将这些常量放在单独的文件中可以让你的代码和作者对整个 app 包含的 mutation 一目了然
- Mutation 必须是同步函数
## action
- action提交的是mutation而不是直接改变状态
- 可以包含任何异步操作
## modules
- 在action中局部状态通过context.state暴露，根结点状态则通过context.rootState暴露
