<script setup>
//components
import NavBar from './components/NavBar.vue'

//Vue tools
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

//utils
import loadStores from './utils/loadStores'


onMounted(() => {
  loadStores()
})
</script>

<template>
  <div class="container w-screen flex flex-col items-center justify-center">
    <NavBar />
    <RouterView class="flex-grow" />
  </div>
</template>