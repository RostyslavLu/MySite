import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ResumeView from '@/views/ResumeView.vue'
import ContactView from '@/views/ContactView.vue'
import App from '@/App.vue'
// The routes array is an array of objects that define the routes for the application
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of portfolio website of Rostyslav Luchyshyn'
        },
        {
          name: 'author',
          content: 'Rostyslav Luchyshyn'
        },
        {
          name: 'keywords',
          content: 'web developer, web design, web development, web design, HTML, CSS, JavaScript, Vue.js, React.js, Node.js, Express.js'
        }
      ]
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
    meta: {
      title: 'Projects',
      metaTags: [
        {
          name: 'description',
          content: 'The projects page of portfolio website of Rostyslav Luchyshyn'
        },
        {
          name: 'author',
          content: 'Rostyslav Luchyshyn'
        },
        {
          name: 'keywords',
          content: 'web developer, web design, web development, web design, HTML, CSS, JavaScript, Vue.js, React.js, Node.js, Express.js'
        }
      ]
    }
  },
  {
    path: '/resume',
    name: 'About me',
    component: ResumeView,
    meta: {
      title: 'About me',
      metaTags: [
        {
          name: 'description',
          content: 'The resume page of portfolio website of Rostyslav Luchyshyn'
        },
        {
          name: 'author',
          content: 'Rostyslav Luchyshyn'
        },
        {
          name: 'keywords',
          content: 'web developer, web design, web development, web design, HTML, CSS, JavaScript, Vue.js, React.js, Node.js, Express.js'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contact',
      metaTags: [
        {
          name: 'description',
          content: 'The contact page of portfolio website of Rostyslav Luchyshyn'
        },
        {
          name: 'author',
          content: 'Rostyslav Luchyshyn'
        },
        {
          name: 'keywords',
          content: 'web developer, web design, web development, web design, HTML, CSS, JavaScript, Vue.js, React.js, Node.js, Express.js'
        }
      ]
    }
  },
  {
    path: '/:locale',
    component: App
  }
]
// The createRouter function is called with an object that contains the history mode and the routes array
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `RL: ${to.name}`
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
  if (!nearestWithMeta) return next()
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })
    return tag
  }).forEach(tag => document.head.appendChild(tag))
  next()
})

export default router
