// 1. 数组的解构赋值，解构不成功，变量的值就等于undefined
let a = 1;
let b = 2;
let c = 3;
// 等价于下面代码
let [a, b, c] = [1, 2, 3];

// Set解构
let [x,y,z] = new Set(['a','b','c'])

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
function f() {
    console.log('aaa');
}
let [x = f()] = [1];                                                // x = 1

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [x = 1, y = x] = [];                                            // x=1; y=1
let [x = 1, y = x] = [2];                                           // x=2; y=2
let [x = 1, y = x] = [1, 2];                                        // x=1; y=2
let [x = y, y = 1] = [];                                            // ReferenceError: y is not defined,x用y做默认值时，y还没有声明


