// 工厂模式
function createPerson(name = 'lee', age = 22, job = 'programmer') {
  const o = {
    name,
    age,
    job,
    sayName() {
      console.log(this.name);
    }
  }
  return o
}
const person1 = createPerson()
const person2 = createPerson('Greg', 27, 'Doctor')

// 构造函数模式
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function() {
    console.log(this.name);
  }
}
Person("Nicholas", 29, "Software Engineer")
const person4 = new Person("Greg", 27, "Doctor")
const o = {}
Person.call(o, "Kristen", 25, "Nurse")

// 原型模式
function Person1() {}
Person1.prototype.name = 'Nicholas'
Person1.prototype.age = 29
Person1.prototype.job = 'Software Engineer'
Person1.prototype.sayName = function() {
  console.log(this.name);
}
const person5 = new Person1()
const person6 = new Person1()

person5.name = 'Greg'
person5.name = null
delete person5.name

function Person2() {}
Person2.prototype = {
  name: 'lee',
  age: 22,
  job: 'software engineer',
  friends: ["Shelby", "Court"],
  sayName: function() {
    console.log(this.name);
  }
}
Object.defineProperty(Person2.prototype, 'constructor', {
  enumerable: false,
  value: Person2
})
const person7 = new Person2()
const person8 = new Person2()
person7.friends.push('Van')

// 组合使用构造函数模式和原型模式
function Person3(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = ["Shelby", "Court"]
}
Person3.prototype = {
  constructor: Person3,
  sayName: function() {
    console.log(this.name);
  }
}
const person9 = new Person3("Nicholas", 29, "Software Engineer")
const person10 = new Person3("Greg", 27, "Doctor")
person9.friends.push('lee')

// 寄生构造函数模式
function Person4(name, age, job) {
  const o = {
    name,
    age,
    job,
    sayName: function() {
      console.log(this.name);
    }
  }
  return o
}
const friend = new Person4("Nicholas", 29, "Software Engineer")

function SpecialArray() {
  const values = []
  values.push.apply(values, arguments)
  values.toPipedString = function() {
    return this.join('|')
  }
  return values
}
const colors = new SpecialArray("red", "blue", "green")

// 稳妥构造函数模式
function Person5(name, age, job) {
  // 创建返回的对象
  const o = new Object()
  // 可以在这里定义私有的变量和函数
  // 添加方法
  o.sayName = function() {
    console.log(name);
  }
  return o
}
const friend1 = Person5("Nicholas", 29, "Software Engineer")