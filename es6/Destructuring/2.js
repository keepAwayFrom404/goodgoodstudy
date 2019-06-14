// 对象解构，如果变量名与属性名不一致，必须写成下面这样
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz                                                             // "aaa"
let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f                                                               // 'hello'
l                                                               // 'world'

