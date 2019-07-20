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
console.log(colors3)