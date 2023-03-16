import { App } from "vue";
import KMButton from "./button";

// 导出单独组件
export { KMButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(KMButton.name, KMButton);
  },

};