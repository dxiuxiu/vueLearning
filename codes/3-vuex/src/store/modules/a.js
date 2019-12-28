
const state = {
    money:0,
    loading:false
}

const mutations = {
    add(state){
        console.log(state)
        state.money++
    },

    reduce(state){
        state.money--
    },
    toggleLoading(state){
        const loading = state.loading
        state.loading = !loading
        console.log(state.loading)
    },
}

/** actions 中通过 commit 触发 mutations 中的数据*/
const actions = {
    add:({commit})=>{
        commit('add')
    },
    reduce:({commit}) =>{
        commit('reduce')
    },
    asyncAdd({ commit }){
        commit('toggleLoading')
        setTimeout(function(){
            /** 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。 */
            commit('add')
            commit('toggleLoading')
        },1000)

        // commit('add')
    },
    toggleLoading({commit}){
        commit('toggleLoading')
    }
}

/** 创建 store */
export default {
    namespaced: true, // 开启命名空间
    state,
    mutations,
    actions
}