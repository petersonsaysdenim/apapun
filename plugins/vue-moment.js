import Vue from 'vue'
import VueMoment from 'vue-moment'

const moment = require('moment')

Vue.use(VueMoment, {
    moment
})

console.log(Vue.moment().locale())
