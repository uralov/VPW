import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History'
import Builders from '../views/Builders'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/builders',
    name: 'builders',
    component: Builders
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
