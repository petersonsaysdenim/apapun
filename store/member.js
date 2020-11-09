export const state = () => ({
    levels: {},
    profile: {},
    data_downline: {},
    data_count_member: {},
    data_repeat_count_member: {},
    current_ranking: {},
    user: {},
});

export const getters =  {
    levels(state) {
      return state.levels;
    },
    profile(state) {
      return state.profile;
    },
    user(state) {
      return state.user;
    },
    data_downline(state) {
      return state.data_downline;
    },
    data_count_member(state) {
      return state.data_count_member;
    },
    data_repeat_count_member(state) {
      return state.data_repeat_count_member;
    },
    current_ranking(state) {
      return state.current_ranking;
    },
};

export const mutations = {
    SET_LEVELS(state, data) {
      state.levels = data
    },
    SET_PROFILE(state, data) {
      state.profile = data
    },
    SET_USER(state, data) {
      state.user = data
    },
    SET_DOWNLINE_MEMBER(state, data) {
      state.data_downline = data
    },
    LIST_COUNT_MEMBER(state, data) {
      state.data_count_member = data
    },
    LIST_REPEAT_COUNT_MEMBER(state, data) {
      state.data_repeat_count_member = data
    },
    SET_CURRENT_RANKING(state, data) {
      state.current_ranking = data
    },
};

export const actions =  {

    async GET_LEVELS({ commit }) {
        try {
        let item = Object.assign({}, { name: state.name })
          const response = await this.$axios.$get(`api/levels`)
          commit('SET_LEVELS', response.data)
          //console.log(response.data)
        } catch (error) {
          console.log('error')
          throw error
        }
    },

    async GET_PROFILE({ commit }) {
        try {
        let item = Object.assign({}, { name: state.name })
          const response = await this.$axios.$get(`api/profile`)
          commit('SET_PROFILE', response)
          //console.log(response)
        } catch (error) {
          console.log('error')
          throw error
        }
    },

    async GET_USER({ commit }) {
        try {
        let item = Object.assign({}, { name: state.name })
          const response = await this.$axios.$get(`api/profile`)
          commit('SET_USER', response)
          //console.log(response)
        } catch (error) {
          console.log('error')
          throw error
        }
    },

    async GET_DOWNLINE_MEMBER({ commit }) {
        try {
          const response = JSON.parse(localStorage.getItem("newMember"))
          commit('SET_DOWNLINE_MEMBER', response)
        } catch (error) {
          console.log('error')
          throw error
        }
    },
    // Get Count Cart Member
    async GET_COUNT_MEMBER({ commit }) {
        try {
          const response = JSON.parse(localStorage.getItem("dataCartMember"))
          commit('LIST_COUNT_MEMBER', response)
          if (response == null) {
            localStorage.setItem("dataCartMember", "[]")
          }
          //console.log(response)
        } catch (error) {
          console.log('error')
          throw error
        }
    },
    async GET_REPEAT_COUNT_MEMBER({ commit }, params) {
        try {
          const response = JSON.parse(localStorage.getItem("RepeatCartMember"))
          commit('LIST_REPEAT_COUNT_MEMBER', response)
          if (response == null) {
            const parsed = JSON.stringify([]);
    	      localStorage.setItem('RepeatCartMember', parsed);
          }
          //console.log(response)
        } catch (error) {

          console.log('error')
          throw error
        }
    },

    async GET_CURRENT_RANKING({ commit }) {
        try {
          const response = await this.$axios.$get(`api/current-ranking`)
          commit('SET_CURRENT_RANKING', response.data)
        } catch (error) {
          console.log('error')
          throw error
        }
    },

    async checkProfileMissingData({ commit, dispatch, getters }) {
      await dispatch('GET_PROFILE');
      let checkedData = [
        {
          column: 'first_name',
          label: 'Nama Depan'
        },
        {
          column: 'last_name',
          label: 'Nama Belakang'
        },
        {
          column: 'birthdate',
          label: 'Tanggal Lahir'
        },
        {
          column: 'sex',
          label: 'Jenis Kelamin'
        },
        {
          column: 'is_married',
          label: 'Status Pernikahan'
        },
        {
          column: 'phone_number',
          label: 'Nomor Telepon'
        },
        {
          column: 'npwp_number',
          label: 'Nomor NPWP'
        },
        {
          column: 'npwp_name',
          label: 'Nama Pemilik NPWP'
        }
      ];

      let missingData = checkedData.filter((data) => {
        return getters.profile[data.column] === null ||
          getters.profile[data.column] === undefined ||
          getters.profile[data.column] === '' ;
      });
      if(missingData.length > 0) {
        let message = 'Data profile anda belum lengkap : ';
        missingData.forEach((data, index) => {
          message += data.label;
          if(index < missingData.length - 1) {
            message += ', ';
          } else {
            message += '. Mohon Dilengkapi.'
          }
        })
        return message;
      }
    }
};
