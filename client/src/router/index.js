import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhotoGalleryView from '@/views/PhotoGalleryView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ResumeView from '@/views/ResumeView.vue'
import ContactView from '@/views/ContactView.vue'
import App from '@/App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/photogallery',
    name: 'Photo Gallery',
    component: PhotoGalleryView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/resume',
    name: 'CV',
    component: ResumeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/:locale',
    component: App
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
