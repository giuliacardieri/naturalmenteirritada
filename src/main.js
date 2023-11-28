import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import pt from 'dayjs/locale/pt'
import markdownIt from 'markdown-it'

const app = createApp(App)

app.use(router)

dayjs.locale('pt')
app.config.globalProperties.$dayjs = dayjs

const md = new markdownIt()
app.config.globalProperties.$markdown = md

app.mount('#app')
