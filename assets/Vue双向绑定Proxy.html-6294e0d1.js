import{_ as i,r as s,o as d,c as l,a as e,b as a,d as t,e as r}from"./app-86c50f4f.js";const c={},v={href:"https://www.cnblogs.com/tugenhua0707/p/10306793.html",target:"_blank",rel:"noopener noreferrer"},o=r(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
  el:&quot;#app&quot;,
  data:{coutn:0},
  methods:{
    add(){
      this.count++
    },
    reduce(){
      this.count--
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Vue{
  constructor(options){
    this.$el=document.querySelector(options.el);
    this.methods=options.methods;
    this._binding={};
    this._observer(options.data);
    this._compile(this.$el);
  }
  _observer(datas){
    const me = this;
    const handler = {
      set(target,key,value) {
        const rets = Reflect.set(target,key,value);
        me._binding[key].map(item=&gt;{
        item.update();
        })
      }
    }
    this.$data=new Proxy(datas,handler)
  }

  _compile(root){
    const nodes= Array.prototype.slice.call(root.children);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(m,b){const n=s("ExternalLinkIcon");return d(),l("div",null,[e("p",null,[e("a",v,[a("proxy"),t(n)])]),o])}const _=i(c,[["render",u],["__file","Vue双向绑定Proxy.html.vue"]]);export{_ as default};
