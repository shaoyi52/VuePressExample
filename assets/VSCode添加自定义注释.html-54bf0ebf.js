import{_ as s}from"./snippets-a04463a2.js";import{_ as n,o as a,c as t,d as e}from"./app-ba9ea368.js";const o={},i=e(`<h1 id="vscode-添加自定义注释" tabindex="-1"><a class="header-anchor" href="#vscode-添加自定义注释" aria-hidden="true">#</a> VSCode 添加自定义注释</h1><p>代码片段配置项：https://blog.csdn.net/maokelong95/article/details/54379046/</p><blockquote><ol><li>步骤一：</li></ol></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ctrl + shift + p，配置用户代码片段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+s+`" alt="snipptest" title="snipptest"></p><blockquote><ol start="2"><li>步骤二：</li></ol></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>点击javascript.json配置javascript\`
![scriptJson](img/scriptJson.png &quot;scriptJson&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol start="3"><li>自定义自己喜欢的快捷键</li></ol></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Print to js class&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhushicc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;/*&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot; *@Description: $0&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot; *@ClassAuthor: Happy Ma&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot; *@Date: \${CURRENT_YEAR}-\${CURRENT_MONTH}-\${CURRENT_DATE} \${CURRENT_HOUR}:\${CURRENT_MINUTE}:\${CURRENT_SECOND}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;*/&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Print to js method&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhushimm&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;/*&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot; *@Description: $0&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot; *@MethodAuthor:  Happy Ma&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot; *@Date: \${CURRENT_YEAR}-\${CURRENT_MONTH}-\${CURRENT_DATE} \${CURRENT_HOUR}:\${CURRENT_MINUTE}:\${CURRENT_SECOND}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;*/&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[i];function l(c,u){return a(),t("div",null,p)}const v=n(o,[["render",l],["__file","VSCode添加自定义注释.html.vue"]]);export{v as default};
