import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/teams',
      name: 'teams',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "teams" */ './views/Teams.vue')
    },
    {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ './views/Chat.vue')
  },
  {
    path: '/moreInfoUpcomingMatches',
    name: 'moreInfoUpcomingMatches',
    component: () => import(/* webpackChunkName: "moreInfoUpcomingMatches" */ './views/MoreInfoUpcomingMatches.vue')
  },
  {
    path: '/moreInfoFinishedMatches',
    name: 'moreInfoFinishedMatches',
    component: () => import(/* webpackChunkName: "moreInfoFinishedMatches" */ './views/MoreInfoFinishedMatches.vue')
  },
  {
    path: '/teamDetails',
    name: 'teamDetails',
    component: () => import(/* webpackChunkName: "teamDetails" */ './views/TeamDetails.vue')
  }
  ]
})
