import apiLinks from '@/utils/api.js';
import axios from 'axios';

export default {
  async fetchUpcomingLaunches(context) {
    await axios
      .get(apiLinks.launches.upcoming)
      .then((response) => {
        context.commit('setUpcomingLaunches', response.data.results);
      })
      .catch((error) => {
        throw error;
      });
  },
};
