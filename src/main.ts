import {createApp} from 'vue';
import {createPinia} from 'pinia';
import SmdScaffold from 'smd-scaffold';
import 'smd-scaffold/style.css';
// import './assets/main.css'

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(SmdScaffold);
app.use(createPinia());
app.use(router);

app.mount('#app');
