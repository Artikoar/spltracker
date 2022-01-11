import { createApp } from 'vue';
import App from './App.vue';

import Store from './store/index';
import Router from './router';

import BaseCard from './components/UI/BaseCard.vue'

const app = createApp(App);

app.use(Store);
app.use(Router);

app.component('base-card', BaseCard);

app.mount('#app');
