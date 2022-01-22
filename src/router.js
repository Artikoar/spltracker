import { createRouter, createWebHistory } from 'vue-router';

import NextLaunch from './pages/NextLaunch.vue';
import LaunchPage from './pages/LaunchPage.vue';
import NextMap from './pages/NextMap.vue';
import WikiPage from './pages/WikiPage.vue';
import BugReport from './pages/BugReport.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: NextLaunch },
    { path: '/map', component: NextMap },
    { path: '/wiki', component: WikiPage },
    { path: '/bug', component: BugReport },
    { path: '/launch/:launchID', component: LaunchPage, props: true },
  ],
});
