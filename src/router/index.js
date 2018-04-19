import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import List from '@/page/list'
import Shop from '@/page/shop'
import Mine from '@/page/mine'
import Login from '@/page/login'
import Register from '@/page/register'

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
        }
    ]
})
