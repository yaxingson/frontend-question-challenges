---
sidebar: false

---

## `ajax`的原理和实现
AJAX (Async Javascript and XML): 即异步的JavaScript和XML，一种创建交互式网页应用的网页开发技术，
可以在不重新加载整个网页的情况下，与服务器交换数据，并且更新部分网页

![](./assets/ajax.png)

函数封装的实现:

```js
function ajax(options) {
  const xhr = new XMLHttpRequest()

  options = options || {}
  options.type = (options.type || 'GET').toUpperCase()
  options.dataType = options.dataType || 'json'
  const params = options.data

  if (options.type === 'GET') {
      xhr.open('GET', options.url + '?' + params, true)
      xhr.send(null)
  } else if (options.type === 'POST') {
      xhr.open('POST', options.url, true)
      xhr.send(params)

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          let status = xhr.status
          if (status >= 200 && status < 300) {
              options.success && options.success(xhr.responseText, xhr.responseXML)
          } else {
              options.fail && options.fail(status)
          }
      }
  }
}


```
