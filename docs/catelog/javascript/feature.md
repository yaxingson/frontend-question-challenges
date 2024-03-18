---
sidebar: false

---

## 数组、对象和函数的扩展
### 数组的扩展
扩展运算符将定义了遍历器接口`Symbol.iterator`的对象 (包括伪数组数据结构) 转换为数组：

```js
[...document.querySelectorAll('div')]  
// [<div>, <div>, <div> ...]

```

> 通过扩展运算符实现的是浅拷贝，修改了引用指向的值，会同步反映到新数组

数组构造函数静态方法：
- Array.from()

```js
console.log(Array.from([1, 2, 3], x=>x**2)) // [1, 4, 9]

```

- Array.of()

```js
console.log(Array.of(3)) // [3]
console.log(Array(3)) // [ , , , ]

```

数组实例方法：

- Array.prototype.copyWithin()
- Array.prototype.find()
- Array.prototype.findIndex()
- Array.prototype.fill()
- Array.prototype.includes() 
- Array.prototype.flat() 
- Array.prototype.sort() [ 稳定的排序算法 ]

> 数组的空位指数组的某一个位置没有任何值，ES6则是明确将空位转为undefined

### 对象的扩展
ES6允许字面量定义对象时，将表达式放在括号内：

```js
const foo = 'bar'
const baz = { [foo]: 'abc'}

const keyA = {a: 1}
const myObject = {
  [keyA]: 'valueA'
}

console.log(myObject) // {'[object Object]':'valueA'}

```

> 当属性名表达式值是一个对象时，默认情况下会自动将对象转为字符串`[object Object]`

`super`关键字指向当前对象的原型对象:

```js
const prototype = {
  foo: 'hello'
}

const obj = {
  find() {
    return super.foo;
  }
}

Object.setPrototypeOf(obj, prototype)
obj.find() // "hello"

```

对象属性的遍历：
1. for...in...语句
2. Object.keys()
3. Object.getOwnPropertyNames()
4. Object.getOwnPropertySymbols()
5. Reflect.ownKeys()

Object构造函数扩展的方法：
- Object.is()
- Object.assign()
- Object.getOwnPropertyDescriptors()
- Object.fromEntries()
- Object.setPrototypeOf()

### 函数的扩展
函数的属性:

- length：返回没有指定默认值的参数个数

- name：返回该函数的函数名

```js
const bar = function baz() {}
console.log(bar.name)  // "baz"

console.log((new Function()).name) // "anonymous"

// bind返回的函数，name属性值会加上bound前缀
function foo() {}
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "

```

> 当函数参数使用了默认值、解构赋值、或者扩展运算符，则函数内部就不能显式设定为严格模式，否则会报错

使用箭头函数的注意点：
- 函数体内的this对象是定义时所在的对象，而不是使用时所在的对象
- 不可以当作构造函数
- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用`rest`参数代替
- 不可以使用yield命令，因此箭头函数不能用作Generator函数

## Set和Map
集合: 由一堆无序的、相关联的，且不重复的内存结构组成的数据结构

映射: 每个元素有一个称作key的域，不同元素的key各不相同

Set实例的相关属性和方法：
- add()
- delete() 
- has()
- clear()

实现数组或字符串的去重:

```js
let arr = [3, 5, 2, 2, 5, 5]
let unique = [...new Set(arr)] // [3, 5, 2]

let str = "352255"
let unique = [...new Set(str)].join("") // "352"

```

实现集合的并集、交集、和差集:

```js
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])

// 并集
let union = new Set([...a, ...b])
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)))
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)))
// Set {1}

```

Map实例的相关属性和方法:
- size
- get()
- set()
- has()
- delete() 
- clear()

> WeakSet的成员只能是引用类型，而不能是其他类型的值；而WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名

```js
const wm = new WeakMap()

const element = document.getElementById('example')

wm.set(element, 'some information')
wm.get(element) // "some information"

const wm = new WeakMap()
let key = {}
let obj = {foo: 1}

wm.set(key, obj)
obj = null
wm.get(key)  // Object {foo: 1}

```



## Proxy
