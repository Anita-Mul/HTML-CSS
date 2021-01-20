1. 视口
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120093257980.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120093307494.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120093329541.png)
2. meta视口标签
	`width=device-width` 宽度设置为设备的宽度
	就是按照原本的设计稿来显示，别放大，也别缩小
	initial-scale  = 1.0初始缩放比
	maximum-scale  = 1.0最大缩放比
	minimum-scale  = 1.0最小缩放比
	user-scalable=no 用户不可以缩放，就是用户一捏，可以把视图放大
	```html
	<meta name="viewport"
	        content="width=device-width, initial-scale=1.0, user-scalable=no,maximum-scale=1.0,minimum-scale=1.0">
	```
3. 字符集![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120101431972.png)
4. div和span标签
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120101705570.png)
5. 图像标签（在标签内结束）
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120101848822.png)
6. 链接标签
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120102446873.png)
target：`_self` 是默认值，`_blank`在新窗口打开

7. 清除内外边距，就是将鼠标放到元素上，黄色的条就是边距
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120104232442.png)
8. 默认是父盒子的宽度的100%
	`<p>`标签主要用于存放文字，因此`<p>`l里面不能放块级元素，特别是不能放`<div>`
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120110710983.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120110543925.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120110939469.png)


9. 链接伪类选择器
	 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120105618883.png)
10. :focus 伪类选择器
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012011010280.png)
11. 背景位置
	```javascript
	background-position:x y;
	```
	y轴：top center bottom
	就是在这张图片上的top center botto位置和浏览器的顶端对齐
	x轴：left center right就是这张图片位于页面的左边，中间，右边，且这张图片全部显示                      
12. 背景色半透明
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120142109202.png)
13. 选择器优先级
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120142514874.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
14. 外边距合并
	使用margin定义块元素的垂直外边距时，可能会出现外边距的合并（嵌套块级元素垂直外边距塌陷、相邻块级元素垂直外边距合并）
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120145357413.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012014550227.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120145604851.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
15. 标准流
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120151706653.png)
16. 浮动特性（就像热气球，飞起来，不占有原来的位置）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120151949944.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120152332329.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
17. 浮动元素经常和标准流父级搭配使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120152650312.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
18. 清除浮动
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120153109960.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120153410904.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120153556478.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120153711829.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120153756364.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
19. 让块级元素水平居中
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120143959589.png)
20. 定位
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120155230882.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120155710405.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120155834598.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120160053810.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120160841905.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
21. 定位叠放次序
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120160954589.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
22. 绝对定位的盒子居中
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120161330501.png)
23. 定位的特殊特性
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120161541388.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120162006792.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
24. 元素的显示和隐藏
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120162214712.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120162245183.png)
25. 溢出
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120162431731.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
26. 鼠标样式
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120172453480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
27. vertical-align 属性使用（文字和行内块元素的对齐方式）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120175516461.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120175540814.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120175050144.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120175135273.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120175225639.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120175328920.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
28. 解决图片底部默认空白缝隙问题
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120180004513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
29. margin负值的运用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120191147481.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
30. HTML5新增的语义化标签
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120193817175.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
31. HTML5新增input类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012019513378.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120195200776.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120195430994.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
32. css3其他特性
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120201724290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
33. translate
 - 使用浮动（margin）和定位都可以移动，但是浮动会改变其他盒子的位置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120210300325.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012020375391.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012020383662.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120210523558.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
34. 2D转换综合写法
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120211058616.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120220930682.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120221109366.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120221131350.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
35. 透视
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120225536812.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120225713917.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210120231652338.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)


