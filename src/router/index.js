import {createRouter, createWebHistory} from 'vue-router'
//1.createWebHashHistory 哈希# 
//2.createWebHistory 历史记录  

const routes = [
  {
    path: '/',
    redirect: '/composition_API'
  },
  {
    title1:"Composition API",
    title2:"API",
    path: '/composition_API',
    component: () => import('@/views/father/index.vue'),
    meta: {
      name: "composition_API"
    }
  },
  {
    title1:"Reactive类工具API",
    title2:"react-api",
    path: '/reactive',
    component: () => import('@/views/reactive/index.vue'),
    meta: {
      name: "reactive"
    }
  },
  {
    title1:"ref类工具API",
    title2:"ref-api",
    path: '/ref',
    component: () => import('@/views/ref/index.vue'),
    meta: {
      name: "ref"
    }
  },
  {
    title1:"computed AND watch",
    title2:"com&watch",
    path: '/com&watch',
    component: () => import('@/views/computedORwatch/index.vue'),
    meta: {
      name: "com&watch"
    }
  },
  {
    title1:"HOOK",
    title2:"hook-function",
    path: '/hook',
    component: () => import('@/views/hook/index.vue'),
    meta: {
      name: "hook"
    }
  },
  {
    title1:"VUEX_exercise",
    title2:"VUEX",
    path: '/vuex',
    component: () => import('@/views/vuex/index.vue'),
    meta: {
      name: "vuex"
    }
  },
  {
    title1:"DATA_map",
    title2:"MAP",
    path: '/data-map',
    component: () => import('@/views/data_map/index.vue'),
    meta: {
      name: "data-map"
    }
  },
  {
    title1:"THREE",
    title2:"three",
    path: '/three',
    component: () => import('@/views/three/index.vue'),
    meta: {
      name: "three"
    }
  },
  {
    title1:"Table_Echarts",
    title2:"table_echarts",
    path: '/table_echarts',
    component: () => import('@/views/table_echarts/index.vue'),
    meta: {
      name: "table_echarts"
    }
  },
  {
    title1:"entertainment",
    title2:"her",
    path: '/entertainment',
    component: () => import('@/views/entertainment/index.vue'),
    meta: {
      name: "entertainment"
    }
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})

