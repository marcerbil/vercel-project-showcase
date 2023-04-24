<script>
import { Icon } from '@iconify/vue';

export default {
    name: "Nav",
    components: {
        Icon,
    }
}
</script>

<template>
    <nav class="navbar has-background-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="../assets/logo.svg" class="logo">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="mainNavigation" class="navbar-menu">

            <div class="navbar-end">
                <div class="navbar-item ">
                    <router-link :to="{ name: 'landing' }">
                        <span class="icon-text">
                            <span class="icon">
                                <Icon icon="ph:house-line" />
                            </span>
                            <span>Home</span>
                        </span>
                    </router-link>
                </div>
                <div class="navbar-item mr-3">
                    <router-link :to="{ name: 'projects' }">
                        <span class="icon-text">
                            <span class="icon">
                                <Icon icon="ph:code" />
                            </span>
                            <span>Projects</span>
                        </span>
                    </router-link>
                </div>
                <div class="navbar-item">
                    <a href="https://www.linkedin.com/in/marc-erbil-11646294/">
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
    </nav>
</template>

<style scoped>
.navbar {
    font-family: var(--titleFont);
    font-weight: 700;
    padding: 3rem 6rem 0;
}

.navbar a {
    color: #fff;
    font-weight: 700;
}

.logo {
    width: 64px;
    max-height: unset;
}
</style>