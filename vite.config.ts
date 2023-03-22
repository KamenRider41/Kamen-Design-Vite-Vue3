/*
 * @Author: 41
 * @Date: 2023-03-15 09:42:26
 * @LastEditors: 41
 * @LastEditTime: 2023-03-22 21:01:32
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
  output:
  {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `[name].[ext]`,
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
    // @ts-ignore
    rollupOptions,
    minify: false,
    cssCodeSplit: true,   // 追加
    lib: {
      entry: "./src/entry.ts",
      name: "KamenDesign",
      fileName: "Kamen-design",
      // 导出模块格式
      formats: ["es", "umd", "iife"],/*  */
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
  },
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        // name -> 代表的是你此刻css文件中的类名
        // filename -> 是你当前css文件的绝对路径
        // css -> 给的就是你当前样式
        // 配置成函数以后, 返回值就决定了他最终显示的类型
        return `${name}_${Math.random().toString(36).substr(3, 8)}`;
      }
    }
  }

});