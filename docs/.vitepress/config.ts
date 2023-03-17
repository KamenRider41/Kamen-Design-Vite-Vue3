import { defineConfig } from 'vitepress'
const guideSidebar = [
  {
    text: '基础',
    items: [
      {
        text: '快速开始', link: '/guide/'
      }
    ]
  }
]
const componentSidebar = [
  {
    text: '基础组件',
    items: [
      {
        text: 'Button按钮', link: '/components/Button/button'
      }
    ]
  },
  {
    text: '表单组件',
    items: [
      {
        text: '', link: '/components/'
      }
    ]
  },
  {
    text: 'Funning-CSS',
    items: [
      {
        text: '', link: '/components/'
      }
    ]
  },
]

export default defineConfig({
  title: 'Kamen-Design',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Kamen-Design',
    socialLinks: [
      {
        icon: 'github', link: 'https://github.com/KamenRider41/Kamen-Design-Vite-Vue3'
      }
    ],
    nav: [
      { text: '指南', items: guideSidebar },
      { text: "组件", items: componentSidebar },
    ],
    sidebar: {
      '/guide/': guideSidebar,
      '/components/': componentSidebar,
    }
  },
  markdown: {
    config: (md) => {
    },
  },
})