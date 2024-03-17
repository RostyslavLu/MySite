import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EducationView from '@/views/EducationView.vue'
import SkillView from '@/views/SkillView.vue'
import ResumeView from '@/views/ResumeView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/education',
    name: 'Education',
    component: EducationView
  },
  {
    path: '/skill',
    name: 'Skills',
    component: SkillView
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
