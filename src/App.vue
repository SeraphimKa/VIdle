<script setup>
//components
import NavBar from './components/NavBar.vue'

//Vue tools
import { RouterView } from 'vue-router'


</script>

<template>
  <div class="container w-screen flex flex-col items-center justify-center">
    <NavBar />
    <RouterView class="flex-grow" />
  </div>
</template>