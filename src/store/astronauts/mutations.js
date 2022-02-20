export default {
  setLoadingState(state, newState) {
    if (!['loading', 'loaded', 'error'].includes(newState.state)) {
      throw new Error("Error's state is invalid");
    } else {
      state.loadingState = newState.state;
    }
  },
  setAstronauts(state, { astronauts, offset }) {
    state.astronauts.push({
      results: astronauts,
      offset: offset,
    });
  },
  setTotalCount(state, totalCount) {
    state.totalCount = totalCount;
  },
};
