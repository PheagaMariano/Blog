import './assets/main.css'

import { createApp } from 'vue'
import App from './components/main.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from '@/router';

const app = createApp(App);
app.use(router);
app.mount("#app");
