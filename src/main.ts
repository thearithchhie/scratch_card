// import './assets/main.css'
//import 'normalize.css';


import '../public/assets/css/main.css';
import '../public/assets/css/normalize.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
