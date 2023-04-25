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
                            <h5 class="title has-text-white is-4">{{ project.title }}</h5>
                        </div>
                    </div>

                    <div class="content">
                        <p class="has-text-white is-size-6">
                            {{ project.intro }}
                        </p>

                        <!-- load project, pass in id -->
                        <router-link :to="{ name: 'project', params: { id: project.id } }"
                            class="is-underlined has-text-white mt-3 link">
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
.card {
    margin: 0 auto 6rem;
    min-height: 465px;
    background-color: var(--accentColor);
    color: var(--textColor);
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
