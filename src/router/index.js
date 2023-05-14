import { createRouter, createWebHistory } from 'vue-router'
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
      meta: { 
        title: 'Marc Erbil | Full stack developer' 
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: { 
        title: 'Marc Erbil | Projects'
      }
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectView,
      props: true,
      meta: { 
        title: 'Marc Erbil | Projects'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});


export default router
