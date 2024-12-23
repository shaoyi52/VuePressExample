import{_ as p,r as o,o as c,c as i,a as n,b as s,e,d as t}from"./app-b1c81757.js";const l={},u=n("h3",{id:"_6-前备学习",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-前备学习","aria-hidden":"true"},"#"),s(" 6 前备学习")],-1),r={href:"https://cn.vitejs.dev/guide/env-and-mode.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<h4 id="_1-环境变量" tabindex="-1"><a class="header-anchor" href="#_1-环境变量" aria-hidden="true">#</a> 1. 环境变量</h4><p>Vite 在一个特殊的 <code>i<wbr>mport.meta.env</code> 对象上暴露环境变量</p><p>只有以 <code>VITE_</code> 为前缀的变量才会暴露给经过 Vite 处理的代码</p><h4 id="_2-模式" tabindex="-1"><a class="header-anchor" href="#_2-模式" aria-hidden="true">#</a> 2. 模式</h4><p>默认情况下，开发服务器 (<code>dev</code> 命令) 运行在 <code>development</code> (开发) 模式，而 <code>build</code> 命令则运行在 <code>production</code> (生产) 模式</p><p>若想在 vite build 时运行不同的模式来渲染不同的标题，可以通过传递 <code>--mode</code> 选项标志来覆盖命令使用的默认模式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 stag 预发布模式下构建应用</span>
vite build <span class="token parameter variable">--mode</span> stag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-mock-使用" tabindex="-1"><a class="header-anchor" href="#_3-mock-使用" aria-hidden="true">#</a> 3. mock 使用</h4>`,8),k={href:"https://fastmock.site/#/project/32586dc72671b593544e5d191ada0b88",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="_7-编译时环境" tabindex="-1"><a class="header-anchor" href="#_7-编译时环境" aria-hidden="true">#</a> 7 编译时环境</h3><ul><li><p>注意</p><ol><li>变量必须 <code>VITE_</code> 开头</li><li><code>.env.production</code> <code>.env.stag</code> 需设置 <code>NODE_ENV=production</code> 指定为生产模式</li><li>项目配置调整</li></ol></li></ul><h4 id="_1-编写-env-文件" tabindex="-1"><a class="header-anchor" href="#_1-编写-env-文件" aria-hidden="true">#</a> 1. 编写 .env 文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置 NODE_ENV 环境模式</span>
NODE_ENV <span class="token operator">=</span> development

<span class="token comment"># 接口 API 地址</span>
VITE_BASE_API <span class="token operator">=</span> /api

<span class="token comment"># 上传 API</span>
VITE_UPLOAD_API <span class="token operator">=</span> http:127.0.0.1:2021

<span class="token comment"># CDN 地址</span>
VITE_CDN <span class="token operator">=</span> http://www.aliyun.com

<span class="token comment"># mock 开关</span>
VITE_MOCK <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment"># MOCK API</span>
VITE_MOCK_API <span class="token operator">=</span> https://www.fastmock.site/mock/32586dc72671b593544e5d191ada0b88/api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-文件修改配置项" tabindex="-1"><a class="header-anchor" href="#_2-文件修改配置项" aria-hidden="true">#</a> 2. 文件修改配置项</h4><ul><li>request.ts</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BASE_PATH</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">8000</span><span class="token punctuation">,</span>
  timeoutErrorMessage<span class="token operator">:</span> <span class="token string">&#39;请求超时，请稍后再试&#39;</span><span class="token punctuation">,</span>
  withCredentials<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  config <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_MOCK</span> <span class="token operator">===</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_MOCK_API</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BASE_API</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>config
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>error<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-运行时环境封装-推荐" tabindex="-1"><a class="header-anchor" href="#_8-运行时环境封装-推荐" aria-hidden="true">#</a> 8 运行时环境封装（推荐）</h3><ul><li>config &gt; index.ts</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 环境配置封装
 */</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  dev<span class="token operator">:</span> <span class="token punctuation">{</span>
    baseApi<span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span>
    uploadApi<span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:2021&#39;</span><span class="token punctuation">,</span>
    cdn<span class="token operator">:</span> <span class="token string">&#39;http://xxx.aliyun.com&#39;</span><span class="token punctuation">,</span>
    mock<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    mockApi<span class="token operator">:</span> <span class="token string">&#39;https://www.fastmock.site/mock/32586dc72671b593544e5d191ada0b88/api&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  stg<span class="token operator">:</span> <span class="token punctuation">{</span>
    baseApi<span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span>
    uploadApi<span class="token operator">:</span> <span class="token string">&#39;http://api-driver-stg.marsview.cc&#39;</span><span class="token punctuation">,</span>
    cdn<span class="token operator">:</span> <span class="token string">&#39;http://xxx.aliyun.com&#39;</span><span class="token punctuation">,</span>
    mock<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    mockApi<span class="token operator">:</span> <span class="token string">&#39;https://www.fastmock.site/mock/32586dc72671b593544e5d191ada0b88/api&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  prd<span class="token operator">:</span> <span class="token punctuation">{</span>
    baseApi<span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span>
    uploadApi<span class="token operator">:</span> <span class="token string">&#39;http://api-driver.marsview.cc&#39;</span><span class="token punctuation">,</span>
    cdn<span class="token operator">:</span> <span class="token string">&#39;http://xxx.aliyun.com&#39;</span><span class="token punctuation">,</span>
    mock<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    mockApi<span class="token operator">:</span> <span class="token string">&#39;https://www.fastmock.site/mock/32586dc72671b593544e5d191ada0b88/api&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  env<span class="token punctuation">,</span>
  <span class="token operator">...</span>config<span class="token punctuation">[</span>env<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-方法一" tabindex="-1"><a class="header-anchor" href="#_1-方法一" aria-hidden="true">#</a> 1. 方法一</h4><ul><li>config &gt; index.ts</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Env</span> <span class="token operator">=</span> <span class="token string">&#39;dev&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;stg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;prd&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> env<span class="token operator">:</span> Env <span class="token operator">=</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>location<span class="token punctuation">.</span>host<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> location<span class="token punctuation">.</span>host<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  env <span class="token operator">=</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>location<span class="token punctuation">.</span>host <span class="token operator">===</span> <span class="token string">&#39;api-driver-stg.marsview.cc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  env <span class="token operator">=</span> <span class="token string">&#39;stg&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  env <span class="token operator">=</span> <span class="token string">&#39;prd&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-方法二" tabindex="-1"><a class="header-anchor" href="#_2-方法二" aria-hidden="true">#</a> 2. 方法二</h4><ul><li>config &gt; index.ts</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Env</span> <span class="token operator">=</span> <span class="token string">&#39;dev&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;stg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;prd&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> env <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>env <span class="token keyword">as</span> Env<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>index.html</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-env</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-文件修改配置项" tabindex="-1"><a class="header-anchor" href="#_3-文件修改配置项" aria-hidden="true">#</a> 3. 文件修改配置项</h4><ul><li>request.ts</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  config <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>env<span class="token punctuation">.</span>mock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> env<span class="token punctuation">.</span>mockApi<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> env<span class="token punctuation">.</span>baseApi<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>config
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>error<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function m(b,h){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[n("a",r,[s("Vite官方中文文档-环境变量与模式"),e(a)])]),d,n("p",null,[n("a",k,[s("fast mock"),e(a)])]),v])}const _=p(l,[["render",m],["__file","6_5_环境变量.html.vue"]]);export{_ as default};
