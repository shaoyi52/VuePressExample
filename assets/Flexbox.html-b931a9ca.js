import{_ as l,r as d,o as s,c as t,a as e,b as a,d as r,e as i}from"./app-a6318679.js";const v={},c=i(`<h1 id="css-flexbox-弹性布局" tabindex="-1"><a class="header-anchor" href="#css-flexbox-弹性布局" aria-hidden="true">#</a> CSS Flexbox 弹性布局</h1><blockquote><p>create by <strong>yuzhoufen</strong> on <strong>2020-07-06 15:45</strong></p></blockquote><h2 id="容器的属性" tabindex="-1"><a class="header-anchor" href="#容器的属性" aria-hidden="true">#</a> 容器的属性</h2><ul><li>display: flex</li><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h2><ul><li>order</li><li>flex-grow</li><li>flex-shrink</li><li>flex-basis</li><li>flex</li><li>align-self</li></ul><h3 id="容器的属性解释" tabindex="-1"><a class="header-anchor" href="#容器的属性解释" aria-hidden="true">#</a> 容器的属性解释</h3><ol><li><p>flex-direction：row|row-reverse|column|column-reverse</p></li><li><p>flex-wrap:nowrap|wrap|wrap-reverse</p></li><li><p>flex-flow：[row nowrap]</p></li><li><p>justify-content:flex-start|flex-end|center|space-between|space-around</p></li><li><p>align-items:flex-start|flex-end|center|baseline|stretch</p></li><li><p>align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box{align-content:flex-start|flex-end|center|space-between|space-around|stretch;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="demo-示例" tabindex="-1"><a class="header-anchor" href="#demo-示例" aria-hidden="true">#</a> Demo 示例</h2>`,10),u={href:"https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes",target:"_blank",rel:"noopener noreferrer"},o=i(`<ol><li>demo1 【align-centent】 多行才使用到</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;

#father{

    width:200px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-content:center;
    height:200px;
    background-color:grey;
}
.son1{

    height:30px;
    width:100px;
    background-color:orange;
}

.son2{

    height:30px;
    width:100px;
    background-color:red;
}

.son3{

    height:30px;
    width:100px;
    background-color:#08a9b5;
}


&lt;/style&gt;
&lt;div id=&quot;father&quot;&gt;
    &lt;div class=&quot;son1&quot;&gt;q&lt;/div&gt;
    &lt;div class=&quot;son2&quot;&gt;w&lt;/div&gt;
    &lt;div class=&quot;son3&quot;&gt;e&lt;/div&gt;
    &lt;div class=&quot;son3&quot;&gt;e&lt;/div&gt;
    &lt;div class=&quot;son3&quot;&gt;e&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 flex 实现圣杯布局</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
    *{
     	margin:0;
        padding:0; 
     }
     body{
      height:500px
     }
     .conterWrap{     
      height:100%;     
      display:flex;
      flex-direction:column;      
      background-color:#eee
      }
     .header{
     	width:100%;
        height:60px;
        background-color:aqua;
        text-align:center;
     }
     .content{
       display:flex;
       flex:1;       
     }
     .left{
     	width:100px;
        height:100%;
        background-color:red;
        text-align:center;
     }
     .right{
     	width:100px;
        height:100%;
        background-color:pink;
        text-align:center;
     }
     .middle{
      flex:1;
      height:100%;
      background-color:royalblue;
      text-align:center
     }
     .footer{
     	width:100%;
        height:60px;
        background-color:aqua;
        text-align:center
     }
    &lt;/style&gt;

    &lt;div class=&quot;conterWrap&quot;&gt;
    &lt;div class=&quot;header&quot;&gt;&lt;h1&gt;header&lt;/h1&gt;&lt;/div&gt;
    &lt;div class=&quot;content&quot;&gt;
    	&lt;div class=&quot;left&quot;&gt;&lt;h1&gt;left&lt;/h1&gt;&lt;/div&gt;
        &lt;div class=&quot;middle&quot;&gt;&lt;h1&gt;middle&lt;/h1&gt;&lt;/div&gt;
        &lt;div class=&quot;right&quot;&gt;&lt;h1&gt;right&lt;/h1&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;footer&quot;&gt;&lt;h1&gt;footer&lt;/h1&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function b(m,g){const n=d("ExternalLinkIcon");return s(),t("div",null,[c,e("p",null,[e("a",u,[a("练习地址"),r(n)])]),o])}const x=l(v,[["render",b],["__file","Flexbox.html.vue"]]);export{x as default};
