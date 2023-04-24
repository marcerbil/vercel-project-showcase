<script>
import 'animate.css';
import Nav from '../components/Nav.vue'
import Project from '../components/Project.vue'

export default {
    name: "ProjectView",
    data() {
        return {
            id: String
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    components: {
        Nav,
        Project
    }
};
</script>
  
<template>
    <div class="animate__animated animate__fadeIn overflow-hidden-custom main main-bg">
        
        <Nav data-defocus="true" />
        <Project :id="id" />
        
    </div>
</template>