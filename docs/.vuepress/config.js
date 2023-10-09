import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '少逸前端文档 ！',
  description: '这是markdown文档整理站点',
  base:"/vuepress/",
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'JAVASCRIPT',
        link: '/javascript/',
      },
      {
        text: 'CSS',
        link: '/css/',
      },{
        text: 'HTML',
        link: '/html/',
      },
      {
        text: '其他',
        link: '/helpDoc/bookmark.html',
      },
    ],
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'JAVASCRIPT',
        link: '/javascript/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md',
        ],
      },// 字符串 - 页面文件路径
      '/bar/README.md',]
  }),
})