// Symbol.iterator属性
let arr = ['a', 'b', 'c']
let iter = arr[Symbol.iterator]()
iter.next()                                 // { value: 'a', done: false }
iter.next()                                 // { value: 'b', done: false }
iter.next()                                 // { value: 'c', done: false }
iter.next()                                 // { value: undefined, done: true }

// 解构赋值时，会默认调用Symbol.iterator方法
let set = new Set().add('a').add('b').add('c')
let [x,y] = set                             // x='a'; y='b'
let [first, ...rest] = set                  // first='a'; rest=['b','c']

// 扩展运算符（...）也会调用默认的 Iterator 接口
var str = 'hello';
[...str]                                    // ['h','e','l','l','o']
let arr = ['b', 'c'];
['a', ...arr, 'd']                          // ['a', 'b', 'c', 'd']

// yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口
let generator = function* () {
    yield 1;
    yield* [2,3,4];
    yield 5;
  };
var iterator = generator();
iterator.next()                             // { value: 1, done: false }
iterator.next()                             // { value: 2, done: false }
iterator.next()                             // { value: 3, done: false }
iterator.next()                             // { value: 4, done: false }
iterator.next()                             // { value: 5, done: false }
iterator.next()                             // { value: undefined, done: true }

// Generator实现Symbol.iterator方法
let myIterable = {
[Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
}
}
console.log([...myIterable])                // [1, 2, 3]
// 或者采用下面的简洁写法
let obj = {
* [Symbol.iterator]() {
    yield 'hello';
    yield 'world';
}
};

for (let x of obj) {
console.log(x);                             // "hello", "world"
}

// 遍历对像
//方案一
for (var key of Object.keys(someObject)) {
    // console.log(key + ': ' + someObject[key]);
}
//方案二
function* entries(obj) {
for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
}
}
for (let [key, value] of entries(obj)) {
    // console.log(key, '->', value);       // a -> 1， b -> 2，c -> 3
}
