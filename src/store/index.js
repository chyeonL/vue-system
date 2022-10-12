import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './user'
import params from './params'

export default new Vuex.Store({
    modules:{
        user,params
    }
})