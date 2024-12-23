import{_ as i,o as e,c as n,f as l,d as s}from"./app-b1c81757.js";const r={},a=s(`<h1 id="vscode-eslint配置" tabindex="-1"><a class="header-anchor" href="#vscode-eslint配置" aria-hidden="true">#</a> VSCode ESLint配置</h1><blockquote><ol><li>步骤一：</li></ol></blockquote><h3 id="一、配置文件格式" tabindex="-1"><a class="header-anchor" href="#一、配置文件格式" aria-hidden="true">#</a> 一、配置文件格式</h3><p>ESLint支持多种格式的配置文件：</p><ul><li>JavaScript-使用.eslintrc.js和导出包含您的配置的对象。</li><li>JavaScript的（ESM） -使用.eslintrc.cjsJavaScript中运行包时ESLint指定&quot;type&quot;:&quot;module&quot;他们package.json。 请注意，ESLint目前不支持ESM配置。</li><li>YAML-使用.eslintrc.yaml或.eslintrc.yml定义配置结构。</li><li>JSON -使用.eslintrc.json定义配置结构。ESLint的JSON文件还允许使用JavaScript样式的注释。</li><li>不推荐使用-use.eslintrc，可以是JSON或YAML。</li><li>package.json-eslintConfig在package.json文件中创建一个属性，然后在其中定义配置</li></ul><p><strong>如果同一目录中有多个配置文件，则ESLint将仅使用一个。优先顺序为</strong> .eslintrc.js .eslintrc.cjs .eslintrc.yaml .eslintrc.yml .eslintrc.json .eslintrc package.json</p><h3 id="二、-配置项" tabindex="-1"><a class="header-anchor" href="#二、-配置项" aria-hidden="true">#</a> 二、 配置项</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
        env: {
                // 环境
                browser: true,
                es2021: true,
        },
        extends: [
                // 拓展
                &#39;eslint:recommended&#39;,
                &#39;plugin:@typescript-eslint/recommended&#39;,
        ],
        parser: &#39;@typescript-eslint/parser&#39;, // 解析器，本解析器支持Ts
        parserOptions: {
                // 解析器配置选项
                ecmaVersion: 12, // 指定es版本
                sourceType: &#39;module&#39;, // 代码支持es6，使用module
        },
        plugins: [
                // 插件
                &#39;@typescript-eslint&#39;,
        ],
        rules: {
                // 规则
        },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>parser - 解析器</li><li>parserOptions - 解析器选项</li><li>env 和 globals - 环境和全局变量</li><li>rules - 规则 <ul><li>off或0，关闭规则</li><li>warn或1，开启规则</li><li>error或2，开启规则，并会出错阻止代码运行</li></ul></li><li>plugins - 插件</li><li>extends - 拓展</li></ul><h3 id="三、配置优先级" tabindex="-1"><a class="header-anchor" href="#三、配置优先级" aria-hidden="true">#</a> 三、配置优先级</h3><p><strong>规则是使用离要检测的文件最近的 .eslintrc文件作为最高优先级。</strong></p><ol><li>行内配置</li><li>命令行选项</li><li>项目级配置</li><li>IDE环境配置</li></ol>`,12);function d(t,c){return e(),n("div",null,[l(`
 * @Author: yuzhoufen
 * @Date: 2019-12-31 11:14:50
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-05 12:16:20
 * @Description: Do not edit
 * @FilePath: \\my-apph:\\gitHub\\days_blog\\vscode配置\\VSCode添加ESLint代码风格检查.md
`),a])}const u=i(r,[["render",d],["__file","VSCode添加ESLint代码风格检查.html.vue"]]);export{u as default};
