// import apiLinks from '@/utils/api.js';
import axios from 'axios';

export default {
  async fetchRocketConfig(context, { id, name, url }) {
    const findConfig = context.state.rocketConfigs.find(
      (config) => config.id === id || config.name === name
    );
    if (findConfig !== undefined) {
      return;
    }
    context.commit('setLoadingState', { state: 'loading' });
    await axios
      .get(url)
      .then((response) => {
        context.commit('addNewConfig', response.data);
        context.commit('setLoadingState', { state: 'loaded' });
      })
      .catch((error) => {
        context.commit('setLoadingState', { state: 'error' });
        throw error;
      });
  },
};
