import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/app/router';
import './style.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

export default app;
