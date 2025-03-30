import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import pluginImport from 'eslint-plugin-import';
export default defineConfig([
  // 基础配置 作用：定义规则生效的文件范围（所有目标文件）。
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
  },
  // ​浏览器环境全局变量
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: { globals: globals.browser },
  },
  // JavaScript 基础规则
  // 启用 @eslint/js 插件的推荐规则集（eslint:recommended 的现代等效配置）
  // 包含基础检查：no-unused-vars、no-dupe-keys 等。
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  // TypeScript 集成
  // 启用 @typescript-eslint 插件的推荐规则集。
  tseslint.configs.recommended,
  // ​Vue 单文件组件支持
  pluginVue.configs['flat/essential'],
  // Vue 文件的 TypeScript 解析器
  // 让 Vue 单文件组件中的 <script lang="ts"> 块支持 TypeScript 语法解析。
  // 避免解析 TypeScript 代码时报错。
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  // 自定义规则 （优先级更高）
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      // 关闭 console 限制
      'no-console': 'off',
      // 强制函数最多 3 个参数
      // 'max-params': ['error', 3],
      // Vue 组件名必须多单词（覆盖插件默认规则）
      // 'vue/multi-word-component-names': 'error',
      // 允许 any 但显示警告
      '@typescript-eslint/no-explicit-any': 'warn',
      // 启用 import 顺序检查
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
    },
  },
]);
// .eslintrc.js 示例
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: 'eslint:recommended',
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
// };
