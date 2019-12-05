
const state = {
    money:0
}

const mutations = {
    add(state){
        state.money++
    },

    reduce(state){
        state.money--
    }
}

/** actions 中通过 commit 触发 mutations 中的数据*/
const actions = {
    add:({commit})=>{
        commit('add')
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