**工具介绍**

Sass 简介
-------

Sass 是一个 CSS 的扩展，它在 CSS 语法的基础上，允许您使用变量（variables）、嵌套规则（nested rules）、混合（mixins）、导入（inline imports）等功能，令 CSS 更加强大与优雅。使用 Sass 以及 Compass 样式库有助于更好地组织管理样式文件，以及更高效地开发项目。

Sass 的主要特点有：完全兼容 CSS3；在 CSS 语言的基础上增加变量、嵌套、混合等功能；通过函数进行颜色值与属性值的运算；提供控制指令等高级功能以及自定义输出格式等。

Sass 有两种语法格式：一种是 SCSS (Sassy CSS)，这种格式仅在 CSS3 语法的基础上进行扩展，这意味着每个 CSS 样式表是一个同等的 SCSS 文件，这种语法的样式表文件需要以 `.scss` 作为拓展名。另一种是 Sass，它提供了一种更加简介的方式来书写 CSS，它使用缩进而不是花括号来表示[选择器](http://tools.52cha.cc/css-selector.html "CSS 选择器参考")的嵌套，用换行而不是分号来分隔属性，使用此种语法的样式表文件需要以 `.sass` 作为扩展名。、

任何一种语法的文件可以直接 import 到另一种语法的文件中使用，只要使用 **sass-convert** 命令行工具，就可以将一种语法转换为另一种语法：

```
# Convert Sass to SCSS
$ sass-convert style.sass style.scss

# Convert SCSS to Sass
$ sass-convert style.scss style.ss
```

Sass 快速入门
---------
### @use
在 Sass 中，@use 是一个模块化导入机制，它允许你从其他 Sass 文件中导入和使用特定的功能，如变量、函数、混合宏（mixins）和类型。@use 的主要优点在于它提供了比传统 @import 更高级别的模块化和代码重用能力，同时减少了全局作用域的污染。
#### @use 的高级用法
* 命名空间用法

```sass

@use 'mixins/variables';
@use 'mixins/mixins';

.my-element {
  color: variables.$primary-color;
  @include mixins.box-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}
```
*  命名空间：使用 as 关键字为导入的模块指定一个命名空间，避免全局命名冲突。
```sass
@use 'variables' as vars;
@use 'mixins' as m;

.my-element {
  color: vars.$primary-color;
  @include m.box-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}
```

*  导入所有：使用 * 来导入模块中的所有导出项，但这样可能增加全局命名冲突的风险
```sass
@use 'variables' as *;
@use 'mixins' as *;

.my-element {
  color: $primary-color;
  @include box-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}
```
### map 用法
```sass
@use 'sass:map';
$text-color: () !default;
$text-color: map.merge(
  (
    'primary': #303133,
    'regular': #606266,
    'secondary': #909399,
    'placeholder': #a8abb2,
    'disabled': #c0c4cc,
  ),
  $text-color
);

.text{
  color:map.get($text-color, 'secondary')
}

```

### 变量：$

在 Sass 中，变量以美元符号 `$` 开始，赋值就像设置 CSS 属性那样：

```
$width: 5em;
```

你可以在属性中引用他们:

```
#main {
  width: $width;
}
```

变量仅在它定义的选择器嵌套层级的范围内可用（可以理解为块级作用域）；不在任何嵌套选择器内定义的变量则在可任何地方使用（可以理解为全局变量）。定义变量的时候可以后面带上 `!global` 标志，在这种情况下，变量在任何地方可见（可以理解为全局变量）。例如：

```
#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}
```

将编译为：

```
#main {
  width: 5em;
}

#sidebar {
  width: 5em;
}
```

> 注：由于历史原因，变量名（以及其他所有 Sass 标识符）可以互换连字符 `-` 和下划线 `_`。例如，如果你定义了一个名为 `$main-width`，您可以使用 `$main_width` 访问它，反之亦然。

### 数据类型（Data Types）

Sass 支持 7 种主要的数据类型：

1.  数字（例如：1.2, 13, 10px）
2.  文本字符串，带引号字符串和不带引号字符串(例如："foo", 'bar', baz）
3.  颜色，例如：blue, #04a3f9, rgba(255, 0, 0, 0.5)
4.  布尔值，例如：true, false）
5.  空值，例如：null）
6.  值列表（list），用空格或逗号分隔。例如：1.5em 1em 0 2em, Helvetica, Arial, sans-serif）
7.  maps，从一个值映射到另一个。例如：(key1: value1, key2: value2)

Sass 也支持其他所有类型的 CSS 属性值，比如 Unicode 字符集，或 `!important` 声明。然而，不会对这些类型的属性值做特殊处理，一律视为不带引号的字符串。

#### 字符串（Strings）

CSS 指定两种字符串类型：带引号的字符串（注：包括双引号和单引号），如 `"Lucida Grande"` 或者 `'http://sass-lang.com'`，还有不带引号的字符串，如 `sans-serif` 或者 `bold`。Sass 都能识别这两种类型，并且一般来说，在编译输出的 CSS 文件中不会改变 Sass 文档中使用的字符串类型。

有一个例外，当使用 `#{} interpolation` 时，带引号的字符串将被编译为不带引号的字符串，这样主要是为了便于使用，比如 mixins 中的选择器名称。例如：

```
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: "Hi, Firefox users!";
  }
}

@include firefox-message(".header");
```

编译为：

```
body.firefox .header:before {
  content: "Hi, Firefox users!";
}
```

#### 列表（Lists）

列表是指 Sass 如何表示在 CSS 声明的，类似 `margin: 10px 15px 0 0` 或 `font-face: Helvetica, Arial, sans-serif` 这样的值，列表只是一串其他值，无论是用空格还是用逗号隔开。事实上，独立的值也被视为列表：只包含一个值的列表。

列表本身没有太多的功能，但 Sass 列表函数赋予了数组更多新功能：

*   `nth` 函数可以直接访问数组中的某一项；
*   `join` 函数可以将多个数组连接在一起；
*   `append` 函数可以在数组中添加新值；
*   `@each` 指令能够遍历数组中的每一项。

除了包含简单的值，列表还可包含其他列表。例如，`1px 2px, 5px 6px` 包含 `1px 2px` 列表和 `5px 6px` 列表两个项。如果内外两层列表使用相同的分隔符号，你需要使用括号将内层列表括起来，以明确内层类别的开始和结束位置。

例如，`(1px 2px) (5px 6px)` 同样是包含 `1px 2px` 列表和 `5px 6px` 列表两个项的列表。不同的是，该列表层外用空格分隔，之前列表外层是用逗号分隔。

当列表被编译为 CSS 时，Sass 不会添加任何圆括号，因为 CSS 不能识别他们。这意味着，`(1px 2px) (5px 6px)` 和 `1px 2px 5px 6px` 在编译后的 CSS 文件中看起来是完全一样的。然而，它们在 Sass 中却是不同的：第一个是含两个列表的列表，而第二个是含有四个成员的列表。

用括号 `()` 表示不包含任何值的空数组（在 Sass 3.3 版之后也视为空的 map）。空数组不可以直接编译成 CSS，比如编译 `font-family: ()`，Sass 将会报错。如果数组中包含空数组或空值，编译时将被清除，比如 `1px 2px () 3px` 或 `1px 2px null 3px`。

列表也可以没有任何项。这些列表可以用 `()` 表示（也是一个空的 map）。

逗号分隔的列表可以保留结尾的逗号。这是特别有用，因为它可以表示一个单个元素的列表。

例如，`(1,)` 表示为只包含 1 的列表，而 `(1 2 3,)` 这个表示包含一个列表，这个列表又包含以空格分隔的 1, 2, 和 3 的列表。

#### Maps

Maps 代表一个键和值对集合，其中键用于查找值。他们可以很容易地将值收集到命名组中，并且可以动态地访问这些组。在CSS中你找不到和他们类似的值，虽然他们的语法类似于媒体查询表达式：

`$map: (key1: value1, key2: value2, key3: value3);`

和列表不同，**Maps 必须始终使用括号括起来，并且必须用逗号分隔**。Maps 中的键和值可以是任意的 Sass 对象。一个 Maps 可能只有一个值与给定的键关联（尽管该值可以是一个列表）。一个给定的值可能与许多键关联。

和列表类似，Maps 的主要操作使用的是 Sass 函数。

*   `map-get` 函数用于查找 map 中的值，
*   `map-merge` 函数用于添加值到 map 中的值，
*   `@each` 指令可以用来为 map 中的每个键值对添加样式。

map 中键值对的顺序和 map 创建时始终相同。

Maps 还可以用于任何列表能做的事情。当用于一个列表函数时，map 被视为键值对列表。例如，`(key1: value1, key2: value2)` 被用于列表函数时，将被视为嵌套列表 `key1 value1, key2 value2`。列表不能被视为 maps，不过，空列表除外。`()` 表示一个键/值对都没有的 map，也可以被视为一个没有元素的列表。

需要注意的是 map 的键（keys）可以是任何 Sass 数据类型（甚至是另一个map），并且声明 map 的语法允许是任意的 Sass 表达式，这个表达式将被评估为一个值以确定键（keys）。

Maps 不能转换为纯 CSS。作为变量的值或参数传递给 CSS 函数将会导致错误。使用 `inspect($value)` 函数以产生输出字符串，这对于调试 maps 非常有用。

#### 颜色（Colors）

任何 CSS 颜色表达式返回 Sass 颜色值。这其中包括了大量的命名的颜色，这些名字字符串不区别带不带引号。

在压缩输出模式，Sass 将输出 CSS 简短的颜色表示法。例如，在压缩模式下 `#FF0000` 将输出为 `red`，但是 `blanchedalmond` 将输出为 `#FFEBCD`（参考[颜色转换](http://tools.52cha.cc/color-converter.html "颜色转换工具")工具）。

一个用户遇到的常见问题是在其它输出模式中 Sass 喜欢输出与命名的颜色相同的格式，当压缩的时候，插值到选择器的颜色变得无效语法。为了避免这种情况，如果他们是为了在选择施工中使用，总是给命名的颜色。

### 运算 (Operations)

所有数据类型的支持相等运算 `==` 和 `!=`。此外，每种类型都有其自己特殊的运算方式。

#### 数字运算 (Number Operations)

Sass 支持对数字标准的算术运算（加法 `+`，减法 `-` ，乘法 `*`，除法 `/` 和取模 `%`）。Sass 数学函数在算术运算期间会保留单位。这意味着，就像在现实生活中，你不能用不相同的单位数字进行算术运算（比如数字后面添加了 `px` 和 `em` 单位）；另外，两个单位相同的数字相乘将产生单位平方，如：`10px * 10px == 100px * px`)。要知道，px \* px 是无效的 CSS 单位，此时，Sass 会抛出一个错误，因为你试图在 CSS 中使用无效的单位。

数字支持关系运算符 `<`, `>`, `<=`, `>=`)，并且所有类型支持相等运算符 `==` 和 `!=`。

#### 除法和 `/` 

CSS 允许 `/` 出现在属性值之间作为分隔数字的方式，例如 font 属性，`p.ex2 { font:italic bold 12px/20px arial,sans-serif;}`。由于 Sass 是 CSS 属性语法的扩展，所以它必须支持这一点，同时还允许 `/` 用于除法。这意味着，在默认情况下，在 Sass 中如果两个数字由 `/` 分隔，在返回的CSS中将以同样的方式出现。

但是，有三种情况会将 `/` 解析为除法，这涵盖了绝大多数当做除法的案例：

1.  如果该值，或值的任何部分，存储在一个变量中或通过函数返回
2.  如果该值是由括号括起来的，除非这些括号是在一个列表（list）外部，并且值是括号内部
3.  如果该值被用作另一个算术表达式的一部分

例如:

```
p {
  font: 10px/8px;             // 原生的CSS，不作为除法
  $width: 1000px;
  width: $width/2;            // 使用了变量, 作为除法
  width: round(1.5)/2;        // 使用了函数, 作为除法
  height: (500px/2);          // 使用了括号, 作为除法
  margin-left: 5px + 8px/2px; // 使用了 +, 作为除法
  font: (italic bold 10px/8px); // 在一个列表（list）中，括号可以被忽略。
}
```

编译后将得到：

```
p {
  font: 10px/8px;
  width: 500px;
  height: 250px;
  margin-left: 9px;
}
```

如果你想让 `/` 和变量一起使用（即 `/` 不作为除法使用），你可以使用 `#{}` 插入他们。例如：

```
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

编译后将得到：

```
p {
  font: 12px/30px;
}
```

#### 减法，负数，和 `-`

在 CSS 和在 Sass 中，连字符 `-` 有许多不同的意义。它可以是一个减法运算符（比如在 `5px - 3px` 中），也可以表示一个负数（比如在 `-3px` 中），还可以是一个一元负运算符（比如在 `-$var` 中），或是标识符的一部分（比如在 `font-weight` 中）。大多数时候，我们可以很容易的分辨 `-` 到底代表什么，但也有一些棘手的情况。

遵循以下规则，可以让我们安全地使用连字符：

*   减法的时候，总是在 `-` 两侧保留空格
*   当表示一个负数或一元负运算时候，在 `-` 前面包含一个空格，后面不加空格
*   如果在一个空格隔开的列表中，可以将一元负运算使用括号括起来，比如在 `10px (-$var)` 中

`-` 的不同含义的优先顺序如下：

*   `-` 作为标识符的一部分。这意味着 a-1 是一个不带引号的字符串，其值为 "a-1" 。唯一的例外是单位；Sass 通常允许任何有效的标识符被用作一个标识符，但标识符不可能以数字或连字符开始。这意味着，5px-3px 和 5px - 3px 是相同。
*   `-` 在不带空格两个数字之间。这表明是减法，所以 `1-2` 和 `1 - 2` 是相同的。
*   字面数字以 `-` 开头。这表明是一个负数，所以 `1 -2` 是一个含有 `1` 和 `-2` 的列表。
*   `-` 两个数字之间，不论是否带空格。这表明是减法，所以 `1 -$var` 和 `1 - $var` 是相同的。
*   `-` 在值之前。这表明是一元负运算符；该操作需要一个数字，并返回其负值。

#### 颜色运算 (Color Operations)

所有算术运算都支持的颜色值，颜色值的运算是分段进行计算的，也就是，依次计算红(red)，绿(green)，以及蓝(blue)的成分值。例如：

```
p {
  color: #010203 + #040506;
}
```

计算 01 + 04 = 05, 02 + 05 = 07, 和 03 + 06 = 09，并且编译为：

```
p {
  color: #050709;
}
```

通常，Sass 提供的颜色函数比尝试使用颜色运算更加有用，以达到同样的效果。

数字和颜色值之间的算术运算也是分段。例如：

```
p {
  color: #010203 * 2;
}
```

计算 01 \* 2 = 02, 02 \* 2 = 04, 和 03 \* 2 = 06，并且编译为：

```
p {
  color: #020406;
}
```

需要注意的是，包含 alpha 通道（那些由 `rgba` 或 `hsla` 函数创建的）的颜色必须具有相同的 alpha 值，才能进行颜色运算。这样算术不会影响 alpha 值。例如：

```
p {
  color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);
}
```

将被编译为：

```
p {
  color: rgba(255, 255, 0, 0.75);
}
```

颜色的 alpha 通道可以使用 `opacify` 和 `transparentize` 函数进行调整。例如：

```
$translucent-red: rgba(255, 0, 0, 0.5);
p {
  color: opacify($translucent-red, 0.3);
  background-color: transparentize($translucent-red, 0.25);
}
```

将被编译为：

```
p {
  color: rgba(255, 0, 0, 0.8);
  background-color: rgba(255, 0, 0, 0.25);
}
```

IE 浏览器的滤镜（filters）要求所有的颜色包括 alpha 层，而且格式必须是固定的 `#AABBCCDD`，使用 `ie_hex_str` 函数可以轻松的将颜色转化为 IE 滤镜所要求的格式。例如：

```
$translucent-red: rgba(255, 0, 0, 0.5);
$green: #00ff00;
div {
  filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr='#{ie-hex-str($green)}', endColorstr='#{ie-hex-str($translucent-red)}');
}
```

将被编译为：

```
div {
  filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr=#FF00FF00, endColorstr=#80FF0000);
}
```

#### 字符串运算 (String Operations)

`+` 运算可用于连接字符串:

```
p {
  cursor: e + -resize;
}
```

将被编译为：

```
p {
  cursor: e-resize;
}
```

请注意，如果带引号的字符串被添加到不带引号的字符串中（也就是说，带引号的字符串在 `+` 的左侧），

那么返回的结果是带引号的字符串。同样，如果一个不带引号的字符串添加到带引号的字符串中（不带引号的字符串在 `+` 的左侧）那么返回的结果是一个不带引号的字符串。 例如：

```
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}
```

将被编译为：

```
p:before {
  content: "Foo Bar";
  font-family: sans-serif;
}
```

默认情况下，运算表达式与其他值连用时，用空格做连接符：

```
p {
  margin: 3px + 4px auto;
}
```

将被编译为：

```
p {
  margin: 7px auto;
}
```

在文本字符串中，`#{}` 式插值可以用来在字符串中放置动态值：

```
p:before {
  content: "I ate #{5 + 10} pies!";
}
```

将被编译为：

```
p:before {
  content: "I ate 15 pies!";
}
```

在字符串插值时，`Null` 值被视为空字符串：

```
$value: null;
p:before {
  content: "I ate #{$value} pies!";
}
```

将被编译为：

```
p:before {
  content: "I ate  pies!";
}
```

#### 布尔运算 (Boolean Operations)

Sass 支持布尔值的 `and`, `or`, 和 `not` 运算。

#### 列表运算 (List Operations)

数组不支持任何特殊运算，只能使用 list 函数 控制。

#### 圆括号 (Parentheses)

圆括号可以用来影响运算的顺序(即优先级)：

```
p {
  width: 1em + (2em * 3);
}
```

将被编译为：

```
p {
  width: 7em;
}
```

### 函数 (Functions)

Sass 定义了一些有用的函数， 这些函数可以像普通 CSS 函数语法一样调用：

```
p {
  color: hsl(0, 100%, 50%);
}
```

编译为：

```
p {
  color: #ff0000;
}
```

可用函数的完整列表，请参阅 Sass 官网网站。

#### 关键词参数 (Keyword Arguments)

Sass 函数允许指定明确的关键词参数进行调用。 上面的例子也可以改写成：

```
p {
  color: hsl($hue: 0, $saturation: 100%, $lightness: 50%);
}
```

虽然不够简明，但至少可以让 Sass 代码阅读起来更加方便。 关键词参数让函数具有更灵活的接口， 即便参数众多，也不会让使用变得困难。

命名参数（named arguments）可以以任意顺序传入，并且，具有默认值的参数可以省略掉。 由于命名参数也是变量名称，因此，下划线、短横线可以互换使用。

完整的 Sass 函数列表和它们的参数名称，以及在 Ruby 里如何定义你自己的函数的步骤，请参考 Sass 官网手册。

### 插值：`#{}`

您还可以通过 `#{}` 插值语法在选择器和属性名中使用 Sass 变量：

```
$name: foo;
$attr: border;

p.#{$name} {
      #{$attr}-color: blue;
}
```

将被编译为：

```
p.foo {
  border-color: blue;
}
```

它也可以使用 `#{}` 插值语句把 Sass 插入到属性值中。在大多数情况下，这种做可能还不如使用直接变量来的方便，但使用 `#{}` 意味着靠近它的运算符都将被视为纯 CSS（注：可以避免各种运算）。 例如：

```
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

编译后得到：

```
p {
  font: 12px/30px;
}
```

### Sass 中的 `&` 符号

Sass 中的 `&` 指向当前选择器的父选择器。下面是一个逗号分隔的列表中包含一个空格的分隔列表：

```
.foo.bar .baz.bang, .bip.qux {
  $selector: &;
}
```

`$selector` 的值是现在 `((".foo.bar" ".baz.bang"), ".bip.qux")`。这个混合选择器在这里加了引号，以表明他们是字符串，但在现实中，他们将不带引号的。即使选择器不包含逗号或空格，`&` 总会有两个嵌套层次，因此它可以保证访问一致性。

如果没有父选择器，`&` 的值将是空。这意味着你可以在一个 mixin 中使用它来检测父选择是否存在：

```
@mixin does-parent-exist {
  @if & {
    &:hover {
      color: red;
    }
  } @else {
    a {
      color: red;
    }
  }
}
```

### 变量默认: `!default`

如果分配给变量的值后面添加了`!default` 标志 ，这意味着该变量如果已经赋值，那么它不会被重新赋值，但是，如果它尚未赋值，那么它会被赋予新的给定值。

例如:

```
$content: "First content";
$content: "Second content?" !default;
$new_content: "First time reference" !default;

#main {
  content: $content;
  new-content: $new_content;
}
```

将被编译为：

```
#main {
  content: "First content";
  new-content: "First time reference";
}
```

通过 `!default` 赋值的时候，如果变量是 `null` 值时，将视为未赋值：

```
$content: null;
$content: "Non-null content" !default;

#main {
  content: $content;
}
```

将被编译为：

```
#main {
  content: "Non-null content";
}
```

### `@` 规则和指令

Sass 支持所有 CSS3 的 `@` 规则，以及一些已知的其他特定的 Sass 指令。这些在 Sass 都有对应的效果。

#### `@import`

Sass 扩展了 CSS `@import` 规则，允许其导入 SCSS 或 Sass 文件。被导入的全部SCSS 或 Sass文件将一起合并到同一个 CSS 文件中。此外，被导入文件中所定义的任何变量或混入（mixins）都可以在主文件（注：主文件值的是导入其他文件的文件，即，A 文件中导入了 B 文件，这里的主文件指的就是 A 文件）中使用。

Sass 会在当前目录和 Rack, Rails, Merb 目录下查找其他 Sass 文件。附加搜索目录可以使用 :load\_paths 选项或命令行中的 --load-path 选项指定。

通常，@import 寻找 Sass 文件并将其导入，但在以下情况下，@import 仅作为普通的 CSS 语句，不会导入任何 Sass 文件。

@import 需要一个文件名来导入。默认情况下，它会寻找一个 Sass 文件直接导入，但在以下情况下，仅作为普通的 CSS @import 规则语句，不会导入任何 Sass 文件。

*   如果文件的扩展名是 `.css`
*   如果文件名以 `http://` 开始
*   如果文件名是 `url()`
*   如果@import 中包含任何的媒体查询（media queries）
*   如果没有上述条件得到满足并且扩展名是 `.scss` 或 `.sass`，那么 Sass 或 SCSS 文件将被导入
*   如果没有指定扩展名，Sass 将尝试找到以 `.scss` 或 `.sass` 为扩展名的该名称文件并导入

例如：

```
@import "foo.scss";
```

或

```
@import "foo";
```

这两行代码都能导入文件foo.scss，而

```
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
```

将全部编译为：

```
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
```

Sass 支持在一个 `@import` 规则中同时导入多个文件。例如：

```
@import "rounded-corners", "text-shadow";
```

将同时导入 `rounded-corners` 和 `text-shadow` 这两个文件。

导入规则中可能含有 `#{}` 插值，但存在一定的限制。不能通过变量动态导入Sass文件；`#{}` 插值仅适用于 CSS 导入规则。 因此，它仅适用于 `url()` 导入。

例如：

```
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");
```

将编译为：

```
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```

#### Partials

如果你有一个 SCSS 或 SASS 文件要导入，但不希望将其编译到一个 CSS 文件，你可以在文件名的开头添加一个下划线。这将告诉 Sass 不要将其编译到一个正常的 CSS 文件。然后，在导入语句中却不需要添加下划线。

例如，你可能有一个命名为 `_colors.scss` 的文件，但是不会编译成 `_colors.css` 文件。你可以这么做

```
@import "colors";
```

这样， `_colors.scss` 将被导入。

> 注意：请不要将带下划线与不带下划线的同名文件放置在同一个目录下，比如，`_colors.scss` 和 `colors.scss` 不能同时存在于同一个目录下，否则带下划线的文件将会被忽略。

#### 嵌套 @import

虽然在大部分情况下，一般都是在文档的顶层（注：最外层，不在嵌套规则内）使用 @import，但是也可以在 CSS 规则和 @media 规则中包含 @import 语句。就像一个基层的 @import，这里会包含 @import 导入文件的内容。但是，这样导入的规则只能嵌套在原先防止 @import 的地方。

举个例子，如果 `example.scss` 包含：

```
.example {
  color: red;
}
```

然后：

```
#main {
  @import "example";
}
```

这等同于：

```
#main {
  .example {
      color: red;
    }
}
```

编译后，最终将得到：

```
#main .example {
  color: red;
}
```

该指令只允许出现在文档顶层，像 `@mixin` 或者 `@charset` 在文件中，不允许被 `@import` 导入到一个嵌套上下文中。

不允许在混人 (mixin) 或控制指令 (control directives) 中嵌套 @import。

### @media

Sass 中 @media 指令的行为和纯 CSS 中一样，只是增加了一点额外的功能：它们可以嵌套在CSS规则。如果一个 @media 指令出现在 CSS 规则中，它将被冒泡到样式表的顶层，并且包含规则内所有的选择器。这使得很容易地添加特定 @media 样式，而不需要重复使用选择器，或打乱样式表书写流。例如：

```
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
```

编译为：

```
.sidebar {
  width: 300px;
}
@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px;
  }
}
```

@media的查询（queries）也可以相互嵌套。这些查询（queries）在编译时，将会使用 and 操作符号结合。例如：

```
@media screen {
  .sidebar {
    @media (orientation: landscape) {
      width: 500px;
    }
  }
}
```

编译为：

```
@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px;
  }
}
```

@media 甚至可以使用 Sass（比如变量，函数，以及运算符）代替条件的名称或者值：

最后，@media 查询（queries）可以包含 Sass 表达式（包括变量 variables，函数 functions 和操作符 operators）代替特征名称和特征值。

```
$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;

@media #{$media} and ($feature: $value) {
  .sidebar {
    width: 500px;
  }
}
```

编译为：

```
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
  .sidebar {
    width: 500px;
  }
}
```

### @extend

设计一个页面时常常遇到这种情况：当一个样式类（class）含有另一个类的所有样式，并且它自己的特定样式。处理这种最常见的方法是在HTML同时使用一个通用样式类和特殊样式类。例如，假设我们设计需要一个普通错误的样式和一个严重错误的样式。我们可以类似这样写：

```
<div class="error seriousError">
  Oh no! You've been hacked!
</div>
```

我们的样式如下：

```
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  border-width: 3px;
}
```

不幸的是，这意味着，我们必须时刻记住使用 `.seriousError` 的时候需要搭配使用 `.error`。这对于维护来说是一个负担，甚至导致棘手的错误，并且导致无语意的样式。

@extend 指令避免这些问题，告诉 Sass 一个选择器的样式应该继承另一选择器。 例如：

```
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

编译为：

```
.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd;
}

.seriousError {
  border-width: 3px;
}
```

这意味着 .error 所定义的所有样式也适用于 `.seriousError`，除了 `.seriousError` 的特定样式。相当于，每个带有 `.seriousError` 类的元素也带有 `.error` 类。

其他使用了 `.error` 规则也会同样继承给 `.seriousError`，例如，如果我们有特殊错误样式的 hack：

```
.error.intrusion {
  background-image: url("/image/hacked.png");
}
```

然后 `<div class="seriousError intrusion">` 也同样会使用了 **hacked.png** 背景。


```

```