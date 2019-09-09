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

## 14.2 文本框脚本

（1）textarea 的初始值必须放在标签之间，而不是 value 值,但是用户输入的值保存在value中
1. 选择文本
（1）都支持select方法，选择输入的所有文本，特别在存爱默认值的时候，可以一次性删除
（2）select事件，在选择了文本框中的文本时触发
（3）获取选择的文本可以使用selectionStart ֖和selectionEnd然后使用substring方法截取
（4）选择部分文本可以使用setSelectionRange接收下标范围，不包含后一个，要看到选择的文本必须在之前或之后将焦点聚焦到选择的文本框
2. 过滤输入
（1）监听keypress事件，然后使用正则匹配想要输入的字符，不匹配就阻止默认行为
（2）操作剪贴板：
- beforecopy：复制前触发
- copy：复制操作时触发
- beforecut：剪切发生前触发
- cut：剪切发生时触发
- beforepaste：粘贴发生前触发
- paste：粘贴发生时触发
- 要访问剪贴板中的数据可以使用clipboardData对象，ie存在window上，其他存在event上；有三个方法：getData（接收一个参数，text或者URL格式）、setData（type，value）、֖ clearData
- Firefox、Safari、Chrome只在onpaste事件处理程序中才能使用getData方法
3. 自动切换焦点
4. HTML5约束验证API
（1）必填字段：required
（2）其他输入类型：input类型添加了几种类型，email、url，不设置required空值也会通过
（3）数值范围："number" "range" "datetime" "datetime-local" "date" "month" "week" "time"等类型支持性不高
（4）输入模式：h5新增pattern属性，用于匹配文本框中的值，与其他类型类似不能阻止用户输入无效的文本
（5）检测有效性：使用checkValidity方法可以检验表单中的某个字段是否有效，所有的表单字段都有这个方法，返回布尔值，是否有效的判断依据是前面介绍的那些约束
- validity属性会告诉你为什么字段有效或者无效，包含一系列属性，都返回布尔值
- customError：设置了setCustomValidity()则为true
- patternMismatch：与指定的parttern属性不匹配返回true
- rangeOverflow： 值比max大返回true
- rangeUnderflow： 值比min小返回true
- stepMisMatch： 如果min和max之间的步长不合理返回true
- tooLong：长度超过最大返回true
- typeMismatch：不是email或者url返回true
- valid：上面的属性都是false返回true，checkValidity也要求同样的值
- valueMissing： 标注required的字段没有值返回true
（6）禁用验证：form的novalidate属性，也可以通过js将该属性修改达到目的；按钮上添加formnovalidate属性，点击该按钮不验证
## 14.3 选择框脚本
