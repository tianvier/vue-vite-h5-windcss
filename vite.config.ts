import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: name => `vant/es/${name}/style`
          }
        ]
      }),
      WindiCSS({
        scan: {
          dirs: ['src'], // all files in the cwd
          fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
          exclude: [
            'node_modules',
            '.git',
            'public/**/*',
            '*.template.html',
            'index.html'
          ]
        }
      })
    ],
    server: {
      port: 3300
      /* proxy: {
        // 把key的路径代理到target位置
        "^/api": {
          //需要代理的路径   例如 '/api'
          target: `${process.env.VITE_APP_BASE_PATH}/`, //代理到 目标路径
          changeOrigin: true,
        },
      }, */
    },
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@common': resolve('./src/common'),
        '@components': resolve('./src/components'),
        '@store': resolve('./src/store'),
        '@views': resolve('./src/views')
      }
    }
  };
});
