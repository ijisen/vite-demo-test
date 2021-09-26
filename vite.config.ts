import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import viteCompression from 'vite-plugin-compression';
// 帮助检查 Vite 插件的中间状态。
// 安装后，访问 localhost:3000/__inspect/
import Inspect from 'vite-plugin-inspect'


const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  '/@': pathResolve('src'),
  //解决开发环境下的警告 You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
  'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
  'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
};


const rollupOptions = {
  output: {
    manualChunks: (id: string) => {
      if(id && id.includes('/node_modules/')) {
        const moduleName = id.toString().split('/node_modules/')[1].split('/')[0];
        console.log(moduleName)
        switch (moduleName) {
          case 'element-plus':
            return 'element-plus'
            break;
          default:
            return 'vendor'
        }
      }
      return 'vendor'
    }
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias
  },
  build: {
    // 产出目录
    // outDir: 'dist',
    target: 'es2015',
    // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
    // minify: 'terser',
    // 是否产出maifest.json
    // manifest: false,
    // 是否产出soucemap.json
    // sourcemap: false,
    rollupOptions,
  },
  plugins: [
    vue(),
    Inspect(),
    viteCompression({
      // filename: '[path].gz[query]',
      algorithm: 'gzip',
      // test: /\.js$|\.json$|\.css/,
      threshold: 10240, // 只有大小大于该值的资源会被处理
      // minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
    })
  ]
})
