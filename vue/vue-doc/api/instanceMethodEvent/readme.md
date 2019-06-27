# 实例方法/事件
## $on(event, callback)
- 监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
vm.$on('test', function (msg) {
  console.log(msg)
})
vm.$emit('test', 'hi')
// => "hi"
## $once(event, callback)
- 监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。
## $off([event, callback])
- 移除自定义事件监听器;如果没有提供参数，则移除所有的事件监听器;如果只提供了事件，则移除该事件所有的监听器；如果同时提供了事件与回调，则只移除这个回调的监听器。
## $emit(eventName, [...args])
- 触发当前实例上的事件。附加参数都会传给监听器回调。
