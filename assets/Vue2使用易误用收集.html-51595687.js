import{_ as e,o as n,c as t,e as s}from"./app-86c50f4f.js";const i={},a=s(`<p>#Vue 实例易错误使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
  el:&quot;#app&quot;,
  data(){ return {} },//容易误使用直接返回{};
  components:{}, //容易误使用[],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[a];function d(l,r){return n(),t("div",null,c)}const _=e(i,[["render",d],["__file","Vue2使用易误用收集.html.vue"]]);export{_ as default};
