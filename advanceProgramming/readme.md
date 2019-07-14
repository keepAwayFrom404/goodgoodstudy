# 2019.07.12开启高级程序设计第三版学习之路（每日必编程）
## 第一章简介js
### 07.13
1. js发展历史
### 07.14
1. 文档对象模型DOM主要用于操作DOM树；BOM浏览器对象模型，存在window，navigator，location，screen还有XMLHttpRequest对象等；浏览器的支持主要指对es和dom的支持
2. 小结
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