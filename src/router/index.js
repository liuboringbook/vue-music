import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank/rank.vue'
import Recommend from 'components/recommend/recommend.vue'
import Search from '@/components/search/search.vue'
import Singer from '@/components/singer/singer.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routers:[
    {
      path:'/',
      redirect:"/recommend"
    },
    {
      path:'/recommend',
      components: Recommend
    },
    {
      path:'/singer',
      components: Singer
    },
    {
      path:'/rank',
      components:Rank
    },
    {
      path:'search',
      component: Search
    }
  ]
})
