class Person {
  arr = [1, 2]
  foo() {
    this.arr.push(3)
  }
}
class Animal extends Person {}
const a = new Animal
const b = new Animal
console.log(a.arr === b.arr);