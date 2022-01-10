import apiLinks from '@/utils/api.js';
import axios from 'axios';
// import router from '@/router.js';

export default {
  async fetchUpcomingLaunches(context) {
    context.commit('setLoadingState', { state: 'loading' });
    await axios
      .get(apiLinks.launches.upcoming)
      .then((response) => {
        context.commit('setUpcomingLaunches', response.data.results);
      })
      .catch((error) => {
        context.commit('setLoadingState', { state: 'error' });
        // router.push('/error');
        throw error;
      });
    context.commit('setLoadingState', { state: 'loaded' });
  },
};
