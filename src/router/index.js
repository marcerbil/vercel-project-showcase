import { createRouter, createWebHistory } from 'vue-router'
const LandingView = () => import('../views/LandingView.vue')
const ProjectsView = () => import('../views/ProjectsView.vue')
const ProjectView = () => import('../views/ProjectView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectView,
      props: true
    }
  ]
})

export default router
