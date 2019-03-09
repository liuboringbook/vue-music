import Vue from 'vue'
import Router from 'vue-router'
import rank from '@/components/rank/rank.vue'
import recommend from '@/components/recommend/recommend.vue'
import search from '@/components/search/search.vue'
import singer from '@/components/singer/singer.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/rank',
      name: 'rank',
      component: 'rank'
    },
    {
      path:'/recommend',
      name: 'recommend',
      component: 'recommend'
    },
    {
      path:'/search',
      name: 'search',
      component: 'search'
    },
    {
      path:'/rank',
      name: 'singer',
      component: 'singer'
    }
  ]
})
