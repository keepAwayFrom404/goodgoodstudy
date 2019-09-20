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

## 15.1 基本用法

1. 使用 toDataURL 方法，可以导出在 canvas 上绘制的图像，接受一个参数，即图像的 MIME 类型格式（如：image/png）

## 15.2 2D 上下文

（1）2D 上下文的坐标开始于 canvas 的左上角，，默认情况下 width 和 height 表示水平和垂直方向的可用像素数目

1. 填充和描边
   （1）填充指用指定的样式（颜色、渐变或者图像）填充图形
   （2）描边是在图形的边缘划线
   （3）结果去取决于两个属性：fillStyle、strokeStyle，属性的值可以是字符串、渐变对象或者模式对象，默认值都是‘#000000’，可以为它们指定任何格式的颜色值
2. 绘制矩形
   （1）矩形是唯一一种可以直接在 2D 上下文中绘制的形状，包括 fillRect、strokeRect 和 clearRect 方法，都接受 4 个参数：x 坐标、y 坐标、宽度和高度
   （2）描边线条宽度有 linewidth 属性控制，lineCap 控制线条末端的形状（平头 butt、圆头 round、方头 square）；lineJoin 控制相交处（圆交 round、斜交 bevel、斜接 miter）
   （3）clearRect 用于清除画布上的矩形，可以让画布的某一块矩形区域透明，通过绘制形状再清除指定区域可以绘制有意思的效果
3. 绘制路径
   （1）通过路径可以绘制复杂的形状和线条，首先必须调用 beginPath 表示开始绘制新路径，然后调用以下方法来实际绘制：

- arc(x,y,radius,startAngle,endAngle,counterclockwise)：以（x，y）为圆心绘制一条弧线，其实结束角度用弧度表示，最后一个参数表示顺序值为 false 表示顺时针方向计算
- arcTo(x1,y1,x2,y2,radius)：从上一点开始绘制一条弧线到（x2，y2）截止，以指定的半径穿过（x1，y1）
- bezierCurveTo（c1x，c1y，c2x，c2y，x，y）：从上一点开始绘制一条曲线到（x，y）为止，并且以（c1x，c1y）（c2x，c2y）为控制点
- lineTo(x,y)
- moveTO(x,y)
- quadraticCurveTo(cx,cy,x,y): 从上一点开始绘制一条二次曲线，到(x,y)结束，（cx，cy）为控制点
- rect(x,y.width,height): 从（x，y）开始绘制一个矩形，绘制的是矩形路径而不是前面的独立形状

  （2）创建完路径之后有几种情况：

- closePath：绘制一条连接到起点的线条
- 可以使用 fill 填充它
- 还可以调用 stroke 对路径描边
- 还可以使用 clip 方法创建一个剪切区域
  （3）路径使用很频繁 isPointInPath 接收一个坐标，路径被关闭之前确定画布的某点是否在路径上

4. 绘制文本
   （1）fillText、strokeText 方法，都接收 4 个参数：要绘制的文本字符串，x，y 坐标、可选的最大像素宽度
   （2）由于绘制文本比较复杂，使用 measureText 确定文本大小，接收要绘制的文本，返回一个 TextMetrics 对象，对象只有一个 width 属性
5. 变换
   （1）可以通过以下方法来变换矩阵：

- rotate(angle)：围绕原点旋转
- scale(scaleX,scaleY)：分别在 x，y 方向缩放，默认值都是 1
- translate(x,y): 将原点移动到（x，y），变换之后的原点会改变
- transform(m1_1,m1_2,m2_1,m2_2,dx,dy): 直接修改变换矩阵，乘以[[m1_1,m1_2,dx],[m2_1,m2_2,dy],[0,0,1]]
- setTransform(m1_1,m1_2,m2_1,m2_2,dx,dy): 将变换矩阵重置为默认状态，然后调用 transform
  （2）save 方法可以保存某组属性与变换的组合，restore 方法使用保存的组合，可以存储多个，只会保存绘图上下文的绘制和变换，不会保存绘图上下文的内容

6. 绘制图像
   （1）使用 drawImage 绘制图像，可以传入 img 标签加位置坐标
   （2）多加两个参数设置图像的宽度和高度
   （3）可以把图像的某个区域绘制到上下文，九个参数：要绘制的图像、源图像的 x、y、源图像的 width、height、目标图像的 x、y、目标图像的宽度、高度
   （4）第一个参数除了传递 img 还能传递 canvas
   （5）图像的操作结果可以用 toDataURL（是 canvas 的方法而不是 context 的）获得，但是必须同源，不然会报错
7. 阴影
   （1）根据以下属性自动为形状或者路径绘制阴影：

- shadowColor：阴影颜色，默认黑色
- shadowOffsetX：x 轴偏移量
- shadowOffsetY：y 轴偏移量
- shadowBlur：阴影模糊的像素数，默认 0
  （2）以上属性都可以通过 context 修改，只要在绘制之前设置就行

8. 渐变
   （1）渐变由 canvasGradient 实例表示，创建一个新的线性渐变可以调用 createLinearGradient 方法，接收四个参数：起点 x、y、终点 x、y
   （2）创建完会返回 canvasGradient 对象的实例，接着使用 addColorStop 方法指定色标，两个参数：色标、颜色值，色标 0-1
   （3）将定义好的渐变赋值给 fillstyle 即可为下面的元素设置渐变（渐变只存在于定义的矩形区域内）
   （4）径向渐变使用 createRadialGradient，六个参数：起点圆的圆心 x、y、半径、终点圆的 x、y、半径
9. 模式
   （1）模式其实就是重复的图像，可以用来填充和描边图形，创建新模式调用 createPattren，传入两个参数：一个 html 的 img 元素，一个如何重复的字符串
   （2）第一个参数也可以是一个 video 或者 canvas 对象
   （3）模式与渐变都是从 0，0 开始的，将填充的颜色改成模式对象，只表示在某个特定的区域显示重复的图像
10. 使用图像数据
    （1）2D 上下文的优势就是可以通过 getImageData 获取原始图像数据，接收四个参数：要获得数据画面区域的 x、y 坐标及该区域的像素宽度和高度
    （2）返回的是 imageData 实例，有 width、height、data 三个属性，data 属性是一个数组保存着图像每一个像素的数据，每个像素用 4 个元素保存：分别是 rgba
    （3）putImageData 可以修改图像的 imageData 实例
11. 合成
    （1）还有两个会用到 2D 上下文所有绘制操作的属性 globalAlpha 和 globalCompositionOperation
    （2）globalAlpha 指定所有绘制的透明度 0-1
    （3）globalAlpha 和 globalCompositionOperation: 表示后绘制的图形怎么与先绘制的图形结合，值是字符串

- source-over（默认值）：后在上方
- source-in：重叠部分可见，其他部分完全透明（异常）
- source-out: 不重叠部分可见，先绘制的图形完全透明
- source-atop：重叠部分可见，先绘制图像不受影响（异常）
- destination-over：后绘制在下方，之前透明像素下的部分可见
- destination-in：后绘制在下方，不重叠的部分完全透明（异常）
- destination-out：后绘制的图形擦除先绘制的图形的重叠部分（异常）
- destination-atop：后绘制在下方，两者不重叠的部分先绘制的会变透明
- lighter：后绘制的图形与先绘制的图形重叠部分相加
- copy：后完全替代先图像与之重叠的部分（异常）
- xor：先后重叠部分执行异或操作

## 15.3 webGL 上下文

3. 准备绘图
   （1）在实际操作 webGL 上下文之前，一般都要使用实色清除 canvas，首先使用 clearColor 指定要使用的颜色值，接收四个参数：红橙黄、透明度，每个参数 0-1，表示每种分量最终的颜色中的强度
   （2）一般都要先清除缓冲区再绘图
4. 视口与坐标
   （1）开始绘图之前，都要先定义 webGL 的视口，默认情况可以使用 canvas 区域，改变视口使用 viewport 方法传四个参数：x、y、width、height
   （2）视口坐标与网页坐标不一样，视口的坐标原点在左下角；在视口内部的坐标系与定义视口的坐标系也不一样，视口内部坐标原点在视口的中心点，因此左下角坐标为-1，-1，右上角 1，1

# 第十六章 HTML5 脚本编程

（1）使用跨文档传递信息
（2）拖放 API
（3）音频和视屏

## 16.1 跨文本消息传递

（1）跨文档消息传递（XDM）的核心是 postMessage 方法，都是向另一个地方传递数据（一般指当前页面的 iframe 元素）或者由当前页面弹出的窗口
（2）接收两个参数：一条消息和一个表示消息接收来自哪个域的字符串
（3）获取 iframe 里的内容：contentWindow：获取 iframe 的 window 对象；使用 contentDocument 获取 document 对象
（4）接收到 XDM 消息时会触发 window 的 message 事件。这个事件是以异步的形式触发的，所以消息的发送到接收会有一段时间的延迟，触发 message 事件后，传递给 onmessage 处理程序的事件对象包含以下三方面的重要信息

- data: 第一个参数的字符串数据
- origin：发送消息所在文档的域
- source：发送消息文档的 window 的代理，主要用来在发送消息的窗口中调用 postMessage 方法(发送回执)，消息来自同一个域就是 window

## 16.2 原生拖放

1. 拖放事件
   （1）会依次触发以下事件：

- dragstart：按下鼠标并开始移动鼠标
- drag：触发 start 之后持续触发，属于高频事件
- dragend：拖动停止无论是否处于目标中都触发 end
  （2）当拖放到一个有效的目标上时会触发：
- dragenter：当有元素拖动到放置目标上触发
- dragover：还在目标范围移动时
- dragleave 或 drop：离开目标触发 leave，放到目标中触发 drop

3. dataTransfer 对象
   （1）他是事件对象的一个属性，用于从被拖放元素向目标元素传递字符串格式的数据
   （2）主要有 setData 和 getData 两个方法：第一个参数为保存数据类型，取值为‘text’或者‘setData’
