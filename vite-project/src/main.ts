import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
app.use(Toast);
app.mount('#app');

createApp(App).mount('#app');

