export const state = () => ({
    list_exhibition: {},
});

export const getters =  {
    list_exhibition(state) {
      return state.list_exhibition;
    },
};

export const mutations = {
    SET_LIST_EXHIBITION(state, data) {
      state.list_exhibition = data
    },
};

export const actions =  {

  async GET_LIST_EXHIBITION({ commit, dispatch, getters }, params) {
    try {
      const response = await this.$axios.$post(`exhibitionByTime`, params)
      commit('SET_LIST_EXHIBITION', response)
      let listDataExhibition = response
      return listDataExhibition
      console.log(response)
    } catch (error) {
      console.log('error')
      throw error
    }
  },

};
