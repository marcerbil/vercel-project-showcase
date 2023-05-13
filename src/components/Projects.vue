<script>
import 'animate.css';
import { Icon } from '@iconify/vue';

export default {
    name: 'Projects',
    props: {
        projects: Array
    },
    components: {
        Icon
    },
    methods: {
        openProject(id) {
            this.$router.push({ name: 'project', params: { id: id } })
        }
    }
}
</script>

<template>
    <div class="columns is-variable is-1 is-multiline animate__animated animate__fadeIn">

        <div class="projects-area-intro">
            <p>
                Hey there! Welcome to my portfolio section. Here you'll find some of the projects I've worked on as a full-stack/frontend developer. I'm passionate about creating user-friendly interfaces and building robust backends to power them. Feel free to take a look around and get a sense of my skills and style. If you have any questions or would like to discuss a potential project, don't hesitate to reach out!
            </p>
        </div>

        <div class="column is-one-third-desktop is-full-tablet is-full-mobile animate__animated animate__fadeIn"
            v-for="(project, index) in projects" :key="project.id">

            <div @click="openProject(project.id)" class="column is-10-desktop is-full-mobile is-clickable card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="project.media[0].url" :alt="project.media[0].name">
                    </figure>
                </div>
                <div class="card-content p-5">
                    <div class="media">
                        <div class="media-content">
                            <h5 class="title is-4">{{ project.title }}</h5>
                        </div>
                    </div>

                    <div class="content">
                        <p class="is-size-6">
                            {{ project.intro }}
                        </p>

                        <!-- load project, pass in id -->
                        <router-link :to="{ name: 'project', params: { id: project.id } }"
                            class="is-underlined mt-3 link">
                            Read more
                        </router-link>
                    </div>

                    <div v-if="project.skills && project.skills.length" class="skills is-flex is-flex-wrap-wrap">
                        <div v-for="(skill, index) in project.skills.slice(0, 3)" :key="index">
                            <span :class="['tag mr-2 mb-2', skill.color]">
                                <Icon :icon="skill.icon" />&nbsp;{{ skill.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.projects-area-intro {
    margin: 4rem auto 6rem;
    width: 70%;
}

.projects-area-intro p {
    text-align: center;
    line-height: 1.8;
}

.card {
    margin: 0 auto 6rem;
    min-height: 465px;
    background-color: var(--accentColor);
    color: var(--textColor);
    border: 1px solid #c3c3c3;
    box-shadow: var(--customBoxShadow);
    -webkit-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
}

.card:hover {
    max-height: 450px;
    box-shadow: none;
    margin-top: -12px;
    -webkit-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
}

.card-image {
    margin: -3rem auto 0;
    border-radius: 4px;
    max-height: 200px;
    overflow: hidden;
    padding: 1rem;
}

.card-image:first-child img {
    margin-top: 0;
}

.link {
    display: block;
    width: max-content;
}
</style>
