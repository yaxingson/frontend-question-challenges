---
sidebar: false

---

## 元素显示模式
| 属性值  | 描述  |
| -----  | ----- |
| none   | 
| block  | 块级元素 |
| inline | 行内元素 |
| inline-block |
| table  |
| list-item    | 

> 默认情况下，浏览器会把inline内联元素间的空白字符(空格、换行、Tab等)渲染成一个空格


## 对BFC的理解
BFC（Block Formatting Context，块级格式化上下文）渲染区域的的渲染规则：
- 内部的盒子会在垂直方向上一个接一个的放置
- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关
- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
- BFC的区域不会与float的元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

触发BFC的条件包括但不限于：
- 根元素，即HTML元素
- 浮动元素：float值为left、right
- overflow值不为 visible，为 auto、scroll、hidden
- display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
- position的值为absolute或fixed

应用场景：
1. 防止margin重叠（塌陷）
2. 清除内部浮动
3. 自适应多栏布局


## 重绘和回流
重绘: 由元素样式的改变触发

回流: 由元素的大小或者位置发生变化（当页面布局和几何信息发生变化）触发

> 重排一定会触发重绘，重绘不一定触发重排

避免回流的方案:

1. DOM操作的读写分离

导致浏览器刷新渲染队列的属性或方法包括:
- offsetTop
- offsetLeft
- offsetWidth
- clientTop
- clientWidth
- scrollTop
- getComputedStyle
- currentStyle

2. 元素样式批量修改

```js
// 方式一
div.className = 'box'

// => 方式二
div.style.cssText = 'width: 20px; height: 20px'

```

3. 缓存元素布局信息
```js
div.style.left = div.offsetLeft + 1 + 'px'
div.style.top = div.offsetTop + 1 + 'px'

// => 改为
const curLeft = div.offsetLeft
const curTop = div.offsetTop
div.style.left = curLeft + 1 + 'px'
div.style.top = curTop + 1 + 'px'

```

4. 元素批量修改

> 文档碎片

5. 将动画效果尽量应用到脱离文档流的元素上，例如position属性为absolute或者fixed的元素

6. 尽量用translate改变元素位置而不是采用定位

## 层叠上下文 



