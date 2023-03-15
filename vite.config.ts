import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from "./config/unocss";
// https://vitejs.dev/config/
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({

  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    Unocss()
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "KamenUI",
      fileName: "Kamen-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },

});