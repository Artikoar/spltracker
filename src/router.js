import { createRouter, createWebHistory } from 'vue-router';

import NextLaunch from './pages/NextLaunch.vue';
import WikiPage from './pages/WikiPage.vue';
import BugReport from './pages/BugReport.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: NextLaunch },
    { path: '/wiki', component: WikiPage },
    { path: '/bug', component: BugReport },
  ],
});
