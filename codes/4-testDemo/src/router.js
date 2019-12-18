import Vue from 'vue'
import VueRouter from 'vue-router'

import pageA from './pages/a.vue'
import pageB from './pages/b.vue'
import home from './pages/home.vue'

import routerTest from './pages/routerTest/index.vue'
import routerA from './pages/routerTest/a.vue'
import routerB from './pages/routerTest/b.vue'

import todolist from './pages/demo/todolist/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:home
    },
    {
        path:'/pagea',
        component:pageA
    },
    {
        path:'/pageb',
        component:pageB
    },
    {
        path:'routerTest',
        component:routerTest,
        children:[
            {
                path:'/routerTest/a',
                component:routerA
            },
            {
                path:'/routerTest/b',
                component:routerB
            },
        ],
    },
    {
        path:'/demo/todolist',
        component:todolist
    },
]

const router = new VueRouter({
    routes
})

export default router