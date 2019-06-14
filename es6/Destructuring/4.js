// 变换变量的值
let x = 1;
let y = 2;
[x, y] = [y, x];                            // x=2,y=1

// 从函数中返回多个值
// 返回一个数组
function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();
// 返回一个对象
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
let { foo, bar } = example();

// 提取json数据
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;    // id=42, status="OK", number=[867, 5309]
  
// 函数参数默认值
function foo({a = 1,b = 2} = {}) {
    console.log(a, b)
}
foo({a: 3, b: 4})

