export default {
  getAstronautsPage: (state) => (offset) => {
    return state.astronauts.find((listObj) => listObj.offset === offset);
  },
  astronautsAreLoading(state) {
    return state.loadingState;
  },
  totalCount(state) {
    return state.totalCount;
  },
};
