---
sidebar: false

---

## 设备像素、CSS像素和设备独立像素
| 概念 | 描述 |
| ----- | ----- | 
| CSS像素 | 相对的是设备像素 |
| 设备像素 | 指设备能控制显示的最小物理单位 |
| 设备独立像素 | 与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素 |
| 设备像素比 | 代表设备独立像素到设备像素的转换关系 |
| 像素密度 | 每英寸像素，表示每英寸所包含的像素点数目 |  

> 一般情况，页面缩放比为1，即无缩放时，1个CSS像素等于1个设备独立像素

![](./assets/dpr.png)

```javascript
console.log(window.screen.height)
console.log(window.devicePixelRatio)

```

## 移动端适配`1px`

## 多倍图

```css
.my-image { background: url(low.png); }

@media only screen and (min-device-pixel-ratio: 1.5) {
  .my-image { background: url(high.png); }
}

```

```html
<img src="default.jpg" alt="Default Image" 
  srcset="image1.jpg 500w, image2.jpg 800w, image3.jpg 1200w">

```


