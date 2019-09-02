# 第九章 客户端检测

1. 用户代理字符串检测
   （1）主要检测五大呈现引擎：IE、Gecko、Webkit、KHTML 和 Opera
   （2）第一步检测 opera，因为它可能完全模仿其他浏览器，检测 window.opera 对象
   （3）第二步检测 webkit，因为 webkit 用户代理字符串中包含了 gecko 和 khtml 两个字符串，不过 applewebkit 是独一无二的
   （4）接下来四 KHTML，因为它的代理字符串包含了 gecko
   （5）用户代理检测是客户端检测的最后一个选择，只要可能，都应该优先采用能力检测和怪癖检测
   （6）能力检测：在编写代码之前先检测浏览器的能力，无法精确检测特定的浏览器和版本
   （7）怪癖检测：实际上是浏览器中存在的 bug，效率低，无法确定浏览器和版本

# 第十章 DOM

## 10.1

1. Node 类型：浏览器所有节点类型都继承自 NODE 类型，都有相同的基本属性和方法
   （1）每一个节点都有一个 childNodes 属性，保存着一个 NodeList 对象（一组有序节点，类数组），是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动的反映到 NodeList 对象上
   （2）hasChildNodes 返回是否存在子节点的布尔值；ownerDocument 指向表示整个文档的文档节点
   （3）insertBefore 传入要插入的节点和作为参照的节点，被插入节点会变成参照节点的前一个同胞节点，同时方法返回
   （4）replaceChild 替换指定位置的节点，要插入的节点和要替换的节点，返回要替换的节点；removeChild，参数为将要移出的节点，返回这个节点
   （5）cloneNode 接收布尔值表示是否执行深复制，深复制节点及整个子节点树，浅复制只复制节点本身，只复制特性不复制 js（事件处理函数）
   （6）normalize 处理文档中的文本节点，在后代节点找到空文本删除，两个相邻文本合并
2. Document 类型
   （1）document 是 HTMLDocument 对象的实例也是 window 的一个属性，具备以下特性：

- nodeType：9
- nodeName：#document
- nodeValue、parentNode、ownerDocument：null
  （2）可以通过 documentElement 属性访问文档元素（html）
  （3）body 属性指向 body 元素，因为使用频率比较高
  （4）DocumentType 节点，通过属性 doctype 访问（<!DOCTYPE>）
  （5）title 属性可以修改<title>内容
  （6）URL：地址栏中的 url；domain 只包含域名；referrer 链接到当前页面的哪个页面的 URL，在没有来源时为空字符串;三个属性中只有 domain 可以设置，不能设置不包含的域，可以讲 domain 设置为相同值就可以互相访问对方的 js 对象（跨域），domain 松散设置之后就不能再紧绷了。
  （7）getElementByTagName：获得一个 HTMLCollection 对象可以通过方括号 name 属性取得具体的元素，或者 nameItem 方法
  （8）getElementsByName：返回带有给定 name 特性的所有元素
  （9）文档写入：write、writeIn 都可以在页面被加载过程中动态写入内容，输出流写入网页的能力，还能引入 js 脚本，在文档加载结束之后调用回重写整个页面

3. Element 类型
   （1）是最常用的类型，提供对元素标签名、子节点和特性的访问；nodeType=1；nodeName 为元素标签名；nodeValue=null；parentNode 可能是 Element 或者 Document
   （2）tagName 和 nodeName 获得相同的值但是都是大写，用于比较的时候记得使用 toLowerCase 转换
   （3）html 元素标准属性：id、title、lang、dir（语言方向）、className（为了与 es 的 class 区分）
   （4）取得特性：getAttribute、setAttribute、removeAttribute 可以针对任何特性使用，可获得自定义属性名，且不区分大小写，自定义特性加上 data-以便验证
   （5）style 属性通过 getAttribute 返回字符串而通过属性访问回返回对象，还有 onclick 类似；
   （6）使用属性访问对象属性，使用 getAttribute 访问自定义属性
   （7）通过点操作添加一个自定义属性，该属性不会自动成为元素的特性，getAttribute 无效
   （8）removeAttribute：彻底删除元素的特性，不仅清除特性的值也会删除特性
   （9）createElement 创建节点，可以添加更多子节点及执行其它操作
4. Text 类型
   （1）文本节点，包含可以照字面解释的纯文本内容，可以是转义后的 html 字符，但不能包含 html 代码
   （2）nodeType=3，nodeName=#text，nodeValue=文本包含内容，parentNode 是一个 Element，不支持子节点
   （3）length 属性保存文本长度 nodeValue 与 data 数据相同
   （4）createTextNode 创建文本节点
   （5）normalize 可以用来合并一个元素下的多个文本节点
   （6）splitText 可以将文本节点分割成两个，参数为位置（不包含），返回新文本节点
5. comment 类型
   （1）注释类型，nodeType=8，nodeName=#comment，nodeValue=注释的内容，parentNode 可能是 Document 或者 Element，不支持子节点
   （2）也拥有 splitText 方法
   （3）createComment 可以创建注释节点
6. DocumentType 类型
   （1）包含与文档 doctype 有关信息，nodeType=10，nodeName=doctype，nodeValue=null，parentNode=Document，不支持子节点
   （2）有三个属性：name 文档类型名称；entities 文档类型描述的实体的 NameNodeMap 对象；notations 文档类型描述的符号的 NameNodeMap 对象
7. DocumentFragment 类型
   （1）在文档中没有对应的标记，nodeType=11，nodeValue=#document-fragment，nodeValue 和 parentNode 都=null，
   （2）可以用来创建一个文档片段，使用 createDocumentFragment 创建实例,可以有效减少反复渲染，一次性添加
8. Attrs 类型
   （1）nodeType=2，nodeName=特性的名字，nodeValue=特性的值，parentsNode=null，不支持子节点
   （2）三个属性 name、value、specified，其中 specified 是一个布尔值，区分特性是代码指定的还是默认的
   （3）createAttribute 可以创建新的特性
   （4）创建的特性通过 attributes 和 getAttributeNode 都会返回对应特性的 Attrs 节点，而 getAttribute 只返回特性值，
   （5）建议使用 getAttribute、setAttribute、removeAttribute，更方便

## 10.2 DOM 操作技术

1. 动态脚本
   （1）可以通过操作 html 的方式创建脚本或者创建引入脚本文件的 script 标签
2. 动态样式
   （1）加载外部样式文件的过程是异步的，与 js 加载没有固定的顺序，
3. 操作表格
   （1）感觉没没到过，而且应用场景不多
4. 使用 NodeList
   （1）NodeList、NamedNodeMap 和 HTMLCollection 都是动态的集合，实时地
   （2）应该尽量减少 NodeList 的访问次数，因为每次访问 NodeList 都是基于文档的查询（性能消耗大），可以讲 NodeList 缓存下来

# 第十一章 DOM 扩展

## 11.1 选择符 API

1. querySelector
   （1）接受一个 CSS 选择符，返回该模式匹配的第一个元素，没找到返回 null
   （2）通过 Document 调用会在文档范围查找，使用 Element 调用会在该元素后代的范围查找
2. querySelectorAll
   （1）接受参数与上面一样，返回的是所有匹配的元素，返回一个 NodeList 实例
   （2）返回每一个元素可以使用 item 或者方括号语法
3. matchesSelector
   （1）接收相同参数，存在返回 true，不存在返回 false，支持堪忧，不同浏览器方法名不尽相同

## 11.2 元素遍历

1. 新属性：childElementCount 返回子节点个数（不包含文本和注释）；firstElementChild 返回第一个元素；lastElementChild 指向最后一个元素；previousElementSibling 指向后一个同辈元素；不用担心空白文本问题

## 11.3 HTML5

1. 与类相关的扩充：HTML4 开始 class 用的越来越多，因此 HTML5 增加了很多类的操作方法
   （1）getElementsByClassName：
   - 接收一个参数，包含一个或者多个类名的字符串，传入类名的先后顺序不重要，
   - 在元素上调用只会返回后代包含元素，
   - 也存在与返回 NodeList 的其它方法相同的性能问题
     （2）classList：

- add：将给定的字符串添加到列表中，已存在就不添加
- contains：列表中是否存在给定的值，存在返回 true，不存在返回 false
- remove：从列表删除给定字符串
- toggle：如果列表存在给定的值就删除，没有则添加

2. 焦点管理
   （1）activeElement 属性始终引用 Dom 当前获取焦点的元素
   （2）hasFocus 方法判断文档是否获得了焦点，返回布尔值
3. HTMLDocument
   （1）readyState 属性：类似 onload

- loading：正在加载文档
- complete：文档加载完成
  （2）兼容模式：document.compatMode
- CSS1Compat：标准模式
- BackCompat：混杂模式
  （3）document.head：引用文档的 head 元素

4. 字符集属性
   （1）document.charset：文档中实际使用的字符集
   （2）document.defaultCharset：默认字符集
5. 自定义数据属性
   （1）可以添加任意非标准属性，以 data-开头即可，为元素提供与渲染无关的信息，或者提供语意信息
   （2）可以通过元素的 dataset 属性访问自定义属性的值（DOMStringMap 实例）
6. 插入标记
   （1）innerHTML：读模式下，可以获取调用元素的所有子节点对应的 HTML 标记；在写模式下会根据指定的值创建一个新的 DOM 树并替换掉元素原先的所有子节点，兼容性与表现各不一致
   （2）outerHTML：读模式下，返回调用它的元素及所有子节点的 HTML 标签，写模式下，根据指定内容创建新的 DOM 子树，然后替换掉调用元素
   （3）insertAdjacentHTML：两个参数：插入位置（beforebegin 当前元素前插入一个紧邻的同辈元素、afterbegin 在当前元素下插入新子元素或者在第一个子元素之前插入新的子元素、beforeend 在当前元素下插入新子元素或者在最后一个子元素之后插入新的子元素、afterend 当前元素之后插入一个紧邻的同辈元素）之一；第二个参数是 HTML 字符串
   （4）使用标记插入的方法会存在性能问题，删除了元素但是方法不会取出，占用内存，所以最好先手工删除要被替换的元素的事件处理程序和 js 对象属性
   （5）减少对 innerHTML 的赋值，可以先拼接最后一次赋值
7. scrollIntoView：可以在所有的 HTML 元素上调用，通过滚动浏览器窗口或者某个容器元素，调用元素就可以出现在视口中。
   （1）传 true 或者什么都不传，窗口滚动之后会让调用元素的顶部与视口顶部尽可能平齐+
   （2）传 false，调用元素会尽可能全部出现在视口中（可能的话，调用元素底部会与视口平齐）

# 第十二章 DOM2 和 DOM3

## 12.1 DOM 的变化

1. DOM 变化接受度不大，很多不熟悉也不常用的属性

## 12.2 样式

1. 访问元素样式
   （1）任何支持 style 的 HTML 元素在 js 中都有一个对应的 style 属性，是一个 CSSStyleDeclaration 实例，包含通过 style 特性指定的所有样式信息，不包含外部样式表或嵌入样式表经层叠而来的样式。
   （2）短划线要换成驼峰才能通过 js 访问
   （3）float 不能转换，是 js 保留字。dom2 中使用 cssFloat、styleFloat（IE）
   （4）style 的 cssText 属性返回 style 的全部内容，可以快速复写样式
   （5）length 属性可以得到一共设置了多少 style 样式，可用于遍历所有 style 样式名（style[i]或者 style.item(i)），接着使用 getPropertyValue 获取属性值
   （6）益处某个属性直接使用 removeProperty 方法，移除属性之后该属性会使用默认值
   （7）对于计算的样式使用 getComputedStyle 方法，接收要取得计算样式的元素和一个为元素字符串，返回一个 CSSStyleDeclaration 对象包含了该元素的所有计算样式
   （8）计算后的样式属性只可读不可修改
2. 操作样式表
   （1）几乎没用过，是否过时了
3. 元素大小
   （1）偏移量：

- offsetHeight：元素在垂直方向上占用的空间大小，包括元素高度，可见的水平滚动条高度、上下边框高度
- offsetWidth：元素水平方向占用空间的大小，包括元素的宽度、可见垂直滚动条的宽度、左右边框的宽度
- offsetLeft：元素的左外边框至包含元素的左内边框之间的像素距离
- offsetTop：元素的上外边框至包含元素的上内边框之间的像素距离
- 只可读，每次访问都要重新计算，性能低
  （2）客户区大小
- 元素内容及其内边距所占据的空间大小
- clientWidth：内容区宽度加上左右内边距宽度
- clientHeight：内容区高度加上上下内边距高度
- 也是可读的，每次访问重新计算
  （3）滚动大小
- 包含滚动内容元素的大小
- scrollHeight：在没有滚动条的情况下等于元素内容的总高度
- scrollWidth：在没有滚动条的情况下，等于元素不内容的总宽度
- scrollLeft：被隐藏在内容区域左侧的像素数，通过设置可以改变滚动的位置
- scrollTop：被隐藏在内容区域上方的像素数，通过设置可以改变滚动的位置
  （4）确定元素大小
  getBoundingClientRect：返回四个点坐标

## 12.3 遍历

1. NodeIterator
   （1）使用 document.createNodeIterator 创建它的实例，接收四个参数：root（作为搜索起点的树中的节点）、whatToShow（要访问节点的数字代码）、filter（一个 NodeFilter 对象，或者一个表示需要接受还是拒绝某些特定节点的函数）、entityReferenceExpansion（布尔值，是否要拓展实体引用）
2. TreeWalker
   （1）TreeWalker 是 NodeIterator 的升级版本，除了 nextNode 和 previousNode 外还提供了很多不同方向遍历 dom 结构的方法

- parentNode：遍历到当前节点的父节点
- firstChild：遍历到当前节点的第一个子节点
- lastChild：遍历到当前节点的最后一个子节点
- nextSibling：遍历到当前节点的下一个兄弟同辈节点
- previousSibling：遍历到当前节点的上一个兄弟同辈节点
  （2）使用 document.createTreeWalker 创建，接受参数与 NodeIterator 类似
  （3）currentNode 属性，表示任何遍历方法在上一次遍历中返回的节点。也可以修改遍历继续进行的起点

## 12.4 范围

1. DOM 中的范围（东西太多，使用场景不明确，跳过了，需要在看）

# 第十三章 事件

1. 理解事件流
2. 使用事件处理程序
3. 不同的事件类型

## 13.1 事件流

1. 事件冒泡（IE 事件流）：事件由开始的具体元素接收，然后逐级向上传播到较为不确定的节点（文档）,现在的事件冒泡会到 window 对象
2. 事件捕获（网景）：不具体的节点应该更早接收到事件，而最具体的节点最后接收到事件，用意在于在事件达到预定目标之前捕获它，以事件冒泡为主
3. DOM 事件流：DOM2 级事件规定事件流包括三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段，事件先从顶层元素向下传播，到目标元素处于目标阶段并触发事件，然后继续向上冒泡传回文档

## 13.2 事件处理程序--事件就是用户或者浏览器自身执行的某种动作，响应某个动作的函数就是事件处理程序（或事件侦听器），事件处理函数的名字以“on”开头

1. HTML 事件处理程序
   （1）事件处理程序中的代码在执行时，有权访问全局作用域中的任何代码
   （2）这样的事件处理程序会创建一个封装着元素属性值的函数，这个函数中有一个局部变量 event，也是事件对象，在函数内部，this 值等于事件的目标元素(button 等)
   （3）在 html 定义事件缺点：存在时差，当函数有定义之前就点击按钮会报错，可以在调用处 try catch，第二是 html 与 js 耦合在一起
2. DOM0 级事件处理程序
   （1）首先找到要操作的对象的引用
   （2）将处理程序属性的值设置成一个函数（通常全部小写）
   （3）这种方式添加的事件会在冒泡阶段处理
   （4）删除事件处理函数只需要将属性置为 null
3. DOM2 级事件处理程序
   （1）定义了两个方法，用于处理指定和删除事件：addEventListener、removeEventListener；接收三个参数，要处理的事件名、事件函数和一个布尔值（true 表示在捕获阶段调用事件处理函数，false 表示在冒泡阶段调用-默认值）
   （2）优势在于可以添加多个事件处理函数，会按照添加的顺序依次触发
   （3）添加的事件处理函数只能使用 removeEventListener 移除，参数与添加的参数一致，这也意味着添加的匿名函数无法移除
   （4）一般都是将事件处理函数添加到事件冒泡阶段，可以兼容更多的浏览器
4. IE 事件处理程序
   （1）提供 attachEvent 和 detachEvent 两个方法
   （2）与使用 DOM0 方法主要区别在于事件处理程序的作用域，DOM0 在所属元素作用域内运行，而 attachEvent 会在全局作用域中运行，this 会等于 window
5. 跨浏览器的事件处理程序

## 13.3 事件对象

（1）在触发某个事件时，会产生一个事件对象 event

1. DOM 中的事件对象
   （1）event 对象包含与创建他的特定事件有关的属性和方法
   （2）eventPhase：调用事件处理程序的阶段：1、2、3
   （3）在事件处理程序内部，this 始终等于 currentTarget，而 target 只包含事件的实际目标(点击的那一个元素)，如果直接将事件处理程序指定给目标元素则 currentTarget 与 target 相同;如果事件处理程序存在于按钮的父节点中，则值不相同
   （4）要阻止特定事件的默认行为可以使用 preventDefault 方法，例如 a 标签默认跳转，只有 cancelable 属性为 true 的事件才可以使用 preventDefault 方法，可以阻止捕获和冒泡
   （5）stopPropagation 用于立即停止事件在 dom 层传播
   （6）尽管 eventPhase 处于目标发生在冒泡阶段，但是属性值还是为 2，eventPhase 属性值为 2 时 this、target、currentTarger 始终相等
   （7）只有事件处理程序执行中才存在 event，执行完即销毁
2. IE 中的事件对象
   （1）DOM0 级 event 作为 window 的一个属性存在；使用 attachEvent 添加事件 event 会作为参数传入处理函数中，yekeyitongguowindow 访问
   （2）cancelBubble 取消冒泡
   （3）returnValue 取消默认行为
3. 跨浏览器的事件对象

## 13.4 事件类型

（1）UI 事件：用户与页面元素交互时触发
（2）焦点事件：元素获得或者失去焦点触发
（3）鼠标事件：用户通过鼠标在页面上执行操作时触发
（4）滚轮事件：使用滚轮或者类似设备时触发
（5）文本事件：当在文档中输入时触发
（6）键盘事件：通过键盘操作时触发
（7）合成事件：当为 IME（输入法编辑器）输入字符时触发
（8）变动事件：当底层 DOM 结构变化时触发

1. UI 事件
   （1）load：当页面完全加载后在 window 上触发，框架加载完毕在框架集上面触发，图像加载完毕在 img 元素上触发，或者嵌入的内容加载完毕时在 object 元素上触发

- 完全加载包括 js、css 等外部资源
- 在 html 中无法访问 window，本来应该向 document 添加 onload 但是为了向后兼容，所有浏览器在 window 上都实现了 onload
  （2）unload：卸载后触发（同上）
- 用户从一个页面切换到另一个页面就会触发 unload，谁用最多的情况时清除引用避免内存泄漏
- 此时页面加载时存在的那些对象此时不一定存在，操作 dom 可能报错
  （3）abort：用户停止下载，嵌入的内容还没加载完，在 object 上触发
  （4）error：错误时触发（同（1）（2））
  （5）当用户选择文本框中一或多个字符时触发
  （6）resize：当窗口或者框架大小变化时在 window 或者框架上触发
- 可以通过 js 或者 body 的 onresize 特性指定，推荐使用 js 方式
- 浏览器窗口最大化和最小化都会触发
  （7）scroll：当用户滚动带滚动条的元素中的内容时，在该元素上触发，body 元素中包含所加载页面的滚动条

2. 焦点事件
   （1）在页面元素获得或者失去焦点时触发，利用这些事件并与 document.hasFocus 方法和 document.activeElement 属性配合，可以知晓用户页面的行踪
   （2）blur：元素失去焦点时触发，该事件不会冒泡
   （3）focus：获得焦点触发，不冒泡
   （4）focusin：获得焦点触发，等价 focus 但是会冒泡
   （5）focusout：失去焦点触发
   （6）当焦点从一个元素移动到另一个元素，会依次触发：focusout（失去焦点的元素上触发）；focusin（获得焦点的元素上触发）；blur（失去焦点的元素上触发）；focus（获得焦点的元素上触发）
   （7）即使 focus 和 blur 不冒泡但是可以在捕获阶段侦听到它们
3. 鼠标与滚轮事件
   （1）click：用户单击主鼠标按钮或者按下回撤键时触发，代表可以使用鼠标和键盘触发
   （2）dblclick：双击
   （3）mousedown：用户按下任意鼠标按钮时触发，键盘不行
   （4）mouseenter：鼠标首次进入元素触发，不冒泡，移动到后代元素上不会触发
   （5）mouseleave：鼠标首移动到元素之外触发，不冒泡，移动到后代元素上不会触发
   （6）mousemove：鼠标在元素内移动时重复触发
   （7）mouseout：移到另一个元素触发，可父元素，可子元素
   （8）mouseover：鼠标位于元素外部，首次移入另一个元素边界之内时触发
   （9）mouseup：释放鼠标时触发
   （10）页面上所有元素都支持鼠标事件，除了 mouseenter 和 mouseleave，其它事件东欧冒泡也可以被取消，取消鼠标事件将影响浏览器的默认行为，取消鼠标事件默认行为会影响其它事件
   （11）只有在同一个元素上触发 mousedown 和 mouseup 才会触发 click
   （12）客户去坐标位置：clientX 和 clientY 不包括页面滚动的距离，所以不表示鼠标在页面上的位置
   （13）页面坐标位置：pageX 和 pageY，表示鼠标在页面中的位置
   （14）屏幕坐标位置：screenX 和 screenY 可以确定鼠标相对于整个屏幕的坐标信息
   （15）修改键
   （16）相关元素：在 mouseover 和 mouseout 事件下 relatedTarget 属性提供相关元素的信息
   （17）鼠标按钮：button 属性主要用于 mousedown 和 mouseup，0 表示主按钮，1 表示滚轮，2 表示右按钮
   （18）鼠标滚轮事件：mousewheel 事件，会冒泡，event 的 wheelDelta 属性向前滚动为 120 的倍数，向后滚动为-120 的倍数
   （19）触摸设备：apple 不支持 dblclick 事件，双击浏览器窗口会放大画面且没办法改变该行为；轻击可单机元素会触发 mousemove 事件；mousemove 事件会触发 mouseover 和 mouseout 事件；两个手指在屏幕上且随页面移动会触发 mousewheel 和 scroll 事件
4. 键盘与文本事件
   （1）keydown：按下键盘任意键触发，不放连续触发
   （2）keypress：按下键盘字符键触发，不放连续触发
   （3）keyup：释放触发
   （4）键盘事件 event 的 keyCode 属性包含对应字符的 ASCII 码
   （5）发生 keypress 事件意味着按下的键会影响屏幕中文本的显示
   （6）charCode 属性只有在发生 keypress 事件才有值
   （7）DOM3 级变化：不在包含 charCode，取而代之 key（相应的文本）和 char（按下字符键与 key 相同，非字符键为 null）
   （8）textInput：只有在可编辑区域才能触发；只有用户按下能够输入实际字符的键时才会被触发，包含 data 属性，包含用户输入的字符而非编码
   （9）inputMethod：0 不知道；1 键盘；2 粘贴；3 拖放；4IME；5 表单选择某项；6 手写；7 语音；8 几种方式组合；9 脚本 5.复合事件 402
