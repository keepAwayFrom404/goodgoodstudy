# 实例方法/数据
## $watch(expOrFn, callback, [options])
- 观察 Vue 实例变化的一个表达式或计算属性函数。回调函数得到的参数为新值和旧值。表达式只接受监督的键路径。对于更复杂的表达式，用一个函数取代。
- 注意：在变异 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变异之前值的副本。
- 选项：deep;为了发现对象内部值的变化，可以在选项参数中指定 deep: true 。注意监听数组的变动不需要这么做。
- 选项：immediate;在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调.
## $set(target, propertyName/index, value)
- 返回的值：设置的值.
- 这是全局 Vue.set 的别名。
## $delete(target, propertyName/index)
- target, propertyName/index