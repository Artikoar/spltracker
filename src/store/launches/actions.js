import apiLinks from '@/utils/api.js';
import axios from 'axios';
// import router from '@/router.js';

export default {
  async fetchUpcomingLaunches(context) {
    console.log('fetch_started');
    if (context.state.upcomingLaunches && context.state.upcomingLaunches.length) {
      return;
    }
    context.commit('setLoadingState', { state: 'loading' });
    await axios
      .get(apiLinks.launches.upcoming)
      .then((response) => {
        context.commit('setUpcomingLaunches', response.data.results);
        console.log('fetch_end');
        context.commit('setLoadingState', { state: 'loaded' });
      })
      .catch((error) => {
        context.commit('setLoadingState', { state: 'error' });
        // router.push('/error');
        throw error;
      });
      console.log('fetch_code_finish');
  },
};
