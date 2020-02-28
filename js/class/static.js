class Foo {
  static showMsg() {
    return this.bar();
  }
  bar() {
    console.log("hello");
  }
  static bar() {
    console.log("world");
  }
}
const f1 = new Foo("li", "jiahua");
class baz extends Foo {
  static test() {
    return super.showMsg();
  }
}
baz.test();
