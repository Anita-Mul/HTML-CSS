## һ��������λ����
�ڽ� BFC ֮ǰ�����������˽�һ�³����Ķ�λ��������λ�����ǿ���Ԫ�صĲ��֣������ֳ�������:

 - ��ͨ�� (normal flow)
����ͨ���У�Ԫ�ذ������� HTML �е��Ⱥ�λ�����϶��²��֣�����������У�����Ԫ��ˮƽ���У�ֱ�����б�ռ��Ȼ���У��鼶Ԫ����ᱻ��ȾΪ������һ�����У���������ָ������������Ԫ��Ĭ�϶�����ͨ����λ��Ҳ����˵����ͨ����Ԫ�ص�λ���ɸ�Ԫ���� HTML �ĵ��е�λ�þ�����
 - ���� (float)
�ڸ��������У�Ԫ�����Ȱ�����ͨ����λ�ó��֣�Ȼ����ݸ����ķ��򾡿��ܵ�����߻��ұ�ƫ�ƣ���Ч����ӡˢ�Ű��е��ı��������ơ�
 - ���Զ�λ (absolute positioning)
�ھ��Զ�λ�����У�Ԫ�ػ�����������ͨ������˾��Զ�λԪ�ز�������ֵ�Ԫ�����Ӱ�죬��Ԫ�ؾ����λ���ɾ��Զ�λ�����������

## ����BFC ����
Formatting context(��ʽ��������) �� W3C CSS2.1 �淶�е�һ���������ҳ���е�һ����Ⱦ���򣬲�����һ����Ⱦ����������������Ԫ�ؽ���ζ�λ���Լ�������Ԫ�صĹ�ϵ���໥���á�
<br/>
��ô BFC ��ʲô�أ�

BFC �� Block Formatting Contexts (�鼶��ʽ��������)��������������λ��������ͨ����

**���� BFC ���Ե�Ԫ�ؿ��Կ����Ǹ����˵Ķ������������������Ԫ�ز����ڲ�����Ӱ�쵽�����Ԫ�أ����� BFC ������ͨ������û�е�һЩ���ԡ�**

ͨ��һ�����������԰� BFC ���Ϊһ����յĴ����ӣ������ڲ���Ԫ��������η���������������Ӱ�쵽�ⲿ��

## �������� BFC
ֻҪԪ������������һ�������ɴ��� BFC ���ԣ�

 - body ��Ԫ��
 - ����Ԫ�أ�float �� none �����ֵ
 - ���Զ�λԪ�أ�position (absolute��fixed)
 - display Ϊ inline-block��table-cells��flex
 - overflow ���� visible �����ֵ (hidden��auto��scroll)

## �ġ�BFC ���Լ�Ӧ��
###### 1. ͬһ�� BFC ����߾�ᷢ���۵�
```html
<head>
div{
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
</head>
<body>
    <div></div>
    <div></div>
</body>
```
![���������ͼƬ����](https://img-blog.csdnimg.cn/2021012522273772.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)

��Ч���Ͽ�����Ϊ���� div Ԫ�ض�����ͬһ�� BFC ������ (����ָ body Ԫ��) ���Ե�һ�� div ���±߾�͵ڶ��� div ���ϱ߾෢�����ص���������������֮�����ֻ�� 100px�������� 200px��

�����ⲻ�� CSS �� bug�����ǿ������Ϊһ�ֹ淶��**�����Ҫ������߾���ص������Խ�����ڲ�ͬ�� BFC ������**��

```html
<div class="container">
    <p></p>
</div>
<div class="container">
    <p></p>
</div>
```

```css
.container {
    overflow: hidden;
}
p {
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
```

��ʱ���������ӱ߾�ͱ���� 200px
![���������ͼƬ����](https://img-blog.csdnimg.cn/20210125222855911.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)


###### 2. BFC ���԰���������Ԫ�أ����������
���Ƕ�֪����������Ԫ�ػ�������ͨ�ĵ���������������һ������

```html
<div style="border: 1px solid #000;">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```
![���������ͼƬ����](https://img-blog.csdnimg.cn/20210125222950469.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)

����������Ԫ�ظ������������ĵ�������������ֻʣ�� 2px �ı߾�߶ȡ����ʹ���������� BFC����ô������������Ÿ���Ԫ�ء�

```html
<div style="border: 1px solid #000;overflow: hidden">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

Ч����ͼ��

![���������ͼƬ����](https://img-blog.csdnimg.cn/20210125223204698.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)

###### 3. BFC ������ֹԪ�ر�����Ԫ�ظ���
������һ�����ֻ���Ч����

```html
<div style="height: 100px;width: 100px;float: left;background: lightblue">����һ���󸡶���Ԫ��</div>
<div style="width: 200px; height: 200px;background: #eee">����һ��û�����ø���, 
Ҳû�д��� BFC Ԫ��, width: 200px; height:200px; background: #eee;</div>
```
![���������ͼƬ����](https://img-blog.csdnimg.cn/20210125223232753.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)

��ʱ����ʵ�ڶ���Ԫ���в��ֱ�����Ԫ�������ǣ�(�����ı���Ϣ���ᱻ����Ԫ��������) ��������Ԫ�ر����ǣ��ɴ��ڶ���Ԫ�ص� BFC ���ԣ��ڵڶ���Ԫ���м��� `overflow: hidden`���ͻ��ɣ�
![���������ͼƬ����](https://img-blog.csdnimg.cn/20210125223353610.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)

���������������ʵ����������Ӧ���֣�Ч��������ʱ����ߵĿ�ȹ̶����ұߵ���������Ӧ���(ȥ�������ұ����ݵĿ��)��
