# 第十四章 表单脚本

（1）理解表单
（2）文本框验证与交互
（3）使用其他表单控制

## 14.1 表单的基础知识

（1）表单有 form 表示，HTMLFormElement 类型，继承自 HTMLElement，，与其他 HTML 元素具有相同的默认属性
（2）独有的属性和方法：

- acceptCharset：服务器能够处理的字符集，等价于 HTML 的 accept-charset 特性
- action：接受请求的 URL
- elements：表单中所有控件的集合
- enctype：请求的编码类型
- length：表单中控件的数量
- method：要发送的请求类型
- name：表单的名字
- reset 方法：将所有的表单域重置为默认值
- submit 方法：提交表单
- target：用于发送请求和接收响应的窗口名称
  （3）除了使用 id 还可以使用 document.forms 获取页面所有的表单，并通过 name 属性得到具体的表单

1. 提交表单
   （1）在 js 中可以使用 submit 方法提交表单，但是不会触发 submit 事件，所以在提交之前先验证表单数据
   （2）提交表单最大的问题是重复提交：在第一次提交之后禁用提交按钮；或者使用 onsubmit 事件取消后续的提交操作
2. 重置表单
   （1）在 js 中可以使用 reset 方法重置表单，但是会触发 reset 事件
3. 表单字段
   （1）共有的表单字段属性

- disabled：表示当前字段是否禁用
- form：表示当前字段所属表单的指针，只读属性
- name：当前字段的名称
- readOnly：表示当前字段是否只读
- tabIndex：表示当前字段的切换序号
- type：当前字段类型，checkbox，radio 等
- value：当前字段将被提交给服务器的值，对文件字段而言该属性只读，包含文件在计算机中的路径
- autofocus：html5 新增，只用于表单字段，自动聚焦
  （2）change 事件在输入改变不会触发，在失焦时内容改变触发，随输入实时触发的时 input 事件
