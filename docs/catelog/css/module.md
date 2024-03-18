---
sidebar: false

---

## `link` vs. `@import`
两者的区别:
- link是xhtml标签，除了引入css外，还可以用来定义RSS；@import属于css范畴，只能加载css
- link引用css的时候，在页面载入时同时加载。 @import需要页面完全加载完成后加载
- link是xhtml标签，无兼容问题，@import是css2提出来的，低版本的浏览器不支持
- link支持js去控制DOM改变样式，@import不支持


