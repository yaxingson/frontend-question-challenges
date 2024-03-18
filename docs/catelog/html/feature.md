---
sidebar: false

---

## HTML5新特性
### 语义化标签

### 新增API

```js
document.visibilityState

```

### 表单功能
- 新增表单类型

```html
<input type="range" />
<input type="search" />
<input type="data" />

```

- 新增表单属性

```html
<input type="text" pattern="" placehoder="" autocomplete="off" required autofocus />

<select multiple></select>

```

### 音频和视频

> WebRTC：一项实时通讯技术，它允许网络应用或者站点在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，
实现视频流和（或）音频流或者其他任意数据的传输

### canvas

### svg

### 地理定位

```js
navigator.geolocation.getCurrentPosition()

```

### 拖拽API 

元素拖放事件:
- dragstart
- dragover
- dragenter
- dragleave
- dragend 
- drop

### web worker
主线程和新线程之间数据交换的接口：
- postMessage
- onmessage

### web storage 
浏览器存储包括:
- sessionStorage
  - 仅为会话存储数据，这意味着数据将一直存储到浏览器（或选项卡）关闭
  - 存储限额大于`cookie`（最大5MB）

- localStorage
  - 存储的数据没有过期日期，只能通过JavaScript、清除浏览器缓存或本地存储的数据来清除
  - 存储限额通常为5MB左右

- IndexDB

### websocket
一种在单个TCP连接上进行`全双工`通讯的协议 (双向通信协议)

> 全双工指可以同时进行信号的双向传输（A→B且B→A,）即A→B的同时B→A，是瞬时同步的

主流的服务端推送方案:

- HTTP请求轮询

```js
const ws = new WebSocket('')

```



### web components

- Custom element（自定义元素）

- Shadow DOM（影子DOM）

- HTML template（HTML模板）



## 离线缓存

```html
<!DOCTYPE html>
<html manifest="example.appcache">
<head>


</head>
<body>

</body>
</html>

```

`manifest`文件格式:

```
# example.appcache

CACHE  MANIFEST
 # version 2.0
/icketang.css
/icketang.js
/icketang. png

FALLBACK：
/home/ /404.html

NETWORK 
login. php

```



