import{_ as l,r,o as d,c as a,a as e,b as n,d as t,e as s}from"./app-5611e3e7.js";const o={},u=s('<h1 id="【前端工程化】代码规范" tabindex="-1"><a class="header-anchor" href="#【前端工程化】代码规范" aria-hidden="true">#</a> 【前端工程化】代码规范</h1><h3 id="一-前言" tabindex="-1"><a class="header-anchor" href="#一-前言" aria-hidden="true">#</a> <strong>一. 前言</strong></h3><ol><li><strong>editorconfig</strong>统一编辑器配置</li><li><strong>prettier</strong>自动格式化代码</li><li><strong>eslint</strong>+<strong>lint-staged</strong>检测代码</li><li><strong>stylelint</strong>规范样式和保存自动修复</li><li>vetur插件： vue代码高亮显示插件</li><li>Vue VSCode Snippets：vue代码片段</li><li>koroFileHeader： 注释插件</li><li>better comments: 注释插件</li><li>code spell checker 单词校验插件</li></ol><h3 id="二-代码规范技术栈" tabindex="-1"><a class="header-anchor" href="#二-代码规范技术栈" aria-hidden="true">#</a> <strong>二. 代码规范技术栈</strong></h3><h3 id="_2-1-代码格式规范和语法检测" tabindex="-1"><a class="header-anchor" href="#_2-1-代码格式规范和语法检测" aria-hidden="true">#</a> 2.1 代码格式规范和语法检测</h3>',5),v={href:"https://link.juejin.cn/?target=http%3A%2F%2Fvscode.bianjiqi.net%2F",target:"_blank",rel:"noopener noreferrer"},c={href:"https://link.juejin.cn/?target=https%3A%2F%2Feditorconfig.org%2F",target:"_blank",rel:"noopener noreferrer"},m={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.prettier.cn%2F",target:"_blank",rel:"noopener noreferrer"},b={href:"https://link.juejin.cn/?target=https%3A%2F%2Feslint.bootcss.com%2F",target:"_blank",rel:"noopener noreferrer"},h={href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fokonet%2Flint-staged",target:"_blank",rel:"noopener noreferrer"},p=e("h3",{id:"_2-2-代码git提交检测及规范",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-2-代码git提交检测及规范","aria-hidden":"true"},"#"),n(" 2.2 代码git提交检测及规范")],-1),g={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftypicode%2Fhusky",target:"_blank",rel:"noopener noreferrer"},f={href:"https://link.juejin.cn?target=https%3A%2F%2Fgit-scm.com%2Fbook%2Fzh%2Fv2%2F%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"},_={href:"https://link.juejin.cn?target=https%3A%2F%2Fgit-scm.com%2Fbook%2Fzh%2Fv2%2F%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"},x={href:"https://link.juejin.cn?target=https%3A%2F%2Fgit-scm.com%2Fbook%2Fzh%2Fv2%2F%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"},F={href:"https://link.juejin.cn?target=https%3A%2F%2Fcommitlint.js.org%2F%23%2F",target:"_blank",rel:"noopener noreferrer"},j={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fcommitizen%2Fcz-cli",target:"_blank",rel:"noopener noreferrer"},k=s(`<h3 id="三-配置" tabindex="-1"><a class="header-anchor" href="#三-配置" aria-hidden="true">#</a> <strong>三. 配置</strong></h3><h4 id="eslint-js-配置" tabindex="-1"><a class="header-anchor" href="#eslint-js-配置" aria-hidden="true">#</a> eslint.js 配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [&#39;plugin:vue/essential&#39;, &#39;@vue/standard&#39;],
  parserOptions: {
    parser: &#39;babel-eslint&#39;,
  },
  rules: {
    &#39;no-console&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,
    &#39;no-debugger&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="prettierrc-配置" tabindex="-1"><a class="header-anchor" href="#prettierrc-配置" aria-hidden="true">#</a> .prettierrc 配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{  
  // 一行代码的最大字符数，默认是80
  printWidth: 140,
  // tab宽度为2空格
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: false,
  // 结尾是否添加分号, 默认true
  semi: false,
  // vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
  vueIndentScriptAndStyle: false,
  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // object对象中key值是否加引号 as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
  quoteProps: &#39;as-needed&#39;,
  // object对象里面的key和value值和括号间的空格
  bracketSpacing: true,
  // 行尾逗号,默认none,可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: &#39;none&#39;,
  // 在jsx文件中的引号需要单独设置 默认false
  jsxSingleQuote: false,
  // 箭头函数单个参数的情况是否省略括号，默认always是总是带括号
  // avoid 能省略括号的时候就省略 例如x =&gt; x
  // always 总是有括号
  arrowParens: &#39;always&#39;,
  insertPragma: false,
  requirePragma: false,
  proseWrap: &#39;never&#39;,
  htmlWhitespaceSensitivity: &#39;strict&#39;,
  // endOfLine: &quot;&lt;lf|crlf|cr|auto&gt;&quot; 行尾换行符,默认是lf
  endOfLine: &#39;auto&#39;,
  // range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件
  rangeStart: 0,
  rangeEnd: Infinity
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stylelintrc-js" tabindex="-1"><a class="header-anchor" href="#stylelintrc-js" aria-hidden="true">#</a> .stylelintrc.js</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  extends: [
    &#39;stylelint-config-standard&#39;,
    // 如果是vue项目，需要添加
    &#39;stylelint-config-recommended-vue&#39;,
  ],
  // rule覆盖（根据自己喜好来配置）
  rules: {
    &#39;string-quotes&#39;: &#39;single&#39;,
    &#39;property-no-vendor-prefix&#39;: null,
    &#39;declaration-colon-newline-after&#39;: null,
    &#39;value-list-comma-newline-after&#39;: null,
    &#39;custom-property-pattern&#39;: null,
    &#39;color-hex-length&#39;: &#39;short&#39;,
    &#39;color-function-notation&#39;: null,
    &#39;alpha-value-notation&#39;: null,
    &#39;value-no-vendor-prefix&#39;: null,
    &#39;selector-class-pattern&#39;: null,
    &#39;function-url-quotes&#39;: null,
    &#39;no-missing-end-of-source-newline&#39;: true,
    &#39;no-descending-specificity&#39;: null,
    &#39;font-family-no-missing-generic-family-keyword&#39;: null,
  },
  overrides: [
    // 若项目中存在scss文件，添加以下配置
    {
      files: &#39;**/*.scss&#39;,
      customSyntax: &#39;postcss-scss&#39;,
    },
    // 若项目中存在less文件，添加以下配置
    {
      files: &#39;**/*.less&#39;,
      customSyntax: &#39;postcss-less&#39;,
    },
  ]
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setting-json配置" tabindex="-1"><a class="header-anchor" href="#setting-json配置" aria-hidden="true">#</a> setting.json配置</h4><p>vscode设置代码setting.json示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  // 以像素为单位控制字号。
  &quot;editor.fontSize&quot;: 16,
  &quot;extensions.ignoreRecommendations&quot;: true,
  &quot;editor.tabSize&quot;: 2
  
  // 设置特定语言的默认格式化程序为prettier
  &quot;[html]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  // 指定 *.js 文件的格式化工具为vscode自带
  &quot;[javascript]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;vscode.typescript-language-features&quot;
  },
  
  // 默认使用prettier格式化支持的文件
  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  
  /*  prettier的配置 */
  &quot;prettier.printWidth&quot;: 160, // 超过最大值换行
  &quot;prettier.tabWidth&quot;: 2, // 缩进字节数
  &quot;prettier.useTabs&quot;: false, // 缩进不使用tab，使用空格
  &quot;prettier.semi&quot;: true, // 句尾添加分号
  &quot;prettier.singleQuote&quot;: true, // 使用单引号代替双引号
  &quot;prettier.proseWrap&quot;: &quot;preserve&quot;, // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  &quot;prettier.arrowParens&quot;: &quot;avoid&quot;, //  (x) =&gt; {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  &quot;prettier.bracketSpacing&quot;: true, // 在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot;
  &quot;prettier.endOfLine&quot;: &quot;auto&quot;, // 结尾是 \\n \\r \\n\\r auto
  &quot;prettier.htmlWhitespaceSensitivity&quot;: &quot;ignore&quot;,
  &quot;prettier.ignorePath&quot;: &quot;.prettierignore&quot;, // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  &quot;prettier.jsxBracketSameLine&quot;: false, // 在jsx中把&#39;&gt;&#39; 是否单独放一行
  &quot;prettier.jsxSingleQuote&quot;: false, // 在jsx中使用单引号代替双引号
  &quot;prettier.requireConfig&quot;: false, // Require a &#39;prettierconfig&#39; to format prettier
  &quot;prettier.trailingComma&quot;: &quot;es5&quot;, // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  &quot;javascript.format.insertSpaceBeforeFunctionParenthesis&quot;: true, //让函数(名)和后面的括号之间加个空格
&quot;editor.detectIndentation&quot;: false,

  // vue vetur 配置
  &quot;vetur.format.options.tabSize&quot;: 2,
  &quot;vetur.format.defaultFormatter.scss&quot;: &quot;prettier&quot;,
  &quot;vetur.format.defaultFormatter.stylus&quot;: &quot;stylus-supremacy&quot;,
  &quot;vetur.format.defaultFormatter.html&quot;: &quot;prettyhtml&quot;,//js-beautify-html
  &quot;vetur.format.defaultFormatter.js&quot;: &quot;vscode-typescript&quot;,//prettier-eslint
  &quot;vetur.format.defaultFormatter.js&quot;: &quot;prettier-eslint&quot;, 
  &quot;vetur.format.defaultFormatterOptions&quot;: {
    &quot;js-beautify-html&quot;: {
      &quot;wrap_attributes&quot;: &quot;aligned-multiple&quot;,
      &quot;wrap_line_length&quot;: 160
    },
    &quot;prettyhtml&quot;: {
      &quot;printWidth&quot;: 160,
      &quot;singleQuote&quot;: false,
      &quot;wrapAttributes&quot;: false,
      &quot;sortAttributes&quot;: false,
      &quot;tabWidth&quot;: 2
    },
    &quot;prettier&quot;: {
      &quot;semi&quot;: false, //不加分号
      &quot;singleQuote&quot;: true, //用单引号
      &quot;tabWidth&quot;: 2,
      &quot;printWidth&quot;: 160,
      &quot;bracketSpacing&quot;: true, // 数组属性：后跟一个空格
      //禁止随时添加逗号,这个很重要。找了好久
      &quot;trailingComma&quot;: &quot;none&quot;
    }
  },
  
  
  
   // 保存时自动格式化代码
  &quot;eslint.run&quot;: &quot;onSave&quot;,
  // 保存时自动修复
  &quot;editor.codeActionsOnSave&quot;: {      
    // For ESLint
    &quot;source.fixAll.eslint&quot;: true
  },
  &quot;editor.formatOnSave&quot;: true, // 保存时自动格式化 --vscode编辑器自带自动格式化会与设置的eslint
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="editorconfig配置" tabindex="-1"><a class="header-anchor" href="#editorconfig配置" aria-hidden="true">#</a> .editorconfig配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = tru
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vscode配置" tabindex="-1"><a class="header-anchor" href="#vscode配置" aria-hidden="true">#</a> vscode配置</h4><h5 id="项目根目录创建-vscode文件夹" tabindex="-1"><a class="header-anchor" href="#项目根目录创建-vscode文件夹" aria-hidden="true">#</a> 项目根目录创建.vscode文件夹</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir .vscode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="vscode安装stylelint插件" tabindex="-1"><a class="header-anchor" href="#vscode安装stylelint插件" aria-hidden="true">#</a> vscode安装stylelint插件</h5><blockquote><p>目的是为了让vscode可以读取stylelint配置，并对错误代码进行告警</p></blockquote><h5 id="vscode文件夹中创建extensions-json" tabindex="-1"><a class="header-anchor" href="#vscode文件夹中创建extensions-json" aria-hidden="true">#</a> .vscode文件夹中创建extensions.json</h5><blockquote><p>别人通过vscode打开你的项目，会自动提示是否安装stylelint插件，如果想安装，点击确定按钮就可~</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;recommendations&quot;: [
    &quot;stylelint.vscode-stylelint&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="vscode文件夹中创建settings-json" tabindex="-1"><a class="header-anchor" href="#vscode文件夹中创建settings-json" aria-hidden="true">#</a> .vscode文件夹中创建settings.json</h5><blockquote><p>代码保存时，自动对代码进行stylelint修复~ 如果需要校验vue，则需要在<strong>stylelint.validate</strong>数组中添加vue</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;editor.formatOnSave&quot;: false,
  &quot;editor.formatOnPaste&quot;: false,
  &quot;editor.codeActionsOnSave&quot;: {
    &quot;source.fixAll.stylelint&quot;: true
  },
  &quot;stylelint.validate&quot;: [
    &quot;css&quot;,
    &quot;postcss&quot;,
    &quot;less&quot;,
    &quot;scss&quot;,
    &quot;sass&quot;,
    &quot;vue&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h4>`,24),y={href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener noreferrer"};function A(E,S){const i=r("ExternalLinkIcon");return d(),a("div",null,[u,e("ol",null,[e("li",null,[e("a",v,[n("vscode"),t(i)]),n("：统一前端编辑器")]),e("li",null,[e("a",c,[n("editorconfig"),t(i)]),n(": 统一团队vscode编辑器默认配置。")]),e("li",null,[e("a",m,[n("prettier"),t(i)]),n(": 保存文件自动格式化代码。")]),e("li",null,[e("a",b,[n("eslint"),t(i)]),n(": 检测代码语法规范和错误。")]),e("li",null,[e("a",h,[n("stylelint"),t(i)]),n(": 检测样式语法规范和错误。")]),e("li",null,[e("a",q,[n("lint-staged"),t(i)]),n(": 只检测暂存区文件代码，优化eslint检测速度。")])]),p,e("ol",null,[e("li",null,[e("p",null,[e("a",g,[n("husky"),t(i)]),n(":可以监听"),e("a",f,[n("githooks"),t(i)]),n("执行，在对应hook执行阶段做一些处理的操作。")])]),e("li",null,[e("p",null,[e("a",_,[n("pre-commit"),t(i)]),n("：githooks之一， 在commit提交前使用tsc和eslint对语法进行检测。")])]),e("li",null,[e("p",null,[e("a",x,[n("commit-msg"),t(i)]),n("：githooks之一，在commit提交前对commit备注信息进行检测。")])]),e("li",null,[e("p",null,[e("a",F,[n("commitlint"),t(i)]),n("：在githooks的pre-commit阶段对commit备注信息进行检测。")])]),e("li",null,[e("p",null,[e("a",j,[n("commitizen"),t(i)]),n("：git的规范化提交工具，辅助填写commit信息。")])])]),k,e("p",null,[e("a",y,[n("eslint-plugin-vue"),t(i)])])])}const O=l(o,[["render",A],["__file","【前端工程化】代码规范.html.vue"]]);export{O as default};
