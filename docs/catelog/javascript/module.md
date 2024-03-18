---
sidebar: false

---

## `ES Module`
模块: 能够单独命名并独立地完成一定功能的程序语句的集合

- 外部特征：指模块跟外部环境联系的接口和模块的功能

- 内部特征: 指模块的内部环境具有的特点

主流的JavaScript程序模块化方案:

- AMD 

- CMD

- CommonJS
  - 所有代码都运行在`模块作用域`，不会污染全局作用域
  - 模块是`同步`加载的，即只有加载完成，才能执行后面的操作
  - 模块在首次执行后就会`缓存`，再次加载只返回缓存结果，如果想要再次执行，可清除缓存
  - require返回的值是被输出的`值的拷贝`，模块内部的变化也不会影响这个值

- ESM
  - 模块内部自动采用了`严格模式`

> ESM设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量

```js
// a.js
function v1() { ... }
function v2() { ... }

// 通过as可以进行输出变量的重命名
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
}

// b.js
// 当加载整个模块的时候，需要用到星号*
import * as circle from './a'

```


动态加载模块:

```js
import('/modules/myModule.mjs')
  .then((module) => {
    // ...

  })

```
