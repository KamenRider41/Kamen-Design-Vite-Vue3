import { createApp } from "vue/dist/vue.esm-browser";
import KamenUI from "./entry"
createApp({
  template: `
  <div>
  <KMButton color="blue" icon="search">蓝色按钮</KMButton>
  <KMButton color="green" icon="edit">绿色按钮</KMButton>
  <KMButton color="gray" icon="check">灰色按钮</KMButton>
  <KMButton color="yellow" icon="message">黄色按钮</KMButton>
  <KMButton color="red" icon="delete">红色按钮</KMButton>
 </div>
  `
})
  .use(KamenUI)
  .mount("#app");
