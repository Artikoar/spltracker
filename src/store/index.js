import { createStore } from 'vuex';

import launches from './launches/index.js';
import rockets from './rockets/index.js';

export default createStore({
  modules: {
    launches,
    rockets,
  },
  state() {
    return {
      test: 1,
    };
  },
});
