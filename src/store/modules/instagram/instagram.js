export default {
  namespaced: true,
  state() {
    return {
      instagram: [],
    };
  },
  getters: {
    getInstagramData(state) {
      return state.instagram;
    },
  },
  mutations: {
    addFetchedInstagramData(state, payload) {
      return state.push(payload);
    },
  },
  actions: {
    async fetchInstagramData({ commit }) {
      const dataFetched = await (await fetch("url")).json();
      commit("addFetchedInstagramData", dataFetched);
    },
  },
};
