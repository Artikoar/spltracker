import apiLinks from '@/utils/api.js';
import axios from 'axios';

export default {
  async fetchAstronauts(context, { offset }) {
    const findExist = context.state.astronauts.find(
      (listObj) => listObj.offset === offset
    );
    if (findExist !== undefined) {
      console.log('returned from fetchAstronauts!!!');
      return;
    }
    context.commit('setLoadingState', { state: 'loading' });
    await axios
      .get(apiLinks.astronauts.astronautsByOffset(offset))
      .then((response) => {
        console.log(response);
        context.commit('setAstronauts', {
          astronauts: response.data.results,
          offset: offset,
        });
        context.commit('setTotalCount', response.data.count);
        context.commit('setLoadingState', { state: 'loaded' });
      })
      .catch((error) => {
        context.commit('setLoadingState', { state: 'error' });
        throw error;
      });
  },
};
