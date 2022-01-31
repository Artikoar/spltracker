import { createRouter, createWebHistory } from 'vue-router';

import NextLaunch from './pages/NextLaunch.vue';
import LaunchPage from './pages/LaunchPage.vue';
import NextMap from './pages/NextMap.vue';
import WikiMobilePage from './pages/WikiPageMobile.vue';
import AstronautsPage from './pages/AstronautsPage.vue';
import BugReport from './pages/BugReport.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: NextLaunch },
    { path: '/map', component: NextMap },
    { path: '/wiki-mobile', component: WikiMobilePage },
    { path: '/bug', component: BugReport },
    { path: '/launch/:launchID', component: LaunchPage, props: true },
    {
      path: '/wiki/astronauts',
      component: AstronautsPage,
      props: (route) => ({ query: route.query.page }),
    },
  ],
});
