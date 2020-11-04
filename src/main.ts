import { createApp } from 'vue'
import App from './App.vue'
import components from './components'

const app = createApp(App)

components.install(app)

app.mount('#app')
