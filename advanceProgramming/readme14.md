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

（1）textarea 的初始值必须放在标签之间，而不是 value 值,但是用户输入的值保存在 value 中

1. 选择文本
   （1）都支持 select 方法，选择输入的所有文本，特别在存爱默认值的时候，可以一次性删除
   （2）select 事件，在选择了文本框中的文本时触发
   （3）获取选择的文本可以使用 selectionStart ֖ 和 selectionEnd 然后使用 substring 方法截取
   （4）选择部分文本可以使用 setSelectionRange 接收下标范围，不包含后一个，要看到选择的文本必须在之前或之后将焦点聚焦到选择的文本框
2. 过滤输入
   （1）监听 keypress 事件，然后使用正则匹配想要输入的字符，不匹配就阻止默认行为
   （2）操作剪贴板：

- beforecopy：复制前触发
- copy：复制操作时触发
- beforecut：剪切发生前触发
- cut：剪切发生时触发
- beforepaste：粘贴发生前触发
- paste：粘贴发生时触发
- 要访问剪贴板中的数据可以使用 clipboardData 对象，ie 存在 window 上，其他存在 event 上；有三个方法：getData（接收一个参数，text 或者 URL 格式）、setData（type，value）、֖ clearData
- Firefox、Safari、Chrome 只在 onpaste 事件处理程序中才能使用 getData 方法

3. 自动切换焦点
4. HTML5 约束验证 API
   （1）必填字段：required
   （2）其他输入类型：input 类型添加了几种类型，email、url，不设置 required 空值也会通过
   （3）数值范围："number" "range" "datetime" "datetime-local" "date" "month" "week" "time"等类型支持性不高
   （4）输入模式：h5 新增 pattern 属性，用于匹配文本框中的值，与其他类型类似不能阻止用户输入无效的文本
   （5）检测有效性：使用 checkValidity 方法可以检验表单中的某个字段是否有效，所有的表单字段都有这个方法，返回布尔值，是否有效的判断依据是前面介绍的那些约束

- validity 属性会告诉你为什么字段有效或者无效，包含一系列属性，都返回布尔值
- customError：设置了 setCustomValidity()则为 true
- patternMismatch：与指定的 parttern 属性不匹配返回 true
- rangeOverflow： 值比 max 大返回 true
- rangeUnderflow： 值比 min 小返回 true
- stepMisMatch： 如果 min 和 max 之间的步长不合理返回 true
- tooLong：长度超过最大返回 true
- typeMismatch：不是 email 或者 url 返回 true
- valid：上面的属性都是 false 返回 true，checkValidity 也要求同样的值
- valueMissing： 标注 required 的字段没有值返回 true
  （6）禁用验证：form 的 novalidate 属性，也可以通过 js 将该属性修改达到目的；按钮上添加 formnovalidate 属性，点击该按钮不验证

## 14.3 选择框脚本

（1）HTMLSelectElement 类型额外提供的属性和方法：

- add 方法：两个参数，第一个为新插入的元素；第二个为位置坐标；表示在指定位置之前插入新元素
- multiple 属性：是否多选
- options 属性：空间中所有 option 元素集合
- remove 方法：接受一个参数，删除指定下标项
- size 属性：选择框可见项条数
- 选中的值保存的是 value 的值，没有 value 值则为显示的值，
  （2）HTMLOptionElement 属性和方法：
- index：当前选项在 options 集合中的索引
- label：当前选项标签
- selected：布尔值，表示当前项是否被选中
- text：选项的文本
- value：选项的值
  （3）其他表单的 change 事件发生在值被修改且焦点离开当前字段，而选择框的 change 事件只要选中了选项就会触发
  （4）appendChild 方法传入一个文档中已有的元素，会先从元素的父节点移除它再添加到指定位置，移动和移除选项都会重置每一项的 index 属性

## 14.4 表单序列化

## 14.5 富文本编辑

（1）本质是在页面嵌入一个 iframe，设置 designMode 属性开启可编辑状态

1. contenteditable 属性
   （1）在任意 html 元素上设置 contenteditable 属性，该元素会变成可编辑，有三个值 true、false、inherit（继承父元素）
2. 操作富文本：document.execCommand，三个参数，要执行的命令名称；表示浏览器是否应该为当前命令提供用户界面的布尔值；执行命令必须的一个值（不需要值传递 null），为了兼容第二个值应该始终传递 false
   （1）queryCommandState:用于确认是否已经将指定命令应用到了选择的文本（可用来更新按钮状态）
   （2）queryCommandValue：取得执行命令时传入的值，可以确定某个命令是怎样应用到选择的文本的
3. 富文本选区
   （1）getSelection 方法可以确定实际选择的文本，这个方法是 window 对象的 document 对象的属性，包含很多属性和方法用于操作选中区域
4. 表单与富文本

## 14.6 小结

# 第十五章 使用 canvas 绘图
