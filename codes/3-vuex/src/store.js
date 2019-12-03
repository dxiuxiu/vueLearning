import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:0
}

/** mutation 中修改 state */
const mutations = {
    increment(state){
        state.count++
    },

    decrement(state){
        state.count--
    }
}

/** actions 中通过 commit 触发 mutations 中的数据*/
const actions = {
    increment:({commit})=>{
        commit('increment')
    },
    decrement:({commit}) =>{
        commit('decrement')
    }
}

/** 创建 store */
export default new Vuex.Store({
    state,
    mutations,
    actions
})