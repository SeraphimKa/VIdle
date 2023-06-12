<script setup>
//components
import Upgrade from './Upgrade.vue'

//data
import upgrades from '@/data/upgrades.json'


</script>


<template>
    <div
        class="upgrades-container flex gap-4 text-primary text-6xl bg-light shadow shadow-secondary m-5 p-2 rounded-lg min-w-[100px] min-h-[100px] text-center">
        <div v-for="(upgrade) in upgrades" :key="upgrade.id" class="upgrade-loop">
            <Upgrade :upgrade="upgrade" />
        </div>
    </div>
</template>

<style scoped>
.name {
    text-shadow: 0 0 2px greenyellow, 0 0 3px yellow, 0 0 4px red;
}
</style>