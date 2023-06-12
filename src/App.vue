<script setup>
//components
import Navbar from './components/Navbar.vue'

//Vue tools
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="container w-screen flex flex-col items-center justify-center">
    <Navbar class="nav" />
    <RouterView class="flex-grow" />
  </div>
</template>