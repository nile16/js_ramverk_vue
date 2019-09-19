import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Week from '@/components/Week'

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
    }
  ]
})
