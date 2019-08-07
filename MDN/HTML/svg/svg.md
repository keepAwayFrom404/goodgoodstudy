# svg

1. 可伸缩矢量图，本质是文本文件，体积小，不变形
2. 可以直接使用，也可以插入 img 等标签或者作为 css 背景
3. 宽高不指定默认为 300\*150
4. viewbox: 分别为左上的横纵坐标，视口的宽度和高度
5. circle 标签：cx、cy、r 表示横纵坐标和半径

- fill: 填充色
- stroke：描边色
- stroke-width：边框宽度

6. line 标签用来绘制直线，x1、y1、x2、y2 表示开始结束坐标，style 是样式
7. polyline 标签绘制折线，points 属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔
8. rect 标签绘制矩形，x、y 起点坐标，width、height 宽高
9. ellipse 标签绘制椭圆，cx、cy 指定椭圆中心坐标，rx、ry 指定横向轴和纵向轴半径
10. polygon 标签绘制多边形，point 与折线类似
11. path 标签制路径，d 属性表示绘制顺序，它的值是一个长字符串，每个字母表示一个绘制动作，后面跟着坐标

- M：移动到（moveto）
- L：画直线到（lineto）
- Z：闭合路径

12. text 绘制文本，x 属性和 y 属性，表示文本区块基线（baseline）起点的横坐标和纵坐标。文字的样式可以用 class 或 style 属性指定
13. use 标签复制一个形状，herf 指定要复制的节点，x、y 是 use 左上角的坐标，还可以指定宽高
14. g 标签将多个形状组成一个组，方便复用
15. defs 标签用于自定义形状，内部代码不会显示，仅供引用
16. pattern 自定义一个形状，该形状可以被引用来平铺一个区域，patternUnits="userSpaceOnUse"表示高度和长度为实际像素值
17. image 标签插入图片文件，xlink:herf 表示图像的来源
18. animate 用于产生动画效果

- attributeName：发生动画效果的属性名。
- from：单次动画的初始值。
- to：单次动画的结束值。
- dur：单次动画的持续时间
- repeatCount：动画的循环模式。

19. animateTransform：animate 对 css 的 transform 属性不起作用，需要变形使用这个
20. 使用 img 标签无法 js 获取 dom
