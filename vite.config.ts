import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 按需自动导入 Vite、Webpack、Rspack、Rollup 和 esbuild 的 API的插件
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { lazyImport, VxeResolver } from 'vite-plugin-lazy-import';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      scale: 1, // 缩放比 相对1em
      autoInstall: true, // 自动安装
      compiler: 'vue3', // 编译方式
    }),
    Components({
      resolvers: [
        VantResolver(),
        IconsResolver({
          // to avoid naming conflicts
          // a prefix can be specified for icons
          prefix: 'icon',
        }),
      ],
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ],
      // global imports to register 全局注册导入
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [VantResolver()],
    }),
    lazyImport({
      resolvers: [
        VxeResolver({
          libraryName: 'vxe-table',
        }),
        VxeResolver({
          libraryName: 'vxe-pc-ui',
        }),
      ],
    }),
  ],
});
