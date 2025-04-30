import { createRouter, createWebHistory } from 'vue-router'
import Header from '@/components/Header.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import Page1 from '@/pages/Page1.vue'
import Page2 from '@/pages/Page2.vue'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/profile', component: ProfilePage },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
