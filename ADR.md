# intalling icons

npm i --save-dev vite-plugin-purge-icons unplugin-icons @iconify/json
npm i @iconify/iconify

## main.js
import '@purge-icons/generated'

## vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import alias from '@rollup/plugin-alias'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import PurgeIcons from 'vite-plugin-purge-icons'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    PurgeIcons({
      /* PurgeIcons Options */
    }),
    Components({
      resolvers: [IconsResolver()],
      // relative paths to the directory to search for components.
      // dirs: ['src/components', '../../commons/brixui-vue3/scr/components'],
    }),
    Icons({
      scale: 1.8, // Scale of icons against 1em
      defaultStyle: '', // Style apply to icons
      defaultClass: 'ms-Icon', // Class names apply to icons
    }),
  ]
})



# TRANSITIONS ON VUE
https://www.youtube.com/watch?v=L77Uq93XXzk&t=519s
https://vuejs.org/guide/built-ins/transition.html#the-transition-component