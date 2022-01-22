import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Addproject from '../views/Addproject.vue'
import Editproject from '../views/Editproject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Addproject',
    component: Addproject
  },
  {
    path: '/projects/:id',
    name: 'Editproject',
    component: Editproject,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
