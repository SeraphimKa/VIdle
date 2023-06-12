<script setup>
//vue tools
import { onMounted } from 'vue'
//components
import Upgrade from './UpgradeCard.vue'

//data
import upgrades from '@/data/upgrades.json'

//stores
import { usePointsStore } from '../stores/points';
import { useUpgradesStore } from '../stores/upgrades';
const pointsStore = usePointsStore();
const upgradesStore = useUpgradesStore();

//utils
import upgradeEffects from '../utils/upgradeEffects';
import loadStores from '../utils/loadStores';

onMounted(() => {
    loadStores[0]
    loadStores[1]
    upgradesStore.upgrades.map((upgrade) => {
        upgrade.bought === true &&
            upgradeEffects[upgrade.id]()
    })
})
</script>


<template>
    <div
        class="upgrades-container flex gap-4 text-primary text-6xl bg-light shadow shadow-secondary m-5 p-2 rounded-lg min-w-[100px] min-h-[100px] text-center">
        <div v-for="(upgrade) in upgrades" :key="upgrade.id" class="upgrade-loop">
            <Upgrade :upgradeID="upgrade.id" />
        </div>
    </div>
</template>

<style scoped>
.name {
    text-shadow: 0 0 2px greenyellow, 0 0 3px yellow, 0 0 4px red;
}
</style>