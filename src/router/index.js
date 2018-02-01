import Vue from 'vue'
import Router from 'vue-router'
import Presentation from '@/components/Presentation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Presentation',
      component: Presentation
    }
  ]
})
