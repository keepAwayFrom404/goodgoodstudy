let a = 1;
a.name = 2
// 参数传值
function addTen(num) {
  num+=10
  return num
}
let count = 20
let result = addTen(count)
// console.log(count)
// console.log(result)
function setName(obj) {
  obj.name = 'lee'
  obj = null
}
const person = new Object()
setName(person)
// console.log(person)
// 类型检测
console.log(typeof function() {})