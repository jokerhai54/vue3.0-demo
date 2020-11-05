import {createRouter, createWebHistory} from 'vue-router'
//1.createWebHashHistory 哈希# 
//2.createWebHistory 历史记录  

const routes = [
  {
    path: '/',
    redirect: '/composition_API'
  },
  {
    path: '/composition_API',
    component: () => import('@/views/father/index.vue'),
    meta: {
      name: "composition_API"
    }
  },
  {
    path: '/reactive',
    component: () => import('@/views/reactive/index.vue'),
    meta: {
      name: "reactive"
    }
  },
  {
    path: '/ref',
    component: () => import('@/views/ref/index.vue'),
    meta: {
      name: "ref"
    }
  },
  {
    path: '/com&watch',
    component: () => import('@/views/computedORwatch/index.vue'),
    meta: {
      name: "com&watch"
    }
  },
  {
    path: '/hook',
    component: () => import('@/views/hook/index.vue'),
    meta: {
      name: "hook"
    }
  },
  {
    path: '/vuex',
    component: () => import('@/views/vuex/index.vue'),
    meta: {
      name: "vuex"
    }
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})