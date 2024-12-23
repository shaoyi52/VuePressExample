import{_ as a,r as l,o as r,c as t,a as e,b as n,e as s,d}from"./app-b1c81757.js";const c={},o=d(`<p><strong>TS</strong>知识图</p><p><img src="https://pic3.zhimg.com/v2-9c7e460c8e25e6ea674a8cabe61c1b6a_b.jpg" alt=""></p><h2 id="ts-是什么" tabindex="-1"><a class="header-anchor" href="#ts-是什么" aria-hidden="true">#</a> TS 是什么 ？</h2><p><strong>TS</strong>：是<strong>TypeScript</strong>的简称，是一种由微软开发的自由和开源的编程语言。</p><h3 id="ts和js的关系" tabindex="-1"><a class="header-anchor" href="#ts和js的关系" aria-hidden="true">#</a> TS和JS的关系</h3><p>对比与JS，TS是JS的<strong>超集</strong>，简单的说就是在 <code>JavaScript</code> 的基础上加入了<strong>类型系统</strong>，让每个参数都有明确的意义，从而带来了更加<strong>智能</strong>的提示。</p><p>相对于<code>JS</code>而言，<code>TS</code>属于<strong>强类型</strong>语言，所以对于项目而言，会使代码更加规范，从而解决了大型项目代码的复杂性，其次，浏览器是不识别<code>TS</code>的，所以在编译的时候，<code>TS</code>文件会先编译为<code>JS</code>文件。</p><h3 id="安装ts" tabindex="-1"><a class="header-anchor" href="#安装ts" aria-hidden="true">#</a> 安装TS</h3><p>执行命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ npm install -g typescript 
 //或
$ yarn global add typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看版本" tabindex="-1"><a class="header-anchor" href="#查看版本" aria-hidden="true">#</a> 查看版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tsc -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tsc test.ts
# test.ts =&gt; test.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在线编译" tabindex="-1"><a class="header-anchor" href="#在线编译" aria-hidden="true">#</a> 在线编译</h3>`,15),v={href:"https://www.typescriptlang.org/zh/play/",target:"_blank",rel:"noopener noreferrer"},u=d(`<p><img src="https://pic4.zhimg.com/v2-f15c04b3223d1c66c90ec44f4b6e3c4b_b.jpg" alt=""></p><p>![(https://pic4.zhimg.com/80/v2-f15c04b3223d1c66c90ec44f4b6e3c4b_1440w.webp)</p><p>并且你还可以看看生成对应的<code>ts</code>转化<code>ES5</code>，<code>ES6</code>之后的代码，也有相关的例子供你查看</p><h2 id="ts的基本数据类型" tabindex="-1"><a class="header-anchor" href="#ts的基本数据类型" aria-hidden="true">#</a> TS的基本数据类型</h2><p>这里将TS的数据类型简单的进行下归类：</p><ul><li>基本类型：<code>string</code>、<code>number</code>、<code>boolean</code>、<code>symbol</code>、<code>bigint</code>、<code>null</code>、<code>undefined</code></li><li>引用类型：<code>array</code>、 <code>Tuple</code>(元组)、 <code>object</code>(包含<code>Object</code>和<code>{}</code>)、<code>function</code></li><li>特殊类型：<code>any</code>、<code>unknow</code>、<code>void</code>、<code>nerver</code>、<code>Enum</code>(枚举)</li><li>其他类型：<code>类型推理</code>、<code>字面量类型</code>、<code>交叉类型</code></li></ul><p>注：案例中有可能用到<code>type</code>和<code>interface</code>，在下面会详细讲解，有比较模糊的可以先看看</p><h3 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> 基本类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>    <span class="token comment">//字符串</span>
    <span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Domesy&quot;</span>
    
    <span class="token comment">// 数字</span>
    <span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">7</span>
    
    <span class="token comment">//布尔</span>
    <span class="token keyword">let</span> bool<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    
    <span class="token comment">//symbol</span>
    <span class="token keyword">let</span> sym<span class="token operator">:</span> <span class="token builtin">symbol</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     
    <span class="token comment">//bigint</span>
    <span class="token keyword">let</span> big<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">10n</span>
        
    <span class="token comment">//null</span>
    <span class="token keyword">let</span> nu<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    
    <span class="token comment">//undefined</span>
    <span class="token keyword">let</span> un<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意：</p><ul><li><code>null</code> 和 <code>undefined</code> 两个类型一旦赋值上，就不能在赋值给任何其他类型</li><li><code>symbol</code>是独一无二的，假设在定义一个 <code>sym1</code>，那么<strong>sym === sym1 为 false</strong></li></ul><h2 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h2><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3><p>两种方式：</p><ul><li>类型名称 + []</li><li>Array&lt;数据类型&gt;</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let arr1: number[] = [1, 2, 3]
    
    let arr2: Array&lt;number&gt; = [1, 2, 3]
    
    let arr2: Array&lt;number&gt; = [1, 2, &#39;3&#39;] // error
    
     //要想是数字类型或字符串类型，需要使用 ｜
    let arr3: Array&lt;number | string&gt; = [1, 2, &#39;3&#39;] //ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tuple-元组" tabindex="-1"><a class="header-anchor" href="#tuple-元组" aria-hidden="true">#</a> <strong>Tuple(元组)</strong></h3><p><strong>Tuple</strong> 可以说是 <code>Array</code> 的一种特殊情况,针对上面的 <code>arr3</code>,我们看他的类型可以是<code>string</code>也可以是<code>number</code>，但对每个元素没有作出具体的限制。</p><p>那么 <code>Tuple</code> 的作用就是限制<strong>元素的类型</strong>并且<strong>限制个数</strong>的数组,同时 <code>Tuple</code>这个概念值存在于<code>TS</code>，在<code>JS</code>上是不存在的</p><p>这里存在一个问题：在<code>TS</code>中,是允许对 <strong>Tuple</strong> 扩增的（也就是允许使用 <code>push</code>方法），但在<strong>访问上不允许</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let t: [number, string] = [1, &#39;2&#39;] // ok
    let t1: [number, string] = [1, 3] // error
    let t2: [number, string] = [1] // error
    let t3: [number, string] = [1, &#39;1&#39;, true] // error


    let t5: [number, string] = [1, &#39;2&#39;] // ok
    t.push(2)
    console.log(t) // [1, &#39;2&#39;, 2]

    let a =  t[0] // ok
    let b = t[1] // ok
    let c = t[2] // error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> object</h3><ul><li><code>object</code> 非原始类型，在定义上直接使用 object 是可以的，但你要更改对象的属性就会报错，原因是并没有使对象的内部具体的属性做限制，所以需要使用 <strong>{}</strong> 来定义内部类型</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let obj1: object = { a: 1, b: 2}
    obj1.a = 3 // error

    let obj2: { a: number, b: number } = {a: 1, b: 2}
    obj2.a = 3 // ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Object</code>(大写的O）,代表所有的原始类型或非原始类型都可以进行赋值,除了<code>null</code>和\`undefined</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let obj: Object;
    obj = 1; // ok
    obj = &quot;a&quot;; // ok
    obj = true; // ok
    obj = {}; // ok
    obj = Symbol() //ok
    obj = 10n //ok
    obj = null; // error
    obj = undefined; // error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h3><h3 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数" aria-hidden="true">#</a> 定义函数</h3><ul><li>有两种方式，一种为 <code>function</code>， 另一种为<code>箭头函数</code></li><li>在书写的时候，也可以写入返回值的类型，如果写入，则必须要有对应类型的返回值，<strong>但通常情况下是省略</strong>，因为<code>TS</code>的类型推断功能够正确推断出返回值类型</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    function setName1(name: string) { //ok
      console.log(&quot;hello&quot;, name);
    }
    setName1(&quot;Domesy&quot;); // &quot;hello&quot;,  &quot;Domesy&quot;

    function setName2(name: string):string { //error
      console.log(&quot;hello&quot;, name);
    }
    setName2(&quot;Domesy&quot;);

    function setName3(name: string):string { //error
      console.log(&quot;hello&quot;, name);
      return 1
    }
    setName3(&quot;Domesy&quot;);

    function setName4(name: string): string { //ok
      console.log(&quot;hello&quot;, name);
      return name
    }
    setName4(&quot;Domesy&quot;); // &quot;hello&quot;,  &quot;Domesy&quot;

    //箭头函数与上述同理
    const setName5 = (name:string) =&gt; console.log(&quot;hello&quot;, name);
    setName5(&quot;Domesy&quot;) // &quot;hello&quot;,  &quot;Domesy&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数类型" tabindex="-1"><a class="header-anchor" href="#参数类型" aria-hidden="true">#</a> 参数类型</h3><ul><li>可选参数： 如果函数要配置可有可无的参数时，可以通过 <strong>?</strong> 实现，切可选参数一定要在最后面</li><li>默认参数：函数内可以自己设定其默认参数，用 <strong>=</strong> 实现</li><li>剩余参数：仍可以使用扩展运算符 <strong>...</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // 可选参数
    const setInfo1 = (name: string, age?: number) =&gt; console.log(name, age)
    setInfo1(&#39;Domesy&#39;) //&quot;Domesy&quot;,  undefined
    setInfo1(&#39;Domesy&#39;, 7) //&quot;Domesy&quot;,  7

    // 默认参数
    const setInfo2 = (name: string, age: number = 11) =&gt; console.log(name, age)
    setInfo2(&#39;Domesy&#39;) //&quot;Domesy&quot;,  11
    setInfo2(&#39;Domesy&#39;, 7) //&quot;Domesy&quot;,  7

    // 剩余参数
    const allCount = (...numbers: number[]) =&gt; console.log(\`数字总和为：\${numbers.reduce((val, item) =&gt; (val += item), 0)}\`)
    allCount(1, 2, 3) //&quot;数字总和为：6&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h3><p><strong>函数重载</strong>：是使用相同名称和不同参数数量或类型创建多个方法的一种能力。 在 TypeScript 中，表现为给同一个函数提供多个函数类型定义。 简单的说：<strong>可以在同一个函数下定义多种类型值，总后汇总到一块</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let obj: any = {};
    function setInfo(val: string): void;
    function setInfo(val: number): void;
    function setInfo(val: boolean): void;
    function setInfo(val: string | number | boolean): void {
      if (typeof val === &quot;string&quot;) {
        obj.name = val;
      } else {
        obj.age = val;
      }
    }
    setInfo(&quot;Domesy&quot;);
    setInfo(7);
    setInfo(true);
    console.log(obj); // { name: &#39;Domesy&#39;, age: 7 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特殊类型" tabindex="-1"><a class="header-anchor" href="#特殊类型" aria-hidden="true">#</a> 特殊类型</h2><h3 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h3><p>在 TS 中，任何类型都可以归于 <code>any</code> 类型，所以<code>any</code>类型也就成了所有类型的<strong>顶级类型</strong>，同时，<strong>如果不指定变量的类型，则默认为any类型</strong>, 当然不推荐使用该类型，因为这样丧失了TS的作用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let d:any; //等价于 let d 
    d = &#39;1&#39;;
    d = 2;
    d = true;
    d = [1, 2, 3];
    d = {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unknow" tabindex="-1"><a class="header-anchor" href="#unknow" aria-hidden="true">#</a> <strong>unknow</strong></h3><p>与<code>any</code>一样，都可以作为所有类型的<strong>顶级类型</strong>，但 <code>unknow</code>更加<strong>严格</strong>，那么可以说除了<code>any</code> 之下的第二大类型，接下来对比下<code>any</code>,主要严格于一下两点：</p><ul><li><code>unknow</code>会对值进行检测，而类型<code>any</code>不会做检测操作，说白了，<code>any</code>类型可以赋值给任何类型，但<code>unknow</code>只能赋值给<code>unknow</code>类型和<code>any</code>类型</li><li><code>unknow</code>不允许定义的值有任何操作（如 方法，new等），但any可以</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let u:unknown;
    let a: any;

    u = &#39;1&#39;; //ok
    u = 2; //ok
    u = true; //ok
    u = [1, 2, 3]; //ok
    u = {}; //ok

    let value:any = u //ok
    let value1:any = a //ok
    let value2:unknown = u //ok
    let value3:unknown = a //ok
    let value4:string = u //error
    let value5:string = a //ok
    let value6:number = u //error
    let value7:number = a //ok
    let value8:boolean = u //error
    let value9:boolean = a //ok

    u.set() // error
    a.set() //ok
    u() // error
    a() //ok
    new u() // error
    new a() //ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="void" tabindex="-1"><a class="header-anchor" href="#void" aria-hidden="true">#</a> void</h3><p>当一个函数，没有返回值时，TS会默认他的返回值为 <code>void</code> 类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    const setInfo = ():void =&gt; {} // 等价于 const setInfo = () =&gt; {}

    const setInfo1 = ():void =&gt; { return &#39;1&#39; }  // error
    const setInfo2 = ():void =&gt; { return 2 } // error
    const setInfo3 = ():void =&gt; { return true } // error
    const setInfo4 = ():void =&gt; { return  } // ok
    const setInfo5 = ():void =&gt; { return undefined } //ok 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> <strong>never</strong></h3><p>表示一个函数永远不存在返回值，TS会认为类型为 <code>never</code>，那么与 <code>void</code> 相比, <code>never</code>应该是 <code>void</code>子集， 因为 <code>void</code>实际上的返回值为 <code>undefined</code>，而 <code>never</code> 连 <code>undefined</code>也不行</p><p>符合<code>never</code>的情况有：当抛出异常的情况和无限死循环</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let error = ():never =&gt; { // 等价约 let error = () =&gt; {}
            throw new Error(&quot;error&quot;);
    };

    let error1 = ():never =&gt; {
        while(true){}
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enum-枚举" tabindex="-1"><a class="header-anchor" href="#enum-枚举" aria-hidden="true">#</a> <strong>Enum(枚举)</strong></h3><p>可以定义一些带名字的常量，这样可以<strong>清晰表达意图</strong>或<strong>创建一组有区别的用例</strong></p><p>注意：</p><ul><li>枚举的类型只能是 <code>string</code> 或 <code>number</code></li><li>定义的名称不能为<strong>关键字</strong></li></ul><p>同时我们可以看看翻译为ES5是何样子</p><h3 id="数字枚举" tabindex="-1"><a class="header-anchor" href="#数字枚举" aria-hidden="true">#</a> <strong>数字枚举</strong></h3><ul><li>枚组的类型默认为<strong>数字类型</strong>，默认从0开始以此累加，如果有设置默认值，则<strong>只会对下面的值产生影响</strong></li><li>同时支持<strong>反向映射</strong>（及从成员值到成员名的映射），但智能映射无默认值的情况，并且只能是默认值的前面</li></ul><p><img src="https://pic3.zhimg.com/v2-79fb26564005ac9e6df7c5eff07d56fe_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1304" height="546"></svg>)</p><h3 id="字符串枚举" tabindex="-1"><a class="header-anchor" href="#字符串枚举" aria-hidden="true">#</a> <strong>字符串枚举</strong></h3><p>字符串枚举要注意的是必须要有<strong>默认值</strong>，不支持<strong>反向映射</strong></p><p><img src="https://pic1.zhimg.com/v2-cf4405b954ecc1e13c3eb417c47de3f4_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1304" height="481"></svg>)</p><h3 id="常量枚举" tabindex="-1"><a class="header-anchor" href="#常量枚举" aria-hidden="true">#</a> <strong>常量枚举</strong></h3><p>除了<code>数字类型</code>和<code>字符串类型</code>之外，还有一种特殊的类型，那就是<strong>常量枚组</strong>，也就是通过<code>const</code>去定义<code>enum</code>，但这种类型不会编译成任何 <code>JS</code>,只会编译对应的值</p><p><img src="https://pic2.zhimg.com/v2-65ea112430ee5bd10a441de8cc7273dd_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1304" height="352"></svg>)</p><h3 id="异构枚举" tabindex="-1"><a class="header-anchor" href="#异构枚举" aria-hidden="true">#</a> <strong>异构枚举</strong></h3><p>包含了 <code>数字类型</code> 和 <code>字符串类型</code> 的混合，反向映射一样的道理</p><p><img src="https://pic3.zhimg.com/v2-b92e4f2b3cdbd9ea0751de64df1e6132_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1304" height="657"></svg>)</p><h2 id="类型推论" tabindex="-1"><a class="header-anchor" href="#类型推论" aria-hidden="true">#</a> <strong>类型推论</strong></h2><p>我们在学完这些基础类型，我们是不是每个类型都要去写字段是什么类型呢？其实不是，在<code>TS</code>中如果不设置类型，并且不进行赋值时，将会推论为<strong>any</strong>类型，如果进行赋值就会默认为类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let a; // 推断为any
    let str = &#39;小杜杜&#39;; // 推断为string
    let num = 13; // 推断为number
    let flag = false; // 推断为boolean

    str = true // error Type &#39;boolean&#39; is not assignable to type &#39;string&#39;.(2322)
    num = &#39;Domesy&#39; // error
    flag = 7 // error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字面量类型" tabindex="-1"><a class="header-anchor" href="#字面量类型" aria-hidden="true">#</a> 字面量类型</h2><p><strong>字面量类型</strong>：在<code>TS</code>中，我们可以指定参数的类型是什么，目前支持<code>字符串</code>、<code>数字</code>、<code>布尔</code>三种类型。比如说我定义了 <code>str 的类型是 &#39;小杜杜&#39;</code> 那么str的值只能是<strong>小杜杜</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let str:&#39;小杜杜&#39; 
    let num: 1 | 2 | 3 = 1
    let flag:true

    str = &#39;小杜杜&#39; //ok
    str = &#39;Donmesy&#39; // error

    num = 2 //ok
    num = 7 // error

    flag = true // ok
    flag = false // error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型（&amp;）</h2><p><strong>交叉类型</strong>：将多个类型合并为一个类型，使用<code>&amp;</code>符号连接，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    type AProps = { a: string }
    type BProps = { b: number }

    type allProps = AProps &amp; BProps

    const Info: allProps = {
        a: &#39;小杜杜&#39;,
        b: 7
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同名基础属性合并" tabindex="-1"><a class="header-anchor" href="#同名基础属性合并" aria-hidden="true">#</a> 同名基础属性合并</h3><p>我们可以看到<code>交叉类型</code>是结合两个属性的属性值，那么我们现在有个问题，要是两个属性都有相同的属性值，那么此时总的类型会怎么样，先看看下面的案列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    type AProps = { a: string, c: number }
    type BProps = { b: number, c: string }

    type allProps = AProps &amp; BProps

    const Info: allProps = {
        a: &#39;小杜杜&#39;,
        b: 7,
        c:  1, // error (property) c: never
        c:  &#39;Domesy&#39;, // error (property) c: never
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是相同的类型，合并后的类型也是此类型，那如果是不同的类型会如何：</p><p>我们在<code>Aprops</code>和<code>BProps</code>中同时加入<code>c属性</code>，并且<code>c属性</code>的类型不同，一个是<code>number</code>类型，另一个是<code>string</code>类型</p><p>现在结合为 <code>allProps</code> 后呢? 是不是<code>c属性</code>是 <code>number</code> 或 <code>string</code> 类型都可以，还是其中的一种？</p><p>然而在实际中， <code>c</code> 传入<code>数字类型</code>和<code>字符串类型</code>都不行，我么看到报错，现实的是 <strong>c的类型是 never</strong>。</p><p>这是因为对应 <code>c</code>属性而言是 <code>string &amp; number</code>,然而这种属性明显是不存在的，所以<code>c</code>的属性是<code>never</code></p><h3 id="同名非基础属性合并" tabindex="-1"><a class="header-anchor" href="#同名非基础属性合并" aria-hidden="true">#</a> <strong>同名非基础属性合并</strong></h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface A { a: number }
    interface B { b: string }

    interface C {
        x: A
    }
    interface D {
        x: B
    }
    type allProps = C &amp; D

    const Info: allProps = {
      x: {
        a: 7,
        b: &#39;小杜杜&#39;
      }
    }

    console.log(Info) // { x: { &quot;a&quot;: 7, &quot;b&quot;: &quot;小杜杜&quot; }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来看看案例，对于混入多个类型时，若存在相同的成员，且成员类型为非基本数据类型，那么是可以成功合。</p><p>如果 接口A 中的 也是 b，类型为number，就会跟<strong>同名基础属性合并</strong>一样</p><h2 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> Class（类）</h2><p>在<code>ES6</code>中推出了一个叫 <code>class（类）</code> 的玩意，具体定义就不说了，相信用过<code>React</code>的小伙伴一定不陌生.</p><h3 id="基本方法" tabindex="-1"><a class="header-anchor" href="#基本方法" aria-hidden="true">#</a> <strong>基本方法</strong></h3><p>在基本方法中有：<code>静态属性</code>，<code>静态方法</code>、<code>成员属性</code>、<code>成员方法</code>、<code>构造器</code>、<code>get set方法</code>，接下来逐个看看：</p><p>需要注意的是： 在静态方法中，如果不给默认值,并且不使用是会报错的，如果不想报错就给如 <strong>!</strong>，如：<code>name4!:string</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    class Info {
      //静态属性
      static name1: string = &#39;Domesy&#39;

      //成员属性，实际上是通过public上进行修饰，只是省略了
      nmae2:string = &#39;Hello&#39; //ok 
      name3:string //error
      name4!:string //ok 不设置默认值的时候必须加入 !

      //构造方法
      constructor(_name:string){
        this.name4 = _name
      }

      //静态方法
      static getName = () =&gt; {
        return &#39;我是静态方法&#39;
      }

      //成员方法
      getName4 = () =&gt; {
        return \`我是成员方法:\${this.name4}\`
      }

      //get 方法
      get name5(){
        return this.name4
      }

      //set 方法
      set name5(name5){
        this.name4 = name5
      }
    }

    const setName = new Info(&#39;你好&#39;)
    console.log(Info.name1) //  &quot;Domesy&quot; 
    console.log(Info.getName()) // &quot;我是静态方法&quot; 
    console.log(setName.getName4()) // &quot;我是成员方法:你好&quot; 
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们看看上述代码翻译成ES5是什么样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &quot;use strict&quot;;
    var Info = /** @class */ (function () {
        //构造方法
        function Info(_name) {
            var _this = this;
            //成员属性
            this.nmae2 = &#39;Hello&#39;; //ok
            //成员方法
            this.getName4 = function () {
                return &quot;\\u6211\\u662F\\u6210\\u5458\\u65B9\\u6CD5:&quot;.concat(_this.name4);
            };
            this.name4 = _name;
        }
        Object.defineProperty(Info.prototype, &quot;name5&quot;, {
            //get 方法
            get: function () {
                return this.name4;
            },
            //set 方法
            set: function (name5) {
                this.name4 = name5;
            },
            enumerable: false,
            configurable: true
        });
        //静态属性
        Info.name1 = &#39;Domesy&#39;;
        //静态方法
        Info.getName = function () {
            return &#39;我是静态方法&#39;;
        };
        return Info;
    }());
    var setName = new Info(&#39;你好&#39;);
    console.log(Info.name1); //  &quot;Domesy&quot; 
    console.log(Info.getName()); // &quot;我是静态方法&quot; 
    console.log(setName.getName4()); // &quot;我是成员方法:你好&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私有字段" tabindex="-1"><a class="header-anchor" href="#私有字段" aria-hidden="true">#</a> 私有字段(#)</h3><p>在 TS 3.8版本便开始支持<strong>ECMACMAScript</strong>的私有字段。<br> 需要注意的是<code>私有字段</code>与常规字段不同，主要的区别是：</p><ul><li>私有字段以 <code>#</code> 字符开头，也叫私有名称；</li><li>每个私有字段名称都<strong>唯一</strong>地限定于其包含的类；</li><li>不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；</li><li>私有字段不能在包含的类之外访问，甚至不能被检测到。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     class Info {
      #name: string; //私有字段
      getName: string;

      constructor(name: string) {
        this.#name = name;
        this.getName = name
      }

      setName() {
        return \`我的名字是\${this.#name}\`
      }
    }

    let myName = new Info(&quot;Domesy&quot;);


    console.log(myName.setName()) // &quot;我的名字是Domesy&quot; 
    console.log(myName.getName) // ok &quot;Domesy&quot; 
    console.log(myName.#name) // error 
    // Property &#39;#name&#39; is not accessible outside class &#39;Info&#39; 
    // because it has a private identifier.(18013)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读属性-readonly" tabindex="-1"><a class="header-anchor" href="#只读属性-readonly" aria-hidden="true">#</a> <strong>只读属性（readonly）</strong></h3><p><strong>只读属性</strong>：用 <code>readonly</code>修饰，只能在<strong>构造函数</strong>中初始化，并且在TS中，只允许将<code>interface</code>、<code>type</code>、<code>class</code>上的属性标识为<code>readonly</code></p><ul><li><code>readonly</code>实际上只是在<code>编译阶段</code>进行代码检查</li><li>被<code>radonly</code>修饰的词只能在 <code>constructor</code>阶段修改，其他时刻不允许修改</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    class Info {
      public readonly name: string; // 只读属性
      name1:string

      constructor(name: string) {
        this.name = name;
        this.name1 = name;
      }

      setName(name:string) {
        this.name = name // error
        this.name1 = name; // ok
      }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承-extends" tabindex="-1"><a class="header-anchor" href="#继承-extends" aria-hidden="true">#</a> <strong>继承（extends）</strong></h3><p><strong>继承</strong>：是个比较重要的点，指的是子可以继承父的思想，也就是说 <code>子类</code> 通过继承<code>父类</code>后，就拥有了<code>父类</code>的属性和方法，这点与<code>HOC</code>有点类似</p><p>这里又个<code>super</code>字段，给不知道的小伙伴说说，其作用是<strong>调用父类上的属性和方法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // 父类
    class Person {
      name: string
      age: number

      constructor(name: string, age:number){
        this.name = name
        this.age = age
      }

      getName(){
        console.log(\`我的姓名是：\${this.name}\`)
        return this.name
      }

      setName(name: string){
        console.log(\`设置姓名为：\${name}\`)
        this.name = name
      }
    }

    // 子类
    class Child extends Person {
      tel: number
      constructor(name: string, age: number, tel:number){
        super(name, age)
        this.tel = tel
      }

      getTel(){
        console.log(\`电话号码是\${this.tel}\`)
        return this.tel
      }
    }

    let res = new Child(&quot;Domesy&quot;, 7 , 123456)
    console.log(res) // Child {.&quot;name&quot;: &quot;Domesy&quot;, &quot;age&quot;: 7, &quot;no&quot;: 1 }
    console.log(res.age) // 7
    res.setName(&#39;小杜杜&#39;) // &quot;设置姓名为：小杜杜&quot; 
    res.getName() //   &quot;我的姓名是：小杜杜&quot;
    res.getTel() //  &quot;电话号码是123456&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h3><p>主要有三种修饰符：</p><ul><li><strong>public</strong>：类中、子类内的任何地方、外部<strong>都能调用</strong></li><li><strong>protected</strong>：类中、子类内的任何地方都能调用,但<strong>外部不能调用</strong></li><li><strong>private</strong>：类中、子类内的任何地方、外部<strong>均不可调用</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    class Person {
      public name: string
      protected age: number
      private tel: number

      constructor(name: string, age:number, tel: number){
        this.name = name
        this.age = age
        this.tel = tel
      }
    }

    class Child extends Person {
      constructor(name: string, age: number, tel: number) {
        super(name, age, tel);
      }

      getName(){
        console.log(\`我的名字叫\${this.name},年龄是\${this.age}\`) // ok name 和 age可以
        console.log(\`电话是\${this.tel}\`) // error 报错 原因是 tel 拿不出来
      }
    }


    const res = new Child(&#39;Domesy&#39;, 7, 123456)
    console.log(res.name) // ok Domesy
    console.log(res.age) // error
    console.log(res.tel) // error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> <strong>abstract</strong></h3><p><strong>abstract</strong>: 用abstract关键字声明的类叫做<strong>抽象类</strong>，声明的方法叫做<strong>抽象方法</strong></p><ul><li><strong>抽象类</strong>：指不能被实例化，因为它里面包含一个或多个抽象方法。</li><li><strong>抽象方法</strong>：是指不包含具体实现的方法；</li></ul><p>注：抽象类是不能直接实例化，只能实例化实现了所有抽象方法的子类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    abstract class Person {
      constructor(public name: string){}

      // 抽象方法
      abstract setAge(age: number) :void;
    }

    class Child extends Person {
      constructor(name: string) {
        super(name);
      }

      setAge(age: number): void {
        console.log(\`我的名字是\${this.name},年龄是\${age}\`);
      }
    }

    let res = new Person(&quot;小杜杜&quot;) //error
    let res1 = new Child(&quot;小杜杜&quot;);

    res1.setAge(7) // &quot;我的名字是小杜杜,年龄是7&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重写和重载" tabindex="-1"><a class="header-anchor" href="#重写和重载" aria-hidden="true">#</a> 重写和重载</h3><ul><li><strong>重写</strong>：子类重写继承自父类中的方法</li><li><strong>重载</strong>：指为同一个函数提供多个类型定义，与上述函数的重载类似</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // 重写
    class Person{
      setName(name: string){
        return \`我的名字叫\${name}\`
      }
    }

    class Child extends Person{
      setName(name: string){
        return \`你的名字叫\${name}\`
      }
    }

    const yourName = new Child()
    console.log(yourName.setName(&#39;小杜杜&#39;)) // &quot;你的名字叫小杜杜&quot; 

    // 重载
    class Person1{
      setNameAge(name: string):void;
      setNameAge(name: number):void;
      setNameAge(name:string | number){
        if(typeof name === &#39;string&#39;){
          console.log(\`我的名字是\${name}\`)
        }else{
          console.log(\`我的年龄是\${name}\`)
        }
      };
    }

    const res = new Person1()
    res.setNameAge(&#39;小杜杜&#39;) // &quot;我的名字是小杜杜&quot; 
    res.setNameAge(7) // &quot;我的年龄是7&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts断言和类型守卫" tabindex="-1"><a class="header-anchor" href="#ts断言和类型守卫" aria-hidden="true">#</a> TS断言和类型守卫</h2><h2 id="ts断言" tabindex="-1"><a class="header-anchor" href="#ts断言" aria-hidden="true">#</a> TS断言</h2><p>分为三种：<code>类型断言</code>、<code>非空断言</code>、<code>确定赋值断言</code></p><p>当断言失效后，可能使用到：<strong>双重断言</strong></p><h3 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h3><p>在特定的环境中，我们会比TS知道这个值具体是什么类型，不需要TS去判断，简单的理解就是，<strong>类型断言会告诉编译器，你不用给我进行检查，相信我，他就是这个类型</strong></p><p>共有两种方式：</p><ul><li><strong>尖括号</strong></li><li><strong>as</strong>：推荐</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   //尖括号
   let num:any = &#39;小杜杜&#39;
   let res1: number = (&lt;string&gt;num).length; // React中会 error

   // as 语法
   let str: any = &#39;Domesy&#39;;
   let res: number = (str as string).length;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但需要注意的是：尖括号语法在<strong>React</strong>中会报错，原因是与<code>JSX</code>语法会产生冲突，所以只能使用<strong>as语法</strong></p><h3 id="非空断言" tabindex="-1"><a class="header-anchor" href="#非空断言" aria-hidden="true">#</a> 非空断言</h3><p>在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 <code>!</code> 可以用于断言操作对象是<strong>非 null 和非 undefined 类型。</strong></p><p>我们对比下<code>ES5</code>的代码</p><p><img src="https://pic2.zhimg.com/v2-86a0298b96a9e2d8c1f6be20f557a1f9_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1304" height="237"></svg>)</p><p>我们可以看出来 <code>!</code>可以帮助我们过滤 <code>null</code>和 <code>undefined</code>类型，也就是说，编译器会默认我们只会传来<code>string</code>类型的数据，所以可以赋值为<code>str1</code></p><p>但变成<code>ES5</code>后 <code>!</code>会被移除，所以当传入 <code>null</code> 的时候，还是会打出 <code>null</code></p><h3 id="确定赋值断言" tabindex="-1"><a class="header-anchor" href="#确定赋值断言" aria-hidden="true">#</a> 确定赋值断言</h3><p>在<code>TS</code> 2.7版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个 <code>!</code> 号，以告诉<code>TS</code>该属性会被明确赋值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let num: number;
    let num1!: number;

    const setNumber = () =&gt; num = 7
    const setNumber1 = () =&gt; num1 = 7

    setNumber()
    setNumber1()

    console.log(num) // error 
    console.log(num1) // ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双重断言" tabindex="-1"><a class="header-anchor" href="#双重断言" aria-hidden="true">#</a> 双重断言</h3><p><strong>断言失效后，可能会用到，但一般情况下不会使用</strong></p><p>失效的情况：基础类型不能断言为接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Info{
      name: string;
      age: number;
    }

    const name = &#39;小杜杜&#39; as Info; // error, 原因是不能把 string 类型断言为 一个接口
    const name1 = &#39;小杜杜&#39; as any as Info; //ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型守卫" tabindex="-1"><a class="header-anchor" href="#类型守卫" aria-hidden="true">#</a> 类型守卫</h2><p><strong>类型守卫</strong>：是<strong>可执行运行时检查的</strong>一种表达式，用于确保<strong>该类型在一定的范围内</strong>。</p><p>我个人的感觉是，类型守卫就是你可以设置多种类型，但我默认你是什么类型的意思</p><p>目前，常有的类型守卫共有4种：<strong>in关键字</strong>、<strong>typeof关键字</strong>、<strong>interfaceof关键字</strong>和<strong>类型谓词（is)</strong></p><h3 id="in关键字" tabindex="-1"><a class="header-anchor" href="#in关键字" aria-hidden="true">#</a> <strong>in关键字</strong></h3><p><strong>用于判断这个属性是那个里面的</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Info {
      name: string
      age: number
    }

    interface Info1{
      name: string
      flage: true
    }

    const setInfo = (data: Info | Info1) =&gt; {
      if(&quot;age&quot; in data){
        console.log(\`我的名字是：\${data.name}，年龄是：\${data.age}\`)
      }

       if(&quot;flage&quot; in data){
        console.log(\`我的名字是：\${data.name}，性别是：\${data.flage}\`)
      }
    }

    setInfo({name: &#39;小杜杜&#39;, age: 7}) // &quot;我的名字是：小杜杜，年龄是：7&quot; 
    setInfo({name: &#39;小杜杜&#39;, flage: true}) // &quot;我的名字是：小杜杜，性别是：true&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typeof关键字" tabindex="-1"><a class="header-anchor" href="#typeof关键字" aria-hidden="true">#</a> typeof关键字</h3><p><strong>用于判断基本类型，如string ｜ number等</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    const setInfo = (data: number | string | undefined) =&gt; {
      if(typeof data === &quot;string&quot;){
        console.log(\`我的名字是：\${data}\`)
      }

      if(typeof data === &quot;number&quot;){
        console.log(\`我的年龄是：\${data}\`)
      }

      if(typeof data === &quot;undefined&quot;){
        console.log(data)
      }
    }

    setInfo(&#39;小杜杜&#39;) // &quot;我的名字是：小杜杜&quot;  
    setInfo(7) // &quot;我的年龄是：7&quot; 
    setInfo(undefined) // undefined&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interfaceof关键字" tabindex="-1"><a class="header-anchor" href="#interfaceof关键字" aria-hidden="true">#</a> interfaceof关键字</h3><p><strong>用于判断一个实例是不是构造函数，或使用类的时候</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    class Name {
      name: string = &#39;小杜杜&#39;
    }

    class Age extends Name{
      age: number = 7
    }

    const setInfo = (data: Name) =&gt; {
      if (data instanceof Age) {
        console.log(\`我的年龄是\${data.age}\`);
      } else {
        console.log(\`我的名字是\${data.name}\`);
      }
    } 

    setInfo(new Name()) // &quot;我的名字是小杜杜&quot;
    setInfo(new Age()) // &quot;我的年龄是7&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型谓词-is" tabindex="-1"><a class="header-anchor" href="#类型谓词-is" aria-hidden="true">#</a> 类型谓词（is)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function isNumber(x: any): x is number { //默认传入的是number类型
  return typeof x === &quot;number&quot;; 
}

console.log(isNumber(7)) // true
console.log(isNumber(&#39;7&#39;)) //false
console.log(isNumber(true)) //false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="断言与类型守卫-两者的区别" tabindex="-1"><a class="header-anchor" href="#断言与类型守卫-两者的区别" aria-hidden="true">#</a> 断言与类型守卫，两者的区别</h2><p>通过上面的介绍，我们可以发现<code>断言</code>与<code>类型守卫</code>的概念非常相似，都是确定参数的类型，但<code>断言</code>更加<strong>霸道</strong>，它是直接告诉编辑器，这个参数就是这个类型，而类型守卫更像确定这个参数具体是什么类型。（个人理解，有不对的地方欢迎指出～）</p><h2 id="类型别名、接口" tabindex="-1"><a class="header-anchor" href="#类型别名、接口" aria-hidden="true">#</a> 类型别名、接口</h2><h2 id="类型别名-type" tabindex="-1"><a class="header-anchor" href="#类型别名-type" aria-hidden="true">#</a> 类型别名（type）</h2><p><strong>类型别名</strong>：也就是<code>type</code>，用来给一个类型起个新名字</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    type InfoProps = string | number
    
    const setInfo = (data: InfoProps) =&gt; {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口-interface" tabindex="-1"><a class="header-anchor" href="#接口-interface" aria-hidden="true">#</a> 接口（interface）</h2><p><strong>接口</strong>：在面向对象语言中表示行为抽象，也可以用来描述对象的形状。</p><p>使用<strong>interface</strong>关键字来定义接口</p><h3 id="对象的形状" tabindex="-1"><a class="header-anchor" href="#对象的形状" aria-hidden="true">#</a> 对象的形状</h3><p>接口可以用来描述<code>对象</code>，主要可以包括以下数据：<code>可读属性</code>、<code>只读属性</code>、<code>任意属性</code></p><ul><li><strong>可读属性</strong>：当我们定义一个接口时，我们的属性可能不需要全都要，这是就需要 <strong>?</strong> 来解决</li><li><strong>只读属性</strong>：用 <strong>readonly</strong>修饰的属性为只读属性，意思是指允许定义，不允许之后进行更改</li><li><strong>任意属性</strong>：这个属性极为重要，它是可以用作就算没有定义，也可以使用，比如 <strong>[data: string]: any</strong>。比如说我们对组件进行封装，而封装的那个组件并没有导出对应的类型，然而又想让他不报错，这时就可以使用任意属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Props {
        a: string;
        b: number;
        c: boolean;
        d?: number; // 可选属性
        readonly e: string; //只读属性
        [f: string]: any //任意属性
    }
    let res: Props = {
        a: &#39;小杜杜&#39;,
        b: 7,
        c: true,
        e: &#39;Domesy&#39;,
        d: 1, // 有没有d都可以
        h: 2 // 任意属性，之前为定义过h
    }

    let res.e = &#39;hi&#39; // error, 原因是可读属性不允许更改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p><strong>继承</strong>：与类一样，接口也存在继承属性，也是使用<code>extends</code>字段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface nameProps {
        name: string
    }

    interface Props extends nameProps{
        age: number
    }

    const res: Props = {
        name: &#39;小杜杜&#39;,
        age: 7
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数类型接口" tabindex="-1"><a class="header-anchor" href="#函数类型接口" aria-hidden="true">#</a> 函数类型接口</h3><p>同时，可以定义函数和类，加<code>new</code>修饰的事<strong>类</strong>，不加new的事<strong>函数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Props {
        (data: number): number
    }

    const info: Props = (number:number) =&gt; number  //可定义函数

    // 定义函数
    class A {
        name:string
        constructor(name: string){
            this.name = name
        }
    }

    interface PropsClass{
        new (name: string): A
    }

    const info1 = (fun: PropsClass, name: string) =&gt; new fun(name)

    const res = info1(A, &quot;小杜杜&quot;)
    console.log(res.name) // &quot;小杜杜&quot; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-和-interface-的区别" tabindex="-1"><a class="header-anchor" href="#type-和-interface-的区别" aria-hidden="true">#</a> type 和 interface 的区别</h2><p>通过上面的学习，我们发现<code>类型别名</code>和<code>接口</code>非常相似，可以说在大多数情况下，<code>type</code>与<code>interface</code>是等价的</p><p>但在一些特定的场景差距还是比较大的，接下来逐个来看看</p><h3 id="基础数据类型" tabindex="-1"><a class="header-anchor" href="#基础数据类型" aria-hidden="true">#</a> 基础数据类型</h3><ul><li><code>type</code>和<code>interface</code>都可以定义 <strong>对象</strong> 和 <strong>函数</strong></li><li><code>type</code>可以定义其他数据类型，如字符串、数字、元祖、联合类型等，而<code>interface</code>不行</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    type A = string // 基本类型

    type B = string | number // 联合类型

    type C = [number, string] // 元祖

    const dom = document.createElement(&quot;div&quot;);  // dom元素
    type D = typeof dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h3><p><code>interface</code> 可以扩展 <code>type</code>，<code>type</code> 也可以扩展为 <code>interface</code>，但两者实现扩展的方式不同。</p><ul><li><code>interface</code> 是通过 <code>extends</code> 来实现</li><li><code>type</code> 是通过 <code>&amp;</code> 来实现</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // interface 扩展 interface
    interface A {
        a: string
    }
    interface B extends  A {
        b: number
    }
    const obj:B = { a: \`小杜杜\`, b: 7 }

    // type 扩展 type
    type C = { a: string }
    type D = C &amp; { b: number }
    const obj1:D = { a: \`小杜杜\`, b: 7 }

    // interface 扩展为 Type
    type E = { a: string }
    interface F extends E { b: number }
    const obj2:F = { a: \`小杜杜\`, b: 7 }

    // type 扩展为 interface
    interface G { a: string }
    type H = G &amp; {b: number}
    const obj3:H = { a: \`小杜杜\`, b: 7 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重复定义" tabindex="-1"><a class="header-anchor" href="#重复定义" aria-hidden="true">#</a> 重复定义</h3><p><code>interface</code> 可以多次被定义，并且会进行合并，但<code>type</code>不行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface A {
        a: string
    }
    interface A {
        b: number
    }
    const obj:A = { a: \`小杜杜\`, b: 7 }

    type B = { a: string }
    type B = { b: number } // error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="联合类型-union-types" tabindex="-1"><a class="header-anchor" href="#联合类型-union-types" aria-hidden="true">#</a> 联合类型(Union Types)</h2><p><strong>联合类型(Union Types)</strong>: 表示取值可以为多种类型中的一种,未赋值时联合类型上只能访问两个类型共有的属性和方法，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    const setInfo = (name: string | number) =&gt; {}

    setInfo(&#39;小杜杜&#39;)
    setInfo(7)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面看 <code>setInfo</code>接收一个<code>name</code>，而 <code>name</code> 可以接收 <code>string</code>或<code>number</code>类型，那么这个参数便是联合类型</p><h3 id="可辨识联合" tabindex="-1"><a class="header-anchor" href="#可辨识联合" aria-hidden="true">#</a> 可辨识联合</h3><p><strong>可辨识联合</strong>：包含三个特点，分别是<code>可辨识</code>、<code>联合类型</code>、<code>类型守卫</code>,</p><p>这种类型的本质是：结合<strong>联合类型</strong>和<strong>字面量类型</strong>的一种类型保护方法。</p><p><strong>如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。</strong></p><p>也就是上面一起结合使用，这里写个小例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface A {
      type: 1,
      name: string
    }

    interface B {
      type: 2
      age: number
    }

    interface C {
      type: 3,
      sex: boolean
    }

    // const setInfo = (data: A | B | C) =&gt; {
    //   return data.type // ok 原因是 A 、B、C 都有 type属性
    //   return data.age // error，  原因是没有判断具体是哪个类型，不能确定是A，还是B，或者是C
    // }

    const setInfo1 = (data: A | B | C) =&gt; {
      if (data.type === 1 ) {
        console.log(\`我的名字是\${data.name}\`);
      } else if (data.type === 2 ){
        console.log(\`我的年龄是\${data.age}\`);
      } else if (data.type === 3 ){
        console.log(\`我的性别是\${data.sex}\`);
      }
    }

    setInfo1({type: 1, name: &#39;小杜杜&#39;}) // &quot;我的名字是小杜杜&quot;
    setInfo1({type: 2, age: 7}) // &quot;我的年龄是7&quot; 
    setInfo1({type: 3, sex: true}) // &quot;我的性别是true&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了 <code>A</code>、<code>B</code>、<code>C</code> 三次接口，但这三个接口都包含<code>type</code>属性，那么<code>type</code>就是<code>可辨识的属性</code>,而其他属性只跟特性的接口相关。</p><p>然后通过可辨识属性<code>type</code>，才能使用其相关的属性</p><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><p><strong>泛型</strong>：Generics，是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性</p><p>也就是说，泛型是<strong>允许同一个函数接受不同类型参数的一种模版</strong>，与<code>any</code>相比，使用泛型来创建可服用的组件要更好，因为<strong>泛型会保留参数类型</strong>（PS：泛型是整个TS的重点，也是难点，请多多注意～）</p><h3 id="为什么需要泛型" tabindex="-1"><a class="header-anchor" href="#为什么需要泛型" aria-hidden="true">#</a> 为什么需要泛型</h3><p>我们先看看一个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    const calcArray = (data:any):any[] =&gt; {
        let list = []
        for(let i = 0; i &lt; 3; i++){
            list.push(data)
        }
        return list
    }

    console.log(calcArray(&#39;d&#39;)) // [&quot;d&quot;, &quot;d&quot;, &quot;d&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的例子我们发现，在<code>calcArray</code>中传任何类型的参数，返回的数组都是<code>any</code>类型</p><p>由于我们不知道传入的数据是什么，所以返回的数据也为<code>any的数组</code></p><p>但我们现在想要的效果是：<strong>无论我们传什么类型，都能返回对应的类型</strong>，针对这种情况怎么办？所以此时<code>泛型</code>就登场了</p><h3 id="泛型语法" tabindex="-1"><a class="header-anchor" href="#泛型语法" aria-hidden="true">#</a> 泛型语法</h3><p>我们先用泛型对上面的例子进行改造下，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    const calcArray = &lt;T,&gt;(data:T):T[] =&gt; {
        let list:T[] = []
        for(let i = 0; i &lt; 3; i++){
            list.push(data)
        }
        return list
    }

    const res:string[] = calcArray&lt;string&gt;(&#39;d&#39;) // ok
    const res1:number[] = calcArray&lt;number&gt;(7) // ok

    type Props = {
        name: string,
        age: number
    }
    const res3: Props[] = calcArray&lt;Props&gt;({name: &#39;小杜杜&#39;, age: 7}) //ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过上面的案例，我们发现传入的<code>字符串</code>、<code>数字</code>、<code>对象</code>，都能返回对应的类型，从而达到我们的目的，接下来我们再看看<code>泛型语法</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    function identity &lt;T&gt;(value:T) : T {
        return value
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次看到这个<code>&lt;T&gt;</code>我们是不是很懵，实际上这个<code>T</code>就是<strong>传递的类型</strong>,从上述的例子来看，这个<code>&lt;T&gt;</code>就是<code>&lt;string&gt;</code>,要注意一点，这个<code>&lt;string&gt;</code>实际上是可以省略的，因为 TS 具有<strong>类型推论</strong>，可以自己推断类型</p><h3 id="多类型传参" tabindex="-1"><a class="header-anchor" href="#多类型传参" aria-hidden="true">#</a> 多类型传参</h3><p>我们有多个未知的类型占位，我们可以定义任何的字母来表示不同的参数类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    const calcArray = &lt;T,U&gt;(name:T, age:U): {name:T, age:U} =&gt; {
        const res: {name:T, age:U} = {name, age}
        return res
    }

    const res = calcArray&lt;string, number&gt;(&#39;小杜杜&#39;, 7)
    console.log(res) // {&quot;name&quot;: &quot;小杜杜&quot;, &quot;age&quot;: 7}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口" aria-hidden="true">#</a> 泛型接口</h3><p>定义接口的时候，我们也可以使用泛型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface A&lt;T&gt; {
        data: T
    }

    const Info: A&lt;string&gt; = {data: &#39;1&#39;}
    console.log(Info.data) // &quot;1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类" aria-hidden="true">#</a> 泛型类</h3><p>同样泛型也可以定义类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    class clacArray&lt;T&gt;{
        private arr: T[] = [];

        add(value: T) {
            this.arr.push(value)
        }
        getValue(): T {
            let res = this.arr[0];
            console.log(this.arr)
            return res;
        }
    }

    const res = new clacArray()

    res.add(1)
    res.add(2)
    res.add(3)

    res.getValue() //[1, 2, 3] 
    console.log(res.getValue) // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类型别名" tabindex="-1"><a class="header-anchor" href="#泛型类型别名" aria-hidden="true">#</a> 泛型类型别名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    type Info&lt;T&gt; = {
        name?: T
        age?: T
    }

    const res:Info&lt;string&gt; = { name: &#39;小杜杜&#39;}
    const res1:Info&lt;number&gt; = { age: 7}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型默认参数" tabindex="-1"><a class="header-anchor" href="#泛型默认参数" aria-hidden="true">#</a> 泛型默认参数</h3><p>所谓默认参数，是指定类型，如默认值一样，从实际值参数中也无法推断出类型时，这个默认类型就会起作用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    const calcArray = &lt;T = string,&gt;(data:T):T[] =&gt; {
        let list:T[] = []
        for(let i = 0; i &lt; 3; i++){
            list.push(data)
        }
        return list
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型常用字母" tabindex="-1"><a class="header-anchor" href="#泛型常用字母" aria-hidden="true">#</a> 泛型常用字母</h3><p>用常用的字母来表示一些变量的代表：</p><ul><li><strong>T</strong>：代表<strong>Type</strong>，定义泛型时通常用作第一个类型变量名称</li><li><strong>K</strong>：代表<strong>Key</strong>，表示对象中的<strong>键类型</strong>；</li><li><strong>V</strong>：代表<strong>Value</strong>，表示对象中的<strong>值类型</strong>；</li><li><strong>E</strong>：代表<strong>Element</strong>，表示的<strong>元素类型</strong>；</li></ul><h2 id="常用技巧" tabindex="-1"><a class="header-anchor" href="#常用技巧" aria-hidden="true">#</a> 常用技巧</h2><p>在 TS 中有许多关键字和工具类型，在使用上，需要注意<strong>泛型</strong>上的应用，有的时候结合起来可能就有一定的问题</p><p>在此特别需要注意 <code>extends</code>、<code>typeof</code>、<code>Partial</code>、<code>Record</code>、<code>Exclude</code>、<code>Omit</code>这几个工具类型</p><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><p><strong>extends</strong>：检验是否拥有其属性 在这里，举个例子，我们知道<code>字符串</code>和<code>数组</code>拥有<code>length</code>属性，但<code>number</code>没有这个属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    const calcArray = &lt;T,&gt;(data:T): number =&gt; {
      return data.length // error 
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的 <code>calcArray</code>的作用只是获取<code>data的数量</code>,但此时在<code>TS</code>中会报错，这是因为<strong>TS不确定传来的属性是否具备length这个属性</strong>，毕竟每个属性都不可能完全相同</p><p>那么这时该怎么解决呢？</p><p>我们已经确定，要拿到传过来数据的 <code>length</code>，也就是说传过来的属性必须具备<code>length</code>这个属性，如果没有，则不让他调用这个方法。</p><p>换句话说，<code>calcArray</code>需要具备检验属性的功能，对于上述例子就是检验是否有<code>length</code>的功能，这是我们就需要<strong>extends</strong>这个属性帮我们去鉴定：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Props {
        length: number
    }

    const calcArray = &lt;T extends Props,&gt;(data:T): number =&gt; {
      return data.length // error
    }

    calcArray(&#39;12&#39;) // ok
    calcArray([1,3]) //ok
    calcArray(2) //error 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出<code>calcArray(2)</code>会报错，这是因为<code>number</code>类型并不具备<code>length</code>这个属性</p><h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h3><p><strong>typeof关键字</strong>：我们在类型保护的时候讲解了typeof的作用，除此之外，这个关键字还可以实现<strong>推出类型</strong>，如下图，可以推断中 <strong>Props 包含的类型</strong></p><p><img src="https://pic2.zhimg.com/v2-de79b5dd47ee8f16bbae8cb87f053b11_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="700" height="456"></svg>)</p><h3 id="keyof" tabindex="-1"><a class="header-anchor" href="#keyof" aria-hidden="true">#</a> keyof</h3><p><strong>keyof关键字</strong>: 可以获取一个对象接口的所有<code>key</code>值,可以检查对象上的键是否存在</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Props {
        name: string;
        age: number;
        sex: boolean
    }

    type PropsKey = keyof Props; //包含 name， age， sex

    const res:PropsKey = &#39;name&#39; // ok
    const res1:PropsKey = &#39;tel&#39; // error

    // 泛型中的应用
    const getInfo = &lt;T, K extends keyof T&gt;(data: T, key: K): T[K] =&gt; {
        return data[key]
    }

    const info = {
        name: &#39;小杜杜&#39;,
        age: 7,
        sex: true
    }

    getInfo(info, &#39;name&#39;); //ok
    getInfo(info, &#39;tel&#39;); //error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引访问操作符" tabindex="-1"><a class="header-anchor" href="#索引访问操作符" aria-hidden="true">#</a> 索引访问操作符</h3><p>索引访问操作符：通过 [] 操作符可进行索引访问,可以访问其中一个属性</p><p><img src="https://pic4.zhimg.com/v2-24f21072a9928b93da9e4be83dbdbb5f_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="486" height="334"></svg>)</p><h3 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h3><p><strong>in</strong>：映射类型, 用来映射遍历枚举类型</p><p><img src="https://pic1.zhimg.com/v2-af7436930177ec67ba1cb0ac13353994_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="616" height="398"></svg>)</p><h3 id="infer" tabindex="-1"><a class="header-anchor" href="#infer" aria-hidden="true">#</a> infer</h3><p><strong>infer</strong>：可以是使用为条件语句，可以用 <code>infer</code> 声明一个类型变量并且对它进行使用。如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    type Info&lt;T&gt; = T extends { a: infer U; b: infer U } ? U : never;

    type Props = Info&lt;{ a: string; b: number }&gt;; // Props类： string | number

    type Props1 = Info&lt;number&gt; // Props类型： never

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="partial" tabindex="-1"><a class="header-anchor" href="#partial" aria-hidden="true">#</a> Partial</h3><p><strong>Partial语法</strong>：<code>Partial&lt;T&gt;</code> 作用：将所有属性变为可选的 <strong>?</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Props {
        name: string,
        age: number
    }

    const info: Props = {
        name: &#39;小杜杜&#39;,
        age: 7
    }

    const info1: Partial&lt;Props&gt; = { 
        name: &#39;小杜杜&#39;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码上来看，name 和 age 属于必填，对于 info 来说必须要设置 name 和 age 属性才行，但对于 info1来说，只要是个对象就可以，至于是否有name、 age属性并不重要</p><h3 id="required" tabindex="-1"><a class="header-anchor" href="#required" aria-hidden="true">#</a> Required</h3><p><strong>Required语法</strong>：<code>Required&lt;T&gt;</code> 作用：将所有属性变为必选的，与 <code>Partial</code>相反</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Props {
        name: string,
        age: number,
        sex?: boolean
    }

    const info: Props = {
        name: &#39;小杜杜&#39;,
        age: 7
    }

    const info1: Required&lt;Props&gt; = { 
        name: &#39;小杜杜&#39;,
        age: 7,
        sex: true
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> Readonly</h3><p><strong>Readonly语法</strong>：<code>Readonly&lt;T&gt;</code> 作用：将所有属性都加上 readonly 修饰符来实现。也就是说无法修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Props {
        name: string
        age: number
    }

    let info: Readonly&lt;Props&gt; = {
        name: &#39;小杜杜&#39;,
        age: 7
    }

    info.age = 1 //error read-only 只读属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码上来看, <code>Readonly</code>修饰后，属性无法再次更改，智能使用</p><h3 id="record" tabindex="-1"><a class="header-anchor" href="#record" aria-hidden="true">#</a> Record</h3><p><strong>Record语法</strong>：Record&lt;K extends keyof any, T&gt;</p><p>作用：将 <code>K</code> 中所有的属性的值转化为 <code>T</code> 类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Props {
        name: string,
        age: number
    }

    type InfoProps = &#39;JS&#39; | &#39;TS&#39;

    const Info: Record&lt;InfoProps, Props&gt; = {
        JS: {
            name: &#39;小杜杜&#39;,
            age: 7
        },
        TS: {
            name: &#39;TypeScript&#39;,
            age: 11
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码上来看, <code>InfoProps</code>的属性分别包含<code>Props</code>的属性</p><p>需要注意的一点是：<code>K extends keyof any</code>其类型可以是:<code>string</code>、<code>number</code>、<code>symbol</code></p><h3 id="pick" tabindex="-1"><a class="header-anchor" href="#pick" aria-hidden="true">#</a> Pick</h3><p><strong>Pick语法</strong>：Record&lt;K extends keyof any, T&gt;</p><p>作用：将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    interface Props {
        name: string,
        age: number,
        sex: boolean
    }

    type nameProps = Pick&lt;Props, &#39;name&#39; | &#39;age&#39;&gt;

    const info: nameProps = {
        name: &#39;小杜杜&#39;,
        age: 7
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码上来看, <code>Props</code>原本属性包括<code>name</code>、<code>age</code>、<code>sex</code>三个属性，通过 <strong>Pick</strong>我们吧<code>name</code>和<code>age</code>挑了出来，所以不需要<code>sex</code>属性</p><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> Exclude</h3><p><strong>Exclude语法</strong>：Exclude&lt;T, U&gt;</p><p>作用：将T类型中的U类型剔除。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // 数字类型
    type numProps = Exclude&lt;1 | 2 | 3, 1 | 2&gt; // 3
    type numProps1 = Exclude&lt;1, 1 | 2&gt; // nerver
    type numProps2 = Exclude&lt;1, 1&gt; // nerver
    type numProps3 = Exclude&lt;1 | 2, 7&gt; // 1 2

    // 字符串类型
    type info = &quot;name&quot; | &quot;age&quot; | &quot;sex&quot;
    type info1 = &quot;name&quot; | &quot;age&quot; 
    type infoProps = Exclude&lt;info, info1&gt; //  &quot;sex&quot;

    // 类型
    type typeProps = Exclude&lt;string | number | (() =&gt; void), Function&gt; // string | number

    // 对象
    type obj = { name: 1, sex: true }
    type obj1 = { name: 1 }
    type objProps = Exclude&lt;obj, obj1&gt; // nerver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码上来看,我们比较了下类型上的，当 T 中有 U 就会剔除对应的属性，如果 U 中又的属性 T 中没有，或 T 和 U 刚好一样的情况都会返回 <strong>nerver</strong>，且对象永远返回<code>nerver</code></p><h3 id="extra" tabindex="-1"><a class="header-anchor" href="#extra" aria-hidden="true">#</a> Extra</h3><p><strong>Extra语法</strong>：Extra&lt;T, U&gt;</p><p>作用：将T 可分配给的类型中提取 U。与 <strong>Exclude</strong>相反</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    type numProps = Extract&lt;1 | 2 | 3, 1 | 2&gt; // 1 | 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="omit" tabindex="-1"><a class="header-anchor" href="#omit" aria-hidden="true">#</a> Omit</h3><p><strong>Omit语法</strong>：Omit&lt;T, U&gt;</p><p>作用：将已经声明的类型进行属性剔除获得新类型</p><p><img src="https://pic1.zhimg.com/v2-4bbe230167052cc2c2790c813e1e3268_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="686" height="428"></svg>)</p><p>与 <strong>Exclude</strong>的区别：Omit 返回的是新的类型，原理上是在 <code>Exclude</code>之上进行的，<code>Exclude</code>是根据自类型返回的</p><h3 id="nonnullable" tabindex="-1"><a class="header-anchor" href="#nonnullable" aria-hidden="true">#</a> NonNullable</h3><p><strong>NonNullable语法</strong>：<code>NonNullable&lt;T&gt;</code> 作用：从 T 中排除 <code>null</code> 和 <code>undefined</code></p><p><img src="https://pic3.zhimg.com/v2-85487144a22a36e56fbd95280aa8f93a_b.jpg" alt=""></p><p>![](data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="964" height="164"></svg>)</p><h3 id="returntype" tabindex="-1"><a class="header-anchor" href="#returntype" aria-hidden="true">#</a> ReturnType</h3><p><strong>ReturnType语法</strong>：<code>ReturnType&lt;T&gt;</code></p><p>作用：用于获取 <strong>函数T的返回类型。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    type Props = ReturnType&lt;() =&gt; string&gt; // string
    type Props1 = ReturnType&lt;&lt;T extends U, U extends number&gt;() =&gt; T&gt;; // number
    type Props2 = ReturnType&lt;any&gt;; // any
    type Props3 = ReturnType&lt;never&gt;; // any
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码上来看， ReturnType可以接受 any 和 never 类型，原因是这两个类型属于顶级类型，包含函数</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p><strong>Parameters</strong>：<code>Parameters&lt;T&gt;</code> 作用：用于获取 <strong>获取函数类型的参数类型</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    type Props = Parameters&lt;() =&gt; string&gt; // []
    type Props1 = Parameters&lt;(data: string) =&gt; void&gt; // [string]
    type Props2 = Parameters&lt;any&gt;; // unknown[]
    type Props3 = Parameters&lt;never&gt;; // never
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> End</h2><p>参考：</p>`,321),m={href:"https://blog.maxiaobo.com.cn/type-challenge/dist/#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%81%9A-ts-%E4%BD%93%E6%93%8D",target:"_blank",rel:"noopener noreferrer"},b={href:"http://ts.yayujs.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://link.zhihu.com/?target=https%3A//link.juejin.cn/%3Ftarget%3Dhttps%253A%252F%252Fwww.typescriptlang.org%252Fdocs%252Fhandbook%252Frelease-notes%252Ftypescript-4-0.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://link.zhihu.com/?target=https%3A//link.juejin.cn/%3Ftarget%3Dhttps%253A%252F%252Fjkchao.github.io%252Ftypescript-book-chinese%252F",target:"_blank",rel:"noopener noreferrer"},h={href:"https://link.zhihu.com/?target=https%3A//juejin.cn/post/6872111128135073806",target:"_blank",rel:"noopener noreferrer"},x=e("blockquote",null,null,-1);function f(y,q){const i=l("ExternalLinkIcon");return r(),t("div",null,[o,e("p",null,[n("我们为了方便起见，可以使用线上的编辑器："),e("a",v,[n("TypeScript Playground"),s(i)]),n("，像这样")]),u,e("ul",null,[e("li",null,[e("a",m,[n("TS 类型挑战通关手册"),s(i)])]),e("li",null,[e("a",b,[n(" TS 入门到进阶系统教程"),s(i)])]),e("li",null,[e("a",g,[n("TypeScript 4.0"),s(i)])]),e("li",null,[e("a",p,[n("深入理解 TypeScript"),s(i)])]),e("li",null,[e("a",h,[n("一份不可多得的 TS 学习指南（1.8W字）"),s(i)])])]),x])}const T=a(c,[["render",f],["__file","ts_study.html.vue"]]);export{T as default};
