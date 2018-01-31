import Vue from 'vue'
import Router from 'vue-router'
import VideoDetail from '@/components/VideoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoDetail',
      component: VideoDetail
    }
  ]
})
