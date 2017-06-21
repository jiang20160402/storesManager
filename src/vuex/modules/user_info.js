// content
import {
  SET_BASEINFO,
} from '../mutation_types'

const state = {
    id: '',
    accessToken: '',
    loginName: ''
}

const mutations = {
    [SET_BASEINFO] (state, data) {
        try {
            state.id = data.id
            state.loginName = data.loginName
            state.accessToken = data.accessToken
        } catch (err) {
            console.log(err)
        }
    }
}

export default {
    state,
    mutations
}
