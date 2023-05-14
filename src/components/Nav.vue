<script>
import { Icon } from '@iconify/vue';

export default {
    name: "Nav",
    components: {
        Icon,
    },
    data() {
        return {
            isMenuOpen: Boolean
        }
    },
    created() {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        if (mediaQuery.matches) {
            this.isMenuOpen = false;
        } else {
            this.isMenuOpen = true;
        }
    }
}
</script>

<template>
    <nav class="navbar has-background-transparent animate__fadeInSlow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="../assets/logo.svg" class="logo">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNavigation"
                @click="this.isMenuOpen = !this.isMenuOpen;">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>

            <span class="name">
                Marc Erbil
            </span>
        </div>

        <div id="mainNavigation" class="navbar-menu" v-if=" isMenuOpen ">
            <div class="navbar-end">
                <div class="navbar-item mr-3">
                    <router-link :to=" { name: 'landing' } ">
                        <span class="icon-text">
                            <span class="icon">
                                <Icon icon="ph:house-line" />
                            </span>
                            <span class="text-decoration-underline">Home</span>
                        </span>
                    </router-link>
                </div>
                <div class="navbar-item mr-4">
                    <router-link :to=" { name: 'projects' } ">
                        <span class="icon-text">
                            <span class="icon">
                                <Icon icon="ph:code" />
                            </span>
                            <span class="text-decoration-underline">Projects</span>
                        </span>
                    </router-link>
                </div>
                <div class="navbar-item">
                    <a href="https://www.linkedin.com/in/marc-erbil-11646294/" class="button-custom button-custom--link">
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

    </nav>
</template>

<style scoped>
.navbar {
    font-family: var(--titleFont);
    font-weight: 700;
    padding: 3rem 6rem 0;
}

@media(max-device-width: 500px) {
    .navbar {
        padding: 1rem 1rem 0;
    }

    .navbar-burger {
        margin-top: 10px;
    }

    .navbar-menu {
        display: unset;
        background-color: transparent;
    }
}

.navbar a {
    font-weight: 700;
    font-size: 1rem;
    color: var(--textAccentColor);
}

.navbar-brand .name {
    align-self: center;
    font-weight: 500;
    font-size: 1.1rem;
    color: #ececec;
}

.logo {
    width: 64px;
    max-height: unset;
}
</style>