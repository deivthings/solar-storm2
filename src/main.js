import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'animate.css';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { router } from './router.js'
import '@purge-icons/generated'
import VWave from 'v-wave'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(autoAnimatePlugin)
app.use(VWave)

app.mount('#app')
// createApp(App).use(createPinia()).mount('#app');