---
sidebar: false

---

## `var`、`let` vs. `const`
> 顶层对象，在浏览器环境指的是window对象，在Node指的是global对象

变量提升：

```js
console.log(x)  // undefined 

var x = 56

```

块级作用域内出现暂时性死区 (即只有等到声明变量后，才可以获取和使用该变量):

```js
var x = 12

if(true) {
  console.log(x)  // ReferenceError
  let x = 80
}

```


## 数据类型
### 原始类型

- Number 

```js
console.log(typeof NaN) // "number"
console.log(-0/+0) // NaN

```

- String 

- Boolean 

- Symbol

> Symbol是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突

- Undefined

- Null

- BigInt

> 通常情况下，null值表示一个空对象指针

```js
console.log(undefined == null) // true

```

### 引用类型

- Object 

- Array

- Function 

### 内存的存储结构

```js
var obj1 = {}
var obj2 = obj1

obj2.name = "Xxx"
console.log(obj1.name) // xxx

```

![](./assets/memory.png)


## `typeof` vs. `instanceof`
```js
console.log(typeof null) // 'object'
console.log(typeof console.log)  // 'function'
console.log(typeof console) // 'object'

```





