import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    children: [
      {
        path: '/home',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: '/line',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Line.vue')
      },
      {
        path: '/pie',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Pie.vue')
      },
      {
        path: '/bar',
        name: 'Bar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Bar.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
