import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bbout from '../views/Bbout.vue'
import Cbout from '../views/Cbout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bbout',
    name: 'Bbout',
    component: Bbout
  },
  {
    path: '/cbout',
    name: 'Cbout',
    component: Cbout
  },
  {
    path:'/dati',
    name:'Dati',
    component: () => import('../views/Dati.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
