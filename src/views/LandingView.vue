<script>
import Nav from '../components/Nav.vue'
import { Icon } from '@iconify/vue';

export default {
    name: 'LandingView',
    components: {
        Nav,
        Icon
    },
}
</script>

<template>
    <div class="main main-landing">

        <Nav />

        <div class="landing">

            <div class="columns is-fullheight">
                <div class="column is-half-desktop">
                    <div class="grid-container">
                        <div class="grid-item-top">
                            <h1 class="text-bg-gradient title mb-0">//developer</h1>
                            <h1 class="text-bg-gradient text-bg-gradient--reversed title mb-0">//designer</h1>
                            <h1 class="text-bg-gradient title mb-0">//creative</h1>
                        </div>
                        <div class="grid-item-middle">
                            <h2 class="subtitle pr-6">
                                I'm Marc, a UK-based full stack dev. I dabble in different projects and areas, but my
                                passion is in creating sleek <span class="has-text-weight-bold">front ends</span> & <span
                                    class="has-text-weight-bold">UI</span>.
                            </h2>
                            <h2 class="subtitle pr-6">
                                Got a project you'd like to discuss? <a href="mailto:marcerbil@gmail.com">Let's talk.</a>
                            </h2>
                        </div>
                        <div class="grid-item-bottom">
                            <div class="cta">
                                <router-link :to="{ name: 'projects' }" class="button-custom button-custom--cta mr-5">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <Icon icon="ph:code" />
                                        </span>
                                        <span>What I can do</span>
                                    </span>
                                </router-link>

                                <a href="https://www.linkedin.com/in/marc-erbil-11646294/" class="button-custom">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <Icon icon="ph:linkedin-logo" />
                                        </span>
                                        <span>Hire me</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="column is-one-third is-flex is-flex-direction-column is-justify-content-center">
                </div> -->

            </div>

        </div>
    </div>
</template>

<style scoped>
.grid-container {
    display: grid;
    height: 100%;
}

@media(max-device-width: 1200px) {
    .grid-container {
        width: 100%;
    }
}

.grid-item-top {
    grid-row-start: 1;
    grid-row-end: 2;
}

.grid-item-middle {
    grid-row-start: 2;
}

.grid-item-middle a {
    color: var(--textColor);
    text-decoration: underline;
}

.grid-item-bottom {
    grid-row-start: 4;
}

.landing {
    height: 100%;
    padding: 5rem 7rem 0;
}

@media (max-device-width: 500px) {
    .landing {
        padding: 2rem 2rem 0;    
    }
}

.title {
    font-size: 6rem;
    width: 90%;
    line-height: 1;
}

@media (max-device-width: 500px) {
    .title {
        font-size: 3.5rem;
        display: inline;
    }
}

.subtitle {
    width: 80%;
    font-family: var(--bodyFont);
    font-size: 1.75rem;
    line-height: 1.4;
}

@media (max-device-width: 500px) {
    .subtitle {
        width: 100%;
        padding: 0 !Important;
        font-size: 1.75rem;
    }
}

.cta .button {
    vertical-align: middle;
}

.button-custom {
    background-color: white;
    padding: 1rem;
    border: 2px solid #9b79f2;
    border-radius: 4px;
    box-shadow: var(--customBoxShadow);
    transition: all 300ms ease;
}

.button-custom--cta {
    background-color: #9b79f2;
    color: white;
}

.button-custom:hover {
    box-shadow: none;
    transition: all 300ms ease;
}


.button-custom 

.custom-icon svg {
    width: 20px;
}
</style>