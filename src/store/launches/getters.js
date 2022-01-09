export default {
  getNextLaunch(state) {
    return state.upcomingLaunches[0];
  },
  launchesAreLoading(state) {
    return state.loadingState;
  },
};
