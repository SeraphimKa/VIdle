<script setup lang="ts">
import { ref } from 'vue'
//utils
import upgradeEffects from '../utils/upgradeEffects';

//stores
import { usePointsStore } from '../stores/points';
import { useUpgradesStore } from '../stores/upgrades';
const pointsStore = usePointsStore();
const upgradesStore = useUpgradesStore();

//props
const { upgradeID } = defineProps<{
    upgradeID: number
}>();

//types
import type { Upgrade } from '../types';

const upgrade = ref(upgradesStore.upgrades.find(upgrade => upgrade.id === upgradeID) as Upgrade);


const handleUpgrade = () => {
    console.log(pointsStore.points >= upgrade.value.price)
    if (pointsStore.points >= upgrade.value.price) {
        pointsStore.reduce(upgrade.value.price);
        upgrade.value.bought = true //update local value
        upgradesStore.setBought(upgradeID, true) //update upgrade store
        upgradeEffects[upgrade.value.id]() //update upgrade effects
    }
}

</script>


<template>
    <div class="upgrade bg-dark rounded-md p-1" v-if="upgrade.bought === false">
        <h3 class="name text-4xl">{{ upgrade.name }}</h3>
        <p class="desc text-lg text-secondary px-3 h-20">{{ upgrade.description }}</p>
        <div class="pricebar flex justify-between text-lg mx-3 bg-secondary rounded px-3 cursor-pointer hover:bg-primary hover:text-secondary"
            @click.prevent="handleUpgrade()">
            <div class="buy font-semibold">Price:</div>
            <div class="price">{{ upgrade.price }}</div>
        </div>
    </div>
</template>