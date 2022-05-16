import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main/home'
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main/main.vue'),
    children: [
      {
        path: '/main/home',
        name: 'home',
        component: () => import('../views/main/home/home.vue')
      },
      {
        path: '/main/goods',
        name: 'goods',
        component: () => import('../views/main/goods/goods.vue')
      },
      {
        path: '/main/users',
        name: 'users',
        component: () => import('../views/main/users/users.vue')
      },
      {
        path: '/main/page1',
        name: 'page1',
        component: () => import('../views/main/others/page1.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (to.path !== '/login' && !token) {
    next('/login')
  } else {
    next()
  }
}) */

export default router
