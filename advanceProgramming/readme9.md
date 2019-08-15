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

1. Node 类型：浏览器所有节点类型都继承自 NODE 类型，都有相同的基本属性和方法
   （1）每一个节点都有一个 childNodes 属性，保存着一个 NodeList 对象（一组有序节点，类数组），是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动的反映到 NodeList 对象上
   （2）hasChildNodes 返回是否存在子节点的布尔值；ownerDocument 指向表示整个文档的文档节点
   （3）insertBefore 传入要插入的节点和作为参照的节点，被插入节点会变成参照节点的前一个同胞节点，同时方法返回
   （4）replaceChild 替换指定位置的节点，要插入的节点和要替换的节点，返回要替换的节点；removeChild，参数为将要移出的节点，返回这个节点
   （5）cloneNode 接收布尔值表示是否执行深复制，深复制节点及整个子节点树，浅复制只复制节点本身，只复制特性不复制 js（事件处理函数）
   （6）normalize 处理文档中的文本节点，在后代节点找到空文本删除，两个响铃文本合并
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
