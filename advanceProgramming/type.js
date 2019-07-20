let a = 1;
a.name = 2
// 参数传值,对于普通类型就是复制了一个值，对于引用类型，赋值了一份引用地址给参数，参数作为函数内的局部变量，新建同名引用时只是创建了一个新的局部对象，参数传递是值传递
function addTen(num) {
  num += 10
  return num
}
let count = 20
let result = addTen(count)
// console.log(count)
// console.log(result)
function setName(obj) {
  obj.name = 'lee'
  obj = 222
  // console.log(obj,111)
  obj = new Object()
  obj.name = 'jiahua'
  // console.log(obj,222)
}
const person = new Object()
setName(person)
// console.log(person,333)
// console.log(person)
// 类型检测
// console.log(typeof function() {})
function buildUrl() {
  const qs = '?debug=true'
  with(location) {
    const url = herf + qs
  }
  return url
}
// buildUrl()
if (true) {
  let color = 111
}
// console.log(color)
let element = document.getElementById('some_element')
let myObject = new Object()
myObject.element = element
element.someObject = myObject