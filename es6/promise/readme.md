1. promise 的含义

- 对象的状态不受外接影响
- 一旦状态改变就不会再变，fulfulled 或者 rejected

2. 基本用法

- Promise 是一个构造函数，用来生成 Promise 实例
- 接收一个函数参数，函数有两个函数参数，由 js 引擎提供，不用自己部署，resolve 函数的作用是将对象由 pending 变为完成，reject 相反
- 可以在 then 回调，参数为 resolve 或者 reject 的值
- peomise 创建后会立即执行，但是回调函数会等同步任务执行完成后才执行
- 异步操作的结果返回另一个异步操作，状态由后一个异步操作状态决定
- 调用 resolve 或者 reject 并不会终结 promise 的参数函数执行，，立即执行的 resolve 是在本轮时间循环的末尾执行，总会晚于本轮循环的同步任务，在 resolve 前加 return，后续语句放在 then 中执行

3. Promise.prototype.then

- then 方法返回的是一个新的 promise 实例，可以链式调用

4. Promise.prototype.catch

- 指定发生错误的回调
- 在状态之后抛出错误无效
- promise 的对象错误会冒泡，直到被捕获为止
- promise 错误不会传递到代码外部

5. Promise.prototype.finally

- 指定 Promise 最后状态，
- 回调函数不接受任何参数，无法知道前面的状态，所以里面的操作应该是状态无关的，不依赖 promise 结果

6. Promise.all

- 用于将多个 promise 包装成一个，接收一个 promise 数组（有 iterator 接口就行），数组成员为 promise，如果不是 promise 就会调用 Promise.resolve 转为 promise 实例

7. Promise.race

- 有一个实例状态改变 p 的状态就跟着改变，第一个状态的参数传递给回调函数

8. Promise.resolve

- 将现有对象转为 promise 对象
- 参数分四种情况：参数为一个 promise 实例，原封不动返回这个实例；thenable 对象（有 then 方法的对象），转成 promise 并立即执行 then 方法；不是对象，返回一个新的 promise 对象状态为 resolve；不带参数，返回状态为 resolve 的 promise 实例，在本轮事件循环结束的时候执行，而不是下一轮的开始

9. Promise.reject

- Promise.reject 的参数，会原封不动的作为 reject 的理由，变成后续方法的参数（比如 thenable 对象不会立即调用而是直接返回）

10. 应用

- 加载图片

11. Promise.try

- 解决 promise.resolve.then 在本轮事件循环的末尾执行的问题
