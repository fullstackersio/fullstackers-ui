import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Presentations from '@/components/Presentations'
import Presentation from '@/components/Presentation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/presentations/:id',
      name: 'Presentation',
      component: Presentation
    },
    {
      path: '/presentations',
      name: 'Presentations',
      component: Presentations
    }
  ]
})
