<script setup>

//data
import upgrades from '@/data/upgrades.json'


</script>


<template>
    <div
        class="upgrades-container flex gap-4 text-primary text-6xl bg-light shadow shadow-secondary m-5 p-2 rounded-lg min-w-[100px] min-h-[100px] text-center">
        <div v-for="(upgrade) in upgrades" :key="upgrade.id" class="upgrade bg-dark">
            <h3 class="name text-4xl">{{ upgrade.name }}</h3>
            <p class=" desc text-lg text-secondary px-3 h-20">{{ upgrade.description }}</p>
            <footer class="price flex justify-between text-lg m-3 bg-secondary rounded px-3 cursor-pointer">
                <div class="buy font-semibold">Price:</div>
                <div class="price">{{ upgrade.price }}</div>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.name {
    text-shadow: 0 0 2px greenyellow, 0 0 3px yellow, 0 0 4px red;
}
</style>