export const state = () => ({
  listdata: {}
})

export const mutations = {
  save(state, [key, value]) {
    state.listdata[key] = value
  },
  remove(state, value) {
    state.listdata.splice(state.listdata.indexOf(value), 1)
  },
  clear(state){

  }
}
