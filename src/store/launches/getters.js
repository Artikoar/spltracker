export default {
  getNextLaunch(state) {
    return state.upcomingLaunches[0];
  },
  getUpcomingLaunches(state) {
    return state.upcomingLaunches;
  },
  launchesAreLoading(state) {
    return state.loadingState;
  },
};
