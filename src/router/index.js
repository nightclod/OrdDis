import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import List from '@/page/list'
import Details from '@/page/details'
import Shop from '@/page/shop'
import Mine from '@/page/mine'
import Login from '@/page/login'
import Register from '@/page/register'
import Forget from '@/page/forget'
import Amend from '@/page/mine/amend.vue'
import Person from '@/page/mine/person.vue'
import Site from '@/page/site'
import ModifySite from '@/page/site/modifySite.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/details/:num',
            name: 'details',
            component: Details
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/forget',
            name: 'forget',
            component: Forget
        },
        {
            path: '/amend',
            name: 'amend',
            component: Amend
        },
        {
            path: '/person',
            name: 'person',
            component: Person
        },
        {
            path: '/site',
            name: 'site',
            component: Site
        },
        {
            path: '/modifySite/:num',
            name: 'modifySite',
            component: ModifySite
        }
    ]
})
