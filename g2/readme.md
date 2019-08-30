## 图表

- 自适应是根据父元素宽度计算的，如果父容器隐藏，则会将宽度计算成 0，显示父容器时，需要调用一下 chart.forceFit()
- 仅当浏览器的窗口变化时，图表会重新计算宽度，其他情况下不进行宽度的计算和自适应

## 装载数据

- JSON 数组
- DataView 对象

## 图表事件

1. 画布基础事件：mousedown、click、dbclick 等
2. 绘图区域事件：plotmove、plotclick 等
3. tooltip 事件：tooltip：show、：hide、：change
4. 图形元素事件：可使用图形元素名+基础事件名组合图形元素上的事件
