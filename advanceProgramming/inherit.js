// 原型链模式
function SuperType() {
  this.colors = ["red", "blue", "green"]
}

function SubType() {}
SubType.prototype = new SuperType()
const instance1 = new SubType()
instance1.colors.push('black')
const instance2 = new SubType()

// 借用构造函数
function SuperType2(name) {
  this.colors = ["red", "blue", "green"]
  this.name = name
}

function SubType2() {
  SuperType2.call(this, 'lee')
  this.age = 29
}
const instance3 = new SubType2()
instance3.colors.push('black')
const instance4 = new SubType2()

// 组合继承
function SuperType3(name) {
  this.name = name
  this.colors = ["red", "blue", "green"]
}
SuperType3.prototype.sayName = function() {
  console.log(this.name);
}

function SubType3(name, age) {
  SuperType3.call(this, name)
  this.age = age
}
SubType3.prototype = new SuperType3()
SubType3.prototype.constructor = SubType3
SubType3.prototype.sayAge = function() {
  console.log(this.age);
}
const instance5 = new SubType3("Nicholas", 29)
instance5.colors.push('black')
const instance6 = new SubType3("Greg", 27)
// instance6.sayName()
// instance6.sayAge()

// 原型继承
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
const person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
}
const anotherPerson = Object.create(person)
anotherPerson.name = 'Greg'
anotherPerson.friends.push('Rob')
const yetAnotherPerson = Object.create(person)
yetAnotherPerson.name = 'Linda'
yetAnotherPerson.friends.push('Barbie')
const anotherPerson1 = Object.create(person, {
  name: {
    value: 'Greg'
  }
})

// 寄生式继承
function createAnthor(original) {
  const clone = object(original)
  clone.sayHi = function() {
    console.log('hi');
  }
  return clone
}

// 寄生式组合式继承
function inheritPrototype(subType, superType) {
  const prototype = object(superType.prototype) // 创建对象
  prototype.constructor = subType // 增强对象
  subType.prototype = prototype // 指定对象
}