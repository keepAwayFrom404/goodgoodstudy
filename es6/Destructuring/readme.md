# 解构
概念：
（1）ES6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值
基本知识：
（1）解构等号右边没有iterator接口解构会失败,换句话说有iterator接口就可以解构
（2）解构赋值允许指定默认值，且默认值位置的赋值严格等于undefined才会使用默认值；如果默认值是表达式，惰性求值，用到才会求值；
（3）对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
（4）对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
（5）解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错
