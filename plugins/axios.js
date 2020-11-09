import Vue from 'vue'

export default function ({ store, $axios, redirect }) {
  $axios.onRequest(config => {
    config.withCredentials = false
    config.headers.common['Accept'] = 'application/json'
    config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded', 'multipart/form-data'
    if(store.state.token) {
      config.headers.common['Authorization'] = store.state.token
    }
  })
}
