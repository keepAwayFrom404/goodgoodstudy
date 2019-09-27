# 第十八章 JS 与 XML

1. XML 一度成为存储和通过因特网传输结构化数据的标准，浏览器无法解析 XML，DOM 出现之后浏览器都内置了对原生支持，同时也提供了一系列的技术支持
2. XPath 是设计来在 DOM 中查找节点的一种手段，因此对 XML 处理也很重要。
3. XSLT 市与 XML 相关的技术，利用 XPath 将文档从一种表现形式转换成另一种表现形式。与 XML 和 XPath 不同，它没有正式的 API，正式的 DOM 规范中页没有它的位置。

# 第十九章 E4X

1. E4X 为处理 XML 定义了新的语法，也定义了特定于 XML 的对象，它只是 ECMA 对 ES 的扩展，目的是为了操作 XML 数据提供与标准的 ES 更接近的语法。

# 第二十章 JSON

（1）理解 JSON 语法
（2）解析 JSON
（3）序列化 JSON
（4）因为 XML 太繁琐冗长
（5）JOSN 是一种数据格式，不是编程语言，并不是只有 js 才使用 JSON，它是一种数据格式，很多编程语言都有针对 JSON 的解析器和序列化器。

## 20.1 语法

（1）可以表示以下三种类型的值：

- 简单值：使用 js 相同的语法，可以在 JSON 中表示字符串、数值、布尔值和 null，但是不支持 undefined
- 对象： 一组无序的键值对
- 数组：也是复杂数据类型，一组有序值的列表，可以通过数值索引来访问其中的值
  （2）JSON 不支持变量、函数或对象实例，它就是表示结构化数据的格式，虽然和 js 中表示的某些语法相同，但它并不局限 js 范凑

## 20.2 解析与序列化

1. JSON 对象
   （1）早期使用 eval 解析，返回 js 对象和数组
   （2）现在有内置 JSON 全局对象
   （3）内置 stringify 和 parse 方法，分别序列化为 JSON 字符串和解析为原生 js
   （4）在序列化 js 对象时，所有的函数及原型成员都会被有意忽略，不体现在结果中，此外，值为 undefined 的属性也会跳过
   （5）序列化选项
2. 序列化选项
   （1）stringify 还可以接收另外两个参数，用于指定用不同的方式序列化 js 对象，第一个是过滤器，可以是数组也可以是函数，第二个是一个选项，表示是否在 JSON 保存缩进

- 如果是数组，结果中只包含数组中列出来的属性
- 第二个参数是函数行为稍微不同，传入的函数接收两个参数，属性名和属性值，根据属性名可以知道应该如何处理需要序列化的对象中的属性，属性名只能是字符串，而在值并非键值对的情况下，键名也可以是空字符串，函数返回的值是相应的键的值，如果返回 undefined，相应的属性会被忽略
  （2）字符串缩进
- 参数为数值：表示每个级别缩进的空格数,最大为 10
- 参数为字符串：将这个字符串用做缩进字符
  （3）可以给对象定义 toJSON 方法，返回其自身的 JSON 数据格式，可以为任何对象添加 toJSON 方法
  （4）toJSON 方法可以作为函数过滤器的补充，假设把对象传给 stringify，序列化该对象的顺序如下：
- 如果存在 toJSON 方法且能通过它取得有效的值则调用该方法，否则返回对象本身
- 提供第二个参数则使用这个函数过滤器，传入函数过滤器的值是第上一步返回的值
- 对上一步返回的每个值进行相应的序列化
- 如果有第三个参数，执行相应的格式化

3. 解析选项
   （1）parse 也可以接收另一个参数：是一个函数，将在每个键值对上调用，与 stringify 过滤函数类似，参数相同，可以称为还原函数，
   （2）返回 undefined 则从结果删除相应的键，返回其他值插入结果
   #  第二十一章 Ajax 与 Comet
   （1）使用 XMLHttpRequest 对象和事件
   （2）了解跨域 Ajax 通信的限制

## 21.1 XMLHttpRequest 对象

（1）IE5 首先引入，是通过 MSXML 库中的一个 ActiveX 对象实现的

1. XHR 的用法
   （1）第一个需要调用的方法是 open，接收三个参数：要发送的请求的类型、请求的 URL 和表示是否异步的布尔值；调用 open 并不会真正发起请求，而是启动一个请求以备发送，只能向同一个域中使用相同的端口号和协议的 URL 发送请求，否则报错
   （2）要发送特定的请求需要调用 send 方法，接收一个参数：作为请求主体发送的数据，不需要请求实体传 null，调用 send 之后请求就会被分派到服务器，
   （3）由于请求同步 js 代码会等到服务器响应之后再执行，收到响应后，响应的数据会自动填充 XHR 对象的属性：

- responseText：作为响应主体被返回的文本
- responseXML：如果响应的内容是 text/xml 或者 application/xml，这个属性将保存这响应数据的 XML DOM 文档
- status：响应的 HTTP 状态
- statusText：HTTP 状态的说明
  （4）大多数情况要发送异步请求，才能让 js 继续执行而不必等待响应，这时候可以检测 XHR 对象的 readyState 属性:
- 0：未初始化，还没有调用 open
- 1: open 未 send
- 2: 已经 send 但没接收到响应
- 3: 已经接收到部分数据
- 4: 已经接受全部数据，可以在客户端使用
  （5）只要 readystate 属性指变化就会触发 readystatechange 事件，可以使用该事件判断 readystate 的值

2. http 头部信息
   （1）xhr 请求发送时，会发送下列头部信息：

- Accept：浏览器能够处理的内容类型
- Accept-Chraset：能显示的字符集
- Accept-Encoding：能处理的压缩编码
- Accept-Language：当前设置的语言
- Connection：浏览器与服务器之间的连接类型
- Cookie：当前页面设置的任何 Cookie
- Host：发出请求的页面所在的域
- Referer：发出请求的页面的 URI，
- User-Agent：浏览器用户代理字符串

  （2）使用 setRequestHeader 方法可以设置头部信息，接受两个参数：头部字段名、值；
  （3）要想成功设置请求头部，必须在 open 之后 send 之前设置
  （4）getResponseHeader 传入头部字段名可以得到相应的响应头部信息，而调用 getAllResponseHeaders 可以得到包含所有头部信息的长字符串

3. get 请求
   （1）get 请求一般用于查询操作，查询字符串必须经过编码
4. post 请求
   （1）向服务器发送应该被保存的数据
   （2）与 get 请求相比，post 更消耗资源

## 21.2 XMLHttpRequest 2 级

1. FormData
   （1）FormData 类型为序列化表单和创建与表单格式相同的数据提供了便利
   （2）append 方法，接受两个参数：键和值，创建了 FormData 对象之后，可以直接将它传入 send
   （3）使用 FormData 的方便之处在于不必明确在 xhr 对象上设置头部，而能够识别传入的数据是 FormData 类型，并设置适当的头部信息
2. 超时设定
   （1）timeout 和 ontimeout 事件处理程序，超时触发，此时 readyState 可能已经变为 4 而调用 onreadystatechange 方法，可是在超时请求终止之后访问 status 会报错，所以这里需要捕获错误
3. overrideMimeType 方法
   （1）重写服务器返回的文件类型 MIME，调用必须在 send 前，传入类型即可

## 21.3 进度事件

（1）loadstart：接收到响应的第一个数据触发
（2）progress：接受响应阶段不断触发
（3）error：请求错误触发
（4）abort：调用 abort 终止触发
（5）load：接收到完整的响应数据时触发
（6）loadend：在通信完成或触发 error、load、abort 之后触发

1. load 事件
   （1）使用 onload 事件代替 onreadystatechange 事件，onload 事件会接受 event 事件对象，target 属性指向 xhr 对象，并非所有浏览器都实现了这个事件对象，所以还是需要使用 xhr 对象判断 status
   （2）只要浏览器接收到服务器的响应就会触发 load 事件，意味着必须检验 status 状态判断是否成功
2. progress 事件
   （1）onprogress 事件会接受 event 事件对象，target 属性是 xhr 对象，还包含三个额外的属性：lengthComputable（表示进度信息是否可用的布尔值）、position（已经接收的字节数）、totalSize（Content-LengthContent-Length 响应头部确定的预期字节数）
   （2）必须在 open 之前添加 onprogress 函数

## 21.4 跨域资源共享

（1）xhr 只能访问同源数据
（2）CORS 定义了必须访问跨域资源时，浏览器与服务器应该如何沟通，服务器设置 Access-Control-Allow-Origin 即可解决跨域问题，注意请求和响应不包含 cookie

2. 其他浏览器对 CORS 的实现
   （1）还是使用 XMLHttpRequest，与之前没有变化，通过跨域 xhr 对象可以访问 status 和 statusText，还支持同步请求,
   （2）跨域 xhr 对象有一些限制：

- 不能使用 setRequestHeader 设置头部
- 不能发送和接受 cookie
- 调用 getAllResponseHeaders 总会返回空字符串
  （3）本地资源使用相对 url，远程资源使用绝对 url

3. Preflighted Reqeusts
   （1）CORS 通过 Preflighted Reqeusts 的透明服务验证机制支持开发人员使用自定的头部、get 和 post 之外的方法、以及不同类型的主体内容，在使用下列高级选项发送请求时，就会向服务器发送一个 Preflight 请求，这种请求使用 options 方法发送下列头部：

- origin：与普通类似，请求源信息
- Access-Control-Request-Method：请求自身使用的方法
- Access-Control-Request-Headers：自定义头部信息，多个逗号隔开
  （2）该请求发送后，由服务器决定是否接受该类请求，服务器通过在响应中发送下列头部与浏览器沟通：
- Access-Control-Allow-Origin：与简单请求相同
- Access-Control-Allow-Methods：允许的方法，多个逗号隔开
- Access-Control-Allow-Headers：允许的头部，多个逗号隔开
- Access-Control-Max-Age：应该将这个 Preflight 请求缓存多长时间
  （3）Preflight 请求结束后会按照响应中设置的时间缓存起来

4. 带凭证的请求
   （1）设置 withCredentials 为 true 可以指定某个请求发送凭证，如果服务器接受带凭证会在响应头部加上 Access-Control-Allow-Credentials: true
   （2）如果发送的是带凭证的请求，但是服务器响应头部没包含该头部，那么浏览器不会把响应交给 js，status 为 0，reponseText 为空字符，调用 onerror 回调
5. 跨浏览器的 CORS

## 21.5 其他跨域技术

1. 图像 Ping
   （1）可以动态创建图像，在 onload 和 onerror 中判断是否接收到了响应
   （2）动态创建图像经常用于图像 Ping，图像 Ping 是与服务器进行简单、单向的跨域通信的一种方式，请求的方式是通过查询字符串的方式发送的，而响应可以是任何内容，通常是像素图或 204，通过图像 Ping，浏览器得不到任何数据，但是通过 load 和 error 可以知道响应是什么时候接受到的
   （3）主要用于点击页面跟踪和动态广告曝光次数统计
   （4）图像 Ping 存在两个缺点：只能发送 get 请求、无法访问服务器的响应文本，只用于浏览器和服务器间单向通信
2. JSONP
   （1）JSONP 由两部分组成：回调函数和数据，回调函数是响应到来时应该调用的函数，名字一般在请求中指定，而数据就是传入回调函数中的 JSON 数据
   （2）能直接访问响应文本，两大不足：从其他域加载代码运行，可能夹杂恶意代码、判断请求是否失败不容易，script 的 onerror 事件支持堪忧，暂时只能使用定时器检测是否收到请求
3. Comet
   （1）Comet 近乎能够实时的将信息推送到页面上
   （2）有两种实现 Comet 的方法：长轮询和流

- 短轮询：实时发送请求，服务器实时返回数据，无论数据是否有效；长轮询：页面发起请求，服务器一直保持连接打开，直到有数据可发送，发送完数据浏览器关闭连接，随即又发送一个新请求，这个过程在页面打开期间一直持续不断，轮询的优势是所有浏览器都支持，使用 XHR 对象和 settimeout 就能实现，要做的只是什么时候发请求
- HTTP 流，在整个页面的生命周期只使用一个 HTTP 连接，浏览器向服务器发送请求，连接不断开，服务器周期性向浏览器发送数据；通过监听 onreadystatechange 及检测 readyState 是否为 3，利用 XHR 实现 HTTP 流，当为 3 时 reponseText 久保存着响应数据，就需要比较和之前接收到的数据，判断从什么位置开始取得最新的数据

4. 服务器发送事件
   （1）SSE 是围绕只读 Comet 交互推出的 API 或者模式，用于创建到服务器的单向连接，服务器通过这个连接可以发送任意数量的数据，服务器响应的 MIME 格式必须为 text/event-stream，而且是浏览器 js 能够解析的格式输出；SSE 支持长短轮询、HTTP 流，并在断开连接时自动判断何时重新连接
   （2）SSE API 要预定新的事件流，首先要创建 EventSource 对象并传入一个入口点，传入的 URL 必须域创建对象的页面同源，实例有一个 readyState 属性：1 表示打开了连接，0 表示正连接到服务器，2 表示关闭了连接；另外还有三个事件：open（在建立连接时触发）、message（在从服务器接收到新事件触发）、error（在无法建立连接时触发）；服务器发回的数据保存在 event.data 中，如果想立即断开且不再连接可以使用 close 方法
   （3）事件流：服务器事件会通过持久的 HTTP 响应发送，这个相应的类型为 text/event-stream，响应的格式是纯文本，最简单的情况是每个数据带一个 data：前缀，对于多个连续的以 data：开头的数据行，将作为多段数据解析，每个值之间以换行符分隔，只有包含 data：的数据行后面又换行时才会触发 message 事件；通过 id：可以给特定的事件指定一个关联的 id 位于 data 前后都可以，设置了 id 之后 EventSource 对象会跟踪上一次触发的事件，如果连接断开会发送名为 Last-Event-ID 的特殊头部告诉服务器下一次触发哪个事件，这种机制可以使浏览器以正确的顺序收到连接的数据段
5. Web Sockets
   （1）目标是在一个单独持久连接上提供全双工，双向通信。
   （2）在 js 中创建了 Web Sockets 之后会又一个 HTTP 请求发送到浏览器以发起连接，在得到服务器的响应之后，建立的连接会从 HTTP 升级到 Web Sockets 协议
   （3）由于 Web Sockets 自定义协议，所以 URL 模式有些不同，未加密的协议为 ws，加密为 wss，
   （4）使用自定义协议的好处是能够在客户端和服务器端发送非常少的数据，而不必担心 http 那样字节级的开销，由于传递的数据包很小比较适合移动端
   （5）缺点在于制定协议的时间比 js 的 api 还要长
   （6）Web Sockets API

- 实例话 Web Sockets 之后，浏览器就会马上尝试创建连接，与 XHR 类似，Web Sockets 也有一个 readyState 属性：WebSocket.OPENING (0)正在建立连接、WebSocket.OPEN (1)已经建立连接、WebSocket.CLOSING (2)正在关闭连接、WebSocket.CLOSE (3)已经关闭连接
- 发送和接收数据：发送使用 send 且只支持字符串，使用其他格式，先转再解析；当服务器向客户端发来数据时就会触发 message 事件，这个 message 事件与其他传递消息的协议类似，也是把返回的数据保存在 event.data 中
- 其他事件：open 建立连接触发、error 发生错误连接不能持续触发、close 在连接关闭时触发，三个事件都只支持 dom0 级别语法；其中只有 close 事件有其他额外的信息，这个事件的事件对象有三个额外属性：wasClean（连接是否已经明确的关闭布尔值）、code（服务器状态码）、reason（服务器返回的信息字符串）

6. SSE 与 Web Sockets

- 是否有自由度建立和维护 websockets 服务器
- 到底需不需要双向通信

## 21.6 安全

（1）可以通过 XHR 来访问的链接也可以通过浏览器和服务器访问
（2）对于未被授权系统有权访问某个资源的情况下，称之为 CSRF（跨站点请求伪造）
（3）有几种方法防范 CSRF：

- 要求以 SSL 连接来访问可以通过 XHR 请求的资源（发送 http 请求拿资源，需要身份认证）
- 要求每一次请求都要附带通过相应算法计算得到的验证码
  （4）以下对 CSRF 无效
- 发送 POST 而不是 GET 请求--容易被改变
- 检查来源 URL--来源记录很容易伪造
- 基于 Cookie 进行信息校验--也容易伪造
- XHR 的安全机制：open 另外两个参数：要随请求一起发送的用户名和密码（不要这样作，js 调试就能看到了）
