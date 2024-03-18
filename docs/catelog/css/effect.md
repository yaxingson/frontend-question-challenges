---
sidebar: false

---

## CSS动画的实现

## 单行或多行文本溢出省略

## 视差滚动

## 特殊形状的实现

### 三角形

### 扇形

## 显示小于`12px`的文字

## `transition` vs. `animation`

> 补间动画的关键帧

```css
.el {
  will-change: opacity;
}

```

## `requestAnimationFrame`

> window.requestAnimationFrame()通知浏览器执行一个动画，并且要求浏览器在下次重绘之前
调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

```js
window.cancelAnimationFrame()  // 取消动画

```
实现动画的优势:

- 节省CPU开销

- 函数节流

- 减少DOM操作






