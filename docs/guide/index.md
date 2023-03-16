# 🐱快速开始
`Kamen-ui`采用`UnoCSS`原子化CSS引擎来开发的Vue3组件库。是新时代的新作品，把时髦打出来，迎接我的到来。
## 引入
这里当然就推荐pnpm
```shell
pnpm add kamen-ui
```
在`main.js`或`main.ts`添加：
```js
import { createApp } from 'vue'
import App from './App.vue'
import kamen from 'kamen-ui'

import 'kamen-ui/dist/assets/entry.284eadfc.css'

import './assets/main.css'

createApp(App).use(kamen).mount('#app')
```


## 为什么选择该框架
- ⚡`UnoCSS`原子化引擎，感受性能的点滴提升，还原起飞的梦
- 😶‍🌫️使用`vitest`进行单元测试，无需担心组件库的稳定性和可靠性，配套测试，只等你来试试
- 🛠️`tsx`构建组件库，源码可读性强，维护性强，让你一眼看穿类型
- 😽使用`vite`进行打包，组件库引入的体积无需担心，时代前沿，有些时髦