
const state = {
    count:0
}

const mutations = {
    add(state,param){
        state.count = state.count+param
    },

    reduce(state){
        state.count--
    }
}

/** actions 中通过 commit 触发 mutations 中的数据*/
const actions = {
    add:({commit},param)=>{
        commit('add',param)
    },
    reduce:({commit}) =>{
        commit('reduce')
    }
}

/** 创建 store */
export default {
    namespaced: true, // 开启命名空间
    state,
    mutations,
    actions
}