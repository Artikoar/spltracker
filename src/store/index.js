import { createStore } from 'vuex';

import launches from './launches/index.js';
import rockets from './rockets/index.js';
import astronauts from './astronauts/index.js';

export default createStore({
  modules: {
    launches,
    rockets,
    astronauts,
  },
  state() {
    return {
      test: 1,
    };
  },
});
