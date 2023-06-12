
<script setup>
//components
import Upgrades from '@/components/Upgrades.vue'

//Vue tools
import { onMounted } from 'vue'

//stores
import { usePointsStore } from '@/stores/points'
import { useUpgradesStore } from '@/stores/upgrades'

//data
import upgrades from '@/data/upgrades.json'

const pointsStore = usePointsStore()
const upgradesStore = useUpgradesStore()

onMounted(() => {
    if (localStorage.points) {
        pointsStore.points = parseInt(localStorage.points)
    }
    if (localStorage.upgrades) {
        upgradesStore.upgrades = JSON.parse(localStorage.upgrades)
    }
    else {
        localStorage.upgrades = JSON.stringify(upgrades)
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