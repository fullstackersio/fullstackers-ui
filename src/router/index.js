import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Presentations from '@/components/Presentations'
import Presentation from '@/components/Presentation'
import Tips from '@/components/Tips'
import Meetings from '@/components/Meetings'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
    },
    {
      path: '/tips',
      name: 'Tips',
      component: Tips
    },
    {
      path: '/meetings',
      name: 'Meetings',
      component: Meetings
    }
  ]
})
