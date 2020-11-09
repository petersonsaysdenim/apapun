export const state = () => ({
    list_exhibitors: {},
});

export const getters =  {
    list_exhibitors(state) {
      return state.list_exhibitors;
    },
};

export const mutations = {
    SET_LIST_EXHIBITORS(state, data) {
      state.list_exhibitors = data
    },
};

export const actions =  {

  async GET_LIST_EXHIBITORS({ commit }) {
    try {
    let item = Object.assign({}, { name: state.name })
      const response = await this.$axios.$get(`data/exhibitors/sialinterfood`)
      commit('SET_LIST_EXHIBITORS', response)
      //console.log(response.data)
    } catch (error) {
      console.log('error')
      throw error
    }
  },

};
