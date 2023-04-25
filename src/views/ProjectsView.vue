<script>
import Nav from '../components/Nav.vue'
import Projects from '../components/Projects.vue'
import AnimatedBackground from '../components/AnimatedBackground.vue'

import axios from 'axios';

export default {
  name: 'ProjectsView',
  components: {
    Projects,
    Nav,
    AnimatedBackground
  },
  data() {
    return {
      projects: []
    }
  },
  async created() {
    this.projects = await this.fetchProjects()
  },
  methods: {
    async fetchProjects() {

      try {
        const response = await axios.get('https://node-server-384520.nw.r.appspot.com/projects/', {
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
        });
        return response.data;
      } catch (error) {
        console.log(error);
        return [];
      }

    },
  }
}
</script>

<template>
  <div class="main main-bg overflow-scroll-custom">
    <Nav />
    <AnimatedBackground />

    <div class="projects">
      <Projects :projects="projects" />
    </div>
  </div>
</template>

<style scoped>
.projects {
  padding: 6rem 6rem 0;
}

@media(max-device-width: 1200px) {
  .card {
    min-height: unset !important;
    margin: 0 auto 4rem !important;
  }

  .card-content {
    padding: 12px !important;
  }

  .projects {
    padding: 4rem 2rem 0 !important;
  }

}

@media(max-device-width: 768px) {
  .card {
    margin: 0 auto !important;
  }

  .projects {
    width: 70% !important;
    margin: 0 auto !important;
  }
}

@media(max-device-width: 500px) {
  .projects {
    width: 85% !important;
    padding: 4rem 0 !important;
  }
}
</style>