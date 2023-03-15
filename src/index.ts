import { createApp } from "vue/dist/vue.esm-browser";
import KamenUI from "./entry"
createApp({
  template: `
  <div>
  <KMButton color="blue">蓝色按钮</KMButton>
  <KMButton color="green">绿色按钮</KMButton>
  <KMButton color="gray">灰色按钮</KMButton>
  <KMButton color="yellow">黄色按钮</KMButton>
  <KMButton color="red">红色按钮</KMButton>
 </div>
  `
})
  .use(KamenUI)
  .mount("#app");
