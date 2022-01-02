import { createStore } from 'vuex';

import launches from './launches/index.js';

export default createStore({
  modules: {
    launches,
  },
});
