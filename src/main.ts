import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import 'bootstrap/dist/js/bootstrap.js'
import './styles/styles.less'

const app = createApp(App)

app.use(router)

app.mount('#app')
