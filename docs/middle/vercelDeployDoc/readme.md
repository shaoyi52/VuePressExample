Mui 投票
====
-款基于云原生开发的投票系统，依托于 VerceL 的部署环境

使用的技术和产品:
1. Nuxt.js
    1. 提供 Vue 开发环境
    2. 提供 SSR 能力
    3. 提供 API 环境
2. Vercel
   1. 提供部署环境和各项网站能力
   2. 提供 Edge Function
   3. 免费额度足够用很久
3. Upstash
   1. Redis
   2. 免费额度足够用很久
4. TiDB CLoud Serverless
   1. HTTP endpoint
   2. 免费额度足够用很久
   3. https://docs.pingcap.com/tidbcloud/dev-guide-sample-application-nodejs-mysql2#sample-code-snippets
   4. mysql --comments --connect-timeout 15 -u '3W42KdhoYPrKuKU.root' -h gateway01.us-west-2.prod.aws.tidbcloud.com -P 4000 -D test --ssl-mode=VERIFY_IDENTITY --ssl-ca=<path_to_ca_cert> -pam82hTnj3ZBzk3oP
5. 其它
   1. TailwindCSS
   2. DaisyUI
   3. GitHub