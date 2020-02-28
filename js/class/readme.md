## 基础

（1）类的所有方法都定义在 prototype 上
（2）Point.prototype.constructor === Point 与 es5 一致
（3）类内部的方法不可枚举与 es5 不一致

## constructor

（1）一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加
（2）constructor 方法默认返回实例对象（即 this），可以改成返回其它对象，会导致实例对象不是该类的实例，class 必须使用 new

## 类的实例

（1）共享一个原型
（2）实例的属性除非显式定义在其本身（即定义在 this 对象上），否则都是定义在原型上（即定义在 class 上）

```js
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

var point = new Point(2, 3);

point.toString(); // (2, 3)

point.hasOwnProperty("x"); // true
point.hasOwnProperty("y"); // true
point.hasOwnProperty("toString"); // false
point.__proto__.hasOwnProperty("toString"); // true
```

（3）生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型去添加新的属性或者方法，而不应该使用**proto**

## 取值函数（getter）和存值函数（setter）

（1）存值函数和取值函数是设置在属性的 Descriptor 对象上的
（2）类的属性名可以使用表达式

## 注意点

（1）类和模块一样内部默认严格模式
（2）类不存在提升：与继承相关，必须保证子类在父类之后
（3）name 属性总是返回紧跟在 class 关键字后面的类名
（4）this 的指向

```js
class Logger {
  printName(name = "there") {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined
```

上面代码中，printName 方法中的 this，默认指向 Logger 类的实例。但是，如果将这个方法提取出来单独使用，this 会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是 undefined），从而导致找不到 print 方法而报错
可以在构造函数中绑定 this，或者使用箭头函数（内部的 this 总是指向定义时所在的对象）
