// 函数结构使用默认值
function move({x = 0, y = 0} = {}) {
    return [x, y];
}
move({x: 3, y: 8});                         // [3, 8]
move({x: 3});                               // [3, 0]
move({});                                   // [0, 0]
move();                                     // [0, 0]

// 不一样的结果，下面的代码是对函数参数指定默认值，而不是对x，y
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
move({x: 3, y: 8});                         // [3, 8]
move({x: 3});                               // [3, undefined]
move({});                                   // [undefined, undefined]
move();                                     // [0, 0]