import * as types from '../mutation_types'
import Vue from 'vue'

let localStorage = window.localStorage
let storeBaseInfo = (data) => {
    localStorage.setItem('sosoBaseInfo', JSON.stringify(data))
}
// 获取存储在localStorage中的数据
export const getStore = ({ dispatch, state }) => {
    if (localStorage.getItem('sosoBaseInfo')) {
        let data = JSON.parse(localStorage.getItem('sosoBaseInfo'))
        dispatch(types.SET_BASEINFO, data)
    }
}
// 设置基本信息
export const setBaseInfo = ({ dispatch, state}, token, callback) => {
    Vue.http.post('/auth/user', token)
        .then((res) => {
            let data = JSON.parse(res.data)
            if (data.success) {
                
            }
        })
}