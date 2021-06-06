import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carousel',
    name: 'Carousel-Page',
    // 延迟加载，访问到时才加载
    component: () => import(/* webpackChunkName: "carousel" */ '../pages/Carousel-Page.vue')
  },
  {
    path: '/magnifier',
    name: 'Magnifier-Page',
    // 延迟加载，访问到时才加载
    component: () => import(/* webpackChunkName: "magnifier" */ '../pages/Magnifier-Page.vue')
  },
  {
    path: '/treemenu',
    name: 'TreeMenu-Page',
    // 延迟加载，访问到时才加载
    component: () => import(/* webpackChunkName: "treemenu" */ '../pages/TreeMenu-Page.vue')
  },
  {
    path: '/selector',
    name: 'Selector-Page',
    // 延迟加载，访问到时才加载
    component: () => import(/* webpackChunkName: "selector" */ '../pages/Selector-Page.vue')
  },
  {
    path: '/stars',
    name: 'Stars-Page',
    // 延迟加载，访问到时才加载
    component: () => import(/* webpackChunkName: "stars" */ '../pages/Stars-Page.vue')
  },
  {
    path: '/modal',
    name: 'Modal-Page',
    // 延迟加载，访问到时才加载
    component: () => import(/* webpackChunkName: "modal" */ '../pages/Modal-Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
