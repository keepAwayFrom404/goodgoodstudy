// 隐式丢失，使用默认绑定
function foo() {
    console.log(this.a)
}
var obj = {
    a: 2,
    foo: foo
}
var bar = obj.foo                           // 函数别名，引用的是foo函数本身
var a = 'opps, global'
bar()