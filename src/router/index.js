import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //   path: '/a',
        //   name: 'HelloWorld',
        //   component: HelloWorld
        // },
        {
          path: '/',
          name: 'home',
          component: Home
        }
    ]
})
