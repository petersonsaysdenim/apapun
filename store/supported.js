export const state = () => ({
    list_supported: {},
});

export const getters =  {
    list_supported(state) {
      return state.list_supported;
    },
};

export const mutations = {
    SET_LIST_SUPPORTED(state, data) {
      state.list_supported = data
    },
};

export const actions =  {

  async GET_LIST_SUPPORTED({ commit }) {
    try {
      const response = await this.$axios.get(`exhibitionSupportBy`)
      commit('SET_LIST_SUPPORTED', response)
      console.log(response)
    } catch (error) {
      console.log('error')
      throw error
    }
  },

};
