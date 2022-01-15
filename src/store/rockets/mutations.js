export default {
  setLoadingState(state, newState) {
    if (!['loading', 'loaded', 'error'].includes(newState.state)) {
      throw new Error("Error's state is invalid");
    } else {
      state.loadingState = newState.state;
    }
  },
  addNewConfig(state, config) {
    state.rocketConfigs.push(config);
  },
};
