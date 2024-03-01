import{_ as e,o as i,c as l,e as n}from"./app-2f1dce05.js";const s={},d=n(`<h1 id="css-杂未分类" tabindex="-1"><a class="header-anchor" href="#css-杂未分类" aria-hidden="true">#</a> CSS 杂未分类</h1><blockquote><p>create by <strong>yuzhoufen</strong> on <strong>2019-08-23 16:45</strong></p></blockquote><ul><li>css超过一行或者多行后显示省略号</li><li>css图片未知高度垂直居中完美解决方案</li><li>学习使用:before和:after伪元素</li></ul><h3 id="重要规则" tabindex="-1"><a class="header-anchor" href="#重要规则" aria-hidden="true">#</a> 重要规则</h3><ol><li>css超过一行显示省略号;代码如下：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p style=&quot;width:200px; white-space:nowrap;text-overflow:ellipsis; overflow:hidden&quot;&gt;
    BEM的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论
&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>css图片未知高度垂直居中完美解决方案。</li></ol><p>该方法的实现方式是将外部容器显示模式设置成display:table;img标签外部再套一个容器，并对该容器设置显示模式为display:table-cell; 类似与表格的显示方式，且不要使用float等属性，但是在IE6、IE7下是不支持的；如下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul class=&quot;list&quot;&gt;
    &lt;li&gt;
        &lt;img src=&quot;m1.jpg&quot;/&gt;
    &lt;/li&gt;
&lt;/ul&gt;
&lt;ul class=&quot;list&quot;&gt;
    &lt;li&gt;
        &lt;img src=&quot;m2.jpg&quot;/&gt;
    &lt;/li&gt;
&lt;ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
      *{margin:0;padding:0;}
      ul,li{list-style:none;}
      .list {
         float:left;
         margin:20px;
         width:250px;
         height:150px;
         display:table;
         text-align:center;
         border:1px solid #d3d3d3;
      }
      .list li{
         display:table-cell;
         vertical-align:middle;
      }
  &lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.防止外边距重叠解决方案</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>外层元素padding代替
外层元素 overflow:hidden;

内层元素绝对定位 postion:absolute:
内层元素 加float:left;或display:inline-block;
内层元素padding:1px;
内层元素透明边框 border:1px solid transparent;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),t=[d];function a(r,c){return i(),l("div",null,t)}const u=e(s,[["render",a],["__file","cssDemo1.html.vue"]]);export{u as default};
