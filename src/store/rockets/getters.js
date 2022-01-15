export default {
  getRocketConfig: (state) => (idName) => {
    return state.rocketConfigs.find(
      (config) => config.id === idName || config.name === idName
    );
  },
};
