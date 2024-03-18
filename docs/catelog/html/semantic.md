---
sidebar: false

---

## `iframe`
> 利用iframe可以实现跨域通信，实现不同域名之间的数据传递

应用场景：

- 网页编辑器

- 加载广告或邮箱

## 语义化的理解
指使用恰当的标签来描述网页内容的结构和含义，使网页结构更加清晰、易于理解和维护

语义化元素包括但不限于:
- article
- section 
- aside
- header
- nav 

> 语义化有利于SEO，浏览器爬虫会根据不同的标签赋予不同的权重，同时方便其他设备解析，如屏幕阅读器

## `meta`
网页的元数据: 指提供关于网页的额外信息，例如网站描述、关键字、字符编码等

| name | 含义 |
| ----- | ----- |
| viewport | 用于控制网页在移动设备上的显示方式，可以通过设置不同的值来调整网页的缩放比例、布局和视口大小，以适应不同设备的屏幕尺寸和分辨率|
| charset  | 网页的编码，可选值为UTF-8、GBK、GB2312等     |
| keywords |
| description |
| author   |
| robots   |
| theme-color |
| og:title    |
| og:description |
| og:image    |

viewport属性可选值:
- width: 设置视口的宽度，可以使用具体的像素值或特定的关键字（`device-width`）
- initial-scale: 设置初始缩放比例
- minimum-scale: 设置允许用户进行缩放的最小比例
- maximum-scale:设置允许用户进行缩放的最大比例
- user-scalable：设置用户是否可以手动缩放网页，可以设置为yes或no

```html
<!-- 页面自动跳转 -->
<meta http-equiv="refresh" content="5;url=https://www.jd.com/#ns">


```


## `svg`

## 空元素
标签内没有内容的HTML标签


## 图像地图
图像地图：一种将静态图像转化为交互式元素的多功能功能，即可以在图像中创建可点击的区域（热点），从而引导用户访问不同的图像部分或外部网页


## HTML5内容模块
|  模块   |  元素   |
| -----   | ------  |
| Metadata    | link、meta、title  |
| Flow        |
| Sectioning  |
| Heading     |
| Phrasing    |
| Embedded    | audio、video、canvas | 
| Interactive | a、button、input    |



## 替换元素
通过修改某个属性值呈现的内容就可以被替换的元素

替换元素的特点:
- 内容的外观不受页面上的CSS的影响，即样式表现在CSS作用域之外
- 拥有自己的尺寸
- 在很多CSS属性上有自己的一套表现规则
- 所有的替换元素都是内联水平元素

替换元素的尺寸包括固有尺寸、HTML尺寸和CSS尺寸，其计算规则为:
1. 如果没有CSS尺寸和HTML尺寸，则使用固有尺寸作为最终的宽高
2. 如果没有CSS尺寸，则使用HTML尺寸作为最终的宽高
3. 如果有CSS尺寸，则最终尺寸由CSS属性决定
4. 如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示
5. 如果上面的条件都不符合，则最终宽度表现为300像素，高度为150像素
6. 内联替换元素和块级替换元素使用上面同一套尺寸计算规则







