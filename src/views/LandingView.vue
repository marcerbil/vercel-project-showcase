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
                            <h1 class="text-bg-gradient title mb-0">Full stack developer &amp;</h1>
                            <h1 class="text-bg-gradient text-bg-gradient--reversed title mb-0"> designer</h1>
                        </div>
                        <div class="grid-item-middle">
                            <h2 class="subtitle is-4 has-text-white pr-6">
                                I'm Marc, a UK-based full stack dev. I dabble in different projects and areas, but my
                                passion is in creating sleek <span class="has-text-weight-bold">front ends</span> & <span
                                    class="has-text-weight-bold">UI</span>.
                            </h2>
                        </div>
                        <div class="grid-item-bottom">
                            <div class="cta">
                                <router-link :to="{ name: 'projects' }" class="button primary mr-3">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <Icon icon="ph:code" />
                                        </span>
                                        <span>See my work</span>
                                    </span> 
                                </router-link>

                                <a href="https://www.linkedin.com/in/marc-erbil-11646294/" class="button secondary">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <Icon icon="ph:linkedin-logo" />
                                        </span>
                                        <span>Contact</span>
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

.grid-item-top {
    grid-row-start: 1;
    grid-row-end: 2;
}

.grid-item-middle {
    grid-row-start: 2;
}

.grid-item-bottom {
    grid-row-start: 4;
}

.landing {
    height: 100%;
    padding: 3rem 7rem 0;
}

.title {
    font-size: 5rem;
    width: 90%;
    line-height: 1;
}

.subtitle {
    width: 84%;
}

.cta .button {
    vertical-align: middle;
}

.button.primary {
    background-color: rgb(129, 197, 212);
}

.button.secondary {
    background-color: antiquewhite;
}

.custom-icon svg {
    width: 20px;
}

/* MEDIA QUERIES */

@media(max-device-width: 1400px) {
  :root {
    --mastheadHeight: 100px;
  }
}

/* Projects list */
@media(max-device-width: 1200px) {
  .grid-container {
    width: 100%;
  }
}


@media(max-device-width: 450px) {
  .is-fullheight {
    max-height: 500px;
  }
}
</style>