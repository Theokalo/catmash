import Vue from 'vue'
import Router from 'vue-router'
import Arena from '@/components/Arena'
import Ranking from '@/components/Ranking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Arena',
      component: Arena
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    }
  ]
})
