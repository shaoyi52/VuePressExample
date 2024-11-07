import{_ as i,o as n,c as e,e as l}from"./app-f6c64bb5.js";const d={},s=l(`<h1 id="css-三栏布局" tabindex="-1"><a class="header-anchor" href="#css-三栏布局" aria-hidden="true">#</a> CSS 三栏布局</h1><blockquote><p>create by <strong>yuzhoufen</strong> on <strong>2019-09-19 15:45</strong></p></blockquote><ul><li>html Demo</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
    &lt;!-- 优先渲染 --&gt;
    &lt;div class=&quot;center&quot;&gt;
    center
    &lt;/div&gt;
    &lt;div class=&quot;left&quot;&gt;
    left
    &lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;
    right
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>flex 三栏布局</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.container {
    display: flex;
    height: 200px;
}
.center {
    background-color: red;
    width: 100%;
    order: 2;
}
.left {
    background-color: green;
    width: 200px;
    flex-shrink: 0;
    order: 1;
}
.right {
    background-color: blue;
    width: 200px;
    flex-shrink: 0;
    order: 3;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>table-cell三栏布局</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.container {
    overflow: hidden;
    position: relative;
}
.container &gt; div {
    display: table-cell;
    height: 100%;
}
.center {
    margin: 0 200px;
    width: 100%;
    background: red;
}
.left {
    width: 200px;
    min-width: 200px;
    background-color: green;
}
.right {
    width: 200px;
    min-width: 200px;
    background-color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>grid网格布局</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> .container {
    display: grid;
    width: 100%;
    grid-template-rows: 100px;
    grid-template-columns: 200px auto 200px;
}
.center {
    background: red;
}
.left {
    background-color: green;
}
.right {
    background-color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),v=[s];function r(a,c){return n(),e("div",null,v)}const u=i(d,[["render",r],["__file","三栏布局.html.vue"]]);export{u as default};
