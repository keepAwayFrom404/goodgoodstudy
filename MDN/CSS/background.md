1. background-image: 可设置元素的一个或多个背景图片

- 默认情况背景图片进行横像和纵向平铺
- 多个背景图片前面的背景图片在上层，后面的在下层

2. background-repeat：设置背景图片的平铺效果，包括水平，垂直

- repeat-x 水平平铺，repeat-y 垂直平铺，默认两个方向平铺
- space 均匀平铺背景图片不会被裁剪，round 水平垂直拉伸图片以尽可能的填充背景，不会被裁剪，no-repeat 不平铺

3. background-attachment：设置背景图片是否固定或者随着滚动移动

- scroll 跟随滚动条一起滚动(默认)，fixed 背景固定位置不随滚动条滚动，local 跟随内容一起滚动

4. background-position：设置背景图片位置，可设置背景图片的 4 个边角水平和纵向的起始位置

- 默认定位于左上角（0%，0%）
- 只指定 x 会垂直居中，也可以在数值前指定方位

5. background-size：设置背景图片大小

- 默认为原始大小（auto，auto）
- 设置一个值，另一个值 auto，支持像素和百分数
- cover 把背景图片拓展至足够大，以使背景图像完全覆盖背景区域，背景图像的某些部分可能显示不下，会保持横轴比，最小边进行适配，多余的裁剪；contain 使图像拓展至最大尺寸，使其宽度和高度完全适应内容区域，会保持横轴比，最大边进行适配，可能出现白边

6. 简写

- color、image、repeat、attachment、position、
