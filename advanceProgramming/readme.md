# 2019.07.12开启高级程序设计第三版学习之路（每日必编程）
## 第一章简介js
### 07.13
1. js发展历史
### 07.14
2. 文档对象模型DOM主要用于操作DOM树；BOM浏览器对象模型，存在window，navigator，location，screen还有XMLHttpRequest对象等；浏览器的支持主要指对es和dom的支持
3. 小结
（1）es提供核心的语言功能
（2）DOM：提供访问和操作网页内容的方法和接口
（3）BOM：提供与浏览器交互的方法和接口
（4）五大主要浏览器：IE，Firefox，Chrome，Safari，Opera
## 第二章在html中使用js
1. 脚本引入内容
（1）script脚本的async属性表示应该立即下载脚本，不然按照文档中的顺序加载，定义async的脚本不一定按顺序执行，所以确保两者之间互不依赖非常重要，异步脚本一定在load事件之前，但与DOMCotentLoaded的先后顺序不确定。
（2）defer属性只是用外部脚本且多个延迟脚本并不一定会按照顺序执行，也不一定会在DOMCotentLoaded之前执行，所以最好只包含一个延迟脚本。
2. 小结
（1）不包含defer和async的情况下js代码是顺序解析的
（2）noscript标签可以在没开启js情况下显示html内容
## 基本概念
### 07.15: 第三章看完数据类型与一些操作符，看到3.6语句小节
1. 数据类型
（1）undefined：定义未初始化变量会默认赋值undefined，未定义变量的typeof运算也等于undefined
（2）null：null值表示一个空对象指针，null == undefined，undefined派生自null
（3）number：保存浮点数的空间是整数的两倍，0.1+0.2不等于0.3（舍入误差跟IEEE754数值格式有关）；isFinite可以判断数值是否超出表示范围; 涉及NaN的操作都返回NaN，NaN与任何值都不相等，isNaN任何不能转换为数值的值都会返回true，在判断对象时会先调用对象的valueOf方法不能转数值再调用toString方法
（4）number类型方法：一元+操作运算符与Number函数转换方式想同，undefined返回NaN，字符串0前导忽略，null返回0，空字符返回0，对象valueOf->toString；parseInt数字开头转数字进制可转，空字符串NaN，第二个参数指示进制；parseFloat只解析十进制，第二个小数点无效，省略前导0，没有小数点返回整数，十六进制转为0
（5）字符串：一些基本的转义序列: \n换行，\t制表，\b空格，\\斜杆，\'单引号，\"双引号
（6）字符串：字符串的修改会销毁原来字符串再新建一个字符串,  转字符串toString，null和undefined没有这个方法；String能兼容null和undefined的字符串化
（7）递增递减操作符：操作符在运用在对象上时会先调用valueOf或者toString方法将对象转换为可操作的值，
（8）与操作符：第一个对象，返回第二个操作数；第二个操作数是对象只有当第一个操作数的结果返回true的情况才会返回该对象,否则返回第一个操作数;两个对象，返回第二个操作数；一个操作数是null返回null；一个NaN返回NaN；一个undefined返回undefined；逻辑与操作属于短路操作，如果第一个值能够决定结果就不会再对第二个操作数求值
（9）或操作符：有一个操作数不为布尔值则不一定返回布尔值；第一个值为对象直接返回第一个值；第一个求值为false，返回第二个值；两个对象返回第一个；两个null返回null；两个NaN返回NaN；两个undefined返回undefined；也是短路操作，第一个值为true就不计算第二个值了。
（10）乘法：Infinity*0=NaN；除法Infinity/Infinity=NaN，0/0=NaN；
（11）加法：Infinity+-Infinity=NaN；只有一个字符串会将另一个转为字符串再拼接；一个操作数是对象、数值或布尔值调用toString方法，null和undefeated调用String转为字符串
（12）减法：Infinity-Infinity=NaN；-Infinity--Infinity=NaN;如果有一个操作数是字符串、布尔值、null或者undefined，则先在后台调用Number函数将其转为数值，然后再进行减法计算；如果有一个值是对象则调用对象的valueOf方法没有则调用toString
（13）比较运算：两个字符串的比较字符编码的位置，区分大小写;NaN做比较都false
（14）相等与不相等：会进行类型转换，有一个布尔转为数值再比较;一个字符串一个数值，字符串转为数值再比较；一个对象一个不是对象，valueOf转换之后再比较；null==undefined；一个NaN相等返回false不等返回true，NaN != NaN；两个对象比较是否同一个对象，都指向同一个对象则为true，否则为false；null == 0为false,但是null转数值为0
（15）全等与不全等：比较之前不会进行转换
### 07.16: 
2. 语句
（1）for in枚举对象属性;
（2）label：可以在代码中添加标签，等待后期由break或者continue调用
（3）break：跳出循环执行循环之后的语句
（4）continue：跳过一便循环
（5）with：可用来绑定对象创建新的作用域，with中的赋值会先到局部环境寻找，未找到则以绑定的对象属性赋值，严格模式下禁用with（会导致性能下降，调试困难）
（5）switch：可使用任何数据类型，case的值可以为变量，甚至是表达式，在比较时使用的是全等运算符  
3. 函数
（1）严格模式下，重写arguments的值会导致语法错误（代码将不会执行）
（2）所有的参数传递都是值，不能通过引用传递参数
（3）判断传入参数的个数进行不同反应可以模仿方法的重载
4. 小结
