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
