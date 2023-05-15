<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="nav-container flex">
        <nav class="nav flex-grow shadow shadow-secondary">
            <RouterLink to="/"
                class="title font-semibold text-primary text-6xl bg-dark shadow shadow-secondary m-5 pt-3 pb-4 px-10 rounded-2xl font-serif underline decoration-secondary hover:text-secondary hover:decoration-primary">
                VIdle
            </RouterLink>
            <ul class="navitems">
                <RouterLink active-class="active" class="selection-item" to="/map">Map</RouterLink>
                <RouterLink active-class="active" class="selection-item" to="/character">Character</RouterLink>
                <RouterLink active-class="active" class="selection-item" to="/inventory">Inventory</RouterLink>
                <RouterLink active-class="active" class="selection-item" to="/">/</RouterLink>
                <RouterLink active-class="active" class="selection-item" to="/">/</RouterLink>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.title {
    text-shadow: 2px 2px 3px var(--c-secondary);
    font-family: 'Gravitas One';
    transition: color 0.3s, background-color 0.3s;
}

.title:hover {
    text-shadow: 2px 2px 3px var(--c-primary);
}

nav {
    display: flex;
    justify-content: center;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    background: var(--c-light);
    z-index: 100;
}

.active {
    text-shadow: 2px 2px 3px var(--c-primary);
    color: var(--c-secondary);
}
</style>
