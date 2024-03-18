---
sidebar: false

---

## 对盒模型的理解
> CSS基础框盒模型 (CSS basic box model)

从二维的角度观察元素的模型图:
![](./assets/box-model-2d.png)

盒模型的三维图:
![](./assets/box-model-3d.png)

### 标准盒模型

```css
box-sizing: content-box;

```

### 怪异盒模型

```css
box-sizing: border-box;

```

> 当设置margin-top或margin-left为负值时，元素自身位置发生变化；而设置margin-bottom或margin-right为负值时，相邻元素位置发生变化


## 隐藏页面元素
| 实现方式  | 重排 | 重绘 | 存在于DOM | 触发自身事件 | 过渡 | 子元素可显示 | 被遮挡元素可触发事件 |
| ------ | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| display | ✔ | ✔ | ❌️ | ❌️ | ❌️ | ❌️ |  ✔ |
| visibility |
| opacity | 
| width/height |
| position |
| clip-path |
| transform |
| z-index   |

## 浮动

## 定位
| 属性值  | 描述   |
| -----   | ----- |
| static   |
| relative |
| absolute |
| fixed    | 相对于浏览器窗口进行定位 |
| sticky   | 相对于用户滚动位置进行定位 |


### 粘性布局

## 水平垂直居中布局

## 圣杯布局和双飞翼布局

## 多栏布局

## 弹性盒布局

## 网格布局

## 响应式布局


<style module>
table {
  text-align: center;
}


</style>
