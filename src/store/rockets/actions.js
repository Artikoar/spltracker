// import apiLinks from '@/utils/api.js';
import axios from 'axios';

export default {
  async fetchRocketConfig(context, { id, name, url }) {
    console.log('started fetchRocketConfig()');
    const findConfig = context.state.rocketConfigs.find(
      (config) => config.id === id || config.name === name
    );
    if (findConfig !== undefined) {
      console.log(
        'returned from fetchRocketConfig(), config has been already fetched'
      );
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
      })
      .finally(console.log('finishedFetch'));
    console.log('codeFetch');
  },
};
