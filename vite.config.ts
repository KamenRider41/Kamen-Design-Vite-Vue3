/*
 * @Author: 41
 * @Date: 2023-03-15 09:42:26
 * @LastEditors: 41
 * @LastEditTime: 2023-03-22 17:54:05
 * @Description: 
 */
/// <reference types="vitest" />
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
    Unocss(),
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,   // 追加
    lib: {
      entry: "./src/entry.ts",
      name: "KamenDesign",
      fileName: "Kamen-design",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }

});