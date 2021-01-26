## 5.1 Flexbox的原则
 - 给元素添加`display:flex`，该元素变成了一个`弹性容器`（flex container），它的直接子元素变成了`弹性子元素`（flex item）
 - 弹性子元素高度相等，该高度由它们的内容决定
 - 一个弹性容器能控制内部元素的布局
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126145111663.png)
#### 使用flex布局简单实现一个网页
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126145254408.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126145702129.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126145756377.png)
 - 网页的基础样式
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126145950515.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
#### 5.1.1 创建一个基础的Flexbox菜单
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126150101420.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126150158847.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126150452287.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126150607595.png)
—————————————————
浏览器前缀
 - 旧版Safari实现的是`display:-webkit-flex`
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012615134178.png)
	属性名之前也要加前缀
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126151452891.png)
 - 在IE10
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126151603115.png)
 - 可以使用Autoprefixer来自动化这一流程
	[在VSCode中使用Autoprefixer](https://www.jianshu.com/p/0bf040719784)

## 5.1.2 添加内边距和间隔
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012615370147.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126153833810.png)
在这个例子里，应当把菜单项内边距加到内部的`<a>`元素上，而不是`<li>`元素上。

#### 使用外边框给弹性子元素加上间隔
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126150158847.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126154145598.png)
 - 只给一个元素（About）加了auto外边距。如果希望将Support菜单项和About菜单项都推到右侧，则可以把auto外边距加到Support菜单项上。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126154341571.png)
