---
title: "工具文档"
sidebar:  
  - text: 前端面试
    link: /FE-interview  
  - text: 快速上手
    link: /guide/.
    children:
      - text: '手写代码'
        link: '/FE-interview/codeTest'	
      - text: 'github'
        link: 'https://github.com'
---
[[toc]]

如何在 JS 中实现继承（用尽可能多的方式）
==
> create by shaoyi    **2024-01-05 10:45**
>
* 如何在 JS 中实现继承（用尽可能多的方式）？请写出具体代码
示例代码：请让Yupi继承Coder
  
  ```js
  function Coder (type) {
    this.type = type
  }
  
  Coder.prototype.rap = function () {
    console.log('yo yo yo');
  }
  
  function Yupi(name) {
    this.name = name;
    this.age = 18;
  }
  ```
  
  
   es6类的继承 extend
  ```js 
  class Person{
  	// 类的构造函数方法
  	constructor(name,age){
  	 this.name=name
  	 this.age=age
  	}
  	
  	// 类的一般方法
  	showName(){
  		console.log(this.name)
  	}
  }
  //创建类的实例
  let person = new Person("Tom",24);
  person.showName();
  
  class Son extends Person{
   constructor(name,age,address){
   //子类必须在constructor方法中调用super方法，否则new实例时会报错；因为子类没有自己的this对像
     super(name,age)
     this.address = address
   }
  }
  son.showName()
  ```


  1.借用构造函数继承
```js
  function Yupi(name,type){
   Coder.call(this,type)
   this.age=18
  }
 let yupi=new Yupi('鱼皮','coder');

  yupi.type // 'Coder'
```
 2.原型链继承
```js 
function Yupi(){
   this.type="coder"  
}
Yupi.prototype=new Coder()
let newYupi=new Yupi()
newYupi.type  // 'Coder
```

// 原型式继承   
```js
function Coder () {
    this.type = 'coder'
  }
function Son(obj){
 function Fun(){}
 Fun.prototype=obj
 return new Fun() 
}
let coder=new Coder() //父类实例
let yupi=Son(coder) //所有实例都会继承原型上的属性
```

