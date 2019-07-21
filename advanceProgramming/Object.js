/**
 * Array对象
 */

// console.log([] instanceof Array)
// console.log(Array.isArray([]))
const arrayA = [null, 'bbb', undefined]
// console.log(arrayA.toString())
let arrayB = arrayA.push('ddd')
let arrayC = arrayA.pop()
let arrayD = arrayA.shift()
let arrayE = arrayA.unshift('234', 777)
const arrayF = [0, 1, 5, 5, 10, 15]
// console.log(arrayF.sort((a, b) => b - a))
const colors = ['red', 'green', 'blue']
const colors2 = colors.concat('yellow', ['black', 'brown'])
const colors3 = colors2.slice(-7)
// console.log(colors3)
let remove = colors.splice(0, 1)
remove = colors.splice(1, 1, 'yellow', 'orange')
// console.log(colors)
const obj = {
  name: '111'
}
const testArr = [obj]
// console.log(testArr.indexOf(obj))
const values = [1, 2, 3, 4, 5]
const sum = values.reduce((prev, cur, index, array) => {
  // console.log(prev, cur, index, array)
  return prev + cur
})
// console.log(sum)

/**
 * Date对象
 */
const a = Date.now()

function foo() {
  console.log('doing something')
}
foo()
const b = Date.now() - a
console.log(b)