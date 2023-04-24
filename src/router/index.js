import { createRouter, createWebHistory } from 'vue-router'
// const LandingView = () => import('../views/LandingView.vue')
// const ProjectsView = () => import('../views/ProjectsView.vue')
// const ProjectView = () => import('../views/ProjectView.vue')

import LandingView from '../views/LandingView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
  history: createWebHistory("/"),
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
