https://juejin.im/post/5cbc0a9cf265da03b11f3505#heading-20
执行栈：因为 js 是单线程的，同一时间只能执行一个方法，于是这些方法被排队在一个单独的地方，就是执行栈，当我们调用一个方法的时候，js 会生成与这个方法对应的执行环境（保存着该方法的私有作用域、上层作用域链、方法的参数、以及这个作用域中定义的变量和 this 的指向）
事件队列：遇到异步任务将其挂起，继续执行其它任务，当一个异步任务返回结果会被加到另一个队列中，就是事件队列，存储着异步任务，每次执行一个任务，执行栈为空检查事件队列将第一个压入执行栈中运行
不同的异步任务被分为宏任务和微任务：

- 宏任务：setTimeout、setInterval、js 整体代码、I/O、事件、postMessage、MessageChannel、setImmediate（node）
- 微任务：Promise.then、MutationObserver、process.nextTick（node）
  在执行宏任务的时候可以插入微任务，在当前微任务没有执行完成之前，不会执行下一个宏任务
  当前执行栈执行完成之后立即先处理所有的微任务队列的事件，然后再去宏任务队列取出一个执行。同一个事件循环中，微任务永远在宏任务之前执行
  异步任务分为宏任务和微任务。宏任务会进入一个队列，微任务会进入另一个队列，且微任务优于宏任务执行。