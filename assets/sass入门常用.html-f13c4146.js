import{_ as d,r as l,o as r,c,a as e,b as s,d as i,e as a}from"./app-bc70983f.js";const t={},o=e("p",null,[e("strong",null,"工具介绍")],-1),u=e("h2",{id:"sass-简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sass-简介","aria-hidden":"true"},"#"),s(" Sass 简介")],-1),v=e("p",null,"Sass 是一个 CSS 的扩展，它在 CSS 语法的基础上，允许您使用变量（variables）、嵌套规则（nested rules）、混合（mixins）、导入（inline imports）等功能，令 CSS 更加强大与优雅。使用 Sass 以及 Compass 样式库有助于更好地组织管理样式文件，以及更高效地开发项目。",-1),p=e("p",null,"Sass 的主要特点有：完全兼容 CSS3；在 CSS 语言的基础上增加变量、嵌套、混合等功能；通过函数进行颜色值与属性值的运算；提供控制指令等高级功能以及自定义输出格式等。",-1),m=e("code",null,".scss",-1),b={href:"http://tools.52cha.cc/css-selector.html",title:"CSS 选择器参考",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,".sass",-1),g=a(`<p>任何一种语法的文件可以直接 import 到另一种语法的文件中使用，只要使用 <strong>sass-convert</strong> 命令行工具，就可以将一种语法转换为另一种语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Convert Sass to SCSS
$ sass-convert style.sass style.scss

# Convert SCSS to Sass
$ sass-convert style.scss style.ss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sass-快速入门" tabindex="-1"><a class="header-anchor" href="#sass-快速入门" aria-hidden="true">#</a> Sass 快速入门</h2><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> @use</h3><p>在 Sass 中，@use 是一个模块化导入机制，它允许你从其他 Sass 文件中导入和使用特定的功能，如变量、函数、混合宏（mixins）和类型。@use 的主要优点在于它提供了比传统 @import 更高级别的模块化和代码重用能力，同时减少了全局作用域的污染。</p><h4 id="use-的高级用法" tabindex="-1"><a class="header-anchor" href="#use-的高级用法" aria-hidden="true">#</a> @use 的高级用法</h4><ul><li>命名空间用法</li></ul><div class="language-sass line-numbers-mode" data-ext="sass"><pre class="language-sass"><code>
<span class="token atrule-line"><span class="token atrule">@use</span> &#39;mixins/variables&#39;;</span>
<span class="token atrule-line"><span class="token atrule">@use</span> &#39;mixins/mixins&#39;;</span>

<span class="token selector">.my-element {</span>
<span class="token property-line">  <span class="token property">color</span><span class="token punctuation">:</span> variables.<span class="token variable">$primary-color</span>;</span>
<span class="token atrule-line">  <span class="token atrule">@include</span> mixins.box-shadow(0 2px 4px rgba(0, 0, 0, 0.1));</span>
<span class="token selector">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>命名空间：使用 as 关键字为导入的模块指定一个命名空间，避免全局命名冲突。</li></ul><div class="language-sass line-numbers-mode" data-ext="sass"><pre class="language-sass"><code><span class="token atrule-line"><span class="token atrule">@use</span> &#39;variables&#39; as vars;</span>
<span class="token atrule-line"><span class="token atrule">@use</span> &#39;mixins&#39; as m;</span>

<span class="token selector">.my-element {</span>
<span class="token property-line">  <span class="token property">color</span><span class="token punctuation">:</span> vars.<span class="token variable">$primary-color</span>;</span>
<span class="token atrule-line">  <span class="token atrule">@include</span> m.box-shadow(0 2px 4px rgba(0, 0, 0, 0.1));</span>
<span class="token selector">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入所有：使用 * 来导入模块中的所有导出项，但这样可能增加全局命名冲突的风险</li></ul><div class="language-sass line-numbers-mode" data-ext="sass"><pre class="language-sass"><code><span class="token atrule-line"><span class="token atrule">@use</span> &#39;variables&#39; as *;</span>
<span class="token atrule-line"><span class="token atrule">@use</span> &#39;mixins&#39; as *;</span>

<span class="token selector">.my-element {</span>
<span class="token property-line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span>;</span>
<span class="token atrule-line">  <span class="token atrule">@include</span> box-shadow(0 2px 4px rgba(0, 0, 0, 0.1));</span>
<span class="token selector">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-用法" tabindex="-1"><a class="header-anchor" href="#map-用法" aria-hidden="true">#</a> map 用法</h3><div class="language-sass line-numbers-mode" data-ext="sass"><pre class="language-sass"><code><span class="token atrule-line"><span class="token atrule">@use</span> &#39;sass:map&#39;;</span>
<span class="token variable-line"><span class="token variable">$text-color</span><span class="token punctuation">:</span> () !default;</span>
<span class="token variable-line"><span class="token variable">$text-color</span><span class="token punctuation">:</span> map.merge(</span>
  <span class="token selector">(</span>
<span class="token property-line">    <span class="token property">&#39;primary&#39;</span><span class="token punctuation">:</span> #303133,</span>
<span class="token property-line">    <span class="token property">&#39;regular&#39;</span><span class="token punctuation">:</span> #606266,</span>
<span class="token property-line">    <span class="token property">&#39;secondary&#39;</span><span class="token punctuation">:</span> #909399,</span>
<span class="token property-line">    <span class="token property">&#39;placeholder&#39;</span><span class="token punctuation">:</span> #a8abb2,</span>
<span class="token property-line">    <span class="token property">&#39;disabled&#39;</span><span class="token punctuation">:</span> #c0c4cc,</span>
  <span class="token selector">)</span><span class="token punctuation">,</span>
<span class="token variable-line">  <span class="token variable">$text-color</span></span>
<span class="token selector">);</span>

<span class="token selector">.text{</span>
<span class="token property-line">  <span class="token property">color</span><span class="token punctuation">:</span><span class="token property">map.get($text-color,</span> &#39;secondary&#39;)</span>
<span class="token selector">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量：$</h3><p>在 Sass 中，变量以美元符号 <code>$</code> 开始，赋值就像设置 CSS 属性那样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$width: 5em;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以在属性中引用他们:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#main {
  width: $width;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量仅在它定义的选择器嵌套层级的范围内可用（可以理解为块级作用域）；不在任何嵌套选择器内定义的变量则在可任何地方使用（可以理解为全局变量）。定义变量的时候可以后面带上 <code>!global</code> 标志，在这种情况下，变量在任何地方可见（可以理解为全局变量）。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#main {
  width: 5em;
}

#sidebar {
  width: 5em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：由于历史原因，变量名（以及其他所有 Sass 标识符）可以互换连字符 <code>-</code> 和下划线 <code>_</code>。例如，如果你定义了一个名为 <code>$main-width</code>，您可以使用 <code>$main_width</code> 访问它，反之亦然。</p></blockquote><h3 id="数据类型-data-types" tabindex="-1"><a class="header-anchor" href="#数据类型-data-types" aria-hidden="true">#</a> 数据类型（Data Types）</h3><p>Sass 支持 7 种主要的数据类型：</p><ol><li>数字（例如：1.2, 13, 10px）</li><li>文本字符串，带引号字符串和不带引号字符串(例如：&quot;foo&quot;, &#39;bar&#39;, baz）</li><li>颜色，例如：blue, #04a3f9, rgba(255, 0, 0, 0.5)</li><li>布尔值，例如：true, false）</li><li>空值，例如：null）</li><li>值列表（list），用空格或逗号分隔。例如：1.5em 1em 0 2em, Helvetica, Arial, sans-serif）</li><li>maps，从一个值映射到另一个。例如：(key1: value1, key2: value2)</li></ol><p>Sass 也支持其他所有类型的 CSS 属性值，比如 Unicode 字符集，或 <code>!important</code> 声明。然而，不会对这些类型的属性值做特殊处理，一律视为不带引号的字符串。</p><h4 id="字符串-strings" tabindex="-1"><a class="header-anchor" href="#字符串-strings" aria-hidden="true">#</a> 字符串（Strings）</h4><p>CSS 指定两种字符串类型：带引号的字符串（注：包括双引号和单引号），如 <code>&quot;Lucida Grande&quot;</code> 或者 <code>&#39;http://sass-lang.com&#39;</code>，还有不带引号的字符串，如 <code>sans-serif</code> 或者 <code>bold</code>。Sass 都能识别这两种类型，并且一般来说，在编译输出的 CSS 文件中不会改变 Sass 文档中使用的字符串类型。</p><p>有一个例外，当使用 <code>#{} interpolation</code> 时，带引号的字符串将被编译为不带引号的字符串，这样主要是为了便于使用，比如 mixins 中的选择器名称。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: &quot;Hi, Firefox users!&quot;;
  }
}

@include firefox-message(&quot;.header&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>body.firefox .header:before {
  content: &quot;Hi, Firefox users!&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表-lists" tabindex="-1"><a class="header-anchor" href="#列表-lists" aria-hidden="true">#</a> 列表（Lists）</h4><p>列表是指 Sass 如何表示在 CSS 声明的，类似 <code>margin: 10px 15px 0 0</code> 或 <code>font-face: Helvetica, Arial, sans-serif</code> 这样的值，列表只是一串其他值，无论是用空格还是用逗号隔开。事实上，独立的值也被视为列表：只包含一个值的列表。</p><p>列表本身没有太多的功能，但 Sass 列表函数赋予了数组更多新功能：</p><ul><li><code>nth</code> 函数可以直接访问数组中的某一项；</li><li><code>join</code> 函数可以将多个数组连接在一起；</li><li><code>append</code> 函数可以在数组中添加新值；</li><li><code>@each</code> 指令能够遍历数组中的每一项。</li></ul><p>除了包含简单的值，列表还可包含其他列表。例如，<code>1px 2px, 5px 6px</code> 包含 <code>1px 2px</code> 列表和 <code>5px 6px</code> 列表两个项。如果内外两层列表使用相同的分隔符号，你需要使用括号将内层列表括起来，以明确内层类别的开始和结束位置。</p><p>例如，<code>(1px 2px) (5px 6px)</code> 同样是包含 <code>1px 2px</code> 列表和 <code>5px 6px</code> 列表两个项的列表。不同的是，该列表层外用空格分隔，之前列表外层是用逗号分隔。</p><p>当列表被编译为 CSS 时，Sass 不会添加任何圆括号，因为 CSS 不能识别他们。这意味着，<code>(1px 2px) (5px 6px)</code> 和 <code>1px 2px 5px 6px</code> 在编译后的 CSS 文件中看起来是完全一样的。然而，它们在 Sass 中却是不同的：第一个是含两个列表的列表，而第二个是含有四个成员的列表。</p><p>用括号 <code>()</code> 表示不包含任何值的空数组（在 Sass 3.3 版之后也视为空的 map）。空数组不可以直接编译成 CSS，比如编译 <code>font-family: ()</code>，Sass 将会报错。如果数组中包含空数组或空值，编译时将被清除，比如 <code>1px 2px () 3px</code> 或 <code>1px 2px null 3px</code>。</p><p>列表也可以没有任何项。这些列表可以用 <code>()</code> 表示（也是一个空的 map）。</p><p>逗号分隔的列表可以保留结尾的逗号。这是特别有用，因为它可以表示一个单个元素的列表。</p><p>例如，<code>(1,)</code> 表示为只包含 1 的列表，而 <code>(1 2 3,)</code> 这个表示包含一个列表，这个列表又包含以空格分隔的 1, 2, 和 3 的列表。</p><h4 id="maps" tabindex="-1"><a class="header-anchor" href="#maps" aria-hidden="true">#</a> Maps</h4><p>Maps 代表一个键和值对集合，其中键用于查找值。他们可以很容易地将值收集到命名组中，并且可以动态地访问这些组。在CSS中你找不到和他们类似的值，虽然他们的语法类似于媒体查询表达式：</p><p><code>$map: (key1: value1, key2: value2, key3: value3);</code></p><p>和列表不同，<strong>Maps 必须始终使用括号括起来，并且必须用逗号分隔</strong>。Maps 中的键和值可以是任意的 Sass 对象。一个 Maps 可能只有一个值与给定的键关联（尽管该值可以是一个列表）。一个给定的值可能与许多键关联。</p><p>和列表类似，Maps 的主要操作使用的是 Sass 函数。</p><ul><li><code>map-get</code> 函数用于查找 map 中的值，</li><li><code>map-merge</code> 函数用于添加值到 map 中的值，</li><li><code>@each</code> 指令可以用来为 map 中的每个键值对添加样式。</li></ul><p>map 中键值对的顺序和 map 创建时始终相同。</p><p>Maps 还可以用于任何列表能做的事情。当用于一个列表函数时，map 被视为键值对列表。例如，<code>(key1: value1, key2: value2)</code> 被用于列表函数时，将被视为嵌套列表 <code>key1 value1, key2 value2</code>。列表不能被视为 maps，不过，空列表除外。<code>()</code> 表示一个键/值对都没有的 map，也可以被视为一个没有元素的列表。</p><p>需要注意的是 map 的键（keys）可以是任何 Sass 数据类型（甚至是另一个map），并且声明 map 的语法允许是任意的 Sass 表达式，这个表达式将被评估为一个值以确定键（keys）。</p><p>Maps 不能转换为纯 CSS。作为变量的值或参数传递给 CSS 函数将会导致错误。使用 <code>inspect($value)</code> 函数以产生输出字符串，这对于调试 maps 非常有用。</p><h4 id="颜色-colors" tabindex="-1"><a class="header-anchor" href="#颜色-colors" aria-hidden="true">#</a> 颜色（Colors）</h4><p>任何 CSS 颜色表达式返回 Sass 颜色值。这其中包括了大量的命名的颜色，这些名字字符串不区别带不带引号。</p>`,57),h=e("code",null,"#FF0000",-1),S=e("code",null,"red",-1),f=e("code",null,"blanchedalmond",-1),k=e("code",null,"#FFEBCD",-1),q={href:"http://tools.52cha.cc/color-converter.html",title:"颜色转换工具",target:"_blank",rel:"noopener noreferrer"},$=a(`<p>一个用户遇到的常见问题是在其它输出模式中 Sass 喜欢输出与命名的颜色相同的格式，当压缩的时候，插值到选择器的颜色变得无效语法。为了避免这种情况，如果他们是为了在选择施工中使用，总是给命名的颜色。</p><h3 id="运算-operations" tabindex="-1"><a class="header-anchor" href="#运算-operations" aria-hidden="true">#</a> 运算 (Operations)</h3><p>所有数据类型的支持相等运算 <code>==</code> 和 <code>!=</code>。此外，每种类型都有其自己特殊的运算方式。</p><h4 id="数字运算-number-operations" tabindex="-1"><a class="header-anchor" href="#数字运算-number-operations" aria-hidden="true">#</a> 数字运算 (Number Operations)</h4><p>Sass 支持对数字标准的算术运算（加法 <code>+</code>，减法 <code>-</code> ，乘法 <code>*</code>，除法 <code>/</code> 和取模 <code>%</code>）。Sass 数学函数在算术运算期间会保留单位。这意味着，就像在现实生活中，你不能用不相同的单位数字进行算术运算（比如数字后面添加了 <code>px</code> 和 <code>em</code> 单位）；另外，两个单位相同的数字相乘将产生单位平方，如：<code>10px * 10px == 100px * px</code>)。要知道，px * px 是无效的 CSS 单位，此时，Sass 会抛出一个错误，因为你试图在 CSS 中使用无效的单位。</p><p>数字支持关系运算符 <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>)，并且所有类型支持相等运算符 <code>==</code> 和 <code>!=</code>。</p><h4 id="除法和" tabindex="-1"><a class="header-anchor" href="#除法和" aria-hidden="true">#</a> 除法和 <code>/</code></h4><p>CSS 允许 <code>/</code> 出现在属性值之间作为分隔数字的方式，例如 font 属性，<code>p.ex2 { font:italic bold 12px/20px arial,sans-serif;}</code>。由于 Sass 是 CSS 属性语法的扩展，所以它必须支持这一点，同时还允许 <code>/</code> 用于除法。这意味着，在默认情况下，在 Sass 中如果两个数字由 <code>/</code> 分隔，在返回的CSS中将以同样的方式出现。</p><p>但是，有三种情况会将 <code>/</code> 解析为除法，这涵盖了绝大多数当做除法的案例：</p><ol><li>如果该值，或值的任何部分，存储在一个变量中或通过函数返回</li><li>如果该值是由括号括起来的，除非这些括号是在一个列表（list）外部，并且值是括号内部</li><li>如果该值被用作另一个算术表达式的一部分</li></ol><p>例如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  font: 10px/8px;             // 原生的CSS，不作为除法
  $width: 1000px;
  width: $width/2;            // 使用了变量, 作为除法
  width: round(1.5)/2;        // 使用了函数, 作为除法
  height: (500px/2);          // 使用了括号, 作为除法
  margin-left: 5px + 8px/2px; // 使用了 +, 作为除法
  font: (italic bold 10px/8px); // 在一个列表（list）中，括号可以被忽略。
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后将得到：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  font: 10px/8px;
  width: 500px;
  height: 250px;
  margin-left: 9px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想让 <code>/</code> 和变量一起使用（即 <code>/</code> 不作为除法使用），你可以使用 <code>#{}</code> 插入他们。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后将得到：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  font: 12px/30px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="减法-负数-和" tabindex="-1"><a class="header-anchor" href="#减法-负数-和" aria-hidden="true">#</a> 减法，负数，和 <code>-</code></h4><p>在 CSS 和在 Sass 中，连字符 <code>-</code> 有许多不同的意义。它可以是一个减法运算符（比如在 <code>5px - 3px</code> 中），也可以表示一个负数（比如在 <code>-3px</code> 中），还可以是一个一元负运算符（比如在 <code>-$var</code> 中），或是标识符的一部分（比如在 <code>font-weight</code> 中）。大多数时候，我们可以很容易的分辨 <code>-</code> 到底代表什么，但也有一些棘手的情况。</p><p>遵循以下规则，可以让我们安全地使用连字符：</p><ul><li>减法的时候，总是在 <code>-</code> 两侧保留空格</li><li>当表示一个负数或一元负运算时候，在 <code>-</code> 前面包含一个空格，后面不加空格</li><li>如果在一个空格隔开的列表中，可以将一元负运算使用括号括起来，比如在 <code>10px (-$var)</code> 中</li></ul><p><code>-</code> 的不同含义的优先顺序如下：</p><ul><li><code>-</code> 作为标识符的一部分。这意味着 a-1 是一个不带引号的字符串，其值为 &quot;a-1&quot; 。唯一的例外是单位；Sass 通常允许任何有效的标识符被用作一个标识符，但标识符不可能以数字或连字符开始。这意味着，5px-3px 和 5px - 3px 是相同。</li><li><code>-</code> 在不带空格两个数字之间。这表明是减法，所以 <code>1-2</code> 和 <code>1 - 2</code> 是相同的。</li><li>字面数字以 <code>-</code> 开头。这表明是一个负数，所以 <code>1 -2</code> 是一个含有 <code>1</code> 和 <code>-2</code> 的列表。</li><li><code>-</code> 两个数字之间，不论是否带空格。这表明是减法，所以 <code>1 -$var</code> 和 <code>1 - $var</code> 是相同的。</li><li><code>-</code> 在值之前。这表明是一元负运算符；该操作需要一个数字，并返回其负值。</li></ul><h4 id="颜色运算-color-operations" tabindex="-1"><a class="header-anchor" href="#颜色运算-color-operations" aria-hidden="true">#</a> 颜色运算 (Color Operations)</h4><p>所有算术运算都支持的颜色值，颜色值的运算是分段进行计算的，也就是，依次计算红(red)，绿(green)，以及蓝(blue)的成分值。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: #010203 + #040506;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算 01 + 04 = 05, 02 + 05 = 07, 和 03 + 06 = 09，并且编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: #050709;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常，Sass 提供的颜色函数比尝试使用颜色运算更加有用，以达到同样的效果。</p><p>数字和颜色值之间的算术运算也是分段。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: #010203 * 2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算 01 * 2 = 02, 02 * 2 = 04, 和 03 * 2 = 06，并且编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: #020406;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，包含 alpha 通道（那些由 <code>rgba</code> 或 <code>hsla</code> 函数创建的）的颜色必须具有相同的 alpha 值，才能进行颜色运算。这样算术不会影响 alpha 值。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: rgba(255, 255, 0, 0.75);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>颜色的 alpha 通道可以使用 <code>opacify</code> 和 <code>transparentize</code> 函数进行调整。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$translucent-red: rgba(255, 0, 0, 0.5);
p {
  color: opacify($translucent-red, 0.3);
  background-color: transparentize($translucent-red, 0.25);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: rgba(255, 0, 0, 0.8);
  background-color: rgba(255, 0, 0, 0.25);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IE 浏览器的滤镜（filters）要求所有的颜色包括 alpha 层，而且格式必须是固定的 <code>#AABBCCDD</code>，使用 <code>ie_hex_str</code> 函数可以轻松的将颜色转化为 IE 滤镜所要求的格式。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$translucent-red: rgba(255, 0, 0, 0.5);
$green: #00ff00;
div {
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=&#39;false&#39;, startColorstr=&#39;#{ie-hex-str($green)}&#39;, endColorstr=&#39;#{ie-hex-str($translucent-red)}&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>div {
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=&#39;false&#39;, startColorstr=#FF00FF00, endColorstr=#80FF0000);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串运算-string-operations" tabindex="-1"><a class="header-anchor" href="#字符串运算-string-operations" aria-hidden="true">#</a> 字符串运算 (String Operations)</h4><p><code>+</code> 运算可用于连接字符串:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  cursor: e + -resize;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  cursor: e-resize;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，如果带引号的字符串被添加到不带引号的字符串中（也就是说，带引号的字符串在 <code>+</code> 的左侧），</p><p>那么返回的结果是带引号的字符串。同样，如果一个不带引号的字符串添加到带引号的字符串中（不带引号的字符串在 <code>+</code> 的左侧）那么返回的结果是一个不带引号的字符串。 例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p:before {
  content: &quot;Foo &quot; + Bar;
  font-family: sans- + &quot;serif&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p:before {
  content: &quot;Foo Bar&quot;;
  font-family: sans-serif;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，运算表达式与其他值连用时，用空格做连接符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  margin: 3px + 4px auto;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  margin: 7px auto;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在文本字符串中，<code>#{}</code> 式插值可以用来在字符串中放置动态值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p:before {
  content: &quot;I ate #{5 + 10} pies!&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p:before {
  content: &quot;I ate 15 pies!&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在字符串插值时，<code>Null</code> 值被视为空字符串：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$value: null;
p:before {
  content: &quot;I ate #{$value} pies!&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p:before {
  content: &quot;I ate  pies!&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="布尔运算-boolean-operations" tabindex="-1"><a class="header-anchor" href="#布尔运算-boolean-operations" aria-hidden="true">#</a> 布尔运算 (Boolean Operations)</h4><p>Sass 支持布尔值的 <code>and</code>, <code>or</code>, 和 <code>not</code> 运算。</p><h4 id="列表运算-list-operations" tabindex="-1"><a class="header-anchor" href="#列表运算-list-operations" aria-hidden="true">#</a> 列表运算 (List Operations)</h4><p>数组不支持任何特殊运算，只能使用 list 函数 控制。</p><h4 id="圆括号-parentheses" tabindex="-1"><a class="header-anchor" href="#圆括号-parentheses" aria-hidden="true">#</a> 圆括号 (Parentheses)</h4><p>圆括号可以用来影响运算的顺序(即优先级)：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  width: 1em + (2em * 3);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  width: 7em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数-functions" tabindex="-1"><a class="header-anchor" href="#函数-functions" aria-hidden="true">#</a> 函数 (Functions)</h3><p>Sass 定义了一些有用的函数， 这些函数可以像普通 CSS 函数语法一样调用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: hsl(0, 100%, 50%);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: #ff0000;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可用函数的完整列表，请参阅 Sass 官网网站。</p><h4 id="关键词参数-keyword-arguments" tabindex="-1"><a class="header-anchor" href="#关键词参数-keyword-arguments" aria-hidden="true">#</a> 关键词参数 (Keyword Arguments)</h4><p>Sass 函数允许指定明确的关键词参数进行调用。 上面的例子也可以改写成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: hsl($hue: 0, $saturation: 100%, $lightness: 50%);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然不够简明，但至少可以让 Sass 代码阅读起来更加方便。 关键词参数让函数具有更灵活的接口， 即便参数众多，也不会让使用变得困难。</p><p>命名参数（named arguments）可以以任意顺序传入，并且，具有默认值的参数可以省略掉。 由于命名参数也是变量名称，因此，下划线、短横线可以互换使用。</p><p>完整的 Sass 函数列表和它们的参数名称，以及在 Ruby 里如何定义你自己的函数的步骤，请参考 Sass 官网手册。</p><h3 id="插值" tabindex="-1"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值：<code>#{}</code></h3><p>您还可以通过 <code>#{}</code> 插值语法在选择器和属性名中使用 Sass 变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name: foo;
$attr: border;

p.#{$name} {
      #{$attr}-color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p.foo {
  border-color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它也可以使用 <code>#{}</code> 插值语句把 Sass 插入到属性值中。在大多数情况下，这种做可能还不如使用直接变量来的方便，但使用 <code>#{}</code> 意味着靠近它的运算符都将被视为纯 CSS（注：可以避免各种运算）。 例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后得到：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  font: 12px/30px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sass-中的-符号" tabindex="-1"><a class="header-anchor" href="#sass-中的-符号" aria-hidden="true">#</a> Sass 中的 <code>&amp;</code> 符号</h3><p>Sass 中的 <code>&amp;</code> 指向当前选择器的父选择器。下面是一个逗号分隔的列表中包含一个空格的分隔列表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.foo.bar .baz.bang, .bip.qux {
  $selector: &amp;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$selector</code> 的值是现在 <code>((&quot;.foo.bar&quot; &quot;.baz.bang&quot;), &quot;.bip.qux&quot;)</code>。这个混合选择器在这里加了引号，以表明他们是字符串，但在现实中，他们将不带引号的。即使选择器不包含逗号或空格，<code>&amp;</code> 总会有两个嵌套层次，因此它可以保证访问一致性。</p><p>如果没有父选择器，<code>&amp;</code> 的值将是空。这意味着你可以在一个 mixin 中使用它来检测父选择是否存在：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@mixin does-parent-exist {
  @if &amp; {
    &amp;:hover {
      color: red;
    }
  } @else {
    a {
      color: red;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量默认-default" tabindex="-1"><a class="header-anchor" href="#变量默认-default" aria-hidden="true">#</a> 变量默认: <code>!default</code></h3><p>如果分配给变量的值后面添加了<code>!default</code> 标志 ，这意味着该变量如果已经赋值，那么它不会被重新赋值，但是，如果它尚未赋值，那么它会被赋予新的给定值。</p><p>例如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$content: &quot;First content&quot;;
$content: &quot;Second content?&quot; !default;
$new_content: &quot;First time reference&quot; !default;

#main {
  content: $content;
  new-content: $new_content;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#main {
  content: &quot;First content&quot;;
  new-content: &quot;First time reference&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>!default</code> 赋值的时候，如果变量是 <code>null</code> 值时，将视为未赋值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$content: null;
$content: &quot;Non-null content&quot; !default;

#main {
  content: $content;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将被编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#main {
  content: &quot;Non-null content&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规则和指令" tabindex="-1"><a class="header-anchor" href="#规则和指令" aria-hidden="true">#</a> <code>@</code> 规则和指令</h3><p>Sass 支持所有 CSS3 的 <code>@</code> 规则，以及一些已知的其他特定的 Sass 指令。这些在 Sass 都有对应的效果。</p><h4 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> <code>@import</code></h4><p>Sass 扩展了 CSS <code>@import</code> 规则，允许其导入 SCSS 或 Sass 文件。被导入的全部SCSS 或 Sass文件将一起合并到同一个 CSS 文件中。此外，被导入文件中所定义的任何变量或混入（mixins）都可以在主文件（注：主文件值的是导入其他文件的文件，即，A 文件中导入了 B 文件，这里的主文件指的就是 A 文件）中使用。</p><p>Sass 会在当前目录和 Rack, Rails, Merb 目录下查找其他 Sass 文件。附加搜索目录可以使用 :load_paths 选项或命令行中的 --load-path 选项指定。</p><p>通常，@import 寻找 Sass 文件并将其导入，但在以下情况下，@import 仅作为普通的 CSS 语句，不会导入任何 Sass 文件。</p><p>@import 需要一个文件名来导入。默认情况下，它会寻找一个 Sass 文件直接导入，但在以下情况下，仅作为普通的 CSS @import 规则语句，不会导入任何 Sass 文件。</p><ul><li>如果文件的扩展名是 <code>.css</code></li><li>如果文件名以 <code>http://</code> 开始</li><li>如果文件名是 <code>url()</code></li><li>如果@import 中包含任何的媒体查询（media queries）</li><li>如果没有上述条件得到满足并且扩展名是 <code>.scss</code> 或 <code>.sass</code>，那么 Sass 或 SCSS 文件将被导入</li><li>如果没有指定扩展名，Sass 将尝试找到以 <code>.scss</code> 或 <code>.sass</code> 为扩展名的该名称文件并导入</li></ul><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import &quot;foo.scss&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import &quot;foo&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这两行代码都能导入文件foo.scss，而</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import &quot;foo.css&quot;;
@import &quot;foo&quot; screen;
@import &quot;http://foo.com/bar&quot;;
@import url(foo);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将全部编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import &quot;foo.css&quot;;
@import &quot;foo&quot; screen;
@import &quot;http://foo.com/bar&quot;;
@import url(foo);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sass 支持在一个 <code>@import</code> 规则中同时导入多个文件。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import &quot;rounded-corners&quot;, &quot;text-shadow&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将同时导入 <code>rounded-corners</code> 和 <code>text-shadow</code> 这两个文件。</p><p>导入规则中可能含有 <code>#{}</code> 插值，但存在一定的限制。不能通过变量动态导入Sass文件；<code>#{}</code> 插值仅适用于 CSS 导入规则。 因此，它仅适用于 <code>url()</code> 导入。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$family: unquote(&quot;Droid+Sans&quot;);
@import url(&quot;http://fonts.googleapis.com/css?family=#{$family}&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import url(&quot;http://fonts.googleapis.com/css?family=Droid+Sans&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="partials" tabindex="-1"><a class="header-anchor" href="#partials" aria-hidden="true">#</a> Partials</h4><p>如果你有一个 SCSS 或 SASS 文件要导入，但不希望将其编译到一个 CSS 文件，你可以在文件名的开头添加一个下划线。这将告诉 Sass 不要将其编译到一个正常的 CSS 文件。然后，在导入语句中却不需要添加下划线。</p><p>例如，你可能有一个命名为 <code>_colors.scss</code> 的文件，但是不会编译成 <code>_colors.css</code> 文件。你可以这么做</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import &quot;colors&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样， <code>_colors.scss</code> 将被导入。</p><blockquote><p>注意：请不要将带下划线与不带下划线的同名文件放置在同一个目录下，比如，<code>_colors.scss</code> 和 <code>colors.scss</code> 不能同时存在于同一个目录下，否则带下划线的文件将会被忽略。</p></blockquote><h4 id="嵌套-import" tabindex="-1"><a class="header-anchor" href="#嵌套-import" aria-hidden="true">#</a> 嵌套 @import</h4><p>虽然在大部分情况下，一般都是在文档的顶层（注：最外层，不在嵌套规则内）使用 @import，但是也可以在 CSS 规则和 @media 规则中包含 @import 语句。就像一个基层的 @import，这里会包含 @import 导入文件的内容。但是，这样导入的规则只能嵌套在原先防止 @import 的地方。</p><p>举个例子，如果 <code>example.scss</code> 包含：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.example {
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#main {
  @import &quot;example&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这等同于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#main {
  .example {
      color: red;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后，最终将得到：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#main .example {
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该指令只允许出现在文档顶层，像 <code>@mixin</code> 或者 <code>@charset</code> 在文件中，不允许被 <code>@import</code> 导入到一个嵌套上下文中。</p><p>不允许在混人 (mixin) 或控制指令 (control directives) 中嵌套 @import。</p><h3 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> @media</h3><p>Sass 中 @media 指令的行为和纯 CSS 中一样，只是增加了一点额外的功能：它们可以嵌套在CSS规则。如果一个 @media 指令出现在 CSS 规则中，它将被冒泡到样式表的顶层，并且包含规则内所有的选择器。这使得很容易地添加特定 @media 样式，而不需要重复使用选择器，或打乱样式表书写流。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.sidebar {
  width: 300px;
}
@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@media的查询（queries）也可以相互嵌套。这些查询（queries）在编译时，将会使用 and 操作符号结合。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media screen {
  .sidebar {
    @media (orientation: landscape) {
      width: 500px;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@media 甚至可以使用 Sass（比如变量，函数，以及运算符）代替条件的名称或者值：</p><p>最后，@media 查询（queries）可以包含 Sass 表达式（包括变量 variables，函数 functions 和操作符 operators）代替特征名称和特征值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;

@media #{$media} and ($feature: $value) {
  .sidebar {
    width: 500px;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
  .sidebar {
    width: 500px;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extend" tabindex="-1"><a class="header-anchor" href="#extend" aria-hidden="true">#</a> @extend</h3><p>设计一个页面时常常遇到这种情况：当一个样式类（class）含有另一个类的所有样式，并且它自己的特定样式。处理这种最常见的方法是在HTML同时使用一个通用样式类和特殊样式类。例如，假设我们设计需要一个普通错误的样式和一个严重错误的样式。我们可以类似这样写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;error seriousError&quot;&gt;
  Oh no! You&#39;ve been hacked!
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的样式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  border-width: 3px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不幸的是，这意味着，我们必须时刻记住使用 <code>.seriousError</code> 的时候需要搭配使用 <code>.error</code>。这对于维护来说是一个负担，甚至导致棘手的错误，并且导致无语意的样式。</p><p>@extend 指令避免这些问题，告诉 Sass 一个选择器的样式应该继承另一选择器。 例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd;
}

.seriousError {
  border-width: 3px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着 .error 所定义的所有样式也适用于 <code>.seriousError</code>，除了 <code>.seriousError</code> 的特定样式。相当于，每个带有 <code>.seriousError</code> 类的元素也带有 <code>.error</code> 类。</p><p>其他使用了 <code>.error</code> 规则也会同样继承给 <code>.seriousError</code>，例如，如果我们有特殊错误样式的 hack：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.error.intrusion {
  background-image: url(&quot;/image/hacked.png&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后 <code>&lt;div class=&quot;seriousError intrusion&quot;&gt;</code> 也同样会使用了 <strong>hacked.png</strong> 背景。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,185);function C(y,_){const n=l("ExternalLinkIcon");return r(),c("div",null,[o,u,v,p,e("p",null,[s("Sass 有两种语法格式：一种是 SCSS (Sassy CSS)，这种格式仅在 CSS3 语法的基础上进行扩展，这意味着每个 CSS 样式表是一个同等的 SCSS 文件，这种语法的样式表文件需要以 "),m,s(" 作为拓展名。另一种是 Sass，它提供了一种更加简介的方式来书写 CSS，它使用缩进而不是花括号来表示"),e("a",b,[s("选择器"),i(n)]),s("的嵌套，用换行而不是分号来分隔属性，使用此种语法的样式表文件需要以 "),x,s(" 作为扩展名。、")]),g,e("p",null,[s("在压缩输出模式，Sass 将输出 CSS 简短的颜色表示法。例如，在压缩模式下 "),h,s(" 将输出为 "),S,s("，但是 "),f,s(" 将输出为 "),k,s("（参考"),e("a",q,[s("颜色转换"),i(n)]),s("工具）。")]),$])}const F=d(t,[["render",C],["__file","sass入门常用.html.vue"]]);export{F as default};
