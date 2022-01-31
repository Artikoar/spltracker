export default {
  getNextLaunch(state) {
    if (state.upcomingLaunches) {
      return state.upcomingLaunches[0];
    } else {
      return null;
    }
  },
  getUpcomingLaunches(state) {
    return state.upcomingLaunches;
  },
  launchesAreLoading(state) {
    return state.loadingState;
  },
};
