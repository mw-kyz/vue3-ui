import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import CustomUI from './libs/custom-ui'

createApp(App).use(router).use(CustomUI).mount('#app')
