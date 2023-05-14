
<script setup>
//components
import Upgrades from '@/components/Upgrades.vue'

//Vue tools
import { onMounted } from 'vue'
import { usePointsStore } from '@/stores/points'


const pointsStore = usePointsStore()


onMounted(() => {
    if (localStorage.points) {
        pointsStore.points = parseInt(localStorage.points)
    }
})




</script>


<template>
    <div class="home-container flex flex-col justify-between items-center">
        <div
            class="points font-semibold text-primary text-6xl bg-light shadow shadow-secondary m-5 p-2 rounded-lg min-w-[100px] text-center select-none">
            {{ pointsStore.points }}
        </div>
        <button @click="pointsStore.increment()" class="btn px-16 py-10 text-3xl">+</button>
        <Upgrades />
    </div>
</template>