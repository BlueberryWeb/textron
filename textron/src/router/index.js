import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login', 
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/welcome',
      name: 'welcome', 
      component: () => import('../views/Welcome.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/Home.vue')
    }
    
  ]
})

export default router
