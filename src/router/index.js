import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import product from '../views/Catalogue-page'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product-page',
    component:product 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
