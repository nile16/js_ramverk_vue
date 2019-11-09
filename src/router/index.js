import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Week from '@/components/Week'
import Reg from '@/components/Reg'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Write from '@/components/Write'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Me',
        component: Me
    },
    {
        path: '/reports/week/:kmom',
        name: 'Redovisning',
        component: Week
    },
    {
        path: '/reg',
        name: 'Registrering',
        component: Reg
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/write',
        name: 'Write',
        component: Write
    }
  ]
})
