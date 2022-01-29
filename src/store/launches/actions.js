import apiLinks from '@/utils/api.js';
import axios from 'axios';
// import router from '@/router.js';

export default {
  async fetchUpcomingLaunches(context) {
    if (
      context.state.upcomingLaunches &&
      context.state.upcomingLaunches.length
    ) {
      return;
    }
    context.commit('setLoadingState', { state: 'loading' });
    await axios
      .get(`${apiLinks.launches.upcoming}`)
      .then((response) => {
        context.commit('setUpcomingLaunches', response.data.results);
        context.commit('setLoadingState', { state: 'loaded' });
      })
      .catch((error) => {
        context.commit('setLoadingState', { state: 'error' });
        throw error;
      });
  },
};
