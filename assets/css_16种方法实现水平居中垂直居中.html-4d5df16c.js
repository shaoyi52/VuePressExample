import{_ as a,r as e,o as i,c as l,a as n,b as t,d as c,e as p}from"./app-86c50f4f.js";const o={},d=p(`<h1 id="_16-种方法实现水平居中垂直居中" tabindex="-1"><a class="header-anchor" href="#_16-种方法实现水平居中垂直居中" aria-hidden="true">#</a> 16 种方法实现水平居中垂直居中</h1><ul><li>水平居中 <ol><li>text-align:center;</li><li>margin:0 auto;</li><li>width:fit-content;</li><li>flex</li><li>盒模型</li><li>transform</li><li>绝对居中</li></ol></li><li>垂直居中 <ol><li>单行文本</li><li>行内块级元素, 使用 display: inline-block,vertical-align: middle; 加上伪元素辅助实现</li><li>vertical-align</li><li>flex</li><li>盒模型</li><li>transform</li><li>两种不同的绝对定位方法</li></ol></li></ul><h2 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h2><ul><li>[x] flex</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.son{
   display: flex;
   justify-content: center;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>[x] transform</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.son{
    position:absolute;
      left:50%;
      transform:translate(-50%,0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>[X]　 absolute</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.son{
    position:absolute;
    width:固定;
    left:50%;
    margin-left:-0.5宽度;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中" aria-hidden="true">#</a> 垂直居中</h2><ul><li>行内块级元素</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#e0e0e0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>150px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>150px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>			
<span class="token punctuation">}</span>
<span class="token selector">.parent:after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.son</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#a0a0e0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>80px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>80px<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料来源" tabindex="-1"><a class="header-anchor" href="#资料来源" aria-hidden="true">#</a> 资料来源</h2>`,13),r={href:"https://juejin.im/post/6844903474879004680",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const s=e("ExternalLinkIcon");return i(),l("div",null,[d,n("p",null,[n("a",r,[t("水平居中垂直居中详解"),c(s)])])])}const k=a(o,[["render",u],["__file","css_16种方法实现水平居中垂直居中.html.vue"]]);export{k as default};
