<script>
import 'animate.css';
import axios from 'axios';

export default {
    name: "Project",
    props: {
        id: String,
    },
    data() {
        return {
            projectData: {},
        }
    },
    async created() {
        this.projectData = await this.fetchProject(this.id)

        $(document).ready(function () {
            $('.magnific-popup').magnificPopup({
                type: 'image'
            });

            $('[data-defocus="true"]').addClass("defocus");
        });
    },
    methods: {
        async fetchProject(id) {
            try {
                const response = await axios.get(`https://node-server-384520.nw.r.appspot.com/projects/${id}`, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                return response.data.projects;
            } catch (error) {
                console.log(error);
                return [];
            }
        },
    }
}
</script>

<template>
    <div class="project">
        <div class="columns">

            <!-- Left -->
            <div data-defocus="true" class="column is-3 project-sidebar">
                <h1 class="title is-1 has-text-white mb-6">{{ projectData.title }}</h1>

                <p class="subtitle is-5 has-text-white has-text-weight-light mb-6">{{ projectData.intro }}</p>

                <div v-if="projectData.liveUrl && projectData.liveUrl.length" class="project-links mb-6">
                    <div v-for="url in projectData.liveUrl">
                        <a :href="url" :alt="'See it live: ' + url" target="_blank"
                            class="subtitle is-6 has-text-white has-text-weight-light">
                            {{ url }}
                        </a>
                    </div>
                </div>

                <div v-if="projectData.skills && projectData.skills.length" class="skills is-flex mb-6">
                    <div v-for="skill in projectData.skills">
                        <span :class="['tag mr-2 mt-2', skill.color]">{{ skill.name }}</span>
                    </div>
                </div>
            </div>

            <!-- Main content -->
            <div v-if="projectData.content && projectData.content.length"
                class="column is-6 animate__animated animate__fadeInSlow custom-scrollbar project-content">

                <div v-for="(item, index) in projectData.content" :key="index">
                    <h3 v-if="item.subheader && item.subheader.length"
                        class="subtitle is-3 has-text-weight-light has-text-white mb-3">{{ item.subheader }}</h3>

                    <p class="subtitle is-5 has-text-white mb-6">
                        {{ item.text }}
                    </p>
                </div>
            </div>

            <!-- Right -->
            <div v-if="projectData.media && projectData.media.length" data-defocus="true"
                class="column is-3 is-flex is-flex-wrap-wrap is-flex-direction-column is-align-content-center project-media">
                <div v-for="(item, index) in projectData.media" :key="index" class="project-media-wrapper">
                    <a :href="item.url" class="magnific-popup">
                        <img :src="item.url" :alt="item.name" class="image is-96x96 mb-4">
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.project {
    padding: 6rem 6rem 0;
    max-height: calc(100vh - 150px);
    height: 100%;
    overflow: hidden;
}

.project-masthead {
    margin-bottom: var(--mastheadHeight);
}

/* left */
.project-sidebar {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.project-sidebar h1 {
    width: 95%;
}

.project-sidebar h2,
.project-sidebar h3,
.project-sidebar h4,
.project-sidebar h5,
.project-sidebar p {
    width: 90%;
}

.project-sidebar .skills {
    flex: 0.3;
    width: 90%;
    flex-wrap: wrap;
}

.project-sidebar a {
    font-family: var(--bodyFont);
    flex: 0.6;
}

.project-links a {
    font-size: 0.8rem;
    line-height: 1.5;
}

/* middle */
.project-content {
    height: calc(100vh - var(--contentHeightCalc));
    padding: 3rem;
    overflow-y: scroll;
}

.project-content p {
    width: 90%;
    line-height: 1.75;
}


/* right */
.project-media {
    height: calc(100vh - var(--contentHeightCalc));
    padding: 3rem;
}

.project-media-wrapper {
    padding: 0 1rem 1rem 0;
}

.project-media a {
    opacity: 0.7 !important;
    transition: all 500ms ease-in;
}

.project-media a:hover {
    opacity: 1 !important;
    transition: all 500ms ease-in;
}

.project-media a img {
    box-shadow: var(--customBoxShadow);
}

.magnific-popup {
    animation: fadeInUp;
    animation-duration: 500ms;
    transition: all 500ms ease-in;
}

@media(max-device-width: 1400px) {
    .project {
        padding: 6rem 10rem !important;
    }
}
</style>
