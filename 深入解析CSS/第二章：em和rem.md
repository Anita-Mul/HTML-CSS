## 2.2 em和rem
#### em
 - 当前元素的px = 当前元素的字号（如果当前元素没有设置字号的大小，就设置为继承的字号）* 当前元素的em
 - 对于大多数浏览器来说，默认的字号是16px
 - 当设置padding、height、width、border-radius等属性时，使用em会很方便。这是因为当元素继承了不同的字号，或者用户改变了字体设置时，这些属性会跟着元素均匀地缩放
 - 改变字号就可以整体缩放元素
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210123092914164.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210123092956121.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
 - 可能出现的问题
	1. 声明值和计算值不一致（padding是基于刚算出来的slogan类里的font-size，而不是body里面的font-size）
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210123093714544.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
	2. 字体缩小的问题
	 为了算出每个元素的准确值，就需要知道继承的字号，如果这个值是在父元素上用em定义的，就需要知道父元素的继承值，以此类推，就会沿着DOM树一直往上查找。
	 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210123094100587.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
如果最外层的字号小于1，那么就会出现字体缩小的情况
纠正文字缩小的情况：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210123094417796.png)
***
#### 使用rem设置字号
 - rem是root em的缩写。rem不是相对于当前元素，而是相对于根元素的单位。不管在文档的什么位置使用rem,1.2rem都会有相同的计算值：1.2乘以根元素的字号
 - 在这个例子里，根元素的字号为浏览器默认的字号16px（根元素上的em是相对于浏览器默认值的）
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210123095039227.png)
 - 对子号使用相对单位
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210123095234734.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)
 - 一般用rem设置字号，用px设置边框，用em设置其它大部分属性（尤其是：内边距、外边距和圆角）
