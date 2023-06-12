<script setup lang="ts">
//utils
import upgradeEffects from '../utils/upgradeEffects';

//props
const { upgrade } = defineProps<{
    upgrade: {
        id: number,
        name: string,
        description: string,
        price: number
        bought: boolean
    }
}>();

const handleUpgrade = () => {
    upgrade.bought = true
    upgradeEffects[upgrade.id]()
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