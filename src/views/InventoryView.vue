
<script setup>
import { ref } from 'vue'


const inventorySlots = ref(30)
</script>

<template>
    <div class="inventory-container flex-grow">
        <div class="inventory flex flex-wrap gap-10 bg-light min-w-[900px] justify-center items-center p-20">
            <div v-for="i in inventorySlots" :key="i" class="slot flex flex-col items-center bg-dark w-[120px] h-[120px]">
                <div class="item-name font-semibold text-2xl">Item</div>

                <img class="item-img w-full" src="https://source.unsplash.com/random" />
            </div>
        </div>
    </div>
</template>
