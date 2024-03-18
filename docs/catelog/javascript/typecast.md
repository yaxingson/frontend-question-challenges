---
sidebar: false

---

## 类型转换机制
### 显式转换
- Number 

| 输入值 | 转换结果 |
| -----  | ----- |
| undefined | NaN |
| null | 0 |
| true | 1 |
| false | 0 |
| String | 可以被解析为数值，则转换为相应的数值，否则返回`NaN`，且空字符串转换为`0` |
| Symbol | TypeError: Cannot convert a Symbol value to a number |
| Object | |

- String

| 输入值 | 转换结果 |
| -----  | ----- |
| undefined | 'undefined' |
| null | 'null' |
| true | 'true' |
| false | 'false' |
| Number | 对应的字符串类型 |
| Symbol | |
| Object | |

- Boolean


### 隐式转换

- 自动转换为布尔值

- 自动转换为字符串

- 自动转换为数值

## 浅拷贝和深拷贝
### 浅拷贝
只拷贝一层，深层次的引用类型则共享内存地址，实现浅拷贝的方式:

- Object.assign()

- Array.prototype.slice()

- Array.prototype.concat()

- 扩展运算符

### 深拷贝
实现深拷贝的方式:

- JSON.stringify()

- 循环递归

```js
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  if (typeof obj !== "object") return obj

  if(hash.has(obj)) return hash.get(obj)

  let cloneObj = new obj.constructor()
  hash.set(obj, cloneObj)
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }
  return cloneObj
}


```


