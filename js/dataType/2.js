function changeStuff(a, b, c) {
    a = a * 10
    b.item = 'change'
    c = {item: 'change'}
    console.log(a, b, c)
}
var num = 10
var obj1 = {item: 'unchange'}
var obj2 = {item: 'unchange'}
changeStuff(num, obj1, obj2)
console.log(num, obj1, obj2)